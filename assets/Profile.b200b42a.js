import{H as h,u as g,r as x,o as a,c as o,b as _,w as k,F as p,d as t,t as d,g as i,Z as u,e,f as v,n as y}from"./app.509c113c.js";import{A as w}from"./UserLayout.7608d600.js";import{_ as T}from"./_plugin-vue_export-helper.cdc0426e.js";import{r as P}from"./PlayIcon.6f058c3f.js";import"./toastify.ba563aa9.js";const H={components:{Head:h,AppLayout:w,PlayIcon:P},props:{ranks:Object,mark_pos:Number,current_pos:Number,succeed:Boolean},data(){return{user:null,current_rank:null}},methods:{pt_rate_string(s){return s.rank==1?'<span class="text-[1.5em]">\u2014</span>':s.limit<0||s.pt_rate<=0?'<span class="text-[1.2em]">???</span>':`${s.pt_rate}%\u4ED8\u4E0E<br/>(\u8CFC\u5165\u6642PT\u306E)`},format_number(s){return String(s).replace(/(.)(?=(\d{3})+$)/g,"$1,")},bonus_pt_string(s){return s.rank==1?'<span class="text-[2em]">\u2014</span>':s.limit<0||s.pt_rate<=0?'<span class="text-[1.2em]">???</span>':`${this.format_number(s.bonus)}PT`}},mounted(){this.user=g().props.value.auth.user,this.current_rank=this.ranks.filter(s=>s.rank==this.user.current_rank)[0]}},L={class:"px-2 md:px-10"},M=t("p",{class:"py-3 px-6 -mx-2 md:-mx-10 font-bold align-middle text-base md:text-xl border"},"\u30DE\u30A4\u30DA\u30FC\u30B8",-1),W={key:0,class:"py-4 md:py-6 px-3 md:px-5 mx-2 md:mx-4 bg-neutral-200 rounded-b-xl shadow-inner text-xs md:text-sm"},S={class:"mx-4 text-center"},j={class:"font-bold text-lg md:text-xl"},C=["src"],N={key:0,class:"w-full flex justify-end mt-3 -mb-3"},z=t("span",{class:"rounded-full border font-bold px-2 py-0.5 text-xs -mr-1 bg-neutral-400/20 border-neutral-400"},"\u30E9\u30F3\u30AFUP",-1),A=[z],B={class:"flex border-t border-b mt-4 relative h-5 md:h-6 px-2"},E=t("span",{class:"h-full rounded-l-md border border-neutral-800 px-4 bg-neutral-400/20 font-bold z-10 flex items-center"},"\u6D88\u8CBB PT",-1),F={class:"flex-1 relative"},V={class:"h-full bg-gray-50 rounded-r-xl overflow-hidden border-t border-b border-r border-neutral-800"},D=["src"],I={key:1,class:"w-full flex justify-end my-3 px-2"},O=t("div",{class:"w-fit flex px-3 py-0.5 items-center bg-neutral-400/20 border border-neutral-400 rounded-full"},[t("img",{src:"images/mark_red_icon.svg",class:"w-4 md:w-5"}),t("span",{class:"text-xs md:text-sm"},"\u30E9\u30F3\u30AF\u7DAD\u6301\u9054\u6210"),t("img",{src:"images/mark_black_icon.svg",class:"w-4 md:w-5 ml-3"}),t("span",{class:"text-xs md:text-sm"},"\u30E9\u30F3\u30AF\u7DAD\u6301\u672A\u9054\u6210")],-1),U=[O],Z=t("div",{class:"text-center mt-6"},[t("span",{class:"text-sm md:text-lg text-black font-extrabold border bg-neutral-400/20 border-neutral-400 px-3 py-0.5"},"\u25A0 \u73FE\u5728\u53D7\u3051\u3089\u308C\u308B\u7279\u5178\u4E00\u89A7 \u25A0")],-1),q={class:"rounded-lg bg-neutral-50 drop-shadow-[0px_0px_10px_rgba(0,0,0,0.1)] mt-5 mx-1 py-2 px-4 font-bold text-xs md:text-sm leading-5 md:leading-7"},G=t("p",{class:"mt-6 px-6 font-bold align-middle text-sm md:text-lg"},[t("span",{class:"text-[0.6em]"},"\u25A0"),e(" \u4F1A\u54E1\u30E9\u30F3\u30AF\u306B\u3064\u3044\u3066")],-1),J=t("div",{class:"px-6 mt-1 mb-4 font-bold text-xs md:text-sm"},[t("p",{class:"pb-1 leading-5 md:leading-7"}," \u30DC\u30FC\u30CA\u30B9PT\u3084EP\u4ED8\u4E0E\u7387\u4E0A\u6607\u3001 \u30E9\u30F3\u30AF\u9650\u5B9A\u30AA\u30EA\u30D1\u306A\u3069\u3001\u3055\u307E\u3056\u307E\u306A\u7279\u5178\u304C\u53D7\u3051 \u3089\u308C\u307E\u3059\u3002 ")],-1),K=t("hr",{class:"mt-2 md:mt-4 mb-5 md:mb-6 mx-4 md:mx-6 border-neutral-300 border"},null,-1),Q=t("p",{class:"px-6 font-bold align-middle text-sm md:text-lg"},[t("span",{class:"text-[0.6em]"},"\u25A0"),e(" \u30E9\u30F3\u30AF\u30A2\u30C3\u30D7\u6761\u4EF6")],-1),R=t("div",{class:"px-6 mt-1 font-bold text-xs md:text-sm"},[t("p",{class:"pb-1 leading-5 md:leading-7"},[e(" \u30E9\u30F3\u30AF\u306F\u7D2F\u7A4D\u306EPT\u6D88\u8CBB\u6570\u306B\u3088\u3063\u3066\u5909\u52D5\u3057\u307E\u3059\u3002"),t("br"),e(" \u5404\u30E9\u30F3\u30AF\u6761\u4EF6\u3092\u6E80\u305F\u3059\u3068\u3001 \u5373\u6642\u306B\u6B21\u306E\u30E9\u30F3\u30AF\u3078\u3068\u79FB\u884C\u3057\u307E\u3059\u3002"),t("br"),t("span",{class:"text-[#FF0000]"}," \u203BPT\u306E\u7D2F\u7A4D\u306F\u6BCE\u67081\u65E50:00\u3067\u30EA\u30BB\u30C3\u30C8\u3055\u308C\u307E\u3059\u3002 ")])],-1),X={class:"px-6 mt-8 font-bold text-xs md:text-sm"},Y={class:"pb-1 leading-5 md:leading-7"},$={class:"text-green-400 font-extrabold text-sm md:text-base"},tt=t("p",{class:"pb-1 leading-5 md:leading-7"}," 1\u30F6\u6708\u9593\u306750%\u672A\u6E80\u306E\u5834\u5408\u306F\u73FE\u5728\u306E\u30E9\u30F3\u30AF\u304B\u30891\u3064\u30E9\u30F3\u30AF\u30C0\u30A6\u30F3\u3057\u307E\u3059\u3002 ",-1),et=t("hr",{class:"mt-5 md:mt-8 mb-8 md:mb-10 mx-4 md:mx-6 border-neutral-300 border"},null,-1),st=t("p",{class:"mb-6 px-4 font-bold align-middle text-sm md:text-lg"},[t("span",{class:"text-[0.6em]"},"\u25A0"),e(" \u30E9\u30F3\u30AF\u7279\u5178")],-1),nt=t("div",{class:"w-full flex items-center mb-[-0.4em] text-[0.7em] sm:text-[1em]"},[t("div",{class:"w-[40%] text-center font-bold text-[1.1em]"},"\u30E9\u30F3\u30AF"),t("div",{class:"w-[30%] text-center font-bold text-[0.9em]"},"\u8CFC\u5165\u6642PT\u4ED8\u4E0E\u7279\u5178"),t("div",{class:"w-[12%] text-center font-bold text-[0.8em]"},"EP\u4ED8\u4E0E\u7387"),t("div",{class:"w-[18%] text-center font-bold text-[0.8em] leading-[1.2em] sm:leading-[1.5em]"},[e(" \u30E9\u30F3\u30AF\u30A2\u30C3\u30D7"),t("br"),e("\u30DC\u30FC\u30CA\u30B9PT")])],-1),lt={class:"flex flex-wrap border-neutral-200 items-center gap-[0.8em]"},rt={class:"flex-1 flex bg-neutral-200 rounded-lg justify-center relative"},at={class:"w-full flex items-center"},ot={class:"text-center text-[0.8em] font-bold text-white w-[40%] h-full flex items-center justify-center"},dt=["src"],ct={class:"text-center flex gap-[0.4em] absolute items-end h-full"},it={class:"relative flex justify-center text-[0.9em] drop-shadow-xl"},mt={class:"leading-[1.2em]",style:{WebkitTextStrokeColor:"black",WebkitTextStrokeWidth:"2px"}},xt={class:"absolute leading-[1.2em]"},_t=t("div",{class:"h-full w-[0.3em] bg-white"},null,-1),pt={class:"text-center text-[1em] text-black font-black w-[30%] h-full flex flex-col items-center justify-center relative"},ut=["innerHTML"],bt=["innerHTML"],ft=t("div",{class:"h-full w-[0.3em] bg-white"},null,-1),ht={class:"w-[30%] flex divide-x-[0.3em] divide-white h-full relative"},gt={class:"text-center text-[1em] text-black font-black w-[40%] h-full flex items-center justify-center"},kt=["innerHTML"],vt=["innerHTML"],yt={class:"text-center text-[1em] text-black font-black w-[60%] h-full flex items-center justify-center relative"},wt=["innerHTML"],Tt=["innerHTML"],Pt=t("div",{class:"py-4 px-2 md:px-8"},[t("p",{class:"font-bold text-sm md:text-lg"},"\u3010\u8CFC\u5165\u6642PT\u7279\u5178\u306B\u3064\u3044\u3066\u3011"),t("p",{class:"text-xs md:text-sm px-2 py-2"},[e(" \u8CFC\u5165\u3059\u308B\u91D1\u984D\u3054\u3068\u306E\u30DC\u30FC\u30CA\u30B9PT\u3067\u3059\u3002"),t("br"),e(" \u8CFC\u5165\u6642\u70B9\u306E\u30E9\u30F3\u30AF\u306B\u5FDC\u3058\u3066\u4ED8\u4E0E\u3055\u308C\u307E\u3059\u3002 ")]),t("p",{class:"font-bold text-sm md:text-lg pt-2"}," \u3010\u30E9\u30F3\u30AF\u30A2\u30C3\u30D7\u30DC\u30FC\u30CA\u30B9PT\u306B\u3064\u3044\u3066\u3011 "),t("p",{class:"text-xs md:text-sm px-2 py-2"},[e(" \u30E9\u30F3\u30AF\u6607\u683C\u6642\u306B\u30DC\u30FC\u30CA\u30B9PT\u304C\u4ED8\u4E0E\u3055\u308C\u307E\u3059\u3002"),t("br"),e(" \u203B\u6607\u683C\u6642\u30DC\u30FC\u30CA\u30B9\u306F\u81EA\u52D5\u3067\u52A0\u7B97\u3055\u308C\u307E\u3059\u3002 ")]),t("p",{class:"font-bold text-sm md:text-lg pt-2"}," \u3010\u30E9\u30F3\u30AF\u9650\u5B9A\u30AA\u30EA\u30D1\u89E3\u653E\u306B\u3064\u3044\u3066\u3011 "),t("p",{class:"text-xs md:text-sm px-2 py-2"}," \u5404\u30E9\u30F3\u30AF\u6BCE\u306B\u9650\u5B9A\u30AA\u30EA\u30D1\u304C\u89E3\u653E\u3055\u308C\u307E\u3059\u3002 "),t("hr",{class:"my-4 mx-2 border-neutral-300 border"}),t("p",{class:"px-2 font-bold text-sm md:text-lg"},[t("span",{class:"text-[0.6em]"},"\u25A0"),e(" \u6CE8\u610F\u4E8B\u9805")]),t("p",{class:"text-xs md:text-sm px-2 py-2"},[e(" \u4F1A\u54E1\u30E9\u30F3\u30AF\u306E\u6607\u683C\u6761\u4EF6\u3001 \u7DAD\u6301\u6761\u4EF6\u3001 \u6607\u683C\u6761\u4EF6\u3001 \u7279\u5178\u5185\u5BB9\u306F\u4E88\u544A\u306A\u304F\u5909\u66F4\u3068\u306A\u308B\u5834\u5408\u304C\u3054\u3056\u3044\u307E\u3059\u3002 \u3042\u3089\u304B\u3058\u3081\u3054\u4E86\u627F\u304F\u3060\u3055\u3044\u3002"),t("br"),e(" \u30E9\u30F3\u30AF\u6607\u683C\u6642\u306B\u30B2\u30FC\u30B8\u306F\u521D\u671F\u306E\u4F4D\u7F6E\u306B\u623B\u308A\u307E\u3059\u3002 ")])],-1);function Ht(s,Lt,r,Mt,n,c){const b=x("Head"),f=x("AppLayout");return a(),o(p,null,[_(b,{title:"\u30DE\u30A4\u30DA\u30FC\u30B8"}),_(f,null,{default:k(()=>[t("div",L,[M,n.current_rank?(a(),o("div",W,[t("div",S,[t("span",j,d(n.current_rank.title),1),t("img",{src:n.current_rank.badge,class:"p-1 w-full max-w-48 mx-auto"},null,8,C)]),n.current_rank.rank<r.ranks[0].rank-1?(a(),o("div",N,A)):i("",!0),t("div",B,[E,t("div",F,[t("div",V,[t("div",{class:"h-full bg-gradient-to-b from-[#01b4ef] via-[#00bffa] to-[#0488c3]",style:u({width:`${r.current_pos}%`})},null,4)]),n.current_rank.rank>1?(a(),o("div",{key:0,class:"absolute z-10 h-[130%] top-[-15%]",style:u({left:`${r.mark_pos}%`})},[t("img",{src:r.succeed?"images/mark_red.svg":"images/mark_black.svg",class:"h-full mx-[-50%]"},null,8,D)],4)):i("",!0)])]),n.current_rank.rank>1?(a(),o("div",I,U)):i("",!0),Z,t("div",q,[t("p",null,"\u30FB\u30E9\u30F3\u30AF\u30A2\u30C3\u30D7\u30DC\u30FC\u30CA\u30B9 \xA0\xA0\xA0"+d(n.current_rank.bonus>0?c.format_number(n.current_rank.bonus):"\u2014")+" pt",1),t("p",null,d(n.current_rank.pt_rate>0?`\u30FB\u8CFC\u5165\u91D1\u984D\u3054\u3068\u306B \xA0\xA0\xA0${n.current_rank.pt_rate} %\u30DC\u30FC\u30CA\u30B9PT\u4ED8\u4E0E`:"\u30FB\u8CFC\u5165\u91D1\u984D\u3054\u3068\u306EPT\u4ED8\u4E0E \xA0\xA0\xA0\u901A\u5E38"),1),t("p",null,"\u30FBEP\u4ED8\u4E0E\u7387 \xA0\xA0\xA0"+d(n.current_rank.dp_rate>0?`${n.current_rank.dp_rate} %`:"\u901A\u5E38"),1)])])):i("",!0),G,J,K,Q,R,t("div",X,[t("p",Y,[t("span",$,d(r.ranks[r.ranks.length-2].title),1),e("\u4EE5\u4E0A\u306E\u30E9\u30F3\u30AF\u306B\u95A2\u3057\u3066\u306F\u3001 \u524D\u6708\u307E\u3067\u306B\u9054\u6210\u3057\u305F\u30E9\u30F3\u30AF\u6761\u4EF6\u3067\u3042\u308BPT\u6D88\u8CBB\u6570\u306E50%\u4EE5\u4E0A\u30921\u30F6\u6708\u4EE5\u5185\u306B\u9054\u6210\u3057\u3066\u3044\u308C\u3070\u3001\u305D\u306E\u30E9\u30F3\u30AF\u304C\u7DAD\u6301\u3055\u308C\u307E\u3059\u3002 ")]),tt]),et,st,nt,(a(!0),o(p,null,v(r.ranks,(l,m)=>(a(),o("div",{class:"my-[0.8em] md:my-[1.1em] text-[0.7em] sm:text-[1em]",key:m},[t("div",lt,[t("div",rt,[t("div",at,[t("div",ot,[t("img",{src:l.image,class:y(["h-[15vw] max-h-[90px] -my-1",{"py-1.5":m>4}])},null,10,dt),t("div",ct,[t("div",it,[t("span",mt,"( "+d(l.title)+" )",1),t("span",xt,"( "+d(l.title)+" )",1)])])]),_t,t("div",pt,[t("span",{class:"leading-[1.4em]",innerHTML:c.pt_rate_string(l),style:{WebkitTextStrokeColor:"white",WebkitTextStrokeWidth:"2px"}},null,8,ut),t("span",{class:"absolute leading-[1.4em]",innerHTML:c.pt_rate_string(l)},null,8,bt)]),ft,t("div",ht,[t("div",gt,[t("span",{innerHTML:l.dp_rate>0?l.dp_rate+"%":"<span class='text-[1.2em]'>???</span>",style:{WebkitTextStrokeColor:"white",WebkitTextStrokeWidth:"2px"}},null,8,kt),t("span",{class:"absolute",innerHTML:l.dp_rate>0?l.dp_rate+"%":"<span class='text-[1.2em]'>???</span>"},null,8,vt)]),t("div",yt,[t("span",{class:"leading-[1.4em]",innerHTML:c.bonus_pt_string(l),style:{WebkitTextStrokeColor:"white",WebkitTextStrokeWidth:"2px"}},null,8,wt),t("span",{class:"absolute leading-[1.4em]",innerHTML:c.bonus_pt_string(l)},null,8,Tt)])])])])])]))),128)),Pt])]),_:1})],64)}const zt=T(H,[["render",Ht]]);export{zt as default};
