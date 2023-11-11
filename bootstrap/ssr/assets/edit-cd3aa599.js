import { j as jsxs, F as Fragment, a as jsx } from "../ssr.js";
import UpdatePasswordForm from "./update-password-form-428aaf0d.js";
import UpdateProfileInformation from "./update-profile-information-form-1909ead3.js";
import { Head } from "@inertiajs/react";
import DeleteUserForm from "./delete-user-form-e354ec6a.js";
import { U as UserLayout } from "./user-layout-1b5bc50d.js";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/react/server";
import "react";
import "./input-650dc0c5.js";
import "./button-f266fad0.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@headlessui/react";
import "./card-af958e06.js";
import "./label-903e7f9f.js";
import "@radix-ui/react-label";
import "./dialog-23dd0dd7.js";
import "@radix-ui/react-dialog";
import "@tabler/icons-react";
import "./section-title-34ee1931.js";
import "./separator-7d1d1146.js";
import "./theme-toggle-477f58e9.js";
import "./icon-9c3bf825.js";
import "./dropdown-menu-61c72fef.js";
import "@radix-ui/react-dropdown-menu";
import "cmdk";
import "@radix-ui/react-avatar";
import "@radix-ui/react-separator";
function Edit({
  mustVerifyEmail,
  status
}) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Profile" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-2xl space-y-6", children: [
      /* @__PURE__ */ jsx(UpdateProfileInformation, { mustVerifyEmail, status }),
      /* @__PURE__ */ jsx(UpdatePasswordForm, {}),
      /* @__PURE__ */ jsx(DeleteUserForm, {})
    ] })
  ] });
}
Edit.layout = (page) => /* @__PURE__ */ jsx(UserLayout, { children: page });
export {
  Edit as default
};
