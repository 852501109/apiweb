import{e as t,k as d,f as o,d as B,V as g,b as s,i as c,w as n,E as w,c as l,u as i,C as r,h as _,B as m,_ as I}from"./index-Zjjfkekr.js";import{d as S}from"./more-2-fill-iTOisMwj.js";const A={width:"1em",height:"1em",fill:"none",class:"t-icon t-icon-shop",viewBox:"0 0 16 16"},N=o("path",{fill:"currentColor",d:"M8 1a2.5 2.5 0 0 0-2.5 2.5V5h-2a.5.5 0 0 0-.5.5v9c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-2V3.5A2.5 2.5 0 0 0 8 1m1.5 5v2h1V6H12v8H4V6h1.5v2h1V6zm0-1h-3V3.5a1.5 1.5 0 1 1 3 0z"},null,-1),O=[N];function j(e,a){return t(),d("svg",A,[...O])}const D={render:j},E={width:"1em",height:"1em",fill:"none",class:"t-icon t-icon-laptop",viewBox:"0 0 16 16"},L=o("path",{fill:"currentColor",d:"M2.5 12a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1zm0-1h11V4h-11zM15 13H1v1h14z"},null,-1),R=[L];function T(e,a){return t(),d("svg",E,[...R])}const q={render:T},F={width:"1em",height:"1em",fill:"none",class:"t-icon t-icon-service",viewBox:"0 0 16 16"},G=o("path",{fill:"currentColor",d:"M2.52 6.37a5.5 5.5 0 0 1 10.98.13v4c0 .05 0 .1-.02.15A4.5 4.5 0 0 1 9 14.7H8v-1h1a3.5 3.5 0 0 0 3.4-2.7h-1.9a.5.5 0 0 1-.5-.5v-4c0-.28.22-.5.5-.5h1.93a4.5 4.5 0 0 0-8.86 0H5.5c.28 0 .5.22.5.5v4a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5v-4c0-.04 0-.09.02-.13M12.5 7H11v3h1.5zm-9 0v3H5V7z"},null,-1),J=[G];function K(e,a){return t(),d("svg",F,[...J])}const P={render:K},Q={width:"1em",height:"1em",fill:"none",class:"t-icon t-icon-calendar",viewBox:"0 0 16 16"},U=o("path",{fill:"currentColor",d:"M10 3H6V1.5H5V3H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-2V1.5h-1zM5 5h1V4h4v1h1V4h2v2H3V4h2zM3 7h10v6H3z"},null,-1),W=[U];function X(e,a){return t(),d("svg",Q,[...W])}const Y={render:X},Z={width:"1em",height:"1em",fill:"none",class:"t-icon t-icon-user-avatar",viewBox:"0 0 16 16"},ee=o("path",{fill:"currentColor",d:"M8 10.5c1.24 0 2.42.31 3.5.88v1.12h1v-1.14a.94.94 0 0 0-.49-.84 8.48 8.48 0 0 0-8.02 0 .94.94 0 0 0-.49.84v1.14h1v-1.12A7.5 7.5 0 0 1 8 10.5M10.5 6a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-1 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"},null,-1),te=o("path",{fill:"currentColor",d:"M2.5 1.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1zm11 1v11h-11v-11z"},null,-1),oe=[ee,te];function ce(e,a){return t(),d("svg",Z,[...oe])}const ne={render:ce},ae={class:"list-card-item_detail bg-bg_color"},se={class:"list-card-item_detail--operation"},ie={class:"list-card-item_detail--name text-text_color_primary"},de={class:"list-card-item_detail--desc text-text_color_regular"},le=B({name:"ReCard",__name:"Card",props:{product:{type:Object}},emits:["manage-product","delete-item"],setup(e,{emit:a}){const p=e,v=a,x=h=>{v("manage-product",h)},$=h=>{v("delete-item",h)},C=g(()=>["list-card-item",{"list-card-item__disabled":!p.product.isSetup}]),V=g(()=>["list-card-item_detail--logo",{"list-card-item_detail--logo__disabled":!p.product.isSetup}]);return(h,u)=>{const y=s("el-tag"),k=s("IconifyIconOffline"),f=s("el-dropdown-item"),z=s("el-dropdown-menu"),H=s("el-dropdown"),M=s("el-row");return t(),d("div",{class:w(C.value)},[o("div",ae,[c(M,{justify:"space-between"},{default:n(()=>[o("div",{class:w(V.value)},[e.product.type===1?(t(),l(i(D),{key:0})):r("",!0),e.product.type===2?(t(),l(i(Y),{key:1})):r("",!0),e.product.type===3?(t(),l(i(P),{key:2})):r("",!0),e.product.type===4?(t(),l(i(ne),{key:3})):r("",!0),e.product.type===5?(t(),l(i(q),{key:4})):r("",!0)],2),o("div",se,[c(y,{color:e.product.isSetup?"#00a870":"#eee",effect:"dark",class:"mx-1 list-card-item_detail--operation--tag"},{default:n(()=>[_(m(e.product.isSetup?"已启用":"已停用"),1)]),_:1},8,["color"]),c(H,{trigger:"click",disabled:!e.product.isSetup},{dropdown:n(()=>[c(z,{disabled:!e.product.isSetup},{default:n(()=>[c(f,{onClick:u[0]||(u[0]=b=>x(e.product))},{default:n(()=>[_(" 管理 ")]),_:1}),c(f,{onClick:u[1]||(u[1]=b=>$(e.product))},{default:n(()=>[_(" 删除 ")]),_:1})]),_:1},8,["disabled"])]),default:n(()=>[c(k,{icon:i(S),class:"text-[24px]"},null,8,["icon"])]),_:1},8,["disabled"])])]),_:1}),o("p",ie,m(e.product.name),1),o("p",de,m(e.product.description),1)])],2)}}}),ue=I(le,[["__scopeId","data-v-aa9a6877"]]);export{ue as default};
