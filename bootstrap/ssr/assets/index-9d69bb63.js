import { a as jsx, j as jsxs, F as Fragment } from "../ssr.js";
import { C as Card, e as CardFooter } from "./card-af958e06.js";
import { U as UserLayout } from "./user-layout-1b5bc50d.js";
import { Link, usePage, Head } from "@inertiajs/react";
import { S as SectionTitle } from "./section-title-34ee1931.js";
import * as React from "react";
import { c as cn, B as Button } from "./button-f266fad0.js";
import { UserListOptions } from "./user-list-options-e2e6ee4e.js";
import { A as Avatar, a as AvatarImage, b as AvatarFallback } from "./separator-7d1d1146.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./icon-9c3bf825.js";
import "@tabler/icons-react";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "./theme-toggle-477f58e9.js";
import "./dropdown-menu-61c72fef.js";
import "@radix-ui/react-dropdown-menu";
import "@radix-ui/react-slot";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-alert-dialog";
import "cmdk";
import "./dialog-23dd0dd7.js";
import "@radix-ui/react-avatar";
import "@radix-ui/react-separator";
const Table = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { className: "w-full overflow-auto", children: /* @__PURE__ */ jsx(
    "table",
    {
      ref,
      className: cn("w-full caption-bottom text-sm", className),
      ...props
    }
  ) })
);
Table.displayName = "Table";
const TableHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }));
TableHeader.displayName = "TableHeader";
const TableBody = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("tbody", { ref, className: cn("[&_tr:last-child]:border-0", className), ...props }));
TableBody.displayName = "TableBody";
const TableFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "tfoot",
  {
    ref,
    className: cn("bg-primary font-medium text-primary-foreground", className),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
const TableRow = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "tr",
    {
      ref,
      className: cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        className
      ),
      ...props
    }
  )
);
TableRow.displayName = "TableRow";
const TableHead = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "th",
  {
    ref,
    className: cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    ),
    ...props
  }
));
TableHead.displayName = "TableHead";
const TableCell = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "td",
  {
    ref,
    className: cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className),
    ...props
  }
));
TableCell.displayName = "TableCell";
const TableCaption = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("caption", { ref, className: cn("mt-4 text-sm text-muted-foreground", className), ...props }));
TableCaption.displayName = "TableCaption";
function SimplePagination({
  links
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-1", children: [
    links.prev !== null ? /* @__PURE__ */ jsx(Button, { className: "rounded-full text-xs px-6", variant: "outline", size: "sm", asChild: true, children: /* @__PURE__ */ jsx(Link, { preserveScroll: true, preserveState: true, href: links.prev, children: "Prev" }) }) : /* @__PURE__ */ jsx(Button, { className: "rounded-full text-xs px-6", variant: "outline", size: "sm", asChild: true, disabled: true, children: /* @__PURE__ */ jsx("span", { children: "Prev" }) }),
    links.next !== null ? /* @__PURE__ */ jsx(Button, { className: "rounded-full text-xs px-6", variant: "outline", size: "sm", asChild: true, children: /* @__PURE__ */ jsx(Link, { preserveScroll: true, preserveState: true, href: links.next, children: "Next" }) }) : /* @__PURE__ */ jsx(Button, { className: "rounded-full text-xs px-6", variant: "outline", size: "sm", asChild: true, disabled: true, children: /* @__PURE__ */ jsx("span", { children: "Next" }) })
  ] });
}
function Index() {
  const { data: users, meta, links } = usePage().props.users;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Users" }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(SectionTitle, { title: "Users", description: "The list of the users registered." }),
      /* @__PURE__ */ jsxs(Table, { children: [
        /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableHead, { className: "w-[100px]", children: "#" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Name" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Verified at" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Created at" }),
          /* @__PURE__ */ jsx(TableHead, {})
        ] }) }),
        /* @__PURE__ */ jsx(TableBody, { children: users.length > 0 ? /* @__PURE__ */ jsx(Fragment, { children: users.map((user, i) => /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableCell, { className: "w-0", children: meta.from + i }),
          /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center font-normal", children: [
            /* @__PURE__ */ jsx("div", { className: "mr-3 shrink-0", children: /* @__PURE__ */ jsxs(Avatar, { children: [
              /* @__PURE__ */ jsx(AvatarImage, { src: user.avatar }),
              /* @__PURE__ */ jsx(AvatarFallback, { children: user.acronym })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { children: user.name }),
              /* @__PURE__ */ jsx("div", { className: "text-muted-foreground", children: user.email })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx(TableCell, { children: user.email_verified_at }),
          /* @__PURE__ */ jsx(TableCell, { children: user.created_at }),
          /* @__PURE__ */ jsx(TableCell, { children: /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(UserListOptions, { user }) }) })
        ] }, i)) }) : /* @__PURE__ */ jsx(TableRow, { children: /* @__PURE__ */ jsx(TableCell, { colSpan: 5, children: "No users." }) }) })
      ] }),
      /* @__PURE__ */ jsxs(CardFooter, { className: "flex items-center justify-between pt-6", children: [
        /* @__PURE__ */ jsxs("span", { className: "text-sm text-muted-foreground", children: [
          "Showing you ",
          meta.to,
          " of ",
          meta.total,
          " users."
        ] }),
        /* @__PURE__ */ jsx(SimplePagination, { links })
      ] })
    ] })
  ] });
}
Index.layout = (page) => /* @__PURE__ */ jsx(UserLayout, { children: page });
export {
  Index as default
};
