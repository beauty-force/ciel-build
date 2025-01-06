import{H as C,L,G as j,r as a,o as r,c,b as _,w as h,F as u,d as t,e as x,f as v,y as b,t as s,n as f,z as V}from"./app.09a9251b.js";import{A}from"./Admin.eb6b7d2c.js";import{_ as B}from"./_plugin-vue_export-helper.cdc0426e.js";import{r as F}from"./ChevronRightIcon.2dc1819c.js";import"./toastify.2c2a41d7.js";const H={components:{Head:C,AdminLayout:A,Link:L,ChevronRightIcon:F},props:{errors:Object,gacha:Object,category_share:Object,products:Object},data(){return{hasCheck:!1,main_tab:[{title:"\u672A\u767A\u9001",route_url:route("admin.delivery"),is_active:!0},{title:"\u767A\u9001\u6E08\u307F",route_url:route("admin.delivery.completed"),is_active:!1}],page_step:0,is_busy:!1,profile:{},product:{},user:{}}},setup(l){let i={},o;for(o=0;o<l.products.data.length;o++)i["id"+l.products.data[o].id]=!1;return{form:j({id:0})}},methods:{showProductDetail(l){this.is_busy=!0;const i={id:l.id};axios.post(route("admin.delivery.product_data"),i).then(o=>{(o.status==201||o.status==200)&&(console.log(o),o.data.status&&(this.profile=o.data.profile,this.user=o.data.user,this.product=l,this.page_step=1)),this.is_busy=!1}).catch(o=>{this.is_busy=!0,console.log(o)})},backToList(){this.page_step=0},submit(l){this.form.id=l,this.form.post(route("admin.delivery.post"),{onFinish:()=>{this.page_step=0}})}}},I={key:0,class:"pt-6 md:px-2 px-4 mb-6",style:{"min-height":"400px"}},N={class:"flex justify-between items-center mb-2"},O=t("h1",{class:"text-lg font-bold"},"\u914D\u9001\u5546\u54C1",-1),D=t("hr",{class:"mb-3"},null,-1),R={class:"w-full text-neutral-400 mb-3"},T={class:"mb-6"},z={class:"mb-0 border-neutral-200 border-b"},P=["onClick"],S=["src"],E={class:"cursor-pointer h-20 flex items-center justify-between flex-1 inline-block text-xs py-1 px-2"},G={class:"text-left"},q={class:"text-red-500"},J={class:"text-neutral-300"},K={key:1,class:"pt-6 md:px-2 px-4 mb-6",style:{"min-height":"400px"}},M=t("h2",{class:"mb-2 text-lg font-bold"},"\u914D\u9001\u5546\u54C1\u8A73\u7D30",-1),Q=t("hr",{class:"mb-3"},null,-1),U={class:"mb-6"},W={class:"flex border-neutral-200 items-center w-full"},X=["src"],Y={class:"cursor-pointer h-12 flex items-center justify-between flex-1 inline-block text-xs py-1 px-2"},Z={class:"w-full"},$={class:"text-red-500"},tt=t("div",{class:"mb-1 text-base font-semibold"},"\u914D\u9001\u5148\u60C5\u5831",-1),et=t("hr",{class:"mb-3"},null,-1),st={class:"w-full mb-6"},ot={class:"w-full text-sm"},nt=t("td",{class:"p-1 w-2/5 font-bold"},"\u30A2\u30C9\u30EC\u30B9",-1),lt={class:"p-1 w-3/5"},it=t("td",{class:"p-1 w-2/5 font-bold"},"\u540D\u524D",-1),rt={class:"p-1 w-3/5"},ct=t("td",{class:"p-1 w-2/5 font-bold"},"\u540D\u524D(\u30AB\u30CA)",-1),dt={class:"p-1 w-3/5"},at=t("td",{class:"p-1 w-2/5 font-bold"},"\u90F5\u4FBF\u756A\u53F7",-1),_t={class:"p-1 w-3/5"},ut=t("td",{class:"p-1 w-2/5 font-bold"},"\u90FD\u9053\u5E9C\u770C",-1),pt={class:"p-1 w-3/5"},ht=t("td",{class:"p-1 w-2/5 font-bold"},"\u4F4F\u6240",-1),bt={class:"p-1 w-3/5"},ft=t("td",{class:"p-1 w-2/5 font-bold"},"\u96FB\u8A71\u756A\u53F7",-1),mt={class:"p-1 w-3/5"},xt=t("td",{class:"p-1 w-2/5 font-bold"},"\u4F9D\u983C\u3055\u308C\u305F\u65E5\u6642",-1),vt={class:"p-1 w-3/5"},gt={class:"mb-6 w-full text-center"},wt=["disabled"],yt=["disabled"];function kt(l,i,o,d,e,p){const g=a("Head"),m=a("Link"),w=a("ChevronRightIcon"),y=a("AdminLayout");return r(),c(u,null,[_(g,{title:"\u914D\u9001\u5546\u54C1"}),_(y,null,{default:h(()=>[e.page_step==0?(r(),c("div",I,[t("div",N,[O,_(m,{href:l.route("admin.delivery.csv"),class:"px-3 py-1 text-sm rounded-full bg-rose-500 hover:bg-rose-600 text-white"},{default:h(()=>[x("\u767A\u9001\u30EA\u30B9\u30C8CSV")]),_:1},8,["href"])]),D,t("div",R,[(r(!0),c(u,null,v(e.main_tab,(n,k)=>(r(),V(m,{href:n.route_url,class:f(["inline-block px-4 py-1.5",{"border-b-2 border-red-600 text-red-600":n.is_active}])},{default:h(()=>[x(s(n.title),1)]),_:2},1032,["href","class"]))),256))]),t("div",T,[(r(!0),c(u,null,v(o.products.data,(n,k)=>(r(),c("div",z,[t("button",{onClick:Ct=>p.showProductDetail(n),class:"flex border-neutral-200 items-center w-full"},[t("img",{src:n.image,class:"w-20 h-20 inline-block object-contain"},null,8,S),t("div",E,[t("div",G,[t("div",null,s(n.name),1),t("div",null,s(n.rare),1),t("div",q,s(n.point)+"pt",1),t("div",null,s(n.updated_at),1),t("div",null,s(n.address),1)]),t("div",J,[_(w,{class:"w-5"})])])],8,P)]))),256))])])):b("",!0),e.page_step==1?(r(),c("div",K,[M,Q,t("div",U,[t("div",W,[t("img",{src:e.product.image,class:"w-12 h-12 inline-block object-contain"},null,8,X),t("div",Y,[t("div",Z,[t("div",null,s(e.product.name),1),t("div",null,s(e.product.rare),1),t("div",$,s(e.product.point)+"pt",1)])])])]),tt,et,t("div",st,[t("table",ot,[t("tr",null,[nt,t("td",lt,s(e.user.email),1)]),e.profile?(r(),c(u,{key:0},[t("tr",null,[it,t("td",rt,s(e.profile.first_name)+" "+s(e.profile.last_name),1)]),t("tr",null,[ct,t("td",dt,s(e.profile.first_name_gana)+" "+s(e.profile.last_name_gana),1)]),t("tr",null,[at,t("td",_t,s(e.profile.postal_code),1)]),t("tr",null,[ut,t("td",pt,s(e.profile.prefecture),1)]),t("tr",null,[ht,t("td",bt,s(e.profile.address),1)]),t("tr",null,[ft,t("td",mt,s(e.profile.phone),1)]),t("tr",null,[xt,t("td",vt,s(e.product.updated_at_time)+"("+s(e.product.updated_at)+")",1)])],64)):b("",!0)])]),t("div",gt,[t("button",{type:"button",onClick:i[0]||(i[0]=n=>p.backToList()),class:f([{"opacity-25":d.form.processing},"inline-block items-center px-8 py-2.5 bg-neutral-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-neutral-700 active:bg-neutral-700 focus:outline-none focus:border-neutral-700 focus:shadow-outline-neutral transition ease-in-out duration-150 m-1"]),disabled:d.form.processing}," \u30EA\u30B9\u30C8\u3078 ",10,wt),t("button",{type:"button",onClick:i[1]||(i[1]=n=>p.submit(e.product.id)),class:f([{"opacity-25":d.form.processing},"inline-block items-center px-8 py-2.5 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 m-1"]),disabled:d.form.processing}," \u914D\u9001\u6E08\u307F\u306B\u3059\u308B ",10,yt)])])):b("",!0)]),_:1})],64)}const Ft=B(H,[["render",kt]]);export{Ft as default};
