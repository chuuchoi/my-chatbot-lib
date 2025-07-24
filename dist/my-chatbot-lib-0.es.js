import { jsxs as s, jsx as e } from "react/jsx-runtime";
import { useState as l } from "react";
function m({ onSend: c, messages: i }) {
  const [a, n] = l(""), o = () => {
    a.trim() && (c(a), n(""));
  };
  return /* @__PURE__ */ s("div", { className: "chatbot-container", children: [
    /* @__PURE__ */ e("div", { className: "chatbot-messages", children: i.map((t, r) => /* @__PURE__ */ e("div", { className: `chatbot-msg ${t.from}`, children: t.text }, r)) }),
    /* @__PURE__ */ s("div", { className: "chatbot-input", children: [
      /* @__PURE__ */ e(
        "input",
        {
          value: a,
          onChange: (t) => n(t.target.value),
          placeholder: "메시지를 입력하세요..."
        }
      ),
      /* @__PURE__ */ e("button", { onClick: o, children: "전송" })
    ] })
  ] });
}
export {
  m as default
};
