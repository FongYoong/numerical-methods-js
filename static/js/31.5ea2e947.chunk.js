(this["webpackJsonpnumerical-methods-js"]=this["webpackJsonpnumerical-methods-js"]||[]).push([[31],{297:function(e,n,t){"use strict";t.r(n);var c,a,r,o,l=t(52),i=t(58),s=t(48),b=t(64),j=t(0),u=t(69),m=t(133),O=(t(62),t(63)),d=t(273),_=t(269),y=t(281),g=t(288),h=t(285),x=t(286),f=t(279),v=t(272),C=t(100),p=t.n(C),k=t(99),w=t.n(k),S=t(324),M=t(332),N=t(333),T=t(289),I=t(76),R=t.n(I),q=t(77),B=t(277),H=t(13),V=t(103),z=t(180),A=t(264),Q=t(93),F=t.n(Q),J=t(6),D=[{target:".matrix-size-input",title:"Size",content:"Increase/Reduce the matrix's size",disableBeacon:!0},{target:".matrix-input",title:"Matrix",content:"Specify the matrix here."},{target:".iteration-slider",title:"Iteration slider",content:"Change the slider to view the result of any iteration."}],E=Object(A.a)((function(e){return{paper:{padding:e.spacing(.5),textAlign:"center",color:e.palette.text.primary,margin:e.spacing(1)},container:{"& > *":{margin:e.spacing(1)}},card:{margin:e.spacing(0)},cardContent:{overflow:"auto","& > *":{margin:e.spacing(.5)}},overflow:{overflow:"auto"},matrixCard:{width:"60vw"},divider:{width:"500 px",height:"100px",marginTop:"20px",marginBottom:"20px"},fab:{position:"fixed",bottom:e.spacing(4),right:e.spacing(2)}}}));function G(e){e.smallScreen;var n,t=e.params,u=E(),_=Object(j.useState)(1),g=Object(i.a)(_,2),v=g[0],C=g[1];if(v>t.iterations)C(t.iterations);else{var p=t.results,k=p[v-1],w=1===v?t.originalMatrix:p[v-2].resultMatrix,N=1===v?null:p[v-2].qMatrix;n=String.raw(c||(c=Object(l.a)(["\n        displaystyle\n        \begin{array}{l}\n        \begin{array}{lcl}\n        \\ R^{(",")} "," = ","\n        \\\n        \\ \text{Column, }c = ","\n        \text{","}\n        \\\n        \\ \text{Norm, }lVert c \rVert = ","\n        \\\n        \\ \text{Basis, }e = ","\n        \\\n        \\ hline\n        \begin{array}{lcl}\n        \\ v &=& c + lVert c \rVert e\n        \\\n        \\   &=& "," +  "," ","\n        \\\n        \\   &=& ","\n        \\ end{array}\n        \\ \begin{array}{lcl}\n        \\ v^{T}v &=& "," ","\n        \\\n        \\        &=& ","\n        \\ end{array}\n        \\ \begin{array}{lcl}\n        \\ vv^{T} &=& "," ","\n        \\\n        \\        &=& ","\n        \\ end{array}\n        \\\n        \\ hline\n        \begin{array}{lcl}\n        \\ \text{Householder, } H^{(",")} &=& I - \frac{2}{v^{T}v} vv^{T}\n        \\\n        \\                           &=& "," - \frac{2}{","} ","\n        \\\n        \\                           &=& ","\n        \\ end{array}\n        \\\n        \\ hline\n        \begin{array}{lcl}\n        \\ Q^{(",")} &=& "," H^{(",")}\n        \\\n        \\                           &=& "," ","\n        \\\n        \\                           ","\n        \\ end{array}\n        \\\n        \\ hline\n        \begin{array}{lcl}\n        \\ R^{(",")} &=& H^{(",")} R^{(",")}\n        \\\n        \\                           &=& "," ","\n        \\\n        \\                           &=& ","\n        \\ end{array}\n        "],["\n        \\displaystyle\n        \\begin{array}{l}\n        \\begin{array}{lcl}\n        \\\\ R^{(",")} "," = ","\n        \\\\\n        \\\\ \\text{Column, }c = ","\n        \\text{","}\n        \\\\\n        \\\\ \\text{Norm, }\\lVert c \\rVert = ","\n        \\\\\n        \\\\ \\text{Basis, }e = ","\n        \\\\\n        \\\\ \\hline\n        \\begin{array}{lcl}\n        \\\\ v &=& c + \\lVert c \\rVert e\n        \\\\\n        \\\\   &=& "," +  "," ","\n        \\\\\n        \\\\   &=& ","\n        \\\\ \\end{array}\n        \\\\ \\begin{array}{lcl}\n        \\\\ v^{T}v &=& "," ","\n        \\\\\n        \\\\        &=& ","\n        \\\\ \\end{array}\n        \\\\ \\begin{array}{lcl}\n        \\\\ vv^{T} &=& "," ","\n        \\\\\n        \\\\        &=& ","\n        \\\\ \\end{array}\n        \\\\\n        \\\\ \\hline\n        \\begin{array}{lcl}\n        \\\\ \\text{Householder, } H^{(",")} &=& I - \\frac{2}{v^{T}v} vv^{T}\n        \\\\\n        \\\\                           &=& "," - \\frac{2}{","} ","\n        \\\\\n        \\\\                           &=& ","\n        \\\\ \\end{array}\n        \\\\\n        \\\\ \\hline\n        \\begin{array}{lcl}\n        \\\\ Q^{(",")} &=& "," H^{(",")}\n        \\\\\n        \\\\                           &=& "," ","\n        \\\\\n        \\\\                           ","\n        \\\\ \\end{array}\n        \\\\\n        \\\\ \\hline\n        \\begin{array}{lcl}\n        \\\\ R^{(",")} &=& H^{(",")} R^{(",")}\n        \\\\\n        \\\\                           &=& "," ","\n        \\\\\n        \\\\                           &=& ","\n        \\\\ \\end{array}\n        "])),v-1,1===v?String.raw(a||(a=Object(l.a)(["= \text{Original Matrix}"],["= \\text{Original Matrix}"]))):"",Object(b.x)(w,{boldColumns:[v]}),Object(b.x)(k.vectorColumn,{single:!0}),v>1?"\\ Note: The first "+(v-1)+" elements of c must be zero.":"",Object(s.b)(k.columnNorm),Object(b.x)(k.vectorBasis,{single:!0}),Object(b.x)(k.vectorColumn,{single:!0}),Object(s.b)(k.columnNorm),Object(b.x)(k.vectorBasis,{single:!0}),Object(b.x)(k.vectorCombined,{single:!0}),Object(b.x)([k.vectorCombined]),Object(b.x)(k.vectorCombined,{single:!0}),Object(s.b)(k.transposeMultiply),Object(b.x)(k.vectorCombined,{single:!0}),Object(b.x)([k.vectorCombined]),Object(b.x)(k.multiplyTranspose),v,Object(b.x)(Object(m.Cc)(k.vectorColumn.length).toArray()),Object(s.b)(k.transposeMultiply),Object(b.x)(k.multiplyTranspose),Object(b.x)(k.householder),v,v>1?"Q^{("+(v-1)+")}":"",v,v>1?Object(b.x)(N):"",Object(b.x)(k.householder),v>1?"&=&"+Object(b.x)(k.qMatrix):"",v,v,v-1,Object(b.x)(k.householder),Object(b.x)(w),Object(b.x)(k.resultMatrix)),v===t.iterations&&(n+=String.raw(r||(r=Object(l.a)(["\n            \\\n            \\ hline\n            \\ \text{To verify the answer,}\n            \\ \begin{array}{lcl}\n            \\ Q^{(",")} R^{(",")} &=& "," ","\n            \\\n            \\                           &=& ","\n            \\\n            \\                           &=&  \text{Original Matrix}\n            \\ end{array}\n            \\\n            \\\n            "],["\n            \\\\\n            \\\\ \\hline\n            \\\\ \\text{To verify the answer,}\n            \\\\ \\begin{array}{lcl}\n            \\\\ Q^{(",")} R^{(",")} &=& "," ","\n            \\\\\n            \\\\                           &=& ","\n            \\\\\n            \\\\                           &=&  \\text{Original Matrix}\n            \\\\ \\end{array}\n            \\\\\n            \\\\\n            "])),v,v,Object(b.x)(k.qMatrix),Object(b.x)(k.resultMatrix),Object(b.x)(Object(m.vd)(k.qMatrix,k.resultMatrix)))),n+=String.raw(o||(o=Object(l.a)(["end{array}end{array}"],["\\end{array}\\end{array}"])))}return Object(J.jsx)(y.a,{className:u.container,children:Object(J.jsxs)(f.a,{container:!0,direction:"column",alignItems:"center",justify:"flex-start",children:[Object(J.jsx)(f.a,{xs:!0,item:!0,className:"iteration-slider",children:Object(J.jsx)(H.b,{direction:"left",triggerOnce:!0,children:Object(J.jsx)(S.a,{id:"iteration-slider",width:"70vw",children:Object(J.jsx)(M.a,{orientation:"horizontal",onChangeCommitted:function(e,n){C(n)},defaultValue:1,"aria-labelledby":"discrete-slider-small-steps",step:1,marks:!0,min:1,max:t.iterations<=0?1:t.iterations,valueLabelDisplay:"on"})})})}),Object(J.jsx)(f.a,{xs:!0,item:!0,className:"step-math",children:Object(J.jsx)(H.b,{direction:"right",triggerOnce:!0,children:Object(J.jsx)(h.a,{className:u.card,children:Object(J.jsxs)(x.a,{className:u.cardContent,children:[Object(J.jsxs)(d.a,{variant:"h6",children:["Iteration ",v,":"]}),Object(J.jsx)(O.a,{math:n,block:!0})]})})})})]})})}n.default=function(e){var n=e.methodName;Object(j.useEffect)((function(){document.title=n}));var t=E(),c=Object(z.a)(Object(V.a)().breakpoints.down("sm")),a=c?45:60,r=c?10:100,o=c?5:20,l=Object(j.useState)(b.r),s=Object(i.a)(l,2),O=s[0],C=s[1],k=function(e){return function(){var n=O.columns.slice(),t=O.rows.slice();if(e){n.push(Object(b.b)(n.length)),t.push(Object(b.c)(O.columns.length));for(var c=0;c<t.length;c++)t[c]["col_".concat(n.length)]=0}else{if(2===n.length)return;t.pop();for(var a=0;a<t.length;a++)delete t[a]["col_".concat(n.length)];n.pop()}C({columns:n,rows:t})}},S=Object(b.g)(O.rows),M=Object(b.a)(S),I=O.rows.length,A=I-1,Q=[];console.log("originalMatrix",S);for(var W=0;W<A;W++){for(var L=Object(m.Re)(Object(m.jb)(M,W)),U=0;U<W;U++)L[U]=0;console.log("vectorColumn",L);var X=Object(m.yd)(L,2);console.log("columnNorm",X);var K=Object(m.vf)(I).toArray();K[W]=L[W]<0?-1:1,console.log("vectorBasis",K);var P=Object(m.F)(L,Object(m.vd)(X,K));console.log("vectorCombined",P);var Y=Object(m.vd)(P,P);console.log("transposeMultiply",Y);for(var Z=[],$=0;$<I;$++){Z.push(Array(I).fill(0));for(var ee=0;ee<I;ee++)Z[$][ee]=P[$]*P[ee]}console.log("multiplyTranspose",Z);var ne=Object(m.Xe)(Object(m.Cc)(I),Object(m.vd)(2/Y,Z)).toArray();console.log("householder",ne);var te=0===W?ne:Object(m.vd)(Q[W-1].qMatrix,ne);console.log("qMatrix",te),M=Object(m.vd)(ne,M),console.log("resultMatrix",M),Q.push({vectorColumn:L,columnNorm:X,vectorBasis:K,vectorCombined:P,transposeMultiply:Y,multiplyTranspose:Z,householder:ne,qMatrix:te,resultMatrix:Object(b.a)(M)})}var ce=Object(j.useState)(!1),ae=Object(i.a)(ce,2),re=ae[0],oe=ae[1],le={originalMatrix:S,matrixSize:I,iterations:A,results:Q};return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(u.a,{methodName:n}),Object(J.jsx)(_.a,{className:t.paper,children:Object(J.jsx)(y.a,{className:t.container,children:Object(J.jsxs)(H.c,{duration:500,triggerOnce:!0,cascade:!0,children:[Object(J.jsx)(d.a,{variant:"body1"}),Object(J.jsx)(f.a,{container:!0,spacing:1,direction:"row",alignItems:"center",justify:"center",children:Object(J.jsx)(f.a,{xs:!0,item:!0,children:Object(J.jsx)(h.a,{className:t.card,children:Object(J.jsx)(x.a,{className:t.cardContent,children:Object(J.jsxs)(f.a,{container:!0,spacing:1,direction:"column",alignItems:"center",justify:"center",children:[Object(J.jsxs)(f.a,{xs:!0,item:!0,className:"matrix-size-input",container:!0,spacing:1,direction:"row",alignItems:"center",justify:"center",children:[Object(J.jsx)(d.a,{variant:"h6",children:"Size:\xa0\xa0\xa0\xa0\xa0"}),Object(J.jsx)(v.a,{variant:"contained",color:"primary",onClick:k(!1),children:Object(J.jsx)(w.a,{color:"error"})}),Object(J.jsx)(v.a,{variant:"contained",color:"primary",onClick:k(!0),children:Object(J.jsx)(p.a,{})})]}),Object(J.jsxs)(f.a,{xs:!0,item:!0,className:"matrix-input",container:!0,spacing:1,direction:"column",alignItems:"center",justify:"center",children:[Object(J.jsx)(f.a,{xs:!0,item:!0,children:Object(J.jsx)(d.a,{variant:"h6",children:"Matrix:"})}),Object(J.jsx)(f.a,{xs:!0,item:!0,container:!0,spacing:0,direction:"row",alignItems:"center",justify:"center",children:Object(J.jsx)(f.a,{item:!0,className:t.overflow,children:Object(J.jsx)(F.a,{columns:O.columns,rowGetter:function(e){return O.rows[e]},rowsCount:O.rows.length,onGridRowsUpdated:Object(b.d)(O,C),enableCellSelect:!0,headerRowHeight:1,minColumnWidth:a,minWidth:a*O.columns.length+r,rowHeight:35,minHeight:35*O.rows.length+o})},0)})]})]})})})})})]})})}),Object(J.jsx)(g.a,{}),Object(J.jsx)(B.a,{in:true,children:Object(J.jsx)(H.a,{triggerOnce:!0,children:Object(J.jsx)(_.a,{className:t.paper,children:Object(J.jsx)(G,{smallScreen:c,params:le})})})}),Object(J.jsx)(N.a,{arrow:!0,title:"Help",placement:"top",children:Object(J.jsx)(T.a,{color:"secondary","aria-label":"help",className:t.fab,onClick:function(){oe(!0)},children:Object(J.jsx)(R.a,{})})}),Object(J.jsx)(q.a,{scrollToFirstStep:!0,run:re,steps:D,continuous:!0,showSkipButton:!0,locale:{last:"End tour"},callback:function(e){"reset"!==e.action&&"close"!==e.action||oe(!1)}})]})}},64:function(e,n,t){"use strict";t.d(n,"d",(function(){return M})),t.d(n,"b",(function(){return R})),t.d(n,"c",(function(){return q})),t.d(n,"g",(function(){return B})),t.d(n,"a",(function(){return H})),t.d(n,"w",(function(){return V})),t.d(n,"z",(function(){return z})),t.d(n,"f",(function(){return A})),t.d(n,"y",(function(){return Q})),t.d(n,"e",(function(){return F})),t.d(n,"x",(function(){return J})),t.d(n,"l",(function(){return D})),t.d(n,"u",(function(){return E})),t.d(n,"r",(function(){return G})),t.d(n,"k",(function(){return W})),t.d(n,"v",(function(){return L})),t.d(n,"s",(function(){return U})),t.d(n,"t",(function(){return X})),t.d(n,"m",(function(){return K})),t.d(n,"h",(function(){return P})),t.d(n,"n",(function(){return Y})),t.d(n,"i",(function(){return Z})),t.d(n,"o",(function(){return $})),t.d(n,"j",(function(){return ee})),t.d(n,"p",(function(){return ne})),t.d(n,"q",(function(){return te}));var c,a,r,o,l,i,s,b,j,u,m,O,d,_=t(52),y=t(60),g=t(70),h=t(67),x=t(68),f=t(73),v=t(72),C=t(54),p=t(48),k=t(0),w=t.n(k),S=t(6);function M(e,n){return function(t){for(var c=t.fromRow,a=t.toRow,r=t.updated,o=e.rows.slice(),l=c;l<=a;l++)o[l]=Object(C.a)(Object(C.a)({},o[l]),r);n(Object(C.a)(Object(C.a)({},e),{},{rows:o}))}}var N=function(e){Object(f.a)(t,e);var n=Object(v.a)(t);function t(e){var c;return Object(h.a)(this,t),(c=n.call(this,e)).ref=w.a.createRef(),c.onInputChange=function(){var e=c.ref.current.value;try{e=parseFloat(e),isNaN(e)&&(e=0)}catch(n){e=0}c.setState({value:e})},c.state={value:e.value},c}return Object(x.a)(t,[{key:"getValue",value:function(){return Object(g.a)({},this.props.column.key,this.state.value)}},{key:"getInputNode",value:function(){return this.ref.current?this.ref.current:null}},{key:"render",value:function(){return Object(S.jsx)("input",{ref:this.ref,defaultValue:this.state.value,onBlur:this.onInputChange,onChange:this.onInputChange})}}]),t}(w.a.Component),T={display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},I={editable:!0,editor:N,formatter:function(e){Object(f.a)(t,e);var n=Object(v.a)(t);function t(){return Object(h.a)(this,t),n.apply(this,arguments)}return Object(x.a)(t,[{key:"render",value:function(){return Object(S.jsx)("div",{style:T,children:this.props.value})}}]),t}(w.a.Component)},R=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=e+1;return n?Object(C.a)({key:"col_".concat(t),name:n},I):Object(C.a)({key:"col_".concat(t),name:"C".concat(t)},I)},q=function(e){for(var n={},t=1;t<=e;t++)n["col_".concat(t)]=0;return n},B=function(e){var n=Object.keys(e[0]).sort();return e.map((function(e){return n.map((function(n){return e[n]}))}))},H=function(e){return JSON.parse(JSON.stringify(e))},V=function(e){for(var n=0;n<e.length;n++){for(var t=e[n][n],c=0,a=0;a<e.length;a++)a!==n&&(c+=e[n][a]);if(Math.abs(t)<=Math.abs(c))return!1}return!0},z=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3],A=function(e,n){return z[e]/z[n]/z[e-n]},Q=function(e){for(var n=e.length-1;n>0&&e[n-1]>=e[n];)n--;if(n<=0)return!1;for(var t=e.length-1;e[t]<=e[n-1];)t--;var c=e[n-1];for(e[n-1]=e[t],e[t]=c,t=e.length-1;n<t;)c=e[n],e[n]=e[t],e[t]=c,n++,t--;return!0},F=function(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(y.a)(Array(e.length).keys()),t={},c=[],a=0;a<n.length;a++)c.includes(e[a])||n[a]===e[a]||(t[a]=e[a],c.push(n[a],e[a]));return t},J=function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},y=t.single,g=void 0!==y&&y,h=t.leftBracketOnly,x=void 0!==h&&h,f=t.rightBracketOnly,v=void 0!==f&&f,C=t.boldRows,k=void 0===C?[]:C,w=t.boldColumns,S=void 0===w?[]:w;t.transpose;n=v?String.raw(c||(c=Object(_.a)(["left|\begin{matrix}"],["\\left|\\begin{matrix}"]))):String.raw(a||(a=Object(_.a)(["left[\begin{matrix}"],["\\left[\\begin{matrix}"])));var M=e.length,N=e[0].length;if(g)for(var T=0;T<M;T++){for(var I=!1,R=0;R<k.length;R++)if(k[R]===T+1){I=!0;break}var q=String.raw(r||(r=Object(_.a)([" "," "])),Object(p.b)(e[T]));n+=I?String.raw(o||(o=Object(_.a)([" colorbox{aqua}{\bf{","}} "],[" \\colorbox{aqua}{\\bf{","}} "])),q):String.raw(l||(l=Object(_.a)(["",""])),q),n+=String.raw(i||(i=Object(_.a)(["cr"],["\\cr"])))}else for(var B=0;B<M;B++){for(var H=!1,V=0;V<k.length;V++)if(k[V]===B+1){H=!0;break}for(var z=0;z<N;z++){for(var A=!1,Q=0;Q<S.length;Q++)if(S[Q]===z+1){A=!0;break}var F=String.raw(s||(s=Object(_.a)([" "," "])),Object(p.b)(e[B][z]));n+=H||A?String.raw(b||(b=Object(_.a)([" colorbox{aqua}{\bf{","}} "],[" \\colorbox{aqua}{\\bf{","}} "])),F):String.raw(j||(j=Object(_.a)(["",""])),F),z!==N-1&&(n+=String.raw(u||(u=Object(_.a)(["&"]))))}n+=String.raw(m||(m=Object(_.a)(["cr"],["\\cr"])))}return n+=x?String.raw(O||(O=Object(_.a)(["end{matrix}\right|"],["\\end{matrix}\\right|"]))):String.raw(d||(d=Object(_.a)(["end{matrix}\right]"],["\\end{matrix}\\right]"])))},D={columns:[Object(C.a)({key:"col_1",name:"C1"},I),Object(C.a)({key:"col_2",name:"C2"},I),Object(C.a)({key:"col_3",name:"C3"},I),Object(C.a)({key:"col_4",name:"C4"},I)],rows:[{col_1:0,col_2:1,col_3:-3,col_4:4},{col_1:2,col_2:-2,col_3:1,col_4:0},{col_1:2,col_2:-1,col_3:-2,col_4:4},{col_1:-6,col_2:4,col_3:3,col_4:-8}]},E=(Object(C.a)({key:"col_1",name:"C1"},I),Object(C.a)({key:"col_2",name:"C2"},I),Object(C.a)({key:"col_3",name:"C3"},I),Object(C.a)({key:"col_4",name:"C4"},I),{columns:[Object(C.a)({key:"col_1",name:"C1"},I),Object(C.a)({key:"col_2",name:"C2"},I),Object(C.a)({key:"col_3",name:"C3"},I),Object(C.a)({key:"col_4",name:"C4"},I)],rows:[{col_1:1,col_2:-1,col_3:0,col_4:1}]}),G=(Object(C.a)({key:"col_1",name:"C1"},I),Object(C.a)({key:"col_2",name:"C2"},I),Object(C.a)({key:"col_3",name:"C3"},I),Object(C.a)({key:"col_1",name:"C1"},I),Object(C.a)({key:"col_2",name:"C2"},I),Object(C.a)({key:"col_3",name:"C3"},I),Object(C.a)({key:"col_1",name:"C1"},I),Object(C.a)({key:"col_2",name:"C2"},I),Object(C.a)({key:"col_3",name:"C3"},I),{columns:[Object(C.a)({key:"col_1",name:"C1"},I),Object(C.a)({key:"col_2",name:"C2"},I),Object(C.a)({key:"col_3",name:"C3"},I),Object(C.a)({key:"col_4",name:"C4"},I)],rows:[{col_1:-1,col_2:11,col_3:-1,col_4:3},{col_1:10,col_2:-1,col_3:2,col_4:0},{col_1:0,col_2:3,col_3:-1,col_4:8},{col_1:2,col_2:-1,col_3:10,col_4:-1}]}),W={columns:[Object(C.a)({key:"col_1",name:"C1"},I),Object(C.a)({key:"col_2",name:"C2"},I),Object(C.a)({key:"col_3",name:"C3"},I),Object(C.a)({key:"col_4",name:"C4"},I)],rows:[{col_1:0,col_2:0,col_3:0,col_4:0}]},L={columns:[Object(C.a)({key:"col_1",name:"C1"},I),Object(C.a)({key:"col_2",name:"C2"},I),Object(C.a)({key:"col_3",name:"C3"},I),Object(C.a)({key:"col_4",name:"C4"},I)],rows:[{col_1:25,col_2:6,col_3:15,col_4:-11}]},U={columns:[Object(C.a)({key:"col_1",name:"C1"},I),Object(C.a)({key:"col_2",name:"C2"},I),Object(C.a)({key:"col_3",name:"C3"},I)],rows:[{col_1:3,col_2:-.1,col_3:-.2},{col_1:.1,col_2:7,col_3:-.3},{col_1:.3,col_2:-.2,col_3:10}]},X=(Object(C.a)({key:"col_1",name:"C1"},I),Object(C.a)({key:"col_2",name:"C2"},I),{columns:[Object(C.a)({key:"col_1",name:"C1"},I),Object(C.a)({key:"col_2",name:"C2"},I),Object(C.a)({key:"col_3",name:"C3"},I)],rows:[{col_1:3,col_2:2,col_3:2},{col_1:2,col_2:3,col_3:-2}]}),K=(Object(C.a)({key:"col_1",name:"C1"},I),Object(C.a)({key:"col_2",name:"C2"},I),Object(C.a)({key:"col_1",name:"C1"},I),Object(C.a)({key:"col_2",name:"C2"},I),Object(C.a)({key:"col_3",name:"C3"},I),Object(C.a)({key:"col_1",name:"C1"},I),Object(C.a)({key:"col_2",name:"C2"},I),Object(C.a)({key:"col_3",name:"C3"},I),Object(C.a)({key:"col_1",name:"C1"},I),Object(C.a)({key:"col_2",name:"C2"},I),Object(C.a)({key:"col_3",name:"C3"},I),Object(C.a)({key:"col_1",name:"C1"},I),Object(C.a)({key:"col_2",name:"C2"},I),Object(C.a)({key:"col_3",name:"C3"},I),{columns:[Object(C.a)({key:"col_1",name:"C1"},I),Object(C.a)({key:"col_2",name:"C2"},I)],rows:[{col_1:4,col_2:-2},{col_1:3,col_2:-1}]}),P={columns:[Object(C.a)({key:"col_1",name:"C1"},I),Object(C.a)({key:"col_2",name:"C2"},I)],rows:[{col_1:1,col_2:0}]},Y={columns:[Object(C.a)({key:"col_1",name:"C1"},I),Object(C.a)({key:"col_2",name:"C2"},I)],rows:[{col_1:2,col_2:3},{col_1:4,col_2:1}]},Z={columns:[Object(C.a)({key:"col_1",name:"C1"},I),Object(C.a)({key:"col_2",name:"C2"},I)],rows:[{col_1:-.7,col_2:1}]},$={columns:[Object(C.a)({key:"col_1",name:"C1"},I),Object(C.a)({key:"col_2",name:"C2"},I)],rows:[{col_1:7,col_2:-2},{col_1:3,col_2:-1}]},ee={columns:[Object(C.a)({key:"col_1",name:"C1"},I),Object(C.a)({key:"col_2",name:"C2"},I)],rows:[{col_1:1,col_2:0}]},ne={columns:[Object(C.a)({key:"col_1",name:"C1"},I),Object(C.a)({key:"col_2",name:"C2"},I),Object(C.a)({key:"col_3",name:"C3"},I),Object(C.a)({key:"col_4",name:"C4"},I)],rows:[{col_1:5,col_2:0,col_3:0,col_4:-1},{col_1:1,col_2:0,col_3:-1,col_4:1},{col_1:-1.5,col_2:1,col_3:-2,col_4:1},{col_1:-1,col_2:1,col_3:3,col_4:-3}]},te=(Object(C.a)({key:"col_1",name:"C1"},I),Object(C.a)({key:"col_2",name:"C2"},I),{columns:[Object(C.a)({key:"col_1",name:"x"},I),Object(C.a)({key:"col_2",name:"y"},I)],rows:[{col_1:0,col_2:0}]})}}]);
//# sourceMappingURL=31.5ea2e947.chunk.js.map