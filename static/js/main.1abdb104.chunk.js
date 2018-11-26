(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{154:function(e,t,a){e.exports=a(405)},159:function(e,t,a){},405:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),c=a.n(i),o=(a(159),a(26)),l=a(27),u=a(29),s=a(28),m=a(30),g=a(150),f=a.n(g),p=a(151),h=a.n(p),d=function(){return r.a.createElement(h.a,{title:"Project Gif"})},E=a(152),v=a(95),y=a.n(v),b=a(96),T=a.n(b),O=a(17),w=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.gifs;return e?r.a.createElement(O.GridList,{cols:3,cellHeight:"auto",spacing:6},e.map(function(e){return r.a.createElement(O.GridTile,{key:e.id,title:e.title,subtitle:e.rating},r.a.createElement("img",{src:e.images.downsized_large.url,alt:""}))})):r.a.createElement(O.GridList,{cols:1,cellHeight:"auto"},r.a.createElement(O.GridTile,{key:"TvLuZ00OIADoQ"},r.a.createElement("img",{src:"https://media.giphy.com/media/TvLuZ00OIADoQ/giphy.gif",alt:""})))}}]),t}(n.Component),j=a(56),C=a.n(j),A=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).sort=function(t,a){var n=e.props.updateGifs,r=e.props.gifs;return n("newest"===a?r.sort(function(e,a){return new Date(a[t])-new Date(e[t])}):r.sort(function(e,a){return new Date(e[t])-new Date(a[t])}))},e.filter=function(){var t=e.props.updateGifs,a=e.props.gifs,n=e.props.MPPA,r=a.filter(function(e){return e.rating===n});if(""!==n)return t(r);e.setState({ratingErr:"SELECT A RATING ABOVE THEN CLICK"},function(){setTimeout(function(){e.setState({ratingErr:"FILTER BY RATING"})},3e3)})},e.state={ratingErr:"FILTER BY RATING"},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(C.a,{variant:"outlined",color:"primary",onClick:function(){return e.sort("import_datetime","newest")}},"Newest"),r.a.createElement(C.a,{variant:"outlined",color:"primary",onClick:function(){return e.sort("import_datetime")}},"Oldest"),r.a.createElement(C.a,{variant:"outlined",color:"primary",onClick:function(){return e.sort("trending_datetime","newest")}},"Trending"),r.a.createElement(C.a,{variant:"outlined",color:"primary",onClick:function(){return e.filter()}},this.state.ratingErr))}}]),t}(n.Component),G=a(94),P=a.n(G),k=a(97),L=a.n(k),x=a(21),S=a.n(x),M=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(u.a)(this,Object(s.a)(t).call(this))).componentDidMount=function(){var t=T.a.get("https://api.giphy.com/v1/gifs/trending?&api_key=".concat(y.a,"&limit=24")).then(function(t){return e.setState({gifs:t.data.data})}).catch(function(e){return console.log(e)}).data;e.setState({gifs:t})},e.onSearchChange=function(t){var a=e.state.searchParamaters.replace(" ","+").toLowerCase(),n=e.state.pictureAmount,r=e.state.MPPA;""!==t.target.value?e.setState(Object(E.a)({},t.target.name,t.target.value),function(){T.a.get("https://api.giphy.com/v1/gifs/search?q=".concat(a,"&api_key=").concat(y.a,"&limit=").concat(n,"&rating=").concat(r)).then(function(t){return e.setState({gifs:t.data.data})}).catch(function(e){return console.log(e)})}):e.componentDidMount()},e.onNumberChange=function(t,a,n){e.setState({pictureAmount:n})},e.onRatingChange=function(t,a,n){e.setState({MPPA:n})},e.updateGifs=function(t){e.setState({gifs:t})},e.state={searchParamaters:"",gifs:[],pictureAmount:6,MPPA:""},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(O.GridList,{cols:3,cellHeight:"auto"},r.a.createElement(O.GridTile,null,r.a.createElement(P.a,{name:"searchParamaters",value:this.state.searchText,onChange:this.onSearchChange,floatingLabelText:"Gifs in a Jiffy"})),r.a.createElement(O.GridTile,null,r.a.createElement(L.a,{name:"MPPA-style rating",floatingLabelText:"Rating",value:this.state.MPPA,onChange:this.onRatingChange},r.a.createElement(S.a,{value:"",primaryText:""}),r.a.createElement(S.a,{value:"y",primaryText:"y"}),r.a.createElement(S.a,{value:"g",primaryText:"g"}),r.a.createElement(S.a,{value:"pg",primaryText:"pg"}),r.a.createElement(S.a,{value:"pg-13",primaryText:"pg-13"}),r.a.createElement(S.a,{value:"r",primaryText:"r"}))),r.a.createElement(O.GridTile,null,r.a.createElement(L.a,{name:"pictureAmount",floatingLabelText:"How many gifs?",value:this.state.pictureAmount,onChange:this.onNumberChange},r.a.createElement(S.a,{value:6,primaryText:"6"}),r.a.createElement(S.a,{value:9,primaryText:"9"}),r.a.createElement(S.a,{value:12,primaryText:"12"})))),r.a.createElement(O.GridList,{cellHeight:"auto"},r.a.createElement(O.GridTile,null,r.a.createElement(A,{updateGifs:this.updateGifs,gifs:this.state.gifs,MPPA:this.state.MPPA}))),r.a.createElement(w,{gifs:this.state.gifs}))}}]),t}(n.Component),I=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(M,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},95:function(e,t){e.exports="FCSB7IlSV6tLLJ9bgsRdsi6cMaodneDq"}},[[154,2,1]]]);
//# sourceMappingURL=main.1abdb104.chunk.js.map