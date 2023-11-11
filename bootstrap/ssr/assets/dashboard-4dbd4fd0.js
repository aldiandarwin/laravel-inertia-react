import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { U as UserLayout } from "./user-layout-1b5bc50d.js";
import { Head } from "@inertiajs/react";
import { S as SectionTitle } from "./section-title-34ee1931.js";
import { C as Card } from "./card-af958e06.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "react";
import "./separator-7d1d1146.js";
import "./theme-toggle-477f58e9.js";
import "./icon-9c3bf825.js";
import "@tabler/icons-react";
import "./button-f266fad0.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "./dropdown-menu-61c72fef.js";
import "@radix-ui/react-dropdown-menu";
import "cmdk";
import "./dialog-23dd0dd7.js";
import "@radix-ui/react-dialog";
import "@radix-ui/react-avatar";
import "@radix-ui/react-separator";
function Dashboard() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
    /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(SectionTitle, { title: "Dashboard", description: "Welcome to your dashboard" }) })
  ] });
}
Dashboard.layout = (page) => /* @__PURE__ */ jsx(UserLayout, { children: page });
export {
  Dashboard as default
};
