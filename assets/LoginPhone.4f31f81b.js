import{A as w}from"./UserLayout.0e6427b0.js";import{H as y,L as v,G as g,r as a,o as n,h as k,w as i,b as d,d as e,I as L,J as u,K as V,c as p,t as f,g as h,a3 as F,n as T,e as b}from"./app.b2799c92.js";import{_ as C}from"./_plugin-vue_export-helper.cdc0426e.js";import"./toastify.02e3e2f5.js";const U={components:{Head:y,UserLayout:w,Link:v},data:()=>({passwordFieldType:"password"}),props:{errors:Object},methods:{submit(){this.form.post(route("login_post"),{preserveScroll:!0,onFinish:()=>{this.form.reset("password")}})},switchVisibility(){this.passwordFieldType=this.passwordFieldType==="password"?"text":"password"}},setup(){return{form:g({email:"",password:""})}},mounted(){}},j={class:"pt-6 px-4 mx-4"},B=e("h1",{class:"underline underline-offset-8 mb-10 text-center text-lg font-bold"},"\xA0\xA0\xA0\u30ED\u30B0\u30A4\u30F3\xA0\xA0\xA0",-1),H={class:"mb-6"},N=e("label",{for:"text1",class:"block text-base font-bold pl-2 mb-2"},"\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",-1),D={key:0,class:"text-red-500 text-sm mt-1"},M={class:"mb-6"},S=e("label",{for:"text2",class:"block text-base font-bold pl-2 mb-2"},"\u30D1\u30B9\u30EF\u30FC\u30C9",-1),A=["type"],q={key:0,class:"text-red-500 text-sm mt-1"},z={class:"block mb-8 px-2"},E={class:"flex items-center cursor-pointer gap-2"},G=e("span",{class:"text-base"},"\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u8868\u793A",-1),I={class:"mb-8 text-center border border-yellow-600 rounded-full p-0.5 w-fit mx-auto"},J=["disabled"],K={class:"flex flex-wrap gap-x-6 gap-y-4 justify-center text-sm pt-2 pb-10"},O={class:"flex items-center justify-center"},P={class:"flex items-center justify-center"};function Q(r,t,l,s,R,c){const _=a("Head"),m=a("Link"),x=a("UserLayout");return n(),k(x,null,{default:i(()=>[d(_,{title:"\u30ED\u30B0\u30A4\u30F3"}),e("div",j,[B,e("form",{onSubmit:t[3]||(t[3]=L(o=>c.submit(),["prevent"]))},[e("div",H,[N,u(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>s.form.email=o),id:"text1",type:"email",class:"w-full h-10 text-neutral-700 border-yellow-300 focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u4F8B) user@torevegas.com"},null,512),[[V,s.form.email]]),l.errors.email?(n(),p("div",D,f(l.errors.email),1)):h("",!0)]),e("div",M,[S,u(e("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>s.form.password=o),id:"text2",type:r.passwordFieldType,class:"w-full h-10 text-neutral-700 shadow-xs border-yellow-300 focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u534A\u89D2\u82F1\u6570\u5B576\uFF5E20\u6587\u5B57"},null,8,A),[[F,s.form.password]]),l.errors.password?(n(),p("div",q,f(l.errors.password),1)):h("",!0)]),e("div",z,[e("label",E,[e("input",{type:"checkbox",onClick:t[2]||(t[2]=o=>c.switchVisibility()),class:"w-5 h-5 rounded border-neutral-300 text-neutral-600 shadow-sm focus:ring-neutral-500"}),G])]),e("div",I,[e("button",{type:"submit",class:T([{"opacity-50":s.form.processing},"inline-block items-center px-10 py-1 rounded-full font-semibold text-base text-white uppercase bg-theme bg-theme-hover"]),disabled:s.form.processing}," \u30ED\u30B0\u30A4\u30F3 ",10,J)]),e("div",K,[e("div",O,[d(m,{href:r.route("password.request"),class:"underline underline-offset-4 text-neutral-600 hover:text-yellow-500"},{default:i(()=>[b("\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5FD8\u308C\u305F\u65B9\u306F\u3053\u3061\u3089")]),_:1},8,["href"])]),e("div",P,[d(m,{href:r.route("register"),class:"underline underline-offset-4 text-neutral-600 hover:text-yellow-500"},{default:i(()=>[b("\u65B0\u898F\u4F1A\u54E1\u767B\u9332\u306F\u3053\u3061\u3089")]),_:1},8,["href"])])])],32)])]),_:1})}const $=C(U,[["render",Q]]);export{$ as default};
