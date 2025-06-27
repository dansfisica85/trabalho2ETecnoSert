import { Fragment, jsxDEV } from "react/jsx-dev-runtime";
import React, { useState } from "react";
function LoginForm({ onLogin, onAdminAccess, studentInfo, setStudentInfo, room }) {
  const [loginData, setLoginData] = useState({
    email: ""
  });
  const [adminPassword, setAdminPassword] = useState("");
  const [showAdmin, setShowAdmin] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!loginData.email) {
      setError("Por favor, preencha o seu email.");
      return;
    }
    if (!studentInfo.name || !studentInfo.number) {
      setError("Por favor, preencha o nome e n\xFAmero do aluno.");
      return;
    }
    setIsLoading(true);
    setError("");
    try {
      if (room.collection) {
        const submissions = await room.collection("quiz_submission").filter({ email: loginData.email }).getList();
        if (submissions && submissions.length > 0) {
          setError("Este e-mail j\xE1 foi utilizado para responder ao question\xE1rio.");
          setIsLoading(false);
          return;
        }
      }
      onLogin(loginData);
    } catch (err) {
      console.warn("Database not available, skipping duplicate check");
      onLogin(loginData);
    }
  };
  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminPassword === "852606") {
      onAdminAccess();
    } else {
      setError("Senha incorreta para acesso administrativo.");
    }
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "container", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "header", children: [
      /* @__PURE__ */ jsxDEV("h1", { className: "title", children: "Trabalho de Eletrost\xE1tica - Prof\xBA Davi - F\xEDsica I" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 56,
        columnNumber: 17
      }, this),
      !showAdmin && /* @__PURE__ */ jsxDEV(Fragment, { children: [
        /* @__PURE__ */ jsxDEV("div", { className: "student-info", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "info-group", children: [
            /* @__PURE__ */ jsxDEV("label", { children: "Nome do Aluno:" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 61,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "text",
                value: studentInfo.name,
                onChange: (e) => setStudentInfo((prev) => ({ ...prev, name: e.target.value })),
                placeholder: "Digite seu nome completo",
                disabled: isLoading
              },
              void 0,
              false,
              {
                fileName: "<stdin>",
                lineNumber: 62,
                columnNumber: 33
              },
              this
            )
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 60,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV("div", { className: "info-group", children: [
            /* @__PURE__ */ jsxDEV("label", { children: "N\xFAmero:" }, void 0, false, {
              fileName: "<stdin>",
              lineNumber: 71,
              columnNumber: 33
            }, this),
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "text",
                value: studentInfo.number,
                onChange: (e) => setStudentInfo((prev) => ({ ...prev, number: e.target.value })),
                placeholder: "Digite seu n\xFAmero",
                disabled: isLoading
              },
              void 0,
              false,
              {
                fileName: "<stdin>",
                lineNumber: 72,
                columnNumber: 33
              },
              this
            )
          ] }, void 0, true, {
            fileName: "<stdin>",
            lineNumber: 70,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 59,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV("div", { className: "school-info", children: "S\xE9rie: 2E - EM Col\xE9gio Tecno-Sert" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 81,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 58,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 55,
      columnNumber: 13
    }, this),
    !showAdmin ? /* @__PURE__ */ jsxDEV("div", { className: "login-form", children: [
      /* @__PURE__ */ jsxDEV("h2", { children: "Acesso ao Sistema" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 90,
        columnNumber: 21
      }, this),
      error && /* @__PURE__ */ jsxDEV("div", { className: "error-message", children: error }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 91,
        columnNumber: 31
      }, this),
      /* @__PURE__ */ jsxDEV("form", { onSubmit: handleLogin, children: [
        /* @__PURE__ */ jsxDEV("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxDEV("label", { children: "Email:" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 94,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "email",
              value: loginData.email,
              onChange: (e) => setLoginData((prev) => ({ ...prev, email: e.target.value })),
              placeholder: "Digite seu email",
              required: true,
              disabled: isLoading
            },
            void 0,
            false,
            {
              fileName: "<stdin>",
              lineNumber: 95,
              columnNumber: 29
            },
            this
          )
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 93,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV("button", { type: "submit", className: "btn", disabled: isLoading, children: isLoading ? "Verificando..." : "Entrar" }, void 0, false, {
          fileName: "<stdin>",
          lineNumber: 104,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 92,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV("div", { style: { marginTop: "20px", textAlign: "center" }, children: /* @__PURE__ */ jsxDEV(
        "button",
        {
          className: "btn-secondary",
          onClick: () => setShowAdmin(true),
          style: { fontSize: "12px", padding: "8px 16px" },
          children: "Acesso Administrativo"
        },
        void 0,
        false,
        {
          fileName: "<stdin>",
          lineNumber: 109,
          columnNumber: 25
        },
        this
      ) }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 108,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 89,
      columnNumber: 17
    }, this) : /* @__PURE__ */ jsxDEV("div", { className: "login-form", children: [
      /* @__PURE__ */ jsxDEV("h2", { children: "Acesso Administrativo" }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 120,
        columnNumber: 21
      }, this),
      error && /* @__PURE__ */ jsxDEV("div", { className: "error-message", children: error }, void 0, false, {
        fileName: "<stdin>",
        lineNumber: 121,
        columnNumber: 31
      }, this),
      /* @__PURE__ */ jsxDEV("form", { onSubmit: handleAdminLogin, children: [
        /* @__PURE__ */ jsxDEV("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxDEV("label", { children: "Senha:" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 124,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV(
            "input",
            {
              type: "password",
              value: adminPassword,
              onChange: (e) => setAdminPassword(e.target.value),
              placeholder: "Digite a senha administrativa",
              required: true
            },
            void 0,
            false,
            {
              fileName: "<stdin>",
              lineNumber: 125,
              columnNumber: 29
            },
            this
          )
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 123,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV("div", { style: { display: "flex", gap: "10px", justifyContent: "center" }, children: [
          /* @__PURE__ */ jsxDEV("button", { type: "submit", className: "btn", children: "Entrar" }, void 0, false, {
            fileName: "<stdin>",
            lineNumber: 134,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ jsxDEV(
            "button",
            {
              type: "button",
              className: "btn-secondary",
              onClick: () => {
                setShowAdmin(false);
                setError("");
                setAdminPassword("");
              },
              children: "Voltar"
            },
            void 0,
            false,
            {
              fileName: "<stdin>",
              lineNumber: 137,
              columnNumber: 29
            },
            this
          )
        ] }, void 0, true, {
          fileName: "<stdin>",
          lineNumber: 133,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "<stdin>",
        lineNumber: 122,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "<stdin>",
      lineNumber: 119,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 54,
    columnNumber: 9
  }, this);
}
export {
  LoginForm
};
