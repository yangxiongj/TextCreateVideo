import{l as P,a as k}from"./url-494494b7.js";/* empty css                  *//* empty css                */import{G as h,H as x,P as g,Q as E,_ as F,r as y,o as i,b as C,f as o,w as t,e as n,F as I,R as B,g as w,c as p,l as S,S as A,T as D,I as U,p as T,k as H}from"./index-a73d6ca3.js";const K={data(){return{form:{baidu_api_key:"",baidu_secret_key:"",fastgpt_appid:"",fastgpt_api_key:"",api2d_forward_key:"",sd_url:""},update:!0,showPass1:!1,showPass2:!1,showPass3:!1,showPass4:!1,showPass5:!1}},mounted(){P(k.config,"get").then(d=>{this.form=d.data.data})},methods:{onSubmit(d){P(k.config,"post",d).then(e=>{h({title:"保存成功",message:x("i",{style:"color: red"},e.data.message),type:"success"}),this.form=e.data.data}).catch(e=>{h({title:"错误",message:e.data.message,type:"error"})})}},components:{Hide:g,View:E}};const a=d=>(T("data-v-6f3adec6"),d=d(),H(),d),N={class:"box"},G={class:"minbox"},Q=a(()=>n("p",null,[n("a",{href:"https://console.bce.baidu.com/ai/#/ai/speech/app/list"},"百度API")],-1)),R=a(()=>n("br",null,null,-1)),Y={class:"minbox"},j=a(()=>n("p",null,[n("a",{href:"https://fastgpt.run/app/list"},"FastGPT配置")],-1)),q=a(()=>n("br",null,null,-1)),z={class:"minbox"},J=a(()=>n("p",null,[n("a",{href:"https://api2d.com/profile"},"API2D")],-1)),L=a(()=>n("br",null,null,-1)),M={class:"minbox"},O=a(()=>n("p",null,"Stable Diffusion",-1)),W=a(()=>n("br",null,null,-1));function X(d,e,Z,$,s,c){const v=y("spen"),r=y("View"),f=y("Hide"),m=S,_=A,u=D,b=U,V=B;return i(),C(I,null,[o(v,null,{default:t(()=>[w("第三方设置")]),_:1}),n("div",N,[o(V,{model:s.form,"label-width":"120px"},{default:t(()=>[n("div",G,[Q,o(u,{label:"API Key"},{default:t(()=>[o(_,{type:s.showPass1?"text":"password",modelValue:s.form.baidu_api_key,"onUpdate:modelValue":e[2]||(e[2]=l=>s.form.baidu_api_key=l),disabled:s.update},{suffix:t(()=>[o(m,{class:"el-input__icon"},{default:t(()=>[s.showPass1?(i(),p(r,{key:0,onClick:e[0]||(e[0]=l=>s.showPass1=!s.showPass1)})):(i(),p(f,{key:1,onClick:e[1]||(e[1]=l=>s.showPass1=!s.showPass1)}))]),_:1})]),_:1},8,["type","modelValue","disabled"])]),_:1}),o(u),o(u,{label:"Secret Key"},{default:t(()=>[o(_,{type:s.showPass2?"text":"password",modelValue:s.form.baidu_secret_key,"onUpdate:modelValue":e[5]||(e[5]=l=>s.form.baidu_secret_key=l),disabled:s.update},{suffix:t(()=>[o(m,{class:"el-input__icon"},{default:t(()=>[s.showPass2?(i(),p(r,{key:0,onClick:e[3]||(e[3]=l=>s.showPass2=!s.showPass2)})):(i(),p(f,{key:1,onClick:e[4]||(e[4]=l=>s.showPass2=!s.showPass2)}))]),_:1})]),_:1},8,["type","modelValue","disabled"])]),_:1})]),R,n("div",Y,[j,o(u,{label:"AppId"},{default:t(()=>[o(_,{type:s.showPass3?"text":"password",modelValue:s.form.fastgpt_appid,"onUpdate:modelValue":e[8]||(e[8]=l=>s.form.fastgpt_appid=l),disabled:s.update},{suffix:t(()=>[o(m,{class:"el-input__icon"},{default:t(()=>[s.showPass3?(i(),p(r,{key:0,onClick:e[6]||(e[6]=l=>s.showPass3=!s.showPass3)})):(i(),p(f,{key:1,onClick:e[7]||(e[7]=l=>s.showPass3=!s.showPass3)}))]),_:1})]),_:1},8,["type","modelValue","disabled"])]),_:1}),o(u,{label:"API KEY"},{default:t(()=>[o(_,{type:s.showPass4?"text":"password",modelValue:s.form.fastgpt_api_key,"onUpdate:modelValue":e[11]||(e[11]=l=>s.form.fastgpt_api_key=l),disabled:s.update},{suffix:t(()=>[o(m,{class:"el-input__icon"},{default:t(()=>[s.showPass4?(i(),p(r,{key:0,onClick:e[9]||(e[9]=l=>s.showPass4=!s.showPass4)})):(i(),p(f,{key:1,onClick:e[10]||(e[10]=l=>s.showPass4=!s.showPass4)}))]),_:1})]),_:1},8,["type","modelValue","disabled"])]),_:1})]),q,n("div",z,[J,o(u,{label:"ForwardKey"},{default:t(()=>[o(_,{type:s.showPass5?"text":"password",modelValue:s.form.api2d_forward_key,"onUpdate:modelValue":e[14]||(e[14]=l=>s.form.api2d_forward_key=l),disabled:s.update},{suffix:t(()=>[o(m,{class:"el-input__icon"},{default:t(()=>[s.showPass5?(i(),p(r,{key:0,onClick:e[12]||(e[12]=l=>s.showPass5=!s.showPass5)})):(i(),p(f,{key:1,onClick:e[13]||(e[13]=l=>s.showPass5=!s.showPass5)}))]),_:1})]),_:1},8,["type","modelValue","disabled"])]),_:1})]),L,n("div",M,[O,n("div",null,[o(u,{label:"启动路径配置"},{default:t(()=>[o(_,{modelValue:s.form.sd_url,"onUpdate:modelValue":e[15]||(e[15]=l=>s.form.sd_url=l),disabled:s.update},{prepend:t(()=>[w("http://")]),append:t(()=>[w("/sdapi/v1/txt2img")]),_:1},8,["modelValue","disabled"])]),_:1})]),o(u)]),W,o(u,null,{default:t(()=>[o(b,{type:"info",class:"my_button",onClick:e[16]||(e[16]=l=>s.update=!1)},{default:t(()=>[w("修改")]),_:1}),o(b,{type:"primary",class:"my_button",onClick:e[17]||(e[17]=l=>c.onSubmit(s.form))},{default:t(()=>[w("保存")]),_:1})]),_:1})]),_:1},8,["model"])])],64)}const ts=F(K,[["render",X],["__scopeId","data-v-6f3adec6"]]);export{ts as default};
