(this["webpackJsonpnumerical-methods-js"]=this["webpackJsonpnumerical-methods-js"]||[]).push([[19],{224:function(e,n,t){e.exports={App:"App_App__-VY2F","App-logo":"App_App-logo__3aKMV","App-logo-spin":"App_App-logo-spin__1Bkve"}},225:function(e,n,t){e.exports={header:"Header_header__1_c6b"}},332:function(e,n){},46:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return i})),t.d(n,"g",(function(){return r})),t.d(n,"d",(function(){return c})),t.d(n,"e",(function(){return l})),t.d(n,"f",(function(){return d})),t.d(n,"c",(function(){return m}));var a=t(371);function o(e){return e=parseFloat(e),Object(a.pc)(Object(a.me)(e,10),{precision:5})}function i(e){return Object(a.pc)(Object(a.me)(e,10),{precision:6})}function r(e){return e.toTex({precision:4,implicit:"hide"})}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e?"/".concat(e,"/").concat(n):"/"}function l(e){return!!e&&(e.hasOwnProperty("value")?void 0!==e.value:!!e.hasOwnProperty("implicit")||(!!(e.hasOwnProperty("args")&&e.args.length>0)||!(!e.hasOwnProperty("name")||d.includes(e.name))))}var d=["cos","sin","e"],m={2:{c:[1,1],x:[-.57735027,.57735027]},3:{c:[.5555556,.8888889,.5555556],x:[-.77459667,0,.77459667]},4:{c:[.3478548,.6521452,.6521452,.3478548],x:[-.86113631,-.33998104,.33998104,.86113631]},5:{c:[.2369269,.4786287,.5688889,.4786287,.2369269],x:[-.90617985,-.53846931,0,.53846931,.90617985]},6:{c:[.1713245,.3607616,.4679139,.4679139,.3607616,.1713245],x:[-.93246951,-.66120938,-.23861919,.23861919,.66120938,.93246951]}}},462:function(e,n,t){"use strict";t.r(n);t.p;var a=t(224),o=t.n(a),i=t(0),r=t.n(i),c=t(63),l=t(43),d=t(46),m=t(15),s=t(465),u=t(420),p=t(421),b=t(422),h=t(317),j=t(316),f=t(351),O=t.n(f),g=t(352),x=t.n(g),w=t(408),y=t(6),v=Object(w.a)((function(e){return{listItem:{paddingLeft:e.spacing(4),transition:"transform 0.2s","&:hover":{"-ms-transform":"scale(1.2)","-webkit-transform":"scale(1.2)",transform:"scale(1.2)"}}}}));var P=function(e){var n=e.categoryPath,t=e.method,a=v();return Object(y.jsxs)(u.a,{divider:!0,component:m.b,button:!0,to:Object(d.d)(n,t.path),className:a.listItem,children:[Object(y.jsx)(p.a,{children:t.completed?Object(y.jsx)(O.a,{style:{color:h.a[500]}}):Object(y.jsx)(x.a,{style:{color:j.a[500]}})}),Object(y.jsx)(b.a,{primary:Object(y.jsx)(s.a,{fontWeight:"fontWeightBold",children:t.name}),primaryTypographyProps:{variant:"button"}})]})},k=t(424),z=t(423),N=t(353),_=t.n(N),M=t(354),S=t.n(M),F=t(355),A=t.n(F);var B=function(e){var n=e.category,t=r.a.useState(!1),a=Object(l.a)(t,2),o=a[0],i=a[1];return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(u.a,{button:!0,onClick:function(){i(!o)},children:[Object(y.jsx)(p.a,{children:Object(y.jsx)(_.a,{})}),Object(y.jsx)(b.a,{primary:Object(y.jsx)(s.a,{fontWeight:"fontWeightBold",children:n.name}),primaryTypographyProps:{variant:"button"}}),o?Object(y.jsx)(S.a,{}):Object(y.jsx)(A.a,{})]}),Object(y.jsx)(z.a,{in:o,timeout:"auto",unmountOnExit:!0,children:Object(y.jsx)(k.a,{component:"div",disablePadding:!0,children:n.methods.map((function(e,t){return Object(y.jsx)(P,{categoryPath:n.path,method:e},t)}))})})]})},E=t.p+"static/media/bisection.62453802.md",I=t.p+"static/media/falsePosition.eea28a7c.md",C=t.p+"static/media/fixedPoint.fc3d9632.md",D=t.p+"static/media/newton.f6824862.md",G=t.p+"static/media/secant.fb2dd8a1.md",q=t.p+"static/media/gauss.f12124d6.md",T=t.p+"static/media/jacobiSeidel.fcd35c69.md",H=t.p+"static/media/lu.b15ab16d.md",R=t.p+"static/media/qr.fb01abd9.md",W=t.p+"static/media/svd.373a34d9.md",L=t.p+"static/media/inverse.18e0e399.md",J=t.p+"static/media/penrose.54b75036.md",V=t.p+"static/media/power.07542407.md",K=t.p+"static/media/inversePower.bed9e4d0.md",Q=t.p+"static/media/shiftedPower.c07f4a4f.md",Y=t.p+"static/media/discs.09ba8ef3.md",U=t.p+"static/media/goldenSearch.a3ca5a39.md",$=t.p+"static/media/gradient.d5eadd03.md",X=t.p+"static/media/finite.41788aa8.md",Z=t.p+"static/media/midpoint.6861cf8c.md",ee=t.p+"static/media/trapezoidal.724d6224.md",ne=t.p+"static/media/simpson.89fe5dea.md",te=t.p+"static/media/quadrature.aa46b5e6.md",ae=t.p+"static/media/monteCarlo.49ab02dd.md",oe=t.p+"static/media/euler.56c5f3fe.md",ie=t.p+"static/media/taylor.a53ccbaa.md",re=t.p+"static/media/runge.4b85b1cd.md",ce=t.p+"static/media/multistep.6dfd7fbb.md",le=t.p+"static/media/system.2ebb422c.md",de=t.p+"static/media/shooting.56182871.md",me=t.p+"static/media/finiteDiff.abc6a29a.md",se=Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(26)]).then(t.bind(null,429))})),ue=Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(27)]).then(t.bind(null,432))})),pe=Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(29)]).then(t.bind(null,433))})),be=Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(30)]).then(t.bind(null,434))})),he=Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(28)]).then(t.bind(null,435))})),je=Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(4),t.e(39)]).then(t.bind(null,471))})),fe=Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(4),t.e(20)]).then(t.bind(null,436))})),Oe=Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(4),t.e(41)]).then(t.bind(null,437))})),ge=Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(4),t.e(5),t.e(36)]).then(t.bind(null,438))})),xe=[{name:"Nonlinear Equations",path:"nonlinear",methods:[{name:"Bisection",path:"bisection",component:se,completed:!0,markdown:E},{name:"False-Position",path:"false_position",component:ue,completed:!0,markdown:I},{name:"Fixed-Point",path:"fixed_point",component:he,completed:!0,markdown:C},{name:"Newton-Rhapson",path:"newton",component:pe,completed:!0,markdown:D},{name:"Modified Secant",path:"secant",component:be,completed:!0,markdown:G}]},{name:"Linear Equations",path:"linear",methods:[{name:"Gauss Elimination",path:"gauss",component:je,completed:!0,markdown:q},{name:"Jacobi / Gauss-Seidel Iteration",path:"jacobi_seidel",component:fe,completed:!0,markdown:T},{name:"LU Decomposition",path:"lu",component:Oe,completed:!0,markdown:H},{name:"QR Decomposition",path:"qr",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(4),t.e(42)]).then(t.bind(null,439))})),completed:!0,markdown:R},{name:"Inverse Matrix",path:"inverse",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(4),t.e(40)]).then(t.bind(null,440))})),completed:!0,markdown:L},{name:"Singular Value Decomposition",path:"svd",component:ge,completed:!0,markdown:W},{name:"Moore-Penrose Inverse",path:"penrose_inverse",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(4),t.e(5),t.e(35)]).then(t.bind(null,441))})),completed:!0,markdown:J}]},{name:"Eigenvalues / Eigenvectors",path:"eigen",methods:[{name:"Power Method",path:"power",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(4),t.e(34)]).then(t.bind(null,442))})),completed:!0,markdown:V},{name:"Inverse-Power",path:"inverse",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(4),t.e(32)]).then(t.bind(null,443))})),completed:!0,markdown:K},{name:"Shifted Inverse-Power",path:"shifted",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(4),t.e(33)]).then(t.bind(null,444))})),completed:!0,markdown:Q},{name:"Gerschgorin Discs",path:"discs",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(4),t.e(5),t.e(22)]).then(t.bind(null,445))})),completed:!0,markdown:Y}]},{name:"Optimisation",path:"optimisation",methods:[{name:"Golden-Section Search",path:"golden_search",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(31)]).then(t.bind(null,446))})),completed:!0,markdown:U},{name:"Gradient Method",path:"gradient",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(18)]).then(t.bind(null,472))})),completed:!0,markdown:$}]},{name:"Numerical Differentiation",path:"differential",methods:[{name:"Finite Difference",path:"finite",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(2),t.e(3),t.e(17)]).then(t.bind(null,447))})),completed:!0,markdown:X},{name:"Multivariable",path:"multivariable",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(37)]).then(t.bind(null,448))})),completed:!1}]},{name:"Numerical integration",path:"integral",methods:[{name:"Midpoint",path:"midpoint",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(23)]).then(t.bind(null,449))})),completed:!0,markdown:Z},{name:"Trapezoidal",path:"trapezoidal",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(25)]).then(t.bind(null,450))})),completed:!0,markdown:ee},{name:"Simpson's Method",path:"simpson",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(24)]).then(t.bind(null,451))})),completed:!0,markdown:ne},{name:"Gauss Quadrature",path:"quadrature",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(43)]).then(t.bind(null,466))})),completed:!0,markdown:te},{name:"Monte Carlo Integration",path:"monte_carlo",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(21)]).then(t.bind(null,452))})),completed:!0,markdown:ae}]},{name:"Ordinary Differential Equations",path:"ode",methods:[{name:"Euler's Method",path:"euler",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(12)]).then(t.bind(null,453))})),completed:!0,markdown:oe},{name:"Taylor Series Method",path:"taylor",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(16)]).then(t.bind(null,454))})),completed:!0,markdown:ie},{name:"4th Order Runge-Kutta",path:"runge",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(15)]).then(t.bind(null,455))})),completed:!0,markdown:re},{name:"Adams-Moulton",path:"multistep",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(14)]).then(t.bind(null,456))})),completed:!0,markdown:ce},{name:"1st Order Systems of Equations",path:"system",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(11)]).then(t.bind(null,457))})),completed:!0,markdown:le},{name:"2nd Order Shooting Method",path:"shooting",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(10)]).then(t.bind(null,458))})),completed:!0,markdown:de},{name:"2nd Order Finite Difference",path:"finite_diff",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(13)]).then(t.bind(null,459))})),completed:!0,markdown:me}]},{name:"Fourier Methods",path:"fourier",methods:[{name:"Fast Fourier Transform",path:"fft",component:Object(i.lazy)((function(){return Promise.all([t.e(0),t.e(38)]).then(t.bind(null,460))})),completed:!1}]}],we=t(416),ye=t(425),ve=t(13),Pe=Object(w.a)((function(e){return{"@global":{"@keyframes gradient":{"0%":{"background-position":"0% 50%"},"50%":{"background-position":"100% 50%"},"100%":{"background-position":"0% 50%"}}},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,margin:e.spacing(1),transition:"transform 0.2s","&:hover":{background:"linear-gradient(45deg, #cbffbb, #bbffe0, #bff4ff, #ffefd0)","background-size":"400% 400%",animation:"$gradient 5s ease infinite"}}}}));var ke=function(){Object(i.useEffect)((function(){document.title="Numerical Methods Web Demo"}));var e=Pe();return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(c.a,{methodName:""}),Object(y.jsx)(ve.c,{duration:500,triggerOnce:!0,children:Object(y.jsx)(ye.a,{container:!0,spacing:1,children:xe.map((function(n,t){return Object(y.jsx)(ye.a,{item:!0,xs:12,sm:6,md:4,lg:4,xl:4,children:Object(y.jsx)(we.a,{className:e.paper,children:Object(y.jsx)(B,{category:n,methods:n.methods})})},t)}))})})]})};var ze=function(){return Object(y.jsx)("p",{children:"Not Found!"})},Ne=t(426),_e=t(427),Me=t(1),Se=Object(w.a)((function(e){return{root:{flexGrow:1}}}));n.default=function(){var e=Se();return Object(y.jsxs)("div",{className:o.a.App,children:[Object(y.jsx)(Ne.a,{}),Object(y.jsx)(_e.a,{children:Object(y.jsx)("div",{className:e.root,children:Object(y.jsxs)(Me.c,{children:[Object(y.jsx)(Me.a,{exact:!0,path:Object(d.d)(),children:Object(y.jsx)(ke,{})}),xe.map((function(e,n){return e.methods.map((function(t,a){return Object(y.jsx)(Me.a,{exact:!0,path:Object(d.d)(e.path,t.path),component:function(){return Object(y.jsx)(t.component,{methodName:t.name,markdown:t.markdown})}},n+a)}))})).reduce((function(e,n){return e.concat(n)}),[]),Object(y.jsx)(Me.a,{component:ze})]})})})]})}},63:function(e,n,t){"use strict";var a=t(43),o=t(98),i=t(44),r=(t(225),t(0)),c=t.n(r),l=t(403),d=t(13),m=t(226),s=t.n(m),u=t(302),p=t.n(u),b=t(50),h=(t(51),t(6)),j=function(e){var n=e.markdown,t=c.a.useState(""),o=Object(a.a)(t,2),i=o[0],r=o[1];return c.a.useEffect((function(){fetch(n).then((function(e){return e.text()})).then((function(e){r(e)}))})),Object(h.jsxs)(h.Fragment,{children:[i&&Object(h.jsx)(d.a,{children:Object(h.jsx)(s.a,{plugins:[p.a],renderers:{math:function(e){var n=e.value;return Object(h.jsx)(b.a,{block:!0,children:n})},inlineMath:function(e){var n=e.value;return Object(h.jsx)(b.a,{children:n})}},children:i,escapeHtml:!0})}),!i&&Object(h.jsx)(d.a,{children:Object(h.jsx)(l.a,{variant:"rect",width:"10em",height:"4em",animation:"wave"})})]})},f=t(408),O=t(36),g=t(415),x=t(417),w=t(411),y=t(469),v=t(410),P=t(413),k=t(409),z=t(474),N=t(414),_=t(412),M=t(349),S=t.n(M),F=t(348),A=t.n(F),B=t(350),E=t.n(B),I=t(97),C=t.n(I),D=t(15),G=t(46),q=Object(f.a)((function(e){return{root:{flexGrow:1},homeButton:{marginRight:e.spacing(0)},githubButton:{marginRight:e.spacing(0)},infoButton:{marginLeft:e.spacing(.5)}}})),T=c.a.forwardRef((function(e,n){return Object(h.jsx)(k.a,Object(i.a)({direction:"up",ref:n},e))})),H=Object(O.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){var n=e.children,t=e.classes,a=e.onClose,r=Object(o.a)(e,["children","classes","onClose"]);return Object(h.jsxs)(v.a,Object(i.a)(Object(i.a)({disableTypography:!0,className:t.root},r),{},{children:[Object(h.jsx)(w.a,{variant:"h6",children:n}),a?Object(h.jsx)(_.a,{"aria-label":"close",className:t.closeButton,onClick:a,children:Object(h.jsx)(C.a,{})}):null]}))})),R=Object(O.a)((function(e){return{root:{overflow:"visible",padding:e.spacing(2)}}}))(P.a);function W(e){var n=e.children,t=e.window,a=Object(N.a)({target:t?t():void 0});return Object(h.jsx)(k.a,{appear:!1,direction:"down",in:!a,children:n})}n.a=function(e){var n=e.methodName,t=e.markdown,o=q(),i=n||"Numerical Methods",r=c.a.useState(!1),l=Object(a.a)(r,2),m=l[0],s=l[1],u=function(){s(!1)};return Object(h.jsxs)("div",{className:o.root,children:[Object(h.jsx)(W,{children:Object(h.jsx)(g.a,{children:Object(h.jsxs)(x.a,{children:[Object(h.jsx)(z.a,{arrow:!0,title:"GitHub",placement:"bottom",children:Object(h.jsx)(_.a,{rel:"noopener noreferrer",href:"https://github.com/FongYoong/numerical-methods-js",target:"_blank",edge:"start",className:o.githubButton,color:"inherit","aria-label":"GitHub",children:Object(h.jsx)(A.a,{})})}),Object(h.jsx)(z.a,{arrow:!0,title:"Home",placement:"bottom",children:Object(h.jsx)(_.a,{component:D.b,to:Object(G.d)(),edge:"start",className:o.homeButton,color:"inherit","aria-label":"Home",children:Object(h.jsx)(S.a,{})})}),Object(h.jsx)(d.a,{children:Object(h.jsx)(w.a,{variant:"h6",className:o.title,children:i})}),n&&t&&Object(h.jsx)(z.a,{arrow:!0,title:"Info",placement:"bottom",children:Object(h.jsx)(_.a,{onClick:function(){s(!0)},className:o.infoButton,edge:"start",color:"inherit","aria-label":"Info",children:Object(h.jsx)(E.a,{})})})]})})}),Object(h.jsx)(x.a,{}),Object(h.jsxs)(y.a,{open:m,onClose:u,TransitionComponent:T,children:[Object(h.jsx)(H,{onClose:u,children:"Info"}),Object(h.jsx)(R,{dividers:!0,children:Object(h.jsx)(j,{markdown:t})})]})]})}}}]);
//# sourceMappingURL=19.63e0b657.chunk.js.map