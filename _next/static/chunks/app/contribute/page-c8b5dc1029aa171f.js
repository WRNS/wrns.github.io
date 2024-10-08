(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[328],{6226:function(e,t,n){Promise.resolve().then(n.bind(n,6175))},1834:function(e,t,n){"use strict";n.d(t,{default:function(){return u}});var s=n(7437);n(9957);var a=n(2265),o=n(1838),i=n.n(o),r=JSON.parse('[{"type":"event","message":"<strong class=\'caps\'>Mandatory Social Work Day</strong> - Saturday September 7th, 9am to 12pm","startDate":"2024-08-01","endDate":"2024-09-08"},{"type":"hiring","message":"Winton Road is seeking a lead teacher for our Young Nursery. Learn more about this exciting opportunity in the <a class=\\"link\\" href=\'https://docs.google.com/document/d/1-rsmNEOLmxDk6SCSutyLDIGf2GfhRausJwXJAFp1VBA/view?usp=sharing\'>job details</a>.","startDate":"2024-07-15","endDate":"2024-08-01"},{"type":"event","message":"Upcoming school fair on August 20th!","startDate":"2024-06-01T00:00:00Z","endDate":"2024-06-21T00:00:00Z"},{"type":"event","message":"<strong class=\'caps\'>Officers\' Board Meeting</strong> - Wednesday October 9th, 7:45pm to 8:30pm","startDate":"2024-10-01","endDate":"2024-10-09"}]');let c={general:"\uD83D\uDCE2",event:"\uD83D\uDCC5",alert:"⚠️",hiring:"\uD83D\uDD0D",promotion:"\uD83C\uDF89",weather:"\uD83C\uDF26️"};var u=()=>{let[e,t]=(0,a.useState)(null),[n,o]=(0,a.useState)(!1);if((0,a.useEffect)(()=>{if("true"===sessionStorage.getItem("announcementDismissed"))o(!1);else{let e=new Date,n=r.filter(t=>new Date(t.startDate)<=e&&e<=new Date(t.endDate)).sort((e,t)=>new Date(t.startDate)-new Date(e.startDate))[0];t(n||null),n&&o(!0)}},[]),!e)return null;let u=c[e.type]||"\uD83D\uDCE2";return(0,s.jsxs)("aside",{id:"announcement-banner",className:"announcement announcement--".concat(e.type," ").concat(n?"":"announcement--hide"),children:[(0,s.jsx)("span",{className:"announcement__icon",children:u}),(0,s.jsx)("p",{className:"announcement__message",dangerouslySetInnerHTML:{__html:i().sanitize(e.message)}}),(0,s.jsx)("button",{onClick:()=>{o(!1),sessionStorage.setItem("announcementDismissed","true")},className:"btn btn__close-button",title:"close","aria-label":"close announcment banner",children:"X"})]})}},1848:function(e,t,n){"use strict";var s=n(7437);n(8193);var a=n(1834),o=n(6648);t.Z=e=>{let{image:t,title:n,description:i,imagePosition:r}=e;return(0,s.jsxs)("div",{className:"hero",children:[(0,s.jsxs)("div",{className:"hero__container",children:[(0,s.jsx)(o.default,{src:t,alt:"",className:"hero__image",style:{objectPosition:r,objectFit:"cover"},fill:!0,priority:!0}),(0,s.jsx)("div",{className:"hero__overlay"}),(0,s.jsxs)("div",{className:"hero__content",children:[(0,s.jsx)("h1",{className:"hero__title",children:n}),(0,s.jsx)("p",{className:"hero__description",children:i})]})]}),(0,s.jsx)(a.default,{})]})}},6175:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r}});var s=n(7437);n(8801);var a=n(2265),o=n(1848),i=n(4961);function r(){let[e,t]=(0,a.useState)("");return(0,a.useEffect)(()=>{t(getComputedStyle(document.documentElement).getPropertyValue("--primary").trim())},[]),(0,s.jsxs)("main",{children:[(0,s.jsx)(o.Z,{image:"/images/volunteering.jpg",title:"Contribute",imagePosition:"40% 30%"}),(0,s.jsx)("section",{id:"donation",className:"donation section__layout",children:(0,s.jsxs)("div",{className:"text-content",children:[(0,s.jsx)("h2",{className:"section__heading",children:"Make a Donation to Winton Road"}),(0,s.jsx)("p",{className:"donation__text",children:"Your donation to Winton Road Nursery School nurtures young minds, supports our inclusive community, and enhances learning experiences with innovative programs and resources. By contributing, you help sustain our 50-year legacy of excellence in early childhood education, ensuring we can continue to serve future generations."}),(0,s.jsxs)("form",{id:"donate",action:"https://www.paypal.com/cgi-bin/webscr",method:"post",target:"_top",children:[(0,s.jsx)("input",{type:"hidden",name:"cmd",value:"_s-xclick"}),(0,s.jsx)("input",{type:"hidden",name:"hosted_button_id",value:"W7AGQ6XFNSZW4"}),(0,s.jsxs)("button",{type:"submit",className:"btn btn--icon caps",children:[(0,s.jsx)(i.Q,{className:"svg-icon--large",src:"/svgs/donation.svg",beforeInjection:e=>{e.setAttribute("style","fill: #fff")}}),(0,s.jsx)("span",{className:"btn__text-content",children:"Donate"})]})]})]})})]})}},9957:function(){},8193:function(){},8801:function(){}},function(e){e.O(0,[965,604,173,838,43,971,23,744],function(){return e(e.s=6226)}),_N_E=e.O()}]);