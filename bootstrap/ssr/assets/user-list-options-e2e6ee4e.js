import { a as jsx, j as jsxs } from "../ssr.js";
import { c as cn, b as buttonVariants, B as Button } from "./button-f266fad0.js";
import { useForm, Link } from "@inertiajs/react";
import { I as Icon } from "./icon-9c3bf825.js";
import { c as DropdownMenuItem, D as DropdownMenu, a as DropdownMenuTrigger, b as DropdownMenuContent, e as DropdownMenuLabel, d as DropdownMenuSeparator, f as DropdownMenuSub, g as DropdownMenuSubTrigger, h as DropdownMenuPortal, i as DropdownMenuSubContent } from "./dropdown-menu-61c72fef.js";
import * as React from "react";
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@tabler/icons-react";
import "@radix-ui/react-dropdown-menu";
const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;
const AlertDialogPortal = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(AlertDialogPrimitive.Portal, { className: cn(className), ...props });
AlertDialogPortal.displayName = AlertDialogPrimitive.Portal.displayName;
const AlertDialogOverlay = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName;
const AlertDialogContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxs(AlertDialogPortal, { children: [
  /* @__PURE__ */ jsx(AlertDialogOverlay, {}),
  /* @__PURE__ */ jsx(
    AlertDialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",
        className
      ),
      ...props
    }
  )
] }));
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName;
const AlertDialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    ),
    ...props
  }
);
AlertDialogHeader.displayName = "AlertDialogHeader";
const AlertDialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
AlertDialogFooter.displayName = "AlertDialogFooter";
const AlertDialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold", className),
    ...props
  }
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName;
const AlertDialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description.displayName;
const AlertDialogAction = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Action,
  {
    ref,
    className: cn(buttonVariants(), className),
    ...props
  }
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName;
const AlertDialogCancel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AlertDialogPrimitive.Cancel,
  {
    ref,
    className: cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    ),
    ...props
  }
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName;
function DropdownDialog({
  trigger_text,
  icon,
  title = "Are you absolutely sure?",
  description,
  cancel_text = "Cancel",
  submit_text = "Continue",
  action
}) {
  return /* @__PURE__ */ jsxs(AlertDialog, { children: [
    /* @__PURE__ */ jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(DropdownMenuItem, { onSelect: (event) => event.preventDefault(), children: [
      /* @__PURE__ */ jsx(Icon, { className: "mr-2", name: icon }),
      trigger_text
    ] }) }),
    /* @__PURE__ */ jsxs(AlertDialogContent, { children: [
      /* @__PURE__ */ jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsx(AlertDialogTitle, { children: title }),
        /* @__PURE__ */ jsx(AlertDialogDescription, { children: description })
      ] }),
      /* @__PURE__ */ jsxs(AlertDialogFooter, { children: [
        /* @__PURE__ */ jsx(AlertDialogCancel, { children: cancel_text }),
        /* @__PURE__ */ jsx(AlertDialogAction, { onClick: action, children: submit_text })
      ] })
    ] })
  ] });
}
function UserListOptions({ user }) {
  const { delete: destroy } = useForm();
  function destroyUser(user2) {
    destroy(route("users.destroy", [user2]), {
      preserveScroll: true
    });
  }
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { className: "h-7", variant: "outline", size: "icon", children: /* @__PURE__ */ jsx(Icon, { name: "IconDots", className: "h-3.5 w-3.5" }) }) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", className: "w-56", children: [
      /* @__PURE__ */ jsx(DropdownMenuLabel, { children: "Actions" }),
      /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
      /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { href: route("users.show", [user]), children: [
        /* @__PURE__ */ jsx(Icon, { className: "mr-2", name: "IconId" }),
        "Details"
      ] }) }),
      /* @__PURE__ */ jsxs(DropdownMenuItem, { children: [
        /* @__PURE__ */ jsx(Icon, { className: "mr-2", name: "IconPencil" }),
        "Edit"
      ] }),
      /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
      /* @__PURE__ */ jsxs(DropdownMenuSub, { children: [
        /* @__PURE__ */ jsxs(DropdownMenuSubTrigger, { children: [
          /* @__PURE__ */ jsx(Icon, { className: "mr-2 h-4 w-4", name: "IconShare" }),
          "Share"
        ] }),
        /* @__PURE__ */ jsx(DropdownMenuPortal, { children: /* @__PURE__ */ jsxs(DropdownMenuSubContent, { className: "w-40", children: [
          /* @__PURE__ */ jsxs(DropdownMenuItem, { children: [
            /* @__PURE__ */ jsx(Icon, { className: "mr-2", name: "IconBrandFacebook" }),
            " Facebook"
          ] }),
          /* @__PURE__ */ jsxs(DropdownMenuItem, { children: [
            /* @__PURE__ */ jsx(Icon, { className: "mr-2", name: "IconBrandTwitter" }),
            "Twitter"
          ] }),
          /* @__PURE__ */ jsxs(DropdownMenuItem, { children: [
            /* @__PURE__ */ jsx(Icon, { className: "mr-2", name: "IconBrandTelegram" }),
            "Telegram"
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(DropdownMenuSub, { children: [
        /* @__PURE__ */ jsxs(DropdownMenuSubTrigger, { children: [
          /* @__PURE__ */ jsx(Icon, { className: "mr-2 h-4 w-4", name: "IconSend" }),
          "Publish"
        ] }),
        /* @__PURE__ */ jsx(DropdownMenuPortal, { children: /* @__PURE__ */ jsxs(DropdownMenuSubContent, { className: "w-40", children: [
          /* @__PURE__ */ jsxs(DropdownMenuItem, { children: [
            /* @__PURE__ */ jsx(Icon, { className: "mr-2", name: "IconBrandFacebook" }),
            "Facebook"
          ] }),
          /* @__PURE__ */ jsxs(DropdownMenuItem, { children: [
            /* @__PURE__ */ jsx(Icon, { className: "mr-2", name: "IconBrandTwitter" }),
            "Twitter"
          ] }),
          /* @__PURE__ */ jsxs(DropdownMenuItem, { children: [
            /* @__PURE__ */ jsx(Icon, { className: "mr-2", name: "IconBrandTelegram" }),
            "Telegram"
          ] }),
          /* @__PURE__ */ jsxs(DropdownMenuItem, { children: [
            /* @__PURE__ */ jsx(Icon, { className: "mr-2", name: "IconBrandWhatsapp" }),
            "Whatsapp"
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
      /* @__PURE__ */ jsx(
        DropdownDialog,
        {
          title: "You sure about it ?",
          trigger_text: "Ban",
          description: "Are you sure you want to ban this user?",
          cancel_text: "Batal",
          submit_text: "Ban",
          action: () => console.log("Ban"),
          icon: "IconBan"
        }
      ),
      /* @__PURE__ */ jsx(
        DropdownDialog,
        {
          trigger_text: "Delete Permanently",
          description: "Are you sure you want to ban this user?",
          action: () => destroyUser(user),
          icon: "IconTrash"
        }
      )
    ] })
  ] });
}
export {
  UserListOptions
};
