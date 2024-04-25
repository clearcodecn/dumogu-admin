import{b as Se,bW as X,c_ as we,cG as V,h as L,cR as K,cQ as te,c6 as $e,j as W,cz as Ee,bA as Ie,cW as Ae,k as Ne,r as p,c as y,c$ as ke,o as Ce,l as I,q as ae,t as d,n as M,x as T,u as a,G as Z,z as _,m as O,E as Te,cL as Ve,H as Be,I as De,F as $,S as se,J as oe,X as Fe,aZ as Pe,R as E,y as Y,ar as Le,_ as Oe,a_ as Re,d0 as R,c1 as Ke,O as Me,Q as We,L as xe,bv as ee}from"./index-999588c8.js";import{E as Ue}from"./el-scrollbar-09fc8e0e.js";import{u as ze,E as He}from"./el-popper-ad8b0ffa.js";import{S as le,i as qe}from"./index-30f94e2d.js";import{d as Ge}from"./debounce-b3f94dfe.js";const je=()=>Math.floor(Math.random()*1e4),Qe=Se({valueKey:{type:String,default:"value"},modelValue:{type:[String,Number],default:""},debounce:{type:Number,default:300},placement:{type:X(String),values:["top","top-start","top-end","bottom","bottom-start","bottom-end"],default:"bottom-start"},fetchSuggestions:{type:X([Function,Array]),default:we},popperClass:{type:String,default:""},triggerOnFocus:{type:Boolean,default:!0},selectWhenUnmatched:{type:Boolean,default:!1},hideLoading:{type:Boolean,default:!1},label:{type:String},teleported:ze.teleported,highlightFirstItem:{type:Boolean,default:!1},fitInputWidth:{type:Boolean,default:!1}}),Je={[V]:t=>L(t),[K]:t=>L(t),[te]:t=>L(t),focus:t=>t instanceof FocusEvent,blur:t=>t instanceof FocusEvent,clear:()=>!0,select:t=>$e(t)},Xe=["aria-expanded","aria-owns"],Ze={key:0},Ye=["id","aria-selected","onClick"],ne="ElAutocomplete",et=W({name:ne,inheritAttrs:!1}),tt=W({...et,props:Qe,emits:Je,setup(t,{expose:g,emit:r}){const l=t,A=Ee(),S=Ie(),m=Ae(),u=Ne("autocomplete"),o=p(),x=p(),U=p(),z=p();let H=!1,N=!1;const c=p([]),n=p(-1),q=p(""),f=p(!1),k=p(!1),h=p(!1),w=y(()=>u.b(String(je()))),re=y(()=>S.style),v=y(()=>(c.value.length>0||h.value)&&f.value),G=y(()=>!l.hideLoading&&h.value),ue=y(()=>o.value?Array.from(o.value.$el.querySelectorAll("input")):[]),ie=async()=>{await Re(),v.value&&(q.value=`${o.value.$el.offsetWidth}px`)},ce=()=>{N=!0},pe=()=>{N=!1,n.value=-1},j=Ge(async e=>{if(k.value)return;const s=i=>{h.value=!1,!k.value&&(R(i)?(c.value=i,n.value=l.highlightFirstItem?0:-1):Ke(ne,"autocomplete suggestions must be an array"))};if(h.value=!0,R(l.fetchSuggestions))s(l.fetchSuggestions);else{const i=await l.fetchSuggestions(e,s);R(i)&&s(i)}},l.debounce),de=e=>{const s=!!e;if(r(K,e),r(V,e),k.value=!1,f.value||(f.value=s),!l.triggerOnFocus&&!e){k.value=!0,c.value=[];return}j(e)},fe=e=>{var s;m.value||(((s=e.target)==null?void 0:s.tagName)!=="INPUT"||ue.value.includes(document.activeElement))&&(f.value=!0)},ve=e=>{r(te,e)},ge=e=>{N||(f.value=!0,r("focus",e),l.triggerOnFocus&&!H&&j(String(l.modelValue)))},me=e=>{N||r("blur",e)},he=()=>{f.value=!1,r(V,""),r("clear")},Q=async()=>{v.value&&n.value>=0&&n.value<c.value.length?B(c.value[n.value]):l.selectWhenUnmatched&&(r("select",{value:l.modelValue}),c.value=[],n.value=-1)},be=e=>{v.value&&(e.preventDefault(),e.stopPropagation(),C())},C=()=>{f.value=!1},ye=()=>{var e;(e=o.value)==null||e.focus()},_e=()=>{var e;(e=o.value)==null||e.blur()},B=async e=>{r(K,e[l.valueKey]),r(V,e[l.valueKey]),r("select",e),c.value=[],n.value=-1},D=e=>{if(!v.value||h.value)return;if(e<0){n.value=-1;return}e>=c.value.length&&(e=c.value.length-1);const s=x.value.querySelector(`.${u.be("suggestion","wrap")}`),b=s.querySelectorAll(`.${u.be("suggestion","list")} li`)[e],F=s.scrollTop,{offsetTop:J,scrollHeight:P}=b;J+P>F+s.clientHeight&&(s.scrollTop+=P),J<F&&(s.scrollTop-=P),n.value=e,o.value.ref.setAttribute("aria-activedescendant",`${w.value}-item-${n.value}`)};return ke(z,()=>{v.value&&C()}),Ce(()=>{o.value.ref.setAttribute("role","textbox"),o.value.ref.setAttribute("aria-autocomplete","list"),o.value.ref.setAttribute("aria-controls","id"),o.value.ref.setAttribute("aria-activedescendant",`${w.value}-item-${n.value}`),H=o.value.ref.hasAttribute("readonly")}),g({highlightedIndex:n,activated:f,loading:h,inputRef:o,popperRef:U,suggestions:c,handleSelect:B,handleKeyEnter:Q,focus:ye,blur:_e,close:C,highlight:D}),(e,s)=>(I(),ae(a(He),{ref_key:"popperRef",ref:U,visible:a(v),placement:e.placement,"fallback-placements":["bottom-start","top-start"],"popper-class":[a(u).e("popper"),e.popperClass],teleported:e.teleported,"gpu-acceleration":!1,pure:"","manual-mode":"",effect:"light",trigger:"click",transition:`${a(u).namespace.value}-zoom-in-top`,persistent:"",onBeforeShow:ie,onShow:ce,onHide:pe},{content:d(()=>[M("div",{ref_key:"regionRef",ref:x,class:T([a(u).b("suggestion"),a(u).is("loading",a(G))]),style:Z({[e.fitInputWidth?"width":"minWidth"]:q.value,outline:"none"}),role:"region"},[_(a(Ue),{id:a(w),tag:"ul","wrap-class":a(u).be("suggestion","wrap"),"view-class":a(u).be("suggestion","list"),role:"listbox"},{default:d(()=>[a(G)?(I(),O("li",Ze,[_(a(Te),{class:T(a(u).is("loading"))},{default:d(()=>[_(a(Ve))]),_:1},8,["class"])])):(I(!0),O(Be,{key:1},De(c.value,(i,b)=>(I(),O("li",{id:`${a(w)}-item-${b}`,key:b,class:T({highlighted:n.value===b}),role:"option","aria-selected":n.value===b,onClick:F=>B(i)},[$(e.$slots,"default",{item:i},()=>[se(oe(i[e.valueKey]),1)])],10,Ye))),128))]),_:3},8,["id","wrap-class","view-class"])],6)]),default:d(()=>[M("div",{ref_key:"listboxRef",ref:z,class:T([a(u).b(),e.$attrs.class]),style:Z(a(re)),role:"combobox","aria-haspopup":"listbox","aria-expanded":a(v),"aria-owns":a(w)},[_(a(Fe),Pe({ref_key:"inputRef",ref:o},a(A),{"model-value":e.modelValue,onInput:de,onChange:ve,onFocus:ge,onBlur:me,onClear:he,onKeydown:[s[0]||(s[0]=E(Y(i=>D(n.value-1),["prevent"]),["up"])),s[1]||(s[1]=E(Y(i=>D(n.value+1),["prevent"]),["down"])),E(Q,["enter"]),E(C,["tab"]),E(be,["esc"])],onMousedown:fe}),Le({_:2},[e.$slots.prepend?{name:"prepend",fn:d(()=>[$(e.$slots,"prepend")])}:void 0,e.$slots.append?{name:"append",fn:d(()=>[$(e.$slots,"append")])}:void 0,e.$slots.prefix?{name:"prefix",fn:d(()=>[$(e.$slots,"prefix")])}:void 0,e.$slots.suffix?{name:"suffix",fn:d(()=>[$(e.$slots,"suffix")])}:void 0]),1040,["model-value","onKeydown"])],14,Xe)]),_:3},8,["visible","placement","popper-class","teleported","transition"]))}});var at=Oe(tt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/autocomplete/src/autocomplete.vue"]]);const st=Me(at);const ot=W({name:"IconSelect",components:{SvgIcon:le},props:{name:{type:String,default:""},isShow:{type:Boolean,default:!1}},emits:["change"],setup(t,{emit:g}){const r=xe({isShow:ee(t,"isShow"),name:ee(t,"name")}),l=y({get(){return r.name},set(S){g("change",S)}});function A(S,m){m(qe.map(u=>({value:u.name})))}return{dataContainer:r,iconName:l,getIconDataList:A}}}),lt={class:"item"};function nt(t,g,r,l,A,S){const m=le,u=st;return I(),ae(u,{modelValue:t.iconName,"onUpdate:modelValue":g[0]||(g[0]=o=>t.iconName=o),"fetch-suggestions":t.getIconDataList,style:{width:"100%"},disabled:t.dataContainer.isShow,"hide-loading":!0,"popper-class":"icon-select-cp-item",placeholder:""},{suffix:d(()=>[_(m,{style:"width:20px;height:20px;",name:t.iconName},null,8,["name"])]),default:d(o=>[M("div",lt,[_(m,{style:"width:15px;height:15px;margin-right:10px;",name:o.item.value},null,8,["name"]),se(" "+oe(o.item.value),1)])]),_:1},8,["modelValue","fetch-suggestions","disabled"])}const ft=We(ot,[["render",nt],["__scopeId","data-v-3681bcbb"]]);export{ft as I};