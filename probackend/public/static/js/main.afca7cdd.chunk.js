(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(24),c=a.n(r),i=(a(60),a(4)),l=a(5),s=a(7),u=a(6),m=a(3),h=a(8),d=a(10),p=a(21),g=(a(32),a(51),a(33)),E=a.n(g),b=E.a.create();b.defaults.headers.common["cache-control"]="no-cache",b.defaults.headers.post["Content-Type"]="no-cache",b.defaults.headers.put["Content-Type"]="no-cache";var f=E.a.create();f.defaults.headers.common["cache-control"]="no-cache",f.defaults.headers.post["Content-Type"]="no-cache",f.defaults.headers.put["Content-Type"]="no-cache";var v=function(e){f.defaults.headers.common.Authorization="Bearer ".concat(e)},C=function(e){f.interceptors.response.use(function(e){return e},function(t){if(t.response)switch(console.log(t.response.status),t.response.status){case 401:e(t.response.data)}else t.request?console.log(t.request):console.log(t);return Promise.reject(t)})},k=b,O=f,j=function(){try{return localStorage.setItem("t","t"),localStorage.removeItem("t"),!0}catch(e){return!1}}(),y=function(e){return j?localStorage.getItem(e):null},S=a(25);function N(e){return Object(S.b)(e,{stiffness:330,damping:22})}N(0),N(.8),N(1),N(1);var P=function(e){return{opacity:e.opacity,transform:"translateX(".concat(e.offset,"px)")}};function M(e){return Object(S.b)(e,{stiffness:174,damping:19})}var I={atEnter:{offset:200,opacity:0},atLeave:{offset:M(-100),opacity:M(0)},atActive:{offset:M(0),opacity:M(1)}},B=a(20),L=function(e){var t=e.component,a=e.auth,n=Object(B.a)(e,["component","auth"]);return o.a.createElement(p.b,Object.assign({},n,{render:function(e){return a.logged?o.a.createElement(t,Object.assign({},e,{auth:a})):o.a.createElement(p.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},w=a(2),H=(a(91),function(e){var t=e.to,a=e.children;Object(B.a)(e,["to","children"]);return o.a.createElement(d.c,{activeClassName:"activeNav",exact:!0,to:t},a)}),A=function(e){var t=e.auth;e.unSetAuth;return console.log(t),t.logged?t.user.permiso?o.a.createElement("nav",null,o.a.createElement(H,{to:"/"},o.a.createElement(w.i,null),"\xa0"),o.a.createElement(H,{to:"/main"},o.a.createElement(w.d,null),"\xa0"),o.a.createElement(H,{to:"/backlog"},o.a.createElement(w.n,null),"\xa0"),o.a.createElement(H,{to:"/menu"},o.a.createElement(w.g,null),"\xa0"),o.a.createElement(H,{to:"/carrito"},o.a.createElement(w.e,null),"\xa0"),o.a.createElement(H,{to:"/ordenes"},o.a.createElement(w.o,null),"\xa0")):o.a.createElement("nav",null,o.a.createElement(H,{to:"/"},o.a.createElement(w.i,null),"\xa0"),o.a.createElement(H,{to:"/main"},o.a.createElement(w.d,null),"\xa0"),o.a.createElement(H,{to:"/menu"},o.a.createElement(w.g,null),"\xa0"),o.a.createElement(H,{to:"/carrito"},o.a.createElement(w.e,null),"\xa0"),o.a.createElement(H,{to:"/ordenes"},o.a.createElement(w.o,null),"\xa0")):o.a.createElement("nav",null,o.a.createElement(H,{to:"/login"},o.a.createElement(w.l,null),"\xa0"),o.a.createElement(H,{to:"/signin"},o.a.createElement(w.k,null),"\xa0"))},D=a(18),T=a.n(D),z=(a(93),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("button",{className:["btn",this.props.customClass||""].join(" "),onClick:this.props.onClick||function(){}},this.props.caption||this.props.children||"Bot\xf3n")}}]),t}(n.Component)),_=(a(94),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"home"},o.a.createElement("h1",null,"Pollos Vimart"),o.a.createElement("section",{className:"main"},o.a.createElement("img",{src:"https://i.imgur.com/8kU7Mt2.jpg"}),o.a.createElement("div",null,"\xa0"),this.props.auth.logged?o.a.createElement("div",{className:"half"},o.a.createElement(z,{customClass:"primary",onClick:function(t){e.props.setUnAuth(!1)}},o.a.createElement(w.m,null),"\xa0Logout")):null))}}]),t}(n.Component)),x=a(14),R=a(15),F=(a(46),a(47),function(e){var t=e.caption,a=e.type,n=e.value,r=e.name,c=e.onChange;Object(B.a)(e,["caption","type","value","name","onChange"]);return o.a.createElement("fieldset",null,o.a.createElement("legend",null,t),o.a.createElement("input",{type:a||"text",value:n||"",name:r,onChange:c||function(){}}))}),U=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={email:"",source:[],password:"",redirect:!1,error:null},e.onChangeHandler=e.onChangeHandler.bind(Object(m.a)(e)),e.onSiginBtnClick=e.onSiginBtnClick.bind(Object(m.a)(e)),e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"onChangeHandler",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(R.a)({},this.state,Object(x.a)({},a,n)))}},{key:"onSiginBtnClick",value:function(e){var t=this;console.log(this.state),k.post("/api/security/login",this.state).then(function(e){var a=e.data;e.status;t.props.setAuth(a.token,a.user),t.setState({redirect:!0,source:a.user})}).catch(function(e){console.log(e),t.setState({error:"Correo o contrase\xf1a incorrectas. Intente de Nuevo"})})}},{key:"render",value:function(){var e=this;if(console.log(this.props),this.state.source.user){if(this.state.redirect)return o.a.createElement(p.a,{to:this.props.location.state?this.props.location.state.from.pathname:"/"})}else if(this.state.redirect)return o.a.createElement(p.a,{to:this.props.location.state?this.props.location.state.from.pathname:"/menu"});return o.a.createElement("section",null,o.a.createElement("h1",{className:"titulo"},"Iniciar Sesi\xf3n"),o.a.createElement("section",{className:"main fix640"},o.a.createElement(F,{caption:"Correo Electr\xf3nico",value:this.state.email,name:"email",onChange:this.onChangeHandler}),o.a.createElement(F,{caption:"Contrase\xf1a",type:"password",value:this.state.password,name:"password",onChange:this.onChangeHandler}),this.state.error?o.a.createElement("div",{className:"error"},this.state.error):null,o.a.createElement("section",{className:"action"},o.a.createElement(z,{caption:"Iniciar Sesi\xf3n",onClick:this.onSiginBtnClick,customClass:"primary"}),o.a.createElement(z,{caption:"Crear Nueva Cuenta",customClass:"link",onClick:function(t){e.props.history.push("/signin")}}))))}}]),t}(n.Component),W=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={email:"",password:"",error:!1},e.onChangeHandler=e.onChangeHandler.bind(Object(m.a)(e)),e.onSiginBtnClick=e.onSiginBtnClick.bind(Object(m.a)(e)),e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"onChangeHandler",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(R.a)({},this.state,Object(x.a)({},a,n)))}},{key:"onSiginBtnClick",value:function(e){var t=this,a=this.state,n=a.email,o=a.password;k.post("/api/security/signin",{email:n,password:o}).then(function(e){var a=e.data;console.log(a),t.props.history.push("/login")}).catch(function(e){console.log(e),t.setState({error:"Error al crear cuenta. Intente nuevamente."})})}},{key:"render",value:function(){var e=this;return o.a.createElement("section",null,o.a.createElement("h1",{className:"titulo"},"Crear Nueva Cuenta"),o.a.createElement("section",{className:"main fix640"},o.a.createElement(F,{caption:"Correo Electr\xf3nico",value:this.state.email,name:"email",onChange:this.onChangeHandler}),o.a.createElement(F,{caption:"Contrase\xf1a",type:"password",value:this.state.password,name:"password",onChange:this.onChangeHandler}),this.state.error?o.a.createElement("div",{className:"error"},this.state.error):null,o.a.createElement("section",{className:"action"},o.a.createElement(z,{caption:"Crear Cuenta",onClick:this.onSiginBtnClick,customClass:"primary"}),o.a.createElement(z,{caption:"Iniciar Sesi\xf3n",customClass:"link",onClick:function(t){e.props.history.push("/login")}}))))}}]),t}(n.Component),V=a(19),q=(a(48),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).Registrar=function(t,a,n){O.post("/api/carrito",{codigoProducto:t,nombreProducto:a,Precio:n}).then(function(e){e.data;console.log("Agregar")}).catch(function(t){console.log(t),e.setState({error:"Error al crear "})})},e.state={things:[],hasMore:!0,page:1,itemsToLoad:10},e.loadMore=e.loadMore.bind(Object(m.a)(e)),e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"loadMore",value:function(e){var t=this,a=this.state.itemsToLoad,n="/api/things/page/".concat(e,"/").concat(a);O.get(n).then(function(n){var o=n.data,r=o.things,c=o.totalThings,i=t.state.things;r.map(function(e){return i.push(e)}),c?t.setState({things:i,hasMore:e*a<c}):t.setState({hasMore:!1})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this,t=this.state.things.map(function(t){return o.a.createElement("div",{className:"thingMenu",key:t._id},o.a.createElement("div",null,o.a.createElement("h1",null,t.nombreProducto),o.a.createElement("h2",null,t.descripcion),o.a.createElement("h2",null,"L. ",t.Precio),o.a.createElement("span",null,o.a.createElement("img",{src:t.img})),o.a.createElement("button",{onClick:e.Registrar.bind(e,t._id,t.nombreProducto,t.Precio,t.by)},o.a.createElement(w.e,{size:"2em"}))))});return o.a.createElement("section",null,o.a.createElement("div",{className:"titulo"},o.a.createElement("h1",null,o.a.createElement(V.b,null),"Combos",o.a.createElement(V.b,null))),o.a.createElement("div",{className:"backlog",ref:function(t){return e.scrollParentRef=t}},o.a.createElement(T.a,{pageStart:0,loadMore:this.loadMore,hasMore:this.state.hasMore,useWindow:!1,getScrollParent:function(){return e.scrollParentRef},loader:o.a.createElement("div",{key:"pbBackLogLoading",className:"thingItem center"},o.a.createElement(w.p,null))},t)))}}]),t}(n.Component)),J=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this))).state={things:[],hasMore:!0,page:1,itemsToLoad:10},a.loadMore=a.loadMore.bind(Object(m.a)(a)),a.handleClick=a.handleClick.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"loadMore",value:function(e){var t=this,a=this.state.itemsToLoad,n="/api/things/page/".concat(e,"/").concat(a,"/NA");O.get(n).then(function(n){var o=n.data,r=o.things,c=o.totalThings,i=t.state.things;r.map(function(e){return i.push(e)}),c?t.setState({things:i,hasMore:e*a<c}):t.setState({hasMore:!1})}).catch(function(e){console.log(e)})}},{key:"handleClick",value:function(e){var t=this,a=this.props.match.params,n={dd:a.dd,type:a.type};O.put("/api/things/".concat(e),n).then(function(e){e.data;t.props.history.goBack()}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this,t=this.state.things.map(function(t){return o.a.createElement("div",{className:"thingItem",key:t._id},o.a.createElement("span",null,t.descripcion),o.a.createElement("span",{className:"updateThing",onClick:function(){e.handleClick(t._id)}},o.a.createElement(w.a,{size:"2em"})))});return t.length||t.push(o.a.createElement("div",{className:"thingItem",key:"pbBackLogAddOne"},o.a.createElement("span",null,"Nuevo Combo"),o.a.createElement(d.b,{to:"/detailadd"},o.a.createElement(w.q,{size:"2.5em"})))),o.a.createElement("section",null,o.a.createElement("h1",null,"Agregar Combo al Menu"),o.a.createElement("div",{className:"backlog",ref:function(t){return e.scrollParentRef=t}},o.a.createElement(T.a,{pageStart:0,loadMore:this.loadMore,hasMore:this.state.hasMore,useWindow:!1,getScrollParent:function(){return e.scrollParentRef},loader:o.a.createElement("div",{key:"pbBackLogLoading",className:"thingItem center"},o.a.createElement(w.p,null))},t)))}}]),t}(n.Component),G=(a(95),a(27));var K=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).displayMarkers=function(){return a.state.stores.map(function(e,t){return o.a.createElement(G.Marker,{key:t,id:t,position:{lat:e.latitude,lng:e.longitude},onClick:function(){return console.log("You clicked me!")}})})},a.state={stores:[{latitude:14.0531769,longitude:-87.2276354}]},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Mapa"},o.a.createElement("div",null,o.a.createElement("h1",null,"\xbfD\xf3nde Estamos?")),o.a.createElement(G.Map,{google:this.props.google,zoom:14,initialCenter:{lat:14.0531769,lng:-87.2276354}},this.displayMarkers()))}}]),t}(n.Component),Q=Object(G.GoogleApiWrapper)({apiKey:"AIzaSyCWdgUnSVJutaBRgr4MXiaQQlL_0DGK3-4"})(K),X=(a(50),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={things:[],hasMore:!0,page:1,itemsToLoad:10},e.loadMore=e.loadMore.bind(Object(m.a)(e)),e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"loadMore",value:function(e){var t=this,a=this.state.itemsToLoad,n="/api/things/page/".concat(e,"/").concat(a);O.get(n).then(function(n){var o=n.data,r=o.things,c=o.totalThings,i=t.state.things;r.map(function(e){return i.push(e)}),c?t.setState({things:i,hasMore:e*a<c}):t.setState({hasMore:!1})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this,t=this.state.things.map(function(e){return o.a.createElement("div",{className:"thingBack",key:e._id},o.a.createElement("span",null,e.nombreProducto),o.a.createElement("span",null,"L. ",e.Precio),o.a.createElement("span",null,e.descripcion),o.a.createElement("div",null,o.a.createElement("span",{className:"deleteThing"},o.a.createElement(d.b,{to:"/detailDelete/".concat(e._id)},o.a.createElement(w.h,{size:"2em"}))),o.a.createElement("span",{className:"updateThing"},o.a.createElement(d.b,{to:"/detailupdate/".concat(e._id)},o.a.createElement(w.j,{size:"2em"})))))});return t.length||t.push(o.a.createElement("div",{className:"thingItem",key:"pbBackLogAddOne"},o.a.createElement("span",null,"Nuevo Combo"),o.a.createElement(d.b,{to:"/detailadd"},o.a.createElement(w.q,{size:"2.5em"})))),o.a.createElement("section",null,o.a.createElement("h1",null,o.a.createElement(V.b,null),"Combos",o.a.createElement("span",{className:"addThing"},o.a.createElement(d.b,{to:"/detailadd"},o.a.createElement(w.q,{size:"1.5em"})))),o.a.createElement("div",{className:"backlog",ref:function(t){return e.scrollParentRef=t}},o.a.createElement(T.a,{pageStart:0,loadMore:this.loadMore,hasMore:this.state.hasMore,useWindow:!1,getScrollParent:function(){return e.scrollParentRef},loader:o.a.createElement("div",{key:"pbBackLogLoading",className:"thingItem center"},o.a.createElement(w.p,null))},t)))}}]),t}(n.Component)),Y=(a(108),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).getDataFromDb=function(){O.get("/api/carrito").then(function(t){var a=t.data;console.log(a),e.setState({things:a});var n=e.state.things,o=0,r=0,c=0,i=0;n.map(function(t){i=r=parseInt(t.Precio)*parseInt(t.total),o+=r,c=parseFloat(.15*o).toFixed(2),i=(parseFloat(o)+parseFloat(c)).toFixed(2),e.setState({subtotal:o.toFixed(2),ISV:c,total:i})})})},e.ordenes=function(){O.post("/api/ordenes").then(function(e){e.data;console.log("Enviado")}).catch(function(t){console.log(t),e.setState({error:"Error al crear "})})},e.delete=function(t){console.log(t),O.delete("/api/carrito/".concat(t)).then(function(e){e.data;console.log("eliminado")}).catch(function(t){console.log(t),e.setState({error:"Error al crear "})})},e.state={things:[],facts:[],hasMore:!0,page:1,intervalIsSet:!1,itemsToLoad:10},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){if(this.getDataFromDb(),!this.state.intervalIsSet){var e=setInterval(this.getDataFromDb,1e3);this.setState({intervalIsSet:e})}}},{key:"componentWillUnmount",value:function(){this.state.intervalIsSet&&(clearInterval(this.state.intervalIsSet),this.setState({intervalIsSet:null}))}},{key:"render",value:function(){var e=this,t=this.state.things;return o.a.createElement("section",{className:"Ordenar"},o.a.createElement("div",null,o.a.createElement("h1",null,"Ordenes ")),o.a.createElement("section",null,t.length<=0?"Carrito Vacio":t.map(function(t){return o.a.createElement("div",{className:"thingStiff",key:t._id},o.a.createElement("span",null," ",t.total),o.a.createElement("span",null," ",t.nombreProducto),o.a.createElement("span",null," L. ",t.Precio),o.a.createElement(V.a,{onClick:e.delete.bind(e,t.codigoProducto),size:"2em"}))}),t.length<=0?o.a.createElement("div",{className:"Detalles"},o.a.createElement("div",null," ",o.a.createElement("span",null,"Sub L. 0")),o.a.createElement("div",null,o.a.createElement("span",null,"ISV L. 0")),o.a.createElement("div",null," ",o.a.createElement("span",null,"Total L. 0"))):o.a.createElement("div",{className:"Detalles"},o.a.createElement("div",null," ",o.a.createElement("span",null,"Sub L. ",this.state.subtotal)),o.a.createElement("div",null,o.a.createElement("span",null,"ISV L. ",this.state.ISV)),o.a.createElement("div",null," ",o.a.createElement("span",null,"Total L. ",this.state.total))),t.length<=0?"":o.a.createElement("div",{className:"ButtonPay"},o.a.createElement("button",{onClick:this.ordenes},o.a.createElement(w.f,{size:"2em"})))))}}]),t}(n.Component)),$=(a(109),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).getDataFromDb=function(){O.get("/api/ordenes").then(function(t){var a=t.data;console.log(a),e.setState({things:a})})},e.state={things:[],hasMore:!0,page:1,intervalIsSet:!1,itemsToLoad:10},e.addNotification=e.addNotification.bind(Object(m.a)(e)),e.notificationDOMRef=o.a.createRef(),e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"addNotification",value:function(){this.notificationDOMRef.current.addNotification({title:"Notificacion",message:"Pedido Aceptado!",type:"success",insert:"top",container:"bottom-right",animationIn:["animated","fadeIn"],animationOut:["animated","fadeOut"],dismiss:{duration:2e3},dismissable:{click:!0}})}},{key:"componentDidMount",value:function(){if(this.getDataFromDb(),!this.state.intervalIsSet){var e=setInterval(this.getDataFromDb,2e3);this.setState({intervalIsSet:e})}}},{key:"componentWillUnmount",value:function(){this.state.intervalIsSet&&(clearInterval(this.state.intervalIsSet),this.setState({intervalIsSet:null}))}},{key:"logout",value:function(e){localStorage.clear(),window.location.href="/"}},{key:"render",value:function(){var e=this.state.things;return o.a.createElement("section",null,o.a.createElement("h1",null,"Ordenes"),o.a.createElement("section",null,e.length<=0?"No tiene ningun pedido":e.map(function(e){return o.a.createElement("div",{className:"Contenedor",key:e._id},o.a.createElement("div",null,o.a.createElement("span",null,"Pedido: ",e._id)),o.a.createElement("div",null,o.a.createElement("span",null,"Estado de la orden: ",e.estadoFactura)))})))}}]),t}(n.Component)),Z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this))).state={things:[],hasMore:!0,page:1,itemsToLoad:10},a.loadMore=a.loadMore.bind(Object(m.a)(a)),a.handleClick=a.handleClick.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"loadMore",value:function(e){var t=this,a=this.state.itemsToLoad,n="/api/things/page/".concat(e,"/").concat(a,"/NA");O.get(n).then(function(n){var o=n.data,r=o.things,c=o.totalThings,i=t.state.things;r.map(function(e){return i.push(e)}),c?t.setState({things:i,hasMore:e*a<c}):t.setState({hasMore:!1})}).catch(function(e){console.log(e)})}},{key:"handleClick",value:function(e){var t=this,a=this.props.match.params,n={dd:a.dd,type:a.type};O.put("/api/things/".concat(e),n).then(function(e){e.data;t.props.history.goBack()}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this,t=this.state.things.map(function(t){return o.a.createElement("div",{className:"thingItem",key:t._id},o.a.createElement("span",null,t.descripcion),o.a.createElement("span",{className:"updateThing",onClick:function(){e.handleClick(t._id)}},o.a.createElement(w.a,{size:"2em"})))});return t.length||t.push(o.a.createElement("div",{className:"thingItem",key:"pbBackLogAddOne"},o.a.createElement("span",null,"Nuevo Combo"),o.a.createElement(d.b,{to:"/detailadd"},o.a.createElement(w.q,{size:"2.5em"})))),o.a.createElement("section",null,o.a.createElement("h1",null,"Agregar Combo al Menu"),o.a.createElement("div",{className:"backlog",ref:function(t){return e.scrollParentRef=t}},o.a.createElement(T.a,{pageStart:0,loadMore:this.loadMore,hasMore:this.state.hasMore,useWindow:!1,getScrollParent:function(){return e.scrollParentRef},loader:o.a.createElement("div",{key:"pbBackLogLoading",className:"thingItem center"},o.a.createElement(w.p,null))},t)))}}]),t}(n.Component),ee=(a(31),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={nombreProducto:"",Precio:"",descripcion:"",img:"",error:!1},e.onChangeHandler=e.onChangeHandler.bind(Object(m.a)(e)),e.onSaveBtnClick=e.onSaveBtnClick.bind(Object(m.a)(e)),e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"onChangeHandler",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(R.a)({},this.state,Object(x.a)({},a,n)))}},{key:"onSaveBtnClick",value:function(e){var t=this,a=this.state,n=a.nombreProducto,o=a.Precio,r=a.descripcion,c=a.img;O.post("/api/things",{nombreProducto:n,Precio:o,descripcion:r,img:c}).then(function(e){e.data;t.props.history.goBack()}).catch(function(e){console.log(e),t.setState({error:"Error al crear nuevo combo"})})}},{key:"render",value:function(){var e=this;return o.a.createElement("section",null,o.a.createElement("h1",{className:"titulo"},"Crear Nuevo Combo"),o.a.createElement("section",{className:"main fix640"},o.a.createElement(F,{caption:"nombreProducto",value:this.state.nombreProducto,name:"nombreProducto",onChange:this.onChangeHandler}),o.a.createElement("br",null),o.a.createElement(F,{caption:"Precio",value:this.state.Precio,name:"Precio",onChange:this.onChangeHandler}),o.a.createElement("br",null),o.a.createElement(F,{caption:"Descripci\xf3n",value:this.state.descripcion,name:"descripcion",onChange:this.onChangeHandler}),o.a.createElement(F,{caption:"Imagen",value:this.state.img,name:"img",onChange:this.onChangeHandler}),o.a.createElement("br",null),this.state.error?o.a.createElement("div",{className:"error"},this.state.error):null,o.a.createElement("section",{className:"action"},o.a.createElement(z,{caption:"Crear Combo",onClick:this.onSaveBtnClick,customClass:"primary"}),o.a.createElement("br",null),o.a.createElement(z,{caption:"Cancelar",customClass:"secondary",onClick:function(t){e.props.history.goBack()}}))))}}]),t}(n.Component)),te=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={nombreProducto:"",Precio:"",descripcion:"",img:"",error:!1},e.onChangeHandler=e.onChangeHandler.bind(Object(m.a)(e)),e.onSaveBtnClick=e.onSaveBtnClick.bind(Object(m.a)(e)),e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params,a="/api/things/".concat(t.id);O.get(a).then(function(t){var a=t.data;e.setState(Object(R.a)({},a))}).catch(function(t){e.setState({error:"No se pudo cargar el combo."})})}},{key:"onChangeHandler",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(R.a)({},this.state,Object(x.a)({},a,n)))}},{key:"onSaveBtnClick",value:function(e){var t=this,a=this.state,n=a.nombreProducto,o=a.Precio,r=a.descripcion,c=a.img,i=a._id;O.put("/api/things/".concat(i),{nombreProducto:n,Precio:o,descripcion:r,img:c}).then(function(e){e.data;t.props.history.push("/backlog")}).catch(function(e){console.log(e),t.setState({error:"Error al actualizar el combo"})})}},{key:"render",value:function(){var e=this;return console.log(this.state),o.a.createElement("section",null,o.a.createElement("h1",{className:"titulo"},"Mantenimiento Combos"),o.a.createElement("section",{className:"main fix640"},o.a.createElement(F,{caption:"Nombre",value:this.state.nombreProducto,name:"Nombre",onChange:this.onChangeHandler}),o.a.createElement("br",null),o.a.createElement(F,{caption:"nombreProducto",value:this.state.Precio,name:"nombreProducto",onChange:this.onChangeHandler}),o.a.createElement("br",null),o.a.createElement(F,{caption:"Descripci\xf3n",value:this.state.descripcion,name:"descripcion",onChange:this.onChangeHandler}),o.a.createElement(F,{caption:"Imagen",value:this.state.img,name:"img",onChange:this.onChangeHandler}),o.a.createElement("br",null),this.state.error?o.a.createElement("div",{className:"error"},this.state.error):null,o.a.createElement("section",{className:"action"},o.a.createElement(z,{caption:"Actualizar Combo",onClick:this.onSaveBtnClick,customClass:"primary"}),o.a.createElement("br",null),o.a.createElement(z,{caption:"Cancelar",customClass:"secondary",onClick:function(t){e.props.history.push("/backlog")}}))))}}]),t}(n.Component),ae=function(e){var t=e.caption,a=e.type,n=e.readOnly,r=e.value,c=e.name,i=e.onChange;Object(B.a)(e,["caption","type","readOnly","value","name","onChange"]);return o.a.createElement("fieldset",null,o.a.createElement("legend",null,t),o.a.createElement("input",{type:a||"text",readOnly:n||"readOnly",value:r||"",name:c,onChange:i||function(){}}))},ne=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={nombreProducto:"",Precio:"",descripcion:"",img:"",error:!1},e.onChangeHandler=e.onChangeHandler.bind(Object(m.a)(e)),e.onSaveBtnClick=e.onSaveBtnClick.bind(Object(m.a)(e)),e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params,a="/api/things/".concat(t.id);O.get(a).then(function(t){var a=t.data;e.setState(Object(R.a)({},a))}).catch(function(t){e.setState({error:"No se pudo cargar el combo."})})}},{key:"onChangeHandler",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(R.a)({},this.state,Object(x.a)({},a,n)))}},{key:"onSaveBtnClick",value:function(e){var t=this,a=this.state,n=a.nombreProducto,o=a.Precio,r=a.descripcion,c=a.img,i=a._id;O.delete("/api/things/".concat(i),{nombreProducto:n,Precio:o,descripcion:r,img:c}).then(function(e){e.data;t.props.history.push("/backlog")}).catch(function(e){console.log(e),t.setState({error:"Error al Eliminar el combo"})})}},{key:"render",value:function(){var e=this;return console.log(this.state),o.a.createElement("section",null,o.a.createElement("h1",{className:"titulo"},"Eliminar Combos"),o.a.createElement("section",{className:"main fix640"},o.a.createElement(ae,{caption:"nombreProducto",value:this.state.nombreProducto,name:"nombreProducto",onChange:this.onChangeHandler}),o.a.createElement("br",null),o.a.createElement(ae,{caption:"Precio",value:this.state.Precio,name:"Precio",onChange:this.onChangeHandler}),o.a.createElement("br",null),o.a.createElement(ae,{caption:"Descripci\xf3n",value:this.state.descripcion,name:"descripcion",onChange:this.onChangeHandler}),o.a.createElement(ae,{caption:"Imagen",value:this.state.img,name:"img",onChange:this.onChangeHandler}),o.a.createElement("br",null),this.state.error?o.a.createElement("div",{className:"error"},this.state.error):null,o.a.createElement("section",{className:"action"},o.a.createElement(z,{caption:"Eliminar Combo",onClick:this.onSaveBtnClick,customClass:"primary"}),o.a.createElement("br",null),o.a.createElement(z,{caption:"Cancelar",customClass:"secondary",onClick:function(t){e.props.history.push("/backlog")}}))))}}]),t}(n.Component),oe=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={auth:JSON.parse(y("auth"))||{logged:!1,token:!1,user:{}}},e.setAuth=e.setAuth.bind(Object(m.a)(e)),e.setUnAuth=e.setUnAuth.bind(Object(m.a)(e)),v(e.state.auth.token),C(e.setUnAuth),e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"setUnAuth",value:function(e){this.setAuth(!1,{})}},{key:"setAuth",value:function(e,t){v(e);var a,n,o={logged:e&&!0,token:e,user:t};a="auth",n=JSON.stringify(o),j&&localStorage.setItem(a,n),this.setState({auth:o})}},{key:"render",value:function(){var e=this;return o.a.createElement(d.a,null,o.a.createElement("section",{className:"container"},o.a.createElement(S.a,Object.assign({},I,{mapStyles:P,className:"switch-wrapper"}),o.a.createElement(p.b,{path:"/",exact:!0,render:function(t){return o.a.createElement(_,Object.assign({},t,{auth:e.state.auth,setUnAuth:e.setUnAuth}))}}),o.a.createElement(p.b,{path:"/login",render:function(t){return o.a.createElement(U,Object.assign({},t,{auth:e.state.auth,setAuth:e.setAuth}))}}),o.a.createElement(p.b,{path:"/signin",component:W}),o.a.createElement(L,{path:"/main",auth:this.state.auth,component:Q}),o.a.createElement(L,{path:"/menu",auth:this.state.auth,component:q}),o.a.createElement(L,{path:"/menuadd/:type/:dd",auth:this.state.auth,component:J}),o.a.createElement(L,{path:"/carrito",auth:this.state.auth,component:Y}),o.a.createElement(L,{path:"/ordenes",auth:this.state.auth,component:$}),o.a.createElement(L,{path:"/backlog",auth:this.state.auth,component:X}),o.a.createElement(L,{path:"/backlogadd/:type/:dd",auth:this.state.auth,component:Z}),o.a.createElement(L,{path:"/detailadd",auth:this.state.auth,component:ee}),o.a.createElement(L,{path:"/detailupdate/:id",auth:this.state.auth,component:te}),o.a.createElement(L,{path:"/detaildelete/:id",auth:this.state.auth,component:ne})),o.a.createElement(A,{auth:this.state.auth})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(oe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},31:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){},55:function(e,t,a){e.exports=a(110)},60:function(e,t,a){},91:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){}},[[55,1,2]]]);
//# sourceMappingURL=main.afca7cdd.chunk.js.map