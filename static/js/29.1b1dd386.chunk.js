(this["webpackJsonpnumerical-methods-js"]=this["webpackJsonpnumerical-methods-js"]||[]).push([[29],{180:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(2),a=n(0),r=n(331),o=n(270);function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(r.a)(),l=Object(o.a)({theme:n,name:"MuiUseMediaQuery",props:{}});var i="function"===typeof e?e(n):e;i=i.replace(/^@media( ?)/m,"");var s="undefined"!==typeof window&&"undefined"!==typeof window.matchMedia,b=Object(c.a)({},l,t),j=b.defaultMatches,u=void 0!==j&&j,m=b.matchMedia,O=void 0===m?s?window.matchMedia:null:m,f=b.noSsr,d=void 0!==f&&f,_=b.ssrMatchMedia,h=void 0===_?null:_,g=a.useState((function(){return d&&s?O(i).matches:h?h(i).matches:u})),y=g[0],x=g[1];return a.useEffect((function(){var e=!0;if(s){var t=O(i),n=function(){e&&x(t.matches)};return n(),t.addListener(n),function(){e=!1,t.removeListener(n)}}}),[i,O,s]),y}},299:function(e,t,n){"use strict";n.r(t);var c,a,r,o,l,i,s,b,j,u,m,O,f=n(57),d=n(60),_=n(58),h=n(49),g=n(66),y=n(0),x=n(69),v=n(129),k=(n(61),n(62)),p=n(273),C=n(269),w=n(281),A=n(288),S=n(285),T=n(286),N=n(279),I=n(272),M=n(104),R=n.n(M),U=n(103),V=n.n(U),D=n(333),q=n(289),B=n(73),E=n.n(B),H=n(74),J=n(13),W=n(98),z=n(180),F=n(264),G=n(97),L=n.n(G),Q=n(6),K=[{target:".matrix-col-input",title:"Column",content:"Add/Remove columns",disableBeacon:!0},{target:".matrix-row-input",title:"Row",content:"Add/Remove rows"},{target:".matrix-input",title:"Matrix",content:"Specify the matrix here."}],P=Object(F.a)((function(e){return{paper:{padding:e.spacing(.5),textAlign:"center",color:e.palette.text.primary,margin:e.spacing(1)},container:{"& > *":{margin:e.spacing(1)}},card:{margin:e.spacing(0)},cardContent:{overflow:"auto","& > *":{margin:e.spacing(.5)}},overflow:{overflow:"auto"},matrixCard:{width:"60vw"},divider:{width:"500 px",height:"100px",marginTop:"20px",marginBottom:"20px"},fab:{position:"fixed",bottom:e.spacing(4),right:e.spacing(2)}}}));t.default=function(e){var t=e.methodName;Object(y.useEffect)((function(){document.title=t}));var n=P(),M=Object(z.a)(Object(W.a)().breakpoints.down("sm")),U=M?45:60,B=M?10:100,F=M?5:20,G=Object(y.useState)(g.t),X=Object(_.a)(G,2),Y=X[0],Z=X[1],$=function(e){return function(){var t=Y.columns.slice(),n=Y.rows.slice();if(e){t.push(Object(g.b)(t.length));for(var c=0;c<n.length;c++)n[c]["col_".concat(t.length)]=0}else{if(2===t.length||t.length-1===n.length)return;for(var a=0;a<n.length;a++)delete n[a]["col_".concat(t.length)];t.pop()}Z({columns:t,rows:n})}},ee=function(e){return function(){var t=Y.rows.slice();if(e){if(t.length+1===Y.columns.length)return;t.push(Object(g.c)(Y.columns.length))}else{if(2===t.length)return;t.pop()}Z(Object(d.a)(Object(d.a)({},Y),{},{rows:t}))}},te=Object(g.g)(Y.rows),ne=Y.rows.length,ce=Y.columns.length,ae=Object(v.vd)(Object(v.ff)(te),te),re=Object(v.Ub)(ae),oe=re.values.slice().reverse().map((function(e){return Math.sqrt(e)})),le=Object(v.vd)(te,Object(v.ff)(te)),ie=Object(v.Ub)(le),se=ie.values.slice().reverse().map((function(e){return Math.sqrt(e)})),be=Object(v.ff)(re.vectors).reverse(),je=Object(v.ff)(be),ue=Object(v.ff)(ie.vectors).reverse(),me=Object(v.ff)(ue),Oe=[];if(ne<=ce)for(var fe=0;fe<ne;fe++)Oe.push(Array(ce).fill(0)),fe<ce&&(Oe[fe][fe]=oe[fe]);else for(var de=0;de<ne;de++)Oe.push(Array(ce).fill(0)),de<ce&&(Oe[de][de]=se[de]);for(var _e=Object(g.a)(Oe),he=0;he<ne;he++)0!==_e[he][he]&&(_e[he][he]=1/_e[he][he]);_e=Object(v.ff)(_e);for(var ge=Object(v.vd)(je,Object(v.vd)(_e,ue)),ye=Object(v.vd)(te,ge),xe=Object(v.vd)(ge,te),ve=String.raw(c||(c=Object(f.a)(["\n    displaystyle\n    \begin{array}{l}\n    \begin{array}{lcl}\n    \\ AA^{T} = ","\n    \\\n    \\ \text{The eigenvectors of } AA^{T}:\n    \\\n    \\ \bf{U} = left[\begin{matrix}"],["\n    \\displaystyle\n    \\begin{array}{l}\n    \\begin{array}{lcl}\n    \\\\ AA^{T} = ","\n    \\\\\n    \\\\ \\text{The eigenvectors of } AA^{T}:\n    \\\\\n    \\\\ \\bf{U} = \\left[\\begin{matrix}"])),Object(g.x)(ae)),ke=0;ke<ie.vectors.length;ke++)ve+=String.raw(a||(a=Object(f.a)([" v_{","}cr "],[" v_{","}\\cr "])),ke+1);ve+=String.raw(r||(r=Object(f.a)(["\n    end{matrix}\right]^{T} = ","\n    \\ \n    \\ hline\n    \\\n    \\ A^{T}A = ","\n    \\\n    \\\n    \\ \text{The eigenvectors of } A^{T}A:\n    \\\n    \\ \bf{V^{T}} = left[\begin{matrix}"],["\n    \\end{matrix}\\right]^{T} = ","\n    \\\\ \n    \\\\ \\hline\n    \\\\\n    \\\\ A^{T}A = ","\n    \\\\\n    \\\\\n    \\\\ \\text{The eigenvectors of } A^{T}A:\n    \\\\\n    \\\\ \\bf{V^{T}} = \\left[\\begin{matrix}"])),Object(g.x)(me),Object(g.x)(ae));for(var pe=0;pe<re.vectors.length;pe++)ve+=String.raw(o||(o=Object(f.a)([" v_{","}cr "],[" v_{","}\\cr "])),pe+1);ve+=String.raw(l||(l=Object(f.a)(["\n    end{matrix}\right] = ","\n    \\ \n    \\ \text{The eigenvalues of } A^{T}A \text{ or singular values,}  sigma\n    \\ = ","\n    \\\n    \\ \bf{D} = left[\begin{matrix}"],["\n    \\end{matrix}\\right] = ","\n    \\\\ \n    \\\\ \\text{The eigenvalues of } A^{T}A \\text{ or singular values,} \\ \\sigma\n    \\\\ = ","\n    \\\\\n    \\\\ \\bf{D} = \\left[\\begin{matrix}"])),Object(g.x)(be),oe.map((function(e){return Object(h.b)(e)})));for(var Ce=0;Ce<ne;Ce++){for(var we=0;we<ce;we++)ve+=we===Ce?String.raw(i||(i=Object(f.a)(["colorbox{aqua}{\bf{","}}"],["\\colorbox{aqua}{\\bf{","}}"])),Object(h.b)(Oe[Ce][we])):String.raw(s||(s=Object(f.a)(["",""])),Object(h.b)(Oe[Ce][we])),we!==ce-1&&(ve+=String.raw(b||(b=Object(f.a)(["&"]))));ve+=String.raw(j||(j=Object(f.a)(["cr"],["\\cr"])))}ve+=String.raw(u||(u=Object(f.a)(["\n    end{matrix}\right]\n    \\\n    \\ hline\n    \\ \begin{array}{lcl}\n    \\ A &=& ","\n    \\\n    \\ U^{T} &=& ","\n    \\\n    \\ D^{+} &=& \text{Reciprocal of the singular values}\n    \\\n    \\       &=& ","\n    \\\n    \\ V &=& ","\n    \\\n    \\ A^{-1} &=& V D^{+} U^{T}\n    \\\n    \\   &=& "," "," ","\n    \\\n    \\   &=& ","\n    \\ end{array}\n    \\\n    \\ \text{To verify the pseudoinverse,}\n    \\ \begin{array}{lcl}\n    \\ AA^{-1} &=& "," ","\n    \\\n    \\         &=& ","\n    \\\n    \\ A^{-1}A &=& "," ","\n    \\\n    \\         &=& ","\n    \\ end{array}\n    \\\n    \\ \n    "],["\n    \\end{matrix}\\right]\n    \\\\\n    \\\\ \\hline\n    \\\\ \\begin{array}{lcl}\n    \\\\ A &=& ","\n    \\\\\n    \\\\ U^{T} &=& ","\n    \\\\\n    \\\\ D^{+} &=& \\text{Reciprocal of the singular values}\n    \\\\\n    \\\\       &=& ","\n    \\\\\n    \\\\ V &=& ","\n    \\\\\n    \\\\ A^{-1} &=& V D^{+} U^{T}\n    \\\\\n    \\\\   &=& "," "," ","\n    \\\\\n    \\\\   &=& ","\n    \\\\ \\end{array}\n    \\\\\n    \\\\ \\text{To verify the pseudoinverse,}\n    \\\\ \\begin{array}{lcl}\n    \\\\ AA^{-1} &=& "," ","\n    \\\\\n    \\\\         &=& ","\n    \\\\\n    \\\\ A^{-1}A &=& "," ","\n    \\\\\n    \\\\         &=& ","\n    \\\\ \\end{array}\n    \\\\\n    \\\\ \n    "])),Object(g.x)(te),Object(g.x)(ue),Object(g.x)(_e),Object(g.x)(je),Object(g.x)(je),Object(g.x)(_e),Object(g.x)(ue),Object(g.x)(ge),Object(g.x)(te),Object(g.x)(ge),Object(g.x)(ye),Object(g.x)(ge),Object(g.x)(te),Object(g.x)(xe)),ne>ce&&(ve+=String.raw(m||(m=Object(f.a)(["\n        \\ \text{We find that } U D V^{T} \ne A.\n        \\ \text{This is because the my naive SVD algorithm does not work when rows are greater than columns.}\n        \\ \text{I'm too lazy to rectify this, sorry!}\n        "],["\n        \\\\ \\text{We find that } U D V^{T} \\ne A.\n        \\\\ \\text{This is because the my naive SVD algorithm does not work when rows are greater than columns.}\n        \\\\ \\text{I'm too lazy to rectify this, sorry!}\n        "])))),ve+=String.raw(O||(O=Object(f.a)(["end{array}end{array}"],["\\end{array}\\end{array}"])));var Ae=Object(y.useState)(!1),Se=Object(_.a)(Ae,2),Te=Se[0],Ne=Se[1];return Object(Q.jsxs)(Q.Fragment,{children:[Object(Q.jsx)(x.a,{methodName:t}),Object(Q.jsx)(C.a,{className:n.paper,children:Object(Q.jsx)(w.a,{className:n.container,children:Object(Q.jsxs)(J.c,{duration:500,triggerOnce:!0,cascade:!0,children:[Object(Q.jsx)(p.a,{variant:"body1",children:"Incomplete! Experimental!"}),Object(Q.jsx)(N.a,{container:!0,spacing:1,direction:"row",alignItems:"center",justify:"center",children:Object(Q.jsx)(N.a,{xs:!0,item:!0,children:Object(Q.jsx)(S.a,{className:n.card,children:Object(Q.jsx)(T.a,{className:n.cardContent,children:Object(Q.jsxs)(N.a,{container:!0,spacing:1,direction:"column",alignItems:"center",justify:"center",children:[Object(Q.jsxs)(N.a,{xs:!0,item:!0,className:"matrix-col-input",container:!0,spacing:1,direction:"row",alignItems:"center",justify:"center",children:[Object(Q.jsx)(p.a,{variant:"subtitle1",children:"Columns:"}),Object(Q.jsx)(I.a,{variant:"contained",color:"primary",onClick:$(!1),children:Object(Q.jsx)(V.a,{color:"error"})}),Object(Q.jsx)(I.a,{variant:"contained",color:"primary",onClick:$(!0),children:Object(Q.jsx)(R.a,{})})]}),Object(Q.jsxs)(N.a,{xs:!0,item:!0,className:"matrix-row-input",container:!0,spacing:1,direction:"row",alignItems:"center",justify:"center",children:[Object(Q.jsx)(p.a,{variant:"subtitle1",children:"Rows:\xa0\xa0\xa0\xa0\xa0"}),Object(Q.jsx)(I.a,{variant:"contained",color:"primary",onClick:ee(!1),children:Object(Q.jsx)(V.a,{color:"error"})}),Object(Q.jsx)(I.a,{variant:"contained",color:"primary",onClick:ee(!0),children:Object(Q.jsx)(R.a,{})})]}),Object(Q.jsxs)(N.a,{xs:!0,item:!0,className:"matrix-input",container:!0,spacing:1,direction:"column",alignItems:"center",justify:"center",children:[Object(Q.jsx)(N.a,{xs:!0,item:!0,children:Object(Q.jsx)(p.a,{variant:"h6",children:"Matrix, A:"})}),Object(Q.jsx)(N.a,{xs:!0,item:!0,container:!0,spacing:0,direction:"row",alignItems:"center",justify:"center",children:Object(Q.jsx)(N.a,{item:!0,className:n.overflow,children:Object(Q.jsx)(L.a,{columns:Y.columns,rowGetter:function(e){return Y.rows[e]},rowsCount:Y.rows.length,onGridRowsUpdated:Object(g.d)(Y,Z),enableCellSelect:!0,headerRowHeight:1,minColumnWidth:U,minWidth:U*Y.columns.length+B,rowHeight:35,minHeight:35*Y.rows.length+F})},0)})]})]})})})})})]})})}),Object(Q.jsx)(A.a,{}),Object(Q.jsx)(w.a,{className:n.container,children:Object(Q.jsx)(N.a,{container:!0,direction:"column",alignItems:"center",justify:"flex-start",children:Object(Q.jsx)(N.a,{xs:!0,item:!0,className:"step-math",children:Object(Q.jsx)(J.c,{triggerOnce:!0,children:Object(Q.jsx)(S.a,{className:n.card,children:Object(Q.jsx)(T.a,{className:n.cardContent,children:Object(Q.jsx)(k.a,{math:ve,block:!0})})})})})})}),Object(Q.jsx)(D.a,{arrow:!0,title:"Help",placement:"top",children:Object(Q.jsx)(q.a,{color:"secondary","aria-label":"help",className:n.fab,onClick:function(){Ne(!0)},children:Object(Q.jsx)(E.a,{})})}),Object(Q.jsx)(H.a,{scrollToFirstStep:!0,run:Te,steps:K,continuous:!0,showSkipButton:!0,locale:{last:"End tour"},callback:function(e){"reset"!==e.action&&"close"!==e.action||Ne(!1)}})]})}},66:function(e,t,n){"use strict";n.d(t,"d",(function(){return S})),n.d(t,"b",(function(){return M})),n.d(t,"c",(function(){return R})),n.d(t,"g",(function(){return U})),n.d(t,"a",(function(){return V})),n.d(t,"w",(function(){return D})),n.d(t,"z",(function(){return q})),n.d(t,"f",(function(){return B})),n.d(t,"y",(function(){return E})),n.d(t,"e",(function(){return H})),n.d(t,"x",(function(){return J})),n.d(t,"l",(function(){return W})),n.d(t,"u",(function(){return z})),n.d(t,"r",(function(){return F})),n.d(t,"k",(function(){return G})),n.d(t,"v",(function(){return L})),n.d(t,"s",(function(){return Q})),n.d(t,"t",(function(){return K})),n.d(t,"m",(function(){return P})),n.d(t,"h",(function(){return X})),n.d(t,"n",(function(){return Y})),n.d(t,"i",(function(){return Z})),n.d(t,"o",(function(){return $})),n.d(t,"j",(function(){return ee})),n.d(t,"p",(function(){return te})),n.d(t,"q",(function(){return ne}));var c,a,r,o,l,i,s,b,j,u,m,O,f,d=n(57),_=n(63),h=n(102),g=n(70),y=n(71),x=n(76),v=n(75),k=n(60),p=n(49),C=n(0),w=n.n(C),A=n(6);function S(e,t){return function(n){for(var c=n.fromRow,a=n.toRow,r=n.updated,o=e.rows.slice(),l=c;l<=a;l++)o[l]=Object(k.a)(Object(k.a)({},o[l]),r);t(Object(k.a)(Object(k.a)({},e),{},{rows:o}))}}var T=function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(e){var c;return Object(g.a)(this,n),(c=t.call(this,e)).ref=w.a.createRef(),c.onInputChange=function(){var e=c.ref.current.value;try{e=parseFloat(e),isNaN(e)&&(e=0)}catch(t){e=0}c.setState({value:e})},c.state={value:e.value},c}return Object(y.a)(n,[{key:"getValue",value:function(){return Object(h.a)({},this.props.column.key,this.state.value)}},{key:"getInputNode",value:function(){return this.ref.current?this.ref.current:null}},{key:"render",value:function(){return Object(A.jsx)("input",{ref:this.ref,defaultValue:this.state.value,onBlur:this.onInputChange,onChange:this.onInputChange})}}]),n}(w.a.Component),N={display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},I={editable:!0,editor:T,formatter:function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(y.a)(n,[{key:"render",value:function(){return Object(A.jsx)("div",{style:N,children:this.props.value})}}]),n}(w.a.Component)},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e+1;return t?Object(k.a)({key:"col_".concat(n),name:t},I):Object(k.a)({key:"col_".concat(n),name:"C".concat(n)},I)},R=function(e){for(var t={},n=1;n<=e;n++)t["col_".concat(n)]=0;return t},U=function(e){var t=Object.keys(e[0]).sort();return e.map((function(e){return t.map((function(t){return e[t]}))}))},V=function(e){return JSON.parse(JSON.stringify(e))},D=function(e){for(var t=0;t<e.length;t++){for(var n=e[t][t],c=0,a=0;a<e.length;a++)a!==t&&(c+=e[t][a]);if(Math.abs(n)<=Math.abs(c))return!1}return!0},q=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3],B=function(e,t){return q[e]/q[t]/q[e-t]},E=function(e){for(var t=e.length-1;t>0&&e[t-1]>=e[t];)t--;if(t<=0)return!1;for(var n=e.length-1;e[n]<=e[t-1];)n--;var c=e[t-1];for(e[t-1]=e[n],e[n]=c,n=e.length-1;t<n;)c=e[t],e[t]=e[n],e[n]=c,t++,n--;return!0},H=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(_.a)(Array(e.length).keys()),n={},c=[],a=0;a<t.length;a++)c.includes(e[a])||t[a]===e[a]||(n[a]=e[a],c.push(t[a],e[a]));return n},J=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},_=n.single,h=void 0!==_&&_,g=n.leftBracketOnly,y=void 0!==g&&g,x=n.rightBracketOnly,v=void 0!==x&&x,k=n.boldRows,C=void 0===k?[]:k,w=n.boldColumns,A=void 0===w?[]:w;n.transpose;t=v?String.raw(c||(c=Object(d.a)(["left|\begin{matrix}"],["\\left|\\begin{matrix}"]))):String.raw(a||(a=Object(d.a)(["left[\begin{matrix}"],["\\left[\\begin{matrix}"])));var S=e.length,T=e[0].length;if(h)for(var N=0;N<S;N++){for(var I=!1,M=0;M<C.length;M++)if(C[M]===N+1){I=!0;break}var R=String.raw(r||(r=Object(d.a)([" "," "])),Object(p.b)(e[N]));t+=I?String.raw(o||(o=Object(d.a)([" colorbox{aqua}{\bf{","}} "],[" \\colorbox{aqua}{\\bf{","}} "])),R):String.raw(l||(l=Object(d.a)(["",""])),R),t+=String.raw(i||(i=Object(d.a)(["cr"],["\\cr"])))}else for(var U=0;U<S;U++){for(var V=!1,D=0;D<C.length;D++)if(C[D]===U+1){V=!0;break}for(var q=0;q<T;q++){for(var B=!1,E=0;E<A.length;E++)if(A[E]===q+1){B=!0;break}var H=String.raw(s||(s=Object(d.a)([" "," "])),Object(p.b)(e[U][q]));t+=V||B?String.raw(b||(b=Object(d.a)([" colorbox{aqua}{\bf{","}} "],[" \\colorbox{aqua}{\\bf{","}} "])),H):String.raw(j||(j=Object(d.a)(["",""])),H),q!==T-1&&(t+=String.raw(u||(u=Object(d.a)(["&"]))))}t+=String.raw(m||(m=Object(d.a)(["cr"],["\\cr"])))}return t+=y?String.raw(O||(O=Object(d.a)(["end{matrix}\right|"],["\\end{matrix}\\right|"]))):String.raw(f||(f=Object(d.a)(["end{matrix}\right]"],["\\end{matrix}\\right]"])))},W={columns:[Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I),Object(k.a)({key:"col_3",name:"C3"},I),Object(k.a)({key:"col_4",name:"C4"},I)],rows:[{col_1:0,col_2:1,col_3:-3,col_4:4},{col_1:2,col_2:-2,col_3:1,col_4:0},{col_1:2,col_2:-1,col_3:-2,col_4:4},{col_1:-6,col_2:4,col_3:3,col_4:-8}]},z=(Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I),Object(k.a)({key:"col_3",name:"C3"},I),Object(k.a)({key:"col_4",name:"C4"},I),{columns:[Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I),Object(k.a)({key:"col_3",name:"C3"},I),Object(k.a)({key:"col_4",name:"C4"},I)],rows:[{col_1:1,col_2:-1,col_3:0,col_4:1}]}),F=(Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I),Object(k.a)({key:"col_3",name:"C3"},I),Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I),Object(k.a)({key:"col_3",name:"C3"},I),Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I),Object(k.a)({key:"col_3",name:"C3"},I),{columns:[Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I),Object(k.a)({key:"col_3",name:"C3"},I),Object(k.a)({key:"col_4",name:"C4"},I)],rows:[{col_1:-1,col_2:11,col_3:-1,col_4:3},{col_1:10,col_2:-1,col_3:2,col_4:0},{col_1:0,col_2:3,col_3:-1,col_4:8},{col_1:2,col_2:-1,col_3:10,col_4:-1}]}),G={columns:[Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I),Object(k.a)({key:"col_3",name:"C3"},I),Object(k.a)({key:"col_4",name:"C4"},I)],rows:[{col_1:0,col_2:0,col_3:0,col_4:0}]},L={columns:[Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I),Object(k.a)({key:"col_3",name:"C3"},I),Object(k.a)({key:"col_4",name:"C4"},I)],rows:[{col_1:25,col_2:6,col_3:15,col_4:-11}]},Q={columns:[Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I),Object(k.a)({key:"col_3",name:"C3"},I)],rows:[{col_1:3,col_2:-.1,col_3:-.2},{col_1:.1,col_2:7,col_3:-.3},{col_1:.3,col_2:-.2,col_3:10}]},K=(Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I),{columns:[Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I),Object(k.a)({key:"col_3",name:"C3"},I)],rows:[{col_1:3,col_2:2,col_3:2},{col_1:2,col_2:3,col_3:-2}]}),P=(Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I),Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I),Object(k.a)({key:"col_3",name:"C3"},I),Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I),Object(k.a)({key:"col_3",name:"C3"},I),Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I),Object(k.a)({key:"col_3",name:"C3"},I),Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I),Object(k.a)({key:"col_3",name:"C3"},I),{columns:[Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I)],rows:[{col_1:4,col_2:-2},{col_1:3,col_2:-1}]}),X={columns:[Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I)],rows:[{col_1:1,col_2:0}]},Y={columns:[Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I)],rows:[{col_1:2,col_2:3},{col_1:4,col_2:1}]},Z={columns:[Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I)],rows:[{col_1:-.7,col_2:1}]},$={columns:[Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I)],rows:[{col_1:7,col_2:-2},{col_1:3,col_2:-1}]},ee={columns:[Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I)],rows:[{col_1:1,col_2:0}]},te={columns:[Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I),Object(k.a)({key:"col_3",name:"C3"},I),Object(k.a)({key:"col_4",name:"C4"},I)],rows:[{col_1:5,col_2:0,col_3:0,col_4:-1},{col_1:1,col_2:0,col_3:-1,col_4:1},{col_1:-1.5,col_2:1,col_3:-2,col_4:1},{col_1:-1,col_2:1,col_3:3,col_4:-3}]},ne=(Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I),{columns:[Object(k.a)({key:"col_1",name:"x"},I),Object(k.a)({key:"col_2",name:"y"},I)],rows:[{col_1:0,col_2:0}]})}}]);
//# sourceMappingURL=29.1b1dd386.chunk.js.map