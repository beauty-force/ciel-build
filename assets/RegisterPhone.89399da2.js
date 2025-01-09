import{H as x,L as v,u as b,a as k,G as V,r as n,o as d,h as F,w as _,b as l,d as e,I as L,t as T,c as f,J as i,K as c,n as u,g as h,a3 as C,e as p}from"./app.509c113c.js";import{_ as U}from"./Checkbox.ab559ab5.js";import{A as I}from"./UserLayout.7608d600.js";import{_ as A,a as B}from"./TextInput.c44cd60d.js";import{_ as E}from"./_plugin-vue_export-helper.cdc0426e.js";import"./toastify.ba563aa9.js";const H={components:{Checkbox:U,Head:x,AppLayout:I,InputError:A,TextInput:B,Link:v},data:()=>({passwordFieldType:"password",step_integer:0,step_titles:["\u3054\u672C\u4EBA\u8A8D\u8A3C","\u8A8D\u8A3C\u30B3\u30FC\u30C9\u5165\u529B","\u30A2\u30AB\u30A6\u30F3\u30C8\u767B\u9332"],is_processing:!1,data:{}}),props:{errors:Object},methods:{submit(){this.step_integer==0?this.form.post(route("register.phone.send"),{onFinish:()=>{this.data=b().props.value.flash,this.data.data&&this.data.data.status==1&&(this.step_integer=1)}}):this.step_integer==1?this.form.post(route("register.phone.verify"),{onFinish:()=>{this.data=b().props.value.flash,this.data.data&&(this.data.data.status==1?this.step_integer=2:this.step_integer=0)}}):this.form.post(route("register.phone.register"),{onFinish:()=>{}})},submit_phone(){const r={phone:this.form.phone};this.is_processing=!0,k.post(route("register.phone.send"),r).then(t=>{t.status==201||t.status==200,this.is_processing=!1}).catch(t=>{this.is_processing=!1})},switchVisibility(){this.passwordFieldType=this.passwordFieldType==="password"?"text":"password"}},setup(){return{form:V({phone:"",code:"",email:"",password:"",invite_code:new URLSearchParams(window.location.search).get("invitation_code")})}},mounted(){}},N={class:"pt-6 md:px-6 px-4"},D={class:"underline underline-offset-8 mb-10 text-center text-lg font-bold"},M={key:0,class:"flex flex-col items-center"},P={class:"mb-10 w-full"},S=e("label",{for:"phone",class:"block text-base font-bold pl-2 mb-2"},[p("\u96FB\u8A71\u756A\u53F7"),e("span",{class:"text-red-500 pl-1"},"*")],-1),j=["disabled"],R=e("div",{class:"inline-block items-center px-10 py-1 rounded-full font-semibold text-base text-white uppercase bg-theme bg-theme-hover"}," \u8A8D\u8A3C\u3078\u9032\u3080 ",-1),z=[R],G={key:1},J={class:"mb-8"},K=e("label",{for:"code",class:"block text-base font-bold pl-2 mb-2"},"sms\u306B\u8A18\u8F09\u3055\u308C\u305F4\u6841\u306E\u8A8D\u8A3C\u30B3\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002",-1),O={class:"mb-8 text-center border border-yellow-600 rounded-full p-0.5 w-fit mx-auto"},q=["disabled"],Q={key:2},W={class:"mb-4"},X=e("label",{for:"invite_code",class:"block text-base font-bold pl-2 mb-2",title:"\u3042\u306A\u305F\u3092\u62DB\u5F85\u3057\u305F\u53CB\u9054\u306E\u62DB\u5F85\u30B3\u30FC\u30C9"},"\u62DB\u5F85\u30B3\u30FC\u30C9",-1),Y={class:"mb-4"},Z=e("label",{for:"email",class:"block text-base font-bold pl-2 mb-2"},[p("\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9"),e("span",{class:"text-red-500 pl-1"},"*")],-1),$={class:"block mb-4"},ee=e("label",{for:"password",class:"block text-base font-bold pl-2 mb-2"},[p("\u30D1\u30B9\u30EF\u30FC\u30C9"),e("span",{class:"text-red-500 pl-1"},"*")],-1),se=["type"],te={class:"block mb-8 px-2"},oe={class:"flex items-center cursor-pointer gap-2"},re=e("span",{class:"text-base"},"\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u8868\u793A",-1),le={class:"mb-8 text-center border border-yellow-600 rounded-full p-0.5 w-fit mx-auto"},ie=["disabled"],ae={class:"flex items-center justify-center text-sm my-4"};function ne(r,t,de,s,ce,m){const g=n("Head"),a=n("InputError"),y=n("Link"),w=n("AppLayout");return d(),F(w,null,{default:_(()=>[l(g,{title:"\u65B0\u898F\u767B\u9332"}),e("div",N,[e("form",{onSubmit:t[6]||(t[6]=L((...o)=>m.submit&&m.submit(...o),["prevent"]))},[e("h2",D,"\xA0\xA0\xA0"+T(r.step_titles[r.step_integer])+"\xA0\xA0",1),r.step_integer==0?(d(),f("div",M,[e("div",P,[S,i(e("input",{"onUpdate:modelValue":t[0]||(t[0]=o=>s.form.phone=o),id:"phone",type:"tel",class:"w-full text-neutral-700 border-yellow-300 focus:border-yellow-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"},null,512),[[c,s.form.phone]]),l(a,{class:"mt-2",message:s.form.errors.phone},null,8,["message"])]),e("button",{type:"submit",class:u([{"opacity-50":s.form.processing},"inline-block items-center mb-8 text-center border border-yellow-600 rounded-full p-0.5 w-fit mx-auto hover:scale-105"]),disabled:s.form.processing},z,10,j)])):h("",!0),r.step_integer==1?(d(),f("div",G,[e("div",J,[K,i(e("input",{"onUpdate:modelValue":t[1]||(t[1]=o=>s.form.code=o),id:"code",type:"tel",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u8A8D\u8A3C\u30B3\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044"},null,512),[[c,s.form.code]]),l(a,{class:"mt-2",message:s.form.errors.code},null,8,["message"])]),e("div",O,[e("button",{type:"submit",class:u([{"opacity-50":s.form.processing},"inline-block items-center px-10 py-1 rounded-full font-semibold text-base text-white uppercase bg-theme bg-theme-hover"]),disabled:s.form.processing}," \u6B21\u3078 ",10,q)])])):h("",!0),r.step_integer==2?(d(),f("div",Q,[e("div",W,[X,i(e("input",{"onUpdate:modelValue":t[2]||(t[2]=o=>s.form.invite_code=o),id:"invite_code",type:"text",class:"text-neutral-700 h-10 w-full border-yellow-300 focus:border-yellow-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder:text-neutral-300",placeholder:"\u62DB\u5F85\u3057\u305F\u53CB\u9054\u306E\u62DB\u5F85\u30B3\u30FC\u30C9\u3092\u5165\u529B\u3057\u307E\u3059",autocomplete:"off"},null,512),[[c,s.form.invite_code]])]),e("div",Y,[Z,i(e("input",{"onUpdate:modelValue":t[3]||(t[3]=o=>s.form.email=o),id:"email",type:"email",class:"text-neutral-700 h-10 w-full border-yellow-300 focus:border-yellow-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder:text-neutral-300",placeholder:"\u4F8B) user@eve-gacha.com"},null,512),[[c,s.form.email]]),l(a,{class:"mt-2",message:s.form.errors.email},null,8,["message"])]),e("div",$,[ee,i(e("input",{"onUpdate:modelValue":t[4]||(t[4]=o=>s.form.password=o),id:"password",type:r.passwordFieldType,class:"text-neutral-700 h-10 w-full border-yellow-300 focus:border-yellow-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder:text-neutral-300",placeholder:"\u534A\u89D2\u82F1\u6570\u5B576\uFF5E20\u6587\u5B57"},null,8,se),[[C,s.form.password]]),l(a,{class:"mt-2",message:s.form.errors.password},null,8,["message"])]),e("div",te,[e("label",oe,[e("input",{type:"checkbox",onClick:t[5]||(t[5]=o=>m.switchVisibility()),class:"w-5 h-5 rounded border-yellow-300 text-neutral-600 shadow-sm focus:ring-neutral-500"}),re])]),e("div",le,[e("button",{type:"submit",class:u([{"opacity-50":s.form.processing},"inline-block items-center px-10 py-1 rounded-full font-semibold text-base text-white uppercase bg-theme bg-theme-hover"]),disabled:s.form.processing}," \u767B\u9332 ",10,ie)])])):h("",!0),e("div",ae,[l(y,{href:r.route("login"),class:"underline underline-offset-4 text-neutral-600 hover:text-sky-500"},{default:_(()=>[p("\u3059\u3067\u306B\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u304A\u6301\u3061\u306E\u65B9\u306F\u3053\u3061\u3089")]),_:1},8,["href"])])],32)])]),_:1})}const _e=E(H,[["render",ne]]);export{_e as default};
