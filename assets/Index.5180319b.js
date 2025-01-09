import{H as A,L,G as V,r as x,o as n,c,b as m,w as b,F as u,d as e,f as k,h as O,e as h,t as d,n as _,J as g,a2 as w,g as p}from"./app.509c113c.js";import{A as F}from"./UserLayout.7608d600.js";import{_ as B}from"./_plugin-vue_export-helper.cdc0426e.js";import"./toastify.ba563aa9.js";const H={components:{Head:A,AppLayout:F,Link:L},props:{errors:Object,gacha:Object,category_share:Object,products:Object,profile:Object},data(){return{hasCheck:!1,main_tab:[{title:"\u672A\u9078\u629E",route_url:route("user.products"),is_active:!0},{title:"\u767A\u9001\u5F85\u3061",route_url:route("user.products.wait"),is_active:!1},{title:"\u767A\u9001\u6E08\u307F",route_url:route("user.products.delivered"),is_active:!1}],ready_delivery:0,products_count:0,isCheckAll:!1,_products:this.products.data.filter(r=>r.status==1)}},setup(r){return{form:V({checks:{}})}},methods:{changeCheck(){let r,s=!1;for(this._products=this.products.data.filter(l=>l.status==1),this.isCheckAll=this._products.length>0,r=0;r<this._products.length;r++)this.form.checks["id"+this._products[r].id]?s=!0:this.isCheckAll=!1;this.hasCheck=s},submit(r){let s,l=0;var o=0;for(s=0;s<this._products.length;s++)this.form.checks["id"+this._products[s].id]&&(l++,o=parseInt(o)+parseInt(this._products[s].point));r=="point"?o>0&&confirm("\u4EA4\u63DB\u3057\u307E\u3059\u304B\uFF1F \u9078\u629E\u3057\u305F"+l+"\u70B9\u306E\u5546\u54C1\u3092"+o+"pt\u3068\u4EA4\u63DB\u3057\u307E\u3059\u3002")&&this.form.post(route("user.products.point.exchange"),{onFinish:()=>{this.form.checks={},this.hasCheck=!1,this.isCheckAll=!1}}):l>0&&(this.products_count=l,this.ready_delivery=1)},back_delivery(){this.ready_delivery=0},submit_delivery(){this.profile.address?confirm(""+this.products_count+"\u70B9\u306E\u5546\u54C1\u3092\u914D\u9001\u3057\u307E\u3059\u304B\uFF1F")&&this.form.post(route("user.delivery.post"),{onFinish:()=>{this.ready_delivery=2,this.form.checks={},this.hasCheck=!1,this.isCheckAll=!1}}):alert("\u5165\u529B\u30A8\u30E9\u30FC\u3001\u914D\u9001\u5148\u60C5\u5831\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002")},checkall(){let r;for(this.hasCheck=!1,r=0;r<this._products.length;r++)this.form.checks["id"+this._products[r].id]=this.isCheckAll,this.hasCheck=this.isCheckAll}}},N={key:0,class:"p-4 md:p-6 w-full"},I=e("h1",{class:"underline underline-offset-8 mb-3 text-center text-lg font-bold"},"\xA0\xA0\xA0\u7372\u5F97\u3057\u305F\u5546\u54C1\u4E00\u89A7\xA0\xA0\xA0",-1),T={class:"sticky top-20 bg-white py-3"},U={class:"w-full text-neutral-500 space-x-1 border-b-4 border-yellow-500 px-4 flex justify-center"},D={class:"grid md:grid-cols-2 gap-1"},P={class:"mt-1 py-2 px-3 border rounded-md hover:bg-slate-100"},z={class:"flex border-neutral-200 items-start w-full"},E=["id","onUpdate:modelValue"],G=["for"],J=["src"],M={class:"h-24 ml-2 flex flex-col justify-evenly"},S={class:"text-sm px-3"},q={class:"text-sm px-3"},K={key:0,class:"flex bg-red-500 justify-center items-center rounded-full px-3 mx-3 py-0.5 text-white w-fit"},Q=e("img",{src:"/images/icon_cash.png",class:"h-4 mr-1"},null,-1),R={class:"sticky bottom-0 bg-white py-5 space-y-3"},W={class:"text-center relative"},X={class:"flex items-center cursor-pointer justify-center"},Y=e("span",{class:"ml-2 font-bold text-yellow-600"},"\u5168\u3066\u3092\u9078\u629E\u3059\u308B",-1),Z={class:"text-center text-neutral-600 flex justify-center items-center gap-2 text-xs md:text-sm"},$=["disabled"],ee=e("div",{class:"p-1"},"\u30DD\u30A4\u30F3\u30C8\u306B\u63DB\u3048\u308B",-1),te=[ee],se=["disabled"],oe=e("div",{class:"p-1"},"\u767A\u9001\u3059\u308B",-1),ie=[oe],re={key:1,class:"pt-6 md:px-6 px-4"},le=e("h2",{class:"mb-2 text-lg font-bold"},"\u914D\u9001\u5185\u5BB9\u306E\u78BA\u8A8D",-1),ne=e("hr",{class:"mb-6"},null,-1),ce={class:"mb-3 text-sm"},de={class:"mb-8 grid md:grid-cols-2"},ae={key:0,class:"mb-0 border-neutral-200 border-b p-1"},he={class:"flex border-neutral-200 items-center"},ue=["src"],_e=["for"],pe={class:"text-red-500"},me=e("div",{class:"mb-2 text-sm"},"\u914D\u9001\u5148\u60C5\u5831",-1),be={class:"mb-8 border border-neutral-200 rounded-md px-4 py-2 flex items-center justify-between"},fe={class:"flex-1"},xe={class:"font-bold text-sm"},ke={class:"text-sm"},ye={class:"text-sm"},ve={class:"mb-8 text-center text-neutral-50"},ge=["disabled"],we=["disabled"],Ce={key:2,class:"pt-6 md:px-6 px-4"},je=e("h2",{class:"mb-2 text-lg font-bold"},"\u914D\u9001\u624B\u7D9A\u304D\u5B8C\u4E86",-1),Ae=e("hr",{class:"mb-8"},null,-1),Le={class:"mb-8"},Ve=e("br",null,null,-1),Oe=e("br",null,null,-1),Fe=e("span",{class:"font-bold"},"\u6570\u65E5~\u6570\u9031\u9593",-1),Be=e("br",null,null,-1),He={class:"mb-6 text-center text-neutral-50 flex flex-wrap justify-center gap-2"};function Ne(r,s,l,o,i,a){const C=x("Head"),f=x("Link"),j=x("AppLayout");return n(),c(u,null,[m(C,{title:"\u7372\u5F97\u3057\u305F\u5546\u54C1\u4E00\u89A7"}),m(j,null,{default:b(()=>[i.ready_delivery==0?(n(),c("div",N,[I,e("div",T,[e("div",U,[(n(!0),c(u,null,k(i.main_tab,(t,y)=>(n(),O(f,{href:t.route_url,class:_(["-mb-[1px] flex-1 inline-block text-center py-1.5 rounded-t-md border-yellow-500 border-x border-t",{"bg-yellow-500 text-white":t.is_active,"hover:bg-yellow-400 hover:text-white":!t.is_active}])},{default:b(()=>[h(d(t.title),1)]),_:2},1032,["href","class"]))),256))])]),e("div",D,[(n(!0),c(u,null,k(l.products.data,(t,y)=>(n(),c("div",P,[e("div",z,[g(e("input",{id:"checkbox"+t.id,"onUpdate:modelValue":v=>o.form.checks["id"+t.id]=v,type:"checkbox",onChange:s[0]||(s[0]=v=>a.changeCheck()),class:"cursor-pointer rounded border-yellow-300 text-yellow-600 shadow-sm focus:ring-0 m-1"},null,40,E),[[w,o.form.checks["id"+t.id]]]),e("label",{for:"checkbox"+t.id,class:"flex-1 cursor-pointer flex items-start text-sm py-1 px-2"},[e("img",{src:t.image,class:"h-24 object-contain"},null,8,J),e("div",M,[e("div",S,d(t.name),1),e("div",q,d(t.rare),1),t.is_lost_product!=2?(n(),c("div",K,[Q,e("span",null,d(t.point)+"\xA0PT",1)])):p("",!0)])],8,G)])]))),256))]),e("div",R,[e("div",W,[e("label",X,[g(e("input",{type:"checkbox","onUpdate:modelValue":s[1]||(s[1]=t=>i.isCheckAll=t),onChange:s[2]||(s[2]=t=>a.checkall()),class:"h-5 w-5 cursor-pointer rounded border-yellow-400 text-yellow-600 focus:ring-0"},null,544),[[w,i.isCheckAll]]),Y])]),e("div",Z,[e("button",{type:"button",onClick:s[3]||(s[3]=t=>a.submit("point")),class:_([{"opacity-50":o.form.processing||!i.hasCheck},"w-40 md:w-60 inline-block items-center px-1 py-1 border rounded-md font-semibold text-white uppercase tracking-widest bg-theme bg-theme-hover focus:shadow-outline-blue transition ease-in-out duration-150"]),disabled:o.form.processing||!i.hasCheck},te,10,$),e("button",{type:"button",onClick:s[4]||(s[4]=t=>a.submit("delivery")),class:_([{"opacity-50":o.form.processing||!i.hasCheck},"w-40 md:w-60 inline-block items-center px-1 py-1 border rounded-md font-semibold text-white uppercase tracking-widest bg-theme bg-theme-hover focus:shadow-outline-lime transition ease-in-out duration-150"]),disabled:o.form.processing||!i.hasCheck},ie,10,se)])])])):p("",!0),i.ready_delivery==1?(n(),c("div",re,[le,ne,e("div",ce,"\u914D\u9001\u5546\u54C1 \uFF08\u8A08"+d(i.products_count)+"\u70B9\uFF09",1),e("div",de,[(n(!0),c(u,null,k(l.products.data,(t,y)=>(n(),c(u,null,[o.form.checks["id"+t.id]?(n(),c("div",ae,[e("div",he,[e("img",{src:t.image,class:"h-20 inline-block object-contain"},null,8,ue),e("label",{for:"checkbox"+t.id,class:"cursor-pointer h-20 flex flex-col justify-evenly flex-1 text-xs py-1 px-2"},[e("div",null,d(t.name),1),e("div",null,d(t.rare),1),e("div",pe,d(t.point)+"pt",1)],8,_e)])])):p("",!0)],64))),256))]),me,e("div",be,[e("div",fe,[l.profile.id?(n(),c(u,{key:0},[e("p",xe,d(l.profile.first_name+l.profile.last_name),1),e("p",ke,"\u3012"+d(l.profile.postal_code),1),e("p",ye,d(l.profile.address),1)],64)):p("",!0)]),e("div",null,[m(f,{href:r.route("user.address"),type:"button",onClick:s[5]||(s[5]=t=>a.back_delivery()),class:_([{"opacity-25":o.form.processing||!i.hasCheck},"inline-block items-center px-5 py-1.5 bg-neutral-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-neutral-700 active:bg-neutral-700 focus:outline-none focus:border-neutral-700 focus:shadow-outline-neutral transition ease-in-out duration-150 m-1"]),disabled:o.form.processing||!i.hasCheck},{default:b(()=>[h(" \u7DE8\u96C6 ")]),_:1},8,["href","class","disabled"])])]),e("div",ve,[e("button",{type:"button",onClick:s[6]||(s[6]=t=>a.back_delivery()),class:_([{"opacity-25":o.form.processing||!i.hasCheck},"w-32 inline-block items-center px-1 py-2 rounded-md font-semibold text-sm text-white uppercase tracking-widest bg-neutral-600 hover:bg-neutral-700 transition ease-in-out duration-150 m-1"]),disabled:o.form.processing||!i.hasCheck}," \u623B\u308B ",10,ge),e("button",{type:"button",onClick:s[7]||(s[7]=t=>a.submit_delivery()),class:_([{"opacity-25":o.form.processing||!i.hasCheck},"w-32 inline-block items-center px-1 py-2 rounded-md font-semibold text-sm text-white uppercase tracking-widest bg-theme bg-theme-hover transition ease-in-out duration-150 m-1"]),disabled:o.form.processing||!i.hasCheck}," \u767A\u9001\u3059\u308B ",10,we)])])):p("",!0),i.ready_delivery==2?(n(),c("div",Ce,[je,Ae,e("div",Le,[h(" \u8A08"+d(i.products_count)+"\u70B9\u306E\u5546\u54C1\u306E\u914D\u9001\u624B\u7D9A\u304D\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F\u3002",1),Ve,Oe,h(" \u5546\u54C1\u306E\u767A\u9001\u306B\u306F"),Fe,h("\u304B\u304B\u308B\u53EF\u80FD\u6027\u304C\u3054\u3056\u3044\u307E\u3059\u3002"),Be,h(" \u3054\u4E86\u627F\u306E\u307B\u3069\u3088\u308D\u3057\u304F\u304A\u9858\u3044\u81F4\u3057\u307E\u3059\u3002 ")]),e("div",He,[m(f,{href:r.route("main"),class:"w-48 inline-block items-center px-1 py-2 bg-red-600 rounded-md font-semibold text-sm text-white uppercase tracking-widest hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 m-1"},{default:b(()=>[h(" \u30AC\u30C1\u30E3TOP\u3078 ")]),_:1},8,["href"]),e("button",{type:"button",onClick:s[8]||(s[8]=t=>a.back_delivery()),class:"w-48 inline-block items-center px-1 py-2 rounded-md font-semibold text-sm text-white uppercase tracking-widest bg-theme bg-theme-hover transition ease-in-out duration-150 m-1"}," \u7372\u5F97\u3057\u305F\u5546\u54C1\u4E00\u89A7\u3078 ")])])):p("",!0)]),_:1})],64)}const Pe=B(H,[["render",Ne]]);export{Pe as default};
