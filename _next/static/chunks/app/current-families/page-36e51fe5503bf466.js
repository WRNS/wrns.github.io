(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[639],{6932:function(e,s,t){Promise.resolve().then(t.bind(t,7267))},7138:function(e,s,t){"use strict";t.d(s,{default:function(){return a.a}});var n=t(231),a=t.n(n)},1834:function(e,s,t){"use strict";t.d(s,{default:function(){return o}});var n=t(7437);t(9957);var a=t(2265),r=t(1838),i=t.n(r),c=JSON.parse('[{"type":"event","message":"<strong class=\'caps\'>Mandatory Social Work Day</strong> - Saturday September 7th, 9am to 12pm","startDate":"2024-08-01","endDate":"2024-09-08"},{"type":"hiring","message":"Winton Road is seeking a lead teacher for our Young Nursery. Learn more about this exciting opportunity in the <a class=\\"link\\" href=\'https://docs.google.com/document/d/1-rsmNEOLmxDk6SCSutyLDIGf2GfhRausJwXJAFp1VBA/view?usp=sharing\'>job details</a>.","startDate":"2024-07-15","endDate":"2024-08-01"},{"type":"event","message":"Upcoming school fair on August 20th!","startDate":"2024-06-01T00:00:00Z","endDate":"2024-06-21T00:00:00Z"},{"type":"event","message":"<strong class=\'caps\'>Officers\' Board Meeting</strong> - Wednesday October 9th, 7:45pm to 8:30pm","startDate":"2024-10-01","endDate":"2024-10-09"}]');let l={general:"\uD83D\uDCE2",event:"\uD83D\uDCC5",alert:"⚠️",hiring:"\uD83D\uDD0D",promotion:"\uD83C\uDF89",weather:"\uD83C\uDF26️"};var o=()=>{let[e,s]=(0,a.useState)(null),[t,r]=(0,a.useState)(!1);if((0,a.useEffect)(()=>{if("true"===sessionStorage.getItem("announcementDismissed"))r(!1);else{let e=new Date,t=c.filter(s=>new Date(s.startDate)<=e&&e<=new Date(s.endDate)).sort((e,s)=>new Date(s.startDate)-new Date(e.startDate))[0];s(t||null),t&&r(!0)}},[]),!e)return null;let o=l[e.type]||"\uD83D\uDCE2";return(0,n.jsxs)("aside",{id:"announcement-banner",className:"announcement announcement--".concat(e.type," ").concat(t?"":"announcement--hide"),children:[(0,n.jsx)("span",{className:"announcement__icon",children:o}),(0,n.jsx)("p",{className:"announcement__message",dangerouslySetInnerHTML:{__html:i().sanitize(e.message)}}),(0,n.jsx)("button",{onClick:()=>{r(!1),sessionStorage.setItem("announcementDismissed","true")},className:"btn btn__close-button",title:"close","aria-label":"close announcment banner",children:"X"})]})}},1848:function(e,s,t){"use strict";var n=t(7437);t(8193);var a=t(1834),r=t(6648);s.Z=e=>{let{image:s,title:t,description:i,imagePosition:c}=e;return(0,n.jsxs)("div",{className:"hero",children:[(0,n.jsxs)("div",{className:"hero__container",children:[(0,n.jsx)(r.default,{src:s,alt:"",className:"hero__image",style:{objectPosition:c,objectFit:"cover"},fill:!0,priority:!0}),(0,n.jsx)("div",{className:"hero__overlay"}),(0,n.jsxs)("div",{className:"hero__content",children:[(0,n.jsx)("h1",{className:"hero__title",children:t}),(0,n.jsx)("p",{className:"hero__description",children:i})]})]}),(0,n.jsx)(a.default,{})]})}},7267:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return l}});var n=t(7437);t(7842);var a=t(2265),r=t(1848),i=t(7138),c=t(4961);function l(){let[e,s]=(0,a.useState)("");return(0,a.useEffect)(()=>{s(getComputedStyle(document.documentElement).getPropertyValue("--primary").trim())},[]),(0,n.jsxs)("main",{children:[(0,n.jsx)(r.Z,{image:"/images/science.jpg",title:"Family Information",imagePosition:"50% 0%"}),(0,n.jsxs)("section",{id:"parent-resources",className:"section__layout parent-resources background-primary",children:[(0,n.jsx)("h2",{className:"section__heading",children:"Resources"}),(0,n.jsxs)("ul",{className:"parent-resources__list text-content",children:[(0,n.jsx)("li",{className:"parent-resources__list-item",children:(0,n.jsxs)(i.default,{className:"btn btn--icon btn--inverse",href:"https://www.jovial.org/wintonroad/hello/sign/in",children:[(0,n.jsx)(c.Q,{className:"svg-icon--large",src:"/svgs/portal.svg",beforeInjection:s=>{s.setAttribute("style","fill: ".concat(e))}}),(0,n.jsxs)("div",{className:"btn__text-content",children:[(0,n.jsx)("strong",{className:"btn--caps",children:"Current Family Portal"}),(0,n.jsx)("span",{children:"Powered by Jovial"})]})]})}),(0,n.jsx)("li",{className:"parent-resources__list-item",children:(0,n.jsxs)(i.default,{className:"btn btn--icon btn--inverse",href:"/docs/wrns-calendar-2024-2025.pdf",children:[(0,n.jsx)(c.Q,{className:"svg-icon--large",src:"/svgs/calendar.svg",beforeInjection:s=>{s.setAttribute("style","fill: ".concat(e))}}),(0,n.jsxs)("div",{className:"btn__text-content",children:[(0,n.jsx)("strong",{className:"btn--caps",children:"Calendar"}),(0,n.jsx)("span",{children:"2024-2025"})]})]})}),(0,n.jsx)("li",{className:"parent-resources__list-item",children:(0,n.jsxs)(i.default,{className:"btn btn--icon btn--inverse",href:"/docs/wrns-committees.pdf",children:[(0,n.jsx)(c.Q,{className:"svg-icon--large",src:"/svgs/committee.svg",beforeInjection:s=>{s.setAttribute("style","fill: ".concat(e))}}),(0,n.jsxs)("div",{className:"btn__text-content",children:[(0,n.jsx)("strong",{className:"btn--caps",children:"School Structure"}),(0,n.jsx)("span",{children:"Committee descriptions"})]})]})}),(0,n.jsx)("li",{className:"parent-resources__list-item",children:(0,n.jsxs)(i.default,{className:"btn btn--icon btn--inverse",href:"/docs/wrns-by-laws.pdf",children:[(0,n.jsx)(c.Q,{className:"svg-icon--large",src:"/svgs/bylaws.svg",beforeInjection:s=>{s.setAttribute("style","fill: ".concat(e))}}),(0,n.jsxs)("div",{className:"btn__text-content",children:[(0,n.jsx)("strong",{className:"btn--caps",children:"By-Laws"}),(0,n.jsx)("span",{children:"Rights & responsibilities"})]})]})}),(0,n.jsx)("li",{className:"parent-resources__list-item",children:(0,n.jsxs)(i.default,{className:"btn btn--icon btn--inverse",href:"/docs/wrns-parent-handbook.pdf",children:[(0,n.jsx)(c.Q,{className:"svg-icon--large",src:"/svgs/handbook.svg",beforeInjection:s=>{s.setAttribute("style","fill: ".concat(e))}}),(0,n.jsxs)("div",{className:"btn__text-content",children:[(0,n.jsx)("strong",{className:"btn--caps",children:"Parent's Handbook"}),(0,n.jsx)("span",{children:"Resources for parents"})]})]})})]})]}),(0,n.jsxs)("section",{className:"playdough-recipe  section__layout",children:[(0,n.jsx)("h2",{className:"section__heading playdough-recipe__title",children:"Playdough recipe"}),(0,n.jsxs)("div",{className:"playdough-recipe__container  text-content",children:[(0,n.jsx)("h4",{className:"playdough-recipe__note",children:"Please double the recipe when bringing playdough in for the class."}),(0,n.jsxs)("ul",{className:"playdough-recipe__list",children:[(0,n.jsx)("li",{className:"playdough-recipe__list-item",children:"4 cups flour"}),(0,n.jsx)("li",{className:"playdough-recipe__list-item",children:"1 cup salt"}),(0,n.jsx)("li",{className:"playdough-recipe__list-item",children:"8 tablespoons cream of tartar"}),(0,n.jsx)("li",{className:"playdough-recipe__list-item",children:"4 cups water"}),(0,n.jsx)("li",{className:"playdough-recipe__list-item",children:"4 tablespoons oil"}),(0,n.jsx)("li",{className:"playdough-recipe__list-item",children:"food coloring"})]}),(0,n.jsx)("p",{className:"playdough-recipe__instructions",children:"Cook all ingredients together over medium heat. Cool and knead on a floured surface. Store in an airtight container."})]})]})]})}},9957:function(){},8193:function(){},7842:function(){}},function(e){e.O(0,[563,604,173,838,231,43,971,23,744],function(){return e(e.s=6932)}),_N_E=e.O()}]);