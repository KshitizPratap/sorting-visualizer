(this.webpackJsonpvisualiser=this.webpackJsonpvisualiser||[]).push([[0],{16:function(e,n,t){},17:function(e,n,t){},18:function(e,n,t){},20:function(e,n,t){},21:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),s=t(11),c=t.n(s),i=(t(16),t(4)),u=t(5),o=t(8),l=t(7),h=(t(17),t(10)),p=t(2),f=function(e){var n=[];return e.length<=1?e:(v(Object(p.a)(e),0,e.length-1,n),n)};function v(e,n,t,a){if(n<t){var r=Math.floor(n+(t-n)/2);v(e,n,r,a),v(e,r+1,t,a),function(e,n,t,a,r){for(var s=[],c=[],i=t-n+1,u=a-t,o=0;o<i;o++)s[o]=e[n+o];for(var l=0;l<u;l++)c[l]=e[t+1+l];var h=0,p=0,f=n;for(;h<i&&p<u;){var v={a:n+h,b:t+1+p};if(r.push(v),r.push(v),s[h]<=c[p]){e[f]=s[h];var j={k:f,p:s[h]};r.push(j),h++}else{e[f]=c[p];var b={k:f,p:c[p]};r.push(b),p++}f++}for(;h<i;){var d={a:n+h,b:-2};r.push(d),r.push(d);var O={k:f,p:s[h]};r.push(O),e[f++]=s[h++]}for(;p<u;){var g={a:t+1+p,b:-1};r.push(g),r.push(g);var m={k:f,p:c[p]};r.push(m),e[f++]=c[p++]}}(e,n,r,t,a)}}function j(e){var n=[];return b(Object(p.a)(e),0,e.length-1,n),n}function b(e,n,t,a){if(n<t){var r=function(e,n,t,a){var r=e[n],s=n-1,c=t+1;for(;;){do{s++,a.push([s,n]),a.push([s,n])}while(e[s]<r);do{c--,a.push([c,n]),a.push([c,n])}while(e[c]>r);if(s>=c)return c;a.push([s,c,e[s],e[c]]);var i=e[s];e[s]=e[c],e[c]=i}}(e,n,t,a);b(e,n,r,a),b(e,r+1,t,a)}}function d(e){var n=[];return function(e,n,t){!function(e,n,t){for(var a=(n-2)/2;a>=0;a--)O(e,n,a,t)}(e,n,t);for(var a=n-1;a>=1;a--){t.push([0,a]),t.push([0,a]),t.push([0,a,e[0],e[a]]);var r=e[a];e[a]=e[0],e[0]=r,O(e,a,0,t)}}(Object(p.a)(e),e.length,n),n}function O(e,n,t,a){var r=t,s=2*t+1,c=2*t+2;if(s<n&&e[s]>e[r]){var i=[r,s];r=s,a.push(i),a.push(i)}if(c<n&&e[c]>e[r]){var u=[r,c];r=c,a.push(u),a.push(u)}if(r!==t){var o=[t,r,e[t],e[r]];a.push(o);var l=e[r];e[r]=e[t],e[t]=l,O(e,n,r,a)}}t(18);var g=t(0),m=function(e){return Object(g.jsxs)("div",{className:"containerControl",children:[Object(g.jsxs)("div",{className:"temp",children:[Object(g.jsx)("label",{className:"Clabel",children:"Size"}),Object(g.jsx)("input",{type:"range",min:"50",max:"220",defaultValue:130,onChange:e.sizeChanger})]}),Object(g.jsxs)("div",{className:"temp",children:[Object(g.jsx)("label",{className:"Clabel",children:"Speed"}),Object(g.jsx)("input",{type:"range",min:"2",max:"20",defaultValue:10,onChange:e.speedChanger})]}),Object(g.jsxs)("div",{className:"temp",children:[Object(g.jsx)("label",{className:"Clabel",children:"Color"}),Object(g.jsx)("input",{type:"color",onChange:e.colorChanger})]})]})},x=(t(20),t.p+"static/media/logo.269bfc74.png"),C=(a.Component,function(e){Object(o.a)(t,e);var n=Object(l.a)(t);function t(){return Object(i.a)(this,t),n.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return Object(g.jsx)("div",{children:Object(g.jsx)("h1",{children:"Hello World"})})}}]),t}(a.Component)),k=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,22)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,s=n.getLCP,c=n.getTTFB;t(e),a(e),r(e),s(e),c(e)}))};c.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(C,{})}),document.getElementById("root")),k()}},[[21,1,2]]]);
//# sourceMappingURL=main.a5b4180d.chunk.js.map