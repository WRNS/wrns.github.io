(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[606],{7312:function(e,t,n){Promise.resolve().then(n.t.bind(n,8173,23)),Promise.resolve().then(n.bind(n,1834)),Promise.resolve().then(n.t.bind(n,726,23)),Promise.resolve().then(n.t.bind(n,8193,23)),Promise.resolve().then(n.t.bind(n,4036,23))},1834:function(e,t,n){"use strict";n.d(t,{default:function(){return c}});var s=n(7437);n(9957);var a=n(2265),o=n(1838),r=n.n(o),i=JSON.parse('[{"type":"event","message":"<strong class=\'caps\'>Mandatory Social Work Day</strong> - Saturday September 7th, 9am to 12pm","startDate":"2024-08-01","endDate":"2024-09-08"},{"type":"hiring","message":"Winton Road is seeking a lead teacher for our Young Nursery. Learn more about this exciting opportunity in the <a class=\\"link\\" href=\'https://docs.google.com/document/d/1-rsmNEOLmxDk6SCSutyLDIGf2GfhRausJwXJAFp1VBA/view?usp=sharing\'>job details</a>.","startDate":"2024-07-15","endDate":"2024-08-01"},{"type":"event","message":"Upcoming school fair on August 20th!","startDate":"2024-06-01T00:00:00Z","endDate":"2024-06-21T00:00:00Z"},{"type":"event","message":"<strong class=\'caps\'>Officers\' Board Meeting</strong> - Wednesday October 9th, 7:45pm to 8:30pm","startDate":"2024-10-01","endDate":"2024-10-09"},{"type":"promotion","message":"<strong>School Picture Day</strong> - October 22 & 23","startDate":"2024-10-15","endDate":"2024-10-24"},{"type":"promotion","message":"<strong>Makeup Picture Day</strong> - October 29 & 30","startDate":"2024-10-24","endDate":"2024-10-31"}]');let u={general:"\uD83D\uDCE2",event:"\uD83D\uDCC5",alert:"⚠️",hiring:"\uD83D\uDD0D",promotion:"\uD83C\uDF89",weather:"\uD83C\uDF26️"};var c=()=>{let[e,t]=(0,a.useState)(null),[n,o]=(0,a.useState)(!1);if((0,a.useEffect)(()=>{if("true"===sessionStorage.getItem("announcementDismissed"))o(!1);else{let e=new Date,n=i.filter(t=>new Date(t.startDate)<=e&&e<=new Date(t.endDate)).sort((e,t)=>new Date(t.startDate)-new Date(e.startDate))[0];t(n||null),n&&o(!0)}},[]),!e)return null;let c=u[e.type]||"\uD83D\uDCE2";return(0,s.jsxs)("aside",{id:"announcement-banner",className:"announcement announcement--".concat(e.type," ").concat(n?"":"announcement--hide"),children:[(0,s.jsx)("span",{className:"announcement__icon",children:c}),(0,s.jsx)("p",{className:"announcement__message",dangerouslySetInnerHTML:{__html:r().sanitize(e.message)}}),(0,s.jsx)("button",{onClick:()=>{o(!1),sessionStorage.setItem("announcementDismissed","true")},className:"btn btn__close-button",title:"close","aria-label":"close announcment banner",children:"X"})]})}},9957:function(){},8193:function(){},4036:function(){},726:function(){}},function(e){e.O(0,[604,871,173,838,971,23,744],function(){return e(e.s=7312)}),_N_E=e.O()}]);