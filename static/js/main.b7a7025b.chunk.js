(this["webpackJsonpreact-search-autocomplete"]=this["webpackJsonpreact-search-autocomplete"]||[]).push([[0],{18:function(e,t,o){},28:function(e,t,o){},30:function(e,t,o){"use strict";o.r(t);o(1);var n=o(10),i=o.n(n),r=(o(18),o(2)),c=o(3),s=(o(28),o.p+"static/media/sickdoodle.d7740801.png"),a=o(0);var l=function(){var e=[{id:0,name:"Cobol"},{id:1,name:"JavaScript"},{id:2,name:"Basic"},{id:3,name:"PHP"},{id:4,name:"Java"}],t=Object(r.a)(new Array(1e4)).map((function(e,t){return{id:t,name:"something".concat(t),description:"Some description text, where the search will be performed too."}})),o=function(e,t){console.log(e,t)},n=function(e){console.log(e)},i=function(e){console.log(e)},l=function(){console.log("Focused")},d=function(){console.log("Cleared")},h=function(e){return console.log(e),Object(a.jsxs)("div",{className:"result-wrapper",children:[Object(a.jsxs)("span",{className:"result-span",children:["id: ",e.id]}),Object(a.jsxs)("span",{className:"result-span",children:["name: ",e.name]})]})};return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("header",{className:"App-header",children:[Object(a.jsxs)("div",{style:{width:200,margin:20},children:[Object(a.jsx)("img",{src:s,alt:"logo",style:{width:"100%",marginBottom:20}}),Object(a.jsx)("div",{style:{marginBottom:20},children:'Try to type "JavaScript"'}),Object(a.jsx)(c.ReactSearchAutocomplete,{items:e,onSearch:o,onHover:n,onSelect:i,onFocus:l,onClear:d,styling:{zIndex:4},autoFocus:!0}),Object(a.jsx)("div",{style:{marginTop:20},children:"This text will be covered!"})]}),Object(a.jsxs)("div",{style:{width:200,margin:20},children:[Object(a.jsx)("h2",{children:"10000 items!"}),Object(a.jsx)("div",{style:{marginBottom:20},children:"Try to type a number"}),Object(a.jsx)(c.ReactSearchAutocomplete,{items:t,maxResults:15,onSearch:o,onHover:n,onSelect:i,onFocus:l,onClear:d,fuseOptions:{keys:["name","description"]},styling:{zIndex:3}}),Object(a.jsx)("div",{style:{marginTop:20},children:"This text will be covered!"})]}),Object(a.jsxs)("div",{style:{width:200,margin:20},children:[Object(a.jsx)("h2",{children:"My custom searchbox!"}),Object(a.jsx)("div",{style:{marginBottom:20},children:'Try to type "Titanic"'}),Object(a.jsx)(c.ReactSearchAutocomplete,{items:[{id:0,title:"Titanic",description:"A movie about love"},{id:1,title:"Dead Poets Society",description:"A movie about poetry and the meaning of life"},{id:2,title:"Terminator 2",description:"A robot from the future is sent back in time"},{id:3,title:"Alien 2",description:"Ripley is back for a new adventure"}],fuseOptions:{keys:["title","description"]},resultStringKeyName:"title",onSearch:o,onHover:n,onSelect:i,onFocus:l,onClear:d,showIcon:!1,styling:{height:"34px",border:"1px solid darkgreen",borderRadius:"4px",backgroundColor:"white",boxShadow:"none",hoverBackgroundColor:"lightgreen",color:"darkgreen",fontSize:"12px",fontFamily:"Courier",iconColor:"green",lineColor:"lightgreen",placeholderColor:"darkgreen",clearIconMargin:"3px 8px 0 0",zIndex:2}}),Object(a.jsx)("div",{style:{marginTop:20},children:"This text will be covered!"})]}),Object(a.jsxs)("div",{style:{width:300,margin:20},children:[Object(a.jsx)("h2",{children:"With formatted results!"}),Object(a.jsx)("div",{style:{marginBottom:20},children:'Try to type "JavaScript"'}),Object(a.jsx)(c.ReactSearchAutocomplete,{items:e,onSearch:o,onHover:n,onSelect:i,onFocus:l,onClear:d,styling:{zIndex:1},formatResult:h,autoFocus:!0}),Object(a.jsx)("div",{style:{marginTop:20},children:"This text will be covered!"})]}),Object(a.jsxs)("div",{style:{width:300,margin:20},children:[Object(a.jsx)("h2",{children:"With a custom CSS class!"}),Object(a.jsx)("div",{style:{marginBottom:20},children:'Try to type "JavaScript"'}),Object(a.jsx)(c.ReactSearchAutocomplete,{items:e,onSearch:o,onHover:n,onSelect:i,onFocus:l,onClear:d,styling:{zIndex:1},formatResult:h,className:"search",autoFocus:!0}),Object(a.jsx)("div",{style:{marginTop:20},children:"This text will be covered!"}),Object(a.jsx)("pre",{style:{textAlign:"left"},children:"\n// to target the search icon\n.search .wrapper:first-child svg {\n  border: 4px solid blue !important;\n}\n\n// to target the input element\n.search .wrapper:first-child input {\n  border: 4px solid red !important;\n}\n\n// to target the wrapper element\n.search .wrapper:first-child {\n  border: 4px solid orange;\n}\n            "})]})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(a.jsx)(l,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.b7a7025b.chunk.js.map