(this["webpackJsonpnumerical-methods-js"]=this["webpackJsonpnumerical-methods-js"]||[]).push([[21],{302:function(e,n,t){"use strict";t.r(n);var c,a,r,o,i,l,s,b,j,u=t(51),O=t(56),m=(t(46),t(61)),d=t(0),_=t(68),y=t(247),h=(t(59),t(60)),f=t(276),x=t(272),g=t(284),v=t(291),k=t(288),C=t(289),p=t(282),w=t(275),S=t(105),I=t.n(S),N=t(104),M=t.n(N),A=t(329),U=t(336),E=t(337),L=t(292),z=t(73),R=t.n(z),q=t(74),B=t(280),G=t(14),H=t(72),J=t(293),T=t(267),F=t(103),V=t.n(F),D=t(6),W=[{target:".matrix-size-input",title:"Size",content:"Increase/Reduce the matrix's size",disableBeacon:!0},{target:".matrix-input",title:"Matrix",content:"Specify the matrix here."},{target:".iteration-slider",title:"Iteration slider",content:"Change the slider to view the result of any iteration."}],K=Object(T.a)((function(e){return{paper:{padding:e.spacing(.5),textAlign:"center",color:e.palette.text.primary,margin:e.spacing(1)},container:{"& > *":{margin:e.spacing(1)}},card:{margin:e.spacing(0)},cardContent:{overflow:"auto","& > *":{margin:e.spacing(.5)}},overflow:{overflow:"auto"},matrixCard:{width:"60vw"},divider:{width:"500 px",height:"100px",marginTop:"20px",marginBottom:"20px"},fab:{position:"fixed",bottom:e.spacing(4),right:e.spacing(2)}}}));function P(e){e.smallScreen;var n,t=e.params,_=K(),x=Object(d.useState)(1),v=Object(O.a)(x,2),w=v[0],S=v[1];if(w>t.iterations)S(t.iterations);else{var I=t.results[w-1];n=String.raw(c||(c=Object(u.a)(["\n        displaystyle\n        \begin{array}{l}\n        \begin{array}{lcl}"],["\n        \\displaystyle\n        \\begin{array}{l}\n        \\begin{array}{lcl}"]))),1===w&&(n+=String.raw(a||(a=Object(u.a)(["\n            \\\n            \\ \text{After LU decomposition,}\n            \\ \begin{array}{lcl}\n            \\ A &=& L U\n            \\\n            \\   &=& "," ","\n            end{array}\n            \\\n            \\ hline\n            "],["\n            \\\\\n            \\\\ \\text{After LU decomposition,}\n            \\\\ \\begin{array}{lcl}\n            \\\\ A &=& L U\n            \\\\\n            \\\\   &=& "," ","\n            \\end{array}\n            \\\\\n            \\\\ \\hline\n            "])),Object(m.v)(t.lowerMatrix),Object(m.v)(t.lowerMatrix))),n+=String.raw(r||(r=Object(u.a)(["\n        \\ I_{","} = ","\n        \\\n        \\ \text{Using backsubstitution,}\n        \\ \begin{array}{rcl}\n         L d &=& I_{","}\n        \\\n        \\ "," d &=& ","\n        \\"],["\n        \\\\ I_{","} = ","\n        \\\\\n        \\\\ \\text{Using backsubstitution,}\n        \\\\ \\begin{array}{rcl}\n         L d &=& I_{","}\n        \\\\\n        \\\\ "," d &=& ","\n        \\\\"])),w,Object(m.v)(I.identityColumn,{single:!0}),w,Object(m.v)(t.lowerMatrix),Object(m.v)(I.identityColumn,{single:!0})),I.dError?n+=String.raw(s||(s=Object(u.a)(["\n            \\ end{array}\n            \\ \text{Given that d cannot be solved,}\n            \\ \text{an inverse does not exist.}\n            \\\n            "],["\n            \\\\ \\end{array}\n            \\\\ \\text{Given that d cannot be solved,}\n            \\\\ \\text{an inverse does not exist.}\n            \\\\\n            "]))):(n+=String.raw(o||(o=Object(u.a)(["\n            \\ d &=& ","\n            \\ end{array}\n            \\\n            \\ hline\n            \\ \text{Using backsubstitution again,}\n            \\ \begin{array}{rcl}\n            U x &=& d\n            \\\n            \\ "," x &=& ","\n            \\\n            "],["\n            \\\\ d &=& ","\n            \\\\ \\end{array}\n            \\\\\n            \\\\ \\hline\n            \\\\ \\text{Using backsubstitution again,}\n            \\\\ \\begin{array}{rcl}\n            U x &=& d\n            \\\\\n            \\\\ "," x &=& ","\n            \\\\\n            "])),Object(m.v)(I.d,{single:!0}),Object(m.v)(t.upperMatrix),Object(m.v)(I.d,{single:!0})),I.xError?n+=String.raw(l||(l=Object(u.a)(["\n                \\ end{array}\n                \\ \text{Given that x cannot be solved,}\n                \\ \text{an inverse does not exist.}\n                \\\n                "],["\n                \\\\ \\end{array}\n                \\\\ \\text{Given that x cannot be solved,}\n                \\\\ \\text{an inverse does not exist.}\n                \\\\\n                "]))):n+=String.raw(i||(i=Object(u.a)(["\n                \\ x &=& ","\n                \\ end{array}\n                \\\n                \\ hline\n                \\ A^{-1}_{","} = x = ","\n\n                "],["\n                \\\\ x &=& ","\n                \\\\ \\end{array}\n                \\\\\n                \\\\ \\hline\n                \\\\ A^{-1}_{","} = x = ","\n\n                "])),Object(m.v)(I.x,{single:!0}),w,Object(m.v)(I.x,{single:!0}))),w!==t.iterations||I.dError||I.xError||(n+=String.raw(b||(b=Object(u.a)(["\n            \\\n            \\ hline\n            \\\n            \\ Inverse, A^{-1} = ","\n            \\\n            \\ \text{To verify the answer,}\n            \\ \begin{array}{lcl}\n            \\ A A^{-1} &=& "," ","\n            \\\n            \\                           &=& ","\n            \\\n            \\                           &=&  \text{Identity Matrix}\n            \\ end{array}\n            \\\n            \\\n            "],["\n            \\\\\n            \\\\ \\hline\n            \\\\\n            \\\\ Inverse, A^{-1} = ","\n            \\\\\n            \\\\ \\text{To verify the answer,}\n            \\\\ \\begin{array}{lcl}\n            \\\\ A A^{-1} &=& "," ","\n            \\\\\n            \\\\                           &=& ","\n            \\\\\n            \\\\                           &=&  \\text{Identity Matrix}\n            \\\\ \\end{array}\n            \\\\\n            \\\\\n            "])),Object(m.v)(t.inverseMatrix),Object(m.v)(t.originalMatrix),Object(m.v)(t.inverseMatrix),Object(m.v)(Object(y.vd)(t.originalMatrix,t.inverseMatrix)))),n+=String.raw(j||(j=Object(u.a)(["end{array}end{array}"],["\\end{array}\\end{array}"])))}return Object(D.jsx)(g.a,{className:_.container,children:Object(D.jsxs)(p.a,{container:!0,direction:"column",alignItems:"center",justify:"flex-start",children:[Object(D.jsx)(p.a,{xs:!0,item:!0,className:"iteration-slider",children:Object(D.jsx)(G.b,{direction:"left",triggerOnce:!0,children:Object(D.jsx)(A.a,{id:"iteration-slider",width:"70vw",children:Object(D.jsx)(U.a,{orientation:"horizontal",onChangeCommitted:function(e,n){S(n)},defaultValue:1,"aria-labelledby":"discrete-slider-small-steps",step:1,marks:!0,min:1,max:t.iterations<=0?1:t.iterations,valueLabelDisplay:"on"})})})}),Object(D.jsx)(p.a,{xs:!0,item:!0,className:"step-math",children:Object(D.jsx)(G.b,{direction:"right",triggerOnce:!0,children:Object(D.jsx)(k.a,{className:_.card,children:Object(D.jsxs)(C.a,{className:_.cardContent,children:[Object(D.jsxs)(f.a,{variant:"h6",children:["Iteration ",w,":"]}),Object(D.jsx)(h.a,{math:n,block:!0})]})})})})]})})}n.default=function(e){var n=e.methodName;Object(d.useEffect)((function(){document.title=n}));for(var t=K(),c=Object(J.a)(Object(H.a)().breakpoints.down("sm")),a=c?45:60,r=c?10:100,o=c?5:20,i=Object(d.useState)(m.q),l=Object(O.a)(i,2),s=l[0],b=l[1],j=function(e){return function(){var n=s.columns.slice(),t=s.rows.slice();if(e){n.push(Object(m.b)(n.length)),t.push(Object(m.c)(s.columns.length));for(var c=0;c<t.length;c++)t[c]["col_".concat(n.length)]=0}else{if(2===n.length)return;t.pop();for(var a=0;a<t.length;a++)delete t[a]["col_".concat(n.length)];n.pop()}b({columns:n,rows:t})}},u=Object(m.f)(s.rows),h=s.rows.length,S=h,N=Object(y.dd)(u),A=N.L,U=N.U,z=N.p,T=Object(y.Cc)(h),F=[],Q=[],X=!1,Y=0;Y<S;Y++){var Z=Object(y.jb)(T,Y).toArray(),$=void 0,ee=!1,ne=void 0,te=!1;try{$=Object(y.bd)(A,Z).map((function(e){return e[0]}))}catch(le){ee=!0}try{ne=Object(y.mf)(U,$).map((function(e){return e[0]}))}catch(se){te=!0}if(F.push(ne),Q.push({identityColumn:Z,d:$,dError:ee,x:ne,xError:te}),ee||te){X=!0,S=Y+1;break}}X||(F=Object(y.ff)(F),F=z.map((function(e){return F[e]})));var ce=Object(d.useState)(!1),ae=Object(O.a)(ce,2),re=ae[0],oe=ae[1],ie={originalMatrix:u,matrixSize:h,lowerMatrix:A,upperMatrix:U,iterations:S,results:Q,inverseMatrix:F};return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(_.a,{methodName:n}),Object(D.jsx)(x.a,{className:t.paper,children:Object(D.jsx)(g.a,{className:t.container,children:Object(D.jsxs)(G.c,{duration:500,triggerOnce:!0,cascade:!0,children:[Object(D.jsx)(f.a,{variant:"body1"}),Object(D.jsx)(p.a,{container:!0,spacing:1,direction:"row",alignItems:"center",justify:"center",children:Object(D.jsx)(p.a,{xs:!0,item:!0,children:Object(D.jsx)(k.a,{className:t.card,children:Object(D.jsx)(C.a,{className:t.cardContent,children:Object(D.jsxs)(p.a,{container:!0,spacing:1,direction:"column",alignItems:"center",justify:"center",children:[Object(D.jsxs)(p.a,{xs:!0,item:!0,className:"matrix-size-input",container:!0,spacing:1,direction:"row",alignItems:"center",justify:"center",children:[Object(D.jsx)(f.a,{variant:"h6",children:"Size:\xa0\xa0\xa0\xa0\xa0"}),Object(D.jsx)(w.a,{variant:"contained",color:"primary",onClick:j(!1),children:Object(D.jsx)(M.a,{color:"error"})}),Object(D.jsx)(w.a,{variant:"contained",color:"primary",onClick:j(!0),children:Object(D.jsx)(I.a,{})})]}),Object(D.jsxs)(p.a,{xs:!0,item:!0,className:"matrix-input",container:!0,spacing:1,direction:"column",alignItems:"center",justify:"center",children:[Object(D.jsx)(p.a,{xs:!0,item:!0,children:Object(D.jsx)(f.a,{variant:"h6",children:"Matrix, A:"})}),Object(D.jsx)(p.a,{xs:!0,item:!0,container:!0,spacing:0,direction:"row",alignItems:"center",justify:"center",children:Object(D.jsx)(p.a,{item:!0,className:t.overflow,children:Object(D.jsx)(V.a,{columns:s.columns,rowGetter:function(e){return s.rows[e]},rowsCount:s.rows.length,onGridRowsUpdated:Object(m.d)(s,b),enableCellSelect:!0,headerRowHeight:1,minColumnWidth:a,minWidth:a*s.columns.length+r,rowHeight:35,minHeight:35*s.rows.length+o})},0)})]})]})})})})})]})})}),Object(D.jsx)(v.a,{}),Object(D.jsx)(B.a,{in:true,children:Object(D.jsx)(G.a,{triggerOnce:!0,children:Object(D.jsx)(x.a,{className:t.paper,children:Object(D.jsx)(P,{smallScreen:c,params:ie})})})}),Object(D.jsx)(E.a,{arrow:!0,title:"Help",placement:"top",children:Object(D.jsx)(L.a,{color:"secondary","aria-label":"help",className:t.fab,onClick:function(){oe(!0)},children:Object(D.jsx)(R.a,{})})}),Object(D.jsx)(q.a,{scrollToFirstStep:!0,run:re,steps:W,continuous:!0,showSkipButton:!0,locale:{last:"End tour"},callback:function(e){"reset"!==e.action&&"close"!==e.action||oe(!1)}})]})}},61:function(e,n,t){"use strict";t.d(n,"d",(function(){return I})),t.d(n,"b",(function(){return U})),t.d(n,"c",(function(){return E})),t.d(n,"f",(function(){return L})),t.d(n,"a",(function(){return z})),t.d(n,"u",(function(){return R})),t.d(n,"x",(function(){return q})),t.d(n,"w",(function(){return B})),t.d(n,"e",(function(){return G})),t.d(n,"v",(function(){return H})),t.d(n,"k",(function(){return J})),t.d(n,"s",(function(){return T})),t.d(n,"p",(function(){return F})),t.d(n,"j",(function(){return V})),t.d(n,"t",(function(){return D})),t.d(n,"q",(function(){return W})),t.d(n,"r",(function(){return K})),t.d(n,"l",(function(){return P})),t.d(n,"g",(function(){return Q})),t.d(n,"m",(function(){return X})),t.d(n,"h",(function(){return Y})),t.d(n,"n",(function(){return Z})),t.d(n,"i",(function(){return $})),t.d(n,"o",(function(){return ee}));var c,a,r,o,i,l,s,b,j,u,O,m,d,_=t(51),y=t(66),h=t(98),f=t(88),x=t(89),g=t(95),v=t(94),k=t(55),C=t(46),p=t(0),w=t.n(p),S=t(6);function I(e,n){return function(t){for(var c=t.fromRow,a=t.toRow,r=t.updated,o=e.rows.slice(),i=c;i<=a;i++)o[i]=Object(k.a)(Object(k.a)({},o[i]),r);n(Object(k.a)(Object(k.a)({},e),{},{rows:o}))}}var N=function(e){Object(g.a)(t,e);var n=Object(v.a)(t);function t(e){var c;return Object(f.a)(this,t),(c=n.call(this,e)).ref=w.a.createRef(),c.onInputChange=function(){var e=c.ref.current.value;try{e=parseFloat(e),isNaN(e)&&(e=0)}catch(n){e=0}c.setState({value:e})},c.state={value:e.value},c}return Object(x.a)(t,[{key:"getValue",value:function(){return Object(h.a)({},this.props.column.key,this.state.value)}},{key:"getInputNode",value:function(){return this.ref.current?this.ref.current:null}},{key:"render",value:function(){return Object(S.jsx)("input",{ref:this.ref,defaultValue:this.state.value,onBlur:this.onInputChange,onChange:this.onInputChange})}}]),t}(w.a.Component),M={display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},A={editable:!0,editor:N,formatter:function(e){Object(g.a)(t,e);var n=Object(v.a)(t);function t(){return Object(f.a)(this,t),n.apply(this,arguments)}return Object(x.a)(t,[{key:"render",value:function(){return Object(S.jsx)("div",{style:M,children:this.props.value})}}]),t}(w.a.Component)},U=function(e){var n=e+1;return Object(k.a)({key:"col_".concat(n),name:"C".concat(n)},A)},E=function(e){for(var n={},t=1;t<=e;t++)n["col_".concat(t)]=0;return n},L=function(e){var n=Object.keys(e[0]).sort();return e.map((function(e){return n.map((function(n){return e[n]}))}))},z=function(e){return JSON.parse(JSON.stringify(e))},R=function(e){for(var n=0;n<e.length;n++){for(var t=e[n][n],c=0,a=0;a<e.length;a++)a!==n&&(c+=e[n][a]);if(Math.abs(t)<=Math.abs(c))return!1}return!0},q=[1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3],B=function(e){for(var n=e.length-1;n>0&&e[n-1]>=e[n];)n--;if(n<=0)return!1;for(var t=e.length-1;e[t]<=e[n-1];)t--;var c=e[n-1];for(e[n-1]=e[t],e[t]=c,t=e.length-1;n<t;)c=e[n],e[n]=e[t],e[t]=c,n++,t--;return!0},G=function(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(y.a)(Array(e.length).keys()),t={},c=[],a=0;a<n.length;a++)c.includes(e[a])||n[a]===e[a]||(t[a]=e[a],c.push(n[a],e[a]));return t},H=function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},y=t.single,h=void 0!==y&&y,f=t.leftBracketOnly,x=void 0!==f&&f,g=t.rightBracketOnly,v=void 0!==g&&g,k=t.boldRows,p=void 0===k?[]:k,w=t.boldColumns,S=void 0===w?[]:w;t.transpose;n=v?String.raw(c||(c=Object(_.a)(["left|\begin{matrix}"],["\\left|\\begin{matrix}"]))):String.raw(a||(a=Object(_.a)(["left[\begin{matrix}"],["\\left[\\begin{matrix}"])));var I=e.length,N=e[0].length;if(h)for(var M=0;M<I;M++){for(var A=!1,U=0;U<p.length;U++)if(p[U]===M+1){A=!0;break}var E=String.raw(r||(r=Object(_.a)([" "," "])),Object(C.b)(e[M]));n+=A?String.raw(o||(o=Object(_.a)([" colorbox{aqua}{\bf{","}} "],[" \\colorbox{aqua}{\\bf{","}} "])),E):String.raw(i||(i=Object(_.a)(["",""])),E),n+=String.raw(l||(l=Object(_.a)(["cr"],["\\cr"])))}else for(var L=0;L<I;L++){for(var z=!1,R=0;R<p.length;R++)if(p[R]===L+1){z=!0;break}for(var q=0;q<N;q++){for(var B=!1,G=0;G<S.length;G++)if(S[G]===q+1){B=!0;break}var H=String.raw(s||(s=Object(_.a)([" "," "])),Object(C.b)(e[L][q]));n+=z||B?String.raw(b||(b=Object(_.a)([" colorbox{aqua}{\bf{","}} "],[" \\colorbox{aqua}{\\bf{","}} "])),H):String.raw(j||(j=Object(_.a)(["",""])),H),q!==N-1&&(n+=String.raw(u||(u=Object(_.a)(["&"]))))}n+=String.raw(O||(O=Object(_.a)(["cr"],["\\cr"])))}return n+=x?String.raw(m||(m=Object(_.a)(["end{matrix}\right|"],["\\end{matrix}\\right|"]))):String.raw(d||(d=Object(_.a)(["end{matrix}\right]"],["\\end{matrix}\\right]"])))},J={columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),Object(k.a)({key:"col_4",name:"C4"},A)],rows:[{col_1:0,col_2:1,col_3:-3,col_4:4},{col_1:2,col_2:-2,col_3:1,col_4:0},{col_1:2,col_2:-1,col_3:-2,col_4:4},{col_1:-6,col_2:4,col_3:3,col_4:-8}]},T=(Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),Object(k.a)({key:"col_4",name:"C4"},A),{columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),Object(k.a)({key:"col_4",name:"C4"},A)],rows:[{col_1:1,col_2:-1,col_3:0,col_4:1}]}),F=(Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),{columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),Object(k.a)({key:"col_4",name:"C4"},A)],rows:[{col_1:-1,col_2:11,col_3:-1,col_4:3},{col_1:10,col_2:-1,col_3:2,col_4:0},{col_1:0,col_2:3,col_3:-1,col_4:8},{col_1:2,col_2:-1,col_3:10,col_4:-1}]}),V={columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),Object(k.a)({key:"col_4",name:"C4"},A)],rows:[{col_1:0,col_2:0,col_3:0,col_4:0}]},D={columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),Object(k.a)({key:"col_4",name:"C4"},A)],rows:[{col_1:25,col_2:6,col_3:15,col_4:-11}]},W={columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A)],rows:[{col_1:3,col_2:-.1,col_3:-.2},{col_1:.1,col_2:7,col_3:-.3},{col_1:.3,col_2:-.2,col_3:10}]},K=(Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),{columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A)],rows:[{col_1:3,col_2:2,col_3:2},{col_1:2,col_2:3,col_3:-2}]}),P=(Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),{columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A)],rows:[{col_1:4,col_2:-2},{col_1:3,col_2:-1}]}),Q={columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A)],rows:[{col_1:1,col_2:0}]},X={columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A)],rows:[{col_1:2,col_2:3},{col_1:4,col_2:1}]},Y={columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A)],rows:[{col_1:-.7,col_2:1}]},Z={columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A)],rows:[{col_1:7,col_2:-2},{col_1:3,col_2:-1}]},$={columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A)],rows:[{col_1:1,col_2:0}]},ee={columns:[Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A),Object(k.a)({key:"col_3",name:"C3"},A),Object(k.a)({key:"col_4",name:"C4"},A)],rows:[{col_1:5,col_2:0,col_3:0,col_4:-1},{col_1:1,col_2:0,col_3:-1,col_4:1},{col_1:-1.5,col_2:1,col_3:-2,col_4:1},{col_1:-1,col_2:1,col_3:3,col_4:-3}]};Object(k.a)({key:"col_1",name:"C1"},A),Object(k.a)({key:"col_2",name:"C2"},A)}}]);
//# sourceMappingURL=21.9804773b.chunk.js.map