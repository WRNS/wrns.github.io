(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{7845:function(e,s,t){Promise.resolve().then(t.bind(t,2796))},1834:function(e,s,t){"use strict";t.d(s,{default:function(){return i}});var a=t(7437);t(9957);var n=t(2265),r=t(1838),o=t.n(r),c=JSON.parse('[{"type":"event","message":"<strong class=\'caps\'>Mandatory Social Work Day</strong> - Saturday September 7th, 9am to 12pm","startDate":"2024-08-01","endDate":"2024-09-08"},{"type":"hiring","message":"Winton Road is seeking a lead teacher for our Young Nursery. Learn more about this exciting opportunity in the <a class=\\"link\\" href=\'https://docs.google.com/document/d/1-rsmNEOLmxDk6SCSutyLDIGf2GfhRausJwXJAFp1VBA/view?usp=sharing\'>job details</a>.","startDate":"2024-07-15","endDate":"2024-08-01"},{"type":"event","message":"<strong class=\'caps\'>Officers\' Board Meeting</strong> - Wednesday October 9th, 7:45pm to 8:30pm","startDate":"2024-10-01","endDate":"2024-10-09"},{"type":"promotion","message":"<strong>School Picture Day</strong> - October 22 & 23","startDate":"2024-10-15","endDate":"2024-10-24"},{"type":"promotion","message":"<strong>Makeup Picture Day</strong> - October 29 & 30","startDate":"2024-10-24","endDate":"2024-10-31"},{"type":"promotion","message":"On December 3, WRNS is proud to be a part of <strong><a class=\\"link\\" href=\'/united-way\'>United Way\'s ROC the Day 2024</a></strong>","startDate":"2024-11-24","endDate":"2024-12-04"}]');let l={general:"\uD83D\uDCE2",event:"\uD83D\uDCC5",alert:"⚠️",hiring:"\uD83D\uDD0D",promotion:"\uD83C\uDF89",weather:"\uD83C\uDF26️"};var i=()=>{let[e,s]=(0,n.useState)(null),[t,r]=(0,n.useState)(!1);if((0,n.useEffect)(()=>{if("true"===sessionStorage.getItem("announcementDismissed"))r(!1);else{let e=new Date,t=c.filter(s=>new Date(s.startDate)<=e&&e<=new Date(s.endDate)).sort((e,s)=>new Date(s.startDate)-new Date(e.startDate))[0];s(t||null),t&&r(!0)}},[]),!e)return null;let i=l[e.type]||"\uD83D\uDCE2";return(0,a.jsxs)("aside",{id:"announcement-banner",className:"announcement announcement--".concat(e.type," ").concat(t?"":"announcement--hide"),children:[(0,a.jsx)("span",{className:"announcement__icon",children:i}),(0,a.jsx)("p",{className:"announcement__message",dangerouslySetInnerHTML:{__html:o().sanitize(e.message)}}),(0,a.jsx)("button",{onClick:()=>{r(!1),sessionStorage.setItem("announcementDismissed","true")},className:"btn btn__close-button",title:"close","aria-label":"close announcment banner",children:"X"})]})}},1848:function(e,s,t){"use strict";var a=t(7437);t(8193);var n=t(1834),r=t(6648);s.Z=e=>{let{image:s,title:t,description:o,imagePosition:c}=e;return(0,a.jsxs)("div",{className:"hero",children:[(0,a.jsxs)("div",{className:"hero__container",children:[(0,a.jsx)(r.default,{src:s,alt:"",className:"hero__image",style:{objectPosition:c,objectFit:"cover"},fill:!0,priority:!0}),(0,a.jsx)("div",{className:"hero__overlay"}),(0,a.jsxs)("div",{className:"hero__content",children:[(0,a.jsx)("h1",{className:"hero__title",children:t}),(0,a.jsx)("p",{className:"hero__description",children:o})]})]}),(0,a.jsx)(n.default,{})]})}},2796:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return u}});var a=t(7437);t(1218);var n=t(4245),r=t(6001),o=t(2265),c=t(1848),l=t(9343),i=t(7753);let m=n.Ry().shape({firstName:n.Z_().nullable().transform((e,s)=>""===e?null:s).matches(/^[a-zA-Z]+$/,"First name should only contain letters"),lastName:n.Z_().nullable().transform((e,s)=>""===e?null:s).matches(/^[a-zA-Z]+$/,"Last name should only contain letters"),email:n.Z_().email("Invalid email").required("Email is required"),subject:n.Z_().required("Subject is required"),enquiry:n.Z_().required("Message is required").max(1e3,"Message cannot exceed 1000 characters"),consent:n.Xg().oneOf([!0],"Required")});function u(){let[e,s]=(0,o.useState)(0),{register:t,handleSubmit:n,formState:{errors:u}}=(0,l.cI)({resolver:(0,i.X)(m)}),{executeRecaptcha:d}=(0,r.CL)(),h=(0,o.useCallback)(async e=>{try{let s=await d("form_submit"),t=await fetch("/api/form-submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:e,token:s})});t.ok?console.log("Form submitted successfully!"):console.error("Form submission error",t.statusText)}catch(e){console.error("Form submission error",e)}},[d]),_=n(e=>{console.log("Submit Handler Called"),h(e)});return(0,a.jsxs)("main",{children:[(0,a.jsx)(c.Z,{image:"images/girls-talking.jpg",title:"Get in Touch",imagePosition:"50% 0%"}),(0,a.jsxs)("section",{className:"section__layout",children:[(0,a.jsx)("h2",{className:"section__heading",children:"Send Us a Message"}),(0,a.jsxs)("form",{onSubmit:_,className:"contact-form",children:[(0,a.jsxs)("div",{className:"contact-form__name-group",children:[(0,a.jsxs)("div",{className:"contact-form__group",children:[(0,a.jsx)("label",{htmlFor:"firstName",className:"contact-form__label",children:"First Name"}),(0,a.jsx)("input",{id:"firstName",className:"contact-form__input",...t("firstName")}),u.firstName&&(0,a.jsx)("p",{className:"contact-form__error",children:u.firstName.message})]}),(0,a.jsxs)("div",{className:"contact-form__group",children:[(0,a.jsx)("label",{htmlFor:"lastName",className:"contact-form__label",children:"Last Name"}),(0,a.jsx)("input",{id:"lastName",className:"contact-form__input",...t("lastName")}),u.lastName&&(0,a.jsx)("p",{className:"contact-form__error",children:u.lastName.message})]})]}),(0,a.jsxs)("div",{className:"contact-form__group",children:[(0,a.jsx)("label",{htmlFor:"email",className:"contact-form__label",children:"Email*"}),(0,a.jsx)("input",{id:"email",className:"contact-form__input",...t("email")}),u.email&&(0,a.jsx)("p",{className:"contact-form__error",children:u.email.message})]}),(0,a.jsxs)("div",{className:"contact-form__group",children:[(0,a.jsx)("label",{htmlFor:"subject",className:"contact-form__label",children:"Subject*"}),(0,a.jsx)("input",{id:"subject",className:"contact-form__input",...t("subject")}),u.subject&&(0,a.jsx)("p",{className:"contact-form__error",children:u.subject.message})]}),(0,a.jsxs)("div",{className:"contact-form__group",children:[(0,a.jsx)("label",{htmlFor:"enquiry",className:"contact-form__label",children:"Your Message*"}),(0,a.jsx)("textarea",{id:"enquiry",className:"contact-form__textarea",...t("enquiry"),onChange:e=>s(e.target.value.length)}),(0,a.jsxs)("div",{className:"contact-form__char-count",children:[e,"/1000"]}),u.enquiry&&(0,a.jsx)("p",{className:"contact-form__error",children:u.enquiry.message})]}),(0,a.jsxs)("div",{className:"contact-form__group",children:[(0,a.jsxs)("label",{className:"contact-form__label",children:[(0,a.jsx)("input",{type:"checkbox",className:"contact-form__checkbox",...t("consent")}),"I consent to being contacted by representatives of Winton Road."]}),u.consent&&(0,a.jsx)("p",{className:"contact-form__error",children:u.consent.message})]}),(0,a.jsxs)("button",{type:"submit",className:"contact-form__submit btn caps",children:["Send Message ",(0,a.jsx)("span",{className:"contact-form__chevron",children:"›"})]}),(0,a.jsx)("p",{children:(0,a.jsxs)("small",{children:["This site is protected by reCAPTCHA and the Google"," ",(0,a.jsx)("a",{href:"https://policies.google.com/privacy",children:"Privacy Policy"})," and"," ",(0,a.jsx)("a",{href:"https://policies.google.com/terms",children:"Terms of Service"})," apply."]})})]})]})]})}},9957:function(){},8193:function(){},1218:function(){}},function(e){e.O(0,[396,688,173,838,56,698,971,23,744],function(){return e(e.s=7845)}),_N_E=e.O()}]);