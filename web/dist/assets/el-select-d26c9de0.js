import{dc as Ll,K as Ee,c as d,g as ol,bu as Te,dd as D,w as q,u as oe,_ as Me,j as $e,k as ae,L as Ve,bw as tl,e as El,a_ as T,v as me,B as il,l as v,m as $,F as ie,n as k,J as X,x as m,y as U,r as A,o as al,d as yl,G as te,cq as rl,cU as Tl,s as cl,cS as Ml,cT as $l,cY as Vl,cH as ne,bz as fe,cn as kl,a as zl,de as ll,c6 as pl,cG as J,h as Pl,df as Bl,bX as Dl,dg as ql,cQ as Cl,X as Fl,E as Wl,cO as Kl,bV as fl,dh as Al,c2 as Rl,p as Sl,bf as _,bg as Nl,z as ve,t as E,q as K,H as nl,I as vl,C as P,T as Hl,R as B,bL as jl,ar as Ql,bh as ml,O as Gl,P as Ol}from"./index-999588c8.js";import{E as Ul,u as Xl,a as Jl}from"./el-popper-ad8b0ffa.js";import{E as Yl}from"./el-scrollbar-09fc8e0e.js";import{i as bl,c as Zl,C as xl,t as _l}from"./PowerTools-2d20d736.js";import{d as hl}from"./debounce-b3f94dfe.js";const en=(e="")=>e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"),ln=e=>Ll[e||"default"],nn=e=>({focus:()=>{var l,i;(i=(l=e.value)==null?void 0:l.focus)==null||i.call(l)}}),wl="ElSelectGroup",ke="ElSelect";function on(e,l){const i=Ee(ke),h=Ee(wl,{disabled:!1}),g=d(()=>Object.prototype.toString.call(e.value).toLowerCase()==="[object object]"),p=d(()=>i.props.multiple?w(i.props.modelValue,e.value):I(e.value,i.props.modelValue)),r=d(()=>{if(i.props.multiple){const c=i.props.modelValue||[];return!p.value&&c.length>=i.props.multipleLimit&&i.props.multipleLimit>0}else return!1}),u=d(()=>e.label||(g.value?"":e.value)),S=d(()=>e.value||e.label||""),O=d(()=>e.disabled||l.groupDisabled||r.value),f=ol(),w=(c=[],b)=>{if(g.value){const y=i.props.valueKey;return c&&c.some(F=>Te(D(F,y))===D(b,y))}else return c&&c.includes(b)},I=(c,b)=>{if(g.value){const{valueKey:y}=i.props;return D(c,y)===D(b,y)}else return c===b},M=()=>{!e.disabled&&!h.disabled&&(i.hoverIndex=i.optionsArray.indexOf(f.proxy))};q(()=>u.value,()=>{!e.created&&!i.props.remote&&i.setSelected()}),q(()=>e.value,(c,b)=>{const{remote:y,valueKey:F}=i.props;if(Object.is(c,b)||(i.onOptionDestroy(b,f.proxy),i.onOptionCreate(f.proxy)),!e.created&&!y){if(F&&typeof c=="object"&&typeof b=="object"&&c[F]===b[F])return;i.setSelected()}}),q(()=>h.disabled,()=>{l.groupDisabled=h.disabled},{immediate:!0});const{queryChange:t}=Te(i);return q(t,c=>{const{query:b}=oe(c),y=new RegExp(en(b),"i");l.visible=y.test(u.value)||e.created,l.visible||i.filteredOptionsCount--}),{select:i,currentLabel:u,currentValue:S,itemSelected:p,isDisabled:O,hoverItem:M}}const tn=$e({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:{type:Boolean,default:!1}},setup(e){const l=ae("select"),i=Ve({index:-1,groupDisabled:!1,visible:!0,hitState:!1,hover:!1}),{currentLabel:h,itemSelected:g,isDisabled:p,select:r,hoverItem:u}=on(e,i),{visible:S,hover:O}=tl(i),f=ol().proxy;r.onOptionCreate(f),El(()=>{const I=f.value,{selected:M}=r,c=(r.props.multiple?M:[M]).some(b=>b.value===f.value);T(()=>{r.cachedOptions.get(I)===f&&!c&&r.cachedOptions.delete(I)}),r.onOptionDestroy(I,f)});function w(){e.disabled!==!0&&i.groupDisabled!==!0&&r.handleOptionSelect(f,!0)}return{ns:l,currentLabel:h,itemSelected:g,isDisabled:p,select:r,hoverItem:u,visible:S,hover:O,selectOptionClick:w,states:i}}});function an(e,l,i,h,g,p){return me((v(),$("li",{class:m([e.ns.be("dropdown","item"),e.ns.is("disabled",e.isDisabled),{selected:e.itemSelected,hover:e.hover}]),onMouseenter:l[0]||(l[0]=(...r)=>e.hoverItem&&e.hoverItem(...r)),onClick:l[1]||(l[1]=U((...r)=>e.selectOptionClick&&e.selectOptionClick(...r),["stop"]))},[ie(e.$slots,"default",{},()=>[k("span",null,X(e.currentLabel),1)])],34)),[[il,e.visible]])}var sl=Me(tn,[["render",an],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);const rn=$e({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=Ee(ke),l=ae("select"),i=d(()=>e.props.popperClass),h=d(()=>e.props.multiple),g=d(()=>e.props.fitInputWidth),p=A("");function r(){var u;p.value=`${(u=e.selectWrapper)==null?void 0:u.offsetWidth}px`}return al(()=>{r(),yl(e.selectWrapper,r)}),{ns:l,minWidth:p,popperClass:i,isMultiple:h,isFitInputWidth:g}}});function sn(e,l,i,h,g,p){return v(),$("div",{class:m([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:te({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[ie(e.$slots,"default")],6)}var un=Me(rn,[["render",sn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);function dn(e){const{t:l}=rl();return Ve({options:new Map,cachedOptions:new Map,createdLabel:null,createdSelected:!1,selected:e.multiple?[]:{},inputLength:20,inputWidth:0,optionsCount:0,filteredOptionsCount:0,visible:!1,softFocus:!1,selectedLabel:"",hoverIndex:-1,query:"",previousQuery:null,inputHovering:!1,cachedPlaceHolder:"",currentPlaceholder:l("el.select.placeholder"),menuVisibleOnFocus:!1,isOnComposition:!1,isSilentBlur:!1,prefixWidth:11,tagInMultiLine:!1,mouseEnter:!1})}const cn=(e,l,i)=>{const{t:h}=rl(),g=ae("select");Tl({from:"suffixTransition",replacement:"override style scheme",version:"2.3.0",scope:"props",ref:"https://element-plus.org/en-US/component/select.html#select-attributes"},d(()=>e.suffixTransition===!1));const p=A(null),r=A(null),u=A(null),S=A(null),O=A(null),f=A(null),w=A(-1),I=cl({query:""}),M=cl(""),{form:t,formItem:c}=Ml(),b=d(()=>!e.filterable||e.multiple||!l.visible),y=d(()=>e.disabled||(t==null?void 0:t.disabled)),F=d(()=>{const n=e.multiple?Array.isArray(e.modelValue)&&e.modelValue.length>0:e.modelValue!==void 0&&e.modelValue!==null&&e.modelValue!=="";return e.clearable&&!y.value&&l.inputHovering&&n}),re=d(()=>e.remote&&e.filterable&&!e.remoteShowSuffix?"":e.suffixIcon),ze=d(()=>g.is("reverse",re.value&&l.visible&&e.suffixTransition)),be=d(()=>e.remote?300:0),se=d(()=>e.loading?e.loadingText||h("el.select.loading"):e.remote&&l.query===""&&l.options.size===0?!1:e.filterable&&l.query&&l.options.size>0&&l.filteredOptionsCount===0?e.noMatchText||h("el.select.noMatch"):l.options.size===0?e.noDataText||h("el.select.noData"):null),L=d(()=>Array.from(l.options.values())),Pe=d(()=>Array.from(l.cachedOptions.values())),Be=d(()=>{const n=L.value.filter(o=>!o.created).some(o=>o.currentLabel===l.query);return e.filterable&&e.allowCreate&&l.query!==""&&!n}),ee=$l(),De=d(()=>["small"].includes(ee.value)?"small":"default"),qe=d({get(){return l.visible&&se.value!==!1},set(n){l.visible=n}});q([()=>y.value,()=>ee.value,()=>t==null?void 0:t.size],()=>{T(()=>{W()})}),q(()=>e.placeholder,n=>{l.cachedPlaceHolder=l.currentPlaceholder=n}),q(()=>e.modelValue,(n,o)=>{e.multiple&&(W(),n&&n.length>0||r.value&&l.query!==""?l.currentPlaceholder="":l.currentPlaceholder=l.cachedPlaceHolder,e.filterable&&!e.reserveKeyword&&(l.query="",N(l.query))),ue(),e.filterable&&!e.multiple&&(l.inputLength=20),!bl(n,o)&&e.validateEvent&&(c==null||c.validate("change").catch(a=>Vl()))},{flush:"post",deep:!0}),q(()=>l.visible,n=>{var o,a,s;n?((a=(o=u.value)==null?void 0:o.updatePopper)==null||a.call(o),e.filterable&&(l.filteredOptionsCount=l.optionsCount,l.query=e.remote?"":l.selectedLabel,e.multiple?(s=r.value)==null||s.focus():l.selectedLabel&&(l.currentPlaceholder=`${l.selectedLabel}`,l.selectedLabel=""),N(l.query),!e.multiple&&!e.remote&&(I.value.query="",fe(I),fe(M)))):(e.filterable&&(ne(e.filterMethod)&&e.filterMethod(""),ne(e.remoteMethod)&&e.remoteMethod("")),r.value&&r.value.blur(),l.query="",l.previousQuery=null,l.selectedLabel="",l.inputLength=20,l.menuVisibleOnFocus=!1,Fe(),T(()=>{r.value&&r.value.value===""&&l.selected.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)}),e.multiple||(l.selected&&(e.filterable&&e.allowCreate&&l.createdSelected&&l.createdLabel?l.selectedLabel=l.createdLabel:l.selectedLabel=l.selected.currentLabel,e.filterable&&(l.query=l.selectedLabel)),e.filterable&&(l.currentPlaceholder=l.cachedPlaceHolder))),i.emit("visible-change",n)}),q(()=>l.options.entries(),()=>{var n,o,a;if(!kl)return;(o=(n=u.value)==null?void 0:n.updatePopper)==null||o.call(n),e.multiple&&W();const s=((a=O.value)==null?void 0:a.querySelectorAll("input"))||[];Array.from(s).includes(document.activeElement)||ue(),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&ge()},{flush:"post"}),q(()=>l.hoverIndex,n=>{zl(n)&&n>-1?w.value=L.value[n]||{}:w.value={},L.value.forEach(o=>{o.hover=w.value===o})});const W=()=>{e.collapseTags&&!e.filterable||T(()=>{var n,o;if(!p.value)return;const a=p.value.$el.querySelector("input"),s=S.value,C=ln(ee.value||(t==null?void 0:t.size));a.style.height=`${(l.selected.length===0?C:Math.max(s?s.clientHeight+(s.clientHeight>C?6:0):0,C))-2}px`,l.tagInMultiLine=Number.parseFloat(a.style.height)>=C,l.visible&&se.value!==!1&&((o=(n=u.value)==null?void 0:n.updatePopper)==null||o.call(n))})},N=async n=>{if(!(l.previousQuery===n||l.isOnComposition)){if(l.previousQuery===null&&(ne(e.filterMethod)||ne(e.remoteMethod))){l.previousQuery=n;return}l.previousQuery=n,T(()=>{var o,a;l.visible&&((a=(o=u.value)==null?void 0:o.updatePopper)==null||a.call(o))}),l.hoverIndex=-1,e.multiple&&e.filterable&&T(()=>{const o=r.value.value.length*15+20;l.inputLength=e.collapseTags?Math.min(50,o):o,he(),W()}),e.remote&&ne(e.remoteMethod)?(l.hoverIndex=-1,e.remoteMethod(n)):ne(e.filterMethod)?(e.filterMethod(n),fe(M)):(l.filteredOptionsCount=l.optionsCount,I.value.query=n,fe(I),fe(M)),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&(await T(),ge())}},he=()=>{l.currentPlaceholder!==""&&(l.currentPlaceholder=r.value.value?"":l.cachedPlaceHolder)},ge=()=>{const n=L.value.filter(s=>s.visible&&!s.disabled&&!s.states.groupDisabled),o=n.find(s=>s.created),a=n[0];l.hoverIndex=de(L.value,o||a)},ue=()=>{var n;if(e.multiple)l.selectedLabel="";else{const a=ye(e.modelValue);(n=a.props)!=null&&n.created?(l.createdLabel=a.props.value,l.createdSelected=!0):l.createdSelected=!1,l.selectedLabel=a.currentLabel,l.selected=a,e.filterable&&(l.query=l.selectedLabel);return}const o=[];Array.isArray(e.modelValue)&&e.modelValue.forEach(a=>{o.push(ye(a))}),l.selected=o,T(()=>{W()})},ye=n=>{let o;const a=ll(n).toLowerCase()==="object",s=ll(n).toLowerCase()==="null",C=ll(n).toLowerCase()==="undefined";for(let R=l.cachedOptions.size-1;R>=0;R--){const V=Pe.value[R];if(a?D(V.value,e.valueKey)===D(n,e.valueKey):V.value===n){o={value:n,currentLabel:V.currentLabel,isDisabled:V.isDisabled};break}}if(o)return o;const Q=a?n.label:!s&&!C?n:"",G={value:n,currentLabel:Q};return e.multiple&&(G.hitState=!1),G},Fe=()=>{setTimeout(()=>{const n=e.valueKey;e.multiple?l.selected.length>0?l.hoverIndex=Math.min.apply(null,l.selected.map(o=>L.value.findIndex(a=>D(a,n)===D(o,n)))):l.hoverIndex=-1:l.hoverIndex=L.value.findIndex(o=>pe(o)===pe(l.selected))},300)},We=()=>{var n,o;Ke(),(o=(n=u.value)==null?void 0:n.updatePopper)==null||o.call(n),e.multiple&&!e.filterable&&W()},Ke=()=>{var n;l.inputWidth=(n=p.value)==null?void 0:n.$el.getBoundingClientRect().width},Ae=()=>{e.filterable&&l.query!==l.selectedLabel&&(l.query=l.selectedLabel,N(l.query))},Re=hl(()=>{Ae()},be.value),Ne=hl(n=>{N(n.target.value)},be.value),Y=n=>{bl(e.modelValue,n)||i.emit(Cl,n)},He=n=>{if(n.target.value.length<=0&&!ce()){const o=e.modelValue.slice();o.pop(),i.emit(J,o),Y(o)}n.target.value.length===1&&e.modelValue.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)},je=(n,o)=>{const a=l.selected.indexOf(o);if(a>-1&&!y.value){const s=e.modelValue.slice();s.splice(a,1),i.emit(J,s),Y(s),i.emit("remove-tag",o.value)}n.stopPropagation()},Z=n=>{n.stopPropagation();const o=e.multiple?[]:"";if(!Pl(o))for(const a of l.selected)a.isDisabled&&o.push(a.value);i.emit(J,o),Y(o),l.hoverIndex=-1,l.visible=!1,i.emit("clear")},Ce=(n,o)=>{var a;if(e.multiple){const s=(e.modelValue||[]).slice(),C=de(s,n.value);C>-1?s.splice(C,1):(e.multipleLimit<=0||s.length<e.multipleLimit)&&s.push(n.value),i.emit(J,s),Y(s),n.created&&(l.query="",N(""),l.inputLength=20),e.filterable&&((a=r.value)==null||a.focus())}else i.emit(J,n.value),Y(n.value),l.visible=!1;l.isSilentBlur=o,Qe(),!l.visible&&T(()=>{H(n)})},de=(n=[],o)=>{if(!pl(o))return n.indexOf(o);const a=e.valueKey;let s=-1;return n.some((C,Q)=>Te(D(C,a))===D(o,a)?(s=Q,!0):!1),s},Qe=()=>{l.softFocus=!0;const n=r.value||p.value;n&&(n==null||n.focus())},H=n=>{var o,a,s,C,Q;const G=Array.isArray(n)?n[0]:n;let R=null;if(G!=null&&G.value){const V=L.value.filter(Le=>Le.value===G.value);V.length>0&&(R=V[0].$el)}if(u.value&&R){const V=(C=(s=(a=(o=u.value)==null?void 0:o.popperRef)==null?void 0:a.contentRef)==null?void 0:s.querySelector)==null?void 0:C.call(s,`.${g.be("dropdown","wrap")}`);V&&Bl(V,R)}(Q=f.value)==null||Q.handleScroll()},Ge=n=>{l.optionsCount++,l.filteredOptionsCount++,l.options.set(n.value,n),l.cachedOptions.set(n.value,n)},Ue=(n,o)=>{l.options.get(n)===o&&(l.optionsCount--,l.filteredOptionsCount--,l.options.delete(n))},Xe=n=>{n.code!==Dl.backspace&&ce(!1),l.inputLength=r.value.value.length*15+20,W()},ce=n=>{if(!Array.isArray(l.selected))return;const o=l.selected[l.selected.length-1];if(o)return n===!0||n===!1?(o.hitState=n,n):(o.hitState=!o.hitState,o.hitState)},Je=n=>{const o=n.target.value;if(n.type==="compositionend")l.isOnComposition=!1,T(()=>N(o));else{const a=o[o.length-1]||"";l.isOnComposition=!ql(a)}},Ye=()=>{T(()=>H(l.selected))},j=n=>{l.softFocus?l.softFocus=!1:((e.automaticDropdown||e.filterable)&&(e.filterable&&!l.visible&&(l.menuVisibleOnFocus=!0),l.visible=!0),i.emit("focus",n))},Se=()=>{var n;l.visible=!1,(n=p.value)==null||n.blur()},Ze=n=>{T(()=>{l.isSilentBlur?l.isSilentBlur=!1:i.emit("blur",n)}),l.softFocus=!1},Oe=n=>{Z(n)},xe=()=>{l.visible=!1},_e=n=>{l.visible&&(n.preventDefault(),n.stopPropagation(),l.visible=!1)},we=n=>{var o;n&&!l.mouseEnter||y.value||(l.menuVisibleOnFocus?l.menuVisibleOnFocus=!1:(!u.value||!u.value.isFocusInsideContent())&&(l.visible=!l.visible),l.visible&&((o=r.value||p.value)==null||o.focus()))},Ie=()=>{l.visible?L.value[l.hoverIndex]&&Ce(L.value[l.hoverIndex],void 0):we()},pe=n=>pl(n.value)?D(n.value,e.valueKey):n.value,el=d(()=>L.value.filter(n=>n.visible).every(n=>n.disabled)),le=n=>{if(!l.visible){l.visible=!0;return}if(!(l.options.size===0||l.filteredOptionsCount===0)&&!l.isOnComposition&&!el.value){n==="next"?(l.hoverIndex++,l.hoverIndex===l.options.size&&(l.hoverIndex=0)):n==="prev"&&(l.hoverIndex--,l.hoverIndex<0&&(l.hoverIndex=l.options.size-1));const o=L.value[l.hoverIndex];(o.disabled===!0||o.states.groupDisabled===!0||!o.visible)&&le(n),T(()=>H(w.value))}};return{optionsArray:L,selectSize:ee,handleResize:We,debouncedOnInputChange:Re,debouncedQueryChange:Ne,deletePrevTag:He,deleteTag:je,deleteSelected:Z,handleOptionSelect:Ce,scrollToOption:H,readonly:b,resetInputHeight:W,showClose:F,iconComponent:re,iconReverse:ze,showNewOption:Be,collapseTagSize:De,setSelected:ue,managePlaceholder:he,selectDisabled:y,emptyText:se,toggleLastOptionHitState:ce,resetInputState:Xe,handleComposition:Je,onOptionCreate:Ge,onOptionDestroy:Ue,handleMenuEnter:Ye,handleFocus:j,blur:Se,handleBlur:Ze,handleClearClick:Oe,handleClose:xe,handleKeydownEscape:_e,toggleMenu:we,selectOption:Ie,getValueKey:pe,navigateOptions:le,dropMenuVisible:qe,queryChange:I,groupQueryChange:M,reference:p,input:r,tooltipRef:u,tags:S,selectWrapper:O,scrollbar:f,handleMouseEnter:()=>{l.mouseEnter=!0},handleMouseLeave:()=>{l.mouseEnter=!1}}},gl="ElSelect",pn=$e({name:gl,componentName:gl,components:{ElInput:Fl,ElSelectMenu:un,ElOption:sl,ElTag:Zl,ElScrollbar:Yl,ElTooltip:Ul,ElIcon:Wl},directives:{ClickOutside:xl},props:{name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:{type:String,validator:Kl},effect:{type:String,default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:{type:Boolean,default:!1},teleported:Xl.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:fl,default:Al},fitInputWidth:{type:Boolean,default:!1},suffixIcon:{type:fl,default:Rl},tagType:{..._l.type,default:"info"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:{type:Boolean,default:!1},suffixTransition:{type:Boolean,default:!0},placement:{type:String,values:Jl,default:"bottom-start"}},emits:[J,Cl,"remove-tag","clear","visible-change","focus","blur"],setup(e,l){const i=ae("select"),h=ae("input"),{t:g}=rl(),p=dn(e),{optionsArray:r,selectSize:u,readonly:S,handleResize:O,collapseTagSize:f,debouncedOnInputChange:w,debouncedQueryChange:I,deletePrevTag:M,deleteTag:t,deleteSelected:c,handleOptionSelect:b,scrollToOption:y,setSelected:F,resetInputHeight:re,managePlaceholder:ze,showClose:be,selectDisabled:se,iconComponent:L,iconReverse:Pe,showNewOption:Be,emptyText:ee,toggleLastOptionHitState:De,resetInputState:qe,handleComposition:W,onOptionCreate:N,onOptionDestroy:he,handleMenuEnter:ge,handleFocus:ue,blur:ye,handleBlur:Fe,handleClearClick:We,handleClose:Ke,handleKeydownEscape:Ae,toggleMenu:Re,selectOption:Ne,getValueKey:Y,navigateOptions:He,dropMenuVisible:je,reference:Z,input:Ce,tooltipRef:de,tags:Qe,selectWrapper:H,scrollbar:Ge,queryChange:Ue,groupQueryChange:Xe,handleMouseEnter:ce,handleMouseLeave:Je}=cn(e,p,l),{focus:Ye}=nn(Z),{inputWidth:j,selected:Se,inputLength:Ze,filteredOptionsCount:Oe,visible:xe,softFocus:_e,selectedLabel:we,hoverIndex:Ie,query:pe,inputHovering:el,currentPlaceholder:le,menuVisibleOnFocus:ul,isOnComposition:dl,isSilentBlur:n,options:o,cachedOptions:a,optionsCount:s,prefixWidth:C,tagInMultiLine:Q}=tl(p),G=d(()=>{const z=[i.b()],x=oe(u);return x&&z.push(i.m(x)),e.disabled&&z.push(i.m("disabled")),z}),R=d(()=>({maxWidth:`${oe(j)-32}px`,width:"100%"})),V=d(()=>({maxWidth:`${oe(j)>123?oe(j)-123:oe(j)-75}px`}));Sl(ke,Ve({props:e,options:o,optionsArray:r,cachedOptions:a,optionsCount:s,filteredOptionsCount:Oe,hoverIndex:Ie,handleOptionSelect:b,onOptionCreate:N,onOptionDestroy:he,selectWrapper:H,selected:Se,setSelected:F,queryChange:Ue,groupQueryChange:Xe})),al(()=>{p.cachedPlaceHolder=le.value=e.placeholder||g("el.select.placeholder"),e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(le.value=""),yl(H,O),e.remote&&e.multiple&&re(),T(()=>{const z=Z.value&&Z.value.$el;if(z&&(j.value=z.getBoundingClientRect().width,l.slots.prefix)){const x=z.querySelector(`.${h.e("prefix")}`);C.value=Math.max(x.getBoundingClientRect().width+5,30)}}),F()}),e.multiple&&!Array.isArray(e.modelValue)&&l.emit(J,[]),!e.multiple&&Array.isArray(e.modelValue)&&l.emit(J,"");const Le=d(()=>{var z,x;return(x=(z=de.value)==null?void 0:z.popperRef)==null?void 0:x.contentRef});return{tagInMultiLine:Q,prefixWidth:C,selectSize:u,readonly:S,handleResize:O,collapseTagSize:f,debouncedOnInputChange:w,debouncedQueryChange:I,deletePrevTag:M,deleteTag:t,deleteSelected:c,handleOptionSelect:b,scrollToOption:y,inputWidth:j,selected:Se,inputLength:Ze,filteredOptionsCount:Oe,visible:xe,softFocus:_e,selectedLabel:we,hoverIndex:Ie,query:pe,inputHovering:el,currentPlaceholder:le,menuVisibleOnFocus:ul,isOnComposition:dl,isSilentBlur:n,options:o,resetInputHeight:re,managePlaceholder:ze,showClose:be,selectDisabled:se,iconComponent:L,iconReverse:Pe,showNewOption:Be,emptyText:ee,toggleLastOptionHitState:De,resetInputState:qe,handleComposition:W,handleMenuEnter:ge,handleFocus:ue,blur:ye,handleBlur:Fe,handleClearClick:We,handleClose:Ke,handleKeydownEscape:Ae,toggleMenu:Re,selectOption:Ne,getValueKey:Y,navigateOptions:He,dropMenuVisible:je,focus:Ye,reference:Z,input:Ce,tooltipRef:de,popperPaneRef:Le,tags:Qe,selectWrapper:H,scrollbar:Ge,wrapperKls:G,selectTagsStyle:R,nsSelect:i,tagTextStyle:V,handleMouseEnter:ce,handleMouseLeave:Je}}}),fn=["disabled","autocomplete"],vn={style:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}};function mn(e,l,i,h,g,p){const r=_("el-tag"),u=_("el-tooltip"),S=_("el-icon"),O=_("el-input"),f=_("el-option"),w=_("el-scrollbar"),I=_("el-select-menu"),M=Nl("click-outside");return me((v(),$("div",{ref:"selectWrapper",class:m(e.wrapperKls),onMouseenter:l[22]||(l[22]=(...t)=>e.handleMouseEnter&&e.handleMouseEnter(...t)),onMouseleave:l[23]||(l[23]=(...t)=>e.handleMouseLeave&&e.handleMouseLeave(...t)),onClick:l[24]||(l[24]=U((...t)=>e.toggleMenu&&e.toggleMenu(...t),["stop"]))},[ve(u,{ref:"tooltipRef",visible:e.dropMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"fallback-placements":["bottom-start","top-start","right","left"],effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onShow:e.handleMenuEnter},{default:E(()=>[k("div",{class:"select-trigger",onMouseenter:l[20]||(l[20]=t=>e.inputHovering=!0),onMouseleave:l[21]||(l[21]=t=>e.inputHovering=!1)},[e.multiple?(v(),$("div",{key:0,ref:"tags",class:m(e.nsSelect.e("tags")),style:te(e.selectTagsStyle)},[e.collapseTags&&e.selected.length?(v(),$("span",{key:0,class:m([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[ve(r,{closable:!e.selectDisabled&&!e.selected[0].isDisabled,size:e.collapseTagSize,hit:e.selected[0].hitState,type:e.tagType,"disable-transitions":"",onClose:l[0]||(l[0]=t=>e.deleteTag(t,e.selected[0]))},{default:E(()=>[k("span",{class:m(e.nsSelect.e("tags-text")),style:te(e.tagTextStyle)},X(e.selected[0].currentLabel),7)]),_:1},8,["closable","size","hit","type"]),e.selected.length>1?(v(),K(r,{key:0,closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":""},{default:E(()=>[e.collapseTagsTooltip?(v(),K(u,{key:0,disabled:e.dropMenuVisible,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:E(()=>[k("span",{class:m(e.nsSelect.e("tags-text"))},"+ "+X(e.selected.length-1),3)]),content:E(()=>[k("div",{class:m(e.nsSelect.e("collapse-tags"))},[(v(!0),$(nl,null,vl(e.selected.slice(1),(t,c)=>(v(),$("div",{key:c,class:m(e.nsSelect.e("collapse-tag"))},[(v(),K(r,{key:e.getValueKey(t),class:"in-tooltip",closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",style:{margin:"2px"},onClose:b=>e.deleteTag(b,t)},{default:E(()=>[k("span",{class:m(e.nsSelect.e("tags-text")),style:te({maxWidth:e.inputWidth-75+"px"})},X(t.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))],2))),128))],2)]),_:1},8,["disabled","effect","teleported"])):(v(),$("span",{key:1,class:m(e.nsSelect.e("tags-text"))},"+ "+X(e.selected.length-1),3))]),_:1},8,["size","type"])):P("v-if",!0)],2)):P("v-if",!0),P(" <div> "),e.collapseTags?P("v-if",!0):(v(),K(Hl,{key:1,onAfterLeave:e.resetInputHeight},{default:E(()=>[k("span",{class:m([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[(v(!0),$(nl,null,vl(e.selected,t=>(v(),K(r,{key:e.getValueKey(t),closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",onClose:c=>e.deleteTag(c,t)},{default:E(()=>[k("span",{class:m(e.nsSelect.e("tags-text")),style:te({maxWidth:e.inputWidth-75+"px"})},X(t.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))),128))],2)]),_:1},8,["onAfterLeave"])),P(" </div> "),e.filterable?me((v(),$("input",{key:2,ref:"input","onUpdate:modelValue":l[1]||(l[1]=t=>e.query=t),type:"text",class:m([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:te({marginLeft:e.prefixWidth&&!e.selected.length||e.tagInMultiLine?`${e.prefixWidth}px`:"",flexGrow:1,width:`${e.inputLength/(e.inputWidth-32)}%`,maxWidth:`${e.inputWidth-42}px`}),onFocus:l[2]||(l[2]=(...t)=>e.handleFocus&&e.handleFocus(...t)),onBlur:l[3]||(l[3]=(...t)=>e.handleBlur&&e.handleBlur(...t)),onKeyup:l[4]||(l[4]=(...t)=>e.managePlaceholder&&e.managePlaceholder(...t)),onKeydown:[l[5]||(l[5]=(...t)=>e.resetInputState&&e.resetInputState(...t)),l[6]||(l[6]=B(U(t=>e.navigateOptions("next"),["prevent"]),["down"])),l[7]||(l[7]=B(U(t=>e.navigateOptions("prev"),["prevent"]),["up"])),l[8]||(l[8]=B((...t)=>e.handleKeydownEscape&&e.handleKeydownEscape(...t),["esc"])),l[9]||(l[9]=B(U((...t)=>e.selectOption&&e.selectOption(...t),["stop","prevent"]),["enter"])),l[10]||(l[10]=B((...t)=>e.deletePrevTag&&e.deletePrevTag(...t),["delete"])),l[11]||(l[11]=B(t=>e.visible=!1,["tab"]))],onCompositionstart:l[12]||(l[12]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onCompositionupdate:l[13]||(l[13]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onCompositionend:l[14]||(l[14]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onInput:l[15]||(l[15]=(...t)=>e.debouncedQueryChange&&e.debouncedQueryChange(...t))},null,46,fn)),[[jl,e.query]]):P("v-if",!0)],6)):P("v-if",!0),ve(O,{id:e.id,ref:"reference",modelValue:e.selectedLabel,"onUpdate:modelValue":l[16]||(l[16]=t=>e.selectedLabel=t),type:"text",placeholder:e.currentPlaceholder,name:e.name,autocomplete:e.autocomplete,size:e.selectSize,disabled:e.selectDisabled,readonly:e.readonly,"validate-event":!1,class:m([e.nsSelect.is("focus",e.visible)]),tabindex:e.multiple&&e.filterable?-1:void 0,onFocus:e.handleFocus,onBlur:e.handleBlur,onInput:e.debouncedOnInputChange,onPaste:e.debouncedOnInputChange,onCompositionstart:e.handleComposition,onCompositionupdate:e.handleComposition,onCompositionend:e.handleComposition,onKeydown:[l[17]||(l[17]=B(U(t=>e.navigateOptions("next"),["stop","prevent"]),["down"])),l[18]||(l[18]=B(U(t=>e.navigateOptions("prev"),["stop","prevent"]),["up"])),B(U(e.selectOption,["stop","prevent"]),["enter"]),B(e.handleKeydownEscape,["esc"]),l[19]||(l[19]=B(t=>e.visible=!1,["tab"]))]},Ql({suffix:E(()=>[e.iconComponent&&!e.showClose?(v(),K(S,{key:0,class:m([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:E(()=>[(v(),K(ml(e.iconComponent)))]),_:1},8,["class"])):P("v-if",!0),e.showClose&&e.clearIcon?(v(),K(S,{key:1,class:m([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:E(()=>[(v(),K(ml(e.clearIcon)))]),_:1},8,["class","onClick"])):P("v-if",!0)]),_:2},[e.$slots.prefix?{name:"prefix",fn:E(()=>[k("div",vn,[ie(e.$slots,"prefix")])])}:void 0]),1032,["id","modelValue","placeholder","name","autocomplete","size","disabled","readonly","class","tabindex","onFocus","onBlur","onInput","onPaste","onCompositionstart","onCompositionupdate","onCompositionend","onKeydown"])],32)]),content:E(()=>[ve(I,null,{default:E(()=>[me(ve(w,{ref:"scrollbar",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:m([e.nsSelect.is("empty",!e.allowCreate&&Boolean(e.query)&&e.filteredOptionsCount===0)])},{default:E(()=>[e.showNewOption?(v(),K(f,{key:0,value:e.query,created:!0},null,8,["value"])):P("v-if",!0),ie(e.$slots,"default")]),_:3},8,["wrap-class","view-class","class"]),[[il,e.options.size>0&&!e.loading]]),e.emptyText&&(!e.allowCreate||e.loading||e.allowCreate&&e.options.size===0)?(v(),$(nl,{key:0},[e.$slots.empty?ie(e.$slots,"empty",{key:0}):(v(),$("p",{key:1,class:m(e.nsSelect.be("dropdown","empty"))},X(e.emptyText),3))],64)):P("v-if",!0)]),_:3})]),_:3},8,["visible","placement","teleported","popper-class","effect","transition","persistent","onShow"])],34)),[[M,e.handleClose,e.popperPaneRef]])}var bn=Me(pn,[["render",mn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);const hn=$e({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:{type:Boolean,default:!1}},setup(e){const l=ae("select"),i=A(!0),h=ol(),g=A([]);Sl(wl,Ve({...tl(e)}));const p=Ee(ke);al(()=>{g.value=r(h.subTree)});const r=S=>{const O=[];return Array.isArray(S.children)&&S.children.forEach(f=>{var w;f.type&&f.type.name==="ElOption"&&f.component&&f.component.proxy?O.push(f.component.proxy):(w=f.children)!=null&&w.length&&O.push(...r(f))}),O},{groupQueryChange:u}=Te(p);return q(u,()=>{i.value=g.value.some(S=>S.visible===!0)},{flush:"post"}),{visible:i,ns:l}}});function gn(e,l,i,h,g,p){return me((v(),$("ul",{class:m(e.ns.be("group","wrap"))},[k("li",{class:m(e.ns.be("group","title"))},X(e.label),3),k("li",null,[k("ul",{class:m(e.ns.b("group"))},[ie(e.$slots,"default")],2)])],2)),[[il,e.visible]])}var Il=Me(hn,[["render",gn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);const In=Gl(bn,{Option:sl,OptionGroup:Il}),Ln=Ol(sl);Ol(Il);export{Ln as E,In as a,ke as s};