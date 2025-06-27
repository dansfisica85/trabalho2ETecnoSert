import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
function Timer({ timeLeft }) {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };
  const getTimerClass = () => {
    if (timeLeft <= 30) return "timer danger";
    if (timeLeft <= 60) return "timer warning";
    return "timer";
  };
  return /* @__PURE__ */ jsxDEV("div", { className: getTimerClass(), children: [
    "\u23F0 Tempo restante: ",
    formatTime(timeLeft)
  ] }, void 0, true, {
    fileName: "<stdin>",
    lineNumber: 17,
    columnNumber: 9
  }, this);
}
export {
  Timer
};
