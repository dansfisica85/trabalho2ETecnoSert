import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { LoginForm } from "./components/LoginForm.jsx";
import { Quiz } from "./components/Quiz.jsx";
import { SubmissionSuccess } from "./components/SubmissionSuccess.jsx";
import { AdminPanel } from "./components/AdminPanel.jsx";
import { questions as allQuestions } from "./data/questions.js";
import { submitQuizResults } from "./utils/emailService.js";
class MockWebsimSocket {
  async collection() {
    return {
      filter: () => ({
        getList: async () => []
      }),
      upsert: async () => ({}),
      getList: async () => []
    };
  }
}
const room = typeof WebsimSocket !== "undefined" ? new WebsimSocket() : new MockWebsimSocket();
const shuffleQuiz = (questions) => {
  const shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
  return shuffledQuestions.map((q) => {
    const correctAnswerValue = q.options[q.correct];
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    const newCorrectIndex = shuffledOptions.findIndex((opt) => opt === correctAnswerValue);
    return {
      ...q,
      options: shuffledOptions,
      correct: newCorrectIndex
    };
  });
};
function App() {
  const [currentState, setCurrentState] = useState("LOGIN");
  const [studentInfo, setStudentInfo] = useState({
    name: "",
    number: ""
  });
  const [loginData, setLoginData] = useState({});
  const [submissionResult, setSubmissionResult] = useState({});
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const handleLogin = (credentials) => {
    setLoginData(credentials);
    setShuffledQuestions(shuffleQuiz(allQuestions));
    setCurrentState("QUIZ");
  };
  const handleQuizSubmit = async (answers, studentInfo2, loginData2) => {
    const result = await submitQuizResults(answers, studentInfo2, loginData2, shuffledQuestions, room);
    setSubmissionResult(result);
    setCurrentState("SUBMITTED");
  };
  const handleAdminAccess = () => {
    setCurrentState("ADMIN");
  };
  const handleBackToLogin = () => {
    setCurrentState("LOGIN");
    setStudentInfo({ name: "", number: "" });
    setLoginData({});
    setSubmissionResult({});
    setShuffledQuestions([]);
  };
  switch (currentState) {
    case "LOGIN":
      return /* @__PURE__ */ jsxDEV(
        LoginForm,
        {
          onLogin: handleLogin,
          onAdminAccess: handleAdminAccess,
          studentInfo,
          setStudentInfo,
          room
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 79,
          columnNumber: 17
        },
        this
      );
    case "QUIZ":
      return /* @__PURE__ */ jsxDEV(
        Quiz,
        {
          studentInfo,
          loginData,
          questions: shuffledQuestions,
          onSubmit: handleQuizSubmit
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 90,
          columnNumber: 17
        },
        this
      );
    case "SUBMITTED":
      return /* @__PURE__ */ jsxDEV(
        SubmissionSuccess,
        {
          studentInfo,
          score: submissionResult.score,
          totalQuestions: shuffledQuestions.length,
          onBackToLogin: handleBackToLogin
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 100,
          columnNumber: 17
        },
        this
      );
    case "ADMIN":
      return /* @__PURE__ */ jsxDEV(
        AdminPanel,
        {
          room,
          onBackToLogin: handleBackToLogin
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 110,
          columnNumber: 17
        },
        this
      );
    default:
      return null;
  }
}
const root = createRoot(document.getElementById("root"));
root.render(/* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
  fileName: "<stdin>",
  lineNumber: 122,
  columnNumber: 13
}));
