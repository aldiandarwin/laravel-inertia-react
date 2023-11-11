import { a as jsx, j as jsxs, F as Fragment } from "../ssr.js";
import { A as ApplicationLogo, T as ThemeToggle } from "./theme-toggle-477f58e9.js";
import { Link, usePage, router } from "@inertiajs/react";
import { c as cn, B as Button } from "./button-f266fad0.js";
import { D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, e as DropdownMenuLabel, d as DropdownMenuSeparator, c as DropdownMenuItem } from "./dropdown-menu-61c72fef.js";
import * as React from "react";
import { useEffect } from "react";
import { Command as Command$1 } from "cmdk";
import { IconSearch } from "@tabler/icons-react";
import { D as Dialog, a as DialogContent } from "./dialog-23dd0dd7.js";
import { I as Icon } from "./icon-9c3bf825.js";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
function NavLink({
  active = false,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      className: cn(
        "px-4 py-2 transition duration-200 hover:text-foreground",
        active ? "font-semibold text-foreground" : "text-muted-foreground"
      ),
      ...props
    }
  );
}
const Command = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1,
  {
    ref,
    className: cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    ),
    ...props
  }
));
Command.displayName = Command$1.displayName;
const CommandDialog = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx(Dialog, { ...props, children: /* @__PURE__ */ jsx(DialogContent, { className: "overflow-hidden p-0 shadow-lg", children: /* @__PURE__ */ jsx(Command, { className: "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:mr-2", children }) }) });
};
const CommandInput = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs("div", { className: "flex items-center border-b px-3", "cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ jsx(IconSearch, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ jsx(
    Command$1.Input,
    {
      ref,
      className: cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    }
  )
] }));
CommandInput.displayName = Command$1.Input.displayName;
const CommandList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.List,
  {
    ref,
    className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
    ...props
  }
));
CommandList.displayName = Command$1.List.displayName;
const CommandEmpty = React.forwardRef((props, ref) => /* @__PURE__ */ jsx(Command$1.Empty, { ref, className: "py-6 text-center text-sm", ...props }));
CommandEmpty.displayName = Command$1.Empty.displayName;
const CommandGroup = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.Group,
  {
    ref,
    className: cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    ),
    ...props
  }
));
CommandGroup.displayName = Command$1.Group.displayName;
const CommandSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.Separator,
  {
    ref,
    className: cn("-mx-1 h-px bg-border", className),
    ...props
  }
));
CommandSeparator.displayName = Command$1.Separator.displayName;
const CommandItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Command$1.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-lg !py-2 px-2 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props
  }
));
CommandItem.displayName = Command$1.Item.displayName;
function CommandPalette({ openCommandPalette, setOpenCommandPalette }) {
  const { auth } = usePage().props;
  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        setOpenCommandPalette((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);
  function goto(href) {
    router.get(
      href,
      {},
      {
        preserveState: true,
        preserveScroll: true,
        onSuccess: () => setOpenCommandPalette(false)
      }
    );
  }
  return /* @__PURE__ */ jsxs(CommandDialog, { open: openCommandPalette, onOpenChange: setOpenCommandPalette, children: [
    /* @__PURE__ */ jsx(CommandInput, { placeholder: "Type a command or search..." }),
    /* @__PURE__ */ jsxs(CommandList, { children: [
      /* @__PURE__ */ jsx(CommandEmpty, { children: "No results found." }),
      /* @__PURE__ */ jsxs(CommandGroup, { heading: "Pages", children: [
        /* @__PURE__ */ jsxs(CommandItem, { value: "Home", onSelect: () => goto(route("home")), children: [
          /* @__PURE__ */ jsx(Icon, { name: "IconHome" }),
          /* @__PURE__ */ jsx("span", { children: "Home" })
        ] }),
        /* @__PURE__ */ jsxs(CommandItem, { value: "tv show", onSelect: () => goto("#"), children: [
          /* @__PURE__ */ jsx(Icon, { name: "IconDeviceTvOld" }),
          /* @__PURE__ */ jsx("span", { children: "TV Show" })
        ] }),
        /* @__PURE__ */ jsxs(CommandItem, { value: "new story", onSelect: () => goto("#"), children: [
          /* @__PURE__ */ jsx(Icon, { name: "IconPlus" }),
          /* @__PURE__ */ jsx("span", { children: "New story" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(CommandSeparator, {}),
      /* @__PURE__ */ jsx(CommandGroup, { heading: "Account", children: auth.user ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs(
          CommandItem,
          {
            value: "Dashboard",
            onSelect: () => goto(route("dashboard")),
            children: [
              /* @__PURE__ */ jsx(Icon, { name: "IconChartPie" }),
              /* @__PURE__ */ jsx("span", { children: "Dashboard" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          CommandItem,
          {
            value: "Settings",
            onSelect: () => goto(route("profile.edit")),
            children: [
              /* @__PURE__ */ jsx(Icon, { name: "IconSettings" }),
              /* @__PURE__ */ jsx("span", { children: "Settings" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          CommandItem,
          {
            value: "Logout",
            onSelect: () => router.post(route("logout")),
            children: [
              /* @__PURE__ */ jsx(Icon, { name: "IconLogout" }),
              /* @__PURE__ */ jsx("span", { children: "Logout" })
            ]
          }
        )
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs(CommandItem, { value: "login", onSelect: () => goto(route("login")), children: [
          /* @__PURE__ */ jsx(Icon, { name: "IconLogin" }),
          /* @__PURE__ */ jsx("span", { children: "Login" })
        ] }),
        /* @__PURE__ */ jsxs(CommandItem, { value: "register", onSelect: () => goto(route("register")), children: [
          /* @__PURE__ */ jsx(Icon, { name: "IconUserCircle" }),
          /* @__PURE__ */ jsx("span", { children: "Register" })
        ] })
      ] }) })
    ] })
  ] });
}
const Avatar = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Root,
  {
    ref,
    className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
    ...props
  }
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
const AvatarImage = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Image,
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  }
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Fallback,
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
function Navbar({ openCommandPalette, setOpenCommandPalette }) {
  const { auth } = usePage().props;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      CommandPalette,
      {
        openCommandPalette,
        setOpenCommandPalette
      }
    ),
    /* @__PURE__ */ jsx("nav", { className: "hidden border-b border-border/60 px-4 py-2 sm:px-6 sm:py-3 lg:block", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(ApplicationLogo, { className: "mr-4 h-8 w-auto fill-foreground" }) }),
        /* @__PURE__ */ jsx(NavLink, { href: route("home"), active: route().current("home"), children: "Home" }),
        /* @__PURE__ */ jsx(NavLink, { href: route("dashboard"), active: route().current("dashboard"), children: "Dashboard" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-4", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setOpenCommandPalette(true),
            className: "flex items-center gap-x-4 rounded-lg px-4 py-2 text-muted-foreground ring-1 ring-border hover:text-foreground focus:outline-none",
            children: [
              /* @__PURE__ */ jsx(Icon, { name: "IconSearch", className: "h-4 w-4 stroke-[1.5]" }),
              /* @__PURE__ */ jsx("span", { children: "Quick search..." }),
              /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
                /* @__PURE__ */ jsx(Icon, { name: "IconCommand", className: "h-4 w-4 stroke-1" }),
                " K"
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsx(ThemeToggle, {}),
        auth.user ? /* @__PURE__ */ jsxs(DropdownMenu, { children: [
          /* @__PURE__ */ jsxs(DropdownMenuTrigger, { className: "flex items-center justify-between gap-x-4 focus:outline-none", children: [
            auth.user.name,
            /* @__PURE__ */ jsx(Icon, { name: "IconChevronDown", className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", className: "mt-2 w-72", children: [
            /* @__PURE__ */ jsx(DropdownMenuLabel, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center font-normal", children: [
              /* @__PURE__ */ jsx("div", { className: "mr-3 shrink-0", children: /* @__PURE__ */ jsxs(Avatar, { children: [
                /* @__PURE__ */ jsx(AvatarImage, { src: auth.user.avatar }),
                /* @__PURE__ */ jsx(AvatarFallback, { children: auth.user.acronym })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { children: auth.user.name }),
                /* @__PURE__ */ jsx("div", { className: "text-muted-foreground", children: auth.user.email })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
            /* @__PURE__ */ jsx(
              DropdownMenuItem,
              {
                onClick: () => router.get(route("dashboard")),
                children: "Dashboard"
              }
            ),
            /* @__PURE__ */ jsx(
              DropdownMenuItem,
              {
                onClick: () => router.get(route("profile.edit")),
                children: "Profile"
              }
            ),
            /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
            /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: () => router.post(route("logout")), children: "Log out" })
          ] })
        ] }) : /* @__PURE__ */ jsxs("div", { className: "flex gap-x-2", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              className: "rounded-full",
              size: "sm",
              variant: "secondary",
              asChild: true,
              children: /* @__PURE__ */ jsx(Link, { href: route("login"), children: "Login" })
            }
          ),
          /* @__PURE__ */ jsx(Button, { className: "rounded-full", size: "sm", asChild: true, children: /* @__PURE__ */ jsx(Link, { href: route("register"), children: "Register" }) })
        ] })
      ] })
    ] }) })
  ] });
}
const Separator = React.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx(
  SeparatorPrimitive.Root,
  {
    ref,
    decorative,
    orientation,
    className: cn(
      "shrink-0 bg-border",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className
    ),
    ...props
  }
));
Separator.displayName = SeparatorPrimitive.Root.displayName;
export {
  Avatar as A,
  Navbar as N,
  Separator as S,
  AvatarImage as a,
  AvatarFallback as b
};
