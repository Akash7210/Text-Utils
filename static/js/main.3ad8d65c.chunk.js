(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,a,t){},13:function(e,a,t){},14:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(2),c=t.n(r);t(12),t(13);function o(e){return n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("a",{className:"navbar-brand",href:" /"},"Text Utils"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarScroll","aria-controls":"navbarScroll","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarScroll"},n.a.createElement("ul",{className:"navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/"},"Home"))),n.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},n.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable Dark Mode"))))))}function s(e){const[a,t]=Object(l.useState)("");return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},n.a.createElement("h1",{className:"mb-2"},e.heading),n.a.createElement("div",{className:"mb-3"},n.a.createElement("textarea",{className:"form-control",value:a,onChange:e=>{console.log("Onchange  was clicked "),t(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#cac4c5":"white",color:"dark"===e.mode?"white":"black"},id:"exampleFormControlTextarea1",rows:"8"})),n.a.createElement("button",{disabled:0===a.length,className:"btn btn-primary mx-1 my-1",onClick:()=>{console.log("Uppercase was clicked ");let l=a.toUpperCase();t(l),e.showAlert("Converted to Uppercase","success")}},"Convert to upper case "),n.a.createElement("button",{disabled:0===a.length,className:"btn btn-primary mx-1 my-1",onClick:()=>{let l=a.toLowerCase();t(l),e.showAlert("Converted to Lowercase","success")}},"Convert to Lowercase "),n.a.createElement("button",{disabled:0===a.length,className:"btn btn-primary mx-1 my-1",onClick:()=>{var a=document.getElementById("exampleFormControlTextarea1");a.select(),navigator.clipboard.writeText(a.value),document.getSelection().removeAllRanges(),e.showAlert("Text copied Successfully","success")}},"Copy ")),n.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"}},n.a.createElement("h1",null,"Your text Summary"),n.a.createElement("p",null,a.split(" ").filter(e=>0!==e.length).length," words and",a.length," characters"),n.a.createElement("p",null,.008*a.split(" ").filter(e=>0!==e.length).length," Minitus to Read"),n.a.createElement("h2",null,"Preview"),n.a.createElement("p",null,a.length>0?a:"Nothing to Preview")))}function m(e){return n.a.createElement("div",{style:{height:"50px"}},e.alert&&n.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},n.a.createElement("strong",null,e.alert.type),": ",e.alert.msg))}var i=function(){const[e,a]=Object(l.useState)("light"),[t,r]=Object(l.useState)(null),c=(e,a)=>{r({msg:e,type:a}),setTimeout(()=>{r(null)},2e3)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(o,{mode:e,toggleMode:()=>{"light"===e?(a("dark"),document.body.style.backgroundColor="grey",c("Dark Mode has been Enabled","success")):(a("light"),document.body.style.backgroundColor="white",c("Light Mode has been Enabled","success"))}}),n.a.createElement(m,{alert:t}),n.a.createElement(s,{showAlert:c,heading:"Try TextUtils- Word Counter,Character Counter",mode:e}),n.a.createElement("div",{className:"container my-3"}))};var d=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,15)).then(a=>{let{getCLS:t,getFID:l,getFCP:n,getLCP:r,getTTFB:c}=a;t(e),l(e),n(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(i,null))),d()},3:function(e,a,t){e.exports=t(14)}},[[3,1,2]]]);
//# sourceMappingURL=main.3ad8d65c.chunk.js.map