(this["webpackJsonpnumerical-methods-js"]=this["webpackJsonpnumerical-methods-js"]||[]).push([[42],{439:function(e,n,t){"use strict";t.r(n);var c,a,r,o,l=t(47),i=t(43),s=t(46),b=t(58),j=t(0),u=t(63),m=t(371),O=(t(51),t(50)),_=t(411),d=t(416),y=t(427),g=t(430),h=t(165),f=t(166),C=t(425),x=t(412),v=t(113),k=t.n(v),p=t(112),w=t.n(p),S=t(465),M=t(475),N=t(474),T=t(431),I=t(66),R=t.n(I),B=t(67),q=t(423),H=t(13),V=t(121),z=t(94),A=t(408),Q=t(84),F=t.n(Q),J=t(6),D=[{target:".matrix-size-input",title:"Size",content:"Increase/Reduce the matrix's size",disableBeacon:!0},{target:".matrix-input",title:"Matrix",content:"Specify the matrix here."},{target:".iteration-slider",title:"Iteration slider",content:"Change the slider to view the result of any iteration."}],E=Object(A.a)((function(e){return{paper:{padding:e.spacing(.5),textAlign:"center",color:e.palette.text.primary,margin:e.spacing(1)},container:{"& > *":{margin:e.spacing(1)}},card:{margin:e.spacing(0)},cardContent:{overflow:"auto","& > *":{margin:e.spacing(.5)}},overflow:{overflow:"auto"},matrixCard:{width:"60vw"},divider:{width:"500 px",height:"100px",marginTop:"20px",marginBottom:"20px"},fab:{position:"fixed",bottom:e.spacing(4),right:e.spacing(2)}}}));function G(e){e.smallScreen;var n,t=e.params,u=E(),d=Object(j.useState)(1),g=Object(i.a)(d,2),x=g[0],v=g[1];if(x>t.iterations)v(t.iterations);else{var k=t.results,p=k[x-1],w=1===x?t.originalMatrix:k[x-2].resultMatrix,N=1===x?null:k[x-2].qMatrix;n=String.raw(c||(c=Object(l.a)(["\n        displaystyle\n        \begin{array}{l}\n        \begin{array}{lcl}\n        \\ R^{(",")} "," = ","\n        \\\n        \\ \text{Column, }c = ","\n        \text{","}\n        \\\n        \\ \text{Norm, }lVert c \rVert = ","\n        \\\n        \\ \text{Basis, }e = ","\n        \\\n        \\ hline\n        \begin{array}{lcl}\n        \\ v &=& c + lVert c \rVert e\n        \\\n        \\   &=& "," +  "," ","\n        \\\n        \\   &=& ","\n        \\ end{array}\n        \\ \begin{array}{lcl}\n        \\ v^{T}v &=& "," ","\n        \\\n        \\        &=& ","\n        \\ end{array}\n        \\ \begin{array}{lcl}\n        \\ vv^{T} &=& "," ","\n        \\\n        \\        &=& ","\n        \\ end{array}\n        \\\n        \\ hline\n        \begin{array}{lcl}\n        \\ \text{Householder, } H^{(",")} &=& I - \frac{2}{v^{T}v} vv^{T}\n        \\\n        \\                           &=& "," - \frac{2}{","} ","\n        \\\n        \\                           &=& ","\n        \\ end{array}\n        \\\n        \\ hline\n        \begin{array}{lcl}\n        \\ Q^{(",")} &=& "," H^{(",")}\n        \\\n        \\                           &=& "," ","\n        \\\n        \\                           ","\n        \\ end{array}\n        \\\n        \\ hline\n        \begin{array}{lcl}\n        \\ R^{(",")} &=& H^{(",")} R^{(",")}\n        \\\n        \\                           &=& "," ","\n        \\\n        \\                           &=& ","\n        \\ end{array}\n        "],["\n        \\displaystyle\n        \\begin{array}{l}\n        \\begin{array}{lcl}\n        \\\\ R^{(",")} "," = ","\n        \\\\\n        \\\\ \\text{Column, }c = ","\n        \\text{","}\n        \\\\\n        \\\\ \\text{Norm, }\\lVert c \\rVert = ","\n        \\\\\n        \\\\ \\text{Basis, }e = ","\n        \\\\\n        \\\\ \\hline\n        \\begin{array}{lcl}\n        \\\\ v &=& c + \\lVert c \\rVert e\n        \\\\\n        \\\\   &=& "," +  "," ","\n        \\\\\n        \\\\   &=& ","\n        \\\\ \\end{array}\n        \\\\ \\begin{array}{lcl}\n        \\\\ v^{T}v &=& "," ","\n        \\\\\n        \\\\        &=& ","\n        \\\\ \\end{array}\n        \\\\ \\begin{array}{lcl}\n        \\\\ vv^{T} &=& "," ","\n        \\\\\n        \\\\        &=& ","\n        \\\\ \\end{array}\n        \\\\\n        \\\\ \\hline\n        \\begin{array}{lcl}\n        \\\\ \\text{Householder, } H^{(",")} &=& I - \\frac{2}{v^{T}v} vv^{T}\n        \\\\\n        \\\\                           &=& "," - \\frac{2}{","} ","\n        \\\\\n        \\\\                           &=& ","\n        \\\\ \\end{array}\n        \\\\\n        \\\\ \\hline\n        \\begin{array}{lcl}\n        \\\\ Q^{(",")} &=& "," H^{(",")}\n        \\\\\n        \\\\                           &=& "," ","\n        \\\\\n        \\\\                           ","\n        \\\\ \\end{array}\n        \\\\\n        \\\\ \\hline\n        \\begin{array}{lcl}\n        \\\\ R^{(",")} &=& H^{(",")} R^{(",")}\n        \\\\\n        \\\\                           &=& "," ","\n        \\\\\n        \\\\                           &=& ","\n        \\\\ \\end{array}\n        "])),x-1,1===x?String.raw(a||(a=Object(l.a)(["= \text{Original Matrix}"],["= \\text{Original Matrix}"]))):"",Object(b.C)(w,{boldColumns:[x]}),Object(b.C)(p.vectorColumn,{single:!0}),x>1?"\\ Note: The first "+(x-1)+" elements of c must be zero.":"",Object(s.b)(p.columnNorm),Object(b.C)(p.vectorBasis,{single:!0}),Object(b.C)(p.vectorColumn,{single:!0}),Object(s.b)(p.columnNorm),Object(b.C)(p.vectorBasis,{single:!0}),Object(b.C)(p.vectorCombined,{single:!0}),Object(b.C)([p.vectorCombined]),Object(b.C)(p.vectorCombined,{single:!0}),Object(s.b)(p.transposeMultiply),Object(b.C)(p.vectorCombined,{single:!0}),Object(b.C)([p.vectorCombined]),Object(b.C)(p.multiplyTranspose),x,Object(b.C)(Object(m.Cc)(p.vectorColumn.length).toArray()),Object(s.b)(p.transposeMultiply),Object(b.C)(p.multiplyTranspose),Object(b.C)(p.householder),x,x>1?"Q^{("+(x-1)+")}":"",x,x>1?Object(b.C)(N):"",Object(b.C)(p.householder),x>1?"&=&"+Object(b.C)(p.qMatrix):"",x,x,x-1,Object(b.C)(p.householder),Object(b.C)(w),Object(b.C)(p.resultMatrix)),x===t.iterations&&(n+=String.raw(r||(r=Object(l.a)(["\n            \\\n            \\ hline\n            \\ \text{To verify the answer,}\n            \\ \begin{array}{lcl}\n            \\ Q^{(",")} R^{(",")} &=& "," ","\n            \\\n            \\                           &=& ","\n            \\\n            \\                           &=&  \text{Original Matrix}\n            \\ end{array}\n            \\\n            \\\n            "],["\n            \\\\\n            \\\\ \\hline\n            \\\\ \\text{To verify the answer,}\n            \\\\ \\begin{array}{lcl}\n            \\\\ Q^{(",")} R^{(",")} &=& "," ","\n            \\\\\n            \\\\                           &=& ","\n            \\\\\n            \\\\                           &=&  \\text{Original Matrix}\n            \\\\ \\end{array}\n            \\\\\n            \\\\\n            "])),x,x,Object(b.C)(p.qMatrix),Object(b.C)(p.resultMatrix),Object(b.C)(Object(m.vd)(p.qMatrix,p.resultMatrix)))),n+=String.raw(o||(o=Object(l.a)(["end{array}end{array}"],["\\end{array}\\end{array}"])))}return Object(J.jsx)(y.a,{className:u.container,children:Object(J.jsxs)(C.a,{container:!0,direction:"column",alignItems:"center",justify:"flex-start",children:[Object(J.jsx)(C.a,{xs:!0,item:!0,className:"iteration-slider",children:Object(J.jsx)(H.b,{direction:"left",triggerOnce:!0,children:Object(J.jsx)(S.a,{id:"iteration-slider",width:"70vw",children:Object(J.jsx)(M.a,{orientation:"horizontal",onChangeCommitted:function(e,n){v(n)},defaultValue:1,"aria-labelledby":"discrete-slider-small-steps",step:1,marks:!0,min:1,max:t.iterations<=0?1:t.iterations,valueLabelDisplay:"on"})})})}),Object(J.jsx)(C.a,{xs:!0,item:!0,className:"step-math",children:Object(J.jsx)(H.b,{direction:"right",triggerOnce:!0,children:Object(J.jsx)(h.a,{className:u.card,children:Object(J.jsxs)(f.a,{className:u.cardContent,children:[Object(J.jsxs)(_.a,{variant:"h6",children:["Iteration ",x,":"]}),Object(J.jsx)(O.a,{math:n,block:!0})]})})})})]})})}n.default=function(e){var n=e.methodName,t=e.markdown;Object(j.useEffect)((function(){document.title=n}));var c=E(),a=Object(z.a)(Object(V.a)().breakpoints.down("sm")),r=a?45:60,o=a?10:100,l=a?5:20,s=Object(j.useState)(b.w),O=Object(i.a)(s,2),v=O[0],p=O[1],S=function(e){return function(){var n=v.columns.slice(),t=v.rows.slice();if(e){n.push(Object(b.b)(n.length)),t.push(Object(b.c)(v.columns.length));for(var c=0;c<t.length;c++)t[c]["col_".concat(n.length)]=0}else{if(2===n.length)return;t.pop();for(var a=0;a<t.length;a++)delete t[a]["col_".concat(n.length)];n.pop()}p({columns:n,rows:t})}},M=Object(b.g)(v.rows),I=Object(b.a)(M),A=v.rows.length,Q=A-1,W=[];console.log("originalMatrix",M);for(var L=0;L<Q;L++){for(var U=Object(m.Re)(Object(m.jb)(I,L)),X=0;X<L;X++)U[X]=0;console.log("vectorColumn",U);var K=Object(m.yd)(U,2);console.log("columnNorm",K);var P=Object(m.vf)(A).toArray();P[L]=U[L]<0?-1:1,console.log("vectorBasis",P);var Y=Object(m.F)(U,Object(m.vd)(K,P));console.log("vectorCombined",Y);var Z=Object(m.vd)(Y,Y);console.log("transposeMultiply",Z);for(var $=[],ee=0;ee<A;ee++){$.push(Array(A).fill(0));for(var ne=0;ne<A;ne++)$[ee][ne]=Y[ee]*Y[ne]}console.log("multiplyTranspose",$);var te=Object(m.Xe)(Object(m.Cc)(A),Object(m.vd)(2/Z,$)).toArray();console.log("householder",te);var ce=0===L?te:Object(m.vd)(W[L-1].qMatrix,te);console.log("qMatrix",ce),I=Object(m.vd)(te,I),console.log("resultMatrix",I),W.push({vectorColumn:U,columnNorm:K,vectorBasis:P,vectorCombined:Y,transposeMultiply:Z,multiplyTranspose:$,householder:te,qMatrix:ce,resultMatrix:Object(b.a)(I)})}var ae=Object(j.useState)(!1),re=Object(i.a)(ae,2),oe=re[0],le=re[1],ie={originalMatrix:M,matrixSize:A,iterations:Q,results:W};return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(u.a,{methodName:n,markdown:t}),Object(J.jsx)(d.a,{className:c.paper,children:Object(J.jsx)(y.a,{className:c.container,children:Object(J.jsxs)(H.c,{duration:500,triggerOnce:!0,cascade:!0,children:[Object(J.jsx)(_.a,{variant:"body1"}),Object(J.jsx)(C.a,{container:!0,spacing:1,direction:"row",alignItems:"center",justify:"center",children:Object(J.jsx)(C.a,{xs:!0,item:!0,children:Object(J.jsx)(h.a,{className:c.card,children:Object(J.jsx)(f.a,{className:c.cardContent,children:Object(J.jsxs)(C.a,{container:!0,spacing:1,direction:"column",alignItems:"center",justify:"center",children:[Object(J.jsxs)(C.a,{xs:!0,item:!0,className:"matrix-size-input",container:!0,spacing:1,direction:"row",alignItems:"center",justify:"center",children:[Object(J.jsx)(_.a,{variant:"h6",children:"Size:\xa0\xa0\xa0\xa0\xa0"}),Object(J.jsx)(x.a,{variant:"contained",color:"primary",onClick:S(!1),children:Object(J.jsx)(w.a,{color:"error"})}),Object(J.jsx)(x.a,{variant:"contained",color:"primary",onClick:S(!0),children:Object(J.jsx)(k.a,{})})]}),Object(J.jsxs)(C.a,{xs:!0,item:!0,className:"matrix-input",container:!0,spacing:1,direction:"column",alignItems:"center",justify:"center",children:[Object(J.jsx)(C.a,{xs:!0,item:!0,children:Object(J.jsx)(_.a,{variant:"h6",children:"Matrix:"})}),Object(J.jsx)(C.a,{xs:!0,item:!0,container:!0,spacing:0,direction:"row",alignItems:"center",justify:"center",children:Object(J.jsx)(C.a,{item:!0,className:c.overflow,children:Object(J.jsx)(F.a,{columns:v.columns,rowGetter:function(e){return v.rows[e]},rowsCount:v.rows.length,onGridRowsUpdated:Object(b.d)(v,p),enableCellSelect:!0,headerRowHeight:1,minColumnWidth:r,minWidth:r*v.columns.length+o,rowHeight:35,minHeight:35*v.rows.length+l})},0)})]})]})})})})})]})})}),Object(J.jsx)(g.a,{}),Object(J.jsx)(q.a,{in:true,children:Object(J.jsx)(H.a,{triggerOnce:!0,children:Object(J.jsx)(d.a,{className:c.paper,children:Object(J.jsx)(G,{smallScreen:a,params:ie})})})}),Object(J.jsx)(N.a,{arrow:!0,title:"Help",placement:"top",children:Object(J.jsx)(T.a,{color:"secondary","aria-label":"help",className:c.fab,onClick:function(){le(!0)},children:Object(J.jsx)(R.a,{})})}),Object(J.jsx)(B.a,{scrollToFirstStep:!0,run:oe,steps:D,continuous:!0,showSkipButton:!0,locale:{last:"End tour"},callback:function(e){"reset"!==e.action&&"close"!==e.action||le(!1)}})]})}},58:function(e,n,t){"use strict";t.d(n,"d",(function(){return M})),t.d(n,"b",(function(){return R})),t.d(n,"c",(function(){return B})),t.d(n,"g",(function(){return q})),t.d(n,"a",(function(){return H})),t.d(n,"B",(function(){return V})),t.d(n,"E",(function(){return z})),t.d(n,"f",(function(){return A})),t.d(n,"D",(function(){return Q})),t.d(n,"e",(function(){return F})),t.d(n,"C",(function(){return J})),t.d(n,"l",(function(){return D})),t.d(n,"z",(function(){return E})),t.d(n,"w",(function(){return G})),t.d(n,"k",(function(){return W})),t.d(n,"A",(function(){return L})),t.d(n,"x",(function(){return U})),t.d(n,"y",(function(){return X})),t.d(n,"m",(function(){return K})),t.d(n,"h",(function(){return P})),t.d(n,"n",(function(){return Y})),t.d(n,"i",(function(){return Z})),t.d(n,"o",(function(){return $})),t.d(n,"j",(function(){return ee})),t.d(n,"p",(function(){return ne})),t.d(n,"q",(function(){return te})),t.d(n,"r",(function(){return ce})),t.d(n,"s",(function(){return ae})),t.d(n,"t",(function(){return re})),t.d(n,"u",(function(){return oe})),t.d(n,"v",(function(){return le}));var c,a,r,o,l,i,s,b,j,u,m,O,_,d=t(47),y=t(62),g=t(89),h=t(71),f=t(72),C=t(77),x=t(76),v=t(44),k=t(46),p=t(0),w=t.n(p),S=t(6);function M(e,n){return function(t){for(var c=t.fromRow,a=t.toRow,r=t.updated,o=e.rows.slice(),l=c;l<=a;l++)o[l]=Object(v.a)(Object(v.a)({},o[l]),r);n(Object(v.a)(Object(v.a)({},e),{},{rows:o}))}}var N=function(e){Object(C.a)(t,e);var n=Object(x.a)(t);function t(e){var c;return Object(h.a)(this,t),(c=n.call(this,e)).ref=w.a.createRef(),c.onInputChange=function(){var e=c.ref.current.value;try{e=parseFloat(e),isNaN(e)&&(e=0)}catch(n){e=0}c.setState({value:e})},c.state={value:e.value},c}return Object(f.a)(t,[{key:"getValue",value:function(){return Object(g.a)({},this.props.column.key,this.state.value)}},{key:"getInputNode",value:function(){return this.ref.current?this.ref.current:null}},{key:"render",value:function(){return Object(S.jsx)("input",{ref:this.ref,defaultValue:this.state.value,onBlur:this.onInputChange,onChange:this.onInputChange})}}]),t}(w.a.Component),T={display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},I={editable:!0,editor:N,formatter:function(e){Object(C.a)(t,e);var n=Object(x.a)(t);function t(){return Object(h.a)(this,t),n.apply(this,arguments)}return Object(f.a)(t,[{key:"render",value:function(){return Object(S.jsx)("div",{style:T,children:this.props.value})}}]),t}(w.a.Component)},R=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=e+1;return n?Object(v.a)({key:"col_".concat(t),name:n},I):Object(v.a)({key:"col_".concat(t),name:"C".concat(t)},I)},B=function(e){for(var n={},t=1;t<=e;t++)n["col_".concat(t)]=0;return n},q=function(e){var n=Object.keys(e[0]).sort();return e.map((function(e){return n.map((function(n){return e[n]}))}))},H=function(e){return JSON.parse(JSON.stringify(e))},V=function(e){for(var n=0;n<e.length;n++){for(var t=e[n][n],c=0,a=0;a<e.length;a++)a!==n&&(c+=e[n][a]);if(Math.abs(t)<=Math.abs(c))return!1}return!0},z=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3],A=function(e,n){return z[e]/z[n]/z[e-n]},Q=function(e){for(var n=e.length-1;n>0&&e[n-1]>=e[n];)n--;if(n<=0)return!1;for(var t=e.length-1;e[t]<=e[n-1];)t--;var c=e[n-1];for(e[n-1]=e[t],e[t]=c,t=e.length-1;n<t;)c=e[n],e[n]=e[t],e[t]=c,n++,t--;return!0},F=function(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(y.a)(Array(e.length).keys()),t={},c=[],a=0;a<n.length;a++)c.includes(e[a])||n[a]===e[a]||(t[a]=e[a],c.push(n[a],e[a]));return t},J=function(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},y=t.single,g=void 0!==y&&y,h=t.leftBracketOnly,f=void 0!==h&&h,C=t.rightBracketOnly,x=void 0!==C&&C,v=t.boldRows,p=void 0===v?[]:v,w=t.boldColumns,S=void 0===w?[]:w;t.transpose;n=x?String.raw(c||(c=Object(d.a)(["left|\begin{matrix}"],["\\left|\\begin{matrix}"]))):String.raw(a||(a=Object(d.a)(["left[\begin{matrix}"],["\\left[\\begin{matrix}"])));var M=e.length,N=e[0].length;if(g)for(var T=0;T<M;T++){for(var I=!1,R=0;R<p.length;R++)if(p[R]===T+1){I=!0;break}var B=String.raw(r||(r=Object(d.a)([" "," "])),Object(k.b)(e[T]));n+=I?String.raw(o||(o=Object(d.a)([" colorbox{aqua}{\bf{","}} "],[" \\colorbox{aqua}{\\bf{","}} "])),B):String.raw(l||(l=Object(d.a)(["",""])),B),n+=String.raw(i||(i=Object(d.a)(["cr"],["\\cr"])))}else for(var q=0;q<M;q++){for(var H=!1,V=0;V<p.length;V++)if(p[V]===q+1){H=!0;break}for(var z=0;z<N;z++){for(var A=!1,Q=0;Q<S.length;Q++)if(S[Q]===z+1){A=!0;break}var F=String.raw(s||(s=Object(d.a)([" "," "])),Object(k.b)(e[q][z]));n+=H||A?String.raw(b||(b=Object(d.a)([" colorbox{aqua}{\bf{","}} "],[" \\colorbox{aqua}{\\bf{","}} "])),F):String.raw(j||(j=Object(d.a)(["",""])),F),z!==N-1&&(n+=String.raw(u||(u=Object(d.a)(["&"]))))}n+=String.raw(m||(m=Object(d.a)(["cr"],["\\cr"])))}return n+=f?String.raw(O||(O=Object(d.a)(["end{matrix}\right|"],["\\end{matrix}\\right|"]))):String.raw(_||(_=Object(d.a)(["end{matrix}\right]"],["\\end{matrix}\\right]"])))},D={columns:[Object(v.a)({key:"col_1",name:"C1"},I),Object(v.a)({key:"col_2",name:"C2"},I),Object(v.a)({key:"col_3",name:"C3"},I),Object(v.a)({key:"col_4",name:"C4"},I)],rows:[{col_1:0,col_2:1,col_3:-3,col_4:4},{col_1:2,col_2:-2,col_3:1,col_4:0},{col_1:2,col_2:-1,col_3:-2,col_4:4},{col_1:-6,col_2:4,col_3:3,col_4:-8}]},E=(Object(v.a)({key:"col_1",name:"C1"},I),Object(v.a)({key:"col_2",name:"C2"},I),Object(v.a)({key:"col_3",name:"C3"},I),Object(v.a)({key:"col_4",name:"C4"},I),{columns:[Object(v.a)({key:"col_1",name:"C1"},I),Object(v.a)({key:"col_2",name:"C2"},I),Object(v.a)({key:"col_3",name:"C3"},I),Object(v.a)({key:"col_4",name:"C4"},I)],rows:[{col_1:1,col_2:-1,col_3:0,col_4:1}]}),G=(Object(v.a)({key:"col_1",name:"C1"},I),Object(v.a)({key:"col_2",name:"C2"},I),Object(v.a)({key:"col_3",name:"C3"},I),Object(v.a)({key:"col_1",name:"C1"},I),Object(v.a)({key:"col_2",name:"C2"},I),Object(v.a)({key:"col_3",name:"C3"},I),Object(v.a)({key:"col_1",name:"C1"},I),Object(v.a)({key:"col_2",name:"C2"},I),Object(v.a)({key:"col_3",name:"C3"},I),{columns:[Object(v.a)({key:"col_1",name:"C1"},I),Object(v.a)({key:"col_2",name:"C2"},I),Object(v.a)({key:"col_3",name:"C3"},I),Object(v.a)({key:"col_4",name:"C4"},I)],rows:[{col_1:-1,col_2:11,col_3:-1,col_4:3},{col_1:10,col_2:-1,col_3:2,col_4:0},{col_1:0,col_2:3,col_3:-1,col_4:8},{col_1:2,col_2:-1,col_3:10,col_4:-1}]}),W={columns:[Object(v.a)({key:"col_1",name:"C1"},I),Object(v.a)({key:"col_2",name:"C2"},I),Object(v.a)({key:"col_3",name:"C3"},I),Object(v.a)({key:"col_4",name:"C4"},I)],rows:[{col_1:0,col_2:0,col_3:0,col_4:0}]},L={columns:[Object(v.a)({key:"col_1",name:"C1"},I),Object(v.a)({key:"col_2",name:"C2"},I),Object(v.a)({key:"col_3",name:"C3"},I),Object(v.a)({key:"col_4",name:"C4"},I)],rows:[{col_1:25,col_2:6,col_3:15,col_4:-11}]},U={columns:[Object(v.a)({key:"col_1",name:"C1"},I),Object(v.a)({key:"col_2",name:"C2"},I),Object(v.a)({key:"col_3",name:"C3"},I)],rows:[{col_1:3,col_2:-.1,col_3:-.2},{col_1:.1,col_2:7,col_3:-.3},{col_1:.3,col_2:-.2,col_3:10}]},X=(Object(v.a)({key:"col_1",name:"C1"},I),Object(v.a)({key:"col_2",name:"C2"},I),{columns:[Object(v.a)({key:"col_1",name:"C1"},I),Object(v.a)({key:"col_2",name:"C2"},I),Object(v.a)({key:"col_3",name:"C3"},I)],rows:[{col_1:3,col_2:5,col_3:2},{col_1:2,col_2:3,col_3:-2}]}),K=(Object(v.a)({key:"col_1",name:"C1"},I),Object(v.a)({key:"col_2",name:"C2"},I),Object(v.a)({key:"col_1",name:"C1"},I),Object(v.a)({key:"col_2",name:"C2"},I),Object(v.a)({key:"col_3",name:"C3"},I),Object(v.a)({key:"col_1",name:"C1"},I),Object(v.a)({key:"col_2",name:"C2"},I),Object(v.a)({key:"col_3",name:"C3"},I),Object(v.a)({key:"col_1",name:"C1"},I),Object(v.a)({key:"col_2",name:"C2"},I),Object(v.a)({key:"col_3",name:"C3"},I),Object(v.a)({key:"col_1",name:"C1"},I),Object(v.a)({key:"col_2",name:"C2"},I),Object(v.a)({key:"col_3",name:"C3"},I),{columns:[Object(v.a)({key:"col_1",name:"C1"},I),Object(v.a)({key:"col_2",name:"C2"},I)],rows:[{col_1:4,col_2:-2},{col_1:3,col_2:-1}]}),P={columns:[Object(v.a)({key:"col_1",name:"C1"},I),Object(v.a)({key:"col_2",name:"C2"},I)],rows:[{col_1:1,col_2:0}]},Y={columns:[Object(v.a)({key:"col_1",name:"C1"},I),Object(v.a)({key:"col_2",name:"C2"},I)],rows:[{col_1:2,col_2:3},{col_1:4,col_2:1}]},Z={columns:[Object(v.a)({key:"col_1",name:"C1"},I),Object(v.a)({key:"col_2",name:"C2"},I)],rows:[{col_1:-.7,col_2:1}]},$={columns:[Object(v.a)({key:"col_1",name:"C1"},I),Object(v.a)({key:"col_2",name:"C2"},I)],rows:[{col_1:7,col_2:-2},{col_1:3,col_2:-1}]},ee={columns:[Object(v.a)({key:"col_1",name:"C1"},I),Object(v.a)({key:"col_2",name:"C2"},I)],rows:[{col_1:1,col_2:0}]},ne={columns:[Object(v.a)({key:"col_1",name:"C1"},I),Object(v.a)({key:"col_2",name:"C2"},I),Object(v.a)({key:"col_3",name:"C3"},I),Object(v.a)({key:"col_4",name:"C4"},I)],rows:[{col_1:5,col_2:0,col_3:0,col_4:-1},{col_1:1,col_2:0,col_3:-1,col_4:1},{col_1:-1.5,col_2:1,col_3:-2,col_4:1},{col_1:-1,col_2:1,col_3:3,col_4:-3}]},te=(Object(v.a)({key:"col_1",name:"C1"},I),Object(v.a)({key:"col_2",name:"C2"},I),{columns:[Object(v.a)({key:"col_1",name:"x"},I),Object(v.a)({key:"col_2",name:"y"},I)],rows:[{col_1:0,col_2:0}]}),ce={columns:[Object(v.a)({key:"col_1",name:"x"},I),Object(v.a)({key:"col_2",name:"y"},I)],rows:[{col_1:0,col_2:1}]},ae={columns:[Object(v.a)({key:"col_1",name:"x"},I),Object(v.a)({key:"col_2",name:"y"},I)],rows:[{col_1:1,col_2:1}]},re={columns:[Object(v.a)({key:"col_1",name:"x"},I),Object(v.a)({key:"col_2",name:"y"},I),Object(v.a)({key:"col_3",name:"u"},I)],rows:[{col_1:0,col_2:1,col_3:2}]},oe={columns:[Object(v.a)({key:"col_1",name:"a"},I),Object(v.a)({key:"col_2",name:"y(a)"},I),Object(v.a)({key:"col_3",name:"b"},I),Object(v.a)({key:"col_4",name:"y(b)"},I)],rows:[{col_1:0,col_2:0,col_3:1,col_4:2}]},le={columns:[Object(v.a)({key:"col_1",name:"a"},I),Object(v.a)({key:"col_2",name:"y(a)"},I),Object(v.a)({key:"col_3",name:"b"},I),Object(v.a)({key:"col_4",name:"y(b)"},I)],rows:[{col_1:0,col_2:0,col_3:1,col_4:5}]}}}]);
//# sourceMappingURL=42.ca1d0097.chunk.js.map