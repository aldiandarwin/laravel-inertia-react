import { j as jsxs, a as jsx } from "../ssr.js";
import { useState, useRef } from "react";
import { I as Input, a as InputError } from "./input-650dc0c5.js";
import { useForm } from "@inertiajs/react";
import { L as Label } from "./label-903e7f9f.js";
import { B as Button } from "./button-f266fad0.js";
import { D as Dialog, a as DialogContent, b as DialogHeader, c as DialogTitle, d as DialogDescription, e as DialogFooter } from "./dialog-23dd0dd7.js";
import { S as SectionTitle } from "./section-title-34ee1931.js";
import { C as Card, c as CardContent } from "./card-af958e06.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "@radix-ui/react-label";
import "class-variance-authority";
import "@radix-ui/react-slot";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-dialog";
import "@tabler/icons-react";
function DeleteUserForm() {
  const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
  const passwordInput = useRef();
  const {
    data,
    setData,
    delete: destroy,
    processing,
    reset,
    errors
  } = useForm({
    password: ""
  });
  const deleteUser = (e) => {
    e.preventDefault();
    destroy(route("profile.destroy"), {
      preserveScroll: true,
      onSuccess: () => closeModal(),
      onError: () => {
        var _a;
        return (_a = passwordInput.current) == null ? void 0 : _a.focus();
      },
      onFinish: () => reset()
    });
  };
  const closeModal = () => {
    setConfirmingUserDeletion(false);
    reset();
  };
  return /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsx(
      SectionTitle,
      {
        title: "Delete Account",
        description: "Once your account is deleted, all of its resources and data\n                    will be permanently deleted. Before deleting your account,\n                    please download any data or information that you wish to\n                    retain."
      }
    ),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(Button, { onClick: () => setConfirmingUserDeletion(true), variant: "destructive", children: "Delete Account" }) }),
    /* @__PURE__ */ jsx(Dialog, { open: confirmingUserDeletion, onOpenChange: setConfirmingUserDeletion, children: /* @__PURE__ */ jsxs(DialogContent, { children: [
      /* @__PURE__ */ jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsx(DialogTitle, { children: "Are you sure you want to delete your account?" }),
        /* @__PURE__ */ jsx(DialogDescription, { children: "Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account." })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: deleteUser, children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "password", className: "sr-only", children: "Password" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "password",
              type: "password",
              name: "password",
              value: data.password,
              onChange: (e) => setData("password", e.target.value),
              autoFocus: true,
              placeholder: "Password"
            }
          ),
          /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
        ] }),
        /* @__PURE__ */ jsx(DialogFooter, { children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Button, { variant: "outline", type: "button", onClick: closeModal, children: "Cancel" }),
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "destructive",
              className: "ml-2",
              disabled: processing,
              children: "Delete Account"
            }
          )
        ] }) })
      ] })
    ] }) })
  ] });
}
export {
  DeleteUserForm as default
};
