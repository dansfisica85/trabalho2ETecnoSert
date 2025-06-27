import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
function Question({ question, selectedAnswer, onAnswerSelect }) {
  return /* @__PURE__ */ jsxDEV(Fragment, { children: [
    /* @__PURE__ */ jsxDEV("div", { className: "question-text", children: question.question }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 6,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("ul", { className: "options", children: question.options.map((option, index) => /* @__PURE__ */ jsxDEV("li", { className: "option", children: /* @__PURE__ */ jsxDEV("label", { children: [
      /* @__PURE__ */ jsxDEV(
        "input",
        {
          type: "radio",
          name: `question-${question.id}`,
          value: index,
          checked: selectedAnswer === index,
          onChange: () => onAnswerSelect(question.id, index)
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 14,
          columnNumber: 29
        },
        this
      ),
      /* @__PURE__ */ jsxDEV("span", { children: [
        String.fromCharCode(97 + index),
        ") ",
        option
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 21,
        columnNumber: 29
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 13,
      columnNumber: 25
    }, this) }, index, false, {
      fileName: "<stdin>",
      lineNumber: 12,
      columnNumber: 21
    }, this)) }, void 0, false, {
      fileName: "<stdin>",
      lineNumber: 10,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}
export {
  Question
};
