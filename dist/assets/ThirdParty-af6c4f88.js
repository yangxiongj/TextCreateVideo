import{l as c,a as C}from"./url-2799ff3c.js";/* empty css                *//* empty css                  *//* empty css                 */import"./el-form-item-4ed993c7.js";/* empty css                */import{G as P,H as A,Z as v,$ as g,_ as x,r as w,o as d,b as D,f as o,w as u,e as t,F as B,Q as I,g as F,c as a,l as U,O as S,P as H,R as K,S as N,I as T,p as G,k as O}from"./index-d300417d.js";const Q={data(){return{form:{baidu_api_key:"",baidu_secret_key:"",fastgpt_appid:"",fastgpt_api_key:"",api2d_forward_key:"",sd_url:"",baidu_config:{video_type:"",spd:5,pit:5,vol:5,per:5003}},update:!0,showPass1:!1,showPass2:!1,showPass3:!1,showPass4:!1,showPass5:!1}},mounted(){c(C.config,"get").then(_=>{this.form=_.data.data})},methods:{onSubmit(_){c(C.config,"post",_).then(s=>{P({title:"保存成功",message:A("i",{style:"color: red"},s.data.message),type:"success"}),this.form=s.data.data}).catch(s=>{P({title:"错误",message:s.data.message,type:"error"})})}},components:{Hide:v,View:g}};const i=_=>(G("data-v-977af771"),_=_(),O(),_),R={class:"box"},Y={class:"minbox"},Z=i(()=>t("p",null,[t("a",{href:"https://console.bce.baidu.com/ai/#/ai/speech/app/list"},"百度API")],-1)),j=i(()=>t("p",null,"取值0-15，默认为5中语速",-1)),q=i(()=>t("p",null,"取值0-15，默认为5中语调",-1)),z=i(()=>t("p",null,"基础音库取值0-9，精品音库取值0-15，默认为5中音量（取值为0时为音量最小值，并非为无声）",-1)),J=i(()=>t("p",null,"(基础音库) 度小宇=1，度小美=0，度逍遥=3，度丫丫=4",-1)),L=i(()=>t("p",null,"(精品音库) 度逍遥=5003，度小鹿=5118，度博文=106，度小童=110，度小萌=111，度米朵=103，度小娇=5",-1)),M=i(()=>t("br",null,null,-1)),W={class:"minbox"},X=i(()=>t("p",null,[t("a",{href:"https://fastgpt.run/app/list"},"FastGPT配置")],-1)),$=i(()=>t("br",null,null,-1)),ee={class:"minbox"},se=i(()=>t("p",null,[t("a",{href:"https://api2d.com/profile"},"API2D")],-1)),oe=i(()=>t("br",null,null,-1)),ue={class:"minbox"},le=i(()=>t("p",null,"Stable Diffusion",-1)),te=i(()=>t("br",null,null,-1));function ne(_,s,ie,de,e,k){const h=w("spen"),f=w("View"),m=w("Hide"),r=U,p=S,n=H,b=K,E=N,y=T,V=I;return d(),D(B,null,[o(h,null,{default:u(()=>[F("第三方设置")]),_:1}),t("div",R,[o(V,{model:e.form,"label-width":"120px"},{default:u(()=>[t("div",Y,[Z,o(n,{label:"API Key"},{default:u(()=>[o(p,{type:e.showPass1?"text":"password",modelValue:e.form.baidu_api_key,"onUpdate:modelValue":s[2]||(s[2]=l=>e.form.baidu_api_key=l),disabled:e.update},{suffix:u(()=>[o(r,{class:"el-input__icon"},{default:u(()=>[e.showPass1?(d(),a(f,{key:0,onClick:s[0]||(s[0]=l=>e.showPass1=!e.showPass1)})):(d(),a(m,{key:1,onClick:s[1]||(s[1]=l=>e.showPass1=!e.showPass1)}))]),_:1})]),_:1},8,["type","modelValue","disabled"])]),_:1}),o(n),o(n,{label:"Secret Key"},{default:u(()=>[o(p,{type:e.showPass2?"text":"password",modelValue:e.form.baidu_secret_key,"onUpdate:modelValue":s[5]||(s[5]=l=>e.form.baidu_secret_key=l),disabled:e.update},{suffix:u(()=>[o(r,{class:"el-input__icon"},{default:u(()=>[e.showPass2?(d(),a(f,{key:0,onClick:s[3]||(s[3]=l=>e.showPass2=!e.showPass2)})):(d(),a(m,{key:1,onClick:s[4]||(s[4]=l=>e.showPass2=!e.showPass2)}))]),_:1})]),_:1},8,["type","modelValue","disabled"])]),_:1}),o(E,{fill:""},{default:u(()=>[o(b,{type:"success","show-icon":"",closable:!1},{default:u(()=>[j]),_:1}),o(n,{label:"语速"},{default:u(()=>[o(p,{modelValue:e.form.baidu_config.spd,"onUpdate:modelValue":s[6]||(s[6]=l=>e.form.baidu_config.spd=l),disabled:e.update,type:"number"},null,8,["modelValue","disabled"])]),_:1})]),_:1}),o(E,{fill:""},{default:u(()=>[o(b,{type:"success","show-icon":"",closable:!1},{default:u(()=>[q]),_:1}),o(n,{label:"音调"},{default:u(()=>[o(p,{modelValue:e.form.baidu_config.pit,"onUpdate:modelValue":s[7]||(s[7]=l=>e.form.baidu_config.pit=l),disabled:e.update,type:"number"},null,8,["modelValue","disabled"])]),_:1})]),_:1}),o(E,{fill:""},{default:u(()=>[o(b,{type:"success","show-icon":"",closable:!1},{default:u(()=>[z]),_:1}),o(n,{label:"音量"},{default:u(()=>[o(p,{modelValue:e.form.baidu_config.vol,"onUpdate:modelValue":s[8]||(s[8]=l=>e.form.baidu_config.vol=l),disabled:e.update,type:"number"},null,8,["modelValue","disabled"])]),_:1})]),_:1}),o(E,{fill:""},{default:u(()=>[o(b,{type:"success","show-icon":"",closable:!1},{default:u(()=>[J]),_:1}),o(b,{type:"success","show-icon":"",closable:!1},{default:u(()=>[L]),_:1}),o(n,{label:"音库"},{default:u(()=>[o(p,{modelValue:e.form.baidu_config.per,"onUpdate:modelValue":s[9]||(s[9]=l=>e.form.baidu_config.per=l),disabled:e.update,type:"number"},null,8,["modelValue","disabled"])]),_:1})]),_:1})]),M,t("div",W,[X,o(n,{label:"AppId"},{default:u(()=>[o(p,{type:e.showPass3?"text":"password",modelValue:e.form.fastgpt_appid,"onUpdate:modelValue":s[12]||(s[12]=l=>e.form.fastgpt_appid=l),disabled:e.update},{suffix:u(()=>[o(r,{class:"el-input__icon"},{default:u(()=>[e.showPass3?(d(),a(f,{key:0,onClick:s[10]||(s[10]=l=>e.showPass3=!e.showPass3)})):(d(),a(m,{key:1,onClick:s[11]||(s[11]=l=>e.showPass3=!e.showPass3)}))]),_:1})]),_:1},8,["type","modelValue","disabled"])]),_:1}),o(n,{label:"API KEY"},{default:u(()=>[o(p,{type:e.showPass4?"text":"password",modelValue:e.form.fastgpt_api_key,"onUpdate:modelValue":s[15]||(s[15]=l=>e.form.fastgpt_api_key=l),disabled:e.update},{suffix:u(()=>[o(r,{class:"el-input__icon"},{default:u(()=>[e.showPass4?(d(),a(f,{key:0,onClick:s[13]||(s[13]=l=>e.showPass4=!e.showPass4)})):(d(),a(m,{key:1,onClick:s[14]||(s[14]=l=>e.showPass4=!e.showPass4)}))]),_:1})]),_:1},8,["type","modelValue","disabled"])]),_:1})]),$,t("div",ee,[se,o(n,{label:"ForwardKey"},{default:u(()=>[o(p,{type:e.showPass5?"text":"password",modelValue:e.form.api2d_forward_key,"onUpdate:modelValue":s[18]||(s[18]=l=>e.form.api2d_forward_key=l),disabled:e.update},{suffix:u(()=>[o(r,{class:"el-input__icon"},{default:u(()=>[e.showPass5?(d(),a(f,{key:0,onClick:s[16]||(s[16]=l=>e.showPass5=!e.showPass5)})):(d(),a(m,{key:1,onClick:s[17]||(s[17]=l=>e.showPass5=!e.showPass5)}))]),_:1})]),_:1},8,["type","modelValue","disabled"])]),_:1})]),oe,t("div",ue,[le,t("div",null,[o(n,{label:"启动路径配置"},{default:u(()=>[o(p,{modelValue:e.form.sd_url,"onUpdate:modelValue":s[19]||(s[19]=l=>e.form.sd_url=l),disabled:e.update},{prepend:u(()=>[F("http://")]),append:u(()=>[F("/sdapi/v1/txt2img")]),_:1},8,["modelValue","disabled"])]),_:1})]),o(n)]),te,o(n,null,{default:u(()=>[o(y,{type:"info",class:"my_button",onClick:s[20]||(s[20]=l=>e.update=!1)},{default:u(()=>[F("修改")]),_:1}),o(y,{type:"primary",class:"my_button",onClick:s[21]||(s[21]=l=>k.onSubmit(e.form))},{default:u(()=>[F("保存")]),_:1})]),_:1})]),_:1},8,["model"])])],64)}const Fe=x(Q,[["render",ne],["__scopeId","data-v-977af771"]]);export{Fe as default};
