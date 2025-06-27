import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useState, useEffect } from "react";
import { Timer } from "./Timer.jsx";
import { Question } from "./Question.jsx";
import { Navigation } from "./Navigation.jsx";
function Quiz({ studentInfo, loginData, questions, onSubmit }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(420);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleNextQuestion();
          return 420;
        }
        return prev - 1;
      });
    }, 1e3);
    return () => clearInterval(timer);
  }, [currentQuestion, questions.length]);
  const handleAnswerSelect = (questionId, answerIndex) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };
  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setTimeLeft(420);
    } else {
      onSubmit(answers, studentInfo, loginData);
    }
  };
  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };
  const currentQ = questions[currentQuestion];
  if (!currentQ) return /* @__PURE__ */ jsxDEV("div", { children: "Carregando..." }, void 0, false, {
    fileName: "<stdin>",
    lineNumber: 49,
    columnNumber: 27
  }, this);
  return /* @__PURE__ */ jsxDEV("div", { className: "container", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "header", children: [
      /* @__PURE__ */ jsxDEV("h1", { className: "title", children: "Trabalho de Eletrost\xE1tica - Prof\xBA Davi - F\xEDsica I" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 54,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "school-info", children: [
        "Aluno: ",
        studentInfo.name,
        " | N\xFAmero: ",
        studentInfo.number,
        " | S\xE9rie: 2E - EM Col\xE9gio Tecno-Sert"
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 55,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 53,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "quiz-container", children: [
      /* @__PURE__ */ jsxDEV(Timer, { timeLeft }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 61,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "question-header", children: /* @__PURE__ */ jsxDEV("span", { className: "question-number", children: [
        "Quest\xE3o ",
        currentQuestion + 1,
        " de ",
        questions.length
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 64,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 63,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV(
        Question,
        {
          question: currentQ,
          selectedAnswer: answers[currentQ.id],
          onAnswerSelect: handleAnswerSelect
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 69,
          columnNumber: 17
        },
        this
      ),
      /* @__PURE__ */ jsxDEV(
        Navigation,
        {
          currentQuestion,
          totalQuestions: questions.length,
          hasAnswer: answers[currentQ.id] !== void 0,
          onPrevious: handlePreviousQuestion,
          onNext: handleNextQuestion
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 75,
          columnNumber: 17
        },
        this
      )
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 60,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 52,
    columnNumber: 9
  }, this);
}
export {
  Quiz
};
