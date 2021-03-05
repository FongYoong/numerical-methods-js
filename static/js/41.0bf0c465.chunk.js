(this["webpackJsonpnumerical-methods-js"]=this["webpackJsonpnumerical-methods-js"]||[]).push([[41],{437:function(e,t,n){"use strict";n.r(t);var a,c,r,o,i,l,s,b,j,m,u,O,_,f,d,y,g,h,w,x,k,C,p,v,S,N,M,z=n(47),R=n(43),U=n(46),I=n(58),q=n(0),B=n(63),L=n(371),T=(n(51),n(50)),A=n(411),F=n(416),H=n(427),J=n(430),D=n(165),E=n(166),V=n(425),G=n(412),W=n(113),K=n.n(W),P=n(112),Q=n.n(P),X=n(465),Y=n(475),Z=n(474),$=n(431),ee=n(66),te=n.n(ee),ne=n(67),ae=n(423),ce=n(13),re=n(121),oe=n(94),ie=n(408),le=n(84),se=n.n(le),be=n(6),je=[{target:".matrix-size-input",title:"Size",content:"Increase/Reduce the matrix's size",disableBeacon:!0},{target:".matrix-input",title:"Matrix",content:"Specify the matrix here."},{target:".step-math",title:"Steps",content:"The steps are shown here."},{target:".iteration-slider",title:"Iteration slider",content:"Change the slider to view the result of any iteration."}],me=Object(ie.a)((function(e){return{paper:{padding:e.spacing(.5),textAlign:"center",color:e.palette.text.primary,margin:e.spacing(1)},container:{"& > *":{margin:e.spacing(1)}},card:{margin:e.spacing(0)},cardContent:{overflow:"auto","& > *":{margin:e.spacing(.5)}},overflow:{overflow:"auto"},matrixCard:{width:"60vw"},divider:{width:"500 px",height:"100px",marginTop:"20px",marginBottom:"20px"},fab:{position:"fixed",bottom:e.spacing(4),right:e.spacing(2)}}}));function ue(e){var t,n=e.smallScreen,B=e.params,F=me(),J=Object(q.useState)(1),G=Object(R.a)(J,2),W=G[0],K=G[1];if(W<=0)K(1);else if(B.iterations>0&&W>B.iterations)K(B.iterations);else if(B.iterations>=2){var P=B.results,Q=1===W?B.originalMatrix:P[W-2].finalMatrix,Z=P[W-1];t=String.raw(a||(a=Object(z.a)(["\n        displaystyle\n        \begin{array}{l}\n        "],["\n        \\displaystyle\n        \\begin{array}{l}\n        "]))),Z.interchange||(t+=String.raw(c||(c=Object(z.a)(["\n            \begin{array}{lcl}\n            \\ Factor, \bf{f_{","","}} &=& \frac{U_{","","}}{U_{","","}}\n            \\        &=& ","\n            end{array}\n            "],["\n            \\begin{array}{lcl}\n            \\\\ Factor, \\bf{f_{","","}} &=& \\frac{U_{","","}}{U_{","","}}\n            \\\\        &=& ","\n            \\end{array}\n            "])),Z.row,Z.pivot,Z.row,Z.pivot,Z.pivot,Z.pivot,Object(U.a)(Z.factor))),t+=String.raw(r||(r=Object(z.a)(["\\ \begin{array}{lcl} "],["\\\\ \\begin{array}{lcl} "])));var $=Z.interchange?[Z.row,Z.row2]:[Z.row,Z.pivot],ee=String.raw(o||(o=Object(z.a)(["overbrace{","}^{U}"],["\\overbrace{","}^{U}"])),Object(I.C)(Z.finalMatrix,{boldRows:$}));if(Z.interchange||0!==Z.factor){var te=String.raw(l||(l=Object(z.a)(["\n            overbrace{","}^{U}"],["\n            \\overbrace{","}^{U}"])),Object(I.C)(Q,{boldRows:$})),ne=Z.interchange?String.raw(s||(s=Object(z.a)(["R_{","} leftrightarrow R_{","}"],["R_{","} \\leftrightarrow R_{","}"])),Z.row,Z.row2):String.raw(b||(b=Object(z.a)(["R_{","} = R_{","}-","R_{","}"])),Z.row,Z.row,Object(U.b)(Z.factor),Z.pivot);t+=n?String.raw(j||(j=Object(z.a)(["\n                \\ ","\n                \\ \begin{array}{lcl}\n                       & downarrow &\n                    \\ & "," &\n                    \\ & downarrow &\n                    end{array}\n                \\ ","\n                "],["\n                \\\\ ","\n                \\\\ \\begin{array}{lcl}\n                       & \\downarrow &\n                    \\\\ & "," &\n                    \\\\ & \\downarrow &\n                    \\end{array}\n                \\\\ ","\n                "])),te,ne,ee):String.raw(m||(m=Object(z.a)(["\n                \\ ","\n                & overrightarrow{","}\n                & ","\n                "],["\n                \\\\ ","\n                & \\overrightarrow{","}\n                & ","\n                "])),te,ne,ee)}else t+=String.raw(i||(i=Object(z.a)(["\n                \\ \text{The factor is zero, so no elimination is done here.}\n                \\\n                \\ ","\n            "],["\n                \\\\ \\text{The factor is zero, so no elimination is done here.}\n                \\\\\n                \\\\ ","\n            "])),ee);if(W===B.iterations){for(var ae=B.lowerMatrix,re=String.raw(u||(u=Object(z.a)(["left[\begin{matrix}"],["\\left[\\begin{matrix}"]))),oe=0;oe<B.matrixSize;oe++){for(var ie=0;ie<B.matrixSize;ie++)re+=ie<oe?String.raw(O||(O=Object(z.a)([" \bf{f_{","","}} "],[" \\bf{f_{","","}} "])),oe+1,ie+1):ie===oe?String.raw(_||(_=Object(z.a)(["1"]))):String.raw(f||(f=Object(z.a)(["0"]))),ie!==B.matrixSize-1&&(re+=String.raw(d||(d=Object(z.a)(["&"]))));re+=String.raw(y||(y=Object(z.a)([" cr"],[" \\cr"])))}re+=String.raw(g||(g=Object(z.a)(["end{matrix}\right]"],["\\end{matrix}\\right]"])));for(var le=String.raw(h||(h=Object(z.a)(["left[\begin{matrix}"],["\\left[\\begin{matrix}"]))),se=0;se<B.matrixSize;se++){for(var je=0;je<B.matrixSize;je++)le+=je<se?String.raw(w||(w=Object(z.a)(["colorbox{aqua}{\bf{","}}"],["\\colorbox{aqua}{\\bf{","}}"])),Object(U.b)(ae[se][je])):je===se?String.raw(x||(x=Object(z.a)(["1"]))):String.raw(k||(k=Object(z.a)(["0"]))),je!==B.matrixSize-1&&(le+=String.raw(C||(C=Object(z.a)(["&"]))));le+=String.raw(p||(p=Object(z.a)(["cr"],["\\cr"])))}le+=String.raw(v||(v=Object(z.a)(["end{matrix}\right]"],["\\end{matrix}\\right]"]))),t+=String.raw(S||(S=Object(z.a)(["\n            \\ \n            \\ hline\n            \\ \begin{array}{lcl}\n            \\ Upper, U &=& ","\n            \\ \n            \\ Lower, L &=& ","\n            \\\n            \\          &=& ","\n            end{array}\n            \\\n            \\ \text{To verify the answer,}\n            \\ \begin{array}{lcl}\n            \\ L U &=& "," ","\n            \\\n            \\     &=& ","\n            \\\n            \\     &=&  \text{Original Matrix}\n            \\ end{array}\n            "],["\n            \\\\ \n            \\\\ \\hline\n            \\\\ \\begin{array}{lcl}\n            \\\\ Upper, U &=& ","\n            \\\\ \n            \\\\ Lower, L &=& ","\n            \\\\\n            \\\\          &=& ","\n            \\end{array}\n            \\\\\n            \\\\ \\text{To verify the answer,}\n            \\\\ \\begin{array}{lcl}\n            \\\\ L U &=& "," ","\n            \\\\\n            \\\\     &=& ","\n            \\\\\n            \\\\     &=&  \\text{Original Matrix}\n            \\\\ \\end{array}\n            "])),Object(I.C)(Z.finalMatrix),re,le,Object(I.C)(ae),Object(I.C)(Z.finalMatrix),Object(I.C)(Object(L.vd)(ae,Z.finalMatrix)))}t+=String.raw(N||(N=Object(z.a)(["end{array}end{array}"],["\\end{array}\\end{array}"])))}else t=String.raw(M||(M=Object(z.a)(["\n        displaystyle\n        \begin{array}{l}\n        \\ \text{Cannot do any elimination.}\n        \\ overbrace{","}^{A}\n        end{array}\n        "],["\n        \\displaystyle\n        \\begin{array}{l}\n        \\\\ \\text{Cannot do any elimination.}\n        \\\\ \\overbrace{","}^{A}\n        \\end{array}\n        "])),Object(I.C)(B.originalMatrix));return Object(be.jsx)(H.a,{className:F.container,children:Object(be.jsxs)(V.a,{container:!0,direction:"column",alignItems:"center",justify:"flex-start",children:[Object(be.jsx)(V.a,{xs:!0,item:!0,className:"iteration-slider",children:Object(be.jsx)(ce.b,{direction:"left",triggerOnce:!0,children:Object(be.jsx)(X.a,{id:"iteration-slider",width:"70vw",children:Object(be.jsx)(Y.a,{orientation:"horizontal",onChangeCommitted:function(e,t){K(t)},defaultValue:1,"aria-labelledby":"discrete-slider-small-steps",step:1,marks:!0,min:1,max:B.iterations<=0?1:B.iterations,valueLabelDisplay:"on"})})})}),Object(be.jsx)(V.a,{xs:!0,item:!0,className:"step-math",children:Object(be.jsx)(ce.b,{direction:"right",triggerOnce:!0,children:Object(be.jsx)(D.a,{className:F.card,children:Object(be.jsxs)(E.a,{className:F.cardContent,children:[Object(be.jsxs)(A.a,{variant:"h6",children:["Iteration ",W,":"]}),Object(be.jsx)(T.a,{math:t,block:!0})]})})})})]})})}t.default=function(e){var t=e.methodName,n=e.markdown;Object(q.useEffect)((function(){document.title=t}));for(var a=me(),c=Object(oe.a)(Object(re.a)().breakpoints.down("sm")),r=c?45:60,o=c?10:100,i=c?5:20,l=Object(q.useState)(I.x),s=Object(R.a)(l,2),b=s[0],j=s[1],m=function(e){return function(){var t=b.columns.slice(),n=b.rows.slice();if(e){t.push(Object(I.b)(t.length)),n.push(Object(I.c)(b.columns.length));for(var a=0;a<n.length;a++)n[a]["col_".concat(t.length)]=0}else{if(2===t.length)return;n.pop();for(var c=0;c<n.length;c++)delete n[c]["col_".concat(t.length)];t.pop()}j({columns:t,rows:n})}},u=Object(I.g)(b.rows),O=Object(I.a)(u),_=b.rows.length,f=[],d=Object(L.Cc)(_,_).toArray(),y=_,g=0;g<y-1;g++){var h=!0;if(0===O[g][g]){h=!1;for(var w=g+1;w<y;w++)if(0!==O[w][g]){var x=O[g];O[g]=O[w],O[w]=x,f.push({finalMatrix:Object(I.a)(O),interchange:!0,pivot:g+1,row:g+1,row2:w+1}),h=!0;break}}if(h)for(var k=g+1;k<y;k++){var C=O[k][g]/O[g][g];d[k][g]=C;var p=!1;if(0===C)p=!0;else if(isNaN(C))continue;if(!p)for(var v=0;v<_;v++)O[k][v]-=C*O[g][v];f.push({finalMatrix:Object(I.a)(O),interchange:!1,factor:C,pivot:g+1,row:k+1})}}var S=f.length,N=Object(q.useState)(!1),M=Object(R.a)(N,2),z=M[0],U=M[1],T={originalMatrix:u,matrixSize:_,iterations:S,results:f,lowerMatrix:d};return Object(be.jsxs)(be.Fragment,{children:[Object(be.jsx)(B.a,{methodName:t,markdown:n}),Object(be.jsx)(F.a,{className:a.paper,children:Object(be.jsx)(H.a,{className:a.container,children:Object(be.jsxs)(ce.c,{duration:500,triggerOnce:!0,cascade:!0,children:[Object(be.jsx)(A.a,{variant:"body1"}),Object(be.jsx)(V.a,{container:!0,spacing:1,direction:"row",alignItems:"center",justify:"center",children:Object(be.jsx)(V.a,{xs:!0,item:!0,children:Object(be.jsx)(D.a,{className:a.card,children:Object(be.jsx)(E.a,{className:a.cardContent,children:Object(be.jsxs)(V.a,{container:!0,spacing:1,direction:"column",alignItems:"center",justify:"center",children:[Object(be.jsxs)(V.a,{xs:!0,item:!0,className:"matrix-size-input",container:!0,spacing:1,direction:"row",alignItems:"center",justify:"center",children:[Object(be.jsx)(A.a,{variant:"h6",children:"Size:\xa0\xa0\xa0\xa0\xa0"}),Object(be.jsx)(G.a,{variant:"contained",color:"primary",onClick:m(!1),children:Object(be.jsx)(Q.a,{color:"error"})}),Object(be.jsx)(G.a,{variant:"contained",color:"primary",onClick:m(!0),children:Object(be.jsx)(K.a,{})})]}),Object(be.jsxs)(V.a,{xs:!0,item:!0,className:"matrix-input",container:!0,spacing:1,direction:"column",alignItems:"center",justify:"center",children:[Object(be.jsx)(V.a,{xs:!0,item:!0,children:Object(be.jsx)(A.a,{variant:"h6",children:"Matrix:"})}),Object(be.jsx)(V.a,{xs:!0,item:!0,container:!0,spacing:0,direction:"row",alignItems:"center",justify:"center",children:Object(be.jsx)(V.a,{item:!0,className:a.overflow,children:Object(be.jsx)(se.a,{columns:b.columns,rowGetter:function(e){return b.rows[e]},rowsCount:b.rows.length,onGridRowsUpdated:Object(I.d)(b,j),enableCellSelect:!0,headerRowHeight:1,minColumnWidth:r,minWidth:r*b.columns.length+o,rowHeight:35,minHeight:35*b.rows.length+i})},Math.random())})]})]})})})})})]})})}),Object(be.jsx)(J.a,{}),Object(be.jsx)(ae.a,{in:true,children:Object(be.jsx)(ce.a,{triggerOnce:!0,children:Object(be.jsx)(F.a,{className:a.paper,children:Object(be.jsx)(ue,{smallScreen:c,params:T})})})}),Object(be.jsx)(Z.a,{arrow:!0,title:"Help",placement:"top",children:Object(be.jsx)($.a,{color:"secondary","aria-label":"help",className:a.fab,onClick:function(){U(!0)},children:Object(be.jsx)(te.a,{})})}),Object(be.jsx)(ne.a,{scrollToFirstStep:!0,run:z,steps:je,continuous:!0,showSkipButton:!0,locale:{last:"End tour"},callback:function(e){"reset"!==e.action&&"close"!==e.action||U(!1)}})]})}},58:function(e,t,n){"use strict";n.d(t,"d",(function(){return N})),n.d(t,"b",(function(){return U})),n.d(t,"c",(function(){return I})),n.d(t,"g",(function(){return q})),n.d(t,"a",(function(){return B})),n.d(t,"B",(function(){return L})),n.d(t,"E",(function(){return T})),n.d(t,"f",(function(){return A})),n.d(t,"D",(function(){return F})),n.d(t,"e",(function(){return H})),n.d(t,"C",(function(){return J})),n.d(t,"l",(function(){return D})),n.d(t,"z",(function(){return E})),n.d(t,"w",(function(){return V})),n.d(t,"k",(function(){return G})),n.d(t,"A",(function(){return W})),n.d(t,"x",(function(){return K})),n.d(t,"y",(function(){return P})),n.d(t,"m",(function(){return Q})),n.d(t,"h",(function(){return X})),n.d(t,"n",(function(){return Y})),n.d(t,"i",(function(){return Z})),n.d(t,"o",(function(){return $})),n.d(t,"j",(function(){return ee})),n.d(t,"p",(function(){return te})),n.d(t,"q",(function(){return ne})),n.d(t,"r",(function(){return ae})),n.d(t,"s",(function(){return ce})),n.d(t,"t",(function(){return re})),n.d(t,"u",(function(){return oe})),n.d(t,"v",(function(){return ie}));var a,c,r,o,i,l,s,b,j,m,u,O,_,f=n(47),d=n(62),y=n(89),g=n(71),h=n(72),w=n(77),x=n(76),k=n(44),C=n(46),p=n(0),v=n.n(p),S=n(6);function N(e,t){return function(n){for(var a=n.fromRow,c=n.toRow,r=n.updated,o=e.rows.slice(),i=a;i<=c;i++)o[i]=Object(k.a)(Object(k.a)({},o[i]),r);t(Object(k.a)(Object(k.a)({},e),{},{rows:o}))}}var M=function(e){Object(w.a)(n,e);var t=Object(x.a)(n);function n(e){var a;return Object(g.a)(this,n),(a=t.call(this,e)).ref=v.a.createRef(),a.onInputChange=function(){var e=a.ref.current.value;try{e=parseFloat(e),isNaN(e)&&(e=0)}catch(t){e=0}a.setState({value:e})},a.state={value:e.value},a}return Object(h.a)(n,[{key:"getValue",value:function(){return Object(y.a)({},this.props.column.key,this.state.value)}},{key:"getInputNode",value:function(){return this.ref.current?this.ref.current:null}},{key:"render",value:function(){return Object(S.jsx)("input",{ref:this.ref,defaultValue:this.state.value,onBlur:this.onInputChange,onChange:this.onInputChange})}}]),n}(v.a.Component),z={display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},R={editable:!0,editor:M,formatter:function(e){Object(w.a)(n,e);var t=Object(x.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(S.jsx)("div",{style:z,children:this.props.value})}}]),n}(v.a.Component)},U=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=e+1;return t?Object(k.a)({key:"col_".concat(n),name:t},R):Object(k.a)({key:"col_".concat(n),name:"C".concat(n)},R)},I=function(e){for(var t={},n=1;n<=e;n++)t["col_".concat(n)]=0;return t},q=function(e){var t=Object.keys(e[0]).sort();return e.map((function(e){return t.map((function(t){return e[t]}))}))},B=function(e){return JSON.parse(JSON.stringify(e))},L=function(e){for(var t=0;t<e.length;t++){for(var n=e[t][t],a=0,c=0;c<e.length;c++)c!==t&&(a+=e[t][c]);if(Math.abs(n)<=Math.abs(a))return!1}return!0},T=[1,1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3],A=function(e,t){return T[e]/T[t]/T[e-t]},F=function(e){for(var t=e.length-1;t>0&&e[t-1]>=e[t];)t--;if(t<=0)return!1;for(var n=e.length-1;e[n]<=e[t-1];)n--;var a=e[t-1];for(e[t-1]=e[n],e[n]=a,n=e.length-1;t<n;)a=e[t],e[t]=e[n],e[n]=a,t++,n--;return!0},H=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(d.a)(Array(e.length).keys()),n={},a=[],c=0;c<t.length;c++)a.includes(e[c])||t[c]===e[c]||(n[c]=e[c],a.push(t[c],e[c]));return n},J=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},d=n.single,y=void 0!==d&&d,g=n.leftBracketOnly,h=void 0!==g&&g,w=n.rightBracketOnly,x=void 0!==w&&w,k=n.boldRows,p=void 0===k?[]:k,v=n.boldColumns,S=void 0===v?[]:v;n.transpose;t=x?String.raw(a||(a=Object(f.a)(["left|\begin{matrix}"],["\\left|\\begin{matrix}"]))):String.raw(c||(c=Object(f.a)(["left[\begin{matrix}"],["\\left[\\begin{matrix}"])));var N=e.length,M=e[0].length;if(y)for(var z=0;z<N;z++){for(var R=!1,U=0;U<p.length;U++)if(p[U]===z+1){R=!0;break}var I=String.raw(r||(r=Object(f.a)([" "," "])),Object(C.b)(e[z]));t+=R?String.raw(o||(o=Object(f.a)([" colorbox{aqua}{\bf{","}} "],[" \\colorbox{aqua}{\\bf{","}} "])),I):String.raw(i||(i=Object(f.a)(["",""])),I),t+=String.raw(l||(l=Object(f.a)(["cr"],["\\cr"])))}else for(var q=0;q<N;q++){for(var B=!1,L=0;L<p.length;L++)if(p[L]===q+1){B=!0;break}for(var T=0;T<M;T++){for(var A=!1,F=0;F<S.length;F++)if(S[F]===T+1){A=!0;break}var H=String.raw(s||(s=Object(f.a)([" "," "])),Object(C.b)(e[q][T]));t+=B||A?String.raw(b||(b=Object(f.a)([" colorbox{aqua}{\bf{","}} "],[" \\colorbox{aqua}{\\bf{","}} "])),H):String.raw(j||(j=Object(f.a)(["",""])),H),T!==M-1&&(t+=String.raw(m||(m=Object(f.a)(["&"]))))}t+=String.raw(u||(u=Object(f.a)(["cr"],["\\cr"])))}return t+=h?String.raw(O||(O=Object(f.a)(["end{matrix}\right|"],["\\end{matrix}\\right|"]))):String.raw(_||(_=Object(f.a)(["end{matrix}\right]"],["\\end{matrix}\\right]"])))},D={columns:[Object(k.a)({key:"col_1",name:"C1"},R),Object(k.a)({key:"col_2",name:"C2"},R),Object(k.a)({key:"col_3",name:"C3"},R),Object(k.a)({key:"col_4",name:"C4"},R)],rows:[{col_1:0,col_2:1,col_3:-3,col_4:4},{col_1:2,col_2:-2,col_3:1,col_4:0},{col_1:2,col_2:-1,col_3:-2,col_4:4},{col_1:-6,col_2:4,col_3:3,col_4:-8}]},E=(Object(k.a)({key:"col_1",name:"C1"},R),Object(k.a)({key:"col_2",name:"C2"},R),Object(k.a)({key:"col_3",name:"C3"},R),Object(k.a)({key:"col_4",name:"C4"},R),{columns:[Object(k.a)({key:"col_1",name:"C1"},R),Object(k.a)({key:"col_2",name:"C2"},R),Object(k.a)({key:"col_3",name:"C3"},R),Object(k.a)({key:"col_4",name:"C4"},R)],rows:[{col_1:1,col_2:-1,col_3:0,col_4:1}]}),V=(Object(k.a)({key:"col_1",name:"C1"},R),Object(k.a)({key:"col_2",name:"C2"},R),Object(k.a)({key:"col_3",name:"C3"},R),Object(k.a)({key:"col_1",name:"C1"},R),Object(k.a)({key:"col_2",name:"C2"},R),Object(k.a)({key:"col_3",name:"C3"},R),Object(k.a)({key:"col_1",name:"C1"},R),Object(k.a)({key:"col_2",name:"C2"},R),Object(k.a)({key:"col_3",name:"C3"},R),{columns:[Object(k.a)({key:"col_1",name:"C1"},R),Object(k.a)({key:"col_2",name:"C2"},R),Object(k.a)({key:"col_3",name:"C3"},R),Object(k.a)({key:"col_4",name:"C4"},R)],rows:[{col_1:-1,col_2:11,col_3:-1,col_4:3},{col_1:10,col_2:-1,col_3:2,col_4:0},{col_1:0,col_2:3,col_3:-1,col_4:8},{col_1:2,col_2:-1,col_3:10,col_4:-1}]}),G={columns:[Object(k.a)({key:"col_1",name:"C1"},R),Object(k.a)({key:"col_2",name:"C2"},R),Object(k.a)({key:"col_3",name:"C3"},R),Object(k.a)({key:"col_4",name:"C4"},R)],rows:[{col_1:0,col_2:0,col_3:0,col_4:0}]},W={columns:[Object(k.a)({key:"col_1",name:"C1"},R),Object(k.a)({key:"col_2",name:"C2"},R),Object(k.a)({key:"col_3",name:"C3"},R),Object(k.a)({key:"col_4",name:"C4"},R)],rows:[{col_1:25,col_2:6,col_3:15,col_4:-11}]},K={columns:[Object(k.a)({key:"col_1",name:"C1"},R),Object(k.a)({key:"col_2",name:"C2"},R),Object(k.a)({key:"col_3",name:"C3"},R)],rows:[{col_1:3,col_2:-.1,col_3:-.2},{col_1:.1,col_2:7,col_3:-.3},{col_1:.3,col_2:-.2,col_3:10}]},P=(Object(k.a)({key:"col_1",name:"C1"},R),Object(k.a)({key:"col_2",name:"C2"},R),{columns:[Object(k.a)({key:"col_1",name:"C1"},R),Object(k.a)({key:"col_2",name:"C2"},R),Object(k.a)({key:"col_3",name:"C3"},R)],rows:[{col_1:3,col_2:5,col_3:2},{col_1:2,col_2:3,col_3:-2}]}),Q=(Object(k.a)({key:"col_1",name:"C1"},R),Object(k.a)({key:"col_2",name:"C2"},R),Object(k.a)({key:"col_1",name:"C1"},R),Object(k.a)({key:"col_2",name:"C2"},R),Object(k.a)({key:"col_3",name:"C3"},R),Object(k.a)({key:"col_1",name:"C1"},R),Object(k.a)({key:"col_2",name:"C2"},R),Object(k.a)({key:"col_3",name:"C3"},R),Object(k.a)({key:"col_1",name:"C1"},R),Object(k.a)({key:"col_2",name:"C2"},R),Object(k.a)({key:"col_3",name:"C3"},R),Object(k.a)({key:"col_1",name:"C1"},R),Object(k.a)({key:"col_2",name:"C2"},R),Object(k.a)({key:"col_3",name:"C3"},R),{columns:[Object(k.a)({key:"col_1",name:"C1"},R),Object(k.a)({key:"col_2",name:"C2"},R)],rows:[{col_1:4,col_2:-2},{col_1:3,col_2:-1}]}),X={columns:[Object(k.a)({key:"col_1",name:"C1"},R),Object(k.a)({key:"col_2",name:"C2"},R)],rows:[{col_1:1,col_2:0}]},Y={columns:[Object(k.a)({key:"col_1",name:"C1"},R),Object(k.a)({key:"col_2",name:"C2"},R)],rows:[{col_1:2,col_2:3},{col_1:4,col_2:1}]},Z={columns:[Object(k.a)({key:"col_1",name:"C1"},R),Object(k.a)({key:"col_2",name:"C2"},R)],rows:[{col_1:-.7,col_2:1}]},$={columns:[Object(k.a)({key:"col_1",name:"C1"},R),Object(k.a)({key:"col_2",name:"C2"},R)],rows:[{col_1:7,col_2:-2},{col_1:3,col_2:-1}]},ee={columns:[Object(k.a)({key:"col_1",name:"C1"},R),Object(k.a)({key:"col_2",name:"C2"},R)],rows:[{col_1:1,col_2:0}]},te={columns:[Object(k.a)({key:"col_1",name:"C1"},R),Object(k.a)({key:"col_2",name:"C2"},R),Object(k.a)({key:"col_3",name:"C3"},R),Object(k.a)({key:"col_4",name:"C4"},R)],rows:[{col_1:5,col_2:0,col_3:0,col_4:-1},{col_1:1,col_2:0,col_3:-1,col_4:1},{col_1:-1.5,col_2:1,col_3:-2,col_4:1},{col_1:-1,col_2:1,col_3:3,col_4:-3}]},ne=(Object(k.a)({key:"col_1",name:"C1"},R),Object(k.a)({key:"col_2",name:"C2"},R),{columns:[Object(k.a)({key:"col_1",name:"x"},R),Object(k.a)({key:"col_2",name:"y"},R)],rows:[{col_1:0,col_2:0}]}),ae={columns:[Object(k.a)({key:"col_1",name:"x"},R),Object(k.a)({key:"col_2",name:"y"},R)],rows:[{col_1:0,col_2:1}]},ce={columns:[Object(k.a)({key:"col_1",name:"x"},R),Object(k.a)({key:"col_2",name:"y"},R)],rows:[{col_1:1,col_2:1}]},re={columns:[Object(k.a)({key:"col_1",name:"x"},R),Object(k.a)({key:"col_2",name:"y"},R),Object(k.a)({key:"col_3",name:"u"},R)],rows:[{col_1:0,col_2:1,col_3:2}]},oe={columns:[Object(k.a)({key:"col_1",name:"a"},R),Object(k.a)({key:"col_2",name:"y(a)"},R),Object(k.a)({key:"col_3",name:"b"},R),Object(k.a)({key:"col_4",name:"y(b)"},R)],rows:[{col_1:0,col_2:0,col_3:1,col_4:2}]},ie={columns:[Object(k.a)({key:"col_1",name:"a"},R),Object(k.a)({key:"col_2",name:"y(a)"},R),Object(k.a)({key:"col_3",name:"b"},R),Object(k.a)({key:"col_4",name:"y(b)"},R)],rows:[{col_1:0,col_2:0,col_3:1,col_4:5}]}}}]);
//# sourceMappingURL=41.0bf0c465.chunk.js.map