(this["webpackJsonpnumerical-methods-js"]=this["webpackJsonpnumerical-methods-js"]||[]).push([[39],{471:function(e,t,n){"use strict";n.r(t);var c,a,r,o,l,i,s,b,u,j,m,O,d,_=n(47),f=n(44),h=n(43),g=n(46),y=n(58),p=n(0),w=n(63),k=(n(51),n(50)),v=n(411),x=n(2),C=n(34),S=(n(8),n(35)),N=n(49),B=n(36),R=n(131),A=n(90),I=p.forwardRef((function(e,t){var n=e.classes,c=e.className,a=e.color,r=void 0===a?"primary":a,o=e.component,l=void 0===o?"a":o,i=e.onBlur,s=e.onFocus,b=e.TypographyClasses,u=e.underline,j=void 0===u?"hover":u,m=e.variant,O=void 0===m?"inherit":m,d=Object(C.a)(e,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),_=Object(R.a)(),f=_.isFocusVisible,h=_.onBlurVisible,g=_.ref,y=p.useState(!1),w=y[0],k=y[1],B=Object(A.a)(t,g);return p.createElement(v.a,Object(x.a)({className:Object(S.a)(n.root,n["underline".concat(Object(N.a)(j))],c,w&&n.focusVisible,"button"===l&&n.button),classes:b,color:r,component:l,onBlur:function(e){w&&(h(),k(!1)),i&&i(e)},onFocus:function(e){f(e)&&k(!0),s&&s(e)},ref:B,variant:O},d))})),M=Object(B.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(I),z=n(416),F=n(427),H=n(430),T=n(165),V=n(166),D=n(425),J=n(412),q=n(113),G=n.n(q),L=n(112),W=n.n(L),E=n(465),P=n(475),U=n(474),$=n(431),K=n(66),Q=n.n(K),X=n(67),Y=n(423),Z=n(13),ee=n(121),te=n(94),ne=n(408),ce=n(84),ae=n.n(ce),re=n(6),oe=[{target:".matrix-col-input",title:"Column",content:"Add/Remove columns",disableBeacon:!0},{target:".matrix-row-input",title:"Row",content:"Add/Remove rows"},{target:".matrix-input",title:"Matrix",content:"Specify the matrix here."},{target:".output-col-input",title:"Output",content:"Specify the output vector."},{target:".step-math",title:"Steps",content:"The steps are shown here."},{target:".iteration-slider",title:"Iteration slider",content:"Change the slider to view the result of any iteration."}],le=Object(ne.a)((function(e){return{paper:{padding:e.spacing(.5),textAlign:"center",color:e.palette.text.primary,margin:e.spacing(1)},container:{"& > *":{margin:e.spacing(1)}},card:{margin:e.spacing(0)},cardContent:{overflow:"auto","& > *":{margin:e.spacing(.5)}},overflow:{overflow:"auto"},matrixCard:{width:"60vw"},divider:{width:"500 px",height:"100px",marginTop:"20px",marginBottom:"20px"},fab:{position:"fixed",bottom:e.spacing(4),right:e.spacing(2)}}}));function ie(e){var t,n=e.smallScreen,c=e.params,f=le(),w=Object(p.useState)(1),x=Object(h.a)(w,2),C=x[0],S=x[1];if(C<=0)S(1);else if(c.iterations>0&&C>c.iterations)S(c.iterations);else if(c.iterations>=2){var N=c.results,B=1===C?c.originalMatrix:N[C-2].finalMatrix,R=1===C?c.originalOutput:N[C-2].finalOutput,A=N[C-1];t=String.raw(a||(a=Object(_.a)(["\n        displaystyle\n        \begin{array}{l}\n        "],["\n        \\displaystyle\n        \\begin{array}{l}\n        "]))),A.interchange||(t+=String.raw(r||(r=Object(_.a)(["\n            \begin{array}{lcl}\n            \\ Factor &=& \frac{A_{","","}}{A_{","","}}\n            \\        &=& ","\n            end{array}\n            "],["\n            \\begin{array}{lcl}\n            \\\\ Factor &=& \\frac{A_{","","}}{A_{","","}}\n            \\\\        &=& ","\n            \\end{array}\n            "])),A.row,A.pivot,A.pivot,A.pivot,Object(g.a)(A.factor))),t+=String.raw(o||(o=Object(_.a)(["\\ \begin{array}{lcl} "],["\\\\ \\begin{array}{lcl} "])));var I=A.interchange?[A.row,A.row2]:[A.row,A.pivot],M=String.raw(l||(l=Object(_.a)(["overbrace{","}^{A}\n        overbrace{","}^{B}"],["\\overbrace{","}^{A}\n        \\overbrace{","}^{B}"])),Object(y.C)(A.finalMatrix,{leftBracketOnly:!0,boldRows:I}),Object(y.C)(A.finalOutput,{single:!0,rightBracketOnly:!0,boldRows:I}));if(A.interchange||0!==A.factor){var z=String.raw(s||(s=Object(_.a)(["\n            overbrace{","}^{A}\n            overbrace{","}^{B}"],["\n            \\overbrace{","}^{A}\n            \\overbrace{","}^{B}"])),Object(y.C)(B,{leftBracketOnly:!0,boldRows:I}),Object(y.C)(R,{single:!0,rightBracketOnly:!0,boldRows:I})),H=A.interchange?String.raw(b||(b=Object(_.a)(["R_{","} leftrightarrow R_{","}"],["R_{","} \\leftrightarrow R_{","}"])),A.row,A.row2):String.raw(u||(u=Object(_.a)(["R_{","} = R_{","}-","R_{","}"])),A.row,A.row,Object(g.b)(A.factor),A.pivot);t+=n?String.raw(j||(j=Object(_.a)(["\n                \\ ","\n                \\ \begin{array}{lcl}\n                       & downarrow &\n                    \\ & "," &\n                    \\ & downarrow &\n                    end{array}\n                \\ ","\n                "],["\n                \\\\ ","\n                \\\\ \\begin{array}{lcl}\n                       & \\downarrow &\n                    \\\\ & "," &\n                    \\\\ & \\downarrow &\n                    \\end{array}\n                \\\\ ","\n                "])),z,H,M):String.raw(m||(m=Object(_.a)(["\n                \\ ","\n                & overrightarrow{","}\n                & ","\n                "],["\n                \\\\ ","\n                & \\overrightarrow{","}\n                & ","\n                "])),z,H,M)}else t+=String.raw(i||(i=Object(_.a)(["\n                \\ \text{The factor is zero, so no elimination is done here.}\n                \\\n                \\ ","\n            "],["\n                \\\\ \\text{The factor is zero, so no elimination is done here.}\n                \\\\\n                \\\\ ","\n            "])),M);t+=String.raw(O||(O=Object(_.a)(["end{array}end{array}"],["\\end{array}\\end{array}"])))}else t=String.raw(d||(d=Object(_.a)(["\n        displaystyle\n        \begin{array}{l}\n        \\ \text{Cannot do any elimination.}\n        \\ overbrace{","}^{A}\n            overbrace{","}^{B}\n        end{array}\n        "],["\n        \\displaystyle\n        \\begin{array}{l}\n        \\\\ \\text{Cannot do any elimination.}\n        \\\\ \\overbrace{","}^{A}\n            \\overbrace{","}^{B}\n        \\end{array}\n        "])),Object(y.C)(c.originalMatrix,{leftBracketOnly:!0}),Object(y.C)(c.originalOutput,{single:!0,rightBracketOnly:!0}));return Object(re.jsx)(F.a,{className:f.container,children:Object(re.jsxs)(D.a,{container:!0,direction:"column",alignItems:"center",justify:"flex-start",children:[Object(re.jsx)(D.a,{xs:!0,item:!0,className:"iteration-slider",children:Object(re.jsx)(Z.b,{direction:"left",triggerOnce:!0,children:Object(re.jsx)(E.a,{id:"iteration-slider",width:"70vw",children:Object(re.jsx)(P.a,{orientation:"horizontal",onChangeCommitted:function(e,t){S(t)},defaultValue:1,"aria-labelledby":"discrete-slider-small-steps",step:1,marks:!0,min:1,max:c.iterations<=0?1:c.iterations,valueLabelDisplay:"on"})})})}),Object(re.jsx)(D.a,{xs:!0,item:!0,className:"step-math",children:Object(re.jsx)(Z.b,{direction:"right",triggerOnce:!0,children:Object(re.jsx)(T.a,{className:f.card,children:Object(re.jsxs)(V.a,{className:f.cardContent,children:[Object(re.jsxs)(v.a,{variant:"h6",children:["Iteration ",C,":"]}),Object(re.jsx)(k.a,{math:t,block:!0})]})})})})]})})}t.default=function(e){var t=e.methodName,n=e.markdown;Object(p.useEffect)((function(){document.title=t}));for(var a=le(),r=Object(te.a)(Object(ee.a)().breakpoints.down("sm")),o=r?45:60,l=r?10:100,i=r?5:20,s=Object(p.useState)(y.l),b=Object(h.a)(s,2),u=b[0],j=b[1],m=Object(p.useState)(y.z),O=Object(h.a)(m,2),d=O[0],g=O[1],x=function(e){return function(){var t=u.columns.slice(),n=u.rows.slice();if(e){t.push(Object(y.b)(t.length));for(var c=0;c<n.length;c++)n[c]["col_".concat(t.length)]=0}else{if(2===t.length)return;for(var a=0;a<n.length;a++)delete n[a]["col_".concat(t.length)];t.pop()}j({columns:t,rows:n})}},C=function(e){return function(){var t=u.rows.slice(),n=d.columns.slice(),c=d.rows.slice();if(e)t.push(Object(y.c)(u.columns.length)),n.push(Object(y.b)(n.length)),c[0]["col_".concat(n.length)]=0;else{if(2===t.length)return;t.pop();for(var a=0;a<c.length;a++)delete c[a]["col_".concat(n.length)];n.pop()}j(Object(f.a)(Object(f.a)({},u),{},{rows:t})),g({columns:n,rows:c})}},S=Object(y.g)(u.rows),N=Object(y.a)(S),B=Object(y.g)(d.rows)[0],R=Object(y.a)(B),A=u.rows.length,I=u.columns.length,q=[],L=A,E=0;E<L-1;E++){var P=!0;if(0===N[E][E]){P=!1;for(var K=E+1;K<L;K++)if(0!==N[K][E]){var ne=N[E];N[E]=N[K],N[K]=ne;var ce=R[E];R[E]=R[K],R[K]=ce,q.push({finalMatrix:Object(y.a)(N),finalOutput:Object(y.a)(R),interchange:!0,pivot:E+1,row:E+1,row2:K+1}),P=!0;break}}if(P)for(var se=E+1;se<L;se++){var be=N[se][E]/N[E][E],ue=!1;if(0===be)ue=!0;else if(isNaN(be))continue;if(!ue){for(var je=0;je<I;je++)N[se][je]-=be*N[E][je];R[se]-=be*R[E]}q.push({finalMatrix:Object(y.a)(N),finalOutput:Object(y.a)(R),interchange:!1,factor:be,pivot:E+1,row:se+1})}}var me=q.length,Oe=Object(p.useState)(!1),de=Object(h.a)(Oe,2),_e=de[0],fe=de[1],he={originalMatrix:S,originalOutput:B,rowLength:A,colLength:I,iterations:me,results:q};return Object(re.jsxs)(re.Fragment,{children:[Object(re.jsx)(w.a,{methodName:t,markdown:n}),Object(re.jsx)(z.a,{className:a.paper,children:Object(re.jsx)(F.a,{className:a.container,children:Object(re.jsxs)(Z.c,{duration:500,triggerOnce:!0,cascade:!0,children:[Object(re.jsxs)(v.a,{variant:"body1",children:["This method is applied to matrices in the form of",Object(re.jsx)(k.a,{math:String.raw(c||(c=Object(_.a)([" Ax=B"],["\\ Ax=B"])))})," .",Object(re.jsx)("br",{}),Object(re.jsx)(M,{rel:"noopener noreferrer",href:"https://people.richland.edu/james/lecture/m116/matrices/pivot.html",target:"_blank","aria-label":"Pivoting",children:"Pivoting"})," is also implemented.",Object(re.jsx)("br",{}),"No backsubstitution or Gauss-Jordan form due to\xa0",Object(re.jsx)(M,{color:"error",rel:"noopener noreferrer",href:"https://www.youtube.com/watch?v=vIci3C4JkL0",target:"_blank","aria-label":"laziness",children:"laziness"}),"."]}),Object(re.jsx)(D.a,{container:!0,spacing:1,direction:"row",alignItems:"center",justify:"center",children:Object(re.jsx)(D.a,{xs:!0,item:!0,children:Object(re.jsx)(T.a,{className:a.card,children:Object(re.jsx)(V.a,{className:a.cardContent,children:Object(re.jsxs)(D.a,{container:!0,spacing:1,direction:"column",alignItems:"center",justify:"center",children:[Object(re.jsxs)(D.a,{xs:!0,item:!0,className:"matrix-col-input",container:!0,spacing:1,direction:"row",alignItems:"center",justify:"center",children:[Object(re.jsx)(v.a,{variant:"subtitle1",children:"Columns:"}),Object(re.jsx)(J.a,{variant:"contained",color:"primary",onClick:x(!1),children:Object(re.jsx)(W.a,{color:"error"})}),Object(re.jsx)(J.a,{variant:"contained",color:"primary",onClick:x(!0),children:Object(re.jsx)(G.a,{})})]}),Object(re.jsxs)(D.a,{xs:!0,item:!0,className:"matrix-row-input",container:!0,spacing:1,direction:"row",alignItems:"center",justify:"center",children:[Object(re.jsx)(v.a,{variant:"subtitle1",children:"Rows:\xa0\xa0\xa0\xa0\xa0"}),Object(re.jsx)(J.a,{variant:"contained",color:"primary",onClick:C(!1),children:Object(re.jsx)(W.a,{color:"error"})}),Object(re.jsx)(J.a,{variant:"contained",color:"primary",onClick:C(!0),children:Object(re.jsx)(G.a,{})})]}),Object(re.jsxs)(D.a,{xs:!0,item:!0,className:"matrix-input",container:!0,spacing:1,direction:"column",alignItems:"center",justify:"center",children:[Object(re.jsx)(D.a,{xs:!0,item:!0,children:Object(re.jsx)(v.a,{variant:"h6",children:"Matrix, A:"})}),Object(re.jsx)(D.a,{xs:!0,item:!0,container:!0,spacing:0,direction:"row",alignItems:"center",justify:"center",children:Object(re.jsx)(D.a,{item:!0,className:a.overflow,children:Object(re.jsx)(ae.a,{columns:u.columns,rowGetter:function(e){return u.rows[e]},rowsCount:u.rows.length,onGridRowsUpdated:Object(y.d)(u,j),enableCellSelect:!0,headerRowHeight:1,minColumnWidth:o,minWidth:o*u.columns.length+l,rowHeight:35,minHeight:35*u.rows.length+i})},0)})]}),Object(re.jsxs)(D.a,{xs:!0,item:!0,className:"output-col-input",container:!0,spacing:1,direction:"column",alignItems:"center",justify:"center",children:[Object(re.jsx)(D.a,{xs:!0,item:!0,children:Object(re.jsx)(v.a,{variant:"h6",children:"Output, B:"})}),Object(re.jsx)(D.a,{xs:!0,item:!0,container:!0,spacing:0,direction:"row",alignItems:"center",justify:"center",children:Object(re.jsx)(D.a,{item:!0,className:a.overflow,children:Object(re.jsx)(ae.a,{columns:d.columns,rowGetter:function(e){return d.rows[e]},rowsCount:d.rows.length,onGridRowsUpdated:Object(y.d)(d,g),enableCellSelect:!0,headerRowHeight:1,minColumnWidth:o,minWidth:o*d.columns.length+l,rowHeight:35,minHeight:35*d.rows.length+i})},1)})]})]})})})})})]})})}),Object(re.jsx)(H.a,{}),Object(re.jsx)(Y.a,{in:true,children:Object(re.jsx)(Z.a,{triggerOnce:!0,children:Object(re.jsx)(z.a,{className:a.paper,children:Object(re.jsx)(ie,{smallScreen:r,params:he})})})}),Object(re.jsx)(U.a,{arrow:!0,title:"Help",placement:"top",children:Object(re.jsx)($.a,{color:"secondary","aria-label":"help",className:a.fab,onClick:function(){fe(!0)},children:Object(re.jsx)(Q.a,{})})}),Object(re.jsx)(X.a,{scrollToFirstStep:!0,run:_e,steps:oe,continuous:!0,showSkipButton:!0,locale:{last:"End tour"},callback:function(e){"reset"!==e.action&&"close"!==e.action||fe(!1)}})]})}},58:function(e,t,n){"use strict";n.d(t,"d",(function(){return N})),n.d(t,"b",(function(){return I})),n.d(t,"c",(function(){return M})),n.d(t,"g",(function(){return z})),n.d(t,"a",(function(){return F})),n.d(t,"B",(function(){return H})),n.d(t,"E",(function(){return T})),n.d(t,"f",(function(){return V})),n.d(t,"D",(function(){return D})),n.d(t,"e",(function(){return J})),n.d(t,"C",(function(){return q})),n.d(t,"l",(function(){return G})),n.d(t,"z",(function(){return L})),n.d(t,"w",(function(){return W})),n.d(t,"k",(function(){return E})),n.d(t,"A",(function(){return P})),n.d(t,"x",(function(){return U})),n.d(t,"y",(function(){return $})),n.d(t,"m",(function(){return K})),n.d(t,"h",(function(){return Q})),n.d(t,"n",(function(){return X})),n.d(t,"i",(function(){return Y})),n.d(t,"o",(function(){return Z})),n.d(t,"j",(function(){return ee})),n.d(t,"p",(function(){return te})),n.d(t,"q",(function(){return ne})),n.d(t,"r",(function(){return ce})),n.d(t,"s",(function(){return ae})),n.d(t,"t",(function(){return re})),n.d(t,"u",(function(){return oe})),n.d(t,"v",(function(){return le}));var c,a,r,o,l,i,s,b,u,j,m,O,d,_=n(47),f=n(62),h=n(89),g=n(71),y=n(72),p=n(77),w=n(76),k=n(44),v=n(46),x=n(0),C=n.n(x),S=n(6);function N(e,t){return function(n){for(var c=n.fromRow,a=n.toRow,r=n.updated,o=e.rows.slice(),l=c;l<=a;l++)o[l]=Object(k.a)(Object(k.a)({},o[l]),r);t(Object(k.a)(Object(k.a)({},e),{},{rows:o}))}}var B=function(e){Object(p.a)(n,e);var t=Object(w.a)(n);function n(e){var c;return Object(g.a)(this,n),(c=t.call(this,e)).ref=C.a.createRef(),c.onInputChange=function(){var e=c.ref.current.value;try{e=parseFloat(e),isNaN(e)&&(e=0)}catch(t){e=0}c.setState({value:e})},c.state={value:e.value},c}return Object(y.a)(n,[{key:"getValue",value:function(){return Object(h.a)({},this.props.column.key,this.state.value)}},{key:"getInputNode",value:function(){return this.ref.current?this.ref.current:null}},{key:"render",value:function(){return Object(S.jsx)("input",{ref:this.ref,defaultValue:this.state.value,onBlur:this.onInputChange,onChange:this.onInputChange})}}]),n}(C.a.Component),R={display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},A={editable:!0,editor:B,formatter:function(e){Object(p.a)(n,e);var t=Object(w.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(y.a)(n,[{key:"render",value:function(){return Object(S.jsx)("div",{style:R,children:this.props.value})}}]),n}(C.a.Component)},I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e+1;return t?Object(k.a)({key:"col_".concat(n),name:t},A):Object(k.a)({key:"col_".concat(n),name:"C".concat(n)},A)},M=function(e){for(var t={},n=1;n<=e;n++)t["col_".concat(n)]=0;return t},z=function(e){var t=Object.keys(e[0]).sort();return e.map((function(e){return t.map((function(t){return e[t]}))}))},F=function(e){return JSON.parse(JSON.stringify(e))},H=function(e){for(var t=0;t<e.length;t++){for(var n=e[t][t],c=0,a=0;a<e.length;a++)a!==t&&(c+=e[t][a]);if(Math.abs(n)<=Math.abs(c))return!1}return!0},T=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3],V=function(e,t){return T[e]/T[t]/T[e-t]},D=function(e){for(var t=e.length-1;t>0&&e[t-1]>=e[t];)t--;if(t<=0)return!1;for(var n=e.length-1;e[n]<=e[t-1];)n--;var c=e[t-1];for(e[t-1]=e[n],e[n]=c,n=e.length-1;t<n;)c=e[t],e[t]=e[n],e[n]=c,t++,n--;return!0},J=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(f.a)(Array(e.length).keys()),n={},c=[],a=0;a<t.length;a++)c.includes(e[a])||t[a]===e[a]||(n[a]=e[a],c.push(t[a],e[a]));return n},q=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},f=n.single,h=void 0!==f&&f,g=n.leftBracketOnly,y=void 0!==g&&g,p=n.rightBracketOnly,w=void 0!==p&&p,k=n.boldRows,x=void 0===k?[]:k,C=n.boldColumns,S=void 0===C?[]:C;n.transpose;t=w?String.raw(c||(c=Object(_.a)(["left|\begin{matrix}"],["\\left|\\begin{matrix}"]))):String.raw(a||(a=Object(_.a)(["left[\begin{matrix}"],["\\left[\\begin{matrix}"])));var N=e.length,B=e[0].length;if(h)for(var R=0;R<N;R++){for(var A=!1,I=0;I<x.length;I++)if(x[I]===R+1){A=!0;break}var M=String.raw(r||(r=Object(_.a)([" "," "])),Object(v.b)(e[R]));t+=A?String.raw(o||(o=Object(_.a)([" colorbox{aqua}{\bf{","}} "],[" \\colorbox{aqua}{\\bf{","}} "])),M):String.raw(l||(l=Object(_.a)(["",""])),M),t+=String.raw(i||(i=Object(_.a)(["cr"],["\\cr"])))}else for(var z=0;z<N;z++){for(var F=!1,H=0;H<x.length;H++)if(x[H]===z+1){F=!0;break}for(var T=0;T<B;T++){for(var V=!1,D=0;D<S.length;D++)if(S[D]===T+1){V=!0;break}var J=String.raw(s||(s=Object(_.a)([" "," "])),Object(v.b)(e[z][T]));t+=F||V?String.raw(b||(b=Object(_.a)([" colorbox{aqua}{\bf{","}} "],[" \\colorbox{aqua}{\\bf{","}} "])),J):String.raw(u||(u=Object(_.a)(["",""])),J),T!==B-1&&(t+=String.raw(j||(j=Object(_.a)(["&"]))))}t+=String.raw(m||(m=Object(_.a)(["cr"],["\\cr"])))}return t+=y?String.raw(O||(O=Object(_.a)(["end{matrix}\right|"],["\\end{matrix}\\right|"]))):String.raw(d||(d=Object(_.a)(["end{matrix}\right]"],["\\end{matrix}\\right]"])))},G={columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),Object(k.a)({key:"col_4",name:"C4"},A)],rows:[{col_1:0,col_2:1,col_3:-3,col_4:4},{col_1:2,col_2:-2,col_3:1,col_4:0},{col_1:2,col_2:-1,col_3:-2,col_4:4},{col_1:-6,col_2:4,col_3:3,col_4:-8}]},L=(Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),Object(k.a)({key:"col_4",name:"C4"},A),{columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),Object(k.a)({key:"col_4",name:"C4"},A)],rows:[{col_1:1,col_2:-1,col_3:0,col_4:1}]}),W=(Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),{columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),Object(k.a)({key:"col_4",name:"C4"},A)],rows:[{col_1:-1,col_2:11,col_3:-1,col_4:3},{col_1:10,col_2:-1,col_3:2,col_4:0},{col_1:0,col_2:3,col_3:-1,col_4:8},{col_1:2,col_2:-1,col_3:10,col_4:-1}]}),E={columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),Object(k.a)({key:"col_4",name:"C4"},A)],rows:[{col_1:0,col_2:0,col_3:0,col_4:0}]},P={columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),Object(k.a)({key:"col_4",name:"C4"},A)],rows:[{col_1:25,col_2:6,col_3:15,col_4:-11}]},U={columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A)],rows:[{col_1:3,col_2:-.1,col_3:-.2},{col_1:.1,col_2:7,col_3:-.3},{col_1:.3,col_2:-.2,col_3:10}]},$=(Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),{columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A)],rows:[{col_1:3,col_2:5,col_3:2},{col_1:2,col_2:3,col_3:-2}]}),K=(Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),{columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A)],rows:[{col_1:4,col_2:-2},{col_1:3,col_2:-1}]}),Q={columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A)],rows:[{col_1:1,col_2:0}]},X={columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A)],rows:[{col_1:2,col_2:3},{col_1:4,col_2:1}]},Y={columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A)],rows:[{col_1:-.7,col_2:1}]},Z={columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A)],rows:[{col_1:7,col_2:-2},{col_1:3,col_2:-1}]},ee={columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A)],rows:[{col_1:1,col_2:0}]},te={columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),Object(k.a)({key:"col_4",name:"C4"},A)],rows:[{col_1:5,col_2:0,col_3:0,col_4:-1},{col_1:1,col_2:0,col_3:-1,col_4:1},{col_1:-1.5,col_2:1,col_3:-2,col_4:1},{col_1:-1,col_2:1,col_3:3,col_4:-3}]},ne=(Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),{columns:[Object(k.a)({key:"col_1",name:"x"},A),Object(k.a)({key:"col_2",name:"y"},A)],rows:[{col_1:0,col_2:0}]}),ce={columns:[Object(k.a)({key:"col_1",name:"x"},A),Object(k.a)({key:"col_2",name:"y"},A)],rows:[{col_1:0,col_2:1}]},ae={columns:[Object(k.a)({key:"col_1",name:"x"},A),Object(k.a)({key:"col_2",name:"y"},A)],rows:[{col_1:1,col_2:1}]},re={columns:[Object(k.a)({key:"col_1",name:"x"},A),Object(k.a)({key:"col_2",name:"y"},A),Object(k.a)({key:"col_3",name:"u"},A)],rows:[{col_1:0,col_2:1,col_3:2}]},oe={columns:[Object(k.a)({key:"col_1",name:"a"},A),Object(k.a)({key:"col_2",name:"y(a)"},A),Object(k.a)({key:"col_3",name:"b"},A),Object(k.a)({key:"col_4",name:"y(b)"},A)],rows:[{col_1:0,col_2:0,col_3:1,col_4:2}]},le={columns:[Object(k.a)({key:"col_1",name:"a"},A),Object(k.a)({key:"col_2",name:"y(a)"},A),Object(k.a)({key:"col_3",name:"b"},A),Object(k.a)({key:"col_4",name:"y(b)"},A)],rows:[{col_1:0,col_2:0,col_3:1,col_4:5}]}}}]);
//# sourceMappingURL=39.d2363f6b.chunk.js.map