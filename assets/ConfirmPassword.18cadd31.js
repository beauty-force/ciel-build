import{G as n,o as d,h as l,w as t,b as a,C as o,H as c,d as e,e as p,n as f,I as u}from"./app.509c113c.js";import{_}from"./GuestLayout.1d292927.js";import{a as w,_ as b}from"./TextInput.c44cd60d.js";import{_ as h}from"./InputLabel.ea10f7be.js";import{_ as x}from"./PrimaryButton.a27161b2.js";import"./ApplicationLogo.e3d2d239.js";import"./_plugin-vue_export-helper.cdc0426e.js";const g=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),C=["onSubmit"],V={class:"flex justify-end mt-4"},S={__name:"ConfirmPassword",setup(v){const s=n({password:""}),i=()=>{s.post(route("password.confirm"),{onFinish:()=>s.reset()})};return(y,r)=>(d(),l(_,null,{default:t(()=>[a(o(c),{title:"Confirm Password"}),g,e("form",{onSubmit:u(i,["prevent"])},[e("div",null,[a(h,{for:"password",value:"Password"}),a(w,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o(s).password,"onUpdate:modelValue":r[0]||(r[0]=m=>o(s).password=m),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),a(b,{class:"mt-2",message:o(s).errors.password},null,8,["message"])]),e("div",V,[a(x,{class:f(["ml-4",{"opacity-25":o(s).processing}]),disabled:o(s).processing},{default:t(()=>[p(" Confirm ")]),_:1},8,["class","disabled"])])],40,C)]),_:1}))}};export{S as default};
