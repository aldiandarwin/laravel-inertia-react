import{W as n,j as s,F as d,a as e,b as u}from"./app-c8c77ab7.js";import{G as c}from"./guest-layout-dfd2c837.js";import{I as p,a as w}from"./input-f04e2444.js";import{B as f}from"./button-cca9d30a.js";import"./theme-toggle-c5178177.js";import"./icon-ca570b9e.js";import"./IconX-c62e2b39.js";import"./card-9205d7db.js";function g({status:t}){const{data:o,setData:r,post:m,processing:l,errors:i}=n({email:""});return s(d,{children:[e(u,{title:"Forgot Password"}),e("div",{className:"mb-4 text-sm text-muted-foreground",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),t&&e("div",{className:"mb-4 text-sm font-medium text-green-600",children:t}),s("form",{onSubmit:a=>{a.preventDefault(),m(route("password.email"))},children:[e(p,{id:"email",type:"email",name:"email",value:o.email,className:"mt-1 block w-full",onChange:a=>r("email",a.target.value)}),e(w,{message:i.email,className:"mt-2"}),e("div",{className:"mt-4 flex items-center justify-end",children:e(f,{className:"ml-4",disabled:l,children:"Email Password Reset Link"})})]})]})}g.layout=t=>e(c,{title:"Forgot Password",children:t});export{g as default};