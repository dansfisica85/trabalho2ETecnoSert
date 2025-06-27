import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
function SubmissionSuccess({ studentInfo, score, totalQuestions, onBackToLogin }) {
  return /* @__PURE__ */ jsxDEV("div", { className: "container", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "header", children: [
      /* @__PURE__ */ jsxDEV("h1", { className: "title", children: "Trabalho de Eletrost\xE1tica - Prof\xBA Davi - F\xEDsica I" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 7,
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
        lineNumber: 8,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 6,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "success-message", children: [
      /* @__PURE__ */ jsxDEV("h2", { children: "Prova Enviada com Sucesso!" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 14,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("p", { children: "Suas respostas foram registradas com seguran\xE7a no sistema." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 15,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("p", { children: /* @__PURE__ */ jsxDEV("strong", { children: [
        "Pontua\xE7\xE3o: ",
        score,
        "/",
        totalQuestions,
        " (",
        (score / totalQuestions * 10).toFixed(1),
        ")"
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 16,
        columnNumber: 20
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 16,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("p", { children: "Obrigado por participar do question\xE1rio!" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 17,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { marginTop: "30px" }, children: /* @__PURE__ */ jsxDEV("button", { className: "btn", onClick: onBackToLogin, children: "Voltar ao In\xEDcio" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 19,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 18,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 13,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}
export {
  SubmissionSuccess
};
