"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[3900],{73900:(V,c,s)=>{s.r(c),s.d(c,{SettingsPage:()=>M,default:()=>b});var e=s(19968),O=s(62552),u=s(48112),h=s(28464),P=s(35676),C=s(42816),v=s(20596),r=s(48936),A=s(5e3),L=s(63358),T=s(28724),_=s(70996),g=s(28216),o=s(50648),y=s(53305),I=s(13192),x=s(21424),R=s(14632),D=s(48632),i=s(78872),Y=s(9568),$=s(12132),U=s(29088),W=s(35184),k=s(31812),w=s(52540),q=s(40980),ss=s(3396),es=s(79804);const B=t=>t,K={initialData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1},modifiedData:{responsiveDimensions:!0,sizeOptimization:!0,autoOrientation:!1,videoPreview:!1}},j=(t,n)=>(0,U.cp)(t,l=>{switch(n.type){case"GET_DATA_SUCCEEDED":{l.initialData=n.data,l.modifiedData=n.data;break}case"ON_CHANGE":{W(l,["modifiedData",...n.keys.split(".")],n.value);break}default:return t}}),M=()=>{const{formatMessage:t}=(0,R.c)(),{lockApp:n,unlockApp:l}=(0,o.H6)(),z=(0,o.eo)(),{get:S,put:G}=(0,o.Qn)();(0,o.G0)();const[{initialData:N,modifiedData:d},f]=(0,O.useReducer)(j,K,B),{data:E,isLoading:F,refetch:H}=(0,D.useQuery)({queryKey:["upload","settings"],async queryFn(){const{data:{data:a}}=await S("/upload/settings");return a}});O.useEffect(()=>{E&&f({type:"GET_DATA_SUCCEEDED",data:E})},[E]);const p=I(N,d),{mutateAsync:Q,isLoading:X}=(0,D.useMutation)({async mutationFn(a){return G("/upload/settings",a)},onSuccess(){H(),z({type:"success",message:{id:"notification.form.success.fields"}})},onError(a){console.error(a)}}),Z=async a=>{a.preventDefault(),!p&&(n(),await Q(d),l())},m=({target:{name:a,value:J}})=>{f({type:"ON_CHANGE",keys:a,value:J})};return(0,e.jsxs)(u.G,{tabIndex:-1,children:[(0,e.jsx)(x.S,{title:t({id:(0,i.g)("page.title"),defaultMessage:"Settings - Media Libray"})}),(0,e.jsxs)("form",{onSubmit:Z,children:[(0,e.jsx)(h.a,{title:t({id:(0,i.g)("settings.header.label"),defaultMessage:"Media Library"}),primaryAction:(0,e.jsx)(P.Z,{disabled:p,loading:X,type:"submit",startIcon:(0,e.jsx)(y.c,{}),size:"S",children:t({id:"global.save",defaultMessage:"Save"})}),subtitle:t({id:(0,i.g)("settings.sub-header.label"),defaultMessage:"Configure the settings for the Media Library"})}),(0,e.jsx)(C.S,{children:F?(0,e.jsx)(o.Wm,{}):(0,e.jsx)(v._,{children:(0,e.jsx)(r.C,{direction:"column",alignItems:"stretch",gap:12,children:(0,e.jsx)(A.k,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,e.jsxs)(r.C,{direction:"column",alignItems:"stretch",gap:4,children:[(0,e.jsx)(r.C,{children:(0,e.jsx)(L.O,{variant:"delta",as:"h2",children:t({id:(0,i.g)("settings.blockTitle"),defaultMessage:"Asset management"})})}),(0,e.jsxs)(T.y,{gap:6,children:[(0,e.jsx)(_.C,{col:6,s:12,children:(0,e.jsx)(g.a,{"aria-label":"responsiveDimensions",checked:d.responsiveDimensions,hint:t({id:(0,i.g)("settings.form.responsiveDimensions.description"),defaultMessage:"Enabling this option will generate multiple formats (small, medium and large) of the uploaded asset."}),label:t({id:(0,i.g)("settings.form.responsiveDimensions.label"),defaultMessage:"Responsive friendly upload"}),name:"responsiveDimensions",offLabel:t({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:t({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:a=>{m({target:{name:"responsiveDimensions",value:a.target.checked}})}})}),(0,e.jsx)(_.C,{col:6,s:12,children:(0,e.jsx)(g.a,{"aria-label":"sizeOptimization",checked:d.sizeOptimization,hint:t({id:(0,i.g)("settings.form.sizeOptimization.description"),defaultMessage:"Enabling this option will reduce the image size and slightly reduce its quality."}),label:t({id:(0,i.g)("settings.form.sizeOptimization.label"),defaultMessage:"Size optimization"}),name:"sizeOptimization",offLabel:t({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:t({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:a=>{m({target:{name:"sizeOptimization",value:a.target.checked}})}})}),(0,e.jsx)(_.C,{col:6,s:12,children:(0,e.jsx)(g.a,{"aria-label":"autoOrientation",checked:d.autoOrientation,hint:t({id:(0,i.g)("settings.form.autoOrientation.description"),defaultMessage:"Enabling this option will automatically rotate the image according to EXIF orientation tag."}),label:t({id:(0,i.g)("settings.form.autoOrientation.label"),defaultMessage:"Auto orientation"}),name:"autoOrientation",offLabel:t({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:t({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:a=>{m({target:{name:"autoOrientation",value:a.target.checked}})}})})]})]})})})})})]})]})},b=()=>(0,e.jsx)(o.rF,{permissions:i.P.settings,children:(0,e.jsx)(M,{})})}}]);