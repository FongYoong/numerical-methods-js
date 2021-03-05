(this["webpackJsonpnumerical-methods-js"]=this["webpackJsonpnumerical-methods-js"]||[]).push([[36],{165:function(e,t,n){"use strict";var c=n(2),a=n(34),r=n(0),o=(n(8),n(35)),l=n(416),i=n(36),s=r.forwardRef((function(e,t){var n=e.classes,i=e.className,s=e.raised,b=void 0!==s&&s,u=Object(a.a)(e,["classes","className","raised"]);return r.createElement(l.a,Object(c.a)({className:Object(o.a)(n.root,i),elevation:b?8:1,ref:t},u))}));t.a=Object(i.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)},166:function(e,t,n){"use strict";var c=n(2),a=n(34),r=n(0),o=(n(8),n(35)),l=n(36),i=r.forwardRef((function(e,t){var n=e.classes,l=e.className,i=e.component,s=void 0===i?"div":i,b=Object(a.a)(e,["classes","className","component"]);return r.createElement(s,Object(c.a)({className:Object(o.a)(n.root,l),ref:t},b))}));t.a=Object(l.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(i)},438:function(e,t,n){"use strict";n.r(t);var c,a,r,o,l,i,s,b,u,j,m=n(47),O=n(44),f=n(43),_=n(46),d=n(58),y=n(0),g=n(63),h=n(371),x=n(470),v=n(203),k=(n(51),n(50)),C=n(411),p=n(416),w=n(427),A=n(430),S=n(165),N=n(166),T=n(425),I=n(412),D=n(113),R=n.n(D),V=n(112),q=n.n(V),E=n(474),M=n(431),U=n(66),B=n.n(U),z=n(67),H=n(13),J=n(121),F=n(94),G=n(408),W=n(84),P=n.n(W),K=n(6),L=[{target:".matrix-col-input",title:"Column",content:"Add/Remove columns",disableBeacon:!0},{target:".matrix-row-input",title:"Row",content:"Add/Remove rows"},{target:".matrix-input",title:"Matrix",content:"Specify the matrix here."}],Q=Object(G.a)((function(e){return{paper:{padding:e.spacing(.5),textAlign:"center",color:e.palette.text.primary,margin:e.spacing(1)},container:{"& > *":{margin:e.spacing(1)}},card:{margin:e.spacing(0)},cardContent:{overflow:"auto","& > *":{margin:e.spacing(.5)}},overflow:{overflow:"auto"},matrixCard:{width:"60vw"},divider:{width:"500 px",height:"100px",marginTop:"20px",marginBottom:"20px"},fab:{position:"fixed",bottom:e.spacing(4),right:e.spacing(2)}}}));t.default=function(e){var t=e.methodName,n=e.markdown;Object(y.useEffect)((function(){document.title=t}));var D=Q(),V=Object(F.a)(Object(J.a)().breakpoints.down("sm")),U=V?45:60,G=V?10:100,W=V?5:20,X=Object(y.useState)(d.y),Y=Object(f.a)(X,2),Z=Y[0],$=Y[1],ee=function(e){return function(){var t=Z.columns.slice(),n=Z.rows.slice();if(e){t.push(Object(d.b)(t.length));for(var c=0;c<n.length;c++)n[c]["col_".concat(t.length)]=0}else{if(2===t.length)return;for(var a=0;a<n.length;a++)delete n[a]["col_".concat(t.length)];t.pop()}$({columns:t,rows:n})}},te=function(e){return function(){var t=Z.rows.slice();if(e)t.push(Object(d.c)(Z.columns.length));else{if(2===t.length)return;t.pop()}$(Object(O.a)(Object(O.a)({},Z),{},{rows:t}))}},ne=Object(d.g)(Z.rows),ce=Z.rows.length,ae=Z.columns.length,re=Object(h.vd)(ne,Object(h.ff)(ne)),oe=new x.a(new v.b(re)),le=Array.from(oe.eigenvectorMatrix.data.map((function(e){return Array.from(e)}))),ie=oe.realEigenvalues.slice().reverse().map((function(e){return Math.sqrt(e)})),se=Object(h.vd)(Object(h.ff)(ne),ne),be=new x.a(new v.b(se)),ue=Array.from(be.eigenvectorMatrix.data.map((function(e){return Array.from(e)}))),je=be.realEigenvalues.slice().reverse(),me=be.realEigenvalues.slice().reverse().map((function(e){return Math.sqrt(e)})),Oe=Object(h.ff)(ue).reverse(),fe=Object(h.ff)(le).reverse(),_e=Object(h.ff)(fe),de=[];if(ce<=ae)for(var ye=0;ye<ce;ye++)de.push(Array(ae).fill(0)),ye<ae&&(de[ye][ye]=ie[ye]);else for(var ge=0;ge<ce;ge++)de.push(Array(ae).fill(0)),ge<ae&&(de[ge][ge]=me[ge]);for(var he=Object(h.vd)(_e,Object(h.vd)(de,Oe)),xe=String.raw(c||(c=Object(m.a)(["\n    displaystyle\n    \begin{array}{l}\n    \begin{array}{lcl}\n    \\ AA^{T} = ","\n    \\\n    \\ \text{The eigenvectors of } AA^{T}:\n    \\\n    \\ \bf{U} = left[\begin{matrix}"],["\n    \\displaystyle\n    \\begin{array}{l}\n    \\begin{array}{lcl}\n    \\\\ AA^{T} = ","\n    \\\\\n    \\\\ \\text{The eigenvectors of } AA^{T}:\n    \\\\\n    \\\\ \\bf{U} = \\left[\\begin{matrix}"])),Object(d.C)(re)),ve=0;ve<le.length;ve++)xe+=String.raw(a||(a=Object(m.a)([" v_{","} "," "])),ve+1,ve===le.length-1?"":"&");xe+=String.raw(r||(r=Object(m.a)(["\n    end{matrix}\right] = ","\n    \\ \n    \\ hline\n    \\\n    \\ A^{T}A = ","\n    \\\n    \\\n    \\ \text{The eigenvectors of } A^{T}A:\n    \\\n    \\ \bf{V^{T}} = left[\begin{matrix}"],["\n    \\end{matrix}\\right] = ","\n    \\\\ \n    \\\\ \\hline\n    \\\\\n    \\\\ A^{T}A = ","\n    \\\\\n    \\\\\n    \\\\ \\text{The eigenvectors of } A^{T}A:\n    \\\\\n    \\\\ \\bf{V^{T}} = \\left[\\begin{matrix}"])),Object(d.C)(_e),Object(d.C)(se));for(var ke=0;ke<ue.length;ke++)xe+=String.raw(o||(o=Object(m.a)([" v_{","}cr "],[" v_{","}\\cr "])),ke+1);xe+=String.raw(l||(l=Object(m.a)(["\n    end{matrix}\right] = ","\n    \\\n    \begin{array}{lcl}\n    \\ \text{The eigenvalues of } A^{T}A &=& ","\n    \\\n    \\ \text{The singular values,}  sigma &=& sqrt{\text{Eigenvalues}}\n    \\          &=& ","\n    end{array}\n    \\\n    \\ \bf{D} = left[\begin{matrix}"],["\n    \\end{matrix}\\right] = ","\n    \\\\\n    \\begin{array}{lcl}\n    \\\\ \\text{The eigenvalues of } A^{T}A &=& ","\n    \\\\\n    \\\\ \\text{The singular values,} \\ \\sigma &=& \\sqrt{\\text{Eigenvalues}}\n    \\\\          &=& ","\n    \\end{array}\n    \\\\\n    \\\\ \\bf{D} = \\left[\\begin{matrix}"])),Object(d.C)(Oe),je.filter((function(e){return!isNaN(e)})).map((function(e){return Object(_.b)(e)})),me.filter((function(e){return!isNaN(e)})).map((function(e){return Object(_.b)(e)})));for(var Ce=0;Ce<ce;Ce++){for(var pe=0;pe<ae;pe++)xe+=pe===Ce?String.raw(i||(i=Object(m.a)(["colorbox{aqua}{\bf{","}}"],["\\colorbox{aqua}{\\bf{","}}"])),Object(_.b)(de[Ce][pe])):String.raw(s||(s=Object(m.a)(["",""])),Object(_.b)(de[Ce][pe])),pe!==ae-1&&(xe+=String.raw(b||(b=Object(m.a)(["&"]))));xe+=String.raw(u||(u=Object(m.a)(["cr"],["\\cr"])))}xe+=String.raw(j||(j=Object(m.a)(["\n    end{matrix}\right]\n    \\\n    \\ hline\n    \\ \begin{array}{lcl}\n    \\ A &=& ","\n    \\\n    \\ U &=& ","\n    \\\n    \\ D &=& ","\n    \\\n    \\ V^{T} &=& ","\n    \\\n    \\ A &=& U D V^{T}\n    \\\n    \\   &=& "," "," ","\n    \\\n    \\   &=& ","\n    \\ end{array}\n    \\\n    \\ hline\n    \\ \text{In some cases, } U D V^{T} \ne A\n    \\ \text{The error could be very small due to rounding error. }\n    \\ \text{Otherwise, if the error is really huge or if the signs are reversed, this is because the my naive SVD algorithm sometimes}\n    \\ \text{fails to properly realign the eigenvector matrices.}\n    \\ \text{I'm too lazy to rectify this, sorry!}\n    end{array}end{array}\n    "],["\n    \\end{matrix}\\right]\n    \\\\\n    \\\\ \\hline\n    \\\\ \\begin{array}{lcl}\n    \\\\ A &=& ","\n    \\\\\n    \\\\ U &=& ","\n    \\\\\n    \\\\ D &=& ","\n    \\\\\n    \\\\ V^{T} &=& ","\n    \\\\\n    \\\\ A &=& U D V^{T}\n    \\\\\n    \\\\   &=& "," "," ","\n    \\\\\n    \\\\   &=& ","\n    \\\\ \\end{array}\n    \\\\\n    \\\\ \\hline\n    \\\\ \\text{In some cases, } U D V^{T} \\ne A\n    \\\\ \\text{The error could be very small due to rounding error. }\n    \\\\ \\text{Otherwise, if the error is really huge or if the signs are reversed, this is because the my naive SVD algorithm sometimes}\n    \\\\ \\text{fails to properly realign the eigenvector matrices.}\n    \\\\ \\text{I'm too lazy to rectify this, sorry!}\n    \\end{array}\\end{array}\n    "])),Object(d.C)(ne),Object(d.C)(_e),Object(d.C)(de),Object(d.C)(Oe),Object(d.C)(_e),Object(d.C)(de),Object(d.C)(Oe),Object(d.C)(he));var we=Object(y.useState)(!1),Ae=Object(f.a)(we,2),Se=Ae[0],Ne=Ae[1];return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(g.a,{methodName:t,markdown:n}),Object(K.jsx)(p.a,{className:D.paper,children:Object(K.jsx)(w.a,{className:D.container,children:Object(K.jsxs)(H.c,{duration:500,triggerOnce:!0,cascade:!0,children:[Object(K.jsxs)(C.a,{variant:"body1",children:["Note: Errors may occur depending on the matrix used",Object(K.jsx)("br",{}),"because I've not perfected the algorithm yet."]}),Object(K.jsx)(T.a,{container:!0,spacing:1,direction:"row",alignItems:"center",justify:"center",children:Object(K.jsx)(T.a,{xs:!0,item:!0,children:Object(K.jsx)(S.a,{className:D.card,children:Object(K.jsx)(N.a,{className:D.cardContent,children:Object(K.jsxs)(T.a,{container:!0,spacing:1,direction:"column",alignItems:"center",justify:"center",children:[Object(K.jsxs)(T.a,{xs:!0,item:!0,className:"matrix-col-input",container:!0,spacing:1,direction:"row",alignItems:"center",justify:"center",children:[Object(K.jsx)(C.a,{variant:"subtitle1",children:"Columns:"}),Object(K.jsx)(I.a,{variant:"contained",color:"primary",onClick:ee(!1),children:Object(K.jsx)(q.a,{color:"error"})}),Object(K.jsx)(I.a,{variant:"contained",color:"primary",onClick:ee(!0),children:Object(K.jsx)(R.a,{})})]}),Object(K.jsxs)(T.a,{xs:!0,item:!0,className:"matrix-row-input",container:!0,spacing:1,direction:"row",alignItems:"center",justify:"center",children:[Object(K.jsx)(C.a,{variant:"subtitle1",children:"Rows:\xa0\xa0\xa0\xa0\xa0"}),Object(K.jsx)(I.a,{variant:"contained",color:"primary",onClick:te(!1),children:Object(K.jsx)(q.a,{color:"error"})}),Object(K.jsx)(I.a,{variant:"contained",color:"primary",onClick:te(!0),children:Object(K.jsx)(R.a,{})})]}),Object(K.jsxs)(T.a,{xs:!0,item:!0,className:"matrix-input",container:!0,spacing:1,direction:"column",alignItems:"center",justify:"center",children:[Object(K.jsx)(T.a,{xs:!0,item:!0,children:Object(K.jsx)(C.a,{variant:"h6",children:"Matrix, A:"})}),Object(K.jsx)(T.a,{xs:!0,item:!0,container:!0,spacing:0,direction:"row",alignItems:"center",justify:"center",children:Object(K.jsx)(T.a,{item:!0,className:D.overflow,children:Object(K.jsx)(P.a,{columns:Z.columns,rowGetter:function(e){return Z.rows[e]},rowsCount:Z.rows.length,onGridRowsUpdated:Object(d.d)(Z,$),enableCellSelect:!0,headerRowHeight:1,minColumnWidth:U,minWidth:U*Z.columns.length+G,rowHeight:35,minHeight:35*Z.rows.length+W})},0)})]})]})})})})})]})})}),Object(K.jsx)(A.a,{}),Object(K.jsx)(w.a,{className:D.container,children:Object(K.jsx)(T.a,{container:!0,direction:"column",alignItems:"center",justify:"flex-start",children:Object(K.jsx)(T.a,{xs:!0,item:!0,className:"step-math",children:Object(K.jsx)(H.c,{direction:"right",triggerOnce:!0,children:Object(K.jsx)(S.a,{className:D.card,children:Object(K.jsx)(N.a,{className:D.cardContent,children:Object(K.jsx)(k.a,{math:xe,block:!0})})})})})})}),Object(K.jsx)(E.a,{arrow:!0,title:"Help",placement:"top",children:Object(K.jsx)(M.a,{color:"secondary","aria-label":"help",className:D.fab,onClick:function(){Ne(!0)},children:Object(K.jsx)(B.a,{})})}),Object(K.jsx)(z.a,{scrollToFirstStep:!0,run:Se,steps:L,continuous:!0,showSkipButton:!0,locale:{last:"End tour"},callback:function(e){"reset"!==e.action&&"close"!==e.action||Ne(!1)}})]})}},47:function(e,t,n){"use strict";function c(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"a",(function(){return c}))},58:function(e,t,n){"use strict";n.d(t,"d",(function(){return S})),n.d(t,"b",(function(){return D})),n.d(t,"c",(function(){return R})),n.d(t,"g",(function(){return V})),n.d(t,"a",(function(){return q})),n.d(t,"B",(function(){return E})),n.d(t,"E",(function(){return M})),n.d(t,"f",(function(){return U})),n.d(t,"D",(function(){return B})),n.d(t,"e",(function(){return z})),n.d(t,"C",(function(){return H})),n.d(t,"l",(function(){return J})),n.d(t,"z",(function(){return F})),n.d(t,"w",(function(){return G})),n.d(t,"k",(function(){return W})),n.d(t,"A",(function(){return P})),n.d(t,"x",(function(){return K})),n.d(t,"y",(function(){return L})),n.d(t,"m",(function(){return Q})),n.d(t,"h",(function(){return X})),n.d(t,"n",(function(){return Y})),n.d(t,"i",(function(){return Z})),n.d(t,"o",(function(){return $})),n.d(t,"j",(function(){return ee})),n.d(t,"p",(function(){return te})),n.d(t,"q",(function(){return ne})),n.d(t,"r",(function(){return ce})),n.d(t,"s",(function(){return ae})),n.d(t,"t",(function(){return re})),n.d(t,"u",(function(){return oe})),n.d(t,"v",(function(){return le}));var c,a,r,o,l,i,s,b,u,j,m,O,f,_=n(47),d=n(62),y=n(89),g=n(71),h=n(72),x=n(77),v=n(76),k=n(44),C=n(46),p=n(0),w=n.n(p),A=n(6);function S(e,t){return function(n){for(var c=n.fromRow,a=n.toRow,r=n.updated,o=e.rows.slice(),l=c;l<=a;l++)o[l]=Object(k.a)(Object(k.a)({},o[l]),r);t(Object(k.a)(Object(k.a)({},e),{},{rows:o}))}}var N=function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(e){var c;return Object(g.a)(this,n),(c=t.call(this,e)).ref=w.a.createRef(),c.onInputChange=function(){var e=c.ref.current.value;try{e=parseFloat(e),isNaN(e)&&(e=0)}catch(t){e=0}c.setState({value:e})},c.state={value:e.value},c}return Object(h.a)(n,[{key:"getValue",value:function(){return Object(y.a)({},this.props.column.key,this.state.value)}},{key:"getInputNode",value:function(){return this.ref.current?this.ref.current:null}},{key:"render",value:function(){return Object(A.jsx)("input",{ref:this.ref,defaultValue:this.state.value,onBlur:this.onInputChange,onChange:this.onInputChange})}}]),n}(w.a.Component),T={display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},I={editable:!0,editor:N,formatter:function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(A.jsx)("div",{style:T,children:this.props.value})}}]),n}(w.a.Component)},D=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e+1;return t?Object(k.a)({key:"col_".concat(n),name:t},I):Object(k.a)({key:"col_".concat(n),name:"C".concat(n)},I)},R=function(e){for(var t={},n=1;n<=e;n++)t["col_".concat(n)]=0;return t},V=function(e){var t=Object.keys(e[0]).sort();return e.map((function(e){return t.map((function(t){return e[t]}))}))},q=function(e){return JSON.parse(JSON.stringify(e))},E=function(e){for(var t=0;t<e.length;t++){for(var n=e[t][t],c=0,a=0;a<e.length;a++)a!==t&&(c+=e[t][a]);if(Math.abs(n)<=Math.abs(c))return!1}return!0},M=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3],U=function(e,t){return M[e]/M[t]/M[e-t]},B=function(e){for(var t=e.length-1;t>0&&e[t-1]>=e[t];)t--;if(t<=0)return!1;for(var n=e.length-1;e[n]<=e[t-1];)n--;var c=e[t-1];for(e[t-1]=e[n],e[n]=c,n=e.length-1;t<n;)c=e[t],e[t]=e[n],e[n]=c,t++,n--;return!0},z=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(d.a)(Array(e.length).keys()),n={},c=[],a=0;a<t.length;a++)c.includes(e[a])||t[a]===e[a]||(n[a]=e[a],c.push(t[a],e[a]));return n},H=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},d=n.single,y=void 0!==d&&d,g=n.leftBracketOnly,h=void 0!==g&&g,x=n.rightBracketOnly,v=void 0!==x&&x,k=n.boldRows,p=void 0===k?[]:k,w=n.boldColumns,A=void 0===w?[]:w;n.transpose;t=v?String.raw(c||(c=Object(_.a)(["left|\begin{matrix}"],["\\left|\\begin{matrix}"]))):String.raw(a||(a=Object(_.a)(["left[\begin{matrix}"],["\\left[\\begin{matrix}"])));var S=e.length,N=e[0].length;if(y)for(var T=0;T<S;T++){for(var I=!1,D=0;D<p.length;D++)if(p[D]===T+1){I=!0;break}var R=String.raw(r||(r=Object(_.a)([" "," "])),Object(C.b)(e[T]));t+=I?String.raw(o||(o=Object(_.a)([" colorbox{aqua}{\bf{","}} "],[" \\colorbox{aqua}{\\bf{","}} "])),R):String.raw(l||(l=Object(_.a)(["",""])),R),t+=String.raw(i||(i=Object(_.a)(["cr"],["\\cr"])))}else for(var V=0;V<S;V++){for(var q=!1,E=0;E<p.length;E++)if(p[E]===V+1){q=!0;break}for(var M=0;M<N;M++){for(var U=!1,B=0;B<A.length;B++)if(A[B]===M+1){U=!0;break}var z=String.raw(s||(s=Object(_.a)([" "," "])),Object(C.b)(e[V][M]));t+=q||U?String.raw(b||(b=Object(_.a)([" colorbox{aqua}{\bf{","}} "],[" \\colorbox{aqua}{\\bf{","}} "])),z):String.raw(u||(u=Object(_.a)(["",""])),z),M!==N-1&&(t+=String.raw(j||(j=Object(_.a)(["&"]))))}t+=String.raw(m||(m=Object(_.a)(["cr"],["\\cr"])))}return t+=h?String.raw(O||(O=Object(_.a)(["end{matrix}\right|"],["\\end{matrix}\\right|"]))):String.raw(f||(f=Object(_.a)(["end{matrix}\right]"],["\\end{matrix}\\right]"])))},J={columns:[Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I),Object(k.a)({key:"col_3",name:"C3"},I),Object(k.a)({key:"col_4",name:"C4"},I)],rows:[{col_1:0,col_2:1,col_3:-3,col_4:4},{col_1:2,col_2:-2,col_3:1,col_4:0},{col_1:2,col_2:-1,col_3:-2,col_4:4},{col_1:-6,col_2:4,col_3:3,col_4:-8}]},F=(Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I),Object(k.a)({key:"col_3",name:"C3"},I),Object(k.a)({key:"col_4",name:"C4"},I),{columns:[Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I),Object(k.a)({key:"col_3",name:"C3"},I),Object(k.a)({key:"col_4",name:"C4"},I)],rows:[{col_1:1,col_2:-1,col_3:0,col_4:1}]}),G=(Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I),Object(k.a)({key:"col_3",name:"C3"},I),Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I),Object(k.a)({key:"col_3",name:"C3"},I),Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I),Object(k.a)({key:"col_3",name:"C3"},I),{columns:[Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I),Object(k.a)({key:"col_3",name:"C3"},I),Object(k.a)({key:"col_4",name:"C4"},I)],rows:[{col_1:-1,col_2:11,col_3:-1,col_4:3},{col_1:10,col_2:-1,col_3:2,col_4:0},{col_1:0,col_2:3,col_3:-1,col_4:8},{col_1:2,col_2:-1,col_3:10,col_4:-1}]}),W={columns:[Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I),Object(k.a)({key:"col_3",name:"C3"},I),Object(k.a)({key:"col_4",name:"C4"},I)],rows:[{col_1:0,col_2:0,col_3:0,col_4:0}]},P={columns:[Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I),Object(k.a)({key:"col_3",name:"C3"},I),Object(k.a)({key:"col_4",name:"C4"},I)],rows:[{col_1:25,col_2:6,col_3:15,col_4:-11}]},K={columns:[Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I),Object(k.a)({key:"col_3",name:"C3"},I)],rows:[{col_1:3,col_2:-.1,col_3:-.2},{col_1:.1,col_2:7,col_3:-.3},{col_1:.3,col_2:-.2,col_3:10}]},L=(Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I),{columns:[Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I),Object(k.a)({key:"col_3",name:"C3"},I)],rows:[{col_1:3,col_2:5,col_3:2},{col_1:2,col_2:3,col_3:-2}]}),Q=(Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I),Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I),Object(k.a)({key:"col_3",name:"C3"},I),Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I),Object(k.a)({key:"col_3",name:"C3"},I),Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I),Object(k.a)({key:"col_3",name:"C3"},I),Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I),Object(k.a)({key:"col_3",name:"C3"},I),{columns:[Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I)],rows:[{col_1:4,col_2:-2},{col_1:3,col_2:-1}]}),X={columns:[Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I)],rows:[{col_1:1,col_2:0}]},Y={columns:[Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I)],rows:[{col_1:2,col_2:3},{col_1:4,col_2:1}]},Z={columns:[Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I)],rows:[{col_1:-.7,col_2:1}]},$={columns:[Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I)],rows:[{col_1:7,col_2:-2},{col_1:3,col_2:-1}]},ee={columns:[Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I)],rows:[{col_1:1,col_2:0}]},te={columns:[Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I),Object(k.a)({key:"col_3",name:"C3"},I),Object(k.a)({key:"col_4",name:"C4"},I)],rows:[{col_1:5,col_2:0,col_3:0,col_4:-1},{col_1:1,col_2:0,col_3:-1,col_4:1},{col_1:-1.5,col_2:1,col_3:-2,col_4:1},{col_1:-1,col_2:1,col_3:3,col_4:-3}]},ne=(Object(k.a)({key:"col_1",name:"C1"},I),Object(k.a)({key:"col_2",name:"C2"},I),{columns:[Object(k.a)({key:"col_1",name:"x"},I),Object(k.a)({key:"col_2",name:"y"},I)],rows:[{col_1:0,col_2:0}]}),ce={columns:[Object(k.a)({key:"col_1",name:"x"},I),Object(k.a)({key:"col_2",name:"y"},I)],rows:[{col_1:0,col_2:1}]},ae={columns:[Object(k.a)({key:"col_1",name:"x"},I),Object(k.a)({key:"col_2",name:"y"},I)],rows:[{col_1:1,col_2:1}]},re={columns:[Object(k.a)({key:"col_1",name:"x"},I),Object(k.a)({key:"col_2",name:"y"},I),Object(k.a)({key:"col_3",name:"u"},I)],rows:[{col_1:0,col_2:1,col_3:2}]},oe={columns:[Object(k.a)({key:"col_1",name:"a"},I),Object(k.a)({key:"col_2",name:"y(a)"},I),Object(k.a)({key:"col_3",name:"b"},I),Object(k.a)({key:"col_4",name:"y(b)"},I)],rows:[{col_1:0,col_2:0,col_3:1,col_4:2}]},le={columns:[Object(k.a)({key:"col_1",name:"a"},I),Object(k.a)({key:"col_2",name:"y(a)"},I),Object(k.a)({key:"col_3",name:"b"},I),Object(k.a)({key:"col_4",name:"y(b)"},I)],rows:[{col_1:0,col_2:0,col_3:1,col_4:5}]}}}]);
//# sourceMappingURL=36.015ebb08.chunk.js.map