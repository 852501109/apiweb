import{d as g,r as n,aV as b,aY as C,k as I,i as e,w as t,b as a,j as V,e as d,f as c,m as B,c as Y,h as i,u as s,B as H,_ as N}from"./index-Zjjfkekr.js";import{R as o}from"./index-BmD-sjfu.js";const O={class:"card-header"},j={style:{display:"inline-flex","align-items":"center"}},z={class:"mt-2"},M=g({name:"Statistic",__name:"statistic",setup(R){const m=n(Date.now()+252e5),u=n(Date.now()+1e3*60*60*24*2),_=n(b().add(1,"month").startOf("month")),r=n(0),p=C(r,{duration:1500});r.value=36e3;function v(){u.value=Date.now()+1e3*60*60*24*2}return(S,T)=>{const f=a("el-link"),h=a("el-statistic"),l=a("el-countdown"),w=a("el-button"),x=a("IconifyIconOnline"),y=a("el-row"),D=a("el-card"),k=V("tippy");return d(),I("div",null,[e(D,{shadow:"never"},{header:t(()=>[c("div",O,[B((d(),Y(f,{href:"https://element-plus.org/zh-CN/component/statistic.html",target:"_blank",style:{"font-size":"16px","font-weight":"800"}},{default:t(()=>[i(" 统计组件 ")]),_:1})),[[k,{content:"点击查看详细文档"}]])])]),default:t(()=>[e(y,{gutter:24},{default:t(()=>[e(s(o),{value:6,xs:24,sm:24},{default:t(()=>[e(h,{title:"需求人数",value:s(p)},null,8,["value"])]),_:1}),e(s(o),{value:6,xs:24,sm:24},{default:t(()=>[e(l,{title:"距离答疑结束还剩",value:m.value},null,8,["value"])]),_:1}),e(s(o),{value:6,xs:24,sm:24},{default:t(()=>[e(l,{title:"VIP到期时间还剩",format:"HH:mm:ss",value:u.value},null,8,["value"]),e(w,{class:"mt-2",type:"primary",text:"",bg:"",onClick:v},{default:t(()=>[i(" 重置 ")]),_:1})]),_:1}),e(s(o),{value:6,xs:24,sm:24},{default:t(()=>[e(l,{format:"DD天 HH时 mm分 ss秒",value:_.value},{title:t(()=>[c("div",j,[e(x,{icon:"ep:calendar",class:"mr-2"}),i(" 距离下个月还剩 ")])]),_:1},8,["value"]),c("div",z,H(_.value.format("YYYY-MM-DD")),1)]),_:1})]),_:1})]),_:1})])}}}),q=N(M,[["__scopeId","data-v-873b3dc3"]]);export{q as default};
