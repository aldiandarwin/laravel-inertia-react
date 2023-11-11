import { a as jsx, j as jsxs, F as Fragment } from "../ssr.js";
import { useState } from "react";
import { S as Separator, N as Navbar } from "./separator-7d1d1146.js";
import { A as ApplicationLogo } from "./theme-toggle-477f58e9.js";
import { usePage, Link, router, Head } from "@inertiajs/react";
import { I as Icon } from "./icon-9c3bf825.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuItem, d as DropdownMenuSeparator } from "./dropdown-menu-61c72fef.js";
import { B as Button } from "./button-f266fad0.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "cmdk";
import "@tabler/icons-react";
import "./dialog-23dd0dd7.js";
import "@radix-ui/react-dialog";
import "@radix-ui/react-avatar";
import "@radix-ui/react-separator";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
function ResponsiveNavbar({
  openCommandPalette,
  setOpenCommandPalette
}) {
  const { auth } = usePage().props;
  return /* @__PURE__ */ jsx("nav", { className: "block border-b px-4 py-3 lg:hidden", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(ApplicationLogo, { className: "mr-4 h-6 w-auto fill-foreground" }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setOpenCommandPalette(true),
          className: "focus:outline-none",
          children: /* @__PURE__ */ jsx(Icon, { name: "IconSearch" })
        }
      ),
      /* @__PURE__ */ jsx(Separator, { orientation: "vertical", className: "mx-4 h-7" }),
      /* @__PURE__ */ jsxs(DropdownMenu, { children: [
        /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
          Button,
          {
            variant: "ghost",
            className: "grid h-8 w-8 place-content-center border-transparent focus:border",
            children: /* @__PURE__ */ jsx(Icon, { name: "IconMenu" })
          }
        ) }),
        /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", className: "w-64", children: [
          /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(Link, { href: route("home"), children: "Home" }) }),
          /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(Link, { href: "#", children: "Articles" }) }),
          /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(Link, { href: "#", children: "About" }) }),
          auth.user ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
            /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(Link, { href: route("dashboard"), children: "Dashboard" }) }),
            /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(Link, { href: route("profile.edit"), children: "Settings" }) }),
            /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
            /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: () => router.post(route("logout")), children: "Log out" })
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(Link, { href: route("login"), children: "Login" }) }),
            /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsx(Link, { href: route("register"), children: "Register" }) })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
function AppLayout({ children }) {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(ResponsiveNavbar, { openCommandPalette: open, setOpenCommandPalette: setOpen }),
    /* @__PURE__ */ jsx(Navbar, { openCommandPalette: open, setOpenCommandPalette: setOpen }),
    children
  ] });
}
function Container({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", children });
}
function Home() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Welcome to my life." }),
    /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx("div", { className: "py-12", children: "Home" }) })
  ] });
}
Home.layout = (page) => /* @__PURE__ */ jsx(AppLayout, { children: page });
export {
  Home as default
};
