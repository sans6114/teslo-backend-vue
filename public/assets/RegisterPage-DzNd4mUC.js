import{d as _,u as w,e as h,f as v,g as n,c as x,a as o,w as r,v as u,h as y,b as g,i as k,F as V,r as E,o as F,j as N}from"./index-Cbbmqg7h.js";const P=o("h1",{class:"text-2xl font-semibold mb-4"},"Nueva cuenta",-1),C={class:"mb-4"},R=o("label",{for:"name",class:"block text-gray-600"},"Nombre",-1),S={class:"mb-4"},T=o("label",{for:"email",class:"block text-gray-600"},"Email",-1),U={class:"mb-4"},B=o("label",{for:"password",class:"block text-gray-600"},"Contraseña",-1),L=o("div",{class:"mb-6 text-blue-500"},[o("a",{href:"#",class:"hover:underline"},"¿Olvidaste tu contraseña?")],-1),M=o("button",{type:"submit",class:"bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"}," Ingresar ",-1),O={class:"mt-6 text-blue-500 text-center"},A=_({__name:"RegisterPage",setup(j){const f=w(),i=h(),e=v({fullname:"",email:"",password:""}),l=n(null),d=n(null),c=n(null),p=async()=>{var t,a,s,m;if(e.fullname.length<3)return(t=l.value)==null?void 0:t.focus();if(e.email==="")return(a=d.value)==null?void 0:a.focus();if(e.password.length<6)return(s=c.value)==null?void 0:s.focus();await f.register(e.fullname,e.email,e.password)?(i.success("Usario creado correctamente"),e.email,e.fullname="",e.email="",e.password=""):(i.error("Petición no aceptada"),e.fullname="",e.email="",e.password="",(m=l.value)==null||m.focus())};return(b,t)=>{const a=E("RouterLink");return F(),x(V,null,[P,o("form",{onSubmit:y(p,["prevent"]),action:"#",method:"POST"},[o("div",C,[R,r(o("input",{ref_key:"inputFullname",ref:l,"onUpdate:modelValue":t[0]||(t[0]=s=>e.fullname=s),type:"text",id:"name",name:"name",class:"w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",autocomplete:"off"},null,512),[[u,e.fullname]])]),o("div",S,[T,r(o("input",{ref_key:"inputEmail",ref:d,"onUpdate:modelValue":t[1]||(t[1]=s=>e.email=s),type:"email",id:"email",name:"email",class:"w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",autocomplete:"off"},null,512),[[u,e.email]])]),o("div",U,[B,r(o("input",{ref_key:"inputPassword",ref:c,"onUpdate:modelValue":t[2]||(t[2]=s=>e.password=s),type:"password",id:"password",name:"password",class:"w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500",autocomplete:"off"},null,512),[[u,e.password]])]),L,M],32),o("div",O,[g(a,{to:{name:"login"},class:"hover:underline"},{default:k(()=>[N("Entrá a tu cuenta aqui")]),_:1})])],64)}}});export{A as default};