import{m as p,G as f,o as i,c as m,d as t,b as r,C as e,w as _,W as b,n as x,I as g,g as v}from"./app.f08f81c3.js";import{_ as l,a as n}from"./TextInput.fe1a8937.js";import{_ as d}from"./InputLabel.18889905.js";const y=t("header",null,[t("h2",{class:"text-lg font-medium text-neutral-600"},"\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u66F4\u65B0\u3059\u308B"),t("p",{class:"mt-1 text-sm text-neutral-600"},"\u5B89\u5168\u3092\u78BA\u4FDD\u3059\u308B\u306B\u306F\u3001\u30A2\u30AB\u30A6\u30F3\u30C8\u3067\u9577\u304F\u3066\u30E9\u30F3\u30C0\u30E0\u306A\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3088\u3046\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002")],-1),V=["onSubmit"],k={class:"flex gap-4 items-center justify-end"},h={key:0,class:"text-sm text-neutral-600"},I={class:"text-center border border-[#00B1FF] rounded-full p-0.5 w-fit"},S=["disabled"],N={__name:"UpdatePasswordForm",setup(B){const u=p(null),c=p(null),s=f({current_password:"",password:"",password_confirmation:""}),w=()=>{s.put(route("password.update"),{preserveScroll:!0,onSuccess:()=>s.reset(),onError:()=>{s.errors.password&&(s.reset("password","password_confirmation"),u.value.focus()),s.errors.current_password&&(s.reset("current_password"),c.value.focus())}})};return(C,o)=>(i(),m("section",null,[y,t("form",{onSubmit:g(w,["prevent"]),class:"mt-6 space-y-4"},[t("div",null,[r(d,{for:"current_password",value:"\u73FE\u5728\u306E\u30D1\u30B9\u30EF\u30FC\u30C9",class:"text-neutral-600 pl-2"}),r(l,{id:"current_password",ref_key:"currentPasswordInput",ref:c,modelValue:e(s).current_password,"onUpdate:modelValue":o[0]||(o[0]=a=>e(s).current_password=a),type:"password",class:"mt-1 block w-full",autocomplete:"current-password"},null,8,["modelValue"]),r(n,{message:e(s).errors.current_password,class:"ml-2 mt-2"},null,8,["message"])]),t("div",null,[r(d,{for:"password",value:"\u65B0\u3057\u3044\u30D1\u30B9\u30EF\u30FC\u30C9",class:"text-neutral-600 pl-2"}),r(l,{id:"password",ref_key:"passwordInput",ref:u,modelValue:e(s).password,"onUpdate:modelValue":o[1]||(o[1]=a=>e(s).password=a),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),r(n,{message:e(s).errors.password,class:"ml-2 mt-2"},null,8,["message"])]),t("div",null,[r(d,{for:"password_confirmation",value:"\u30D1\u30B9\u30EF\u30FC\u30C9\u306E\u78BA\u8A8D",class:"text-neutral-600 pl-2"}),r(l,{id:"password_confirmation",modelValue:e(s).password_confirmation,"onUpdate:modelValue":o[2]||(o[2]=a=>e(s).password_confirmation=a),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),r(n,{message:e(s).errors.password_confirmation,class:"ml-2 mt-2"},null,8,["message"])]),t("div",k,[r(b,{"enter-from-class":"opacity-0","leave-to-class":"opacity-0",class:"transition ease-in-out"},{default:_(()=>[e(s).recentlySuccessful?(i(),m("p",h,"\u4FDD\u5B58\u3055\u308C\u307E\u3057\u305F\u3002")):v("",!0)]),_:1}),t("div",I,[t("button",{type:"submit",class:x([{"opacity-50":e(s).processing},"inline-block items-center px-10 py-1 bg-theme bg-theme-hover rounded-full font-semibold text-base text-white uppercase tracking-widest"]),disabled:e(s).processing}," \u4FDD\u5B58 ",10,S)])])],40,V)]))}};export{N as default};
