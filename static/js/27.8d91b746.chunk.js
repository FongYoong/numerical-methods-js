(this["webpackJsonpnumerical-methods-js"]=this["webpackJsonpnumerical-methods-js"]||[]).push([[27],{180:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(2),r=n(0),a=n(331),o=n(270);function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(a.a)(),l=Object(o.a)({theme:n,name:"MuiUseMediaQuery",props:{}});var i="function"===typeof e?e(n):e;i=i.replace(/^@media( ?)/m,"");var s="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,b=Object(c.a)({},l,t),u=b.defaultMatches,j=void 0!==u&&u,m=b.matchMedia,O=void 0===m?s?window.matchMedia:null:m,f=b.noSsr,d=void 0!==f&&f,_=b.ssrMatchMedia,h=void 0===_?null:_,g=r.useState((function(){return d&&s?O(i).matches:h?h(i).matches:j})),y=g[0],x=g[1];return r.useEffect((function(){var e=!0;if(s){var t=O(i),n=function(){e&&x(t.matches)};return n(),t.addListener(n),function(){e=!1,t.removeListener(n)}}}),[i,O,s]),y}},296:function(e,t,n){"use strict";n.r(t);var c,r,a,o,l,i,s,b,u,j,m,O,f=n(52),d=n(54),_=n(58),h=n(48),g=n(64),y=n(0),x=n(69),v=n(133),p=(n(62),n(63)),k=n(273),w=n(269),C=n(281),S=n(288),A=n(285),T=n(286),N=n(279),D=n(272),I=n(100),M=n.n(I),U=n(99),V=n.n(U),R=n(333),q=n(289),P=n(76),B=n.n(P),E=n(77),H=n(13),J=n(103),W=n(180),z=n(264),F=n(93),G=n.n(F),L=n(6),Q=[{target:".matrix-col-input",title:"Column",content:"Add/Remove columns",disableBeacon:!0},{target:".matrix-row-input",title:"Row",content:"Add/Remove rows"},{target:".matrix-input",title:"Matrix",content:"Specify the matrix here."}],K=Object(z.a)((function(e){return{paper:{padding:e.spacing(.5),textAlign:"center",color:e.palette.text.primary,margin:e.spacing(1)},container:{"& > *":{margin:e.spacing(1)}},card:{margin:e.spacing(0)},cardContent:{overflow:"auto","& > *":{margin:e.spacing(.5)}},overflow:{overflow:"auto"},matrixCard:{width:"60vw"},divider:{width:"500 px",height:"100px",marginTop:"20px",marginBottom:"20px"},fab:{position:"fixed",bottom:e.spacing(4),right:e.spacing(2)}}}));t.default=function(e){var t=e.methodName;Object(y.useEffect)((function(){document.title=t}));var n=K(),I=Object(W.a)(Object(J.a)().breakpoints.down("sm")),U=I?45:60,P=I?10:100,z=I?5:20,F=Object(y.useState)(g.t),X=Object(_.a)(F,2),Y=X[0],Z=X[1],$=function(e){return function(){var t=Y.columns.slice(),n=Y.rows.slice();if(e){t.push(Object(g.b)(t.length));for(var c=0;c<n.length;c++)n[c]["col_".concat(t.length)]=0}else{if(2===t.length)return;for(var r=0;r<n.length;r++)delete n[r]["col_".concat(t.length)];t.pop()}Z({columns:t,rows:n})}},ee=function(e){return function(){var t=Y.rows.slice();if(e)t.push(Object(g.c)(Y.columns.length));else{if(2===t.length)return;t.pop()}Z(Object(d.a)(Object(d.a)({},Y),{},{rows:t}))}},te=Object(g.g)(Y.rows),ne=Y.rows.length,ce=Y.columns.length,re=Object(v.vd)(Object(v.ff)(te),te),ae=Object(v.Ub)(re),oe=ae.values.slice().reverse().map((function(e){return Math.sqrt(e)})),le=Object(v.vd)(te,Object(v.ff)(te)),ie=Object(v.Ub)(le),se=ie.values.slice().reverse().map((function(e){return Math.sqrt(e)})),be=Object(v.ff)(ae.vectors).reverse(),ue=Object(v.ff)(ie.vectors).reverse(),je=Object(v.ff)(ue),me=[];if(ne<=ce)for(var Oe=0;Oe<ne;Oe++)me.push(Array(ce).fill(0)),Oe<ce&&(me[Oe][Oe]=oe[Oe]);else for(var fe=0;fe<ne;fe++)me.push(Array(ce).fill(0)),fe<ce&&(me[fe][fe]=se[fe]);for(var de=Object(v.vd)(je,Object(v.vd)(me,be)),_e=String.raw(c||(c=Object(f.a)(["\n    displaystyle\n    \begin{array}{l}\n    \begin{array}{lcl}\n    \\ AA^{T} = ","\n    \\ \n    \\\n    \\ \text{The eigenvectors of } AA^{T}:\n    \\\n    \\ \bf{U} = left[\begin{matrix}"],["\n    \\displaystyle\n    \\begin{array}{l}\n    \\begin{array}{lcl}\n    \\\\ AA^{T} = ","\n    \\\\ \n    \\\\\n    \\\\ \\text{The eigenvectors of } AA^{T}:\n    \\\\\n    \\\\ \\bf{U} = \\left[\\begin{matrix}"])),Object(g.x)(re)),he=0;he<ie.vectors.length;he++)_e+=String.raw(r||(r=Object(f.a)([" v_{","}cr "],[" v_{","}\\cr "])),he+1);_e+=String.raw(a||(a=Object(f.a)(["\n    end{matrix}\right]^{T} = ","\n    \\ \n    \\ hline\n    \\\n    \\ A^{T}A = ","\n    \\\n    \\\n    \\ \text{The eigenvectors of } A^{T}A:\n    \\\n    \\ \bf{V^{T}} = left[\begin{matrix}"],["\n    \\end{matrix}\\right]^{T} = ","\n    \\\\ \n    \\\\ \\hline\n    \\\\\n    \\\\ A^{T}A = ","\n    \\\\\n    \\\\\n    \\\\ \\text{The eigenvectors of } A^{T}A:\n    \\\\\n    \\\\ \\bf{V^{T}} = \\left[\\begin{matrix}"])),Object(g.x)(je),Object(g.x)(re));for(var ge=0;ge<ae.vectors.length;ge++)_e+=String.raw(o||(o=Object(f.a)([" v_{","}cr "],[" v_{","}\\cr "])),ge+1);_e+=String.raw(l||(l=Object(f.a)(["\n    end{matrix}\right] = ","\n    \\ \n    \\ \text{The eigenvalues of } A^{T}A \text{ or singular values,}  sigma\n    \\ = ","\n    \\\n    \\ \bf{D} = left[\begin{matrix}"],["\n    \\end{matrix}\\right] = ","\n    \\\\ \n    \\\\ \\text{The eigenvalues of } A^{T}A \\text{ or singular values,} \\ \\sigma\n    \\\\ = ","\n    \\\\\n    \\\\ \\bf{D} = \\left[\\begin{matrix}"])),Object(g.x)(be),oe.map((function(e){return Object(h.b)(e)})));for(var ye=0;ye<ne;ye++){for(var xe=0;xe<ce;xe++)_e+=xe===ye?String.raw(i||(i=Object(f.a)(["colorbox{aqua}{\bf{","}}"],["\\colorbox{aqua}{\\bf{","}}"])),Object(h.b)(me[ye][xe])):String.raw(s||(s=Object(f.a)(["",""])),Object(h.b)(me[ye][xe])),xe!==ce-1&&(_e+=String.raw(b||(b=Object(f.a)(["&"]))));_e+=String.raw(u||(u=Object(f.a)(["cr"],["\\cr"])))}_e+=String.raw(j||(j=Object(f.a)(["\n    end{matrix}\right]\n    \\\n    \\ hline\n    \\ \begin{array}{lcl}\n    \\ A &=& ","\n    \\\n    \\ U &=& ","\n    \\\n    \\ D &=& ","\n    \\\n    \\ V^{T} &=& ","\n    \\\n    \\ A &=& U D V^{T}\n    \\\n    \\   &=& "," "," ","\n    \\\n    \\   &=& ","\n    \\ end{array}\n    \\\n    "],["\n    \\end{matrix}\\right]\n    \\\\\n    \\\\ \\hline\n    \\\\ \\begin{array}{lcl}\n    \\\\ A &=& ","\n    \\\\\n    \\\\ U &=& ","\n    \\\\\n    \\\\ D &=& ","\n    \\\\\n    \\\\ V^{T} &=& ","\n    \\\\\n    \\\\ A &=& U D V^{T}\n    \\\\\n    \\\\   &=& "," "," ","\n    \\\\\n    \\\\   &=& ","\n    \\\\ \\end{array}\n    \\\\\n    "])),Object(g.x)(te),Object(g.x)(je),Object(g.x)(me),Object(g.x)(be),Object(g.x)(je),Object(g.x)(me),Object(g.x)(be),Object(g.x)(de)),ne>ce&&(_e+=String.raw(m||(m=Object(f.a)(["\n        \\ \text{We find that } U D V^{T} \ne A.\n        \\ \text{This is because the my naive SVD algorithm does not work when rows are greater than columns.}\n        \\ \text{I'm too lazy to rectify this, sorry!}\n        "],["\n        \\\\ \\text{We find that } U D V^{T} \\ne A.\n        \\\\ \\text{This is because the my naive SVD algorithm does not work when rows are greater than columns.}\n        \\\\ \\text{I'm too lazy to rectify this, sorry!}\n        "])))),_e+=String.raw(O||(O=Object(f.a)(["end{array}end{array}"],["\\end{array}\\end{array}"])));var ve=Object(y.useState)(!1),pe=Object(_.a)(ve,2),ke=pe[0],we=pe[1];return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(x.a,{methodName:t}),Object(L.jsx)(w.a,{className:n.paper,children:Object(L.jsx)(C.a,{className:n.container,children:Object(L.jsxs)(H.c,{duration:500,triggerOnce:!0,cascade:!0,children:[Object(L.jsx)(k.a,{variant:"body1",children:"Incomplete! Experimental!"}),Object(L.jsx)(N.a,{container:!0,spacing:1,direction:"row",alignItems:"center",justify:"center",children:Object(L.jsx)(N.a,{xs:!0,item:!0,children:Object(L.jsx)(A.a,{className:n.card,children:Object(L.jsx)(T.a,{className:n.cardContent,children:Object(L.jsxs)(N.a,{container:!0,spacing:1,direction:"column",alignItems:"center",justify:"center",children:[Object(L.jsxs)(N.a,{xs:!0,item:!0,className:"matrix-col-input",container:!0,spacing:1,direction:"row",alignItems:"center",justify:"center",children:[Object(L.jsx)(k.a,{variant:"subtitle1",children:"Columns:"}),Object(L.jsx)(D.a,{variant:"contained",color:"primary",onClick:$(!1),children:Object(L.jsx)(V.a,{color:"error"})}),Object(L.jsx)(D.a,{variant:"contained",color:"primary",onClick:$(!0),children:Object(L.jsx)(M.a,{})})]}),Object(L.jsxs)(N.a,{xs:!0,item:!0,className:"matrix-row-input",container:!0,spacing:1,direction:"row",alignItems:"center",justify:"center",children:[Object(L.jsx)(k.a,{variant:"subtitle1",children:"Rows:\xa0\xa0\xa0\xa0\xa0"}),Object(L.jsx)(D.a,{variant:"contained",color:"primary",onClick:ee(!1),children:Object(L.jsx)(V.a,{color:"error"})}),Object(L.jsx)(D.a,{variant:"contained",color:"primary",onClick:ee(!0),children:Object(L.jsx)(M.a,{})})]}),Object(L.jsxs)(N.a,{xs:!0,item:!0,className:"matrix-input",container:!0,spacing:1,direction:"column",alignItems:"center",justify:"center",children:[Object(L.jsx)(N.a,{xs:!0,item:!0,children:Object(L.jsx)(k.a,{variant:"h6",children:"Matrix, A:"})}),Object(L.jsx)(N.a,{xs:!0,item:!0,container:!0,spacing:0,direction:"row",alignItems:"center",justify:"center",children:Object(L.jsx)(N.a,{item:!0,className:n.overflow,children:Object(L.jsx)(G.a,{columns:Y.columns,rowGetter:function(e){return Y.rows[e]},rowsCount:Y.rows.length,onGridRowsUpdated:Object(g.d)(Y,Z),enableCellSelect:!0,headerRowHeight:1,minColumnWidth:U,minWidth:U*Y.columns.length+P,rowHeight:35,minHeight:35*Y.rows.length+z})},0)})]})]})})})})})]})})}),Object(L.jsx)(S.a,{}),Object(L.jsx)(C.a,{className:n.container,children:Object(L.jsx)(N.a,{container:!0,direction:"column",alignItems:"center",justify:"flex-start",children:Object(L.jsx)(N.a,{xs:!0,item:!0,className:"step-math",children:Object(L.jsx)(H.c,{direction:"right",triggerOnce:!0,children:Object(L.jsx)(A.a,{className:n.card,children:Object(L.jsx)(T.a,{className:n.cardContent,children:Object(L.jsx)(p.a,{math:_e,block:!0})})})})})})}),Object(L.jsx)(R.a,{arrow:!0,title:"Help",placement:"top",children:Object(L.jsx)(q.a,{color:"secondary","aria-label":"help",className:n.fab,onClick:function(){we(!0)},children:Object(L.jsx)(B.a,{})})}),Object(L.jsx)(E.a,{scrollToFirstStep:!0,run:ke,steps:Q,continuous:!0,showSkipButton:!0,locale:{last:"End tour"},callback:function(e){"reset"!==e.action&&"close"!==e.action||we(!1)}})]})}},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(70);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},64:function(e,t,n){"use strict";n.d(t,"d",(function(){return A})),n.d(t,"b",(function(){return I})),n.d(t,"c",(function(){return M})),n.d(t,"g",(function(){return U})),n.d(t,"a",(function(){return V})),n.d(t,"w",(function(){return R})),n.d(t,"z",(function(){return q})),n.d(t,"f",(function(){return P})),n.d(t,"y",(function(){return B})),n.d(t,"e",(function(){return E})),n.d(t,"x",(function(){return H})),n.d(t,"l",(function(){return J})),n.d(t,"u",(function(){return W})),n.d(t,"r",(function(){return z})),n.d(t,"k",(function(){return F})),n.d(t,"v",(function(){return G})),n.d(t,"s",(function(){return L})),n.d(t,"t",(function(){return Q})),n.d(t,"m",(function(){return K})),n.d(t,"h",(function(){return X})),n.d(t,"n",(function(){return Y})),n.d(t,"i",(function(){return Z})),n.d(t,"o",(function(){return $})),n.d(t,"j",(function(){return ee})),n.d(t,"p",(function(){return te})),n.d(t,"q",(function(){return ne}));var c,r,a,o,l,i,s,b,u,j,m,O,f,d=n(52),_=n(60),h=n(70),g=n(67),y=n(68),x=n(73),v=n(72),p=n(54),k=n(48),w=n(0),C=n.n(w),S=n(6);function A(e,t){return function(n){for(var c=n.fromRow,r=n.toRow,a=n.updated,o=e.rows.slice(),l=c;l<=r;l++)o[l]=Object(p.a)(Object(p.a)({},o[l]),a);t(Object(p.a)(Object(p.a)({},e),{},{rows:o}))}}var T=function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(e){var c;return Object(g.a)(this,n),(c=t.call(this,e)).ref=C.a.createRef(),c.onInputChange=function(){var e=c.ref.current.value;try{e=parseFloat(e),isNaN(e)&&(e=0)}catch(t){e=0}c.setState({value:e})},c.state={value:e.value},c}return Object(y.a)(n,[{key:"getValue",value:function(){return Object(h.a)({},this.props.column.key,this.state.value)}},{key:"getInputNode",value:function(){return this.ref.current?this.ref.current:null}},{key:"render",value:function(){return Object(S.jsx)("input",{ref:this.ref,defaultValue:this.state.value,onBlur:this.onInputChange,onChange:this.onInputChange})}}]),n}(C.a.Component),N={display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},D={editable:!0,editor:T,formatter:function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(y.a)(n,[{key:"render",value:function(){return Object(S.jsx)("div",{style:N,children:this.props.value})}}]),n}(C.a.Component)},I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e+1;return t?Object(p.a)({key:"col_".concat(n),name:t},D):Object(p.a)({key:"col_".concat(n),name:"C".concat(n)},D)},M=function(e){for(var t={},n=1;n<=e;n++)t["col_".concat(n)]=0;return t},U=function(e){var t=Object.keys(e[0]).sort();return e.map((function(e){return t.map((function(t){return e[t]}))}))},V=function(e){return JSON.parse(JSON.stringify(e))},R=function(e){for(var t=0;t<e.length;t++){for(var n=e[t][t],c=0,r=0;r<e.length;r++)r!==t&&(c+=e[t][r]);if(Math.abs(n)<=Math.abs(c))return!1}return!0},q=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3],P=function(e,t){return q[e]/q[t]/q[e-t]},B=function(e){for(var t=e.length-1;t>0&&e[t-1]>=e[t];)t--;if(t<=0)return!1;for(var n=e.length-1;e[n]<=e[t-1];)n--;var c=e[t-1];for(e[t-1]=e[n],e[n]=c,n=e.length-1;t<n;)c=e[t],e[t]=e[n],e[n]=c,t++,n--;return!0},E=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(_.a)(Array(e.length).keys()),n={},c=[],r=0;r<t.length;r++)c.includes(e[r])||t[r]===e[r]||(n[r]=e[r],c.push(t[r],e[r]));return n},H=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},_=n.single,h=void 0!==_&&_,g=n.leftBracketOnly,y=void 0!==g&&g,x=n.rightBracketOnly,v=void 0!==x&&x,p=n.boldRows,w=void 0===p?[]:p,C=n.boldColumns,S=void 0===C?[]:C;n.transpose;t=v?String.raw(c||(c=Object(d.a)(["left|\begin{matrix}"],["\\left|\\begin{matrix}"]))):String.raw(r||(r=Object(d.a)(["left[\begin{matrix}"],["\\left[\\begin{matrix}"])));var A=e.length,T=e[0].length;if(h)for(var N=0;N<A;N++){for(var D=!1,I=0;I<w.length;I++)if(w[I]===N+1){D=!0;break}var M=String.raw(a||(a=Object(d.a)([" "," "])),Object(k.b)(e[N]));t+=D?String.raw(o||(o=Object(d.a)([" colorbox{aqua}{\bf{","}} "],[" \\colorbox{aqua}{\\bf{","}} "])),M):String.raw(l||(l=Object(d.a)(["",""])),M),t+=String.raw(i||(i=Object(d.a)(["cr"],["\\cr"])))}else for(var U=0;U<A;U++){for(var V=!1,R=0;R<w.length;R++)if(w[R]===U+1){V=!0;break}for(var q=0;q<T;q++){for(var P=!1,B=0;B<S.length;B++)if(S[B]===q+1){P=!0;break}var E=String.raw(s||(s=Object(d.a)([" "," "])),Object(k.b)(e[U][q]));t+=V||P?String.raw(b||(b=Object(d.a)([" colorbox{aqua}{\bf{","}} "],[" \\colorbox{aqua}{\\bf{","}} "])),E):String.raw(u||(u=Object(d.a)(["",""])),E),q!==T-1&&(t+=String.raw(j||(j=Object(d.a)(["&"]))))}t+=String.raw(m||(m=Object(d.a)(["cr"],["\\cr"])))}return t+=y?String.raw(O||(O=Object(d.a)(["end{matrix}\right|"],["\\end{matrix}\\right|"]))):String.raw(f||(f=Object(d.a)(["end{matrix}\right]"],["\\end{matrix}\\right]"])))},J={columns:[Object(p.a)({key:"col_1",name:"C1"},D),Object(p.a)({key:"col_2",name:"C2"},D),Object(p.a)({key:"col_3",name:"C3"},D),Object(p.a)({key:"col_4",name:"C4"},D)],rows:[{col_1:0,col_2:1,col_3:-3,col_4:4},{col_1:2,col_2:-2,col_3:1,col_4:0},{col_1:2,col_2:-1,col_3:-2,col_4:4},{col_1:-6,col_2:4,col_3:3,col_4:-8}]},W=(Object(p.a)({key:"col_1",name:"C1"},D),Object(p.a)({key:"col_2",name:"C2"},D),Object(p.a)({key:"col_3",name:"C3"},D),Object(p.a)({key:"col_4",name:"C4"},D),{columns:[Object(p.a)({key:"col_1",name:"C1"},D),Object(p.a)({key:"col_2",name:"C2"},D),Object(p.a)({key:"col_3",name:"C3"},D),Object(p.a)({key:"col_4",name:"C4"},D)],rows:[{col_1:1,col_2:-1,col_3:0,col_4:1}]}),z=(Object(p.a)({key:"col_1",name:"C1"},D),Object(p.a)({key:"col_2",name:"C2"},D),Object(p.a)({key:"col_3",name:"C3"},D),Object(p.a)({key:"col_1",name:"C1"},D),Object(p.a)({key:"col_2",name:"C2"},D),Object(p.a)({key:"col_3",name:"C3"},D),Object(p.a)({key:"col_1",name:"C1"},D),Object(p.a)({key:"col_2",name:"C2"},D),Object(p.a)({key:"col_3",name:"C3"},D),{columns:[Object(p.a)({key:"col_1",name:"C1"},D),Object(p.a)({key:"col_2",name:"C2"},D),Object(p.a)({key:"col_3",name:"C3"},D),Object(p.a)({key:"col_4",name:"C4"},D)],rows:[{col_1:-1,col_2:11,col_3:-1,col_4:3},{col_1:10,col_2:-1,col_3:2,col_4:0},{col_1:0,col_2:3,col_3:-1,col_4:8},{col_1:2,col_2:-1,col_3:10,col_4:-1}]}),F={columns:[Object(p.a)({key:"col_1",name:"C1"},D),Object(p.a)({key:"col_2",name:"C2"},D),Object(p.a)({key:"col_3",name:"C3"},D),Object(p.a)({key:"col_4",name:"C4"},D)],rows:[{col_1:0,col_2:0,col_3:0,col_4:0}]},G={columns:[Object(p.a)({key:"col_1",name:"C1"},D),Object(p.a)({key:"col_2",name:"C2"},D),Object(p.a)({key:"col_3",name:"C3"},D),Object(p.a)({key:"col_4",name:"C4"},D)],rows:[{col_1:25,col_2:6,col_3:15,col_4:-11}]},L={columns:[Object(p.a)({key:"col_1",name:"C1"},D),Object(p.a)({key:"col_2",name:"C2"},D),Object(p.a)({key:"col_3",name:"C3"},D)],rows:[{col_1:3,col_2:-.1,col_3:-.2},{col_1:.1,col_2:7,col_3:-.3},{col_1:.3,col_2:-.2,col_3:10}]},Q=(Object(p.a)({key:"col_1",name:"C1"},D),Object(p.a)({key:"col_2",name:"C2"},D),{columns:[Object(p.a)({key:"col_1",name:"C1"},D),Object(p.a)({key:"col_2",name:"C2"},D),Object(p.a)({key:"col_3",name:"C3"},D)],rows:[{col_1:3,col_2:2,col_3:2},{col_1:2,col_2:3,col_3:-2}]}),K=(Object(p.a)({key:"col_1",name:"C1"},D),Object(p.a)({key:"col_2",name:"C2"},D),Object(p.a)({key:"col_1",name:"C1"},D),Object(p.a)({key:"col_2",name:"C2"},D),Object(p.a)({key:"col_3",name:"C3"},D),Object(p.a)({key:"col_1",name:"C1"},D),Object(p.a)({key:"col_2",name:"C2"},D),Object(p.a)({key:"col_3",name:"C3"},D),Object(p.a)({key:"col_1",name:"C1"},D),Object(p.a)({key:"col_2",name:"C2"},D),Object(p.a)({key:"col_3",name:"C3"},D),Object(p.a)({key:"col_1",name:"C1"},D),Object(p.a)({key:"col_2",name:"C2"},D),Object(p.a)({key:"col_3",name:"C3"},D),{columns:[Object(p.a)({key:"col_1",name:"C1"},D),Object(p.a)({key:"col_2",name:"C2"},D)],rows:[{col_1:4,col_2:-2},{col_1:3,col_2:-1}]}),X={columns:[Object(p.a)({key:"col_1",name:"C1"},D),Object(p.a)({key:"col_2",name:"C2"},D)],rows:[{col_1:1,col_2:0}]},Y={columns:[Object(p.a)({key:"col_1",name:"C1"},D),Object(p.a)({key:"col_2",name:"C2"},D)],rows:[{col_1:2,col_2:3},{col_1:4,col_2:1}]},Z={columns:[Object(p.a)({key:"col_1",name:"C1"},D),Object(p.a)({key:"col_2",name:"C2"},D)],rows:[{col_1:-.7,col_2:1}]},$={columns:[Object(p.a)({key:"col_1",name:"C1"},D),Object(p.a)({key:"col_2",name:"C2"},D)],rows:[{col_1:7,col_2:-2},{col_1:3,col_2:-1}]},ee={columns:[Object(p.a)({key:"col_1",name:"C1"},D),Object(p.a)({key:"col_2",name:"C2"},D)],rows:[{col_1:1,col_2:0}]},te={columns:[Object(p.a)({key:"col_1",name:"C1"},D),Object(p.a)({key:"col_2",name:"C2"},D),Object(p.a)({key:"col_3",name:"C3"},D),Object(p.a)({key:"col_4",name:"C4"},D)],rows:[{col_1:5,col_2:0,col_3:0,col_4:-1},{col_1:1,col_2:0,col_3:-1,col_4:1},{col_1:-1.5,col_2:1,col_3:-2,col_4:1},{col_1:-1,col_2:1,col_3:3,col_4:-3}]},ne=(Object(p.a)({key:"col_1",name:"C1"},D),Object(p.a)({key:"col_2",name:"C2"},D),{columns:[Object(p.a)({key:"col_1",name:"x"},D),Object(p.a)({key:"col_2",name:"y"},D)],rows:[{col_1:0,col_2:0}]})},70:function(e,t,n){"use strict";function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return c}))}}]);
//# sourceMappingURL=27.8d91b746.chunk.js.map