import { a as jsx, F as Fragment, j as jsxs } from "../ssr.js";
import { useEffect } from "react";
import { G as GuestLayout } from "./guest-layout-8199b551.js";
import { I as Input, a as InputError } from "./input-650dc0c5.js";
import { useForm } from "@inertiajs/react";
import { L as Label } from "./label-903e7f9f.js";
import { B as Button } from "./button-f266fad0.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./theme-toggle-477f58e9.js";
import "./icon-9c3bf825.js";
import "@tabler/icons-react";
import "./card-af958e06.js";
import "@radix-ui/react-label";
import "class-variance-authority";
import "@radix-ui/react-slot";
import "clsx";
import "tailwind-merge";
function ResetPassword({ token, email }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    token,
    email,
    password: "",
    password_confirmation: ""
  });
  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);
  const submit = (e) => {
    e.preventDefault();
    post(route("password.store"));
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("form", { onSubmit: submit, children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          id: "email",
          type: "email",
          name: "email",
          value: data.email,
          className: "mt-1 block w-full",
          autoComplete: "username",
          onChange: (e) => setData("email", e.target.value)
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.email, className: "mt-2" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "password", children: "Password" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          id: "password",
          type: "password",
          name: "password",
          value: data.password,
          className: "mt-1 block w-full",
          autoComplete: "new-password",
          autoFocus: true,
          onChange: (e) => setData("password", e.target.value)
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.password, className: "mt-2" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
      /* @__PURE__ */ jsx(Label, { htmlFor: "password_confirmation", children: "Confirm Password" }),
      /* @__PURE__ */ jsx(
        Input,
        {
          type: "password",
          name: "password_confirmation",
          value: data.password_confirmation,
          className: "mt-1 block w-full",
          autoComplete: "new-password",
          onChange: (e) => setData("password_confirmation", e.target.value)
        }
      ),
      /* @__PURE__ */ jsx(InputError, { message: errors.password_confirmation, className: "mt-2" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-4 flex items-center justify-end", children: /* @__PURE__ */ jsx(Button, { className: "ml-4", disabled: processing, children: "Reset Password" }) })
  ] }) });
}
ResetPassword.layout = (page) => /* @__PURE__ */ jsx(GuestLayout, { title: "Reset Password", children: page });
export {
  ResetPassword as default
};
