(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{20:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var o=t(1),c=t.n(o),r=t(15),u=t.n(r),a=(t(20),t(6)),i=t(3),s=t(0),l=function(e){var n=e.person,t=e.deletePhoneBookEntry;return Object(s.jsxs)("div",{children:[n.name," ",n.number,Object(s.jsx)("button",{onClick:function(){return function(e){window.confirm("Delete ".concat(e.name,"?"))&&t(e.id)}(n)},children:"delete"})]})},d=function(e){var n=e.personsList,t=e.newFilter,o=e.deletePhoneBookEntry;return Object(s.jsx)("div",{children:n.filter((function(e){return e.name.toLowerCase().includes(t)})).map((function(e){return Object(s.jsx)(l,{person:e,deletePhoneBookEntry:o},e.id)}))})},f=function(e){var n=e.setNewNameInput,t=e.newName,o=e.setNewPhoneNumberInput,c=e.newPhoneNumber,r=e.addNewName;return Object(s.jsxs)("form",{children:[Object(s.jsxs)("div",{children:["name: ",Object(s.jsx)("input",{onChange:n,value:t})]}),Object(s.jsxs)("div",{children:["number: ",Object(s.jsx)("input",{onChange:o,value:c})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{onClick:r,type:"submit",children:"add"})})]})},h=function(e){var n=e.notification;if(null===n)return null;var t={UPDATE:"success",ADD:"success",ERROR:"error",DELETE:"success"},o=n&&t[n.type]?t[n.type]:null;return Object(s.jsx)("div",{className:o,children:n.message})},b=t(4),j=t.n(b),m="https://safe-scrubland-67754.herokuapp.com/api/persons",p={getAllPhonebookEntries:function(){return j.a.get(m).then((function(e){return e.data}))},addPhonebookEntry:function(e){return j.a.post(m,e).then((function(e){return e.data}))},deletePhoneBookEntry:function(e){return j.a.delete("".concat(m,"/").concat(e)).then((function(e){return e}))},updatePhoneBookEntry:function(e,n){return j.a.put("".concat(m,"/").concat(e),n).then((function(e){return e}))}},O=function(){var e=Object(o.useState)([]),n=Object(i.a)(e,2),t=n[0],c=n[1],r=Object(o.useState)(""),u=Object(i.a)(r,2),l=u[0],b=u[1],j=Object(o.useState)(""),m=Object(i.a)(j,2),O=m[0],v=m[1],w=Object(o.useState)(""),E=Object(i.a)(w,2),x=E[0],g=E[1],y=Object(o.useState)(null),k=Object(i.a)(y,2),P=k[0],N=k[1];Object(o.useEffect)((function(){p.getAllPhonebookEntries().then((function(e){c(e)})).catch((function(e){return console.log(e)}))}),[]);var D=function(e,n){p.updatePhoneBookEntry(e,n).then((function(){c(t.map((function(t){return t.id!==e?t:n})));var o={message:"Updated phone number for ".concat(n.name),type:"UPDATE"};N(o),setTimeout((function(){N(null)}),5e3)})).catch((function(){var e={message:"Failed to update phone number for ".concat(n.name),type:"ERROR"};N(e),setTimeout((function(){N(null)}),5e3)}))},F=function(e){var n=e.setNewFilterValue,t=e.newFilter;return Object(s.jsxs)("p",{children:["filter shown with ",Object(s.jsx)("input",{onChange:n,value:t})]})};return Object(s.jsxs)("div",{children:[Object(s.jsx)(h,{notification:P}),Object(s.jsx)("h2",{children:"Phonebook"}),Object(s.jsx)(F,{setNewFilterValue:function(e){b(e.target.value)},newFilter:l}),Object(s.jsx)("h3",{children:"Add a new"}),Object(s.jsx)(f,{setNewNameInput:function(e){v(e.target.value)},newName:O,setNewPhoneNumberInput:function(e){g(e.target.value)},newPhoneNumber:x,addNewName:function(e){e.preventDefault();var n=t.find((function(e){return e.name===O}));if(n){var o=Object(a.a)(Object(a.a)({},n),{},{number:x});window.confirm("".concat(n.name," is already added to phonebook, replace the old number with a new one?"))&&D(n.id,o)}else if(n)alert("".concat(O," is already added to phonebook"));else{if(""===O||""===x)return;var r={name:O,number:x},u={message:"Added ".concat(r.name),type:"ADD"};p.addPhonebookEntry(r).then((function(e){c(t.concat(e)),v(""),g(""),N(u),setTimeout((function(){N(null)}),5e3)})).catch((function(){var e={message:"Failed add entry for ".concat(n.name),type:"ERROR"};N(e),setTimeout((function(){N(null)}),5e3)}))}}}),Object(s.jsx)("h3",{children:"Numbers"}),Object(s.jsx)(d,{personsList:t,newFilter:l,deletePhoneBookEntry:function(e){p.deletePhoneBookEntry(e).then((function(){var n=t.find((function(n){return n.id===e})),o={message:"Deleted entry for ".concat(n.name),type:"DELETE"};N(o),setTimeout((function(){N(null)}),5e3),c(t.filter((function(n){return n.id!==e})))})).catch((function(e){return console.log(e)}))}})]})},v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,41)).then((function(n){var t=n.getCLS,o=n.getFID,c=n.getFCP,r=n.getLCP,u=n.getTTFB;t(e),o(e),c(e),r(e),u(e)}))};u.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(O,{})}),document.getElementById("root")),v()}},[[40,1,2]]]);
//# sourceMappingURL=main.c9850029.chunk.js.map