(this["webpackJsonpproject-3-frontend"]=this["webpackJsonpproject-3-frontend"]||[]).push([[0],{42:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(19),r=a.n(n),l=(a(42),a(7)),i=a(5),o=a(3);var m=a(0);var j=function(e){var t=e.isAuth,a=e.setIsAuth,c=Object(o.f)();return Object(m.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light rounded","aria-label":"Twelfth navbar example",children:Object(m.jsxs)("div",{className:"container-fluid",children:[Object(m.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarsExample10","aria-controls":"navbarsExample10","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(m.jsx)("span",{className:"navbar-toggler-icon"})}),Object(m.jsxs)("div",{className:"collapse navbar-collapse justify-content-md-center",id:"navbarsExample10",children:[Object(m.jsxs)("ul",{className:"navbar-nav",children:[!t&&Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(i.b,{to:"/",className:"nav-link","aria-current":"page",children:"Home "})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(i.b,{to:"/whoweare",className:"nav-link","aria-current":"page",href:"#",children:"Who We Are "})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(i.b,{to:"/jobs",className:"nav-link",children:"Jobs"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(i.b,{to:"/blogs",className:"nav-link",children:"Articles"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(i.b,{to:"/contactus",className:"nav-link",children:"Contact Us"})})]}),t&&Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("button",{className:"btn btn-light",onClick:function(){a(!1),window.localStorage.removeItem("token"),window.localStorage.removeItem("userId"),c.push("/")},children:"Log Out"})})]})]})})},d=a(4),b=a(2),h=a.n(b),x=a(15),u=a.n(x),O="https://techconnectbe.herokuapp.com/api";function p(e){return console.log(e),u.a.post("".concat(O,"/register/"),e)}function f(e){return u.a.post("".concat(O,"/login/"),e)}var g=function(e){var t=e.mailto,a=e.label;return Object(m.jsx)(i.b,{to:"#",onClick:function(e){window.location=t,e.preventDefault()},children:a})};var v=function(e){var t=e.title,a=e.companyName,c=e.jobDescription,s=e.salary;return e.createdAt,Object(m.jsx)("section",{children:Object(m.jsxs)("div",{className:"card text-center",children:[Object(m.jsx)("div",{className:"card-header",children:t}),Object(m.jsxs)("div",{className:"card-body jobbody",children:[Object(m.jsx)("h5",{className:"card-title text-primary",children:a}),Object(m.jsx)("p",{className:"card-text",children:c}),Object(m.jsx)("button",{className:"btn btn-outline-primary btn-md px-5",children:Object(m.jsx)(g,{label:"Apply",mailto:"mailto:no-reply@example.com"})})]}),Object(m.jsxs)("div",{className:"card-footer text-muted text-md-left",children:["Annual Salary \xa3",s]})]})})};var N=function(){return Object(m.jsx)("h2",{className:"title",children:"Oh no, something went wrong \u2639\ufe0f"})};var y=function(){return Object(m.jsx)("p",{children:"Page is loading"})};var w=function(){var e=s.a.useState(null),t=Object(l.a)(e,2),a=t[0],c=t[1],n=s.a.useState(!1),r=Object(l.a)(n,2),i=r[0],o=r[1],j=!a&&!i;return s.a.useEffect((function(){var e=function(){var e=Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("".concat(O,"/jobs/"));case 3:t=e.sent,c(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o(!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(m.jsx)("section",{className:"section",children:Object(m.jsxs)("div",{className:"container",children:[i&&Object(m.jsx)(N,{}),j&&Object(m.jsx)(y,{}),Object(m.jsx)("div",{className:"columns is-multiline jobcard",children:a&&a.map((function(e){return Object(m.jsx)(v,{jobId:e.id,companyName:e.companyName,jobDescription:e.jobDescription,salary:e.salary,createdAt:e.createdAt},e.id)}))})]})})},_=a.p+"static/media/cover.0d6a26b2.jpg";var E=function(){return Object(m.jsxs)("body",{className:"d-flex h-100 text-center text-white bg-dark",children:[Object(m.jsx)("img",{src:_,className:"cover-container d-flex w-100 h-100 p-3 mx-auto flex-column"}),Object(m.jsx)("div",{className:"cover-container d-flex w-100 h-100 p-3 mx-auto flex-column",children:Object(m.jsxs)("main",{className:"px-3",children:[Object(m.jsx)("h1",{children:"Tech-Connect"}),Object(m.jsx)("p",{className:"text-center",children:"Helping you find your career in Tech. Browse through all of our jobs and apply directly from our site. Head over to our articles page to stay up to date with the latest recruitment tips"})]})})]})};var A=function(e){var t=e.title,a=e.content,c=e.image;return Object(m.jsxs)("div",{className:"card mb-3",children:[Object(m.jsx)("img",{src:c,className:"card-img-top",alt:"..."}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h3",{className:"card-title text-md-center",children:t}),Object(m.jsx)("p",{className:"card-text",children:a}),Object(m.jsx)("p",{className:"card-text",children:Object(m.jsx)("small",{className:"text-muted",children:"Last updated 3 mins ago"})})]})]})};var P=function(){var e=s.a.useState(null),t=Object(l.a)(e,2),a=t[0],c=t[1],n=s.a.useState(!1),r=Object(l.a)(n,2),i=r[0],o=r[1],j=!a&&!i;return s.a.useEffect((function(){var e=function(){var e=Object(d.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("".concat(O,"/blogs/"));case 3:t=e.sent,c(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o(!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(m.jsx)("section",{className:"section",children:Object(m.jsxs)("div",{className:"container",children:[i&&Object(m.jsx)(N,{}),j&&Object(m.jsx)(y,{}),Object(m.jsx)("div",{className:"columns is-multiline",children:a&&a.map((function(e){return Object(m.jsx)(A,{blogId:e.id,title:e.title,content:e.content,image:e.image},e.id)}))})]})})},S=a(10),T=a(37),C=a(36),R=a(25),k=(a(69),function(){var e=Object(T.a)(),t=e.register,a=e.handleSubmit,c=e.reset,s=e.formState.errors,n=function(){var e=Object(d.a)(h.a.mark((function e(t){var a,s,n,r,l;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.name,s=t.email,n=t.subject,r=t.message,e.prev=1,l={name:a,email:s,subject:n,message:r},e.next=5,C.a.send(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!1,REACT_APP_SERVICE_ID:"service_hnqaunl",REACT_APP_TEMPLATE_ID:"template_he6xh17",REACT_APP_USER_ID:"user_I7dIaQw2VAvKmZKVdnFa9",REACT_APP_PROD_URL:"https://techconnectbe.herokuapp.com/api"}).REACT_APP_SERVICE_hnqaunl,Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!1,REACT_APP_SERVICE_ID:"service_hnqaunl",REACT_APP_TEMPLATE_ID:"template_he6xh17",REACT_APP_USER_ID:"user_I7dIaQw2VAvKmZKVdnFa9",REACT_APP_PROD_URL:"https://techconnectbe.herokuapp.com/api"}).REACT_APP_TEMPLATE_he6xh17,l,Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!1,REACT_APP_SERVICE_ID:"service_hnqaunl",REACT_APP_TEMPLATE_ID:"template_he6xh17",REACT_APP_USER_ID:"user_I7dIaQw2VAvKmZKVdnFa9",REACT_APP_PROD_URL:"https://techconnectbe.herokuapp.com/api"}).REACT_APP_USER_7dIaQw2VAvKmZKVdnFa9);case 5:c(),Object(R.b)("Form sent!",{position:"bottom-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!1,className:"submit-feedback success",toastId:"notifyToast"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("section",{className:"vh-100 gradient-custom",children:Object(m.jsx)("div",{className:"container py-5 h-100",children:Object(m.jsx)("div",{className:"row d-flex justify-content-center align-items-center h-100",children:Object(m.jsx)("div",{className:"col-12 col-md-8 col-lg-6 col-xl-5",children:Object(m.jsxs)("div",{className:"card bg-light text-black",children:[Object(m.jsx)("div",{className:"card-body p-5 text-center",children:Object(m.jsxs)("form",{id:"contact-form",onSubmit:a(n),noValidate:!0,children:[Object(m.jsxs)("div",{className:"form-outline mb-4",children:[Object(m.jsx)("input",Object(S.a)(Object(S.a)({type:"text",name:"name"},t("name",{required:{value:!0,message:"Please enter your name"},maxLength:{value:30,message:"Please use 30 characters or less"}})),{},{className:"form-control formInput",placeholder:"Name"})),s.name&&Object(m.jsx)("span",{className:"errorMessage",children:s.name.message})]}),Object(m.jsxs)("div",{className:"form-outline mb-4",children:[Object(m.jsx)("input",Object(S.a)(Object(S.a)({type:"email",name:"email"},t("email",{required:!0,pattern:/^[a-zA-Z0-9.!#$%&\u2019*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/})),{},{className:"form-control formInput",placeholder:"Email address"})),s.email&&Object(m.jsx)("span",{className:"errorMessage",children:"Please enter a valid email address"})]}),Object(m.jsxs)("div",{className:"form-outline mb-4",children:[Object(m.jsx)("textarea",Object(S.a)(Object(S.a)({rows:3,name:"message"},t("message",{required:!0})),{},{className:"form-control formInput",placeholder:"Message"})),s.message&&Object(m.jsx)("span",{className:"errorMessage",children:"Please enter a message"})]}),Object(m.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-4",children:"Send"})]})}),Object(m.jsx)(R.a,{})]})})})})})}),I=a.p+"static/media/video.46705111.mp4",D=a.p+"static/media/people.fe656cce.jpg",F=a.p+"static/media/jobs.e01c267f.jpg",L=a.p+"static/media/articles.2f9beb17.jpg";var V=function(){return Object(m.jsxs)("div",{className:"container col-xxl-8 px-4 py-5",children:[Object(m.jsxs)("div",{className:"row flex-lg-row-reverse align-items-center g-5 py-5",id:"#landinghero",children:[Object(m.jsx)("div",{className:"col-10 col-sm-8 col-lg-6",children:Object(m.jsx)("video",{src:I,width:"700",height:"500",className:"d-block mx-lg-auto img-fluid",loop:!0,autoPlay:!0})}),Object(m.jsxs)("div",{className:"col-lg-6",children:[Object(m.jsx)("h1",{className:"display-5 fw-bold lh-1 mb-3",children:"Tech-Connect"}),Object(m.jsx)("p",{className:"lead",children:"Finding your career passions in Tech globally. Register to recieve updates and apply directly to our sought after Tech roles."}),Object(m.jsx)("div",{className:"d-grid gap-2 d-md-flex justify-content-md-start",children:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(i.b,{to:"/register/",children:Object(m.jsx)("button",{type:"button",className:"btn btn-outline-primary btn-lg px-4 me-md-2",children:"Sign up"})}),Object(m.jsx)(i.b,{to:"/login/",children:Object(m.jsx)("button",{type:"button",className:"btn btn-outline-secondary btn-lg px-4",children:"Log in"})})]})})]})]}),Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-lg-4",children:[Object(m.jsx)("img",{src:D,className:"img-thumbnail"}),Object(m.jsx)("h2",{children:"Who We Are"}),Object(m.jsx)("p",{children:"Some representative placeholder content for the three columns of text below the carousel. This is the first column."}),Object(m.jsx)("p",{children:Object(m.jsx)(i.b,{className:"btn btn-outline-primary",to:"/whoweare",children:"View details \xbb"})})]}),Object(m.jsxs)("div",{className:"col-lg-4",children:[Object(m.jsx)("img",{src:F,className:"img-thumbnail"}),Object(m.jsx)("h2",{children:"Browse Job"}),Object(m.jsx)("p",{children:"Another exciting bit of representative placeholder content. This time, weve moved on to the second column."}),Object(m.jsx)("p",{children:Object(m.jsx)(i.b,{className:"btn btn-outline-primary",to:"/jobs",children:"View details \xbb"})})]}),Object(m.jsxs)("div",{className:"col-lg-4",children:[Object(m.jsx)("img",{src:L,className:"img-thumbnail"}),Object(m.jsx)("h2",{children:"Articles"}),Object(m.jsx)("p",{children:"And lastly this, the third column of representative placeholder content."}),Object(m.jsx)("p",{children:Object(m.jsx)(i.b,{className:"btn btn-outline-primary",to:"/blogs",children:"View details \xbb"})})]})]}),Object(m.jsx)("div",{className:"b-example-divider"}),Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("footer",{className:"d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top",children:[Object(m.jsxs)("div",{className:"col-md-4 d-flex align-items-center",children:[Object(m.jsx)("a",{href:"/",className:"mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1",children:Object(m.jsx)("svg",{className:"bi",width:"30",height:"24",children:Object(m.jsx)("use",{xlinkHref:"#bootstrap"})})}),Object(m.jsx)("span",{className:"text-muted",children:"\xa9 2022 Tech-Connect, Inc"})]}),Object(m.jsxs)("ul",{className:"nav col-md-4 justify-content-end list-unstyled d-flex",children:[Object(m.jsx)("li",{className:"ms-3",children:Object(m.jsx)("a",{className:"text-muted",href:"#",children:Object(m.jsx)("svg",{className:"bi",width:"24",height:"24",children:Object(m.jsx)("use",{xlinkHref:"#twitter"})})})}),Object(m.jsx)("li",{className:"ms-3",children:Object(m.jsx)("a",{className:"text-muted",href:"#",children:Object(m.jsx)("svg",{className:"bi",width:"24",height:"24",children:Object(m.jsx)("use",{xlinkHref:"#instagram"})})})}),Object(m.jsx)("li",{className:"ms-3",children:Object(m.jsx)("a",{className:"text-muted",href:"#",children:Object(m.jsx)("svg",{className:"bi",width:"24",height:"24",children:Object(m.jsx)("use",{xlinkHref:"#facebook"})})})})]})]})})]})},H=a(12),K={firstName:"",lastName:"",email:"",username:"",password:"",passwordConfirmation:""};var U=function(){var e=s.a.useState(K),t=Object(l.a)(e,2),a=t[0],c=t[1],n=Object(o.f)(),r=function(e){c(Object(S.a)(Object(S.a)({},a),{},Object(H.a)({},e.target.name,e.target.value)))},j=function(){var e=Object(d.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("form data submitted",a),e.prev=2,e.next=5,p(a);case 5:n.push("/login"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log("registering error");case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("section",{className:"vh-100 bg-image",children:Object(m.jsx)("div",{className:"mask d-flex align-items-center h-100 gradient-custom-3",children:Object(m.jsx)("div",{className:"container h-100",children:Object(m.jsx)("div",{className:"row d-flex justify-content-center align-items-center h-100",children:Object(m.jsx)("div",{className:"col-12 col-md-9 col-lg-7 col-xl-6",children:Object(m.jsx)("div",{className:"card",children:Object(m.jsxs)("div",{className:"card-body p-5",children:[Object(m.jsx)("h2",{className:"text-uppercase text-center text-primary mb-5",children:"Create an account"}),Object(m.jsxs)("form",{onSubmit:j,children:[Object(m.jsxs)("div",{className:"form-outline mb-4",children:[Object(m.jsx)("input",{type:"text",name:"firstName",id:"form3Example1cg",className:"form-control form-control-lg",onChange:r}),Object(m.jsx)("label",{className:"form-label",htmlFor:"form3Example1cg",children:"First Name"})]}),Object(m.jsxs)("div",{className:"form-outline mb-4",children:[Object(m.jsx)("input",{type:"text",name:"lastName",id:"form3Example1cg",className:"form-control form-control-lg",onChange:r}),Object(m.jsx)("label",{className:"form-label",htmlFor:"form3Example1cg",children:"Last Name"})]}),Object(m.jsxs)("div",{className:"form-outline mb-4",children:[Object(m.jsx)("input",{type:"text",name:"username",id:"form3Example1cg",className:"form-control form-control-lg",onChange:r}),Object(m.jsx)("label",{className:"form-label",htmlFor:"form3Example1cg",children:"Username"})]}),Object(m.jsxs)("div",{className:"form-outline mb-4",children:[Object(m.jsx)("input",{type:"email",name:"email",id:"form3Example3cg",className:"form-control form-control-lg",onChange:r}),Object(m.jsx)("label",{className:"form-label",htmlFor:"form3Example3cg",children:"Your Email"})]}),Object(m.jsxs)("div",{className:"form-outline mb-4",children:[Object(m.jsx)("input",{type:"password",name:"password",id:"form3Example4cg",className:"form-control form-control-lg",onChange:r}),Object(m.jsx)("label",{className:"form-label",htmlFor:"form3Example4cg",children:"Password"})]}),Object(m.jsxs)("div",{className:"form-outline mb-4",children:[Object(m.jsx)("input",{type:"password",name:"passwordConfirmation",id:"form3Example4cdg",className:"form-control form-control-lg",onChange:r}),Object(m.jsx)("label",{className:"form-label",htmlFor:"form3Example4cdg",children:"Repeat your password"})]}),Object(m.jsx)("div",{className:"d-flex justify-content-center",children:Object(m.jsx)("button",{type:"submit",className:"btn btn-primary btn btn-lg text-white",children:"Register"})}),Object(m.jsxs)("p",{className:"text-center text-muted mt-5 mb-0",children:["Have already an account?  ",Object(m.jsx)(i.b,{to:"/login",children:Object(m.jsx)("button",{className:"btn btn-outline-primary",children:"Login here"})})]})]})]})})})})})})})};var W=function(e){var t=e.setIsAuth,a=Object(o.f)(),c=s.a.useState({email:"",password:""}),n=Object(l.a)(c,2),r=n[0],j=n[1],b=function(e){j(Object(S.a)(Object(S.a)({},r),{},Object(H.a)({},e.target.name,e.target.value)))},x=function(){var e=Object(d.a)(h.a.mark((function e(c){var s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.prev=1,e.next=4,f(r);case 4:s=e.sent,console.log(s.data),n=s.data.token,window.localStorage.setItem("token",n),console.log("ehllo"),t(!0),console.log("ello"),a.push("/jobs"),console.log("hello"),e.next=16;break;case 14:e.prev=14,e.t0=e.catch(1);case 16:case"end":return e.stop()}var n}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("section",{className:"vh-100 gradient-custom logincard",children:Object(m.jsx)("div",{className:"container py-5 h-100",children:Object(m.jsx)("div",{className:"row d-flex justify-content-center align-items-center h-100",children:Object(m.jsx)("div",{className:"col-12 col-md-8 col-lg-6 col-xl-5",children:Object(m.jsx)("div",{className:"card bg-light text-black",children:Object(m.jsxs)("div",{className:"card-body p-5 text-center",children:[Object(m.jsxs)("div",{className:"mb-md-5 mt-md-4 pb-5",children:[Object(m.jsx)("h2",{className:"fw-bold mb-2 text-uppercase text-primary",children:"Login"}),Object(m.jsx)("p",{className:"text-black-50 mb-5",children:"Please enter your login and password!"}),Object(m.jsx)("div",{className:"form-outline form-black mb-4",children:Object(m.jsxs)("form",{onSubmit:x,children:[Object(m.jsx)("input",{name:"email",id:"typeEmailX",className:"form-control form-control-lg",onChange:b}),Object(m.jsx)("label",{className:"form-label",htmlFor:"email",children:"Email"}),Object(m.jsxs)("div",{className:"form-outline form-black mb-4",children:[Object(m.jsx)("input",{name:"password",type:"password",id:"typePasswordX",className:"form-control form-control-lg",onChange:b}),Object(m.jsx)("label",{className:"form-label",htmlFor:"password",children:"Password"})]}),Object(m.jsx)("p",{className:"small mb-5 pb-lg-2",children:Object(m.jsx)("a",{className:"text-white-50",href:"#!",children:"Forgot password?"})}),Object(m.jsx)("button",{className:"btn btn-outline-primary btn-lg px-5",type:"submit",children:"Login"})]})}),Object(m.jsxs)("div",{className:"d-flex justify-content-center text-center mt-4 pt-1",children:[Object(m.jsx)("a",{href:"#!",className:"text-white",children:Object(m.jsx)("i",{className:"fab fa-facebook-f fa-lg"})}),Object(m.jsx)("a",{href:"#!",className:"text-white",children:Object(m.jsx)("i",{className:"fab fa-twitter fa-lg mx-4 px-2"})}),Object(m.jsx)("a",{href:"#!",className:"text-white",children:Object(m.jsx)("i",{className:"fab fa-google fa-lg"})})]})]}),Object(m.jsx)("div",{children:Object(m.jsxs)("p",{className:"mb-0",children:["Don't have an account? ",Object(m.jsx)(i.b,{to:"/register",className:"text-primary-50 fw-bold",children:"Sign Up"})]})})]})})})})})})};var M=function(){var e=s.a.useState(!1),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(m.jsxs)(i.a,{children:[Object(m.jsx)(j,{isAuth:a,setIsAuth:c}),Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{exact:!0,path:"/",children:Object(m.jsx)(V,{setIsAuth:c})}),Object(m.jsx)(o.a,{path:"/register/",children:Object(m.jsx)(U,{})}),Object(m.jsx)(o.a,{path:"/login/",children:Object(m.jsx)(W,{setIsAuth:c})}),Object(m.jsx)(o.a,{path:"/jobs",children:Object(m.jsx)(w,{})}),Object(m.jsx)(o.a,{path:"/whoweare",children:Object(m.jsx)(E,{})}),Object(m.jsx)(o.a,{path:"/blogs",children:Object(m.jsx)(P,{})}),Object(m.jsx)(o.a,{path:"/contactus",children:Object(m.jsx)(k,{})})]})]})};a(70);r.a.render(Object(m.jsx)(M,{}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.d23b6fa0.chunk.js.map