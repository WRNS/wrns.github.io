(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[992],{7248:function(A,e,t){Promise.resolve().then(t.t.bind(t,8173,23)),Promise.resolve().then(t.bind(t,6883)),Promise.resolve().then(t.bind(t,5103)),Promise.resolve().then(t.bind(t,1834)),Promise.resolve().then(t.t.bind(t,7803,23)),Promise.resolve().then(t.t.bind(t,8193,23))},1834:function(A,e,t){"use strict";t.d(e,{default:function(){return u}});var n=t(7437);t(9957);var a=t(2265),s=t(1838),o=t.n(s),r=JSON.parse('[{"type":"event","message":"<strong class=\'caps\'>Mandatory Social Work Day</strong> - Saturday September 7th, 9am to 12pm","startDate":"2024-08-01","endDate":"2024-09-08"},{"type":"hiring","message":"Winton Road is seeking a lead teacher for our Young Nursery. Learn more about this exciting opportunity in the <a class=\\"link\\" href=\'https://docs.google.com/document/d/1-rsmNEOLmxDk6SCSutyLDIGf2GfhRausJwXJAFp1VBA/view?usp=sharing\'>job details</a>.","startDate":"2024-07-15","endDate":"2024-08-01"},{"type":"event","message":"<strong class=\'caps\'>Officers\' Board Meeting</strong> - Wednesday October 9th, 7:45pm to 8:30pm","startDate":"2024-10-01","endDate":"2024-10-09"},{"type":"promotion","message":"<strong>School Picture Day</strong> - October 22 & 23","startDate":"2024-10-15","endDate":"2024-10-24"},{"type":"promotion","message":"<strong>Makeup Picture Day</strong> - October 29 & 30","startDate":"2024-10-24","endDate":"2024-10-31"},{"type":"promotion","message":"On December 3, WRNS is proud to be a part of <strong><a class=\\"link\\" href=\'/united-way\'>United Way\'s ROC the Day 2024</a></strong>","startDate":"2024-11-24","endDate":"2024-12-04"}]');let i={general:"\uD83D\uDCE2",event:"\uD83D\uDCC5",alert:"⚠️",hiring:"\uD83D\uDD0D",promotion:"\uD83C\uDF89",weather:"\uD83C\uDF26️"};var u=()=>{let[A,e]=(0,a.useState)(null),[t,s]=(0,a.useState)(!1);if((0,a.useEffect)(()=>{if("true"===sessionStorage.getItem("announcementDismissed"))s(!1);else{let A=new Date,t=r.filter(e=>new Date(e.startDate)<=A&&A<=new Date(e.endDate)).sort((A,e)=>new Date(e.startDate)-new Date(A.startDate))[0];e(t||null),t&&s(!0)}},[]),!A)return null;let u=i[A.type]||"\uD83D\uDCE2";return(0,n.jsxs)("aside",{id:"announcement-banner",className:"announcement announcement--".concat(A.type," ").concat(t?"":"announcement--hide"),children:[(0,n.jsx)("span",{className:"announcement__icon",children:u}),(0,n.jsx)("p",{className:"announcement__message",dangerouslySetInnerHTML:{__html:o().sanitize(A.message)}}),(0,n.jsx)("button",{onClick:()=>{s(!1),sessionStorage.setItem("announcementDismissed","true")},className:"btn btn__close-button",title:"close","aria-label":"close announcment banner",children:"X"})]})}},9957:function(){},8193:function(){},7803:function(){},6883:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/ROC_email_2024.12e103fd.png",height:675,width:600,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAV1BMVEU0NDNojqBKWmA+MTAoPUUvJSETT2EhHR0/P0BPTk8UZXdaXFhNdoKGJSmlak0jeZ+plWFxZFoNJzAVQE+JfHF7gYpud386TFNae4A9b3owlJRMl5UZeqia18ztAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPklEQVR4nB3FRw6AMAwAwU21UyCh1/+/E4m5DOLf1qwShrHfmf/nKoirpZ4KqDs0Qcz7tiSCRGN8Apm9XacPT7MCTzM0T9EAAAAASUVORK5CYII=",blurWidth:7,blurHeight:8}},5103:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/united-way.a5ba672b.jpg",height:730,width:1920,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAADAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAVAQEBAAAAAAAAAAAAAAAAAAABA//aAAwDAQACEAMQAAABmhn/AP/EABQQAQAAAAAAAAAAAAAAAAAAAEH/2gAIAQEAAQUCP//EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oACAEDAQE/Aa//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAWEAADAAAAAAAAAAAAAAAAAAAAAWH/2gAIAQEABj8CVP/EABgQAAIDAAAAAAAAAAAAAAAAABEhAEFh/9oACAEBAAE/IQMTLuf/2gAMAwEAAgADAAAAEAv/xAAXEQEAAwAAAAAAAAAAAAAAAAABABEh/9oACAEDAQE/ENBc/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAh/9oACAECAQE/EHFv/8QAGhAAAgIDAAAAAAAAAAAAAAAAAREAITFBYf/aAAgBAQABPxBFQ2p0Cnihqf/Z",blurWidth:8,blurHeight:3}}},function(A){A.O(0,[688,173,838,971,23,744],function(){return A(A.s=7248)}),_N_E=A.O()}]);