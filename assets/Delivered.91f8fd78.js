import{H as x,L as m,r as c,o as s,c as o,b as n,w as i,F as l,d as e,f as d,h as b,e as v,t as r,n as y,g}from"./app.509c113c.js";import{A as k}from"./UserLayout.7608d600.js";import{_ as w}from"./_plugin-vue_export-helper.cdc0426e.js";import"./toastify.ba563aa9.js";const j={components:{Head:x,AppLayout:k,Link:m},props:{errors:Object,gacha:Object,category_share:Object,products:Object},data(){return{main_tab:[{title:"\u672A\u9078\u629E",route_url:route("user.products"),is_active:!1},{title:"\u767A\u9001\u5F85\u3061",route_url:route("user.products.wait"),is_active:!1},{title:"\u767A\u9001\u6E08\u307F",route_url:route("user.products.delivered"),is_active:!0}]}}},L={class:"p-4 md:p-6 w-full"},A=e("h1",{class:"underline underline-offset-8 mb-3 text-center text-lg font-bold"},"\xA0\xA0\xA0\u7372\u5F97\u3057\u305F\u5546\u54C1\u4E00\u89A7\xA0\xA0\xA0",-1),B={class:"sticky top-20 bg-white py-3"},C={class:"w-full text-neutral-500 space-x-1 border-b-4 border-yellow-500 px-4 flex justify-center"},H={key:0,class:"grid md:grid-cols-2 gap-1"},N={class:"mt-1 py-2 px-3 border rounded-md hover:bg-slate-100"},O={class:"flex border-neutral-200 items-start w-full"},V=["for"],D=["src"],F={class:"h-24 ml-2 flex flex-col justify-evenly"},T={class:"text-sm px-3"},z={class:"text-sm px-3"},E={key:0,class:"flex bg-red-500 justify-center items-center rounded-full px-3 mx-3 py-0.5 text-white w-fit"},P=e("img",{src:"/images/icon_cash.png",class:"h-4 mr-1"},null,-1),S={class:"text-sm px-3"},$={key:1,class:"mb-6"};function q(G,I,a,J,_,K){const u=c("Head"),p=c("Link"),h=c("AppLayout");return s(),o(l,null,[n(u,{title:"\u7372\u5F97\u3057\u305F\u5546\u54C1\u4E00\u89A7"}),n(h,null,{default:i(()=>[e("div",L,[A,e("div",B,[e("div",C,[(s(!0),o(l,null,d(_.main_tab,(t,f)=>(s(),b(p,{href:t.route_url,class:y(["-mb-[1px] flex-1 inline-block text-center py-1.5 rounded-t-md border-yellow-500 border-x border-t",{"bg-yellow-500 text-white":t.is_active,"hover:bg-yellow-400 hover:text-white":!t.is_active}])},{default:i(()=>[v(r(t.title),1)]),_:2},1032,["href","class"]))),256))])]),a.products.data.length?(s(),o("div",H,[(s(!0),o(l,null,d(a.products.data,(t,f)=>(s(),o("div",N,[e("div",O,[e("label",{for:"checkbox"+t.id,class:"flex-1 cursor-pointer flex items-start text-sm py-1 px-2"},[e("img",{src:t.image,class:"h-24 object-contain"},null,8,D),e("div",F,[e("div",T,r(t.name),1),e("div",z,r(t.rare),1),t.is_lost_product!=2?(s(),o("div",E,[P,e("span",null,r(t.point)+"\xA0PT",1)])):g("",!0),e("div",S,"\u8FFD\u8DE1\u756A\u53F7: "+r(t.tracking_number),1)])],8,V)])]))),256))])):(s(),o("div",$," \u5546\u54C1\u306F\u3042\u308A\u307E\u305B\u3093\u3002 "))])]),_:1})],64)}const W=w(j,[["render",q]]);export{W as default};
