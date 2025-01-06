import{j as p,G as f,o as i,c as m,d as r,b as o,C as e,n as _,w as b,U as g,I as v,y}from"./app.09a9251b.js";import{a as l,b as n,_ as d}from"./TextInput.69922202.js";const V=r("header",null,[r("h2",{class:"text-lg font-medium"},"\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u66F4\u65B0\u3059\u308B"),r("p",{class:"mt-1 text-sm"},"\u5B89\u5168\u3092\u78BA\u4FDD\u3059\u308B\u306B\u306F\u3001\u30A2\u30AB\u30A6\u30F3\u30C8\u3067\u9577\u304F\u3066\u30E9\u30F3\u30C0\u30E0\u306A\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u4F7F\u7528\u3059\u308B\u3088\u3046\u306B\u3057\u3066\u304F\u3060\u3055\u3044\u3002")],-1),x=["onSubmit"],k={class:"flex gap-4 items-center"},h={class:"text-center border border-[#d9cd93] rounded-full p-0.5 w-fit"},I=["disabled"],S={key:0,class:"text-sm"},N={__name:"UpdatePasswordForm",setup(U){const c=p(null),u=p(null),s=f({current_password:"",password:"",password_confirmation:""}),w=()=>{s.put(route("password.update"),{preserveScroll:!0,onSuccess:()=>s.reset(),onError:()=>{s.errors.password&&(s.reset("password","password_confirmation"),c.value.focus()),s.errors.current_password&&(s.reset("current_password"),u.value.focus())}})};return(C,a)=>(i(),m("section",null,[V,r("form",{onSubmit:v(w,["prevent"]),class:"mt-6 space-y-6"},[r("div",null,[o(d,{for:"current_password",value:"\u73FE\u5728\u306E\u30D1\u30B9\u30EF\u30FC\u30C9",class:"pl-2"}),o(l,{id:"current_password",ref_key:"currentPasswordInput",ref:u,modelValue:e(s).current_password,"onUpdate:modelValue":a[0]||(a[0]=t=>e(s).current_password=t),type:"password",class:"mt-1 block w-full",autocomplete:"current-password"},null,8,["modelValue"]),o(n,{message:e(s).errors.current_password,class:"ml-2 mt-2"},null,8,["message"])]),r("div",null,[o(d,{for:"password",value:"\u65B0\u3057\u3044\u30D1\u30B9\u30EF\u30FC\u30C9",class:"pl-2"}),o(l,{id:"password",ref_key:"passwordInput",ref:c,modelValue:e(s).password,"onUpdate:modelValue":a[1]||(a[1]=t=>e(s).password=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),o(n,{message:e(s).errors.password,class:"ml-2 mt-2"},null,8,["message"])]),r("div",null,[o(d,{for:"password_confirmation",value:"\u30D1\u30B9\u30EF\u30FC\u30C9\u306E\u78BA\u8A8D",class:"pl-2"}),o(l,{id:"password_confirmation",modelValue:e(s).password_confirmation,"onUpdate:modelValue":a[2]||(a[2]=t=>e(s).password_confirmation=t),type:"password",class:"mt-1 block w-full",autocomplete:"new-password"},null,8,["modelValue"]),o(n,{message:e(s).errors.password_confirmation,class:"ml-2 mt-2"},null,8,["message"])]),r("div",k,[r("div",h,[r("button",{type:"submit",class:_([{"opacity-25":e(s).processing},"inline-block items-center px-10 py-1 bg-gradient-to-b from-[#d9cd93] to-[#70612a] rounded-full font-semibold text-md text-white uppercase tracking-widest hover:bg-indigo-900 active:bg-indigo-900"]),disabled:e(s).processing}," \u4FDD\u5B58 ",10,I)]),o(g,{"enter-from-class":"opacity-0","leave-to-class":"opacity-0",class:"transition ease-in-out"},{default:b(()=>[e(s).recentlySuccessful?(i(),m("p",S,"\u4FDD\u5B58\u3055\u308C\u307E\u3057\u305F\u3002")):y("",!0)]),_:1})])],40,x)]))}};export{N as default};
