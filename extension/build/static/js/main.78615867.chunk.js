(this.webpackJsonpextension=this.webpackJsonpextension||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),l=(n(9),n(1));function i(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),i=Object(l.a)(c,2),u=i[0],s=i[1],m=Object(a.useState)(""),h=Object(l.a)(m,2),d=h[0],w=h[1],f=Object(a.useState)(null),p=Object(l.a)(f,2),v=p[0],b=p[1],E=Object(a.useRef)(null);Object(a.useEffect)((function(){window.chrome.tabs.query({active:!0,currentWindow:!0},(function(e){var t=e[0];w(t.url);var n=new URL(t.url);n.search&&(n.searchParams.get("wpSession")&&(o(!0),s(t.url),b(t.id)))}))}),[]);return n?r.a.createElement("div",null,r.a.createElement("h3",null,"There is a party started!"),r.a.createElement("div",null,r.a.createElement("textarea",{ref:E,value:u}),r.a.createElement("button",{onClick:function(){E.current.select(),document.execCommand("copy")}},"Copy!")),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){var e=new URL(d),t=e.protocol+e.host+e.pathname;window.chrome.tabs.update(v,{url:t}),o(!1)}},"Stop session"))):r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){var e,t,n=new URL(d);t=n.host.includes("amazon")?3:n.host.includes("netflix")?1:0,e=n.pathname.split("/").filter((function(e){return""!==e}))[t];var a,r=String(e)+"-"+String(Math.round((new Date).valueOf()/1e3));a=0==n.search.length?d+"?wpSession="+r:d+"&wpSession="+r,window.chrome.tabs.update(v,{url:a}),s(a),o(!0)}},"Start a party!"))}var u=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome to WatchParty!"),r.a.createElement("h3",null,"Watch  shows with your friends on (almost) any platform!"),r.a.createElement("div",null,r.a.createElement(i,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.78615867.chunk.js.map