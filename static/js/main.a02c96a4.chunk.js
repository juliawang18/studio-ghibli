(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(t,e,a){t.exports=a.p+"static/media/title.eb32498d.jpg"},function(t,e,a){t.exports=a.p+"static/media/castle.4e7a6437.jpg"},function(t,e,a){t.exports=a.p+"static/media/fireflies.67535497.jpg"},function(t,e,a){t.exports=a.p+"static/media/totoro.7f84fb07.jpg"},function(t,e,a){t.exports=a.p+"static/media/kikis.89a84318.jpg"},function(t,e,a){t.exports=a.p+"static/media/yesterday.5a41ebdf.jpg"},function(t,e,a){t.exports=a.p+"static/media/rosso.da31f8fe.jpg"},function(t,e,a){t.exports=a.p+"static/media/pompoko.cb430dc4.jpg"},function(t,e,a){t.exports=a.p+"static/media/whisper.c00ec55a.jpg"},function(t,e,a){t.exports=a.p+"static/media/monoke.09cea881.jpg"},function(t,e,a){t.exports=a.p+"static/media/yamadas.6076f2ac.jpg"},function(t,e,a){t.exports=a.p+"static/media/spiritedaway.6bff4e7c.jpg"},function(t,e,a){t.exports=a.p+"static/media/catreturns.a6793336.jpg"},function(t,e,a){t.exports=a.p+"static/media/howls.394a454d.jpg"},function(t,e,a){t.exports=a.p+"static/media/earthsea.22865f20.jpg"},function(t,e,a){t.exports=a.p+"static/media/ponyo.69f51194.jpg"},function(t,e,a){t.exports=a.p+"static/media/arrietty.a0ef4ef0.jpg"},function(t,e,a){t.exports=a.p+"static/media/poppy.01683124.jpg"},function(t,e,a){t.exports=a.p+"static/media/thewindrises.12b91b94.jpg"},function(t,e,a){t.exports=a.p+"static/media/kaguya.339f6dd3.jpg"},function(t,e,a){t.exports=a.p+"static/media/whenmarnie.2b943213.jpg"},function(t,e,a){t.exports=a(42)},,,,,,function(t,e,a){},,,function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),s=a(8),o=a.n(s),c=(a(37),a(6)),r=a.n(c),p=a(9),l=a(1),m=a(2),d=a(4),u=a(3),f=a(5),h=a(10),g=a.n(h),j=a(11),x=a.n(j),v=a(12),b=a.n(v),y=a(13),w=a.n(y),k=a(14),E=a.n(k),O=a(15),N=a.n(O),I=a(16),B=a.n(I),C=a(17),F=a.n(C),J=a(18),L=a.n(J),W=a(19),D=a.n(W),M=a(20),S=a.n(M),$=a(21),_=a.n($),q=a(22),z=a.n(q),A=a(23),G=a.n(A),H=a(24),K=a.n(H),P=a(25),Q=a.n(P),R=a(26),T=a.n(R),U=a(27),V=a.n(U),X=a(28),Y=a.n(X),Z=a(29),tt=a.n(Z),et=a(30),at=a.n(et),nt=(a(40),a(41),function(t){function e(){return Object(l.a)(this,e),Object(d.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(m.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"film-component"},i.a.createElement("style",null,"@import url('https://fonts.googleapis.com/css?family=Overpass');"),i.a.createElement("img",{className:"pic",src:this.props.pic,alt:"",height:"380",width:"650"}),i.a.createElement("div",{className:"text"},i.a.createElement("div",{className:"title"},this.props.title),i.a.createElement("div",{className:"release-date"},this.props.date),i.a.createElement("div",{className:"description"},this.props.description)))}}]),e}(n.Component)),it=[x.a,b.a,w.a,E.a,N.a,B.a,F.a,L.a,D.a,S.a,_.a,z.a,G.a,K.a,Q.a,T.a,V.a,Y.a,tt.a,at.a],st=[],ot=[],ct=[],rt=[],pt=function(t){function e(t){var a;return Object(l.a)(this,e),(a=Object(d.a)(this,Object(u.a)(e).call(this,t))).state={didLoad:!1},a}return Object(f.a)(e,t),Object(m.a)(e,[{key:"loadInfo",value:function(){var t=Object(p.a)(r.a.mark(function t(){var e,a,n;return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://ghibliapi.herokuapp.com/films");case 2:return e=t.sent,t.next=5,e.json();case 5:for(a=t.sent,n=0;n<20;n++)st[n]=a[n].title,ot[n]=a[n].release_date,ct[n]=a[n].description;this.setState({didLoad:!0});case 8:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.loadInfo()}},{key:"addFilm",value:function(){var t;for(t=0;t<20;t++)rt[t]=[st[t],ot[t],ct[t]]}},{key:"render",value:function(){return i.a.createElement("div",{className:"ghibli-container"},i.a.createElement("style",null,"@import url('https://fonts.googleapis.com/css?family=Overpass');"),i.a.createElement("div",{className:"film title"},i.a.createElement("img",{className:"g-title",alt:"",src:g.a})),i.a.createElement("div",{className:"film list"},this.addFilm(),i.a.createElement("ul",null,rt.map(function(t,e){return i.a.createElement(nt,{pic:it[e],title:rt[e][0],date:rt[e][1],description:rt[e][2]})}))))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(pt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[31,1,2]]]);
//# sourceMappingURL=main.a02c96a4.chunk.js.map