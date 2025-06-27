import { jsxDEV } from "react/jsx-dev-runtime";
import React, { useState, useEffect } from "react";
function AdminPanel({ room, onBackToLogin }) {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  useEffect(() => {
    loadSubmissions();
  }, []);
  const loadSubmissions = async () => {
    try {
      if (room.collection) {
        const data = await room.collection("quiz_submission").getList();
        setSubmissions(data.sort((a, b) => new Date(b.submittedAt) - new Date(a.submittedAt)));
      }
    } catch (error) {
      console.error("Error loading submissions:", error);
    }
    setLoading(false);
  };
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString("pt-BR");
  };
  if (loading) {
    return /* @__PURE__ */ jsxDEV("div", { className: "container", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "header", children: /* @__PURE__ */ jsxDEV("h1", { className: "title", children: "Painel Administrativo" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 32,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 31,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "quiz-container", children: /* @__PURE__ */ jsxDEV("p", { children: "Carregando submiss\xF5es..." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 35,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 34,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 30,
      columnNumber: 13
    }, this);
  }
  if (selectedSubmission) {
    return /* @__PURE__ */ jsxDEV("div", { className: "container", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "header", children: [
        /* @__PURE__ */ jsxDEV("h1", { className: "title", children: "Detalhes da Submiss\xE3o" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 45,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "school-info", children: [
          selectedSubmission.studentName,
          " - N\xFAmero: ",
          selectedSubmission.studentNumber
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 46,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 44,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "quiz-container", children: /* @__PURE__ */ jsxDEV("div", { className: "submission-details", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "submission-header", children: [
          /* @__PURE__ */ jsxDEV("p", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "Email:" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 53,
              columnNumber: 32
            }, this),
            " ",
            selectedSubmission.email
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 53,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV("p", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "Data/Hora:" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 54,
              columnNumber: 32
            }, this),
            " ",
            formatDate(selectedSubmission.submittedAt)
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 54,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV("p", { children: [
            /* @__PURE__ */ jsxDEV("strong", { children: "Pontua\xE7\xE3o:" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 55,
              columnNumber: 32
            }, this),
            " ",
            selectedSubmission.score,
            "/",
            selectedSubmission.totalQuestions,
            " (",
            (selectedSubmission.score / selectedSubmission.totalQuestions * 10).toFixed(1),
            ")"
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 55,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 52,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "questions-review", children: [
          /* @__PURE__ */ jsxDEV("h3", { children: "Respostas Detalhadas:" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 59,
            columnNumber: 29
          }, this),
          selectedSubmission.questions.map((q, index) => {
            const isCorrect = q.studentAnswer === q.correctAnswer;
            return /* @__PURE__ */ jsxDEV("div", { className: `question-review ${isCorrect ? "correct" : "incorrect"}`, children: [
              /* @__PURE__ */ jsxDEV("h4", { children: [
                "Quest\xE3o ",
                index + 1,
                " ",
                isCorrect ? "\u2713" : "\u2717"
              ] }, void 0, true, {
                fileName: "<stdin>",
                lineNumber: 64,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ jsxDEV("p", { className: "question-text", children: q.question }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 65,
                columnNumber: 41
              }, this),
              /* @__PURE__ */ jsxDEV("div", { className: "options-review", children: q.options.map((option, optIndex) => /* @__PURE__ */ jsxDEV("div", { className: `option-review ${optIndex === q.correctAnswer ? "correct-answer" : optIndex === q.studentAnswer ? "student-answer" : ""}`, children: [
                String.fromCharCode(97 + optIndex),
                ") ",
                option,
                optIndex === q.correctAnswer && /* @__PURE__ */ jsxDEV("span", { children: " (Correta)" }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 73,
                  columnNumber: 86
                }, this),
                optIndex === q.studentAnswer && optIndex !== q.correctAnswer && /* @__PURE__ */ jsxDEV("span", { children: " (Resposta do aluno)" }, void 0, false, {
                  fileName: "<stdin>",
                  lineNumber: 74,
                  columnNumber: 118
                }, this)
              ] }, optIndex, true, {
                fileName: "<stdin>",
                lineNumber: 68,
                columnNumber: 49
              }, this)) }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 66,
                columnNumber: 41
              }, this),
              q.studentAnswer === void 0 && /* @__PURE__ */ jsxDEV("p", { style: { color: "#dc2626" }, children: "N\xE3o respondida" }, void 0, false, {
                fileName: "<stdin>",
                lineNumber: 79,
                columnNumber: 45
              }, this)
            ] }, q.id, true, {
              fileName: "<stdin>",
              lineNumber: 63,
              columnNumber: 37
            }, this);
          })
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 58,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "navigation", children: /* @__PURE__ */ jsxDEV("button", { className: "btn-secondary", onClick: () => setSelectedSubmission(null), children: "\u2190 Voltar para Lista" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 87,
          columnNumber: 29
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 86,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 51,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 50,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 43,
      columnNumber: 13
    }, this);
  }
  return /* @__PURE__ */ jsxDEV("div", { className: "container", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "header", children: [
      /* @__PURE__ */ jsxDEV("h1", { className: "title", children: "Painel Administrativo" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 100,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ jsxDEV("div", { className: "school-info", children: [
        "Total de submiss\xF5es: ",
        submissions.length
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 101,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 99,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV("div", { className: "quiz-container", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "admin-controls", children: [
        /* @__PURE__ */ jsxDEV("button", { className: "btn-secondary", onClick: onBackToLogin, children: "Sair do Painel" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 108,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ jsxDEV("button", { className: "btn", onClick: loadSubmissions, children: "Atualizar Lista" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 111,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 107,
        columnNumber: 17
      }, this),
      submissions.length === 0 ? /* @__PURE__ */ jsxDEV("p", { children: "Nenhuma submiss\xE3o encontrada." }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 117,
        columnNumber: 21
      }, this) : /* @__PURE__ */ jsxDEV("div", { className: "submissions-list", children: /* @__PURE__ */ jsxDEV("table", { className: "submissions-table", children: [
        /* @__PURE__ */ jsxDEV("thead", { children: /* @__PURE__ */ jsxDEV("tr", { children: [
          /* @__PURE__ */ jsxDEV("th", { children: "Nome" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 123,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ jsxDEV("th", { children: "N\xFAmero" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 124,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ jsxDEV("th", { children: "Email" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 125,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ jsxDEV("th", { children: "Pontua\xE7\xE3o" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 126,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ jsxDEV("th", { children: "Data/Hora" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 127,
            columnNumber: 37
          }, this),
          /* @__PURE__ */ jsxDEV("th", { children: "A\xE7\xF5es" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 128,
            columnNumber: 37
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 122,
          columnNumber: 33
        }, this) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 121,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ jsxDEV("tbody", { children: submissions.map((submission) => /* @__PURE__ */ jsxDEV("tr", { children: [
          /* @__PURE__ */ jsxDEV("td", { children: submission.studentName }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 134,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ jsxDEV("td", { children: submission.studentNumber }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 135,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ jsxDEV("td", { children: submission.email }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 136,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ jsxDEV("td", { children: [
            submission.score,
            "/",
            submission.totalQuestions,
            " (",
            (submission.score / submission.totalQuestions * 10).toFixed(1),
            ")"
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 137,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ jsxDEV("td", { children: formatDate(submission.submittedAt) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 138,
            columnNumber: 41
          }, this),
          /* @__PURE__ */ jsxDEV("td", { children: /* @__PURE__ */ jsxDEV(
            "button",
            {
              className: "btn-secondary",
              onClick: () => setSelectedSubmission(submission),
              children: "Ver Detalhes"
            },
            void 0,
            false,
            {
              fileName: "<stdin>",
              lineNumber: 140,
              columnNumber: 45
            },
            this
          ) }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 139,
            columnNumber: 41
          }, this)
        ] }, submission.id, true, {
          fileName: "<stdin>",
          lineNumber: 133,
          columnNumber: 37
        }, this)) }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 131,
          columnNumber: 29
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 120,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 119,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 106,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 98,
    columnNumber: 9
  }, this);
}
export {
  AdminPanel
};
