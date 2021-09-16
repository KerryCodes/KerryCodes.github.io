var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,s=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,o=(e,t)=>{for(var a in t||(t={}))n.call(t,a)&&s(e,a,t[a]);if(l)for(var a of l(t))r.call(t,a)&&s(e,a,t[a]);return e},c=(e,l)=>t(e,a(l)),m=("undefined"!=typeof require&&require,(e,t)=>{var a={};for(var s in e)n.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&l)for(var s of l(e))t.indexOf(s)<0&&r.call(e,s)&&(a[s]=e[s]);return a});import{R as i,F as u,I as p,a as d,S as E,C as g,b as h,D as v,U as f,B as b,c as y,d as P,l as S,r as k,M as C,P as x,e as N,f as I,g as w,h as L,i as O,j as F,k as M,m as V,n as q,o as R,p as D}from"./vendor.41cebb18.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();function j(e,t,a){const{max:l,min:n,message:r,rules:s}=e,o=function(e,t){e=e||"";const{zh:a,others:l,blank:n}=t;let r=0,s=0,o=0;const c=/[\u4e00-\u9fa5]+/g,m=/【|】|、|；|‘|’|，|。|～|！|（|）|—|「|」|：|“|”|《|》|？+/g,i=/\s+/g;e=(e=(e=(e=e.replace(/[\r\n]/g,"")).replace(/&nbsp;/g," ")).replace(c,(e=>(r+=e.length,"")))).replace(m,(e=>(s+=e.length,""))),n||(e=e.replace(i,""));return o=e.length,(r+s)*a+o*l}(a,s);return o<n||o>l?Promise.reject(r):Promise.resolve()}class G{constructor(e,t){this.getName=()=>this.configs.itemProps.name,this.id=Date.now().toString(),this.type=e,this.configs=S.exports.cloneDeep(t).configs,this.currentFormItemValue=null,this.needDefineGetterProps={}}}const T={input:{type:"input",configs:{itemProps:{name:"input",label:"标题",colon:!0,rules:[{required:!0,message:"请输入标题！"}]},inputProps:{disabled:!1,placeholder:"请输入"},extra:{wordsLimit:{max:10,min:0,message:"输入字符数需要在0～10之间！",rules:{zh:1,others:1,blank:!0}}}},StandardItemFC:({itemProps:e,inputProps:t,extra:a})=>i.createElement(u.Item,c(o({},e),{rules:[...e.rules,{validator:j.bind(null,a.wordsLimit)}]}),i.createElement(p,o({},t)))},inputTexArea:{type:"inputTexArea",configs:{itemProps:{name:"inputTexArea",label:"多行文本",colon:!0,rules:[{required:!0,message:"请输入文本！"}]},inputProps:{disabled:!1,placeholder:"请输入",rows:4},extra:{wordsLimit:{max:10,min:0,message:"输入字符数需要在0～10之间！",rules:{zh:1,others:1,blank:!0}}}},StandardItemFC:({itemProps:e,inputProps:t,extra:a})=>i.createElement(u.Item,c(o({},e),{rules:[...e.rules,{validator:j.bind(null,a.wordsLimit)}]}),i.createElement(p.TextArea,o({},t)))},inputPassword:{type:"inputPassword",configs:{itemProps:{name:"inputPassword",label:"密码",colon:!0,rules:[{required:!0,message:"请输入密码！"}]},inputProps:{disabled:!1,placeholder:"请输入"}},StandardItemFC:({itemProps:e,inputProps:t})=>i.createElement(u.Item,o({},e),i.createElement(p.Password,o({},t)))},inputNumber:{type:"inputNumber",configs:{itemProps:{name:"inputNumber",label:"数字",colon:!0,rules:[{required:!0,message:"请输入数字！"}]},inputProps:{disabled:!1,placeholder:"请输入",max:10,min:0,bordered:!0}},StandardItemFC:({itemProps:e,inputProps:t})=>i.createElement(u.Item,o({},e),i.createElement(d,o({},t)))},select:{type:"select",configs:{itemProps:{name:"select",label:"选项",colon:!0,rules:[{required:!0,message:"请选择！"}]},inputProps:{disabled:!1,placeholder:"请选择",options:[{label:"A",value:1},{label:"B",value:2}]}},StandardItemFC:({itemProps:e,inputProps:t})=>i.createElement(u.Item,o({},e),i.createElement(E,o({},t)))},checkboxGroup:{type:"checkboxGroup",configs:{itemProps:{name:"checkboxGroup",label:"多选",colon:!0,rules:[{required:!0,message:"请选择！"}]},inputProps:{disabled:!1,options:[{label:"A",value:1},{label:"B",value:2}]}},StandardItemFC:({itemProps:e,inputProps:t})=>i.createElement(u.Item,o({},e),i.createElement(g.Group,o({},t)))},radioGroup:{type:"radioGroup",configs:{itemProps:{name:"radioGroup",label:"单选",colon:!0,rules:[{required:!0,message:"请选择！"}]},inputProps:{disabled:!1,options:[{label:"A",value:1},{label:"B",value:2}]}},StandardItemFC:({itemProps:e,inputProps:t})=>i.createElement(u.Item,o({},e),i.createElement(h.Group,o({},t)))},datePicker:{type:"datePicker",configs:{itemProps:{name:"datePicker",label:"日期",colon:!0,rules:[{required:!0,message:"请选择日期！"}]},inputProps:{disabled:!1,placeholder:"请选择",picker:"date"}},StandardItemFC:({itemProps:e,inputProps:t})=>i.createElement(u.Item,o({},e),i.createElement(v,o({},t)))},rangePicker:{type:"rangePicker",configs:{itemProps:{name:"rangePicker",label:"日期",colon:!0,rules:[{required:!0,message:"请选择日期！"}]},inputProps:{disabled:!1,picker:"day"}},StandardItemFC:({itemProps:e,inputProps:t})=>i.createElement(u.Item,o({},e),i.createElement(v.RangePicker,o({},t)))},upload:{type:"upload",configs:{itemProps:{name:"upload",label:"上传",valuePropName:"fileList",colon:!0,rules:[{required:!0,message:"请上传！"}]},inputProps:{disabled:!1,listType:"picture",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",showUploadList:!1}},StandardItemFC:({itemProps:e,inputProps:t})=>i.createElement(u.Item,o({},e),i.createElement(f,o({},t),i.createElement(b,{icon:i.createElement(y,null)},"Click to Upload")))},switch:{type:"switch",configs:{itemProps:{name:"switch",label:"开关",valuePropName:"checked",colon:!0,rules:[{required:!1,message:""}]},inputProps:{disabled:!1}},StandardItemFC:({itemProps:e,inputProps:t})=>i.createElement(u.Item,o({},e),i.createElement(P,o({},t)))},empty:{type:"empty",configs:{itemProps:{name:"empty",label:"占位表单",colon:!0,rules:[{required:!0}]},inputProps:{disabled:!1}},StandardItemFC:({itemProps:e})=>i.createElement(u.Item,o({},e),i.createElement("div",null,"占位表单仅作为表单结构的一部分，表单实际渲染前将被中间件识别并替换！"))},submit:{type:"submit",configs:{itemProps:{name:"submit",wrapperCol:{offset:8,span:16}},inputProps:{disabled:!1,type:"primary",htmlType:"submit"},extra:{buttonText:"Submit"}},StandardItemFC:({itemProps:e,inputProps:t,extra:a})=>i.createElement(u.Item,o({},e),i.createElement(b,o({},t),a.buttonText))}},A={total:o({},T),antd:T},K={labelCol:{span:6},wrapperCol:{span:14}};function z(){const[e,t]=k.exports.useState("antd"),a=k.exports.useMemo((()=>function(e){const t=[],a=A[e],l=e=>{const t=e.target.dataset.type;e.dataTransfer.setData("text/plain",t)};for(const n of Object.values(a)){const{type:e,StandardItemFC:a,configs:r}=n,s=i.createElement("div",{key:e,className:"item",draggable:!0,onDragStart:l,"data-type":e},i.createElement("div",{className:"item-forbidden"},i.createElement(a,o({},r))));t.push(s)}return t}(e)),[e]),l=k.exports.useMemo((()=>Object.keys(A).map((e=>i.createElement(C.Item,{key:e},e)))),[]);return i.createElement(k.exports.Fragment,null,i.createElement("div",null,i.createElement("div",{className:"top-area"},i.createElement("strong",null,"组件库")),i.createElement(C,{defaultSelectedKeys:["antd"],mode:"inline",onSelect:({key:e})=>t(e)},l)),i.createElement("div",{className:"leggo-configs-left"},i.createElement(u,o({},K),i.createElement("div",{className:"leggo-configs-left-form-content"},a))))}function B(e){const{namepath:t,activeSchema:a,schemaListOptions:l}=e,[n]=u.useForm(),[r,s]=k.exports.useState(!1),[o,c]=k.exports.useState(!1),[m,g]=k.exports.useState("string"),[v,f]=k.exports.useState("value = "),[y,P]=k.exports.useState(!0),S=(e,t)=>{const{observedName:a,rule:l,reference:n}=t;let r="value = ";a?(P(!1),r+=`${a}.value`,l&&n&&(r+=` ${l} `,r+="string"===m?`"${n}"`:n)):P(!0),f(r)};return k.exports.useEffect((()=>{const e=t.join();let l=a.current.needDefineGetterProps;l||(l={},a.current.needDefineGetterProps=l);const s=l[e];r?s?n.setFieldsValue(s):n.resetFields():c(!!s)}),[r]),i.createElement(k.exports.Fragment,null,i.createElement(x,{placement:"topLeft",trigger:"click",title:"设置关联值",visible:r,onVisibleChange:s,content:i.createElement("div",null,i.createElement(u,{form:n,onValuesChange:S},i.createElement(u.Item,{label:"关联对象",name:"observedName",required:!0},i.createElement(E,{options:l})),i.createElement(u.Item,{label:"计算规则",name:"rule"},i.createElement(E,null,i.createElement(E.Option,{value:"<"},"关联值 < 参考值"),i.createElement(E.Option,{value:"<="},"关联值 ≤ 参考值"),i.createElement(E.Option,{value:"==="},"关联值 === 参考值"),i.createElement(E.Option,{value:">="},"关联值 ≥ 参考值"),i.createElement(E.Option,{value:">"},"关联值 > 参考值"))),i.createElement(u.Item,{label:"参考值类型："},i.createElement(h.Group,{size:"small",defaultValue:"string",buttonStyle:"solid",onChange:e=>{const t=e.target.value;n.setFields([{name:"reference",value:void 0}]);const a=n.getFieldsValue(!0);S(0,a),g(t)}},i.createElement(h.Button,{value:"string"},"string类型"),i.createElement(h.Button,{value:"number"},"number类型"))),i.createElement(u.Item,{label:"参考值",name:"reference"},"string"===m?i.createElement(p,{placeholder:"参考值"}):i.createElement(d,{placeholder:"参考值",bordered:!1})),i.createElement(u.Item,{label:"关联结果："},i.createElement("div",null,v))),i.createElement(N,null,i.createElement(b,{disabled:y,onClick:()=>{n.validateFields().then((e=>{const{observedName:l,rule:n,reference:r}=e,o=t.join(),c={observedName:l,namepath:t,reference:r,rule:n};a.current.needDefineGetterProps[o]=c,s(!1)}))},type:"primary"},"确定"),i.createElement(b,{disabled:y,onClick:()=>{const e=t.join();delete a.current.needDefineGetterProps[e],s(!1)},danger:!0},"删除关联")))},i.createElement(b,{type:o?"link":"text",icon:i.createElement(I,null)})))}const J={labelCol:{span:6},wrapperCol:{span:18}},$=[{label:"GET",value:"get"},{label:"POST",value:"post"},{label:"PUT",value:"put"},{label:"DELETE",value:"delete"}],U=[{label:"http://",value:"http://"},{label:"https://",value:"https://"}];function W(e){const{activeSchema:t,schemaListOptions:a}=e;return i.createElement(u,c(o({},J),{onValuesChange:(e,a)=>{const{method:l,url:n,params:r,data:s}=a;t.current.configs.postman={propName:"options",method:l,url:n,params:null==r?void 0:r.filter((e=>e)),data:null==s?void 0:s.filter((e=>e))}},initialValues:t.current.configs.postman}),i.createElement(u.Item,{label:"method",name:"method",required:!0},i.createElement(E,{options:$,allowClear:!0})),i.createElement(u.Item,{label:"url",name:"url",required:!0,initialValue:"www."},i.createElement(p,{addonBefore:i.createElement(E,{options:U,defaultValue:"http://"})})),i.createElement(u.Item,{label:"params"},i.createElement(u.List,{name:"params"},((e,{add:l,remove:n})=>i.createElement(k.exports.Fragment,null,e.map(((e,l)=>{var r=e,{key:s,name:d,fieldKey:E}=r,g=m(r,["key","name","fieldKey"]);return i.createElement(N,{key:s,align:"baseline"},i.createElement(u.Item,c(o({},g),{name:[d,"key"],fieldKey:[E,"key"],rules:[{required:!0,message:"请定义key"}]}),i.createElement(p,{placeholder:"key"})),i.createElement(B,{activeSchema:t,namepath:["postman","params",l,"value"],schemaListOptions:a}),i.createElement(u.Item,c(o({},g),{name:[d,"value"],fieldKey:[E,"value"],rules:[{required:!0,message:"请定义value"}]}),i.createElement(p,{placeholder:"value"})),i.createElement(w,{onClick:()=>n(d)}))})),i.createElement(u.Item,null,i.createElement(b,{type:"dashed",onClick:()=>l(),block:!0,icon:i.createElement(L,null)},"新增key")))))),i.createElement(u.Item,{label:"data"},i.createElement(u.List,{name:"data"},((e,{add:l,remove:n})=>i.createElement(k.exports.Fragment,null,e.map(((e,l)=>{var r=e,{key:s,name:d,fieldKey:E}=r,g=m(r,["key","name","fieldKey"]);return i.createElement(N,{key:s,align:"baseline"},i.createElement(u.Item,c(o({},g),{name:[d,"key"],fieldKey:[E,"key"],rules:[{required:!0,message:"请定义key"}]}),i.createElement(p,{placeholder:"key"})),i.createElement(B,{activeSchema:t,namepath:["postman","data",l,"value"],schemaListOptions:a}),i.createElement(u.Item,c(o({},g),{name:[d,"value"],fieldKey:[E,"value"],rules:[{required:!0,message:"请定义value"}]}),i.createElement(p,{placeholder:"value"})),i.createElement(w,{onClick:()=>n(d)}))})),i.createElement(u.Item,null,i.createElement(b,{type:"dashed",onClick:()=>l(),block:!0,icon:i.createElement(L,null)},"新增key")))))))}function X(e){const{activeSchema:t,handleChange:a}=e,l=t.current.configs.inputProps.options,[n,r]=k.exports.useState("number");return i.createElement(k.exports.Fragment,null,i.createElement("div",null,i.createElement("span",null,"value类型："),i.createElement(h.Group,{size:"small",defaultValue:"number",buttonStyle:"solid",onChange:e=>{const t=e.target.value;l.forEach((e=>{const a=e.value;e.value="string"===t?String(a):Number(a)||a.charCodeAt()})),a(l),r(t)}},i.createElement(h,{value:"string"},"string"),i.createElement(h,{value:"number"},"number"))),i.createElement(u,{onValuesChange:(e,t)=>{const l=t.options.filter((e=>void 0!==(null==e?void 0:e.label)&&void 0!==(null==e?void 0:e.value)));l.length&&a(l)}},i.createElement(u.List,{name:"options",initialValue:l},((e,{add:t,remove:a})=>i.createElement(k.exports.Fragment,null,e.map((e=>{var t=e,{key:l,name:r,fieldKey:s}=t,E=m(t,["key","name","fieldKey"]);return i.createElement(N,{key:l,style:{display:"flex",marginBottom:8},align:"baseline"},i.createElement(u.Item,c(o({},E),{name:[r,"label"],fieldKey:[s,"label"],rules:[{required:!0,message:"请定义label"}]}),i.createElement(p,{placeholder:"label"})),i.createElement(u.Item,c(o({},E),{name:[r,"value"],fieldKey:[s,"value"],rules:[{required:!0,message:"请定义value"}]}),"string"===n?i.createElement(p,{placeholder:"value"}):i.createElement(d,{placeholder:"value",bordered:!1})),i.createElement(w,{onClick:()=>a(r)}))})),i.createElement(u.Item,null,i.createElement(b,{type:"dashed",onClick:()=>t(),block:!0,icon:i.createElement(L,null)},"新增选项")))))))}function _(e){const{activeSchema:t,schemaListOptions:a,handleChangePropValue:l}=e,n=t.current.configs.postman,[r,s]=k.exports.useState(n?"dynamic":"static");return i.createElement("div",null,i.createElement("strong",null,"options："),i.createElement(h.Group,{size:"small",value:r,buttonStyle:"solid",onChange:e=>{const a=e.target.value;"static"===a&&(t.current.configs.postman=null),s(a)}},i.createElement(h.Button,{value:"static"},"静态数据"),i.createElement(h.Button,{value:"dynamic"},"远程数据")),i.createElement("div",{className:"configs-area"},"static"===r?i.createElement(X,{activeSchema:t,handleChange:l}):i.createElement(W,{activeSchema:t,schemaListOptions:a})))}const H=(e,t)=>c(o({},e),{[t.type]:t.payload});function Q(e){const{wordsLimit:t,forceRender:a}=e,{max:l,min:n,message:r,rules:s}=t,[o,c]=k.exports.useReducer(H,s),m=(e,t)=>{s[e]=t,c({type:e,payload:t}),a()},u=(e,l)=>{t[e]=l,a()};return i.createElement("div",null,i.createElement("strong",null,"wordsLimit："),i.createElement(x,{trigger:"click",content:i.createElement("div",{className:"words-count-configs-content"},i.createElement("div",null,i.createElement("span",{className:"title"},"汉字："),i.createElement(h.Group,{onChange:e=>m("zh",e.target.value),value:o.zh},i.createElement(h,{value:1},"1个"),i.createElement(h,{value:2},"2个"))),i.createElement(O,null),i.createElement("div",null,i.createElement("span",{className:"title"},"其它字符："),i.createElement(h.Group,{onChange:e=>m("others",e.target.value),value:o.others},i.createElement(h,{value:.5},"0.5个"),i.createElement(h,{value:1},"1个"))),i.createElement(O,null),i.createElement("div",null,i.createElement("span",{className:"title"},"空格："),i.createElement(h.Group,{onChange:e=>m("blank",e.target.value),value:o.blank},i.createElement(h,{value:!0},"包含"),i.createElement(h,{value:!1},"不包含"))))},i.createElement(b,{type:"link",size:"small"},"字符数统计规则")),i.createElement("div",{className:"configs-area"},i.createElement(N,null,i.createElement("strong",null,"max："),i.createElement(d,{min:1,defaultValue:l,onChange:e=>u("max",e),bordered:!1})),i.createElement(N,null,i.createElement("strong",null,"min："),i.createElement(d,{min:0,defaultValue:n,onChange:e=>u("min",e),bordered:!1})),i.createElement(N,null,i.createElement("strong",null,"message："),i.createElement(p,{defaultValue:r,onChange:e=>u("message",e.target.value)}))))}function Y(e){const{propOwner:t,namepath:a,propName:l,propDefaultValue:n,activeSchema:r,schemaList:s,forceRender:o}=e,c=k.exports.useRef(typeof n),[m,u]=k.exports.useState(n),g=s.map((e=>{const{label:t,name:a}=e.configs.itemProps;return{label:`${t} - ${a}`,value:a}})),h=e=>{t[l]=e,u(e),o()};switch(l){case"options":return i.createElement(_,{activeSchema:r,schemaListOptions:g,handleChangePropValue:h});case"wordsLimit":return i.createElement(Q,{wordsLimit:n,forceRender:o});case"picker":const e=[{label:"time",value:"time"},{label:"date",value:"date"},{label:"week",value:"week"},{label:"month",value:"month"},{label:"quarter",value:"quarter"},{label:"year",value:"year"}];return i.createElement(N,null,i.createElement("strong",null,l,"："),i.createElement(E,{options:e,defaultValue:m,onChange:h}),i.createElement(B,{activeSchema:r,namepath:a,schemaListOptions:g}))}switch(c.current){case"object":if(!n)return null;const e=n,t=Object.entries(e);return i.createElement("div",null,i.createElement("strong",null,l,"："),i.createElement("div",{className:"configs-area"},t.map((([t,l])=>i.createElement(Y,{key:t,propOwner:e,namepath:[...a,t],propName:t,propDefaultValue:l,activeSchema:r,schemaList:s,forceRender:o})))));case"boolean":return i.createElement(N,null,i.createElement("strong",null,l,"："),i.createElement(P,{checked:m,onChange:h}),i.createElement(B,{activeSchema:r,namepath:a,schemaListOptions:g}));case"string":return i.createElement(N,null,i.createElement("strong",null,l,"："),i.createElement(p,{value:m,onChange:e=>h(e.target.value)}),"name"!==l&&i.createElement(B,{activeSchema:r,namepath:a,schemaListOptions:g}));case"number":return i.createElement(N,null,i.createElement("strong",null,l,"："),i.createElement(d,{value:m,onChange:h,bordered:!1}),i.createElement(B,{activeSchema:r,namepath:a,schemaListOptions:g}));default:return null}}function Z(e){const{activeSchema:t,schemaList:a,forceRender:l}=e,{id:n,configs:r}=t.current||{},{itemProps:s,inputProps:o,extra:c}=r||{},m=k.exports.useMemo((()=>Object.entries(s||{})),[t.current]),u=k.exports.useMemo((()=>Object.entries(o||{})),[t.current]),p=k.exports.useMemo((()=>Object.entries(c||{})),[t.current]);return i.createElement("div",{className:"leggo-configs-right"},i.createElement("div",{className:"top-area"},i.createElement("strong",null,"属性配置")),i.createElement("div",{className:"scroll-container"},i.createElement("div",{className:"configs-area"},i.createElement(O,null,"ItemProps"),m.map((([e,r])=>i.createElement(Y,{key:n+e,propOwner:s,namepath:["itemProps",e],propName:e,propDefaultValue:r,activeSchema:t,schemaList:a,forceRender:l})))),i.createElement("div",{className:"configs-area"},i.createElement(O,null,"InputProps"),u.map((([e,r])=>i.createElement(Y,{key:n+e,propOwner:o,namepath:["inputProps",e],propName:e,propDefaultValue:r,activeSchema:t,schemaList:a,forceRender:l})))),i.createElement("div",{className:"configs-area"},i.createElement(O,null,"Extra"),p.map((([e,r])=>i.createElement(Y,{key:n+e,propOwner:c,namepath:["extra",e],propName:e,propDefaultValue:r,activeSchema:t,schemaList:a,forceRender:l}))))))}function ee(e){const{activeSchema:t,schema:a,setSchemaList:l,forceRender:n}=e,{id:r,type:s,configs:c}=a,m=A.total[s].StandardItemFC,u=t.current===a;return i.createElement("div",{className:"dropped-item "+(u?"active-item":""),onClick:e=>{e.stopPropagation(),t.current=a,n()}},i.createElement(b,{type:"text",className:"delete-butt",onClick:e=>{e.stopPropagation(),u&&(t.current=null),l((e=>e.filter((e=>e.id!==r)))),n()}},"X"),i.createElement(m,o({},c)))}const te={labelCol:{span:6},wrapperCol:{span:14}};function ae(e){const{formProps:t,schemaList:a,onPostSchemaModel:l}=e,[n]=u.useForm(),r=k.exports.useRef(""),[s,m]=k.exports.useState(!1),[d,E]=k.exports.useState(!1);return i.createElement(k.exports.Fragment,null,i.createElement(b,{type:"primary",disabled:!a.length,onClick:()=>m(!0)},"生成模板"),i.createElement(F,{title:"创建并发送模板",visible:s,onOk:()=>n.submit(),onCancel:()=>m(!1),getContainer:!1},i.createElement(u,c(o({form:n},te),{onFinish:e=>{const n=c(o({},e),{formProps:t,schemaList:a});l(n),r.current=JSON.stringify(n,null,4),m(!1),E(!0)}}),i.createElement(u.Item,{label:"模板名称",name:"name",rules:[{required:!0,message:"请填写模板名称！"}]},i.createElement(p,null)),i.createElement(u.Item,{label:"描述",name:"description"},i.createElement(p.TextArea,null)))),i.createElement(F,{title:"schemaModel",width:"50vw",bodyStyle:{height:"70vh",overflow:"auto"},visible:d,onOk:()=>{navigator.clipboard.writeText(r.current),E(!1)},okText:"复制JSON",onCancel:()=>E(!1)},i.createElement("pre",null,r.current)))}function le(e){const{setSchemaList:t}=e,[a,l]=k.exports.useState(!1),[n,r]=k.exports.useState("");return i.createElement(k.exports.Fragment,null,i.createElement(b,{type:"link",onClick:()=>l(!0)},"注入模板"),i.createElement(F,{title:"注入schemaModel",width:"50vw",bodyStyle:{height:"70vh",overflow:"auto"},visible:a,onOk:()=>{const{schemaList:e}=JSON.parse(n);t(e),l(!1)},okButtonProps:{disabled:!n},onCancel:()=>l(!1)},i.createElement(p.TextArea,{value:n,onChange:e=>r(e.target.value),allowClear:!0,autoSize:{minRows:6},placeholder:"请黏贴JSON格式的schemaModel～"})))}function ne(e){const{activeSchema:t,schemaList:a,setSchemaList:l,forceRender:n,onPostSchemaModel:r}=e,[s]=u.useForm(),[m,p]=k.exports.useState({labelCol:{span:6},wrapperCol:{span:14}}),E=e=>{p((t=>o(o({},t),e)))};return k.exports.useEffect((()=>{s.validateFields()})),i.createElement("div",{className:"leggo-configs-middle"},i.createElement("div",{className:"top-area"},i.createElement("strong",null,"表单模板"),i.createElement("div",{className:"top-actions"},i.createElement("div",null,i.createElement("strong",null,"labelCol："),i.createElement(d,{min:0,max:24-m.wrapperCol.span,value:m.labelCol.span,onChange:e=>E({labelCol:{span:e}})})),i.createElement("div",null,i.createElement("strong",null,"wrapperCol："),i.createElement(d,{min:0,max:24-m.labelCol.span,value:m.wrapperCol.span,onChange:e=>E({wrapperCol:{span:e}})})),i.createElement(le,{setSchemaList:l}),i.createElement(ae,{formProps:m,schemaList:a,onPostSchemaModel:r}),i.createElement(b,{onClick:()=>{t.current=null,l([])}},"clear"))),i.createElement(u,c(o({form:s},m),{className:"leggo-configs-middle-form"}),i.createElement("div",{className:"drop-area",onDragOver:e=>{e.preventDefault(),e.dataTransfer.dropEffect="copy"},onDrop:e=>{e.preventDefault();const t=e.dataTransfer.getData("text/plain");if(!t)return;const n=A.total[t],r=new G(t,n);l([...a,r])}},a.map((e=>i.createElement(ee,{key:e.id,activeSchema:t,schema:e,setSchemaList:l,forceRender:n}))))))}function re(e){const t=k.exports.useRef(null),[a,l]=k.exports.useState([]),[,n]=k.exports.useState(0),r=()=>n((e=>e+1));return i.createElement("div",{className:"leggo-configs"},i.createElement(z,null),i.createElement(ne,{schemaList:a,setSchemaList:l,activeSchema:t,forceRender:r,onPostSchemaModel:e.onPostSchemaModel}),i.createElement(Z,{schemaList:a,activeSchema:t,forceRender:r}))}re.registerItemStore=e=>{const{storeName:t,store:a}=e;A[t]||(A[t]=a,A.total=o(o({},a),A.total))};const se=new WeakMap;class oe{constructor(e,t,a,l){const n=this.parseSchemaModel(a);this.ref=e,this.schemaModel=n,this.forceLeggoFormRender=()=>t((e=>e+1)),l&&n.schemaList.forEach(l)}parseSchemaModel(e){try{null==e||e.schemaList.forEach((e=>{e.linkingNames=new Set,e.getName=()=>e.configs.itemProps.name}))}catch(t){V.error("解析失败!"),console.log(t)}finally{return e}}resetSchemaModel(e,t){const a=this.parseSchemaModel(e);t&&a.schemaList.forEach(t),this.schemaModel=a,this.forceLeggoFormRender()}updateSchema(e,t){var a,l;const n=null==(a=this.schemaModel)?void 0:a.schemaList.find((t=>t.getName()===e));if(n){const{configs:e}=n;t(e),null==(l=n.forceLeggoFormItemRender)||l.call(n)}}}function ce(e){var t;const a=e,{leggo:l,onValuesChange:n}=a,r=m(a,["leggo","onValuesChange"]),{formProps:s,schemaList:p}=(null==(t=se.get(l.ref))?void 0:t.schemaModel)||{};return i.createElement(u,c(o(o({},s),r),{onValuesChange:(e,t)=>{for(const[a,l]of Object.entries(e)){const e=p.find((e=>e.getName()===a));e.currentFormItemValue=Array.isArray(l)?l.join():l,e.linkingNames.forEach((e=>{p.find((t=>t.getName()===e)).forceLeggoFormItemRender()}))}n(e,t)}}),null==p?void 0:p.map((e=>i.createElement(me,{key:e.id,schema:e,schemaList:p}))))}function me(e){var t,a,l;const{schema:n,schemaList:r}=e,{type:s,configs:c,needDefineGetterProps:m}=n,{postman:u,CustomizedItemFC:p}=c,d=(null==(t=null==u?void 0:u.params)?void 0:t.map((e=>e.value)))||[],E=(null==(a=null==u?void 0:u.data)?void 0:a.map((e=>e.value)))||[],[,g]=k.exports.useState(0),h=null==(l=A.total[s])?void 0:l.StandardItemFC,v=h&&i.createElement(h,o({},c));return k.exports.useEffect((()=>{n.forceLeggoFormItemRender=()=>g((e=>e+1))}),[]),k.exports.useLayoutEffect((()=>{Object.values(m).forEach((e=>{const{observedName:t,namepath:a,reference:l,rule:s}=e,o=n.getName(),m=r.find((e=>e.getName()===t)),i=a.slice(-1)[0],u=a.slice(0,-1).reduce(((e,t)=>e[t]),c);m.linkingNames.add(o),Reflect.defineProperty(u,i,{get:()=>{let e=m.currentFormItemValue;if(l&&s)switch(s){case"<":return e<l;case"<=":return e<=l;case"===":return e===l;case">=":return e>=l;case">":return e>l}return e}})}))}),[]),k.exports.useEffect((()=>{const{method:e,url:t,params:a,data:l}=u||{};if(e&&t){const n=null==a?void 0:a.reduce(((e,t)=>{const a=t.value;return e[t.key]=""===a?void 0:a,e}),{}),r=null==l?void 0:l.reduce(((e,t)=>(e[t.key]=t.value,e)),{});M({method:e,url:t,params:n,data:r}).then((e=>{c.inputProps.options=e.data.data,g((e=>e+1))}))}}),[...d,...E]),p?i.createElement(p,null,v):v}ce.useLeggo=e=>{let t=null;const a=k.exports.useRef(null),[,l]=k.exports.useState(0);return se.has(a)||(t=new oe(a,l,e),se.set(a,t)),t||se.get(a)};function ie(e){const{schemaModel:t}=e,{name:a,description:l}=t,[n]=u.useForm(),r=ce.useLeggo(),[s,o]=k.exports.useState(!1);return k.exports.useEffect((()=>{r.resetSchemaModel(t)}),[t]),i.createElement("div",{className:"show-form"},i.createElement("div",{className:"header"},i.createElement("div",null,"模板名：",a),i.createElement("div",null,"描述：",l),i.createElement("div",null,i.createElement("span",null,"操作："),i.createElement(N,null,i.createElement(b,{onClick:()=>o(!0)},"查看schemaModel"),i.createElement(b,{onClick:()=>{r.updateSchema("select",(e=>{e.CustomizedItemFC=e=>i.createElement("div",null,"已填充选项：",e.children),e.inputProps.options=[{label:"A",value:1},{label:"B",value:2},{label:"C",value:3},{label:"D",value:4},{label:"E",value:5}]}))}},"填充选项")))),i.createElement(O,null),i.createElement(ce,{leggo:r,form:n,onValuesChange:console.log,onFinish:console.log}),i.createElement(F,{title:"schemaModel",width:"50vw",bodyStyle:{height:"70vh",overflow:"auto"},visible:s,onOk:()=>{const e=JSON.stringify(t,null,4);navigator.clipboard.writeText(e),o(!1)},okText:"复制",onCancel:()=>o(!1)},i.createElement("pre",null,JSON.stringify(t,null,4))))}function ue(){const e=k.exports.useRef({}),[t,a]=k.exports.useState(["configs"]),[l,n]=k.exports.useState(null),[r,s]=k.exports.useState(0),o=k.exports.useMemo((()=>Object.entries(e.current)),[r]);return k.exports.useMemo((()=>{re.registerItemStore(pe)}),[]),i.createElement("div",{className:"App"},i.createElement("div",{className:"header"},i.createElement("div",{className:"slogan"},"Leggo，拖拽式表单生成低代码平台！"),i.createElement(C,{onSelect:({key:e})=>a([e]),defaultSelectedKeys:["configs"],mode:"horizontal"},i.createElement(C.Item,{key:"configs",icon:i.createElement(q,null)},"配置模板"),i.createElement(C.SubMenu,{key:"list",title:"模板列表",disabled:!o.length,icon:i.createElement(R,null)},o.map((([e,t])=>i.createElement(C.Item,{key:e,onClick:()=>n(t)},e)))))),i.createElement("div",{className:"content-area"},"configs"===t[0]?i.createElement(re,{onPostSchemaModel:t=>{const a=t.name;e.current[a]=JSON.parse(JSON.stringify(t)),s((e=>e+1)),console.log("发送schema～～～～～～",t)}}):i.createElement(ie,{schemaModel:l})))}const pe={storeName:"other1",store:{multiCover:{type:"multiCover",configs:{itemProps:{name:"cover_type",label:" 封面图",colon:!0,rules:[{required:!0,message:"请上传封面图！"}]},inputProps:{disabled:!1}},StandardItemFC:({itemProps:e,inputProps:t})=>i.createElement(u.Item,o({},e),i.createElement(de,o({},t)))},carInfos:{type:"carInfos",configs:{itemProps:{name:"carInfos",label:"车系-车型",colon:!0,rules:[{required:!1}]},inputProps:{disabled:!1}},StandardItemFC:({itemProps:e})=>i.createElement(u.Item,o({},e),i.createElement("div",null,"定制化组件"))}}},de=e=>{const{disabled:t,value:a,onChange:l}=e,[n,r]=k.exports.useState((null==a?void 0:a.slice(0,1))||[""]);return i.createElement("div",{className:"multi-cover"},i.createElement(h.Group,{defaultValue:1,onChange:e=>{const t=e.target.value,n=[...(null==a?void 0:a.slice(0,t))||[],"","",""];n.length=t,l(n),r(n)},disabled:t},i.createElement(h,{value:1},"单图"),i.createElement(h,{value:3},"三图")),i.createElement("div",{className:"multi-cover-list"},t&&i.createElement("div",{className:"multi-cover-list-mask"}),n.map(((e,t)=>i.createElement("div",{key:e+t,className:"multi-cover-list-item",onClick:()=>(e=>{console.log(e)})(t)},e&&i.createElement("div",{className:"multi-cover-list-item-mask"},i.createElement("span",null,"替换")),e?i.createElement("img",{src:e,alt:"封面图",width:"100%"}):i.createElement(L,null))))))};D.render(i.createElement(ue,null),document.getElementById("root"));
