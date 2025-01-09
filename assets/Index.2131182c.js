import{H as P,E as D,G as x,r as u,o as f,c as p,b as i,w as m,F as g,d as t,t as n,J as d,K as c,f as O,g as y,I as T,n as I,e as h}from"./app.509c113c.js";import{A as N}from"./Admin.d2b7b418.js";import{P as L}from"./Pagination.78495fea.js";import{_ as M}from"./_plugin-vue_export-helper.cdc0426e.js";import{N as R,e as q,U as A,o as F,f as H}from"./toastify.ba563aa9.js";import"./ChevronRightIcon.c1812360.js";import"./EllipsisHorizontalIcon.49426ee6.js";const z={components:{Head:P,AppLayout:N,Dialog:R,DialogPanel:q,DialogTitle:A,TransitionChild:F,TransitionRoot:H,Pagination:L},props:{errors:Object,category_share:Object,products:Object,products_status:Object,search_cond:Object,total:Number},data(){return{url2:null,open:!1,point_value:0}},methods:{get_product_status(){let r=this.products_status.map(a=>parseInt(a.products_lost_count)<parseInt(a.gacha_products_count)?` ${a.point} \u30DD\u30A4\u30F3\u30C8\u306E\u30AB\u30FC\u30C9\u304C ${a.gacha_products_count} \u3064\u5FC5\u8981\u3067\u3059\u3002   \u73FE\u5728\u306E\u5728\u5EAB\u6570\u306F ${a.products_lost_count}\u3064\u3067\u3059\u3002
 `:""),e="";return r.forEach(a=>{e=e+a}),e},destroy_product_last(r){confirm("\u524A\u9664\u3057\u3066\u3082\u3044\u3044\u3067\u3059\u304B\uFF1F")&&D.Inertia.delete(route("admin.gacha.product_last.destroy",{id:r}))},modalProductOpen(r){r?(this.form_last.last_id=r.id,this.form_last.last_name=r.name,this.form_last.last_point=r.point,this.form_last.last_rare=r.rare,this.form_last.last_marks=r.marks,this.form_last.last_lost_type=r.lost_type,this.form_last.last_image="",this.form_last.is_update=1,this.url2=r.image):(this.form_last.last_id="",this.form_last.last_name="",this.form_last.last_point="",this.form_last.last_rare="",this.form_last.last_marks="",this.form_last.last_lost_type="",this.form_last.last_image="",this.form_last.is_update=0,this.url2=""),this.open=!0},submit_last(){this.$refs.photo2.files[0]&&(this.form_last.last_image=this.$refs.photo2.files[0]),this.form_last.post(route("admin.lost_product.create"),{onFinish:()=>{}})},closeModal(){this.open=!1},previewImage2(r){const e=r.target.files[0];this.url2=URL.createObjectURL(e)},search(){this.form_search.get(route("admin.lost_product"))},clear(){this.form_search.rare="",this.form_search.name="",this.form_search.min="",this.form_search.max="",this.search()}},setup(r){let e={last_id:"",last_name:"",last_point:"",last_rare:"",last_marks:"",last_lost_type:"",last_image:"",is_update:0,category_id:r.category_share.cat_id};const a=x(e),o=x(r.search_cond);return{form_last:a,form_search:o}},mounted(){}},B={class:"mt-3 px-5"},E={class:"text-red-600",style:{"white-space":"break-spaces"}},S={class:"flex justify-between items-center mb-2"},G=t("h1",{class:"text-lg font-bold"},"\u30AB\u30FC\u30C9\u8A2D\u5B9A",-1),J={class:"text-center"},K=t("hr",{class:"mb-2"},null,-1),Q={class:"flex items-center gap-2 w-full flex-wrap mb-2 justify-between border p-2 text-sm"},W={class:"flex flex-col gap-2 flex-1"},X={class:"flex flex-wrap gap-y-2"},Y={class:"flex-1 flex items-center gap-2 min-w-[16rem]"},Z=t("label",{class:"w-16 text-right"},"\u540D\u524D",-1),$={class:"flex-1 flex items-center gap-2 min-w-[16rem]"},tt=t("label",{class:"w-16 text-right"},"\u30EC\u30A2\u5EA6",-1),et={class:"flex items-center gap-2"},st=t("label",{class:"w-16 text-right"},"\u30DD\u30A4\u30F3\u30C8",-1),ot=t("span",null,"~",-1),rt={class:"flex flex-col gap-2"},at={class:"border-neutral-200 border-b flex flex-wrap justify-between items-center gap-2"},lt={class:"flex border-neutral-200 items-center"},nt=["src"],it={class:"flex-1 inline-block text-sm py-1 px-2"},dt={key:0},ct={class:"text-red-500"},ut={class:"text-center flex flex-wrap gap-2"},mt=["onClick"],_t=["onClick"],ft=t("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),pt={class:"fixed inset-0 z-20 overflow-y-auto"},ht={class:"flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0"},bt={class:"mb-4"},xt=t("label",{for:"text1-1",class:"block font-medium text-sm text-neutral-700 mb-1"},[h("\u540D\u524D"),t("span",{class:"text-red-500"},"*")],-1),gt={class:"text-red-500 text-sm mt-1"},yt={class:"mb-4"},vt=t("label",{for:"text1-2",class:"block font-medium text-sm text-neutral-700 mb-1"},[h("\u5909\u63DB\u30DD\u30A4\u30F3\u30C8\uFF08\u534A\u89D2\u6570\u5B57\uFF09"),t("span",{class:"text-red-500"},"*")],-1),wt={class:"text-red-500 text-sm mt-1"},kt={class:"mb-4"},Ct=t("label",{for:"text1-3",class:"block font-medium text-sm text-neutral-700 mb-1"},[h("\u30EC\u30A2\u5EA6"),t("span",{class:"text-red-500"},"*")],-1),Ut={class:"text-red-500 text-sm mt-1"},Vt={class:"mb-4"},jt=t("label",{for:"text1-3",class:"block font-medium text-sm text-neutral-700 mb-1"},[h("\u70B9\u6570\uFF08\u534A\u89D2\u6570\u5B57\uFF09"),t("span",{class:"text-red-500"},"*")],-1),Pt={class:"text-red-500 text-sm mt-1"},Dt={class:"mb-4"},Ot=t("label",{for:"file1-1",class:"block font-medium text-sm text-neutral-700 mb-1"},[h("\u753B\u50CF\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9 "),t("span",{class:"text-red-500"},"*")],-1),Tt={class:"text-center w-full"},It=["src"],Nt={class:"text-red-500 text-sm mt-1"},Lt={class:"mb-6 text-center"},Mt=["disabled"];function Rt(r,e,a,o,_,l){const v=u("Head"),w=u("Pagination"),b=u("TransitionChild"),k=u("DialogPanel"),C=u("Dialog"),U=u("TransitionRoot"),V=u("AppLayout");return f(),p(g,null,[i(v,{title:"\u30AB\u30FC\u30C9\u8A2D\u5B9A"}),i(V,{closeModal:l.closeModal},{default:m(()=>[t("div",B,[t("div",E,n(l.get_product_status()),1),t("div",S,[G,t("div",J,[t("button",{type:"button",onClick:e[0]||(e[0]=s=>l.modalProductOpen(0)),class:"inline-block items-center px-10 py-2.5 bg-cyan-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-cyan-700 active:bg-cyan-700 focus:outline-none focus:border-cyan-700 focus:shadow-outline-cyan transition ease-in-out duration-150 mr-2"}," \u8FFD\u52A0 ")])]),K,t("div",Q,[t("div",W,[t("div",X,[t("div",Y,[Z,d(t("input",{"onUpdate:modelValue":e[1]||(e[1]=s=>o.form_search.name=s),type:"text",class:"h-9 flex-1 w-0 border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300"},null,512),[[c,o.form_search.name]])]),t("div",$,[tt,d(t("input",{"onUpdate:modelValue":e[2]||(e[2]=s=>o.form_search.rare=s),type:"text",class:"h-9 flex-1 w-0 border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300"},null,512),[[c,o.form_search.rare]])])]),t("div",et,[st,d(t("input",{"onUpdate:modelValue":e[3]||(e[3]=s=>o.form_search.min=s),type:"number",class:"h-9 flex-1 w-16 border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300"},null,512),[[c,o.form_search.min]]),ot,d(t("input",{"onUpdate:modelValue":e[4]||(e[4]=s=>o.form_search.max=s),type:"number",class:"h-9 flex-1 w-16 border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300"},null,512),[[c,o.form_search.max]])])]),t("div",rt,[t("button",{type:"button",onClick:e[5]||(e[5]=(...s)=>l.clear&&l.clear(...s)),class:"rounded-md border bg-neutral-600 text-white px-4 py-2"},"\u521D\u671F\u5316"),t("button",{type:"button",onClick:e[6]||(e[6]=(...s)=>l.search&&l.search(...s)),class:"rounded-md border bg-neutral-600 text-white px-4 py-2"},"\u691C\u7D22")])]),i(w,{search_cond:a.search_cond,route_name:"admin.lost_product",total:a.total},null,8,["search_cond","total"]),(f(!0),p(g,null,O(a.products.data,(s,qt)=>(f(),p("div",at,[t("div",lt,[t("img",{src:s.image,class:"w-16 h-16 inline-block object-contain"},null,8,nt),t("div",it,[t("div",null,n(s.name),1),t("div",null,n(s.rare),1),t("div",null,n(s.marks),1),s.lost_type?(f(),p("div",dt,n(s.lost_type),1)):y("",!0),t("div",ct,n(s.point)+"pt",1)])]),t("div",ut,[t("button",{type:"button",onClick:j=>l.modalProductOpen(s),class:"inline-block items-center px-8 py-2 bg-green-500 rounded-md text-xs text-white uppercase tracking-widest hover:bg-green-700 active:bg-green-700 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150"}," \u7DE8\u96C6 ",8,mt),t("button",{type:"button",onClick:j=>l.destroy_product_last(s.id),class:"inline-block items-center px-8 py-2 bg-red-500 rounded-md text-xs text-white uppercase tracking-widest hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150"}," \u524A\u9664 ",8,_t)])]))),256))]),t("template",null,[i(U,{as:"template",show:_.open},{default:m(()=>[i(C,{as:"div",class:"relative z-20",onClose:e[14]||(e[14]=s=>_.open=!1)},{default:m(()=>[i(b,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-200","leave-from":"opacity-100","leave-to":"opacity-0"},{default:m(()=>[ft]),_:1}),t("div",pt,[t("div",ht,[i(b,{as:"template",enter:"ease-out duration-300","enter-from":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to":"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200","leave-from":"opacity-100 translate-y-0 sm:scale-100","leave-to":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"},{default:m(()=>[i(k,{class:"p-3 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"},{default:m(()=>[t("form",{onSubmit:e[13]||(e[13]=T(s=>l.submit_last(),["prevent"]))},[t("div",bt,[xt,d(t("input",{"onUpdate:modelValue":e[7]||(e[7]=s=>o.form_last.last_name=s),id:"text1-1",type:"text",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",required:""},null,512),[[c,o.form_last.last_name]]),t("div",gt,n(a.errors.last_name),1)]),t("div",yt,[vt,d(t("input",{"onUpdate:modelValue":e[8]||(e[8]=s=>o.form_last.last_point=s),id:"text1-2",type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",required:""},null,512),[[c,o.form_last.last_point]]),t("div",wt,n(a.errors.last_point),1)]),t("div",kt,[Ct,d(t("input",{"onUpdate:modelValue":e[9]||(e[9]=s=>o.form_last.last_rare=s),id:"text1-3",type:"text",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",required:""},null,512),[[c,o.form_last.last_rare]]),t("div",Ut,n(a.errors.last_rare),1)]),t("div",Vt,[jt,d(t("input",{"onUpdate:modelValue":e[10]||(e[10]=s=>o.form_last.last_marks=s),id:"text1-3",type:"number",class:"w-full border-neutral-300 focus:border-neutral-300 focus:ring focus:ring-neutral-200 focus:ring-opacity-50 rounded-md shadow-sm placeholder-neutral-300",placeholder:"\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",required:""},null,512),[[c,o.form_last.last_marks]]),t("div",Pt,n(a.errors.last_marks),1)]),t("div",Dt,[Ot,t("div",Tt,[_.url2?(f(),p("img",{key:0,src:_.url2,class:"inline-block mt-4 h-24"},null,8,It)):y("",!0)]),t("input",{onChange:e[11]||(e[11]=(...s)=>l.previewImage2&&l.previewImage2(...s)),ref:"photo2",id:"file1-1",type:"file",class:"w-full"},null,544),t("div",Nt,n(a.errors.last_image),1)]),t("div",Lt,[t("button",{type:"submit",class:I([{"opacity-25":o.form_last.processing},"inline-block items-center px-8 py-2.5 bg-green-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-700 active:bg-green-700 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150 mr-2"]),disabled:o.form_last.processing}," \u4FDD\u5B58 ",10,Mt),t("button",{type:"button",onClick:e[12]||(e[12]=s=>_.open=!1),class:"inline-block items-center px-8 py-2.5 bg-red-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150"}," \u30AD\u30E3\u30F3\u30BB\u30EB ")])],32)]),_:1})]),_:1})])])]),_:1})]),_:1},8,["show"])])]),_:1},8,["closeModal"])],64)}const Gt=M(z,[["render",Rt]]);export{Gt as default};
