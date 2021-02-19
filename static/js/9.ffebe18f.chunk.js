(this["webpackJsonpnumerical-methods-js"]=this["webpackJsonpnumerical-methods-js"]||[]).push([[9],{496:function(e,t,r){"use strict";r.r(t);var n,a,c,i,s,l,o,j,b,d,u,h,O,x,p,g=r(62),m=r(83),f=r(55),v=r(52),w=r(0),y=r(79),S=r(70),C=r(69),N=r(115),E=r(531),X=r(66),I=r(476),T=r(472),k=r(484),R=r(493),F=r(490),L=r(491),_=r(482),U=r(532),V=r(536),G=r(534),B=r(543),D=r(544),z=r(494),M=r(95),P=r.n(M),q=r(96),H=r(539),J=r(480),A=r(14),W=r(82),K=r(495),Q=r(467),Y=r(6),Z=[{target:".function-input",title:"Function",content:"Type a math function which only has the variable x. cos(x), sin(x) and e^x are supported.",disableBeacon:!0},{target:".interval-input",title:"Interval",content:"Select the lower and upper bounds of x"},{target:".errorThreshold-input",title:"Error Threshold",content:"Specify the minimum error threshold"},{target:".iteration-slider",title:"Iteration slider",content:"Change the slider to view the result of any iteration."},{target:".graph-button",title:"View graph",content:"Click this to visualise the results."}],$=Object(Q.a)((function(e){return{paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.primary,margin:e.spacing(1)},container:{"& > *":{margin:e.spacing(1)}},card:{margin:e.spacing(.5)},cardContent:{overflow:"auto","& > *":{margin:e.spacing(.5)}},fab:{position:"fixed",bottom:e.spacing(4),right:e.spacing(2)}}}));function ee(e){var t,r,n=e.params,y=$(),N=Object(w.useState)(1),E=Object(f.a)(N,2),T=E[0],R=E[1],U=n.exceedIterError,D=n.exceedIterErrorText,z=n.results,M=z[T-1];if(T>n.iterations)R(n.iterations);else{var P=String.raw(a||(a=Object(m.a)(["x_{lower_{","}}"])),T-1),q=String.raw(c||(c=Object(m.a)(["x_{upper_{","}}"])),T-1),H=String.raw(i||(i=Object(m.a)(["x_{lower_{","}}"])),T),Q=String.raw(s||(s=Object(m.a)(["x_{upper_{","}}"])),T),Z=String.raw(l||(l=Object(m.a)(["x_{root_{","}}"])),T-1);t=String.raw(o||(o=Object(m.a)(["\n        displaystyle\n        \begin{array}{l}\n        \begin{array}{lcl}\n        \\ "," &=& ","\n        \\ "," &=& ","\n        \\ "," &=&  ","-\frac{f(",")("," - ",")}{f(",") - f(",")}\n        \\                       &=& ","\n        \\\n        "],["\n        \\displaystyle\n        \\begin{array}{l}\n        \\begin{array}{lcl}\n        \\\\ "," &=& ","\n        \\\\ "," &=& ","\n        \\\\ "," &=&  ","-\\frac{f(",")("," - ",")}{f(",") - f(",")}\n        \\\\                       &=& ","\n        \\\\\n        "])),P,Object(v.a)(M.oldLowerX),q,Object(v.a)(M.oldUpperX),Z,q,q,P,q,P,q,Object(v.a)(M.rootX));var ee=!1;t+=String.raw(j||(j=Object(m.a)(["\n        \\ f(",") &=& ","\n        \\ f(",") &=& ","\n        \\\n        \\\n        "],["\n        \\\\ f(",") &=& ","\n        \\\\ f(",") &=& ","\n        \\\\\n        \\\\\n        "])),P,Object(v.a)(M.lowerFuncResult),Z,Object(v.a)(M.rootFuncResult));var te=M.lowerFuncResult*M.rootFuncResult;if(te<0?t+=String.raw(b||(b=Object(m.a)(["\n            end{array}\n            \\ \text{Given that } f(",")f(",") < 0,\n            \\\n            \begin{array}{lcl}\n            \\ "," &=& ","\n            \\                   &=& ","\n            \\ "," &=& ","\n            \\                   &=& ","\n            "],["\n            \\end{array}\n            \\\\ \\text{Given that } f(",")f(",") < 0,\n            \\\\\n            \\begin{array}{lcl}\n            \\\\ "," &=& ","\n            \\\\                   &=& ","\n            \\\\ "," &=& ","\n            \\\\                   &=& ","\n            "])),P,Z,H,P,Object(v.a)(M.newLowerX),Q,Z,Object(v.a)(M.newUpperX)):te>0?t+=String.raw(d||(d=Object(m.a)(["\n            end{array}\n            \\ \text{Given that } f(",")f(",") > 0,\n            \\\n            \begin{array}{lcl}\n            \\ "," &=& ","\n            \\                   &=& ","\n            \\ "," &=& ","\n            \\                   &=& ","\n            "],["\n            \\end{array}\n            \\\\ \\text{Given that } f(",")f(",") > 0,\n            \\\\\n            \\begin{array}{lcl}\n            \\\\ "," &=& ","\n            \\\\                   &=& ","\n            \\\\ "," &=& ","\n            \\\\                   &=& ","\n            "])),P,Z,H,Z,Object(v.a)(M.newLowerX),Q,q,Object(v.a)(M.newUpperX)):(ee=!0,t+=String.raw(u||(u=Object(m.a)(["\n            end{array}\n            \\ \text{Root found because }\n            \\\n            \begin{array}{lcl}\n            \\ f(",")f(",") == 0.\n            "],["\n            \\end{array}\n            \\\\ \\text{Root found because }\n            \\\\\n            \\begin{array}{lcl}\n            \\\\ f(",")f(",") == 0.\n            "])),P,Z)),!ee&&T>1){var re=String.raw(h||(h=Object(m.a)(["x_{root_{","}}"])),T-2);t+=String.raw(O||(O=Object(m.a)(["\n            \\ "," &=& ","\n            \\ Error &=& |"," - ","|\n            \\       &=& |","|\n            \\\n            "],["\n            \\\\ "," &=& ","\n            \\\\ Error &=& |"," - ","|\n            \\\\       &=& |","|\n            \\\\\n            "])),re,Object(v.a)(z[T-2].rootX),Z,re,Object(v.a)(M.errorX)),M.errorX<n.errorThreshold&&(t+=String.raw(x||(x=Object(m.a)(["\n                end{array}\n                \\\n                \\ \text{Root found because:}\n                \\\n                \begin{array}{lcl}\n                \\ Error &<& Error Threshold\n                \\ "," &<& ","\n                "],["\n                \\end{array}\n                \\\\\n                \\\\ \\text{Root found because:}\n                \\\\\n                \\begin{array}{lcl}\n                \\\\ Error &<& Error Threshold\n                \\\\ "," &<& ","\n                "])),Object(v.a)(M.errorX),Object(v.a)(n.errorThreshold)))}t+=String.raw(p||(p=Object(m.a)(["end{array}end{array}"],["\\end{array}\\end{array}"]))),r=function(e,t){e.current.setExpression({id:"function",color:C.Colors.BLUE,latex:Object(v.e)(n.functionValue)}),e.current.setExpression({id:"lowerX",color:C.Colors.GREEN,pointStyle:C.Styles.POINT,label:"Lower",showLabel:!0,latex:"(".concat(Object(v.a)(t.oldLowerX),", ").concat(Object(v.a)(t.lowerFuncResult),")")}),e.current.setExpression({id:"upperX",color:C.Colors.GREEN,pointStyle:C.Styles.POINT,label:"Upper",showLabel:!0,latex:"(".concat(Object(v.a)(t.oldUpperX),", ").concat(Object(v.a)(t.upperFuncResult),")")}),e.current.setExpression({id:"root",color:C.Colors.RED,pointStyle:C.Styles.POINT,label:"Root",showLabel:!0,latex:"(".concat(Object(v.a)(t.rootX),", 0)")})}}var ne=Object(K.a)(Object(W.a)().breakpoints.down("sm"));return Object(Y.jsxs)(k.a,{className:y.container,children:[Object(Y.jsx)(J.a,{in:U,children:Object(Y.jsx)(V.a,{severity:"error",children:D})}),Object(Y.jsx)(J.a,{in:!U,children:Object(Y.jsxs)(_.a,{className:"results",container:!0,spacing:1,direction:"column",alignItems:"center",justify:"center",children:[Object(Y.jsx)(_.a,{xs:!0,item:!0,children:Object(Y.jsx)(A.c,{triggerOnce:!0,children:Object(Y.jsx)(F.a,{className:y.card,children:Object(Y.jsx)(L.a,{className:y.cardContent,children:Object(Y.jsxs)(I.a,{variant:"h6",children:["Converged after ",n.iterations," iterations"]})})})})}),Object(Y.jsxs)(_.a,{container:!0,xs:!0,item:!0,direction:ne?"column":"row",alignItems:"center",justify:"space-evenly",children:[Object(Y.jsx)(_.a,{xs:!0,item:!0,className:"iteration-slider",children:Object(Y.jsx)(A.b,{direction:"left",triggerOnce:!0,children:Object(Y.jsx)(G.a,{id:"iteration-slider",height:ne?null:"20rem",width:ne?"70vw":null,children:Object(Y.jsx)(B.a,{orientation:ne?"horizontal":"vertical",onChangeCommitted:function(e,t){return R(t)},defaultValue:1,"aria-labelledby":"discrete-slider-small-steps",step:1,marks:!0,min:1,max:n.iterations,valueLabelDisplay:"on"})})})}),Object(Y.jsx)(_.a,{xs:!0,item:!0,container:!0,spacing:1,direction:"column",alignItems:"center",justify:"center",children:Object(Y.jsx)(_.a,{xs:!0,item:!0,className:"step-math",children:Object(Y.jsx)(A.c,{duration:500,triggerOnce:!0,children:Object(Y.jsx)(F.a,{className:y.card,children:Object(Y.jsxs)(L.a,{className:y.cardContent,children:[Object(Y.jsxs)(I.a,{variant:"h6",children:["Iteration ",T,":"]}),Object(Y.jsx)(X.a,{tex:t})]})})})})}),Object(Y.jsx)(_.a,{xs:!0,item:!0,className:"graph-button",children:Object(Y.jsx)(A.b,{direction:"right",triggerOnce:!0,children:Object(Y.jsx)(S.a,{params:Object(g.a)({currentIteration:T,graphCallback:r,smallScreen:ne},n)})})})]})]})})]})}Object(N.addStyles)(),t.default=function(e){var t=e.methodName;Object(w.useEffect)((function(){document.title=t}));var r,a=$(),c=Object(w.useState)(String.raw(n||(n=Object(m.a)(["x-cosleft( x\right)"],["x-\\cos\\left( x\\right)"])))),i=Object(f.a)(c,2),s=i[0],l=i[1],o=Object(w.useState)(""),j=Object(f.a)(o,2),b=j[0],d=j[1],u=!1,h="";try{r=Object(E.b)(b)}catch(Fe){u=!0,h="Invalid equation!"}var O=Object(w.useState)(0),x=Object(f.a)(O,2),p=x[0],g=x[1],S=Object(w.useState)(3),C=Object(f.a)(S,2),X=C[0],G=C[1],B=!1,M="",W="";p>=X&&(B=!0,M="Lower x must be lower than upper x!",W="Upper x must be higher than lower x!");var K=Object(w.useState)(5e-4),Q=Object(f.a)(K,2),te=Q[0],re=Q[1],ne=!1,ae="";te<0&&(ne=!0,ae="Threshold cannot be negative!");var ce=u||B||ne,ie=!1,se=!1,le="",oe=[],je=1;if(Object(v.d)(r)&&!ce){ie=!0;for(var be=0;;){var de=0===be?p:oe[be-1].newLowerX,ue=0===be?X:oe[be-1].newUpperX,he=de,Oe=ue,xe=void 0,pe=void 0,ge=void 0,me=void 0,fe=void 0;try{xe=r.evaluate({x:de}),ge=ue-(pe=r.evaluate({x:ue}))*(de-ue)/(xe-pe),me=r.evaluate({x:ge})}catch(Le){ce=!0,u=!0,h="Only variable x is allowed!",ie=!1;break}var ve=!1,we=xe*me;if(we<0?Oe=ge:we>0?he=ge:ve=!0,ve||0===be||(fe=Math.abs(ge-oe[be-1].rootX))<te&&(ve=!0),oe.push({oldLowerX:de,newLowerX:he,oldUpperX:ue,newUpperX:Oe,rootX:ge,lowerFuncResult:xe,upperFuncResult:pe,rootFuncResult:me,errorX:fe}),be++,ve)break;if(be>1e4){se=!0,le="Exceeded 10000 iterations!";break}}je=be}else ie=!1;var ye=Object(w.useState)(!1),Se=Object(f.a)(ye,2),Ce=Se[0],Ne=Se[1],Ee=Object(w.useState)(!1),Xe=Object(f.a)(Ee,2),Ie=Xe[0],Te=Xe[1],ke=function(e,t){"clickaway"!==t&&Te(!1)},Re={functionValue:r,errorThreshold:te,iterations:je,exceedIterError:se,exceedIterErrorText:le,results:oe};return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(y.a,{methodName:t}),Object(Y.jsxs)(T.a,{className:a.paper,children:[Object(Y.jsx)(k.a,{className:a.container,children:Object(Y.jsxs)(A.c,{duration:500,triggerOnce:!0,cascade:!0,children:[Object(Y.jsx)(_.a,{container:!0,spacing:1,direction:"row",alignItems:"center",justify:"center",children:Object(Y.jsx)(_.a,{xs:!0,item:!0,className:"function-input",children:Object(Y.jsx)(F.a,{className:a.card,children:Object(Y.jsxs)(L.a,{className:a.cardContent,children:[Object(Y.jsx)(I.a,{variant:"h6",children:"Function:"}),Object(Y.jsx)(N.EditableMathField,{disabled:!1,latex:s,onChange:function(e){d(e.text()),l(e.latex())},mathquillDidMount:function(e){d(e.text())}}),Object(Y.jsx)(J.a,{in:u,children:Object(Y.jsx)(V.a,{severity:"error",children:h})})]})})})}),Object(Y.jsxs)(_.a,{container:!0,spacing:1,direction:"row",alignItems:"center",justify:"center",children:[Object(Y.jsx)(_.a,{xs:!0,item:!0,className:"lowerX-input",children:Object(Y.jsx)(F.a,{className:a.card,children:Object(Y.jsxs)(L.a,{className:a.cardContent,children:[Object(Y.jsx)(I.a,{variant:"h6",children:"Lower x value:"}),Object(Y.jsx)(U.a,{disabled:!1,type:"number",onChange:function(e){return g(parseFloat(e.target.value))},error:B,label:B?"Error":"",defaultValue:p.toString(),helperText:M,variant:"outlined"})]})})}),Object(Y.jsx)(_.a,{xs:!0,item:!0,className:"upperX-input",children:Object(Y.jsx)(F.a,{className:a.card,children:Object(Y.jsxs)(L.a,{className:a.cardContent,children:[Object(Y.jsx)(I.a,{variant:"h6",children:"Upper x value:"}),Object(Y.jsx)(U.a,{disabled:!1,type:"number",onChange:function(e){return G(parseFloat(e.target.value))},error:B,label:B?"Error":"",defaultValue:X.toString(),helperText:W,variant:"outlined"})]})})})]}),Object(Y.jsx)(_.a,{container:!0,spacing:1,direction:"row",alignItems:"center",justify:"center",children:Object(Y.jsx)(_.a,{xs:!0,item:!0,className:"errorThreshold-input",children:Object(Y.jsx)(F.a,{className:a.card,children:Object(Y.jsxs)(L.a,{className:a.cardContent,children:[Object(Y.jsx)(I.a,{variant:"h6",children:"Error threshold:"}),Object(Y.jsx)(U.a,{disabled:!1,type:"number",onChange:function(e){return re(parseFloat(e.target.value))},error:ne,label:ne?"Error":"",defaultValue:te.toString(),helperText:ae,variant:"outlined"})]})})})})]})}),Object(Y.jsx)(R.a,{})]}),Object(Y.jsx)(J.a,{in:ie,children:Object(Y.jsx)(A.a,{triggerOnce:!0,children:Object(Y.jsx)(T.a,{className:a.paper,children:ie&&Object(Y.jsx)(ee,{params:Re})})})}),Object(Y.jsx)(D.a,{arrow:!0,title:"Help",placement:"top",children:Object(Y.jsx)(z.a,{color:"secondary","aria-label":"help",className:a.fab,onClick:function(){ce?Te(!0):Ne(!0)},children:Object(Y.jsx)(P.a,{})})}),Object(Y.jsx)(q.a,{scrollToFirstStep:!0,run:Ce,steps:Z,continuous:!0,showSkipButton:!0,locale:{last:"End tour"},callback:function(e){"reset"!==e.action&&"close"!==e.action||Ne(!1)}}),Object(Y.jsx)(H.a,{open:Ie,autoHideDuration:2e3,onClose:ke,children:Object(Y.jsxs)(V.a,{onClose:ke,severity:"error",children:["There is an error with the ",u?"function":"iterations","."]})})]})}},70:function(e,t,r){"use strict";var n=r(55),a=r(62),c=r(116),i=r(52),s=r(0),l=r(488),o=r(540),j=r(487),b=r(475),d=r(113),u=r.n(d),h=r(476),O=r(482),x=r(534),p=r(543),g=r(114),m=r.n(g),f=r(66),v=r(69),w=r(14),y=r(42),S=r(6),C=Object(y.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){e.children;var t=e.classes,r=e.onClose,n=Object(c.a)(e,["children","classes","onClose"]);return Object(S.jsx)(j.a,Object(a.a)(Object(a.a)({disableTypography:!0,className:t.root},n),{},{children:r?Object(S.jsx)(b.a,{"aria-label":"close",className:t.closeButton,onClick:r,children:Object(S.jsx)(u.a,{})}):null}))})),N=Object(y.a)((function(e){return{root:{padding:e.spacing(2)}}}))((function(e){var t=e.params,r=Object(s.useState)(t.currentIteration),a=Object(n.a)(r,2),c=a[0],l=a[1],o=t.currentIteration,j=t.results[c-1],b=Object(s.useRef)(null),d=Object(s.useRef)(null),u=Object(s.useCallback)((function(){d.current&&t.graphCallback(d,j)}),[d,j,t]);return u(),Object(s.useEffect)((function(){if(b.current){var t=e.smallScreen;b.current.style.width=t?"90vw":"60vw",b.current.style.height=t?"90vh":"60vh";d.current=v.GraphingCalculator(b.current,{keypad:!1,expressions:!1,expressionsTopbar:!1}),u()}}),[]),Object(S.jsxs)(O.a,{container:!0,direction:"column",alignItems:"center",justify:"center",children:[Object(S.jsx)(x.a,{component:"div",overflow:"visible",children:Object(S.jsx)(f.a,{tex:"".concat(Object(i.e)(t.functionValue))})}),Object(S.jsxs)(h.a,{variant:"h6",children:["Iteration ",c,":"]}),Object(S.jsx)(x.a,{width:"70%",children:Object(S.jsx)(p.a,{orientation:"horizontal",onChange:function(e,t){return l(t)},defaultValue:o,"aria-labelledby":"discrete-slider-small-steps",step:1,marks:!0,min:1,max:t.iterations,valueLabelDisplay:"auto"})}),Object(S.jsx)(O.a,{item:!0,children:Object(S.jsx)("div",{ref:b})})]})}));t.a=function(e){var t=e.params,r=e.smallScreen,a=Object(s.useState)(!1),c=Object(n.a)(a,2),i=c[0],j=c[1],b=function(){j(!1)};return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(l.a,{variant:"contained",color:"primary",endIcon:Object(S.jsx)(m.a,{}),onClick:function(){j(!0)},children:"View Graph"}),Object(S.jsx)(o.a,{scroll:"paper",maxWidth:!1,fullScreen:r,onClose:b,"aria-labelledby":"customized-dialog-title",open:i,children:Object(S.jsxs)(w.a,{children:[Object(S.jsx)(C,{id:"customized-dialog-title",onClose:b}),Object(S.jsx)(N,{dividers:!0,smallScreen:r,params:t})]})})]})}}}]);
//# sourceMappingURL=9.ffebe18f.chunk.js.map