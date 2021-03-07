(this["webpackJsonpnumerical-methods-js"]=this["webpackJsonpnumerical-methods-js"]||[]).push([[38],{453:function(e,t,a){"use strict";a.r(t);var n,r,i,c,s,l,o,j=a(41),b=a(47),u=a(44),d=a(45),h=a(0),x=a(64),O=a(63),p=a(54),m=a(92),f=a(480),g=(a(49),a(48)),v=a(423),y=a(418),w=a(446),S=a(449),N=a(167),C=a(168),I=a(444),E=a(481),k=a(170),X=a(483),R=a(493),T=a(435),A=a(450),L=a(67),V=a.n(L),F=a(69),M=a(443),P=a(13),D=a(111),B=a(432),z=a(429),G=a(6),_=[{target:".function-input",title:"Function",content:"Type a math function which only has the variable x. cos(x), sin(x) and e^x are supported.",disableBeacon:!0},{target:".perturbation-input",title:"Perturbation",content:"Specify the perturbation fraction. Higher values produce a better approximation."},{target:".iteration-input",title:"Iterations",content:"Specify the number of iterations to apply the modified secant method."},{target:".initialX-input",title:"Initial x value",content:"Specify the initial/starting value of x."},{target:".results",title:"Results",content:"The results are shown here."},{target:".iteration-slider",title:"Iteration slider",content:"Change the slider to view the result of any iteration."},{target:".step-math",title:"Steps",content:"The steps for each iteration are shown here."},{target:".graph-button",title:"View graph",content:"Click this to visualise the results."}],q=Object(z.a)((function(e){return{paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.primary,margin:e.spacing(1)},container:{"& > *":{margin:e.spacing(1)}},card:{margin:e.spacing(.5)},cardContent:{overflow:"auto","& > *":{margin:e.spacing(.5)}},fab:{position:"fixed",bottom:e.spacing(4),right:e.spacing(2)}}}));function H(e){var t,a,n=e.params,r=q(),i=Object(h.useState)(1),x=Object(u.a)(i,2),m=x[0],f=x[1],y=n.results[m-1];if(m>n.iterations)f(n.iterations);else{var S=String.raw(c||(c=Object(b.a)(["x_{","}"])),m-1),E=String.raw(s||(s=Object(b.a)([""," + delta cdot ",""],[""," + \\delta \\cdot ",""])),S,S),T=String.raw(l||(l=Object(b.a)(["x_{","}"])),m);t=String.raw(o||(o=Object(b.a)(["\n        displaystyle\n        \begin{array}{l}\n        \begin{array}{lcl}\n        \\ "," &=& ","\n        \\ "," &=& ","\n        \\ f(",") &=& ","\n        \\ f(",") &=& ","\n        \\ "," &=& "," - \frac{delta cdot "," cdot f(",")}{f(",") - f(",")}\n        \\              &=& ","\n        end{array}\n        \\\n        \begin{array}{lcl}\n        \\ Error &=& |"," - ","|\n        \\       &=& |","|\n        end{array}\n        end{array}\n        "],["\n        \\displaystyle\n        \\begin{array}{l}\n        \\begin{array}{lcl}\n        \\\\ "," &=& ","\n        \\\\ "," &=& ","\n        \\\\ f(",") &=& ","\n        \\\\ f(",") &=& ","\n        \\\\ "," &=& "," - \\frac{\\delta \\cdot "," \\cdot f(",")}{f(",") - f(",")}\n        \\\\              &=& ","\n        \\end{array}\n        \\\\\n        \\begin{array}{lcl}\n        \\\\ Error &=& |"," - ","|\n        \\\\       &=& |","|\n        \\end{array}\n        \\end{array}\n        "])),S,Object(d.a)(y.previousX),E,Object(d.a)(y.perturbedX),S,Object(d.a)(y.funcResult),E,Object(d.a)(y.funcResult2),T,S,S,S,E,S,Object(d.a)(y.newX),T,S,Object(d.a)(y.errorX)),a=function(e,t){e.current.setExpression({id:"function",color:p.Colors.BLUE,latex:n.functionLatex}),e.current.setExpression({id:"derivative",color:p.Colors.GREEN,lineStyle:p.Styles.DOTTED,latex:"(y-".concat(t.funcResult,")/(x-").concat(t.previousX,")=").concat((t.funcResult2-t.funcResult)/(n.perturbation*t.previousX))}),e.current.setExpression({id:"initialX",color:p.Colors.ORANGE,pointStyle:p.Styles.POINT,label:"initialX",showLabel:!0,latex:"(".concat(t.previousX,", ").concat(t.funcResult,")")}),e.current.setExpression({id:"root",color:p.Colors.RED,pointStyle:p.Styles.POINT,label:"Root",showLabel:!0,latex:"(".concat(t.newX,", 0)")})}}var A=Object(B.a)(Object(D.a)().breakpoints.down("sm"));return Object(G.jsxs)(w.a,{className:r.container,children:[Object(G.jsx)(M.a,{in:false,children:Object(G.jsx)(k.a,{severity:"error",children:""})}),Object(G.jsx)(M.a,{in:!0,children:Object(G.jsxs)(I.a,{className:"results",container:!0,direction:A?"column":"row",alignItems:"center",justify:"space-evenly",children:[Object(G.jsx)(I.a,{xs:!0,item:!0,className:"iteration-slider",children:Object(G.jsx)(P.b,{direction:"left",triggerOnce:!0,children:Object(G.jsx)(X.a,{id:"iteration-slider",height:A?null:"20rem",width:A?"70vw":null,children:Object(G.jsx)(R.a,{orientation:A?"horizontal":"vertical",onChange:function(e,t){return f(t)},defaultValue:1,"aria-labelledby":"discrete-slider-small-steps",step:1,marks:!0,min:1,max:n.iterations,valueLabelDisplay:"on"})})})}),Object(G.jsx)(I.a,{xs:!0,item:!0,container:!0,spacing:1,direction:"column",alignItems:"center",justify:"center",children:Object(G.jsx)(I.a,{xs:!0,item:!0,className:"step-math",children:Object(G.jsx)(P.c,{duration:500,triggerOnce:!0,children:Object(G.jsx)(N.a,{className:r.card,children:Object(G.jsxs)(C.a,{className:r.cardContent,children:[Object(G.jsxs)(v.a,{variant:"h6",children:["Iteration ",m,":"]}),Object(G.jsx)(g.a,{math:t,block:!0})]})})})})}),Object(G.jsx)(I.a,{xs:!0,item:!0,className:"graph-button",children:Object(G.jsx)(P.b,{direction:"right",triggerOnce:!0,children:Object(G.jsx)(O.a,{params:Object(j.a)({currentIteration:m,graphCallback:a,smallScreen:A},n)})})})]})})]})}Object(m.addStyles)(),t.default=function(e){var t=e.methodName,a=e.markdown;Object(h.useEffect)((function(){document.title=t}));var c,s=q(),l=Object(h.useState)(String.raw(n||(n=Object(b.a)(["x-cosleft( x\right)"],["x-\\cos\\left( x\\right)"])))),o=Object(u.a)(l,2),j=o[0],O=o[1],p=Object(h.useState)(""),X=Object(u.a)(p,2),R=X[0],L=X[1],D=!1,B="";try{(c=Object(f.b)(R)).traverse((function(e,t,a){if("SymbolNode"===e.type&&!d.f.includes(e.name)&&"x"!==e.name)throw"variableName"}))}catch(Se){D=!0,B="variableName"===Se?"Only x variable is allowed.":"Invalid equation!"}var z=Object(h.useState)(.01),J=Object(u.a)(z,2),U=J[0],W=J[1],K=!1,Q="";U<=0&&(K=!0,Q="Perturbation must be a positive integer!");var Y=Object(h.useState)(10),Z=Object(u.a)(Y,2),$=Z[0],ee=Z[1],te=!1,ae="";(!Number.isInteger($)||$<=0)&&(te=!0,ae="Iterations must be a positive integer!");var ne=Object(h.useState)(3.5),re=Object(u.a)(ne,2),ie=re[0],ce=re[1],se=!1,le="";isNaN(ie)&&(se=!0,le="Initial x must be a number!");var oe=D||K||te||se,je=!1,be=[];if(Object(d.e)(c)&&!oe){je=!0;for(var ue=0;ue<$;ue++){var de=0===ue?ie:be[ue-1].newX,he=de*(1+U),xe=void 0,Oe=void 0;try{xe=c.evaluate({x:de}),Oe=c.evaluate({x:he})}catch(Ne){oe=!0,D=!0,B="Only variable x is allowed!",je=!1;break}var pe=de-U*de*xe/(Oe-xe),me=Math.abs(pe-de);be.push({previousX:de,perturbedX:he,funcResult:xe,funcResult2:Oe,newX:pe,errorX:me})}}var fe=Object(h.useState)(!1),ge=Object(u.a)(fe,2),ve=ge[0],ye=ge[1],we={functionLatex:j,perturbation:U,iterations:$,results:be};return Object(G.jsxs)(G.Fragment,{children:[Object(G.jsx)(x.a,{methodName:t,markdown:a}),Object(G.jsx)(y.a,{className:s.paper,children:Object(G.jsx)(w.a,{className:s.container,children:Object(G.jsxs)(P.c,{duration:500,triggerOnce:!0,cascade:!0,children:[Object(G.jsxs)(I.a,{container:!0,spacing:1,direction:"row",alignItems:"center",justify:"center",children:[Object(G.jsx)(I.a,{xs:!0,item:!0,className:"function-input",children:Object(G.jsx)(N.a,{className:s.card,children:Object(G.jsxs)(C.a,{className:s.cardContent,children:[Object(G.jsx)(v.a,{variant:"h6",children:"Function, f(x):"}),Object(G.jsx)(m.EditableMathField,{disabled:!1,latex:j,onChange:function(e){L(e.text()),O(e.latex())},mathquillDidMount:function(e){L(e.text())}}),Object(G.jsx)(M.a,{in:D,children:Object(G.jsx)(k.a,{severity:"error",children:B})})]})})}),Object(G.jsx)(I.a,{xs:!0,item:!0,className:"perturbation-input",children:Object(G.jsx)(N.a,{className:s.card,children:Object(G.jsxs)(C.a,{className:s.cardContent,children:[Object(G.jsxs)(v.a,{variant:"h6",children:["Perturbation fraction, ",Object(G.jsx)(g.a,{math:String.raw(r||(r=Object(b.a)(["delta"],["\\delta"])))}),":"]}),Object(G.jsx)(E.a,{disabled:!1,type:"number",onChange:function(e){return W(parseFloat(e.target.value))},error:K,label:K?"Error":"",defaultValue:U.toString(),helperText:Q,variant:"outlined"})]})})})]}),Object(G.jsxs)(I.a,{container:!0,spacing:1,direction:"row",alignItems:"center",justify:"center",children:[Object(G.jsx)(I.a,{xs:!0,item:!0,className:"iteration-input",children:Object(G.jsx)(N.a,{className:s.card,children:Object(G.jsxs)(C.a,{className:s.cardContent,children:[Object(G.jsx)(v.a,{variant:"h6",children:"Iterations:"}),Object(G.jsx)(E.a,{disabled:!1,type:"number",onChange:function(e){return ee(parseInt(e.target.value))},error:te,label:te?"Error":"",defaultValue:$.toString(),helperText:ae,variant:"outlined"})]})})}),Object(G.jsx)(I.a,{xs:!0,item:!0,className:"initialX-input",children:Object(G.jsx)(N.a,{className:s.card,children:Object(G.jsxs)(C.a,{className:s.cardContent,children:[Object(G.jsxs)(v.a,{variant:"h6",children:["Initial value, ",Object(G.jsx)(g.a,{math:String.raw(i||(i=Object(b.a)(["x_0"])))}),":"]}),Object(G.jsx)(E.a,{disabled:!1,type:"number",onChange:function(e){return ce(parseFloat(e.target.value))},error:se,label:se?"Error":"",defaultValue:ie.toString(),helperText:le,variant:"outlined"})]})})})]})]})})}),Object(G.jsx)(S.a,{}),Object(G.jsx)(M.a,{in:je,children:Object(G.jsx)(P.a,{triggerOnce:!0,children:Object(G.jsx)(y.a,{className:s.paper,children:je&&Object(G.jsx)(H,{params:we})})})}),Object(G.jsx)(T.a,{arrow:!0,title:"Help",placement:"top",children:Object(G.jsx)(A.a,{color:"secondary","aria-label":"help",className:s.fab,onClick:function(){ye(!0)},children:Object(G.jsx)(V.a,{})})}),Object(G.jsx)(F.a,{scrollToFirstStep:!0,run:ve,steps:_,continuous:!0,showSkipButton:!0,locale:{last:"End tour"},callback:function(e){"reset"!==e.action&&"close"!==e.action||ye(!1)}})]})}},63:function(e,t,a){"use strict";var n=a(44),r=a(41),i=a(98),c=a(0),s=a(427),l=a(489),o=a(422),j=a(430),b=a(96),u=a.n(b),d=a(423),h=a(444),x=a(483),O=a(493),p=a(80),m=a.n(p),f=(a(49),a(48)),g=a(54),v=a(13),y=a(37),w=a(6),S=Object(y.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){e.children;var t=e.classes,a=e.onClose,n=Object(i.a)(e,["children","classes","onClose"]);return Object(w.jsx)(o.a,Object(r.a)(Object(r.a)({disableTypography:!0,className:t.root},n),{},{children:a?Object(w.jsx)(j.a,{"aria-label":"close",className:t.closeButton,onClick:a,children:Object(w.jsx)(u.a,{})}):null}))})),N=Object(y.a)((function(e){return{root:{padding:e.spacing(2)}}}))((function(e){var t=e.params,a=Object(c.useState)(t.currentIteration),r=Object(n.a)(a,2),i=r[0],s=r[1],l=t.currentIteration,o=t.iterations>0?t.results[i-1]:null,j=Object(c.useRef)(null),b=Object(c.useRef)(null),u=Object(c.useCallback)((function(){b.current&&(b.current.updateSettings({xAxisLabel:"x",yAxisLabel:"y",xAxisArrowMode:g.AxisArrowModes.POSITIVE,yAxisArrowMode:g.AxisArrowModes.POSITIVE}),t.graphCallback(b,o,i))}),[b,o,t,i]);return u(),Object(c.useEffect)((function(){if(j.current){var t=e.smallScreen;j.current.style.width=t?"90vw":"60vw",j.current.style.height=t?"90vh":"60vh";b.current=g.GraphingCalculator(j.current,{keypad:!1,expressions:!1,expressionsTopbar:!1}),u()}}),[]),Object(w.jsxs)(h.a,{container:!0,direction:"column",alignItems:"center",justify:"center",children:[t.description&&Object(w.jsx)(x.a,{component:"div",overflow:"visible",children:Object(w.jsx)(d.a,{variant:"h6",children:t.description})}),t.functionLatex&&Object(w.jsx)(x.a,{component:"div",overflow:"visible",children:Object(w.jsx)(f.a,{math:"".concat(t.functionLatex),block:!0})}),Object(w.jsx)(d.a,{variant:"h6",children:t.iterations>0?"Iteration ".concat(i,":"):Object(w.jsx)("br",{})}),t.iterations>0&&Object(w.jsx)(x.a,{width:"70%",children:Object(w.jsx)(O.a,{orientation:"horizontal",onChange:function(e,t){return s(t)},defaultValue:l,"aria-labelledby":"discrete-slider-small-steps",step:1,marks:!0,min:1,max:t.iterations,valueLabelDisplay:"auto"})}),Object(w.jsx)(h.a,{item:!0,children:Object(w.jsx)("div",{ref:j})})]})}));t.a=function(e){var t=e.params,a=e.smallScreen,r=Object(c.useState)(!1),i=Object(n.a)(r,2),o=i[0],j=i[1],b=function(){j(!1)};return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(s.a,{variant:"contained",color:"primary",endIcon:Object(w.jsx)(m.a,{}),onClick:function(){j(!0)},children:"View Graph"}),Object(w.jsx)(l.a,{scroll:"paper",maxWidth:!1,fullScreen:a,onClose:b,"aria-labelledby":"customized-dialog-title",open:o,children:Object(w.jsxs)(v.a,{children:[Object(w.jsx)(S,{id:"customized-dialog-title",onClose:b}),Object(w.jsx)(N,{dividers:!0,smallScreen:a,params:t})]})})]})}}}]);
//# sourceMappingURL=38.6d5a6b16.chunk.js.map