(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[45],{1270:function(e,t,n){Promise.resolve().then(n.t.bind(n,8173,23)),Promise.resolve().then(n.bind(n,1834)),Promise.resolve().then(n.t.bind(n,1719,23)),Promise.resolve().then(n.t.bind(n,8193,23))},1834:function(e,t,n){"use strict";n.d(t,{default:function(){return c}});var a=n(7437);n(9957);var s=n(2265),o=n(1838),r=n.n(o),i=JSON.parse('[{"type":"event","message":"<strong class=\'caps\'>Mandatory Social Work Day</strong> - Saturday September 7th, 9am to 12pm","startDate":"2024-08-01","endDate":"2024-09-08"},{"type":"hiring","message":"Winton Road is seeking a lead teacher for our Young Nursery. Learn more about this exciting opportunity in the <a class=\\"link\\" href=\'https://docs.google.com/document/d/1-rsmNEOLmxDk6SCSutyLDIGf2GfhRausJwXJAFp1VBA/view?usp=sharing\'>job details</a>.","startDate":"2024-07-15","endDate":"2024-08-01"},{"type":"event","message":"<strong class=\'caps\'>Officers\' Board Meeting</strong> - Wednesday October 9th, 7:45pm to 8:30pm","startDate":"2024-10-01","endDate":"2024-10-09"},{"type":"promotion","message":"<strong>School Picture Day</strong> - October 22 & 23","startDate":"2024-10-15","endDate":"2024-10-24"},{"type":"promotion","message":"<strong>Makeup Picture Day</strong> - October 29 & 30","startDate":"2024-10-24","endDate":"2024-10-31"},{"type":"promotion","message":"On December 3, WRNS is proud to be a part of <strong><a class=\\"link\\" href=\'/united-way\'>United Way\'s ROC the Day 2024</a></strong>","startDate":"2024-11-24","endDate":"2024-12-04"}]');let u={general:"\uD83D\uDCE2",event:"\uD83D\uDCC5",alert:"⚠️",hiring:"\uD83D\uDD0D",promotion:"\uD83C\uDF89",weather:"\uD83C\uDF26️"};var c=()=>{let[e,t]=(0,s.useState)(null),[n,o]=(0,s.useState)(!1);if((0,s.useEffect)(()=>{if("true"===sessionStorage.getItem("announcementDismissed"))o(!1);else{let e=new Date,n=i.filter(t=>new Date(t.startDate)<=e&&e<=new Date(t.endDate)).sort((e,t)=>new Date(t.startDate)-new Date(e.startDate))[0];t(n||null),n&&o(!0)}},[]),!e)return null;let c=u[e.type]||"\uD83D\uDCE2";return(0,a.jsxs)("aside",{id:"announcement-banner",className:"announcement announcement--".concat(e.type," ").concat(n?"":"announcement--hide"),children:[(0,a.jsx)("span",{className:"announcement__icon",children:c}),(0,a.jsx)("p",{className:"announcement__message",dangerouslySetInnerHTML:{__html:r().sanitize(e.message)}}),(0,a.jsx)("button",{onClick:()=>{o(!1),sessionStorage.setItem("announcementDismissed","true")},className:"btn btn__close-button",title:"close","aria-label":"close announcment banner",children:"X"})]})}},9957:function(){},8193:function(){},1719:function(){}},function(e){e.O(0,[688,173,838,971,23,744],function(){return e(e.s=1270)}),_N_E=e.O()}]);