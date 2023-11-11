import { a as jsx, j as jsxs, F as Fragment } from "../ssr.js";
import * as React from "react";
import { useState } from "react";
import { S as Separator, N as Navbar } from "./separator-7d1d1146.js";
import { Link, usePage, router } from "@inertiajs/react";
import { c as cn, B as Button } from "./button-f266fad0.js";
import { I as Icon } from "./icon-9c3bf825.js";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva } from "class-variance-authority";
import { A as ApplicationLogo } from "./theme-toggle-477f58e9.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, c as DropdownMenuItem, d as DropdownMenuSeparator } from "./dropdown-menu-61c72fef.js";
function VerticalNavLink({ icon, active, ...props }) {
  return /* @__PURE__ */ jsx("li", { className: "-mx-2", children: /* @__PURE__ */ jsxs(
    Link,
    {
      className: cn(
        "flex items-center gap-x-2 rounded-lg px-2 py-2",
        active ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx(Icon, { name: icon }),
        props.children
      ]
    }
  ) });
}
function Menu() {
  return /* @__PURE__ */ jsxs("ul", { className: "flex flex-col gap-y-1", children: [
    /* @__PURE__ */ jsx(
      VerticalNavLink,
      {
        active: route().current("dashboard"),
        href: route("dashboard"),
        icon: "IconDashboard",
        children: "Dashboard"
      }
    ),
    /* @__PURE__ */ jsx(
      VerticalNavLink,
      {
        active: route().current("profile.edit"),
        href: route("profile.edit"),
        icon: "IconSettings",
        children: "Settings"
      }
    ),
    /* @__PURE__ */ jsx(Separator, { className: "my-2" }),
    /* @__PURE__ */ jsx(
      VerticalNavLink,
      {
        href: route("users.index"),
        active: route().current("users.*"),
        icon: "IconUsers",
        children: "Users"
      }
    ),
    /* @__PURE__ */ jsx(VerticalNavLink, { href: "#", icon: "IconPhoto", children: "Gallery" }),
    /* @__PURE__ */ jsx(VerticalNavLink, { href: "#", icon: "IconArticle", children: "Articles" }),
    /* @__PURE__ */ jsx(VerticalNavLink, { href: "#", icon: "IconMessage", children: "Comments" }),
    /* @__PURE__ */ jsx(Separator, { className: "my-2" }),
    /* @__PURE__ */ jsx(VerticalNavLink, { href: "#", icon: "IconBrandDiscord", children: "Forum" }),
    /* @__PURE__ */ jsx(VerticalNavLink, { href: "#", icon: "IconBrandOpenai", children: "Ask AI" })
  ] });
}
const Sheet = SheetPrimitive.Root;
const SheetPortal = ({ className, ...props }) => /* @__PURE__ */ jsx(SheetPrimitive.Portal, { className: cn(className), ...props });
SheetPortal.displayName = SheetPrimitive.Portal.displayName;
const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = React.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxs(
    SheetPrimitive.Content,
    {
      ref,
      className: cn(sheetVariants({ side }), className),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ jsx(Icon, { name: "IconX", className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
SheetContent.displayName = SheetPrimitive.Content.displayName;
const SheetTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;
function ResponsiveSidebar({
  open,
  setOpen
}) {
  return /* @__PURE__ */ jsx(Sheet, { open, onOpenChange: setOpen, children: /* @__PURE__ */ jsxs(SheetContent, { className: "w-[90%]", side: "left", children: [
    /* @__PURE__ */ jsx(Link, { className: "mb-8 block", href: "/", children: /* @__PURE__ */ jsx(ApplicationLogo, { className: "mr-4 h-8 w-auto fill-foreground" }) }),
    /* @__PURE__ */ jsx(Menu, {})
  ] }) });
}
function UserResponsiveNavbar({
  openCommandPalette,
  setOpenCommandPalette,
  setOpenSidebar
}) {
  const { auth } = usePage().props;
  return /* @__PURE__ */ jsx("nav", { className: "block border-b px-4 py-3 lg:hidden", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsx("button", { onClick: () => setOpenSidebar(true), children: /* @__PURE__ */ jsx(Icon, { name: "IconLayoutSidebarLeftExpand" }) }),
      /* @__PURE__ */ jsx(Separator, { orientation: "vertical", className: "mx-3 h-7" }),
      /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(ApplicationLogo, { className: "mr-4 h-5 w-auto fill-foreground" }) })
    ] }),
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
function UserLayout({ children }) {
  const [open, setOpen] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      UserResponsiveNavbar,
      {
        setOpenSidebar,
        openCommandPalette: open,
        setOpenCommandPalette: setOpen
      }
    ),
    /* @__PURE__ */ jsx(Navbar, { openCommandPalette: open, setOpenCommandPalette: setOpen }),
    /* @__PURE__ */ jsx(ResponsiveSidebar, { open: openSidebar, setOpen: setOpenSidebar }),
    /* @__PURE__ */ jsxs("div", { className: "grid px-4 py-6 lg:grid-cols-4 lg:gap-8 lg:px-10 lg:py-12", children: [
      /* @__PURE__ */ jsx("div", { className: "col-span-1 hidden lg:block", children: /* @__PURE__ */ jsx(Menu, {}) }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-3", children })
    ] })
  ] });
}
export {
  UserLayout as U
};
