import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
function Navigation({ currentQuestion, totalQuestions, hasAnswer, onPrevious, onNext }) {
  return /* @__PURE__ */ jsxDEV("div", { className: "navigation", children: [
    /* @__PURE__ */ jsxDEV(
      "button",
      {
        className: "btn-secondary",
        onClick: onPrevious,
        disabled: currentQuestion === 0,
        children: "\u2190 Anterior"
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 6,
        columnNumber: 13
      },
      this
    ),
    /* @__PURE__ */ jsxDEV(
      "button",
      {
        className: "btn",
        onClick: onNext,
        disabled: !hasAnswer,
        children: currentQuestion === totalQuestions - 1 ? "Finalizar Prova" : "Pr\xF3xima \u2192"
      },
      void 0,
      false,
      {
        fileName: "<stdin>",
        lineNumber: 13,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}
export {
  Navigation
};
