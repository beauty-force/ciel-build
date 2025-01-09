import{H as w,L as k,G as T,r as a,o as u,c as m,b as s,w as n,F as C,d as t,t as i,e as f}from"./app.509c113c.js";import{A as D}from"./UserLayout.7608d600.js";import{F as E,N as j,e as P,U as F,o as L,f as N,r as O}from"./toastify.ba563aa9.js";import{_ as A}from"./_plugin-vue_export-helper.cdc0426e.js";import{r as H}from"./ExclamationTriangleIcon.26307035.js";const I={components:{Head:w,AppLayout:D,Footer:E,Link:k,Dialog:j,DialogPanel:P,DialogTitle:F,TransitionChild:L,TransitionRoot:N,ExclamationTriangleIcon:H,XMarkIcon:O},props:{errors:Object,products:Object,category_share:Object,favorite:Number,auth:Object,productStatusTxt:Object,profile:Object},data(){return{is_busy:!1,open:!1,category:""}},methods:{format_number(o){return String(o).replace(/(.)(?=(\d{3})+$)/g,"$1,")},exchange(){this.profile.address?this.auth.user.dp<this.products.data[0].dp?alert("EP\u4E0D\u8DB3\u3001\u4EA4\u63DB\u306B\u5FC5\u8981\u306AEP\u304C\u4E0D\u8DB3\u3057\u3066\u3044\u307E\u3059\u3002"):confirm("\u4EA4\u63DB\u3057\u307E\u3059\u304B?  "+this.products.data[0].dp+"EP\u3092\u6D88\u8CBB\u3057\u3066\u3053\u306E\u666F\u54C1\u3068\u4EA4\u63DB\u3057\u307E\u3059\u3002")&&this.form.post(route("user.dp.detail.post"),{onFinish:()=>{}}):this.open=!0},add_favorite(o){this.form.value=o,this.form.post(route("user.favorite.add"),{onFinish:()=>{}})}},setup(o){return{form:T({id:o.products.data[0].id,value:0})}},mounted(){if(this.category_share.categories.data){let o;for(o=0;o<this.category_share.categories.data.length;o++){let e=this.category_share.categories.data[o];e.id==this.category_share.cat_id&&(this.category=e.title)}}}},B={class:"w-full flex flex-wrap mx-auto justify-evenly gap-8 p-6"},R={class:"md:w-1/3 w-full"},S=["src"],V={class:"flex-1"},z={class:"font-bold mb-3 text-xl"},U={class:"mb-4 text-lg font-bold"},G={class:"text-neutral-600"},M=t("span",{class:"text-neutral-600"}," EP ",-1),X={class:"mb-8 rounded-md bg-white"},q=t("p",{class:"mb-1 text-lg font-bold"},"\u5546\u54C1\u306E\u8A73\u7D30",-1),J=t("hr",{class:"mb-2"},null,-1),K={class:"w-full mb-6"},Q={class:"w-full text-sm"},W=t("td",{class:"p-1 w-2/5 font-bold"},"\u30AB\u30C6\u30B4\u30EA\u30FC",-1),Y={class:"p-1 w-3/5"},Z=t("td",{class:"p-1 w-2/5 font-bold"},"\u30EC\u30A2\u30EA\u30C6\u30A3",-1),$={class:"p-1 w-3/5"},tt=t("td",{class:"p-1 w-2/5 font-bold"},"\u5546\u54C1\u306E\u72B6\u614B",-1),et={class:"p-1 w-3/5"},ot=t("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),st={class:"fixed inset-0 z-20 overflow-y-auto"},at={class:"flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0"},nt={class:"text-center text-sm pt-3 text-neutral-600"},rt={class:"mb-2 text-lg px-2"},it=t("div",{class:"py-3 text-sm px-2"}," \u914D\u9001\u5148\u60C5\u5831\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\uFF01 ",-1),lt=t("hr",null,null,-1),dt={class:"pt-3 px-2"};function ct(o,e,r,ut,l,d){const _=a("Head"),p=a("TransitionChild"),h=a("ExclamationTriangleIcon"),b=a("Link"),x=a("DialogPanel"),g=a("Dialog"),v=a("TransitionRoot"),y=a("AppLayout");return u(),m(C,null,[s(_,{title:"EP\u4EA4\u63DB\u6240 \u2013 \u8A73\u7D30"}),s(y,null,{default:n(()=>[t("div",B,[t("div",R,[t("img",{src:r.products.data[0].image,class:"w-full max-w-64 block mx-auto"},null,8,S)]),t("div",V,[t("h1",z,i(r.products.data[0].name),1),t("div",U,[t("span",G,i(d.format_number(r.products.data[0].dp)),1),M]),t("button",{onClick:e[0]||(e[0]=c=>d.exchange()),class:"w-full mb-4 block text-center py-2 text-white rounded-md bg-theme bg-theme-hover font-semibold transition ease-in-out duration-150"}," \u4EA4\u63DB\u3059\u308B "),r.favorite?(u(),m("button",{key:0,onClick:e[1]||(e[1]=c=>d.add_favorite(0)),class:"w-full mb-6 block text-center py-2 text-xs bg-neutral-500 border border-transparent rounded-md font-semibold text-white uppercase tracking-widest hover:bg-neutral-400 transition ease-in-out duration-150"}," \u304A\u6C17\u306B\u5165\u308A\u89E3\u9664 ")):(u(),m("button",{key:1,onClick:e[2]||(e[2]=c=>d.add_favorite(1)),class:"w-full mb-8 block text-center py-2 text-neutral-500 border-neutral-500 bg-neutral-50 border border-transparent rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-neutral-200 transition ease-in-out duration-150"}," \u304A\u6C17\u306B\u5165\u308A\u767B\u9332 ")),t("div",X,[q,J,t("div",K,[t("table",Q,[t("tr",null,[W,t("td",Y,i(l.category),1)]),t("tr",null,[Z,t("td",$,i(r.products.data[0].rare),1)]),t("tr",null,[tt,t("td",et,i(r.products.data[0].product_type),1)])])])])])]),s(v,{as:"template",show:l.open},{default:n(()=>[s(g,{as:"div",class:"relative z-20",onClose:e[4]||(e[4]=c=>l.open=!1)},{default:n(()=>[s(p,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:n(()=>[ot]),_:1}),t("div",st,[t("div",at,[s(p,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:n(()=>[s(x,{class:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"},{default:n(()=>[t("div",nt,[t("div",rt,[s(h,{class:"w-5 h-5 inline-block"}),f(" \u5165\u529B\u30A8\u30E9\u30FC ")]),it,lt,t("div",dt,[t("button",{onClick:e[3]||(e[3]=c=>l.open=!1),class:"mb-4 mx-1 text-center px-4 py-1.5 bg-neutral-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-neutral-700 active:bg-neutral-700 focus:outline-none focus:border-neutral-700 focus:shadow-outline-neutral transition ease-in-out duration-150"}," \u30AD\u30E3\u30F3\u30BB\u30EB "),s(b,{href:o.route("user.address"),class:"mb-4 mx-1 text-center px-4 py-1.5 bg-neutral-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-neutral-700 active:bg-neutral-700 focus:outline-none focus:border-neutral-700 focus:shadow-outline-neutral transition ease-in-out duration-150"},{default:n(()=>[f(" \u914D\u9001\u5148\u60C5\u5831\u5165\u529B ")]),_:1},8,["href"])])])]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])]),_:1})],64)}const bt=A(I,[["render",ct]]);export{bt as default};
