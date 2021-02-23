(this["webpackJsonpnumerical-methods-js"]=this["webpackJsonpnumerical-methods-js"]||[]).push([[12],{293:function(e,n,t){"use strict";t.r(n);var a,r,c,i,o,l,s,b,j,u=t(52),d=t(47),O=t(50),m=(t(45),t(63)),h=t(0),g=t(62),x=t(229),f=(t(56),t(57)),y=t(265),_=t(261),p=t(273),v=t(282),k=t(279),C=t(280),w=t(271),S=t(264),I=t(99),N=t.n(I),M=t(98),A=t.n(M),U=t(322),E=t(330),L=t(331),z=t(283),R=t(69),B=t.n(R),G=t(70),T=t(269),q=t(13),H=t(94),J=t(284),F=t(256),V=t(97),D=t.n(V),W=t(6),K=[{target:".matrix-size-input",title:"Size",content:"Increase/Reduce the matrix's size",disableBeacon:!0},{target:".matrix-input",title:"Matrix",content:"Specify the matrix here."},{target:".step-math",title:"Steps",content:"The steps are shown here."},{target:".iteration-slider",title:"Iteration slider",content:"Change the slider to view the result of any iteration."}],P=Object(F.a)((function(e){return{paper:{padding:e.spacing(.5),textAlign:"center",color:e.palette.text.primary,margin:e.spacing(1)},container:{"& > *":{margin:e.spacing(1)}},card:{margin:e.spacing(0)},cardContent:{overflow:"auto","& > *":{margin:e.spacing(.5)}},overflow:{overflow:"auto"},matrixCard:{width:"60vw"},divider:{width:"500 px",height:"100px",marginTop:"20px",marginBottom:"20px"},fab:{position:"fixed",bottom:e.spacing(4),right:e.spacing(2)}}}));function Q(e){e.smallScreen;var n,t=e.params,d=P(),g=Object(h.useState)(1),_=Object(O.a)(g,2),v=_[0],S=_[1];if(v>t.iterations)S(t.iterations);else{var I=t.results[v-1];n=String.raw(a||(a=Object(u.a)(["\n        displaystyle\n        \begin{array}{l}\n        \begin{array}{lcl}"],["\n        \\displaystyle\n        \\begin{array}{l}\n        \\begin{array}{lcl}"]))),1===v&&(n+=String.raw(r||(r=Object(u.a)(["\n            \\\n            \\ \text{After LU decomposition,}\n            \\ \begin{array}{lcl}\n            \\ A &=& L U\n            \\\n            \\   &=& "," ","\n            end{array}\n            \\\n            \\ hline\n            "],["\n            \\\\\n            \\\\ \\text{After LU decomposition,}\n            \\\\ \\begin{array}{lcl}\n            \\\\ A &=& L U\n            \\\\\n            \\\\   &=& "," ","\n            \\end{array}\n            \\\\\n            \\\\ \\hline\n            "])),Object(m.n)(t.lowerMatrix),Object(m.n)(t.lowerMatrix))),n+=String.raw(c||(c=Object(u.a)(["\n        \\ I_{","} = ","\n        \\\n        \\ \text{Using backsubstitution,}\n        \\ \begin{array}{rcl}\n         L d &=& I_{","}\n        \\\n        \\ "," d &=& ","\n        \\"],["\n        \\\\ I_{","} = ","\n        \\\\\n        \\\\ \\text{Using backsubstitution,}\n        \\\\ \\begin{array}{rcl}\n         L d &=& I_{","}\n        \\\\\n        \\\\ "," d &=& ","\n        \\\\"])),v,Object(m.n)(I.identityColumn,{single:!0}),v,Object(m.n)(t.lowerMatrix),Object(m.n)(I.identityColumn,{single:!0})),I.dError?n+=String.raw(s||(s=Object(u.a)(["\n            \\ end{array}\n            \\ \text{Given that d cannot be solved,}\n            \\ \text{an inverse does not exist.}\n            \\\n            "],["\n            \\\\ \\end{array}\n            \\\\ \\text{Given that d cannot be solved,}\n            \\\\ \\text{an inverse does not exist.}\n            \\\\\n            "]))):(n+=String.raw(i||(i=Object(u.a)(["\n            \\ d &=& ","\n            \\ end{array}\n            \\\n            \\ hline\n            \\ \text{Using backsubstitution again,}\n            \\ \begin{array}{rcl}\n            U x &=& d\n            \\\n            \\ "," x &=& ","\n            \\\n            "],["\n            \\\\ d &=& ","\n            \\\\ \\end{array}\n            \\\\\n            \\\\ \\hline\n            \\\\ \\text{Using backsubstitution again,}\n            \\\\ \\begin{array}{rcl}\n            U x &=& d\n            \\\\\n            \\\\ "," x &=& ","\n            \\\\\n            "])),Object(m.n)(I.d,{single:!0}),Object(m.n)(t.upperMatrix),Object(m.n)(I.d,{single:!0})),I.xError?n+=String.raw(l||(l=Object(u.a)(["\n                \\ end{array}\n                \\ \text{Given that x cannot be solved,}\n                \\ \text{an inverse does not exist.}\n                \\\n                "],["\n                \\\\ \\end{array}\n                \\\\ \\text{Given that x cannot be solved,}\n                \\\\ \\text{an inverse does not exist.}\n                \\\\\n                "]))):n+=String.raw(o||(o=Object(u.a)(["\n                \\ x &=& ","\n                \\ end{array}\n                \\\n                \\ hline\n                \\ A^{-1}_{","} = x = ","\n\n                "],["\n                \\\\ x &=& ","\n                \\\\ \\end{array}\n                \\\\\n                \\\\ \\hline\n                \\\\ A^{-1}_{","} = x = ","\n\n                "])),Object(m.n)(I.x,{single:!0}),v,Object(m.n)(I.x,{single:!0}))),v!==t.iterations||I.dError||I.xError||(n+=String.raw(b||(b=Object(u.a)(["\n            \\\n            \\ hline\n            \\\n            \\ Inverse, A^{-1} = ","\n            \\ \text{To verify the answer,}\n            \\ \begin{array}{lcl}\n            \\ A A^{-1} &=& "," ","\n            \\\n            \\                           &=& ","\n            \\\n            \\                           &=&  \text{Identity Matrix}\n            \\ end{array}\n            \\\n            \\\n            "],["\n            \\\\\n            \\\\ \\hline\n            \\\\\n            \\\\ Inverse, A^{-1} = ","\n            \\\\ \\text{To verify the answer,}\n            \\\\ \\begin{array}{lcl}\n            \\\\ A A^{-1} &=& "," ","\n            \\\\\n            \\\\                           &=& ","\n            \\\\\n            \\\\                           &=&  \\text{Identity Matrix}\n            \\\\ \\end{array}\n            \\\\\n            \\\\\n            "])),Object(m.n)(t.inverseMatrix),Object(m.n)(t.originalMatrix),Object(m.n)(t.inverseMatrix),Object(m.n)(Object(x.vd)(t.originalMatrix,t.inverseMatrix)))),n+=String.raw(j||(j=Object(u.a)(["end{array}end{array}"],["\\end{array}\\end{array}"])))}return Object(W.jsx)(p.a,{className:d.container,children:Object(W.jsxs)(w.a,{container:!0,direction:"column",alignItems:"center",justify:"flex-start",children:[Object(W.jsx)(w.a,{xs:!0,item:!0,className:"iteration-slider",children:Object(W.jsx)(q.b,{direction:"left",triggerOnce:!0,children:Object(W.jsx)(U.a,{id:"iteration-slider",width:"70vw",children:Object(W.jsx)(E.a,{orientation:"horizontal",onChangeCommitted:function(e,n){S(n)},defaultValue:1,"aria-labelledby":"discrete-slider-small-steps",step:1,marks:!0,min:1,max:t.iterations<=0?1:t.iterations,valueLabelDisplay:"on"})})})}),Object(W.jsx)(w.a,{xs:!0,item:!0,className:"step-math",children:Object(W.jsx)(q.b,{direction:"right",triggerOnce:!0,children:Object(W.jsx)(k.a,{className:d.card,children:Object(W.jsxs)(C.a,{className:d.cardContent,children:[Object(W.jsxs)(y.a,{variant:"h6",children:["Iteration ",v,":"]}),Object(W.jsx)(f.a,{math:n,block:!0})]})})})})]})})}n.default=function(e){var n=e.methodName;Object(h.useEffect)((function(){document.title=n}));for(var t=P(),a=Object(J.a)(Object(H.a)().breakpoints.down("sm")),r=a?45:60,c=a?10:100,i=a?5:20,o=Object(h.useState)(m.i),l=Object(O.a)(o,2),s=l[0],b=l[1],j=function(e){return function(){var n=s.columns.slice(),t=s.rows.slice();if(e){n.push(Object(m.b)(n.length)),t.push(Object(m.c)(s.columns.length));for(var a=0;a<t.length;a++)t[a]["col_".concat(n.length)]=0}else{if(2===n.length)return;t.pop();for(var r=0;r<t.length;r++)delete t[r]["col_".concat(n.length)];n.pop()}b({columns:n,rows:t})}},u=Object(m.e)(s.rows),f=s.rows.length,I=f,M=Object(x.dd)(u),U=M.L,E=M.U,R=M.p,F=Object(x.Cc)(f),V=[],X=[],Y=!1,Z=0;Z<I;Z++){var $=Object(x.jb)(F,Z).toArray(),ee=void 0,ne=!1,te=void 0,ae=!1;try{ee=Object(x.bd)(U,$).map((function(e){return e[0]}))}catch(je){ne=!0}try{te=Object(x.mf)(E,ee).map((function(e){return e[0]}))}catch(ue){ae=!0}if(V.push(te),X.push({identityColumn:$,d:ee,dError:ne,x:te,xError:ae}),ne||ae){Y=!0,I=Z+1;break}}Y||(V=Object(x.ff)(V),V=R.map((function(e){return V[e]})));var re,ce,ie=Object(h.useState)(!1),oe=Object(O.a)(ie,2),le=oe[0],se=oe[1],be={originalMatrix:u,matrixSize:f,lowerMatrix:U,upperMatrix:E,iterations:I,results:X,inverseMatrix:V};return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(g.a,{methodName:n}),Object(W.jsx)(_.a,{className:t.paper,children:Object(W.jsx)(p.a,{className:t.container,children:Object(W.jsxs)(q.c,{duration:500,triggerOnce:!0,cascade:!0,children:[Object(W.jsx)(y.a,{variant:"body1"}),Object(W.jsx)(w.a,{container:!0,spacing:1,direction:"row",alignItems:"center",justify:"center",children:Object(W.jsx)(w.a,{xs:!0,item:!0,children:Object(W.jsx)(k.a,{className:t.card,children:Object(W.jsx)(C.a,{className:t.cardContent,children:Object(W.jsxs)(w.a,{container:!0,spacing:1,direction:"column",alignItems:"center",justify:"center",children:[Object(W.jsxs)(w.a,{xs:!0,item:!0,className:"matrix-size-input",container:!0,spacing:1,direction:"row",alignItems:"center",justify:"center",children:[Object(W.jsx)(y.a,{variant:"h6",children:"Size:\xa0\xa0\xa0\xa0\xa0"}),Object(W.jsx)(S.a,{variant:"contained",color:"primary",onClick:j(!1),children:Object(W.jsx)(A.a,{color:"error"})}),Object(W.jsx)(S.a,{variant:"contained",color:"primary",onClick:j(!0),children:Object(W.jsx)(N.a,{})})]}),Object(W.jsxs)(w.a,{xs:!0,item:!0,className:"matrix-input",container:!0,spacing:1,direction:"column",alignItems:"center",justify:"center",children:[Object(W.jsx)(w.a,{xs:!0,item:!0,children:Object(W.jsx)(y.a,{variant:"h6",children:"Matrix, A:"})}),Object(W.jsx)(w.a,{xs:!0,item:!0,container:!0,spacing:0,direction:"row",alignItems:"center",justify:"center",children:Object(W.jsx)(w.a,{item:!0,className:t.overflow,children:Object(W.jsx)(D.a,{columns:s.columns,rowGetter:function(e){return s.rows[e]},rowsCount:s.rows.length,onGridRowsUpdated:(re=s,ce=b,function(e){for(var n=e.fromRow,t=e.toRow,a=e.updated,r=re.rows.slice(),c=n;c<=t;c++)r[c]=Object(d.a)(Object(d.a)({},r[c]),a);ce(Object(d.a)(Object(d.a)({},re),{},{rows:r}))}),enableCellSelect:!0,headerRowHeight:1,minColumnWidth:r,minWidth:r*s.columns.length+c,rowHeight:35,minHeight:35*s.rows.length+i})},Math.random())})]})]})})})})})]})})}),Object(W.jsx)(v.a,{}),Object(W.jsx)(T.a,{in:true,children:Object(W.jsx)(q.a,{triggerOnce:!0,children:Object(W.jsx)(_.a,{className:t.paper,children:Object(W.jsx)(Q,{smallScreen:a,params:be})})})}),Object(W.jsx)(L.a,{arrow:!0,title:"Help",placement:"top",children:Object(W.jsx)(z.a,{color:"secondary","aria-label":"help",className:t.fab,onClick:function(){se(!0)},children:Object(W.jsx)(B.a,{})})}),Object(W.jsx)(G.a,{scrollToFirstStep:!0,run:le,steps:K,continuous:!0,showSkipButton:!0,locale:{last:"End tour"},callback:function(e){"reset"!==e.action&&"close"!==e.action||se(!1)}})]})}},63:function(e,n,t){"use strict";t.d(n,"b",(function(){return A})),t.d(n,"c",(function(){return U})),t.d(n,"e",(function(){return E})),t.d(n,"a",(function(){return L})),t.d(n,"m",(function(){return z})),t.d(n,"p",(function(){return R})),t.d(n,"o",(function(){return B})),t.d(n,"d",(function(){return G})),t.d(n,"n",(function(){return T})),t.d(n,"g",(function(){return q})),t.d(n,"k",(function(){return H})),t.d(n,"h",(function(){return J})),t.d(n,"f",(function(){return F})),t.d(n,"l",(function(){return V})),t.d(n,"i",(function(){return D})),t.d(n,"j",(function(){return W}));var a,r,c,i,o,l,s,b,j,u,d,O,m,h=t(52),g=t(77),x=t(47),f=t(86),y=t(95),_=t(96),p=t(101),v=t(100),k=t(45),C=t(0),w=t.n(C),S=t(6),I=function(e){Object(p.a)(t,e);var n=Object(v.a)(t);function t(e){var a;return Object(y.a)(this,t),(a=n.call(this,e)).ref=w.a.createRef(),a.onInputChange=function(){var e=a.ref.current.value;try{e=parseFloat(e),isNaN(e)&&(e=0)}catch(n){e=0}a.setState({value:e})},a.state={value:e.value},a}return Object(_.a)(t,[{key:"getValue",value:function(){return Object(f.a)({},this.props.column.key,this.state.value)}},{key:"getInputNode",value:function(){return this.ref.current?this.ref.current:null}},{key:"render",value:function(){return Object(S.jsx)("input",{ref:this.ref,defaultValue:this.state.value,onBlur:this.onInputChange,onChange:this.onInputChange})}}]),t}(w.a.Component),N={display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},M={editable:!0,editor:I,formatter:function(e){Object(p.a)(t,e);var n=Object(v.a)(t);function t(){return Object(y.a)(this,t),n.apply(this,arguments)}return Object(_.a)(t,[{key:"render",value:function(){return Object(S.jsx)("div",{style:N,children:this.props.value})}}]),t}(w.a.Component)},A=function(e){var n=e+1;return Object(x.a)({key:"col_".concat(n),name:"C".concat(n)},M)},U=function(e){for(var n={},t=1;t<=e;t++)n["col_".concat(t)]=0;return n},E=function(e){var n=Object.keys(e[0]).sort();return e.map((function(e){return n.map((function(n){return e[n]}))}))},L=function(e){return JSON.parse(JSON.stringify(e))},z=function(e){for(var n=0;n<e.length;n++){for(var t=e[n][n],a=0,r=0;r<e.length;r++)r!==n&&(a+=e[n][r]);if(Math.abs(t)<=Math.abs(a))return!1}return!0},R=[1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3],B=function(e){for(var n=e.length-1;n>0&&e[n-1]>=e[n];)n--;if(n<=0)return!1;for(var t=e.length-1;e[t]<=e[n-1];)t--;var a=e[n-1];for(e[n-1]=e[t],e[t]=a,t=e.length-1;n<t;)a=e[n],e[n]=e[t],e[t]=a,n++,t--;return!0},G=function(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(g.a)(Array(e.length).keys()),t={},a=[],r=0;r<n.length;r++)a.includes(e[r])||n[r]===e[r]||(t[r]=e[r],a.push(n[r],e[r]));return t},T=function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},g=t.single,x=void 0!==g&&g,f=t.leftBracketOnly,y=void 0!==f&&f,_=t.rightBracketOnly,p=void 0!==_&&_,v=t.boldRows,C=void 0===v?[]:v,w=t.boldColumns,S=void 0===w?[]:w;t.transpose;n=p?String.raw(a||(a=Object(h.a)(["left|\begin{matrix}"],["\\left|\\begin{matrix}"]))):String.raw(r||(r=Object(h.a)(["left[\begin{matrix}"],["\\left[\\begin{matrix}"])));var I=e.length,N=e[0].length;if(x)for(var M=0;M<I;M++){for(var A=!1,U=0;U<C.length;U++)if(C[U]===M+1){A=!0;break}var E=String.raw(c||(c=Object(h.a)([" "," "])),Object(k.b)(e[M]));n+=A?String.raw(i||(i=Object(h.a)([" colorbox{aqua}{\bf{","}} "],[" \\colorbox{aqua}{\\bf{","}} "])),E):String.raw(o||(o=Object(h.a)(["",""])),E),n+=String.raw(l||(l=Object(h.a)(["cr"],["\\cr"])))}else for(var L=0;L<I;L++){for(var z=!1,R=0;R<C.length;R++)if(C[R]===L+1){z=!0;break}for(var B=0;B<N;B++){for(var G=!1,T=0;T<S.length;T++)if(S[T]===B+1){G=!0;break}var q=String.raw(s||(s=Object(h.a)([" "," "])),Object(k.b)(e[L][B]));n+=z||G?String.raw(b||(b=Object(h.a)([" colorbox{aqua}{\bf{","}} "],[" \\colorbox{aqua}{\\bf{","}} "])),q):String.raw(j||(j=Object(h.a)(["",""])),q),B!==N-1&&(n+=String.raw(u||(u=Object(h.a)(["&"]))))}n+=String.raw(d||(d=Object(h.a)(["cr"],["\\cr"])))}return n+=y?String.raw(O||(O=Object(h.a)(["end{matrix}\right|"],["\\end{matrix}\\right|"]))):String.raw(m||(m=Object(h.a)(["end{matrix}\right]"],["\\end{matrix}\\right]"])))},q={columns:[Object(x.a)({key:"col_1",name:"C1"},M),Object(x.a)({key:"col_2",name:"C2"},M),Object(x.a)({key:"col_3",name:"C3"},M),Object(x.a)({key:"col_4",name:"C4"},M)],rows:[{col_1:0,col_2:1,col_3:-3,col_4:4},{col_1:2,col_2:-2,col_3:1,col_4:0},{col_1:2,col_2:-1,col_3:-2,col_4:4},{col_1:-6,col_2:4,col_3:3,col_4:-8}]},H=(Object(x.a)({key:"col_1",name:"C1"},M),Object(x.a)({key:"col_2",name:"C2"},M),Object(x.a)({key:"col_3",name:"C3"},M),Object(x.a)({key:"col_4",name:"C4"},M),{columns:[Object(x.a)({key:"col_1",name:"C1"},M),Object(x.a)({key:"col_2",name:"C2"},M),Object(x.a)({key:"col_3",name:"C3"},M),Object(x.a)({key:"col_4",name:"C4"},M)],rows:[{col_1:1,col_2:-1,col_3:0,col_4:1}]}),J=(Object(x.a)({key:"col_1",name:"C1"},M),Object(x.a)({key:"col_2",name:"C2"},M),Object(x.a)({key:"col_3",name:"C3"},M),Object(x.a)({key:"col_1",name:"C1"},M),Object(x.a)({key:"col_2",name:"C2"},M),Object(x.a)({key:"col_3",name:"C3"},M),Object(x.a)({key:"col_1",name:"C1"},M),Object(x.a)({key:"col_2",name:"C2"},M),Object(x.a)({key:"col_3",name:"C3"},M),{columns:[Object(x.a)({key:"col_1",name:"C1"},M),Object(x.a)({key:"col_2",name:"C2"},M),Object(x.a)({key:"col_3",name:"C3"},M),Object(x.a)({key:"col_4",name:"C4"},M)],rows:[{col_1:-1,col_2:11,col_3:-1,col_4:3},{col_1:10,col_2:-1,col_3:2,col_4:0},{col_1:0,col_2:3,col_3:-1,col_4:8},{col_1:2,col_2:-1,col_3:10,col_4:-1}]}),F={columns:[Object(x.a)({key:"col_1",name:"C1"},M),Object(x.a)({key:"col_2",name:"C2"},M),Object(x.a)({key:"col_3",name:"C3"},M),Object(x.a)({key:"col_4",name:"C4"},M)],rows:[{col_1:0,col_2:0,col_3:0,col_4:0}]},V={columns:[Object(x.a)({key:"col_1",name:"C1"},M),Object(x.a)({key:"col_2",name:"C2"},M),Object(x.a)({key:"col_3",name:"C3"},M),Object(x.a)({key:"col_4",name:"C4"},M)],rows:[{col_1:25,col_2:6,col_3:15,col_4:-11}]},D={columns:[Object(x.a)({key:"col_1",name:"C1"},M),Object(x.a)({key:"col_2",name:"C2"},M),Object(x.a)({key:"col_3",name:"C3"},M)],rows:[{col_1:3,col_2:-.1,col_3:-.2},{col_1:.1,col_2:7,col_3:-.3},{col_1:.3,col_2:-.2,col_3:10}]},W=(Object(x.a)({key:"col_1",name:"C1"},M),Object(x.a)({key:"col_2",name:"C2"},M),{columns:[Object(x.a)({key:"col_1",name:"C1"},M),Object(x.a)({key:"col_2",name:"C2"},M),Object(x.a)({key:"col_3",name:"C3"},M)],rows:[{col_1:3,col_2:2,col_3:2},{col_1:2,col_2:3,col_3:-2}]});Object(x.a)({key:"col_1",name:"C1"},M),Object(x.a)({key:"col_2",name:"C2"},M),Object(x.a)({key:"col_1",name:"C1"},M),Object(x.a)({key:"col_2",name:"C2"},M),Object(x.a)({key:"col_3",name:"C3"},M),Object(x.a)({key:"col_1",name:"C1"},M),Object(x.a)({key:"col_2",name:"C2"},M),Object(x.a)({key:"col_3",name:"C3"},M),Object(x.a)({key:"col_1",name:"C1"},M),Object(x.a)({key:"col_2",name:"C2"},M),Object(x.a)({key:"col_3",name:"C3"},M),Object(x.a)({key:"col_1",name:"C1"},M),Object(x.a)({key:"col_2",name:"C2"},M),Object(x.a)({key:"col_3",name:"C3"},M)}}]);
//# sourceMappingURL=12.ac396f44.chunk.js.map