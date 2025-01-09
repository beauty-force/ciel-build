import{H as v,L as g,G as u,r as l,o as r,c as a,b as c,w as _,F as h,d as e,J as m,K as k,M as C,f as L,e as S,t as i}from"./app.509c113c.js";import{A as V}from"./Admin.d2b7b418.js";import{P as j}from"./Pagination.78495fea.js";import{G as A}from"./GachaCard.47b46e31.js";import{_ as H}from"./_plugin-vue_export-helper.cdc0426e.js";import"./toastify.ba563aa9.js";import"./ChevronRightIcon.c1812360.js";import"./EllipsisHorizontalIcon.49426ee6.js";import"./GachaButtons.fda1ec4d.js";import"./PlayIcon.6f058c3f.js";const N={components:{Head:v,AppLayout:V,Link:g,GachaCard:A,Pagination:j},props:{errors:Object,users:Object,search_cond:Object,total:Number},mounted(){},methods:{search(){this.form_search.get(route("admin.users"))},updateStatus(s,o){u({id:s,status:o}).post(route("admin.users.update"))}},setup(s){return{form_search:u(s.search_cond)}}},P={class:"md:px-4 px-2"},B=e("div",{class:"border-b w-full p-2 my-2 font-semibold"},[e("h3",null,"\u30E6\u30FC\u30B6\u30FC\u7BA1\u7406")],-1),D={class:"w-full flex flex-col gap-4 mb-8"},F={class:"w-full flex justify-between gap-4"},G={class:"flex-1 flex flex-wrap gap-2"},M=e("option",{value:"id"},"ID",-1),O=e("option",{value:"point"},"\u30DD\u30A4\u30F3\u30C8\u6570",-1),I=e("option",{value:"amount"},"\u8CFC\u5165\u91D1\u984D",-1),T=e("option",{value:"status"},"\u72B6\u614B",-1),U=[M,O,I,T],E={class:"w-full overflow-auto"},J={class:"min-w-full"},K=e("thead",null,[e("tr",{class:"border-b border-collapse border-yellow-100 whitespace-nowrap"},[e("th",{class:"text-center py-2"},"\u8A73\u7D30"),e("th",{class:"text-center py-2"},"\u540D\u524D"),e("th",{class:"text-center py-2"},"\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9"),e("th",{class:"text-center py-2"},"\u96FB\u8A71"),e("th",{class:"text-center py-2 hidden md:block"},"\u4F4F\u6240"),e("th",{class:"text-center py-2"})])],-1),q={class:"text-sm"},z={class:"border border-yellow-100 divide-x-2 divide-sky-50 border-collapse"},Q={class:"text-center py-2 px-1"},R={class:"text-center py-2 px-1 text-red-600 text-nowrap"},W={class:"text-center py-2 px-1 max-w-full overflow-hidden whitespace-nowrap text-ellipsis"},X={class:"text-center py-2 px-1"},Y={class:"hidden md:block text-center py-2 px-1 max-w-full overflow-hidden whitespace-nowrap text-ellipsis"},Z={class:"text-center py-1 whitespace-nowrap"},$=["onClick"],ee=["onClick"];function te(s,o,p,n,oe,d){const x=l("Head"),f=l("Link"),b=l("Pagination"),y=l("AppLayout");return r(),a(h,null,[c(x,{title:"\u30E6\u30FC\u30B6\u30FC\u7BA1\u7406"}),c(y,null,{default:_(()=>[e("div",P,[B,e("div",D,[e("div",F,[e("div",G,[m(e("input",{"onUpdate:modelValue":o[0]||(o[0]=t=>n.form_search.keyword=t),type:"text",class:"text-sm flex-1 md:min-w-96 border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u540D\u524D\u3001\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3001\u96FB\u8A71\u756A\u53F7\u3001\u4F4F\u6240\u3092\u5165\u529B\u3057\u307E\u3059\u3002"},null,512),[[k,n.form_search.keyword]]),m(e("select",{"onUpdate:modelValue":o[1]||(o[1]=t=>n.form_search.order_by=t),id:"order_by",class:"bg-white/90 flex-1 px-3 py-2 border border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md placeholder-neutral-400"},U,512),[[C,n.form_search.order_by]])]),e("button",{type:"button",onClick:o[2]||(o[2]=(...t)=>d.search&&d.search(...t)),class:"rounded-md border bg-neutral-600 text-white px-4 py-1"},"\u691C\u7D22")]),e("div",E,[e("table",J,[K,e("tbody",q,[(r(!0),a(h,null,L(p.users,t=>(r(),a("tr",z,[e("td",Q,[c(f,{class:"px-2 py-0.5 border border-yellow-300 rounded-lg hover:bg-sky-300 text-nowrap",href:s.route("admin.users.detail",{id:t.id})},{default:_(()=>[S("\u8A73\u7D30")]),_:2},1032,["href"])]),e("td",R,i(t.name),1),e("td",W,i(t.email),1),e("td",X,i(t.phone),1),e("td",Y,i(t.address),1),e("td",Z,[t.status?(r(),a("button",{key:0,onClick:w=>d.updateStatus(t.id,0),class:"px-2 py-1 rounded-md border text-rose-500 hover:bg-rose-100"},"\u524A\u9664",8,$)):(r(),a("button",{key:1,onClick:w=>d.updateStatus(t.id,1),class:"px-2 py-1 rounded-md border text-sky-500 hover:bg-sky-100"},"\u627F\u8A8D",8,ee))])]))),256))])])]),c(b,{search_cond:p.search_cond,route_name:"admin.users",total:p.total},null,8,["search_cond","total"])])])]),_:1})],64)}const _e=H(N,[["render",te]]);export{_e as default};
