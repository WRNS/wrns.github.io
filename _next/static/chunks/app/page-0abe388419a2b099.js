(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2788:function(e,n,s){Promise.resolve().then(s.bind(s,6394))},7138:function(e,n,s){"use strict";s.d(n,{default:function(){return a.a}});var t=s(231),a=s.n(t)},1834:function(e,n,s){"use strict";s.d(n,{default:function(){return c}});var t=s(7437);s(9957);var a=s(2265),i=s(1838),o=s.n(i),r=JSON.parse('[{"type":"event","message":"<strong class=\'caps\'>Mandatory Social Work Day</strong> - Saturday September 7th, 9am to 12pm","startDate":"2024-08-01","endDate":"2024-09-08"},{"type":"hiring","message":"Winton Road is seeking a lead teacher for our Young Nursery. Learn more about this exciting opportunity in the <a class=\\"link\\" href=\'https://docs.google.com/document/d/1-rsmNEOLmxDk6SCSutyLDIGf2GfhRausJwXJAFp1VBA/view?usp=sharing\'>job details</a>.","startDate":"2024-07-15","endDate":"2024-08-01"},{"type":"event","message":"Upcoming school fair on August 20th!","startDate":"2024-06-01T00:00:00Z","endDate":"2024-06-21T00:00:00Z"},{"type":"event","message":"<strong class=\'caps\'>Officers\' Board Meeting</strong> - Wednesday October 9th, 7:45pm to 8:30pm","startDate":"2024-10-01","endDate":"2024-10-09"}]');let A={general:"\uD83D\uDCE2",event:"\uD83D\uDCC5",alert:"⚠️",hiring:"\uD83D\uDD0D",promotion:"\uD83C\uDF89",weather:"\uD83C\uDF26️"};var c=()=>{let[e,n]=(0,a.useState)(null),[s,i]=(0,a.useState)(!1);if((0,a.useEffect)(()=>{if("true"===sessionStorage.getItem("announcementDismissed"))i(!1);else{let e=new Date,s=r.filter(n=>new Date(n.startDate)<=e&&e<=new Date(n.endDate)).sort((e,n)=>new Date(n.startDate)-new Date(e.startDate))[0];n(s||null),s&&i(!0)}},[]),!e)return null;let c=A[e.type]||"\uD83D\uDCE2";return(0,t.jsxs)("aside",{id:"announcement-banner",className:"announcement announcement--".concat(e.type," ").concat(s?"":"announcement--hide"),children:[(0,t.jsx)("span",{className:"announcement__icon",children:c}),(0,t.jsx)("p",{className:"announcement__message",dangerouslySetInnerHTML:{__html:o().sanitize(e.message)}}),(0,t.jsx)("button",{onClick:()=>{i(!1),sessionStorage.setItem("announcementDismissed","true")},className:"btn btn__close-button",title:"close","aria-label":"close announcment banner",children:"X"})]})}},1848:function(e,n,s){"use strict";var t=s(7437);s(8193);var a=s(1834),i=s(6648);n.Z=e=>{let{image:n,title:s,description:o,imagePosition:r}=e;return(0,t.jsxs)("div",{className:"hero",children:[(0,t.jsxs)("div",{className:"hero__container",children:[(0,t.jsx)(i.default,{src:n,alt:"",className:"hero__image",style:{objectPosition:r,objectFit:"cover"},fill:!0,priority:!0}),(0,t.jsx)("div",{className:"hero__overlay"}),(0,t.jsxs)("div",{className:"hero__content",children:[(0,t.jsx)("h1",{className:"hero__title",children:s}),(0,t.jsx)("p",{className:"hero__description",children:o})]})]}),(0,t.jsx)(a.default,{})]})}},6394:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return u}});var t=s(7437);s(2575);var a=s(1848),i=s(6648),o=s(7138),r=s(4961);s(7549);var A=s(2265),c=e=>{let{svgSource:n,fillColor:s,heading:a,text:i,align:o}=e,c=(0,A.useRef)(null);return(0,A.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&e.target.classList.add("visible")})},{threshold:.1});c.current&&e.observe(c.current);let n=c.current;return()=>{n&&e.unobserve(n)}},[]),(0,t.jsxs)("section",{ref:c,className:"sliding-card ".concat("left"===o?"left":"right"),children:[(0,t.jsx)("div",{className:"sliding-card__svg-container",children:(0,t.jsx)(r.Q,{className:"sliding-card__icon",src:n,beforeInjection:e=>{e.setAttribute("style","fill: ".concat(s))}})}),(0,t.jsxs)("div",{className:"sliding-card__content",children:[(0,t.jsx)("h4",{className:"white",children:a}),(0,t.jsx)("p",{children:i})]})]})},l={src:"/_next/static/media/boy-on-bike.bd0586cb.jpg",height:3024,width:4032,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAH/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oADAMBAAIQAxAAAAGAP//EABYQAAMAAAAAAAAAAAAAAAAAAAIDIv/aAAgBAQABBQIaf//EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oACAEDAQE/AUv/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AX//xAAXEAADAQAAAAAAAAAAAAAAAAAAAQIS/9oACAEBAAY/ArW6P//EABgQAQEAAwAAAAAAAAAAAAAAAAERACEx/9oACAEBAAE/IWyUqW7p3P/aAAwDAQACAAMAAAAQC//EABcRAQADAAAAAAAAAAAAAAAAAAEAEXH/2gAIAQMBAT8QIrJ//8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAECAQE/EENv/8QAGhAAAgIDAAAAAAAAAAAAAAAAAREAUSExYf/aAAgBAQABPxDeUBY7FHCHJ//Z",blurWidth:8,blurHeight:6},d=e=>{(0,A.useEffect)(()=>{e.forEach(e=>{new Image().src=e})},[e])};function u(){return d(["/images/outdoors.jpg","/images/playground.jpg","/images/playground-in-spring.jpg","/images/blocks.jpg","images/teachers.jpg","images/contact.jpg","images/events.jpg"]),(0,t.jsxs)("main",{children:[(0,t.jsx)(a.Z,{image:"/images/book-play.jpg",title:"Winton Road Nursery School",description:"We Play. We Grow. We Nurture. We Work Together."}),(0,t.jsxs)("section",{id:"about-us",className:"about-us background-primary section__layout",children:[(0,t.jsx)("h2",{className:"section__heading",children:"About Us"}),(0,t.jsx)("p",{className:"about-us__text",children:"At Winton Road, we believe that by nurturing a child's curiosity and growth in a supportive environment, we inspire a lifelong love of learning."}),(0,t.jsx)(c,{svgSource:"/svgs/child.svg",fillColor:"white",heading:"Safe Play Environment",text:"For over 50 years, we have provided a secure and welcoming space where children can explore, play, and learn with confidence.",align:"left"}),(0,t.jsx)(c,{svgSource:"/svgs/playground.svg",fillColor:"white",heading:"Outdoor Exploration",text:"Our fenced playground and nature trails offer children the opportunity to connect with nature, fostering curiosity and physical activity in a safe setting.",align:"right"}),(0,t.jsx)(c,{svgSource:"/svgs/blocks.svg",fillColor:"white",heading:"Kindergarten Readiness",text:"We prepare children academically and socially for kindergarten, ensuring they have the skills and confidence needed to succeed in their next educational step.",align:"left"}),(0,t.jsx)(c,{svgSource:"/svgs/family.svg",fillColor:"white",heading:"Family Involvement",text:"Our supportive community encourages family participation, building strong, lasting relationships that enrich the educational experience and create lifelong bonds.",align:"right"}),(0,t.jsx)(c,{svgSource:"/svgs/classroom.svg",fillColor:"white",heading:"Engaging Classrooms",text:"Our classrooms are designed to be engaging and child-friendly, creating an environment where young learners feel inspired and excited to explore new concepts.",align:"left"})]}),(0,t.jsxs)("section",{id:"coop",className:"coop text-content section__layout",children:[(0,t.jsx)("h2",{className:"section__heading",children:"Semi-Cooperative"}),(0,t.jsxs)("div",{className:"coop__container",children:[(0,t.jsx)("div",{className:"coop__image-wrapper",children:(0,t.jsx)(i.default,{src:l,alt:"",className:"coop__image"})}),(0,t.jsxs)("div",{className:"coop__text",children:[(0,t.jsx)("p",{children:"At our semi-cooperative nursery school, parents play a vital role in shaping their child's first educational experience. As members of a non-profit, non-sectarian cooperative, parents help guide the school through an appointed board of directors. This involvement isn't daunting—it's a fantastic opportunity!"}),(0,t.jsx)("p",{children:"Parents contribute to decision-making and participate in committees, creating a supportive and collaborative environment. This hands-on approach ensures that your child's early education is a personalized and enriching experience."}),(0,t.jsx)("p",{children:"Winton Road welcomes students of all backgrounds and offer a limited number of scholarships based on financial need, ensuring a diverse and inclusive community."}),(0,t.jsx)("p",{children:"For more details on our school structure, including committee roles, parental responsibilities, and financial commitments, please refer to the following:"})]})]}),(0,t.jsxs)("div",{className:"document-links",children:[(0,t.jsxs)(o.default,{className:"document-links__link btn btn--icon caps",href:"/docs/wrns-by-laws.pdf",children:[(0,t.jsx)(r.Q,{className:"svg-icon--large",src:"/svgs/bylaws.svg",beforeInjection:e=>{e.setAttribute("style","fill: #fff")}}),(0,t.jsx)("span",{className:"btn__text-content",children:"School By-Laws"})]}),(0,t.jsxs)(o.default,{className:"document-links__link btn btn--icon caps",href:"/docs/wrns-parent-handbook.pdf",children:[(0,t.jsx)(r.Q,{className:"svg-icon--large",src:"/svgs/handbook.svg",beforeInjection:e=>{e.setAttribute("style","fill: #fff")}}),(0,t.jsx)("span",{className:"btn__text-content",children:"Parent's Handbook"})]}),(0,t.jsxs)(o.default,{className:"document-links__link btn btn--icon caps",href:"/docs/wrns-committees.pdf",children:[(0,t.jsx)(r.Q,{className:"svg-icon--large",src:"/svgs/committee.svg",beforeInjection:e=>{e.setAttribute("style","fill: #fff")}}),(0,t.jsx)("span",{className:"btn__text-content",children:"Description of Committees"})]})]})]})]})}},9957:function(){},8193:function(){},7549:function(){},2575:function(){}},function(e){e.O(0,[436,604,173,838,231,43,971,23,744],function(){return e(e.s=2788)}),_N_E=e.O()}]);