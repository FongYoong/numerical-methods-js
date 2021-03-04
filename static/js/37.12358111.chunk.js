(this["webpackJsonpnumerical-methods-js"]=this["webpackJsonpnumerical-methods-js"]||[]).push([[37],{245:function(e,t,n){"use strict";var c=n(2),a=n(39),r=n(0),o=(n(8),n(40)),l=n(49),i=n(41),s=n(147),b=n(73),u=n(283),j=r.forwardRef((function(e,t){var n=e.classes,i=e.className,j=e.color,m=void 0===j?"primary":j,O=e.component,d=void 0===O?"a":O,_=e.onBlur,f=e.onFocus,h=e.TypographyClasses,g=e.underline,y=void 0===g?"hover":g,p=e.variant,w=void 0===p?"inherit":p,k=Object(a.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),v=Object(s.a)(),x=v.isFocusVisible,C=v.onBlurVisible,S=v.ref,N=r.useState(!1),B=N[0],R=N[1],A=Object(b.a)(t,S);return r.createElement(u.a,Object(c.a)({className:Object(o.a)(n.root,n["underline".concat(Object(l.a)(y))],i,B&&n.focusVisible,"button"===d&&n.button),classes:h,color:m,component:d,onBlur:function(e){B&&(C(),R(!1)),_&&_(e)},onFocus:function(e){x(e)&&R(!0),f&&f(e)},ref:A,variant:w},k))}));t.a=Object(i.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(j)},304:function(e,t,n){"use strict";n.r(t);var c,a,r,o,l,i,s,b,u,j,m,O,d,_=n(60),f=n(45),h=n(62),g=n(54),y=n(67),p=n(0),w=n(83),k=(n(64),n(65)),v=n(283),x=n(245),C=n(279),S=n(291),N=n(298),B=n(295),R=n(296),A=n(289),I=n(282),M=n(138),z=n.n(M),F=n(137),H=n.n(F),T=n(331),V=n(339),D=n(340),J=n(299),q=n(86),G=n.n(q),L=n(87),W=n(287),E=n(13),P=n(103),U=n(106),$=n(274),K=n(93),Q=n.n(K),X=n(6),Y=[{target:".matrix-col-input",title:"Column",content:"Add/Remove columns",disableBeacon:!0},{target:".matrix-row-input",title:"Row",content:"Add/Remove rows"},{target:".matrix-input",title:"Matrix",content:"Specify the matrix here."},{target:".output-col-input",title:"Output",content:"Specify the output vector."},{target:".step-math",title:"Steps",content:"The steps are shown here."},{target:".iteration-slider",title:"Iteration slider",content:"Change the slider to view the result of any iteration."}],Z=Object($.a)((function(e){return{paper:{padding:e.spacing(.5),textAlign:"center",color:e.palette.text.primary,margin:e.spacing(1)},container:{"& > *":{margin:e.spacing(1)}},card:{margin:e.spacing(0)},cardContent:{overflow:"auto","& > *":{margin:e.spacing(.5)}},overflow:{overflow:"auto"},matrixCard:{width:"60vw"},divider:{width:"500 px",height:"100px",marginTop:"20px",marginBottom:"20px"},fab:{position:"fixed",bottom:e.spacing(4),right:e.spacing(2)}}}));function ee(e){var t,n=e.smallScreen,c=e.params,f=Z(),w=Object(p.useState)(1),x=Object(h.a)(w,2),C=x[0],N=x[1];if(C<=0)N(1);else if(c.iterations>0&&C>c.iterations)N(c.iterations);else if(c.iterations>=2){var I=c.results,M=1===C?c.originalMatrix:I[C-2].finalMatrix,z=1===C?c.originalOutput:I[C-2].finalOutput,F=I[C-1];t=String.raw(a||(a=Object(_.a)(["\n        displaystyle\n        \begin{array}{l}\n        "],["\n        \\displaystyle\n        \\begin{array}{l}\n        "]))),F.interchange||(t+=String.raw(r||(r=Object(_.a)(["\n            \begin{array}{lcl}\n            \\ Factor &=& \frac{A_{","","}}{A_{","","}}\n            \\        &=& ","\n            end{array}\n            "],["\n            \\begin{array}{lcl}\n            \\\\ Factor &=& \\frac{A_{","","}}{A_{","","}}\n            \\\\        &=& ","\n            \\end{array}\n            "])),F.row,F.pivot,F.pivot,F.pivot,Object(g.a)(F.factor))),t+=String.raw(o||(o=Object(_.a)(["\\ \begin{array}{lcl} "],["\\\\ \\begin{array}{lcl} "])));var H=F.interchange?[F.row,F.row2]:[F.row,F.pivot],D=String.raw(l||(l=Object(_.a)(["overbrace{","}^{A}\n        overbrace{","}^{B}"],["\\overbrace{","}^{A}\n        \\overbrace{","}^{B}"])),Object(y.C)(F.finalMatrix,{leftBracketOnly:!0,boldRows:H}),Object(y.C)(F.finalOutput,{single:!0,rightBracketOnly:!0,boldRows:H}));if(F.interchange||0!==F.factor){var J=String.raw(s||(s=Object(_.a)(["\n            overbrace{","}^{A}\n            overbrace{","}^{B}"],["\n            \\overbrace{","}^{A}\n            \\overbrace{","}^{B}"])),Object(y.C)(M,{leftBracketOnly:!0,boldRows:H}),Object(y.C)(z,{single:!0,rightBracketOnly:!0,boldRows:H})),q=F.interchange?String.raw(b||(b=Object(_.a)(["R_{","} leftrightarrow R_{","}"],["R_{","} \\leftrightarrow R_{","}"])),F.row,F.row2):String.raw(u||(u=Object(_.a)(["R_{","} = R_{","}-","R_{","}"])),F.row,F.row,Object(g.b)(F.factor),F.pivot);t+=n?String.raw(j||(j=Object(_.a)(["\n                \\ ","\n                \\ \begin{array}{lcl}\n                       & downarrow &\n                    \\ & "," &\n                    \\ & downarrow &\n                    end{array}\n                \\ ","\n                "],["\n                \\\\ ","\n                \\\\ \\begin{array}{lcl}\n                       & \\downarrow &\n                    \\\\ & "," &\n                    \\\\ & \\downarrow &\n                    \\end{array}\n                \\\\ ","\n                "])),J,q,D):String.raw(m||(m=Object(_.a)(["\n                \\ ","\n                & overrightarrow{","}\n                & ","\n                "],["\n                \\\\ ","\n                & \\overrightarrow{","}\n                & ","\n                "])),J,q,D)}else t+=String.raw(i||(i=Object(_.a)(["\n                \\ \text{The factor is zero, so no elimination is done here.}\n                \\\n                \\ ","\n            "],["\n                \\\\ \\text{The factor is zero, so no elimination is done here.}\n                \\\\\n                \\\\ ","\n            "])),D);t+=String.raw(O||(O=Object(_.a)(["end{array}end{array}"],["\\end{array}\\end{array}"])))}else t=String.raw(d||(d=Object(_.a)(["\n        displaystyle\n        \begin{array}{l}\n        \\ \text{Cannot do any elimination.}\n        \\ overbrace{","}^{A}\n            overbrace{","}^{B}\n        end{array}\n        "],["\n        \\displaystyle\n        \\begin{array}{l}\n        \\\\ \\text{Cannot do any elimination.}\n        \\\\ \\overbrace{","}^{A}\n            \\overbrace{","}^{B}\n        \\end{array}\n        "])),Object(y.C)(c.originalMatrix,{leftBracketOnly:!0}),Object(y.C)(c.originalOutput,{single:!0,rightBracketOnly:!0}));return Object(X.jsx)(S.a,{className:f.container,children:Object(X.jsxs)(A.a,{container:!0,direction:"column",alignItems:"center",justify:"flex-start",children:[Object(X.jsx)(A.a,{xs:!0,item:!0,className:"iteration-slider",children:Object(X.jsx)(E.b,{direction:"left",triggerOnce:!0,children:Object(X.jsx)(T.a,{id:"iteration-slider",width:"70vw",children:Object(X.jsx)(V.a,{orientation:"horizontal",onChangeCommitted:function(e,t){N(t)},defaultValue:1,"aria-labelledby":"discrete-slider-small-steps",step:1,marks:!0,min:1,max:c.iterations<=0?1:c.iterations,valueLabelDisplay:"on"})})})}),Object(X.jsx)(A.a,{xs:!0,item:!0,className:"step-math",children:Object(X.jsx)(E.b,{direction:"right",triggerOnce:!0,children:Object(X.jsx)(B.a,{className:f.card,children:Object(X.jsxs)(R.a,{className:f.cardContent,children:[Object(X.jsxs)(v.a,{variant:"h6",children:["Iteration ",C,":"]}),Object(X.jsx)(k.a,{math:t,block:!0})]})})})})]})})}t.default=function(e){var t=e.methodName;Object(p.useEffect)((function(){document.title=t}));for(var n=Z(),a=Object(U.a)(Object(P.a)().breakpoints.down("sm")),r=a?45:60,o=a?10:100,l=a?5:20,i=Object(p.useState)(y.l),s=Object(h.a)(i,2),b=s[0],u=s[1],j=Object(p.useState)(y.z),m=Object(h.a)(j,2),O=m[0],d=m[1],g=function(e){return function(){var t=b.columns.slice(),n=b.rows.slice();if(e){t.push(Object(y.b)(t.length));for(var c=0;c<n.length;c++)n[c]["col_".concat(t.length)]=0}else{if(2===t.length)return;for(var a=0;a<n.length;a++)delete n[a]["col_".concat(t.length)];t.pop()}u({columns:t,rows:n})}},M=function(e){return function(){var t=b.rows.slice(),n=O.columns.slice(),c=O.rows.slice();if(e)t.push(Object(y.c)(b.columns.length)),n.push(Object(y.b)(n.length)),c[0]["col_".concat(n.length)]=0;else{if(2===t.length)return;t.pop();for(var a=0;a<c.length;a++)delete c[a]["col_".concat(n.length)];n.pop()}u(Object(f.a)(Object(f.a)({},b),{},{rows:t})),d({columns:n,rows:c})}},F=Object(y.g)(b.rows),T=Object(y.a)(F),V=Object(y.g)(O.rows)[0],q=Object(y.a)(V),$=b.rows.length,K=b.columns.length,te=[],ne=$,ce=0;ce<ne-1;ce++){var ae=!0;if(0===T[ce][ce]){ae=!1;for(var re=ce+1;re<ne;re++)if(0!==T[re][ce]){var oe=T[ce];T[ce]=T[re],T[re]=oe;var le=q[ce];q[ce]=q[re],q[re]=le,te.push({finalMatrix:Object(y.a)(T),finalOutput:Object(y.a)(q),interchange:!0,pivot:ce+1,row:ce+1,row2:re+1}),ae=!0;break}}if(ae)for(var ie=ce+1;ie<ne;ie++){var se=T[ie][ce]/T[ce][ce],be=!1;if(0===se)be=!0;else if(isNaN(se))continue;if(!be){for(var ue=0;ue<K;ue++)T[ie][ue]-=se*T[ce][ue];q[ie]-=se*q[ce]}te.push({finalMatrix:Object(y.a)(T),finalOutput:Object(y.a)(q),interchange:!1,factor:se,pivot:ce+1,row:ie+1})}}var je=te.length,me=Object(p.useState)(!1),Oe=Object(h.a)(me,2),de=Oe[0],_e=Oe[1],fe={originalMatrix:F,originalOutput:V,rowLength:$,colLength:K,iterations:je,results:te};return Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(w.a,{methodName:t}),Object(X.jsx)(C.a,{className:n.paper,children:Object(X.jsx)(S.a,{className:n.container,children:Object(X.jsxs)(E.c,{duration:500,triggerOnce:!0,cascade:!0,children:[Object(X.jsxs)(v.a,{variant:"body1",children:["This method is applied to matrices in the form of",Object(X.jsx)(k.a,{math:String.raw(c||(c=Object(_.a)([" Ax=B"],["\\ Ax=B"])))}),". ",Object(X.jsx)(x.a,{rel:"noopener noreferrer",href:"https://people.richland.edu/james/lecture/m116/matrices/pivot.html",target:"_blank","aria-label":"Pivoting",children:"Pivoting"})," is also implemented. No backsubstitution or Gauss-Jordan form due to\xa0",Object(X.jsx)(x.a,{color:"error",rel:"noopener noreferrer",href:"https://www.youtube.com/watch?v=vIci3C4JkL0",target:"_blank","aria-label":"laziness",children:"laziness"}),"."]}),Object(X.jsx)(A.a,{container:!0,spacing:1,direction:"row",alignItems:"center",justify:"center",children:Object(X.jsx)(A.a,{xs:!0,item:!0,children:Object(X.jsx)(B.a,{className:n.card,children:Object(X.jsx)(R.a,{className:n.cardContent,children:Object(X.jsxs)(A.a,{container:!0,spacing:1,direction:"column",alignItems:"center",justify:"center",children:[Object(X.jsxs)(A.a,{xs:!0,item:!0,className:"matrix-col-input",container:!0,spacing:1,direction:"row",alignItems:"center",justify:"center",children:[Object(X.jsx)(v.a,{variant:"subtitle1",children:"Columns:"}),Object(X.jsx)(I.a,{variant:"contained",color:"primary",onClick:g(!1),children:Object(X.jsx)(H.a,{color:"error"})}),Object(X.jsx)(I.a,{variant:"contained",color:"primary",onClick:g(!0),children:Object(X.jsx)(z.a,{})})]}),Object(X.jsxs)(A.a,{xs:!0,item:!0,className:"matrix-row-input",container:!0,spacing:1,direction:"row",alignItems:"center",justify:"center",children:[Object(X.jsx)(v.a,{variant:"subtitle1",children:"Rows:\xa0\xa0\xa0\xa0\xa0"}),Object(X.jsx)(I.a,{variant:"contained",color:"primary",onClick:M(!1),children:Object(X.jsx)(H.a,{color:"error"})}),Object(X.jsx)(I.a,{variant:"contained",color:"primary",onClick:M(!0),children:Object(X.jsx)(z.a,{})})]}),Object(X.jsxs)(A.a,{xs:!0,item:!0,className:"matrix-input",container:!0,spacing:1,direction:"column",alignItems:"center",justify:"center",children:[Object(X.jsx)(A.a,{xs:!0,item:!0,children:Object(X.jsx)(v.a,{variant:"h6",children:"Matrix, A:"})}),Object(X.jsx)(A.a,{xs:!0,item:!0,container:!0,spacing:0,direction:"row",alignItems:"center",justify:"center",children:Object(X.jsx)(A.a,{item:!0,className:n.overflow,children:Object(X.jsx)(Q.a,{columns:b.columns,rowGetter:function(e){return b.rows[e]},rowsCount:b.rows.length,onGridRowsUpdated:Object(y.d)(b,u),enableCellSelect:!0,headerRowHeight:1,minColumnWidth:r,minWidth:r*b.columns.length+o,rowHeight:35,minHeight:35*b.rows.length+l})},0)})]}),Object(X.jsxs)(A.a,{xs:!0,item:!0,className:"output-col-input",container:!0,spacing:1,direction:"column",alignItems:"center",justify:"center",children:[Object(X.jsx)(A.a,{xs:!0,item:!0,children:Object(X.jsx)(v.a,{variant:"h6",children:"Output, B:"})}),Object(X.jsx)(A.a,{xs:!0,item:!0,container:!0,spacing:0,direction:"row",alignItems:"center",justify:"center",children:Object(X.jsx)(A.a,{item:!0,className:n.overflow,children:Object(X.jsx)(Q.a,{columns:O.columns,rowGetter:function(e){return O.rows[e]},rowsCount:O.rows.length,onGridRowsUpdated:Object(y.d)(O,d),enableCellSelect:!0,headerRowHeight:1,minColumnWidth:r,minWidth:r*O.columns.length+o,rowHeight:35,minHeight:35*O.rows.length+l})},1)})]})]})})})})})]})})}),Object(X.jsx)(N.a,{}),Object(X.jsx)(W.a,{in:true,children:Object(X.jsx)(E.a,{triggerOnce:!0,children:Object(X.jsx)(C.a,{className:n.paper,children:Object(X.jsx)(ee,{smallScreen:a,params:fe})})})}),Object(X.jsx)(D.a,{arrow:!0,title:"Help",placement:"top",children:Object(X.jsx)(J.a,{color:"secondary","aria-label":"help",className:n.fab,onClick:function(){_e(!0)},children:Object(X.jsx)(G.a,{})})}),Object(X.jsx)(L.a,{scrollToFirstStep:!0,run:de,steps:Y,continuous:!0,showSkipButton:!0,locale:{last:"End tour"},callback:function(e){"reset"!==e.action&&"close"!==e.action||_e(!1)}})]})}},67:function(e,t,n){"use strict";n.d(t,"d",(function(){return N})),n.d(t,"b",(function(){return I})),n.d(t,"c",(function(){return M})),n.d(t,"g",(function(){return z})),n.d(t,"a",(function(){return F})),n.d(t,"B",(function(){return H})),n.d(t,"E",(function(){return T})),n.d(t,"f",(function(){return V})),n.d(t,"D",(function(){return D})),n.d(t,"e",(function(){return J})),n.d(t,"C",(function(){return q})),n.d(t,"l",(function(){return G})),n.d(t,"z",(function(){return L})),n.d(t,"w",(function(){return W})),n.d(t,"k",(function(){return E})),n.d(t,"A",(function(){return P})),n.d(t,"x",(function(){return U})),n.d(t,"y",(function(){return $})),n.d(t,"m",(function(){return K})),n.d(t,"h",(function(){return Q})),n.d(t,"n",(function(){return X})),n.d(t,"i",(function(){return Y})),n.d(t,"o",(function(){return Z})),n.d(t,"j",(function(){return ee})),n.d(t,"p",(function(){return te})),n.d(t,"q",(function(){return ne})),n.d(t,"r",(function(){return ce})),n.d(t,"s",(function(){return ae})),n.d(t,"t",(function(){return re})),n.d(t,"u",(function(){return oe})),n.d(t,"v",(function(){return le}));var c,a,r,o,l,i,s,b,u,j,m,O,d,_=n(60),f=n(55),h=n(48),g=n(74),y=n(75),p=n(77),w=n(76),k=n(45),v=n(54),x=n(0),C=n.n(x),S=n(6);function N(e,t){return function(n){for(var c=n.fromRow,a=n.toRow,r=n.updated,o=e.rows.slice(),l=c;l<=a;l++)o[l]=Object(k.a)(Object(k.a)({},o[l]),r);t(Object(k.a)(Object(k.a)({},e),{},{rows:o}))}}var B=function(e){Object(p.a)(n,e);var t=Object(w.a)(n);function n(e){var c;return Object(g.a)(this,n),(c=t.call(this,e)).ref=C.a.createRef(),c.onInputChange=function(){var e=c.ref.current.value;try{e=parseFloat(e),isNaN(e)&&(e=0)}catch(t){e=0}c.setState({value:e})},c.state={value:e.value},c}return Object(y.a)(n,[{key:"getValue",value:function(){return Object(h.a)({},this.props.column.key,this.state.value)}},{key:"getInputNode",value:function(){return this.ref.current?this.ref.current:null}},{key:"render",value:function(){return Object(S.jsx)("input",{ref:this.ref,defaultValue:this.state.value,onBlur:this.onInputChange,onChange:this.onInputChange})}}]),n}(C.a.Component),R={display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},A={editable:!0,editor:B,formatter:function(e){Object(p.a)(n,e);var t=Object(w.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(y.a)(n,[{key:"render",value:function(){return Object(S.jsx)("div",{style:R,children:this.props.value})}}]),n}(C.a.Component)},I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e+1;return t?Object(k.a)({key:"col_".concat(n),name:t},A):Object(k.a)({key:"col_".concat(n),name:"C".concat(n)},A)},M=function(e){for(var t={},n=1;n<=e;n++)t["col_".concat(n)]=0;return t},z=function(e){var t=Object.keys(e[0]).sort();return e.map((function(e){return t.map((function(t){return e[t]}))}))},F=function(e){return JSON.parse(JSON.stringify(e))},H=function(e){for(var t=0;t<e.length;t++){for(var n=e[t][t],c=0,a=0;a<e.length;a++)a!==t&&(c+=e[t][a]);if(Math.abs(n)<=Math.abs(c))return!1}return!0},T=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3],V=function(e,t){return T[e]/T[t]/T[e-t]},D=function(e){for(var t=e.length-1;t>0&&e[t-1]>=e[t];)t--;if(t<=0)return!1;for(var n=e.length-1;e[n]<=e[t-1];)n--;var c=e[t-1];for(e[t-1]=e[n],e[n]=c,n=e.length-1;t<n;)c=e[t],e[t]=e[n],e[n]=c,t++,n--;return!0},J=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(f.a)(Array(e.length).keys()),n={},c=[],a=0;a<t.length;a++)c.includes(e[a])||t[a]===e[a]||(n[a]=e[a],c.push(t[a],e[a]));return n},q=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},f=n.single,h=void 0!==f&&f,g=n.leftBracketOnly,y=void 0!==g&&g,p=n.rightBracketOnly,w=void 0!==p&&p,k=n.boldRows,x=void 0===k?[]:k,C=n.boldColumns,S=void 0===C?[]:C;n.transpose;t=w?String.raw(c||(c=Object(_.a)(["left|\begin{matrix}"],["\\left|\\begin{matrix}"]))):String.raw(a||(a=Object(_.a)(["left[\begin{matrix}"],["\\left[\\begin{matrix}"])));var N=e.length,B=e[0].length;if(h)for(var R=0;R<N;R++){for(var A=!1,I=0;I<x.length;I++)if(x[I]===R+1){A=!0;break}var M=String.raw(r||(r=Object(_.a)([" "," "])),Object(v.b)(e[R]));t+=A?String.raw(o||(o=Object(_.a)([" colorbox{aqua}{\bf{","}} "],[" \\colorbox{aqua}{\\bf{","}} "])),M):String.raw(l||(l=Object(_.a)(["",""])),M),t+=String.raw(i||(i=Object(_.a)(["cr"],["\\cr"])))}else for(var z=0;z<N;z++){for(var F=!1,H=0;H<x.length;H++)if(x[H]===z+1){F=!0;break}for(var T=0;T<B;T++){for(var V=!1,D=0;D<S.length;D++)if(S[D]===T+1){V=!0;break}var J=String.raw(s||(s=Object(_.a)([" "," "])),Object(v.b)(e[z][T]));t+=F||V?String.raw(b||(b=Object(_.a)([" colorbox{aqua}{\bf{","}} "],[" \\colorbox{aqua}{\\bf{","}} "])),J):String.raw(u||(u=Object(_.a)(["",""])),J),T!==B-1&&(t+=String.raw(j||(j=Object(_.a)(["&"]))))}t+=String.raw(m||(m=Object(_.a)(["cr"],["\\cr"])))}return t+=y?String.raw(O||(O=Object(_.a)(["end{matrix}\right|"],["\\end{matrix}\\right|"]))):String.raw(d||(d=Object(_.a)(["end{matrix}\right]"],["\\end{matrix}\\right]"])))},G={columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),Object(k.a)({key:"col_4",name:"C4"},A)],rows:[{col_1:0,col_2:1,col_3:-3,col_4:4},{col_1:2,col_2:-2,col_3:1,col_4:0},{col_1:2,col_2:-1,col_3:-2,col_4:4},{col_1:-6,col_2:4,col_3:3,col_4:-8}]},L=(Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),Object(k.a)({key:"col_4",name:"C4"},A),{columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),Object(k.a)({key:"col_4",name:"C4"},A)],rows:[{col_1:1,col_2:-1,col_3:0,col_4:1}]}),W=(Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),{columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),Object(k.a)({key:"col_4",name:"C4"},A)],rows:[{col_1:-1,col_2:11,col_3:-1,col_4:3},{col_1:10,col_2:-1,col_3:2,col_4:0},{col_1:0,col_2:3,col_3:-1,col_4:8},{col_1:2,col_2:-1,col_3:10,col_4:-1}]}),E={columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),Object(k.a)({key:"col_4",name:"C4"},A)],rows:[{col_1:0,col_2:0,col_3:0,col_4:0}]},P={columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),Object(k.a)({key:"col_4",name:"C4"},A)],rows:[{col_1:25,col_2:6,col_3:15,col_4:-11}]},U={columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A)],rows:[{col_1:3,col_2:-.1,col_3:-.2},{col_1:.1,col_2:7,col_3:-.3},{col_1:.3,col_2:-.2,col_3:10}]},$=(Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),{columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A)],rows:[{col_1:3,col_2:2,col_3:2},{col_1:2,col_2:3,col_3:-2}]}),K=(Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),{columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A)],rows:[{col_1:4,col_2:-2},{col_1:3,col_2:-1}]}),Q={columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A)],rows:[{col_1:1,col_2:0}]},X={columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A)],rows:[{col_1:2,col_2:3},{col_1:4,col_2:1}]},Y={columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A)],rows:[{col_1:-.7,col_2:1}]},Z={columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A)],rows:[{col_1:7,col_2:-2},{col_1:3,col_2:-1}]},ee={columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A)],rows:[{col_1:1,col_2:0}]},te={columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),Object(k.a)({key:"col_4",name:"C4"},A)],rows:[{col_1:5,col_2:0,col_3:0,col_4:-1},{col_1:1,col_2:0,col_3:-1,col_4:1},{col_1:-1.5,col_2:1,col_3:-2,col_4:1},{col_1:-1,col_2:1,col_3:3,col_4:-3}]},ne=(Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),{columns:[Object(k.a)({key:"col_1",name:"x"},A),Object(k.a)({key:"col_2",name:"y"},A)],rows:[{col_1:0,col_2:0}]}),ce={columns:[Object(k.a)({key:"col_1",name:"x"},A),Object(k.a)({key:"col_2",name:"y"},A)],rows:[{col_1:0,col_2:1}]},ae={columns:[Object(k.a)({key:"col_1",name:"x"},A),Object(k.a)({key:"col_2",name:"y"},A)],rows:[{col_1:1,col_2:1}]},re={columns:[Object(k.a)({key:"col_1",name:"x"},A),Object(k.a)({key:"col_2",name:"y"},A),Object(k.a)({key:"col_3",name:"u"},A)],rows:[{col_1:0,col_2:1,col_3:2}]},oe={columns:[Object(k.a)({key:"col_1",name:"a"},A),Object(k.a)({key:"col_2",name:"y(a)"},A),Object(k.a)({key:"col_3",name:"b"},A),Object(k.a)({key:"col_4",name:"y(b)"},A)],rows:[{col_1:0,col_2:0,col_3:1,col_4:2}]},le={columns:[Object(k.a)({key:"col_1",name:"a"},A),Object(k.a)({key:"col_2",name:"y(a)"},A),Object(k.a)({key:"col_3",name:"b"},A),Object(k.a)({key:"col_4",name:"y(b)"},A)],rows:[{col_1:0,col_2:0,col_3:1,col_4:5}]}}}]);
//# sourceMappingURL=37.12358111.chunk.js.map