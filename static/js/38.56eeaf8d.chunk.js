(this["webpackJsonpnumerical-methods-js"]=this["webpackJsonpnumerical-methods-js"]||[]).push([[38],{304:function(e,n,t){"use strict";t.r(n);var c,a,r,o,l=t(60),i=t(61),s=t(55),b=t(67),j=t(0),u=t(78),m=t(127),O=(t(63),t(64)),d=t(280),_=t(276),y=t(288),g=t(295),h=t(292),f=t(293),x=t(286),v=t(279),C=t(133),k=t.n(C),p=t(132),w=t.n(p),z=t(330),S=t(339),M=t(340),N=t(296),T=t(83),I=t.n(T),R=t(85),B=t(284),q=t(13),H=t(102),V=t(105),A=t(271),Q=t(97),F=t.n(Q),J=t(6),D=[{target:".matrix-size-input",title:"Size",content:"Increase/Reduce the matrix's size",disableBeacon:!0},{target:".matrix-input",title:"Matrix",content:"Specify the matrix here."},{target:".iteration-slider",title:"Iteration slider",content:"Change the slider to view the result of any iteration."}],E=Object(A.a)((function(e){return{paper:{padding:e.spacing(.5),textAlign:"center",color:e.palette.text.primary,margin:e.spacing(1)},container:{"& > *":{margin:e.spacing(1)}},card:{margin:e.spacing(0)},cardContent:{overflow:"auto","& > *":{margin:e.spacing(.5)}},overflow:{overflow:"auto"},matrixCard:{width:"60vw"},divider:{width:"500 px",height:"100px",marginTop:"20px",marginBottom:"20px"},fab:{position:"fixed",bottom:e.spacing(4),right:e.spacing(2)}}}));function G(e){e.smallScreen;var n,t=e.params,u=E(),_=Object(j.useState)(1),g=Object(i.a)(_,2),v=g[0],C=g[1];if(v>t.iterations)C(t.iterations);else{var k=t.results,p=k[v-1],w=1===v?t.originalMatrix:k[v-2].resultMatrix,M=1===v?null:k[v-2].qMatrix;n=String.raw(c||(c=Object(l.a)(["\n        displaystyle\n        \begin{array}{l}\n        \begin{array}{lcl}\n        \\ R^{(",")} "," = ","\n        \\\n        \\ \text{Column, }c = ","\n        \text{","}\n        \\\n        \\ \text{Norm, }lVert c \rVert = ","\n        \\\n        \\ \text{Basis, }e = ","\n        \\\n        \\ hline\n        \begin{array}{lcl}\n        \\ v &=& c + lVert c \rVert e\n        \\\n        \\   &=& "," +  "," ","\n        \\\n        \\   &=& ","\n        \\ end{array}\n        \\ \begin{array}{lcl}\n        \\ v^{T}v &=& "," ","\n        \\\n        \\        &=& ","\n        \\ end{array}\n        \\ \begin{array}{lcl}\n        \\ vv^{T} &=& "," ","\n        \\\n        \\        &=& ","\n        \\ end{array}\n        \\\n        \\ hline\n        \begin{array}{lcl}\n        \\ \text{Householder, } H^{(",")} &=& I - \frac{2}{v^{T}v} vv^{T}\n        \\\n        \\                           &=& "," - \frac{2}{","} ","\n        \\\n        \\                           &=& ","\n        \\ end{array}\n        \\\n        \\ hline\n        \begin{array}{lcl}\n        \\ Q^{(",")} &=& "," H^{(",")}\n        \\\n        \\                           &=& "," ","\n        \\\n        \\                           ","\n        \\ end{array}\n        \\\n        \\ hline\n        \begin{array}{lcl}\n        \\ R^{(",")} &=& H^{(",")} R^{(",")}\n        \\\n        \\                           &=& "," ","\n        \\\n        \\                           &=& ","\n        \\ end{array}\n        "],["\n        \\displaystyle\n        \\begin{array}{l}\n        \\begin{array}{lcl}\n        \\\\ R^{(",")} "," = ","\n        \\\\\n        \\\\ \\text{Column, }c = ","\n        \\text{","}\n        \\\\\n        \\\\ \\text{Norm, }\\lVert c \\rVert = ","\n        \\\\\n        \\\\ \\text{Basis, }e = ","\n        \\\\\n        \\\\ \\hline\n        \\begin{array}{lcl}\n        \\\\ v &=& c + \\lVert c \\rVert e\n        \\\\\n        \\\\   &=& "," +  "," ","\n        \\\\\n        \\\\   &=& ","\n        \\\\ \\end{array}\n        \\\\ \\begin{array}{lcl}\n        \\\\ v^{T}v &=& "," ","\n        \\\\\n        \\\\        &=& ","\n        \\\\ \\end{array}\n        \\\\ \\begin{array}{lcl}\n        \\\\ vv^{T} &=& "," ","\n        \\\\\n        \\\\        &=& ","\n        \\\\ \\end{array}\n        \\\\\n        \\\\ \\hline\n        \\begin{array}{lcl}\n        \\\\ \\text{Householder, } H^{(",")} &=& I - \\frac{2}{v^{T}v} vv^{T}\n        \\\\\n        \\\\                           &=& "," - \\frac{2}{","} ","\n        \\\\\n        \\\\                           &=& ","\n        \\\\ \\end{array}\n        \\\\\n        \\\\ \\hline\n        \\begin{array}{lcl}\n        \\\\ Q^{(",")} &=& "," H^{(",")}\n        \\\\\n        \\\\                           &=& "," ","\n        \\\\\n        \\\\                           ","\n        \\\\ \\end{array}\n        \\\\\n        \\\\ \\hline\n        \\begin{array}{lcl}\n        \\\\ R^{(",")} &=& H^{(",")} R^{(",")}\n        \\\\\n        \\\\                           &=& "," ","\n        \\\\\n        \\\\                           &=& ","\n        \\\\ \\end{array}\n        "])),v-1,1===v?String.raw(a||(a=Object(l.a)(["= \text{Original Matrix}"],["= \\text{Original Matrix}"]))):"",Object(b.z)(w,{boldColumns:[v]}),Object(b.z)(p.vectorColumn,{single:!0}),v>1?"\\ Note: The first "+(v-1)+" elements of c must be zero.":"",Object(s.b)(p.columnNorm),Object(b.z)(p.vectorBasis,{single:!0}),Object(b.z)(p.vectorColumn,{single:!0}),Object(s.b)(p.columnNorm),Object(b.z)(p.vectorBasis,{single:!0}),Object(b.z)(p.vectorCombined,{single:!0}),Object(b.z)([p.vectorCombined]),Object(b.z)(p.vectorCombined,{single:!0}),Object(s.b)(p.transposeMultiply),Object(b.z)(p.vectorCombined,{single:!0}),Object(b.z)([p.vectorCombined]),Object(b.z)(p.multiplyTranspose),v,Object(b.z)(Object(m.Cc)(p.vectorColumn.length).toArray()),Object(s.b)(p.transposeMultiply),Object(b.z)(p.multiplyTranspose),Object(b.z)(p.householder),v,v>1?"Q^{("+(v-1)+")}":"",v,v>1?Object(b.z)(M):"",Object(b.z)(p.householder),v>1?"&=&"+Object(b.z)(p.qMatrix):"",v,v,v-1,Object(b.z)(p.householder),Object(b.z)(w),Object(b.z)(p.resultMatrix)),v===t.iterations&&(n+=String.raw(r||(r=Object(l.a)(["\n            \\\n            \\ hline\n            \\ \text{To verify the answer,}\n            \\ \begin{array}{lcl}\n            \\ Q^{(",")} R^{(",")} &=& "," ","\n            \\\n            \\                           &=& ","\n            \\\n            \\                           &=&  \text{Original Matrix}\n            \\ end{array}\n            \\\n            \\\n            "],["\n            \\\\\n            \\\\ \\hline\n            \\\\ \\text{To verify the answer,}\n            \\\\ \\begin{array}{lcl}\n            \\\\ Q^{(",")} R^{(",")} &=& "," ","\n            \\\\\n            \\\\                           &=& ","\n            \\\\\n            \\\\                           &=&  \\text{Original Matrix}\n            \\\\ \\end{array}\n            \\\\\n            \\\\\n            "])),v,v,Object(b.z)(p.qMatrix),Object(b.z)(p.resultMatrix),Object(b.z)(Object(m.vd)(p.qMatrix,p.resultMatrix)))),n+=String.raw(o||(o=Object(l.a)(["end{array}end{array}"],["\\end{array}\\end{array}"])))}return Object(J.jsx)(y.a,{className:u.container,children:Object(J.jsxs)(x.a,{container:!0,direction:"column",alignItems:"center",justify:"flex-start",children:[Object(J.jsx)(x.a,{xs:!0,item:!0,className:"iteration-slider",children:Object(J.jsx)(q.b,{direction:"left",triggerOnce:!0,children:Object(J.jsx)(z.a,{id:"iteration-slider",width:"70vw",children:Object(J.jsx)(S.a,{orientation:"horizontal",onChangeCommitted:function(e,n){C(n)},defaultValue:1,"aria-labelledby":"discrete-slider-small-steps",step:1,marks:!0,min:1,max:t.iterations<=0?1:t.iterations,valueLabelDisplay:"on"})})})}),Object(J.jsx)(x.a,{xs:!0,item:!0,className:"step-math",children:Object(J.jsx)(q.b,{direction:"right",triggerOnce:!0,children:Object(J.jsx)(h.a,{className:u.card,children:Object(J.jsxs)(f.a,{className:u.cardContent,children:[Object(J.jsxs)(d.a,{variant:"h6",children:["Iteration ",v,":"]}),Object(J.jsx)(O.a,{math:n,block:!0})]})})})})]})})}n.default=function(e){var n=e.methodName;Object(j.useEffect)((function(){document.title=n}));var t=E(),c=Object(V.a)(Object(H.a)().breakpoints.down("sm")),a=c?45:60,r=c?10:100,o=c?5:20,l=Object(j.useState)(b.t),s=Object(i.a)(l,2),O=s[0],C=s[1],p=function(e){return function(){var n=O.columns.slice(),t=O.rows.slice();if(e){n.push(Object(b.b)(n.length)),t.push(Object(b.c)(O.columns.length));for(var c=0;c<t.length;c++)t[c]["col_".concat(n.length)]=0}else{if(2===n.length)return;t.pop();for(var a=0;a<t.length;a++)delete t[a]["col_".concat(n.length)];n.pop()}C({columns:n,rows:t})}},z=Object(b.g)(O.rows),S=Object(b.a)(z),T=O.rows.length,A=T-1,Q=[];console.log("originalMatrix",z);for(var W=0;W<A;W++){for(var L=Object(m.Re)(Object(m.jb)(S,W)),U=0;U<W;U++)L[U]=0;console.log("vectorColumn",L);var X=Object(m.yd)(L,2);console.log("columnNorm",X);var K=Object(m.vf)(T).toArray();K[W]=L[W]<0?-1:1,console.log("vectorBasis",K);var P=Object(m.F)(L,Object(m.vd)(X,K));console.log("vectorCombined",P);var Y=Object(m.vd)(P,P);console.log("transposeMultiply",Y);for(var Z=[],$=0;$<T;$++){Z.push(Array(T).fill(0));for(var ee=0;ee<T;ee++)Z[$][ee]=P[$]*P[ee]}console.log("multiplyTranspose",Z);var ne=Object(m.Xe)(Object(m.Cc)(T),Object(m.vd)(2/Y,Z)).toArray();console.log("householder",ne);var te=0===W?ne:Object(m.vd)(Q[W-1].qMatrix,ne);console.log("qMatrix",te),S=Object(m.vd)(ne,S),console.log("resultMatrix",S),Q.push({vectorColumn:L,columnNorm:X,vectorBasis:K,vectorCombined:P,transposeMultiply:Y,multiplyTranspose:Z,householder:ne,qMatrix:te,resultMatrix:Object(b.a)(S)})}var ce=Object(j.useState)(!1),ae=Object(i.a)(ce,2),re=ae[0],oe=ae[1],le={originalMatrix:z,matrixSize:T,iterations:A,results:Q};return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(u.a,{methodName:n}),Object(J.jsx)(_.a,{className:t.paper,children:Object(J.jsx)(y.a,{className:t.container,children:Object(J.jsxs)(q.c,{duration:500,triggerOnce:!0,cascade:!0,children:[Object(J.jsx)(d.a,{variant:"body1"}),Object(J.jsx)(x.a,{container:!0,spacing:1,direction:"row",alignItems:"center",justify:"center",children:Object(J.jsx)(x.a,{xs:!0,item:!0,children:Object(J.jsx)(h.a,{className:t.card,children:Object(J.jsx)(f.a,{className:t.cardContent,children:Object(J.jsxs)(x.a,{container:!0,spacing:1,direction:"column",alignItems:"center",justify:"center",children:[Object(J.jsxs)(x.a,{xs:!0,item:!0,className:"matrix-size-input",container:!0,spacing:1,direction:"row",alignItems:"center",justify:"center",children:[Object(J.jsx)(d.a,{variant:"h6",children:"Size:\xa0\xa0\xa0\xa0\xa0"}),Object(J.jsx)(v.a,{variant:"contained",color:"primary",onClick:p(!1),children:Object(J.jsx)(w.a,{color:"error"})}),Object(J.jsx)(v.a,{variant:"contained",color:"primary",onClick:p(!0),children:Object(J.jsx)(k.a,{})})]}),Object(J.jsxs)(x.a,{xs:!0,item:!0,className:"matrix-input",container:!0,spacing:1,direction:"column",alignItems:"center",justify:"center",children:[Object(J.jsx)(x.a,{xs:!0,item:!0,children:Object(J.jsx)(d.a,{variant:"h6",children:"Matrix:"})}),Object(J.jsx)(x.a,{xs:!0,item:!0,container:!0,spacing:0,direction:"row",alignItems:"center",justify:"center",children:Object(J.jsx)(x.a,{item:!0,className:t.overflow,children:Object(J.jsx)(F.a,{columns:O.columns,rowGetter:function(e){return O.rows[e]},rowsCount:O.rows.length,onGridRowsUpdated:Object(b.d)(O,C),enableCellSelect:!0,headerRowHeight:1,minColumnWidth:a,minWidth:a*O.columns.length+r,rowHeight:35,minHeight:35*O.rows.length+o})},0)})]})]})})})})})]})})}),Object(J.jsx)(g.a,{}),Object(J.jsx)(B.a,{in:true,children:Object(J.jsx)(q.a,{triggerOnce:!0,children:Object(J.jsx)(_.a,{className:t.paper,children:Object(J.jsx)(G,{smallScreen:c,params:le})})})}),Object(J.jsx)(M.a,{arrow:!0,title:"Help",placement:"top",children:Object(J.jsx)(N.a,{color:"secondary","aria-label":"help",className:t.fab,onClick:function(){oe(!0)},children:Object(J.jsx)(I.a,{})})}),Object(J.jsx)(R.a,{scrollToFirstStep:!0,run:re,steps:D,continuous:!0,showSkipButton:!0,locale:{last:"End tour"},callback:function(e){"reset"!==e.action&&"close"!==e.action||oe(!1)}})]})}},67:function(e,n,t){"use strict";t.d(n,"d",(function(){return S})),t.d(n,"b",(function(){return I})),t.d(n,"c",(function(){return R})),t.d(n,"g",(function(){return B})),t.d(n,"a",(function(){return q})),t.d(n,"y",(function(){return H})),t.d(n,"B",(function(){return V})),t.d(n,"f",(function(){return A})),t.d(n,"A",(function(){return Q})),t.d(n,"e",(function(){return F})),t.d(n,"z",(function(){return J})),t.d(n,"l",(function(){return D})),t.d(n,"w",(function(){return E})),t.d(n,"t",(function(){return G})),t.d(n,"k",(function(){return W})),t.d(n,"x",(function(){return L})),t.d(n,"u",(function(){return U})),t.d(n,"v",(function(){return X})),t.d(n,"m",(function(){return K})),t.d(n,"h",(function(){return P})),t.d(n,"n",(function(){return Y})),t.d(n,"i",(function(){return Z})),t.d(n,"o",(function(){return $})),t.d(n,"j",(function(){return ee})),t.d(n,"p",(function(){return ne})),t.d(n,"q",(function(){return te})),t.d(n,"r",(function(){return ce})),t.d(n,"s",(function(){return ae}));var c,a,r,o,l,i,s,b,j,u,m,O,d,_=t(60),y=t(59),g=t(48),h=t(74),f=t(75),x=t(77),v=t(76),C=t(47),k=t(55),p=t(0),w=t.n(p),z=t(6);function S(e,n){return function(t){for(var c=t.fromRow,a=t.toRow,r=t.updated,o=e.rows.slice(),l=c;l<=a;l++)o[l]=Object(C.a)(Object(C.a)({},o[l]),r);n(Object(C.a)(Object(C.a)({},e),{},{rows:o}))}}var M=function(e){Object(x.a)(t,e);var n=Object(v.a)(t);function t(e){var c;return Object(h.a)(this,t),(c=n.call(this,e)).ref=w.a.createRef(),c.onInputChange=function(){var e=c.ref.current.value;try{e=parseFloat(e),isNaN(e)&&(e=0)}catch(n){e=0}c.setState({value:e})},c.state={value:e.value},c}return Object(f.a)(t,[{key:"getValue",value:function(){return Object(g.a)({},this.props.column.key,this.state.value)}},{key:"getInputNode",value:function(){return this.ref.current?this.ref.current:null}},{key:"render",value:function(){return Object(z.jsx)("input",{ref:this.ref,defaultValue:this.state.value,onBlur:this.onInputChange,onChange:this.onInputChange})}}]),t}(w.a.Component),N={display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},T={editable:!0,editor:M,formatter:function(e){Object(x.a)(t,e);var n=Object(v.a)(t);function t(){return Object(h.a)(this,t),n.apply(this,arguments)}return Object(f.a)(t,[{key:"render",value:function(){return Object(z.jsx)("div",{style:N,children:this.props.value})}}]),t}(w.a.Component)},I=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=e+1;return n?Object(C.a)({key:"col_".concat(t),name:n},T):Object(C.a)({key:"col_".concat(t),name:"C".concat(t)},T)},R=function(e){for(var n={},t=1;t<=e;t++)n["col_".concat(t)]=0;return n},B=function(e){var n=Object.keys(e[0]).sort();return e.map((function(e){return n.map((function(n){return e[n]}))}))},q=function(e){return JSON.parse(JSON.stringify(e))},H=function(e){for(var n=0;n<e.length;n++){for(var t=e[n][n],c=0,a=0;a<e.length;a++)a!==n&&(c+=e[n][a]);if(Math.abs(t)<=Math.abs(c))return!1}return!0},V=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3],A=function(e,n){return V[e]/V[n]/V[e-n]},Q=function(e){for(var n=e.length-1;n>0&&e[n-1]>=e[n];)n--;if(n<=0)return!1;for(var t=e.length-1;e[t]<=e[n-1];)t--;var c=e[n-1];for(e[n-1]=e[t],e[t]=c,t=e.length-1;n<t;)c=e[n],e[n]=e[t],e[t]=c,n++,t--;return!0},F=function(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(y.a)(Array(e.length).keys()),t={},c=[],a=0;a<n.length;a++)c.includes(e[a])||n[a]===e[a]||(t[a]=e[a],c.push(n[a],e[a]));return t},J=function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},y=t.single,g=void 0!==y&&y,h=t.leftBracketOnly,f=void 0!==h&&h,x=t.rightBracketOnly,v=void 0!==x&&x,C=t.boldRows,p=void 0===C?[]:C,w=t.boldColumns,z=void 0===w?[]:w;t.transpose;n=v?String.raw(c||(c=Object(_.a)(["left|\begin{matrix}"],["\\left|\\begin{matrix}"]))):String.raw(a||(a=Object(_.a)(["left[\begin{matrix}"],["\\left[\\begin{matrix}"])));var S=e.length,M=e[0].length;if(g)for(var N=0;N<S;N++){for(var T=!1,I=0;I<p.length;I++)if(p[I]===N+1){T=!0;break}var R=String.raw(r||(r=Object(_.a)([" "," "])),Object(k.b)(e[N]));n+=T?String.raw(o||(o=Object(_.a)([" colorbox{aqua}{\bf{","}} "],[" \\colorbox{aqua}{\\bf{","}} "])),R):String.raw(l||(l=Object(_.a)(["",""])),R),n+=String.raw(i||(i=Object(_.a)(["cr"],["\\cr"])))}else for(var B=0;B<S;B++){for(var q=!1,H=0;H<p.length;H++)if(p[H]===B+1){q=!0;break}for(var V=0;V<M;V++){for(var A=!1,Q=0;Q<z.length;Q++)if(z[Q]===V+1){A=!0;break}var F=String.raw(s||(s=Object(_.a)([" "," "])),Object(k.b)(e[B][V]));n+=q||A?String.raw(b||(b=Object(_.a)([" colorbox{aqua}{\bf{","}} "],[" \\colorbox{aqua}{\\bf{","}} "])),F):String.raw(j||(j=Object(_.a)(["",""])),F),V!==M-1&&(n+=String.raw(u||(u=Object(_.a)(["&"]))))}n+=String.raw(m||(m=Object(_.a)(["cr"],["\\cr"])))}return n+=f?String.raw(O||(O=Object(_.a)(["end{matrix}\right|"],["\\end{matrix}\\right|"]))):String.raw(d||(d=Object(_.a)(["end{matrix}\right]"],["\\end{matrix}\\right]"])))},D={columns:[Object(C.a)({key:"col_1",name:"C1"},T),Object(C.a)({key:"col_2",name:"C2"},T),Object(C.a)({key:"col_3",name:"C3"},T),Object(C.a)({key:"col_4",name:"C4"},T)],rows:[{col_1:0,col_2:1,col_3:-3,col_4:4},{col_1:2,col_2:-2,col_3:1,col_4:0},{col_1:2,col_2:-1,col_3:-2,col_4:4},{col_1:-6,col_2:4,col_3:3,col_4:-8}]},E=(Object(C.a)({key:"col_1",name:"C1"},T),Object(C.a)({key:"col_2",name:"C2"},T),Object(C.a)({key:"col_3",name:"C3"},T),Object(C.a)({key:"col_4",name:"C4"},T),{columns:[Object(C.a)({key:"col_1",name:"C1"},T),Object(C.a)({key:"col_2",name:"C2"},T),Object(C.a)({key:"col_3",name:"C3"},T),Object(C.a)({key:"col_4",name:"C4"},T)],rows:[{col_1:1,col_2:-1,col_3:0,col_4:1}]}),G=(Object(C.a)({key:"col_1",name:"C1"},T),Object(C.a)({key:"col_2",name:"C2"},T),Object(C.a)({key:"col_3",name:"C3"},T),Object(C.a)({key:"col_1",name:"C1"},T),Object(C.a)({key:"col_2",name:"C2"},T),Object(C.a)({key:"col_3",name:"C3"},T),Object(C.a)({key:"col_1",name:"C1"},T),Object(C.a)({key:"col_2",name:"C2"},T),Object(C.a)({key:"col_3",name:"C3"},T),{columns:[Object(C.a)({key:"col_1",name:"C1"},T),Object(C.a)({key:"col_2",name:"C2"},T),Object(C.a)({key:"col_3",name:"C3"},T),Object(C.a)({key:"col_4",name:"C4"},T)],rows:[{col_1:-1,col_2:11,col_3:-1,col_4:3},{col_1:10,col_2:-1,col_3:2,col_4:0},{col_1:0,col_2:3,col_3:-1,col_4:8},{col_1:2,col_2:-1,col_3:10,col_4:-1}]}),W={columns:[Object(C.a)({key:"col_1",name:"C1"},T),Object(C.a)({key:"col_2",name:"C2"},T),Object(C.a)({key:"col_3",name:"C3"},T),Object(C.a)({key:"col_4",name:"C4"},T)],rows:[{col_1:0,col_2:0,col_3:0,col_4:0}]},L={columns:[Object(C.a)({key:"col_1",name:"C1"},T),Object(C.a)({key:"col_2",name:"C2"},T),Object(C.a)({key:"col_3",name:"C3"},T),Object(C.a)({key:"col_4",name:"C4"},T)],rows:[{col_1:25,col_2:6,col_3:15,col_4:-11}]},U={columns:[Object(C.a)({key:"col_1",name:"C1"},T),Object(C.a)({key:"col_2",name:"C2"},T),Object(C.a)({key:"col_3",name:"C3"},T)],rows:[{col_1:3,col_2:-.1,col_3:-.2},{col_1:.1,col_2:7,col_3:-.3},{col_1:.3,col_2:-.2,col_3:10}]},X=(Object(C.a)({key:"col_1",name:"C1"},T),Object(C.a)({key:"col_2",name:"C2"},T),{columns:[Object(C.a)({key:"col_1",name:"C1"},T),Object(C.a)({key:"col_2",name:"C2"},T),Object(C.a)({key:"col_3",name:"C3"},T)],rows:[{col_1:3,col_2:2,col_3:2},{col_1:2,col_2:3,col_3:-2}]}),K=(Object(C.a)({key:"col_1",name:"C1"},T),Object(C.a)({key:"col_2",name:"C2"},T),Object(C.a)({key:"col_1",name:"C1"},T),Object(C.a)({key:"col_2",name:"C2"},T),Object(C.a)({key:"col_3",name:"C3"},T),Object(C.a)({key:"col_1",name:"C1"},T),Object(C.a)({key:"col_2",name:"C2"},T),Object(C.a)({key:"col_3",name:"C3"},T),Object(C.a)({key:"col_1",name:"C1"},T),Object(C.a)({key:"col_2",name:"C2"},T),Object(C.a)({key:"col_3",name:"C3"},T),Object(C.a)({key:"col_1",name:"C1"},T),Object(C.a)({key:"col_2",name:"C2"},T),Object(C.a)({key:"col_3",name:"C3"},T),{columns:[Object(C.a)({key:"col_1",name:"C1"},T),Object(C.a)({key:"col_2",name:"C2"},T)],rows:[{col_1:4,col_2:-2},{col_1:3,col_2:-1}]}),P={columns:[Object(C.a)({key:"col_1",name:"C1"},T),Object(C.a)({key:"col_2",name:"C2"},T)],rows:[{col_1:1,col_2:0}]},Y={columns:[Object(C.a)({key:"col_1",name:"C1"},T),Object(C.a)({key:"col_2",name:"C2"},T)],rows:[{col_1:2,col_2:3},{col_1:4,col_2:1}]},Z={columns:[Object(C.a)({key:"col_1",name:"C1"},T),Object(C.a)({key:"col_2",name:"C2"},T)],rows:[{col_1:-.7,col_2:1}]},$={columns:[Object(C.a)({key:"col_1",name:"C1"},T),Object(C.a)({key:"col_2",name:"C2"},T)],rows:[{col_1:7,col_2:-2},{col_1:3,col_2:-1}]},ee={columns:[Object(C.a)({key:"col_1",name:"C1"},T),Object(C.a)({key:"col_2",name:"C2"},T)],rows:[{col_1:1,col_2:0}]},ne={columns:[Object(C.a)({key:"col_1",name:"C1"},T),Object(C.a)({key:"col_2",name:"C2"},T),Object(C.a)({key:"col_3",name:"C3"},T),Object(C.a)({key:"col_4",name:"C4"},T)],rows:[{col_1:5,col_2:0,col_3:0,col_4:-1},{col_1:1,col_2:0,col_3:-1,col_4:1},{col_1:-1.5,col_2:1,col_3:-2,col_4:1},{col_1:-1,col_2:1,col_3:3,col_4:-3}]},te=(Object(C.a)({key:"col_1",name:"C1"},T),Object(C.a)({key:"col_2",name:"C2"},T),{columns:[Object(C.a)({key:"col_1",name:"x"},T),Object(C.a)({key:"col_2",name:"y"},T)],rows:[{col_1:0,col_2:0}]}),ce={columns:[Object(C.a)({key:"col_1",name:"x"},T),Object(C.a)({key:"col_2",name:"y"},T)],rows:[{col_1:0,col_2:1}]},ae={columns:[Object(C.a)({key:"col_1",name:"x"},T),Object(C.a)({key:"col_2",name:"y"},T)],rows:[{col_1:1,col_2:1}]}}}]);
//# sourceMappingURL=38.56eeaf8d.chunk.js.map