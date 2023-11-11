import { j as jsxs, a as jsx } from "../ssr.js";
import { a as CardHeader, b as CardTitle, d as CardDescription } from "./card-af958e06.js";
function SectionTitle({
  title,
  description
}) {
  return /* @__PURE__ */ jsxs(CardHeader, { children: [
    /* @__PURE__ */ jsx(CardTitle, { children: title }),
    /* @__PURE__ */ jsx(CardDescription, { children: description })
  ] });
}
export {
  SectionTitle as S
};
