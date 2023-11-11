import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import { G as GuestLayout } from "./guest-layout-8199b551.js";
import { useForm, Link } from "@inertiajs/react";
import { B as Button, b as buttonVariants } from "./button-f266fad0.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "./theme-toggle-477f58e9.js";
import "./icon-9c3bf825.js";
import "@tabler/icons-react";
import "./card-af958e06.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
function VerifyEmail({ status }) {
  const { post, processing } = useForm({});
  const submit = (e) => {
    e.preventDefault();
    post(route("verification.send"));
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm text-muted-foreground", children: "Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another." }),
    status === "verification-link-sent" && /* @__PURE__ */ jsx("div", { className: "mb-4 text-sm font-medium text-green-600", children: "A new verification link has been sent to the email address you provided during registration." }),
    /* @__PURE__ */ jsx("form", { onSubmit: submit, children: /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsx(Button, { disabled: processing, children: "Resend Verification Email" }),
      /* @__PURE__ */ jsx(
        Link,
        {
          href: route("logout"),
          method: "post",
          as: "button",
          className: buttonVariants({
            variant: "link"
          }),
          children: "Log Out"
        }
      )
    ] }) })
  ] });
}
VerifyEmail.layout = (page) => /* @__PURE__ */ jsx(GuestLayout, { title: "Verify Email", children: page });
export {
  VerifyEmail as default
};
