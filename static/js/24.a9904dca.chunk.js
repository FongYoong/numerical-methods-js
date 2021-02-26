(this["webpackJsonpnumerical-methods-js"]=this["webpackJsonpnumerical-methods-js"]||[]).push([[24],{196:function(e,n,t){e.exports={App:"App_App__-VY2F","App-logo":"App_App-logo__3aKMV","App-logo-spin":"App_App-logo-spin__1Bkve"}},197:function(e,n,t){e.exports={header:"Header_header__1_c6b"}},209:function(e,n){},327:function(e,n,t){"use strict";t.r(n);t.p;var o=t(196),a=t.n(o),i=t(0),r=t.n(i),c=t(69),l=t(58),m=t(48),u=t(15),p=t(324),s=t(274),d=t(275),h=t(276),b=t(213),j=t(212),f=t(219),O=t.n(f),g=t(220),x=t.n(g),y=t(264),v=t(6),z=Object(y.a)((function(e){return{listItem:{paddingLeft:e.spacing(4),transition:"transform 0.2s","&:hover":{"-ms-transform":"scale(1.2)","-webkit-transform":"scale(1.2)",transform:"scale(1.2)"}}}}));var P=function(e){var n=e.categoryPath,t=e.method,o=z();return Object(v.jsxs)(s.a,{divider:!0,component:u.b,button:!0,to:Object(m.c)(n,t.path),className:o.listItem,children:[Object(v.jsx)(d.a,{children:t.completed?Object(v.jsx)(O.a,{style:{color:b.a[500]}}):Object(v.jsx)(x.a,{style:{color:j.a[500]}})}),Object(v.jsx)(h.a,{primary:Object(v.jsx)(p.a,{fontWeight:"fontWeightBold",children:t.name}),primaryTypographyProps:{variant:"button"}})]})},_=t(278),N=t(277),M=t(221),w=t.n(M),F=t(222),k=t.n(F),A=t(223),E=t.n(A);var G=function(e){var n=e.category,t=r.a.useState(!1),o=Object(l.a)(t,2),a=o[0],i=o[1];return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(s.a,{button:!0,onClick:function(){i(!a)},children:[Object(v.jsx)(d.a,{children:Object(v.jsx)(w.a,{})}),Object(v.jsx)(h.a,{primary:Object(v.jsx)(p.a,{fontWeight:"fontWeightBold",children:n.name}),primaryTypographyProps:{variant:"button"}}),a?Object(v.jsx)(k.a,{}):Object(v.jsx)(E.a,{})]}),Object(v.jsx)(N.a,{in:a,timeout:"auto",unmountOnExit:!0,children:Object(v.jsx)(_.a,{component:"div",disablePadding:!0,children:n.methods.map((function(e,t){return Object(v.jsx)(P,{categoryPath:n.path,method:e},t)}))})})]})},I=Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(16)]).then(t.bind(null,283))})),S=Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(17)]).then(t.bind(null,290))})),B=Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(19)]).then(t.bind(null,291))})),D=Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(20)]).then(t.bind(null,292))})),R=[{name:"Nonlinear Equations",path:"nonlinear",methods:[{name:"Bisection",path:"bisection",component:I,completed:!0},{name:"False-Position",path:"false_position",component:S,completed:!0},{name:"Fixed-Point",path:"fixed_point",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(18)]).then(t.bind(null,293))})),completed:!0},{name:"Newton-Rhapson",path:"newton",component:B,completed:!0},{name:"Modified Secant",path:"secant",component:D,completed:!0}]},{name:"Linear Equations",path:"linear",methods:[{name:"Gauss Elimination",path:"gauss",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(4),t.e(28)]).then(t.bind(null,294))})),completed:!0},{name:"Jacobi / Gauss-Seidel Iteration",path:"jacobi_seidel",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(12)]).then(t.bind(null,326))})),completed:!0},{name:"LU Decomposition",path:"lu",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(4),t.e(30)]).then(t.bind(null,295))})),completed:!0},{name:"Singular Value Decomposition",path:"svd",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(4),t.e(27)]).then(t.bind(null,296))})),completed:!1},{name:"QR Decomposition",path:"qr",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(4),t.e(31)]).then(t.bind(null,297))})),completed:!0},{name:"Inverse Matrix",path:"inverse",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(4),t.e(29)]).then(t.bind(null,298))})),completed:!0},{name:"Moore-Penrose Inverse",path:"penrose_inverse",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(4),t.e(26)]).then(t.bind(null,299))})),completed:!1}]},{name:"Eigenvalues / Eigenvectors",path:"eigen",methods:[{name:"Power Method",path:"power",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(13)]).then(t.bind(null,300))})),completed:!0},{name:"Inverse-Power",path:"inverse",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(10)]).then(t.bind(null,301))})),completed:!0},{name:"Shifted Power",path:"shifted",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(11)]).then(t.bind(null,302))})),completed:!0},{name:"Gerschgorin Discs",path:"discs",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(4),t.e(25)]).then(t.bind(null,325))})),completed:!0}]},{name:"Optimisation",path:"optimisation",methods:[{name:"Golden-Section Search",path:"golden_search",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(21)]).then(t.bind(null,303))})),completed:!0},{name:"Parabolic Interpolation",path:"parabolic",component:Object(i.lazy)((function(){return t.e(46).then(t.bind(null,304))})),completed:!1},{name:"Gradient Method",path:"gradient",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(14)]).then(t.bind(null,330))})),completed:!0},{name:"Linear Programming",path:"linear_prog",component:Object(i.lazy)((function(){return t.e(45).then(t.bind(null,305))})),completed:!1}]},{name:"Curve Fitting",path:"curve",methods:[{name:"Linear",path:"linear",component:Object(i.lazy)((function(){return t.e(32).then(t.bind(null,306))})),completed:!1},{name:"Polynomial Regression",path:"poly",component:Object(i.lazy)((function(){return t.e(33).then(t.bind(null,307))})),completed:!1},{name:"Spline Interpolation",path:"spline",component:Object(i.lazy)((function(){return t.e(34).then(t.bind(null,308))})),completed:!1}]},{name:"Fourier Methods",path:"fourier",methods:[{name:"Fast Fourier Transform",path:"fft",component:Object(i.lazy)((function(){return t.e(35).then(t.bind(null,309))})),completed:!1}]},{name:"Numerical Differentiation",path:"differential",methods:[{name:"Finite Difference",path:"finite",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(2),t.e(3),t.e(5),t.e(22)]).then(t.bind(null,310))})),completed:!0},{name:"Multivariable",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(2),t.e(3),t.e(5),t.e(23)]).then(t.bind(null,311))})),completed:!1}]},{name:"Numerical integration",path:"integral",methods:[{name:"Midpoint",path:"midpoint",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(15)]).then(t.bind(null,312))})),completed:!0},{name:"Trapezoidal",path:"trapezoidal",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(2),t.e(3),t.e(5),t.e(39)]).then(t.bind(null,313))})),completed:!1},{name:"Simpson's Method",path:"simpson",component:Object(i.lazy)((function(){return t.e(38).then(t.bind(null,314))})),completed:!1},{name:"Gauss Quadrature",path:"quadrature",component:Object(i.lazy)((function(){return t.e(37).then(t.bind(null,315))})),completed:!1},{name:"Monte Carlo Integration",path:"monte_carlo",component:Object(i.lazy)((function(){return t.e(36).then(t.bind(null,316))})),completed:!1}]},{name:"Ordinary Differential Equations",path:"ode",methods:[{name:"Euler",path:"euler",component:Object(i.lazy)((function(){return t.e(40).then(t.bind(null,317))})),completed:!1},{name:"Midpoint",path:"midpoint",component:Object(i.lazy)((function(){return t.e(41).then(t.bind(null,318))})),completed:!1},{name:"Runge-Kutta",path:"runge",component:Object(i.lazy)((function(){return t.e(44).then(t.bind(null,319))})),completed:!1},{name:"Multistep",path:"multistep",component:Object(i.lazy)((function(){return t.e(42).then(t.bind(null,320))})),completed:!1},{name:"Predictor-Corrector",path:"predictor",component:Object(i.lazy)((function(){return t.e(43).then(t.bind(null,321))})),completed:!1}]}],q=t(269),L=t(279),T=t(13),W=Object(y.a)((function(e){return{"@global":{"@keyframes gradient":{"0%":{"background-position":"0% 50%"},"50%":{"background-position":"100% 50%"},"100%":{"background-position":"0% 50%"}}},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,margin:e.spacing(1),transition:"transform 0.2s","&:hover":{background:"linear-gradient(45deg, #cbffbb, #bbffe0, #bff4ff, #ffefd0)","background-size":"400% 400%",animation:"$gradient 5s ease infinite"}}}}));var C=function(){Object(i.useEffect)((function(){document.title="Numerical Methods Web Demo"}));var e=W();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(c.a,{methodName:""}),Object(v.jsx)(T.c,{duration:500,triggerOnce:!0,children:Object(v.jsx)(L.a,{container:!0,spacing:1,children:R.map((function(n,t){return Object(v.jsx)(L.a,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4,children:Object(v.jsx)(q.a,{className:e.paper,children:Object(v.jsx)(G,{category:n,methods:n.methods})})},t)}))})})]})};var H=function(){return Object(v.jsx)("p",{children:"Not Found!"})},J=t(280),V=t(281),K=t(1),Q=Object(y.a)((function(e){return{root:{flexGrow:1}}}));n.default=function(){var e=Q();return Object(v.jsxs)("div",{className:a.a.App,children:[Object(v.jsx)(J.a,{}),Object(v.jsx)(V.a,{children:Object(v.jsx)("div",{className:e.root,children:Object(v.jsxs)(K.c,{children:[Object(v.jsx)(K.a,{exact:!0,path:Object(m.c)(),children:Object(v.jsx)(C,{})}),R.map((function(e,n){return e.methods.map((function(t,o){return Object(v.jsx)(K.a,{exact:!0,path:Object(m.c)(e.path,t.path),component:function(){return Object(v.jsx)(t.component,{methodName:t.name})}},n+o)}))})).reduce((function(e,n){return e.concat(n)}),[]),Object(v.jsx)(K.a,{component:H})]})})})]})}},48:function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return i})),t.d(n,"e",(function(){return r})),t.d(n,"c",(function(){return c})),t.d(n,"d",(function(){return l}));var o=t(133);function a(e){return e=parseFloat(e),Object(o.pc)(e,{precision:4})}function i(e){return Object(o.pc)(e,{precision:6})}function r(e){return e.toTex({precision:4,implicit:"hide"})}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e?"/".concat(e,"/").concat(n):"/"}function l(e){return!!e&&(e.hasOwnProperty("value")?!!e.value:!!e.hasOwnProperty("implicit"))}},69:function(e,n,t){"use strict";t(197),t(0);var o=t(264),a=t(268),i=t(271),r=t(273),c=t(272),l=t(216),m=t.n(l),u=t(218),p=t.n(u),s=t(15),d=t(13),h=t(48),b=t(6),j=Object(o.a)((function(e){return{root:{flexGrow:1},homeButton:{marginRight:e.spacing(0)},githubButton:{marginRight:e.spacing(0)},title:{}}}));n.a=function(e){var n=e.methodName,t=j(),o=n||"Numerical Methods";return Object(b.jsx)("div",{className:t.root,children:Object(b.jsx)(a.a,{position:"static",children:Object(b.jsxs)(i.a,{children:[Object(b.jsx)(c.a,{component:s.b,to:Object(h.c)(),edge:"start",className:t.homeButton,color:"inherit","aria-label":"Home",children:Object(b.jsx)(m.a,{})}),Object(b.jsx)(c.a,{rel:"noopener noreferrer",href:"https://github.com/FongYoong/numerical-methods-js",target:"_blank",edge:"start",className:t.githubButton,color:"inherit","aria-label":"GitHub",children:Object(b.jsx)(p.a,{})}),Object(b.jsx)(d.a,{children:Object(b.jsx)(r.a,{variant:"h5",className:t.title,children:o})})]})})})}}}]);
//# sourceMappingURL=24.a9904dca.chunk.js.map