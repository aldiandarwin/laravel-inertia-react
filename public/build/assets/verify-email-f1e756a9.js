import{W as s,j as i,F as a,a as e,d}from"./app-c8c77ab7.js";import{G as l}from"./guest-layout-dfd2c837.js";import{B as m,b as u}from"./button-cca9d30a.js";import"./theme-toggle-c5178177.js";import"./icon-ca570b9e.js";import"./IconX-c62e2b39.js";import"./card-9205d7db.js";function c({status:t}){const{post:r,processing:n}=s({});return i(a,{children:[e("div",{className:"mb-4 text-sm text-muted-foreground",children:"Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."}),t==="verification-link-sent"&&e("div",{className:"mb-4 text-sm font-medium text-green-600",children:"A new verification link has been sent to the email address you provided during registration."}),e("form",{onSubmit:o=>{o.preventDefault(),r(route("verification.send"))},children:i("div",{className:"mt-4 flex items-center justify-between",children:[e(m,{disabled:n,children:"Resend Verification Email"}),e(d,{href:route("logout"),method:"post",as:"button",className:u({variant:"link"}),children:"Log Out"})]})})]})}c.layout=t=>e(l,{title:"Verify Email",children:t});export{c as default};
