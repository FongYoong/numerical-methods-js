(this["webpackJsonpnumerical-methods-js"]=this["webpackJsonpnumerical-methods-js"]||[]).push([[10],{125:function(e,t,n){"use strict";n.d(t,"b",(function(){return A})),n.d(t,"c",(function(){return R})),n.d(t,"e",(function(){return T})),n.d(t,"a",(function(){return X})),n.d(t,"k",(function(){return E})),n.d(t,"n",(function(){return M})),n.d(t,"m",(function(){return H})),n.d(t,"d",(function(){return G})),n.d(t,"l",(function(){return z})),n.d(t,"g",(function(){return W})),n.d(t,"i",(function(){return q})),n.d(t,"h",(function(){return F})),n.d(t,"f",(function(){return J})),n.d(t,"j",(function(){return P}));var r,a,c,i,o,l,s,b,u,j,d,h,g,m=n(66),O=n(93),f=n(53),p=n(123),x=n(142),y=n(143),v=n(149),w=n(147),_=n(47),k=n(0),C=n.n(k),S=n(6),I=function(e){Object(v.a)(n,e);var t=Object(w.a)(n);function n(e){var r;return Object(x.a)(this,n),(r=t.call(this,e)).ref=C.a.createRef(),r.onInputChange=function(){var e=r.ref.current.value;try{e=parseInt(e),isNaN(e)&&(e=0)}catch(t){e=0}r.setState({value:e})},r.state={value:e.value},r}return Object(y.a)(n,[{key:"getValue",value:function(){return Object(p.a)({},this.props.column.key,this.state.value)}},{key:"getInputNode",value:function(){return this.ref.current?this.ref.current:null}},{key:"render",value:function(){return Object(S.jsx)("input",{ref:this.ref,defaultValue:this.state.value,onBlur:this.onInputChange,onChange:this.onInputChange})}}]),n}(C.a.Component),B={display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},N={editable:!0,editor:I,formatter:function(e){Object(v.a)(n,e);var t=Object(w.a)(n);function n(){return Object(x.a)(this,n),t.apply(this,arguments)}return Object(y.a)(n,[{key:"render",value:function(){return Object(S.jsx)("div",{style:B,children:this.props.value})}}]),n}(C.a.Component)},A=function(e){var t=e+1;return Object(f.a)({key:"col_".concat(t),name:"C".concat(t)},N)},R=function(e){for(var t={},n=1;n<=e;n++)t["col_".concat(n)]=0;return t},T=function(e){var t=Object.keys(e[0]).sort();return e.map((function(e){return t.map((function(t){return e[t]}))}))},X=function(e){return JSON.parse(JSON.stringify(e))},E=function(e){for(var t=0;t<e.length;t++){for(var n=e[t][t],r=0,a=0;a<e.length;a++)a!==t&&(r+=e[t][a]);if(Math.abs(n)<=Math.abs(r))return!1}return!0},M=[1,2,6,24,120,720,5040,40320,362880,3628800,39916800,479001600,6227020800,87178291200,1307674368e3],H=function(e){for(var t=e.length-1;t>0&&e[t-1]>=e[t];)t--;if(t<=0)return!1;for(var n=e.length-1;e[n]<=e[t-1];)n--;var r=e[t-1];for(e[t-1]=e[n],e[n]=r,n=e.length-1;t<n;)r=e[t],e[t]=e[n],e[n]=r,t++,n--;return!0},G=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Object(O.a)(Array(e.length).keys()),n={},r=[],a=0;a<t.length;a++)r.includes(e[a])||t[a]===e[a]||(n[a]=e[a],r.push(t[a],e[a]));return n},z=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},O=n.single,f=void 0!==O&&O,p=n.leftBracketOnly,x=void 0!==p&&p,y=n.rightBracketOnly,v=void 0!==y&&y,w=n.boldRows,k=void 0===w?[]:w;n.transpose;t=v?String.raw(r||(r=Object(m.a)(["left|\begin{matrix}"],["\\left|\\begin{matrix}"]))):String.raw(a||(a=Object(m.a)(["left[\begin{matrix}"],["\\left[\\begin{matrix}"])));var C=e.length,S=e[0].length;if(f)for(var I=0;I<C;I++){for(var B=!1,N=0;N<k.length;N++)if(k[N]===I+1){B=!0;break}var A=String.raw(c||(c=Object(m.a)([" "," "])),Object(_.b)(e[I]));t+=B?String.raw(i||(i=Object(m.a)([" colorbox{aqua}{\bf{","}} "],[" \\colorbox{aqua}{\\bf{","}} "])),A):String.raw(o||(o=Object(m.a)(["",""])),A),t+=String.raw(l||(l=Object(m.a)(["cr"],["\\cr"])))}else for(var R=0;R<C;R++){for(var T=!1,X=0;X<k.length;X++)if(k[X]===R+1){T=!0;break}for(var E=0;E<S;E++){var M=String.raw(s||(s=Object(m.a)([" "," "])),Object(_.b)(e[R][E]));t+=T?String.raw(b||(b=Object(m.a)([" colorbox{aqua}{\bf{","}} "],[" \\colorbox{aqua}{\\bf{","}} "])),M):String.raw(u||(u=Object(m.a)(["",""])),M),E!==S-1&&(t+=String.raw(j||(j=Object(m.a)(["&"]))))}t+=String.raw(d||(d=Object(m.a)(["cr"],["\\cr"])))}return t+=x?String.raw(h||(h=Object(m.a)(["end{matrix}\right|"],["\\end{matrix}\\right|"]))):String.raw(g||(g=Object(m.a)(["end{matrix}\right]"],["\\end{matrix}\\right]"])))},W={columns:[Object(f.a)({key:"col_1",name:"C1"},N),Object(f.a)({key:"col_2",name:"C2"},N),Object(f.a)({key:"col_3",name:"C3"},N),Object(f.a)({key:"col_4",name:"C4"},N)],rows:[{col_1:0,col_2:1,col_3:-3,col_4:4},{col_1:2,col_2:-2,col_3:1,col_4:0},{col_1:2,col_2:-1,col_3:-2,col_4:4},{col_1:-6,col_2:4,col_3:3,col_4:-8}]},q=(Object(f.a)({key:"col_1",name:"C1"},N),Object(f.a)({key:"col_2",name:"C2"},N),Object(f.a)({key:"col_3",name:"C3"},N),Object(f.a)({key:"col_4",name:"C4"},N),{columns:[Object(f.a)({key:"col_1",name:"C1"},N),Object(f.a)({key:"col_2",name:"C2"},N),Object(f.a)({key:"col_3",name:"C3"},N),Object(f.a)({key:"col_4",name:"C4"},N)],rows:[{col_1:1,col_2:-1,col_3:0,col_4:1}]}),F=(Object(f.a)({key:"col_1",name:"C1"},N),Object(f.a)({key:"col_2",name:"C2"},N),Object(f.a)({key:"col_3",name:"C3"},N),Object(f.a)({key:"col_1",name:"C1"},N),Object(f.a)({key:"col_2",name:"C2"},N),Object(f.a)({key:"col_3",name:"C3"},N),Object(f.a)({key:"col_1",name:"C1"},N),Object(f.a)({key:"col_2",name:"C2"},N),Object(f.a)({key:"col_3",name:"C3"},N),{columns:[Object(f.a)({key:"col_1",name:"C1"},N),Object(f.a)({key:"col_2",name:"C2"},N),Object(f.a)({key:"col_3",name:"C3"},N),Object(f.a)({key:"col_4",name:"C4"},N)],rows:[{col_1:-1,col_2:11,col_3:-1,col_4:3},{col_1:10,col_2:-1,col_3:2,col_4:0},{col_1:0,col_2:3,col_3:-1,col_4:8},{col_1:2,col_2:-1,col_3:10,col_4:-1}]}),J={columns:[Object(f.a)({key:"col_1",name:"C1"},N),Object(f.a)({key:"col_2",name:"C2"},N),Object(f.a)({key:"col_3",name:"C3"},N),Object(f.a)({key:"col_4",name:"C4"},N)],rows:[{col_1:0,col_2:0,col_3:0,col_4:0}]},P={columns:[Object(f.a)({key:"col_1",name:"C1"},N),Object(f.a)({key:"col_2",name:"C2"},N),Object(f.a)({key:"col_3",name:"C3"},N),Object(f.a)({key:"col_4",name:"C4"},N)],rows:[{col_1:25,col_2:6,col_3:15,col_4:-11}]}},284:function(e,t,n){"use strict";n.r(t);var r,a,c,i,o,l,s,b,u,j,d,h,g,m,O,f,p,x,y=n(66),v=n(93),w=n(53),_=n(51),k=n(47),C=n(125),S=n(0),I=n(69),B=(n(61),n(62)),N=n(258),A=n(283),R=n(254),T=n(266),X=n(275),E=n(272),M=n(273),H=n(264),G=n(315),z=n(319),W=n(257),q=n(146),F=n.n(q),J=n(145),P=n.n(J),V=n(317),D=n(324),U=n(325),L=n(276),K=n(79),Q=n.n(K),Y=n(80),Z=n(262),$=n(14),ee=n(78),te=n(277),ne=n(249),re=n(144),ae=n.n(re),ce=n(6),ie=[{target:".matrix-size-input",title:"Size",content:"Increase/Reduce the matrix's size",disableBeacon:!0},{target:".matrix-input",title:"Matrix",content:"Specify the matrix here."},{target:".input-col-input",title:"Input",content:"Specify the initial input vector."},{target:".output-col-input",title:"Output",content:"Specify the output vector."},{target:".errorThreshold-input",title:"Error Threshold",content:"Specify the minimum error threshold"},{target:".step-math",title:"Steps",content:"The steps are shown here."},{target:".iteration-slider",title:"Iteration slider",content:"Change the slider to view the result of any iteration."}],oe=Object(ne.a)((function(e){return{paper:{padding:e.spacing(.5),textAlign:"center",color:e.palette.text.primary,margin:e.spacing(1)},container:{"& > *":{margin:e.spacing(1)}},card:{margin:e.spacing(0)},cardContent:{overflow:"auto","& > *":{margin:e.spacing(.5)}},overflow:{overflow:"auto"},matrixCard:{width:"60vw"},divider:{width:"500 px",height:"100px",marginTop:"20px",marginBottom:"20px"},fab:{position:"fixed",bottom:e.spacing(4),right:e.spacing(2)}}}));function le(e){var t,n=e.smallScreen,r=e.params,a=oe(),w=Object(S.useState)(1),I=Object(_.a)(w,2),A=I[0],R=I[1],X=r.exceedIterError,G=r.exceedIterErrorText;if(A<=0)R(1);else if(r.iterations>0&&A>r.iterations)R(r.iterations);else if(r.triedPermutating)t=String.raw(c||(c=Object(y.a)(["\n        displaystyle\n        \begin{array}{l}\n        \\ \text{Cannot find a diagonally dominant matrix.}\n        \\ overbrace{","}^{A}\n           overbrace{","}^{X_{0}}\n        &=&overbrace{","}^{B}\n        end{array}\n        "],["\n        \\displaystyle\n        \\begin{array}{l}\n        \\\\ \\text{Cannot find a diagonally dominant matrix.}\n        \\\\ \\overbrace{","}^{A}\n           \\overbrace{","}^{X_{0}}\n        &=&\\overbrace{","}^{B}\n        \\end{array}\n        "])),Object(C.l)(r.originalMatrix,{leftBracketOnly:!0}),Object(C.l)(r.originalInput,{single:!0}),Object(C.l)(r.originalOutput,{single:!0}));else if(r.iterations>0){var W=r.results,q=W[A-1];if(t=String.raw(i||(i=Object(y.a)(["\n        displaystyle\n        \begin{array}{l}\n        \\ \begin{array}{lcl}\n        "],["\n        \\displaystyle\n        \\begin{array}{l}\n        \\\\ \\begin{array}{lcl}\n        "]))),q.permutated){var F=Object(C.d)(q.rowIndexes),J=Object.keys(F).map((function(e){return parseInt(e)+1}));J.push.apply(J,Object(v.a)(Object.values(F).map((function(e){return e+1}))));for(var P=String.raw(o||(o=Object(y.a)(["\n            overbrace{","}^{A}\n            overbrace{","}^{B}"],["\n            \\overbrace{","}^{A}\n            \\overbrace{","}^{B}"])),Object(C.l)(r.originalMatrix,{leftBracketOnly:!0,boldRows:J}),Object(C.l)(r.originalOutput,{single:!0,rightBracketOnly:!0,boldRows:J})),U=String.raw(l||(l=Object(y.a)(["\begin{array}{l}"],["\\begin{array}{l}"]))),L=0,K=Object.entries(F);L<K.length;L++){var Q=Object(_.a)(K[L],2),Y=Q[0],ee=Q[1];U+=String.raw(s||(s=Object(y.a)(["R_{","} leftrightarrow R_{","}\\"],["R_{","} \\leftrightarrow R_{","}\\\\"])),parseInt(Y)+1,ee+1)}U+=String.raw(b||(b=Object(y.a)(["end{array}"],["\\end{array}"])));var te=String.raw(u||(u=Object(y.a)(["\n            overbrace{","}^{A}\n            overbrace{","}^{B}"],["\n            \\overbrace{","}^{A}\n            \\overbrace{","}^{B}"])),Object(C.l)(q.newMatrix,{leftBracketOnly:!0,boldRows:J}),Object(C.l)(q.newOutput,{single:!0,rightBracketOnly:!0,boldRows:J}));t+=String.raw(j||(j=Object(y.a)(["\n            \\ \text{The matrix's rows are } \textbf{permutated} "," \text{ to make it } \textbf{strictly diagonally dominant.}\n            \\"],["\n            \\\\ \\text{The matrix's rows are } \\textbf{permutated} "," \\text{ to make it } \\textbf{strictly diagonally dominant.}\n            \\\\"])),n?"\\\\":""),t+=n?String.raw(d||(d=Object(y.a)(["\n                \\ ","\n                \\ \begin{array}{lcl}\n                    & downarrow &\n                    \\ & "," &\n                    \\ & downarrow &\n                    end{array}\n                \\ ","\n                "],["\n                \\\\ ","\n                \\\\ \\begin{array}{lcl}\n                    & \\downarrow &\n                    \\\\ & "," &\n                    \\\\ & \\downarrow &\n                    \\end{array}\n                \\\\ ","\n                "])),P,U,te):String.raw(h||(h=Object(y.a)(["\n                \\ \begin{array}{lcl}\n                \\ ","\n                    & overrightarrow{","}\n                    & ","\n                    end{array}\n                "],["\n                \\\\ \\begin{array}{lcl}\n                \\\\ ","\n                    & \\overrightarrow{","}\n                    & ","\n                    \\end{array}\n                "])),P,U,te)}else{var ne=W[0].permutated?W[0].newMatrix:r.originalMatrix,re=W[0].permutated?W[0].newOutput:r.originalOutput;if(t+=String.raw(g||(g=Object(y.a)(["\n                \\\n                overbrace{","}^{A}\n                overbrace{","}^{X^{(",")}}\n                = overbrace{","}^{B}\n                \\ X^{(",")}_i = \frac{1}{A_{ii}}\n                    left[ B_i - sum_{substack{j = 1, \\ j \ne i}}^n\n                        left( A_{ij} cdot X^{(",")}_i \right)\n                    \right]\n                    \n                \\ X^{(",")} = ","\n            "],["\n                \\\\\n                \\overbrace{","}^{A}\n                \\overbrace{","}^{X^{(",")}}\n                = \\overbrace{","}^{B}\n                \\\\ X^{(",")}_i = \\frac{1}{A_{ii}}\n                    \\left[ B_i - \\sum_{\\substack{j = 1, \\\\ j \\ne i}}^n\n                        \\left( A_{ij} \\cdot X^{(",")}_i \\right)\n                    \\right]\n                    \n                \\\\ X^{(",")} = ","\n            "])),Object(C.l)(ne,{leftBracketOnly:!0}),Object(C.l)(q.oldInput,{single:!0}),A-1,Object(C.l)(re,{single:!0}),A,A-1,A,Object(C.l)(q.newInput,{single:!0})),W[0].permutated){var ae=Object(C.d)(W[0].rowIndexes);console.log(ae);var ie=Object(C.a)(q.newInput);t+=String.raw(m||(m=Object(y.a)(["\n                \\\n                \\ \text {Given that the matrix A has been permutated in iteration 1, }\n                \\ \text {we must restore the original order:}\n                \\\n                \\ X^{(",")} = ","\n                "],["\n                \\\\\n                \\\\ \\text {Given that the matrix A has been permutated in iteration 1, }\n                \\\\ \\text {we must restore the original order:}\n                \\\\\n                \\\\ X^{(",")} = ","\n                "])),A,Object(C.l)(ie,{single:!0}))}t+=String.raw(O||(O=Object(y.a)(["\n            \\\n            \begin{array}{lcl}\n            \\ Error &=& |X^{(",")} - X^{(",")}|\n            \\       &=& |","|\n            end{array}\n            "],["\n            \\\\\n            \\begin{array}{lcl}\n            \\\\ Error &=& |X^{(",")} - X^{(",")}|\n            \\\\       &=& |","|\n            \\end{array}\n            "])),A,A-1,Object(k.a)(q.errorInput)),q.converged&&(t+=String.raw(f||(f=Object(y.a)(["\n                \\\n                \\ \text{Converged because:}\n                \\\n                \\ Error < Error Threshold\n                \\ "," < ","\n                "],["\n                \\\\\n                \\\\ \\text{Converged because:}\n                \\\\\n                \\\\ Error < Error Threshold\n                \\\\ "," < ","\n                "])),Object(k.a)(q.errorInput),Object(k.a)(r.errorThreshold)))}t+=String.raw(p||(p=Object(y.a)(["end{array}end{array}"],["\\end{array}\\end{array}"])))}else t=String.raw(x||(x=Object(y.a)(["\n        displaystyle\n        \begin{array}{lcl}\n        \\ \text{Cannot do anything.}\n        \\ overbrace{","}^{A}\n           overbrace{","}^{X_{0}}\n        &=&overbrace{","}^{B}\n        end{array}\n        "],["\n        \\displaystyle\n        \\begin{array}{lcl}\n        \\\\ \\text{Cannot do anything.}\n        \\\\ \\overbrace{","}^{A}\n           \\overbrace{","}^{X_{0}}\n        &=&\\overbrace{","}^{B}\n        \\end{array}\n        "])),Object(C.l)(r.originalMatrix,{leftBracketOnly:!0}),Object(C.l)(r.originalInput,{single:!0}),Object(C.l)(r.originalOutput,{single:!0}));return Object(ce.jsxs)(T.a,{className:a.container,children:[Object(ce.jsx)(Z.a,{in:X,children:Object(ce.jsx)(z.a,{severity:"error",children:G})}),Object(ce.jsx)(Z.a,{in:!X,children:Object(ce.jsxs)(H.a,{container:!0,direction:"column",alignItems:"center",justify:"flex-start",children:[Object(ce.jsx)(H.a,{xs:!0,item:!0,className:"iteration-slider",children:Object(ce.jsx)($.b,{direction:"left",triggerOnce:!0,children:Object(ce.jsx)(V.a,{id:"iteration-slider",width:"70vw",children:Object(ce.jsx)(D.a,{orientation:"horizontal",onChangeCommitted:function(e,t){R(t)},defaultValue:A,"aria-labelledby":"discrete-slider-small-steps",step:1,marks:!0,min:1,max:r.iterations<=0?1:r.iterations,valueLabelDisplay:"on"})})})}),Object(ce.jsx)(H.a,{xs:!0,item:!0,className:"step-math",children:Object(ce.jsx)($.b,{direction:"right",triggerOnce:!0,children:Object(ce.jsx)(E.a,{className:a.card,children:Object(ce.jsxs)(M.a,{className:a.cardContent,children:[Object(ce.jsxs)(N.a,{variant:"h6",children:["Iteration ",A,":"]}),Object(ce.jsx)(B.a,{math:t})]})})})})]})})]})}t.default=function(e){var t=e.methodName;Object(S.useEffect)((function(){document.title=t}));var n=oe(),c=Object(te.a)(Object(ee.a)().breakpoints.down("sm")),i=c?45:60,o=35,l=c?10:100,s=c?5:20,b=Object(S.useState)(C.h),u=Object(_.a)(b,2),j=u[0],d=u[1],h=Object(S.useState)(C.f),g=Object(_.a)(h,2),m=g[0],O=g[1],f=Object(S.useState)(C.j),p=Object(_.a)(f,2),x=p[0],k=p[1];function z(e,t){return function(n){for(var r=n.fromRow,a=n.toRow,c=n.updated,i=e.rows.slice(),o=r;o<=a;o++)i[o]=Object(w.a)(Object(w.a)({},i[o]),c);t(Object(w.a)(Object(w.a)({},e),{},{rows:i}))}}var q=function(e){return function(){var t=j.columns.slice(),n=j.rows.slice(),r=m.columns.slice(),a=m.rows.slice(),c=x.columns.slice(),i=x.rows.slice();if(e){t.push(Object(C.b)(t.length)),n.push(Object(C.c)(j.columns.length));for(var o=0;o<n.length;o++)n[o]["col_".concat(t.length)]=0;r.push(Object(C.b)(r.length)),a[0]["col_".concat(r.length)]=0,c.push(Object(C.b)(c.length)),i[0]["col_".concat(c.length)]=0}else{if(2===t.length)return;n.pop();for(var l=0;l<i.length;l++)delete i[l]["col_".concat(c.length)];for(var s=0;s<n.length;s++)delete n[s]["col_".concat(t.length)];t.pop();for(var b=0;b<a.length;b++)delete a[b]["col_".concat(r.length)];r.pop(),c.pop()}d({columns:t,rows:n}),O({columns:r,rows:a}),k({columns:c,rows:i})}},J=Object(S.useState)(2e-4),V=Object(_.a)(J,2),D=V[0],K=V[1],ne=!1,re="";D<0&&(ne=!0,re="Threshold cannot be negative!");var se=ne,be=!1,ue=!1,je="",de=Object(C.e)(j.rows),he=Object(C.e)(x.rows)[0],ge=Object(C.e)(m.rows)[0],me=Object(C.a)(ge),Oe=j.rows.length,fe=[],pe=1,xe=!1;se||function(){be=!0;var e=!1,t=Object(C.a)(de),n=Object(C.a)(he);if(console.log("Original: ",t),Object(C.k)(t))console.log("Initially dominant!"),e=!0;else{console.log("Initially not dominant!");var r=C.n[Oe],a=Object(v.a)(Array(Oe).keys());console.log("Start indexes",a);for(var c=0;c<r-1;c++){Object(C.m)(a),console.log("Indexes",a);var i=a.map((function(e){return t[e]}));if(Object(C.k)(i)){e=!0,t=i,n=a.map((function(e){return n[e]})),console.log("Found a dominant!",t,n,a);break}}e?fe.push({newMatrix:Object(C.a)(t),newOutput:Object(C.a)(n),newInput:Object(C.a)(me),permutated:!0,rowIndexes:a}):(console.log("Tried permutating but failed!"),xe=!0)}if(e){console.log("Solve Dominant!");for(var o=0,l=function(){for(var e=0===o?ge:fe[o-1].newInput,r=[],a=0;a<Oe;a++){for(var c=n[a],i=0;i<Oe;i++)i!==a&&(c-=t[a][i]*e[i]);c/=t[a][a],r.push(c)}for(var l=r.map((function(t,n){return Math.abs(t-e[n])})),s=!0,b=0;b<Oe;b++)if(l[b]>=D){s=!1;break}return fe.push({oldInput:e,newInput:r,errorInput:l,converged:s}),o++,s?(console.log("Converged"),"break"):o>1e3?(console.log("Exceeded 1000 iterations!"),ue=!0,je="Exceeded 1000 iterations! Try increasing the error threshold.","break"):void 0};;){if("break"===l())break}pe=o+1}}(),console.log(fe);var ye=Object(S.useState)(!1),ve=Object(_.a)(ye,2),we=ve[0],_e=ve[1],ke={originalMatrix:de,originalInput:ge,originalOutput:he,matrixSize:Oe,errorThreshold:D,iterations:pe,exceedIterError:ue,exceedIterErrorText:je,results:fe,triedPermutating:xe};return Object(ce.jsxs)(ce.Fragment,{children:[Object(ce.jsx)(I.a,{methodName:t}),Object(ce.jsxs)(R.a,{className:n.paper,children:[Object(ce.jsx)(T.a,{className:n.container,children:Object(ce.jsxs)($.c,{duration:500,triggerOnce:!0,cascade:!0,children:[Object(ce.jsxs)(N.a,{variant:"body1",children:["This method is applied to matrices in the form of",Object(ce.jsx)(B.a,{math:String.raw(r||(r=Object(y.a)([" Ax=B"],["\\ Ax=B"])))}),". ",Object(ce.jsx)(A.a,{rel:"noopener noreferrer",href:"https://people.richland.edu/james/lecture/m116/matrices/pivot.html",target:"_blank","aria-label":"Pivoting",children:"Pivoting"}),"\xa0 bla bla bla. Warning: 7x7 matrix, factorial, 7! * 7*7"]}),Object(ce.jsx)(H.a,{container:!0,spacing:1,direction:"row",alignItems:"center",justify:"center",children:Object(ce.jsx)(H.a,{xs:!0,item:!0,children:Object(ce.jsx)(E.a,{className:n.card,children:Object(ce.jsx)(M.a,{className:n.cardContent,children:Object(ce.jsxs)(H.a,{container:!0,spacing:1,direction:"column",alignItems:"center",justify:"center",children:[Object(ce.jsxs)(H.a,{xs:!0,item:!0,className:"matrix-size-input",container:!0,spacing:1,direction:"row",alignItems:"center",justify:"center",children:[Object(ce.jsx)(N.a,{variant:"subtitle1",children:"Size:\xa0\xa0\xa0\xa0\xa0"}),Object(ce.jsx)(W.a,{variant:"contained",color:"primary",onClick:q(!1),children:Object(ce.jsx)(P.a,{color:"error"})}),Object(ce.jsx)(W.a,{variant:"contained",color:"primary",onClick:q(!0),children:Object(ce.jsx)(F.a,{})})]}),Object(ce.jsxs)(H.a,{xs:!0,item:!0,className:"matrix-input",container:!0,spacing:1,direction:"column",alignItems:"center",justify:"center",children:[Object(ce.jsx)(H.a,{xs:!0,item:!0,children:Object(ce.jsx)(N.a,{variant:"h6",children:"Matrix, A:"})}),Object(ce.jsx)(H.a,{xs:!0,item:!0,container:!0,spacing:0,direction:"row",alignItems:"center",justify:"center",children:Object(ce.jsx)(H.a,{item:!0,className:n.overflow,children:Object(ce.jsx)(ae.a,{columns:j.columns,rowGetter:function(e){return j.rows[e]},rowsCount:j.rows.length,onGridRowsUpdated:z(j,d),enableCellSelect:!0,headerRowHeight:1,minColumnWidth:i,minWidth:i*j.columns.length+l,rowHeight:o,minHeight:o*j.rows.length+s})},Math.random())})]}),Object(ce.jsxs)(H.a,{xs:!0,item:!0,className:"input-col-input",container:!0,spacing:1,direction:"column",alignItems:"center",justify:"center",children:[Object(ce.jsx)(H.a,{xs:!0,item:!0,children:Object(ce.jsxs)(N.a,{variant:"h6",children:["Initial Input, ",Object(ce.jsx)(B.a,{math:String.raw(a||(a=Object(y.a)(["X^{(0)}"])))}),":"]})}),Object(ce.jsx)(H.a,{xs:!0,item:!0,container:!0,spacing:0,direction:"row",alignItems:"center",justify:"center",children:Object(ce.jsx)(H.a,{item:!0,className:n.overflow,children:Object(ce.jsx)(ae.a,{columns:m.columns,rowGetter:function(e){return m.rows[e]},rowsCount:m.rows.length,onGridRowsUpdated:z(m,O),enableCellSelect:!0,headerRowHeight:1,minColumnWidth:i,minWidth:i*m.columns.length+l,rowHeight:o,minHeight:o*m.rows.length+s})},Math.random())})]}),Object(ce.jsxs)(H.a,{xs:!0,item:!0,className:"output-col-input",container:!0,spacing:1,direction:"column",alignItems:"center",justify:"center",children:[Object(ce.jsx)(H.a,{xs:!0,item:!0,children:Object(ce.jsx)(N.a,{variant:"h6",children:"Output, B:"})}),Object(ce.jsx)(H.a,{xs:!0,item:!0,container:!0,spacing:0,direction:"row",alignItems:"center",justify:"center",children:Object(ce.jsx)(H.a,{item:!0,className:n.overflow,children:Object(ce.jsx)(ae.a,{columns:x.columns,rowGetter:function(e){return x.rows[e]},rowsCount:x.rows.length,onGridRowsUpdated:z(x,k),enableCellSelect:!0,headerRowHeight:1,minColumnWidth:i,minWidth:i*x.columns.length+l,rowHeight:o,minHeight:o*x.rows.length+s})},Math.random())})]}),Object(ce.jsx)(H.a,{xs:!0,item:!0,className:"errorThreshold-input",children:Object(ce.jsx)(E.a,{className:n.card,children:Object(ce.jsxs)(M.a,{className:n.cardContent,children:[Object(ce.jsx)(N.a,{variant:"h6",children:"Error threshold:"}),Object(ce.jsx)(G.a,{disabled:!1,type:"number",onChange:function(e){return K(parseFloat(e.target.value))},error:ne,label:ne?"Error":"",defaultValue:D.toString(),helperText:re,variant:"outlined"})]})})})]})})})})})]})}),Object(ce.jsx)(X.a,{})]}),Object(ce.jsx)(Z.a,{in:be,children:Object(ce.jsx)($.a,{triggerOnce:!0,children:Object(ce.jsx)(R.a,{className:n.paper,children:be&&Object(ce.jsx)(le,{smallScreen:c,params:ke})})})}),Object(ce.jsx)(U.a,{arrow:!0,title:"Help",placement:"top",children:Object(ce.jsx)(L.a,{color:"secondary","aria-label":"help",className:n.fab,onClick:function(){_e(!0)},children:Object(ce.jsx)(Q.a,{})})}),Object(ce.jsx)(Y.a,{scrollToFirstStep:!0,run:we,steps:ie,continuous:!0,showSkipButton:!0,locale:{last:"End tour"},callback:function(e){"reset"!==e.action&&"close"!==e.action||_e(!1)}})]})}}}]);
//# sourceMappingURL=10.5d168b67.chunk.js.map