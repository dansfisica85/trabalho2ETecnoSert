export async function submitQuizResults(answers, studentInfo, loginData, questions, room) {
    // Calculate score
    const score = Object.keys(answers).filter(qId => 
        answers[qId] === questions.find(q => q.id == qId)?.correct
    ).length;

    // Prepare submission data for database
    const submissionData = {
        id: `submission-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        studentName: studentInfo.name,
        studentNumber: studentInfo.number,
        series: "2E - EM Colégio Tecno-Sert",
        email: loginData.email,
        answers: answers,
        submittedAt: new Date().toISOString(),
        score: score,
        totalQuestions: questions.length,
        questions: questions.map(q => ({
            id: q.id,
            question: q.question,
            options: q.options,
            correctAnswer: q.correct,
            studentAnswer: answers[q.id]
        }))
    };

    // Prepare data for Formspree
    const formspreeData = {
        studentName: studentInfo.name,
        studentNumber: studentInfo.number,
        email: loginData.email,
        score: score,
        totalQuestions: questions.length,
        percentage: ((score / questions.length) * 10).toFixed(1),
        submittedAt: new Date().toLocaleString('pt-BR'),
        answers: JSON.stringify(submissionData.questions, null, 2)
    };

    try {
        // Save to database
        if (room.collection) {
            await room.collection('quiz_submission').upsert(submissionData);
        }

        // Send to Formspree
        await fetch('https://formspree.io/f/xnnvpppd', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formspreeData)
        });

        return { success: true, score };
    } catch (error) {
        console.error('Error submitting quiz:', error);
        return { success: true, score };
    }
}