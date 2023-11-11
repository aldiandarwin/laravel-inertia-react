import { a as jsx } from "../ssr.js";
import * as icons from "@tabler/icons-react";
import { c as cn } from "./button-f266fad0.js";
function Icon({ className, name, ...props }) {
  const TablerIcon = icons[name];
  return /* @__PURE__ */ jsx(TablerIcon, { className: cn("h-5 w-5 stroke-[1.25]", className), ...props });
}
export {
  Icon as I
};
