import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { A as ApplicationLogo, T as ThemeToggle } from "./theme-toggle-477f58e9.js";
import { Head, Link } from "@inertiajs/react";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-af958e06.js";
function GuestLayout({
  title,
  children
}) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title }),
    /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col items-center px-4 pt-6 sm:justify-center sm:pt-0", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(ApplicationLogo, { className: "h-20 w-20 fill-current text-gray-500" }) }) }),
      /* @__PURE__ */ jsxs(Card, { className: "mt-6 w-full sm:max-w-md", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: title }) }),
        /* @__PURE__ */ jsx(CardContent, { children })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 mb-4 mr-4 sm:top-0 sm:mt-4", children: /* @__PURE__ */ jsx(ThemeToggle, {}) })
    ] })
  ] });
}
export {
  GuestLayout as G
};
