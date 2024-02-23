"use strict";(self.webpackChunkstrapi=self.webpackChunkstrapi||[]).push([[4896],{64896:(Xe,re,t)=>{t.d(re,{App:()=>Ze});var e=t(19968),a=t(50648),j=t(49008),le=t(39380),n=t(32192),v=t(62552),Z=t(96612),oe=t(11208),de=t(2931),p=t(63358),ce=t(25824),ge=t(62492),ue=t(3548),F=t(35676),m=t(48936),H=t(55716),pe=t(70544),z=t(48112),Q=t(28464),he=t(65280),_e=t(23264),me=t(14448),N=t(42816),w=t(56104),Ee=t(37976),fe=t(76512),G=t(9752),Me=t(36132),xe=t(28724),je=t(70996),ye=t(6464),De=t(6496),Re=t(5e3),V=t(53804),Oe=t(6912),Y=t(80700),Pe=t(26272),X=t(5540),Ce=t(89940),be=t(71324),Ae=t(24328),k=t(36133),Te=t(15396),Be=t(67636),Ie=t(79848),ve=t(48636),U=t(14632),K=t(5596),q=t(31812),ee=t(52540),ke=t(70516);const Le=ee.kt().shape({name:ee.Qb().trim().required()}).required().noUnknown(),se=({handleClose:s,handleSubmit:d,initialValues:g,isLoading:i=!1})=>{const{formatMessage:r}=(0,U.c)(),{pathname:l}=(0,j.IT)(),E=l===`/plugins/${n.p}`;return(0,e.jsxs)(oe.E,{onClose:s,labelledBy:"title",children:[(0,e.jsx)(de.k,{children:(0,e.jsx)(p.O,{id:"title",fontWeight:"bold",textColor:"neutral800",children:r({id:"content-releases.modal.title",defaultMessage:"{isCreatingRelease, select, true {New release} other {Edit release}}"},{isCreatingRelease:E})})}),(0,e.jsx)(q.QJ,{validateOnChange:!1,onSubmit:d,initialValues:g,validationSchema:Le,children:({values:_,errors:D,handleChange:h})=>(0,e.jsxs)(q.QF,{children:[(0,e.jsx)(ce.a,{children:(0,e.jsx)(ge.g,{label:r({id:"content-releases.modal.form.input.label.release-name",defaultMessage:"Name"}),name:"name",value:_.name,error:D.name,onChange:h,required:!0})}),(0,e.jsx)(ue._,{startActions:(0,e.jsx)(F.Z,{onClick:s,variant:"tertiary",name:"cancel",children:r({id:"cancel",defaultMessage:"Cancel"})}),endActions:(0,e.jsx)(F.Z,{name:"submit",loading:i,disabled:!_.name||_.name===g.name,type:"submit",children:r({id:"content-releases.modal.form.button.submit",defaultMessage:"{isCreatingRelease, select, true {Continue} other {Save}}"},{isCreatingRelease:E})})})]})})]})},We=(0,K.cp)(m.C)`
  align-self: stretch;
  border-bottom-right-radius: ${({theme:s})=>s.borderRadius};
  border-bottom-left-radius: ${({theme:s})=>s.borderRadius};
  border-top: 1px solid ${({theme:s})=>s.colors.neutral150};
`,Ue=(0,K.cp)(m.C)`
  align-self: stretch;
  cursor: ${({disabled:s})=>s?"not-allowed":"pointer"};

  svg path {
    fill: ${({theme:s,disabled:d})=>d&&s.colors.neutral500};
  }
  span {
    color: ${({theme:s,disabled:d})=>d&&s.colors.neutral500};
  }
`,Ke=(0,K.cp)(Ce.c)`
  width: ${({theme:s})=>s.spaces[3]};
  height: ${({theme:s})=>s.spaces[3]};
  path {
    fill: ${({theme:s})=>s.colors.neutral600};
  }
`,Se=(0,K.cp)(be.c)`
  width: ${({theme:s})=>s.spaces[3]};
  height: ${({theme:s})=>s.spaces[3]};
  path {
    fill: ${({theme:s})=>s.colors.danger600};
  }
`,$e=(0,K.cp)(p.O)`
  max-width: 300px;
`,te=({onClick:s,disabled:d,children:g})=>(0,e.jsx)(Ue,{paddingTop:2,paddingBottom:2,paddingLeft:4,paddingRight:4,alignItems:"center",gap:2,as:"button",hasRadius:!0,onClick:s,disabled:d,children:g}),Ne=({action:s,schema:d,components:g,entry:i})=>{const{formatMessage:r}=(0,U.c)(),{validate:l}=(0,Z.MH)(),{errors:E}=l(i,{contentType:d,components:g,isCreatingEntry:!1});if(Object.keys(E).length>0){const _=Object.entries(E).map(([D,h])=>r({id:`${h.id}.withField`,defaultMessage:h.defaultMessage},{field:D})).join(" ");return(0,e.jsxs)(m.C,{gap:2,children:[(0,e.jsx)(H.G,{color:"danger600",as:Ae.c}),(0,e.jsx)(pe.o,{description:_,children:(0,e.jsx)($e,{textColor:"danger600",variant:"omega",fontWeight:"semiBold",ellipsis:!0,children:_})})]})}return s=="publish"?(0,e.jsxs)(m.C,{gap:2,children:[(0,e.jsx)(H.G,{color:"success600",as:k.c}),i.publishedAt?(0,e.jsx)(p.O,{textColor:"success600",fontWeight:"bold",children:r({id:"content-releases.pages.ReleaseDetails.entry-validation.already-published",defaultMessage:"Already published"})}):(0,e.jsx)(p.O,{children:r({id:"content-releases.pages.ReleaseDetails.entry-validation.ready-to-publish",defaultMessage:"Ready to publish"})})]}):(0,e.jsxs)(m.C,{gap:2,children:[(0,e.jsx)(H.G,{color:"success600",as:k.c}),i.publishedAt?(0,e.jsx)(p.O,{children:r({id:"content-releases.pages.ReleaseDetails.entry-validation.ready-to-unpublish",defaultMessage:"Ready to unpublish"})}):(0,e.jsx)(p.O,{textColor:"success600",fontWeight:"bold",children:r({id:"content-releases.pages.ReleaseDetails.entry-validation.already-unpublished",defaultMessage:"Already unpublished"})})]})},ae=({toggleEditReleaseModal:s,toggleWarningSubmit:d,children:g})=>{const{formatMessage:i}=(0,U.c)(),{releaseId:r}=(0,j.W4)(),[l,E]=v.useState(!1),_=v.useRef(null),{data:D,isLoading:h,isError:R,error:f}=(0,n.u)({id:r}),[L,{isLoading:S}]=(0,n.c)(),B=(0,a.eo)(),{formatAPIError:I}=(0,a.An)(),{allowedActions:{canUpdate:O,canDelete:P}}=(0,a.aU)(n.P),$=(0,n.d)(),{trackUsage:x}=(0,a.m4)(),c=D?.data,u=()=>{E(W=>!W)},b=()=>{s(),u()},o=async()=>{const W=await L({id:r});if("data"in W){B({type:"success",message:i({id:"content-releases.pages.ReleaseDetails.publish-notification-success",defaultMessage:"Release was published successfully."})});const{totalEntries:J,totalPublishedEntries:Qe,totalUnpublishedEntries:we}=W.data.meta;x("didPublishRelease",{totalEntries:J,totalPublishedEntries:Qe,totalUnpublishedEntries:we})}else(0,n.i)(W.error)?B({type:"warning",message:I(W.error)}):B({type:"warning",message:i({id:"notification.error",defaultMessage:"An error occurred"})})},M=()=>{d(),u()},A=()=>{$(n.r.util.invalidateTags([{type:"ReleaseAction",id:"LIST"}]))},y=()=>c?.createdBy?c.createdBy.username?c.createdBy.username:c.createdBy.firstname?`${c.createdBy.firstname} ${c.createdBy.lastname||""}`.trim():c.createdBy.email:null;if(h)return(0,e.jsx)(z.G,{"aria-busy":h,children:(0,e.jsx)(a.Wm,{})});if(R||!c)return(0,e.jsx)(j.YJ,{to:{pathname:"/plugins/content-releases",state:{errors:[{code:f?.code}]}}});const C=c.actions.meta.count||0,T=Boolean(y());return(0,e.jsxs)(z.G,{"aria-busy":h,children:[(0,e.jsx)(Q.a,{title:c.name,subtitle:i({id:"content-releases.pages.Details.header-subtitle",defaultMessage:"{number, plural, =0 {No entries} one {# entry} other {# entries}}"},{number:C}),navigationAction:(0,e.jsx)(he.c,{startIcon:(0,e.jsx)(Te.c,{}),to:"/plugins/content-releases",children:i({id:"global.back",defaultMessage:"Back"})}),primaryAction:!c.releasedAt&&(0,e.jsxs)(m.C,{gap:2,children:[(0,e.jsx)(_e.w,{label:i({id:"content-releases.header.actions.open-release-actions",defaultMessage:"Release edit and delete menu"}),ref:_,onClick:u,children:(0,e.jsx)(Be.c,{})}),l&&(0,e.jsxs)(me._k,{source:_,placement:"bottom-end",onDismiss:u,spacing:4,minWidth:"242px",children:[(0,e.jsxs)(m.C,{alignItems:"center",justifyContent:"center",direction:"column",padding:1,children:[(0,e.jsxs)(te,{disabled:!O,onClick:b,children:[(0,e.jsx)(Ke,{}),(0,e.jsx)(p.O,{ellipsis:!0,children:i({id:"content-releases.header.actions.edit",defaultMessage:"Edit"})})]}),(0,e.jsxs)(te,{disabled:!P,onClick:M,children:[(0,e.jsx)(Se,{}),(0,e.jsx)(p.O,{ellipsis:!0,textColor:"danger600",children:i({id:"content-releases.header.actions.delete",defaultMessage:"Delete"})})]})]}),(0,e.jsxs)(We,{direction:"column",justifyContent:"center",alignItems:"flex-start",gap:1,padding:5,children:[(0,e.jsx)(p.O,{variant:"pi",fontWeight:"bold",children:i({id:"content-releases.header.actions.created",defaultMessage:"Created"})}),(0,e.jsxs)(p.O,{variant:"pi",color:"neutral300",children:[(0,e.jsx)(a.od,{timestamp:new Date(c.createdAt)}),i({id:"content-releases.header.actions.created.description",defaultMessage:"{hasCreatedByUser, select, true { by {createdBy}} other { by deleted user}}"},{createdBy:y(),hasCreatedByUser:T})]})]})]}),(0,e.jsx)(F.Z,{size:"S",variant:"tertiary",onClick:A,children:i({id:"content-releases.header.actions.refresh",defaultMessage:"Refresh"})}),(0,e.jsx)(a.Yj,{permissions:n.P.publish,children:(0,e.jsx)(F.Z,{size:"S",variant:"default",onClick:o,loading:S,disabled:c.actions.meta.count===0,children:i({id:"content-releases.header.actions.publish",defaultMessage:"Publish"})})})]})}),g]})},Ge=["contentType","locale","action"],ne=s=>s==="locale"?{id:"content-releases.pages.ReleaseDetails.groupBy.option.locales",defaultMessage:"Locales"}:s==="action"?{id:"content-releases.pages.ReleaseDetails.groupBy.option.actions",defaultMessage:"Actions"}:{id:"content-releases.pages.ReleaseDetails.groupBy.option.content-type",defaultMessage:"Content-Types"},Fe=()=>{const{formatMessage:s}=(0,U.c)(),{releaseId:d}=(0,j.W4)(),[{query:g},i]=(0,a.WK)(),r=(0,a.eo)(),{formatAPIError:l}=(0,a.An)(),{data:E,isLoading:_,isError:D,error:h}=(0,n.u)({id:d}),R=E?.data,f=g?.groupBy||"contentType",{isLoading:L,isFetching:S,isError:B,data:I,error:O}=(0,n.e)({...g,releaseId:d}),[P]=(0,n.f)(),$=async(o,M,A)=>{const y=await P({params:{releaseId:d,actionId:M},body:{type:o.target.value},query:g,actionPath:A});"error"in y&&((0,n.i)(y.error)?r({type:"warning",message:l(y.error)}):r({type:"warning",message:s({id:"notification.error",defaultMessage:"An error occurred"})}))};if(L||_)return(0,e.jsx)(N.S,{children:(0,e.jsx)(a.Wm,{})});const x=I?.data,c=I?.meta,u=c?.contentTypes||{},b=c?.components||{};if(D||!R){const o=[];return h&&o.push({code:h.code}),O&&o.push({code:O.code}),(0,e.jsx)(j.YJ,{to:{pathname:"/plugins/content-releases",state:{errors:o}}})}return B||!x?(0,e.jsx)(N.S,{children:(0,e.jsx)(a.wF,{})}):Object.keys(x).length===0?(0,e.jsx)(N.S,{children:(0,e.jsx)(a.kP,{content:{id:"content-releases.pages.Details.tab.emptyEntries",defaultMessage:"This release is empty. Open the Content Manager, select an entry and add it to the release."},action:(0,e.jsx)(Pe.E,{as:le.cH,to:{pathname:"/content-manager"},style:{textDecoration:"none"},variant:"secondary",children:s({id:"content-releases.page.Details.button.openContentManager",defaultMessage:"Open the Content Manager"})})})}):(0,e.jsx)(N.S,{children:(0,e.jsxs)(m.C,{gap:8,direction:"column",alignItems:"stretch",children:[(0,e.jsx)(m.C,{children:(0,e.jsx)(w.K_,{"aria-label":s({id:"content-releases.pages.ReleaseDetails.groupBy.label",defaultMessage:"Group by"}),customizeContent:o=>s({id:"content-releases.pages.ReleaseDetails.groupBy.label",defaultMessage:"Group by {groupBy}"},{groupBy:o}),value:s(ne(f)),onChange:o=>i({groupBy:o}),children:Ge.map(o=>(0,e.jsx)(w.kH,{value:o,children:s(ne(o))},o))})}),Object.keys(x).map(o=>(0,e.jsxs)(m.C,{gap:4,direction:"column",alignItems:"stretch",children:[(0,e.jsx)(m.C,{children:(0,e.jsx)(Ee.k,{children:o})}),(0,e.jsx)(a.oJ.Root,{rows:x[o].map(M=>({...M,id:Number(M.entry.id)})),colCount:x[o].length,isLoading:L,isFetching:S,children:(0,e.jsxs)(a.oJ.Content,{children:[(0,e.jsxs)(a.oJ.Head,{children:[(0,e.jsx)(a.oJ.HeaderCell,{fieldSchemaType:"string",label:s({id:"content-releases.page.ReleaseDetails.table.header.label.name",defaultMessage:"name"}),name:"name"}),(0,e.jsx)(a.oJ.HeaderCell,{fieldSchemaType:"string",label:s({id:"content-releases.page.ReleaseDetails.table.header.label.locale",defaultMessage:"locale"}),name:"locale"}),(0,e.jsx)(a.oJ.HeaderCell,{fieldSchemaType:"string",label:s({id:"content-releases.page.ReleaseDetails.table.header.label.content-type",defaultMessage:"content-type"}),name:"content-type"}),(0,e.jsx)(a.oJ.HeaderCell,{fieldSchemaType:"string",label:s({id:"content-releases.page.ReleaseDetails.table.header.label.action",defaultMessage:"action"}),name:"action"}),!R.releasedAt&&(0,e.jsx)(a.oJ.HeaderCell,{fieldSchemaType:"string",label:s({id:"content-releases.page.ReleaseDetails.table.header.label.status",defaultMessage:"status"}),name:"status"})]}),(0,e.jsx)(a.oJ.LoadingBody,{}),(0,e.jsx)(a.oJ.Body,{children:x[o].map(({id:M,contentType:A,locale:y,type:C,entry:T},W)=>(0,e.jsxs)(fe.Tr,{children:[(0,e.jsx)(G.Td,{width:"25%",maxWidth:"200px",children:(0,e.jsx)(p.O,{ellipsis:!0,children:`${A.mainFieldValue||T.id}`})}),(0,e.jsx)(G.Td,{width:"10%",children:(0,e.jsx)(p.O,{children:`${y?.name?y.name:"-"}`})}),(0,e.jsx)(G.Td,{width:"10%",children:(0,e.jsx)(p.O,{children:A.displayName||""})}),(0,e.jsx)(G.Td,{width:"20%",children:R.releasedAt?(0,e.jsx)(p.O,{children:s({id:"content-releases.page.ReleaseDetails.table.action-published",defaultMessage:"This entry was <b>{isPublish, select, true {published} other {unpublished}}</b>."},{isPublish:C==="publish",b:J=>(0,e.jsx)(p.O,{fontWeight:"bold",children:J})})}):(0,e.jsx)(n.R,{selected:C,handleChange:J=>$(J,M,[o,W]),name:`release-action-${M}-type`})}),!R.releasedAt&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(G.Td,{width:"20%",minWidth:"200px",children:(0,e.jsx)(Ne,{action:C,schema:u?.[A.uid],components:b,entry:T})}),(0,e.jsx)(G.Td,{children:(0,e.jsx)(m.C,{justifyContent:"flex-end",children:(0,e.jsxs)(n.g.Root,{children:[(0,e.jsx)(n.g.ReleaseActionEntryLinkItem,{contentTypeUid:A.uid,entryId:T.id,locale:y?.code}),(0,e.jsx)(n.g.DeleteReleaseActionItem,{releaseId:R.id,actionId:M})]})})})]})]},M))})]})})]},`releases-group-${o}`)),(0,e.jsxs)(m.C,{paddingTop:4,alignItems:"flex-end",justifyContent:"space-between",children:[(0,e.jsx)(a.A7,{defaultValue:c?.pagination?.pageSize.toString()}),(0,e.jsx)(a.cZ,{pagination:{pageCount:c?.pagination?.pageCount||0}})]})]})})},Je=()=>{const{formatMessage:s}=(0,U.c)(),{releaseId:d}=(0,j.W4)(),g=(0,a.eo)(),{formatAPIError:i}=(0,a.An)(),{push:r}=(0,j.Uz)(),[l,E]=v.useState(!1),[_,D]=v.useState(!1),{isLoading:h,data:R,isSuccess:f}=(0,n.u)({id:d}),[L,{isLoading:S}]=(0,n.a)(),[B,{isLoading:I}]=(0,n.b)(),O=()=>{E(u=>!u)},P=()=>D(u=>!u);if(h)return(0,e.jsx)(ae,{toggleEditReleaseModal:O,toggleWarningSubmit:P,children:(0,e.jsx)(N.S,{children:(0,e.jsx)(a.Wm,{})})});const $=f&&R?.data?.name||"",x=async u=>{const b=await L({id:d,name:u.name});"data"in b?g({type:"success",message:s({id:"content-releases.modal.release-updated-notification-success",defaultMessage:"Release updated."})}):(0,n.i)(b.error)?g({type:"warning",message:i(b.error)}):g({type:"warning",message:s({id:"notification.error",defaultMessage:"An error occurred"})}),O()},c=async()=>{const u=await B({id:d});"data"in u?r("/plugins/content-releases"):(0,n.i)(u.error)?g({type:"warning",message:i(u.error)}):g({type:"warning",message:s({id:"notification.error",defaultMessage:"An error occurred"})})};return(0,e.jsxs)(ae,{toggleEditReleaseModal:O,toggleWarningSubmit:P,children:[(0,e.jsx)(Fe,{}),l&&(0,e.jsx)(se,{handleClose:O,handleSubmit:x,isLoading:h||S,initialValues:{name:$||""}}),(0,e.jsx)(a.cz,{bodyText:{id:"content-releases.dialog.confirmation-message",defaultMessage:"Are you sure you want to delete this release?"},isOpen:_,isConfirmButtonLoading:I,onToggleDialog:P,onConfirm:c})]})},ze=(0,K.cp)(X.c)`
  display: block;
`,ie=({sectionTitle:s,releases:d=[],isError:g=!1})=>{const{formatMessage:i}=(0,U.c)();return g?(0,e.jsx)(a.wF,{}):d?.length===0?(0,e.jsx)(Me.S,{content:i({id:"content-releases.page.Releases.tab.emptyEntries",defaultMessage:"No releases"},{target:s}),icon:(0,e.jsx)(Ie.c,{width:"10rem"})}):(0,e.jsx)(xe.y,{gap:4,children:d.map(({id:r,name:l,actions:E})=>(0,e.jsx)(je.C,{col:3,s:6,xs:12,children:(0,e.jsx)(ze,{href:`content-releases/${r}`,isExternal:!1,children:(0,e.jsxs)(m.C,{direction:"column",justifyContent:"space-between",padding:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",height:"100%",width:"100%",alignItems:"start",gap:2,children:[(0,e.jsx)(p.O,{as:"h3",variant:"delta",fontWeight:"bold",children:l}),(0,e.jsx)(p.O,{variant:"pi",children:i({id:"content-releases.page.Releases.release-item.entries",defaultMessage:"{number, plural, =0 {No entries} one {# entry} other {# entries}}"},{number:E.meta.count})})]})})},r))})},He=(0,K.cp)(ye._)`
  button {
    display: none;
  }
  p + div {
    margin-left: auto;
  }
`,Ve={name:""},Ye=()=>{const s=v.useRef(null),d=(0,j.IT)(),[g,i]=v.useState(!1),r=(0,a.eo)(),{formatMessage:l}=(0,U.c)(),{push:E,replace:_}=(0,j.Uz)(),{formatAPIError:D}=(0,a.An)(),[{query:h},R]=(0,a.WK)(),f=(0,n.h)(h),[L,{isLoading:S}]=(0,n.j)(),{getFeature:B}=(0,Z.wV)(),{maximumReleases:I=3}=B("cms-content-releases"),{trackUsage:O}=(0,a.m4)(),{isLoading:P,isSuccess:$,isError:x}=f,c=f?.currentData?.meta?.activeTab||"pending",u=["pending","done"].indexOf(c);v.useEffect(()=>{d?.state?.errors&&(r({type:"warning",title:l({id:"content-releases.pages.Releases.notification.error.title",defaultMessage:"Your request could not be processed."}),message:l({id:"content-releases.pages.Releases.notification.error.message",defaultMessage:"Please try again or open another release."})}),_({state:null}))},[l,d?.state?.errors,_,r]),v.useEffect(()=>{s.current&&s.current._handlers.setSelectedTabIndex(u)},[u]);const b=()=>{i(C=>!C)};if(P)return(0,e.jsx)(z.G,{"aria-busy":P,children:(0,e.jsx)(a.Wm,{})});const o=$&&f.currentData?.meta?.pagination?.total||0,M=o>=I,A=C=>{R({...h,page:1,pageSize:f?.currentData?.meta?.pagination?.pageSize||16,filters:{releasedAt:{$notNull:C!==0}}})},y=async C=>{const T=await L({name:C.name});"data"in T?(r({type:"success",message:l({id:"content-releases.modal.release-created-notification-success",defaultMessage:"Release created."})}),O("didCreateRelease"),E(`/plugins/content-releases/${T.data.data.id}`)):(0,n.i)(T.error)?r({type:"warning",message:D(T.error)}):r({type:"warning",message:l({id:"notification.error",defaultMessage:"An error occurred"})})};return(0,e.jsxs)(z.G,{"aria-busy":P,children:[(0,e.jsx)(Q.a,{title:l({id:"content-releases.pages.Releases.title",defaultMessage:"Releases"}),subtitle:l({id:"content-releases.pages.Releases.header-subtitle",defaultMessage:"{number, plural, =0 {No releases} one {# release} other {# releases}}"},{number:o}),primaryAction:(0,e.jsx)(a.Yj,{permissions:n.P.create,children:(0,e.jsx)(F.Z,{startIcon:(0,e.jsx)(ve.c,{}),onClick:b,disabled:M,children:l({id:"content-releases.header.actions.add-release",defaultMessage:"New release"})})})}),(0,e.jsx)(N.S,{children:(0,e.jsxs)(e.Fragment,{children:[c==="pending"&&M&&(0,e.jsx)(He,{marginBottom:6,action:(0,e.jsx)(X.c,{href:"https://strapi.io/pricing-cloud",isExternal:!0,children:l({id:"content-releases.pages.Releases.max-limit-reached.action",defaultMessage:"Explore plans"})}),title:l({id:"content-releases.pages.Releases.max-limit-reached.title",defaultMessage:"You have reached the {number} pending {number, plural, one {release} other {releases}} limit."},{number:I}),onClose:()=>{},closeLabel:"",children:l({id:"content-releases.pages.Releases.max-limit-reached.message",defaultMessage:"Upgrade to manage an unlimited number of releases."})}),(0,e.jsxs)(De.M,{label:l({id:"content-releases.pages.Releases.tab-group.label",defaultMessage:"Releases list"}),variant:"simple",initialSelectedTabIndex:u,onTabChange:A,ref:s,children:[(0,e.jsxs)(Re.k,{paddingBottom:8,children:[(0,e.jsxs)(V.k,{children:[(0,e.jsx)(V.s,{children:l({id:"content-releases.pages.Releases.tab.pending",defaultMessage:"Pending"})}),(0,e.jsx)(V.s,{children:l({id:"content-releases.pages.Releases.tab.done",defaultMessage:"Done"})})]}),(0,e.jsx)(Oe.c,{})]}),(0,e.jsxs)(Y.o,{children:[(0,e.jsx)(Y.G,{children:(0,e.jsx)(ie,{sectionTitle:"pending",releases:f?.currentData?.data,isError:x})}),(0,e.jsx)(Y.G,{children:(0,e.jsx)(ie,{sectionTitle:"done",releases:f?.currentData?.data,isError:x})})]})]}),o>0&&(0,e.jsxs)(m.C,{paddingTop:4,alignItems:"flex-end",justifyContent:"space-between",children:[(0,e.jsx)(a.A7,{options:["8","16","32","64"],defaultValue:f?.currentData?.meta?.pagination?.pageSize.toString()}),(0,e.jsx)(a.cZ,{pagination:{pageCount:f?.currentData?.meta?.pagination?.pageCount||0}})]})]})}),g&&(0,e.jsx)(se,{handleClose:b,handleSubmit:y,isLoading:S,initialValues:Ve})]})},Ze=()=>(0,e.jsx)(a.rF,{permissions:n.P.main,children:(0,e.jsxs)(j.Wk,{children:[(0,e.jsx)(j.kX,{exact:!0,path:`/plugins/${n.p}`,component:Ye}),(0,e.jsx)(j.kX,{exact:!0,path:`/plugins/${n.p}/:releaseId`,component:Je})]})})}}]);
