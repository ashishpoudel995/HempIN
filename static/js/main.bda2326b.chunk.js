(this.webpackJsonplsmproject=this.webpackJsonplsmproject||[]).push([[0],{61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),s=a(19),c=a.n(s),r=a(12),l=a(13),o=a(15),d=a(14),h=a.p+"static/media/hempbag.a52b23e8.jpg",j=a.p+"static/media/hemptshirt.e755656f.jpg",b=a.p+"static/media/hemphandbag.4b41b2c9.jpg",p=a.p+"static/media/hempcap.086d0465.jpg",u=a(0),m=[h,p,j,b],x=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={counter:0,image:j},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){var t=e.state,a=t.counter;t.image;e.setState({counter:(a+1)%m.length}),e.setState({image:m[a]})}),3e3);var t=function(e,t,a){this.toRotate=t,this.el=e,this.loopNum=0,this.period=parseInt(a,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};t.prototype.tick=function(){var e=this.loopNum%this.toRotate.length,t=this.toRotate[e];this.isDeleting?this.txt=t.substring(0,this.txt.length-1):this.txt=t.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var a=this,n=300-100*Math.random();this.isDeleting&&(n/=2),this.isDeleting||this.txt!==t?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,n=500):(n=this.period,this.isDeleting=!0),setTimeout((function(){a.tick()}),n)};for(var a=document.getElementsByClassName("txt-rotate"),n=0;n<a.length;n++){var i=a[n].getAttribute("data-rotate"),s=a[n].getAttribute("data-period");i&&new t(a[n],JSON.parse(i),s)}var c=document.createElement("style");c.type="text/css",c.innerHTML=".txt-rotate > .wrap { border-right: 0.08em solid #666 }",document.body.appendChild(c)}},{key:"render",value:function(){var e=this.state,t=(e.counter,e.image);return Object(u.jsxs)("div",{style:{display:"inline"},children:[Object(u.jsxs)("div",{style:{textAlign:"center",marginTop:"10%",fontFamily:"Courier",maxWidth:"100%",minWidth:"60%",float:"left"},children:[Object(u.jsx)("h1",{style:{fontSize:"60px",color:"#e87676"},children:"Why HempIN ?"}),Object(u.jsx)("span",{style:{fontSize:"40px"},className:"txt-rotate","data-period":"2000","data-rotate":'[ "Child Welfare.", "Women Empowerment.", "Web Platform.", "Make In India.", "Environment Friendly." ]'})]}),Object(u.jsx)("div",{className:"ui card",style:{minWidth:"30%",maxWidth:"100%",marginRight:"10%",marginLeft:"15%"},children:Object(u.jsx)("img",{src:t,height:"420px",style:{position:"center"}})})]})}}]),a}(n.Component),O=a(9),g=a(6),f=a.p+"static/media/logo.e6a112c1.png",v=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(r.a)(this,a),t.call(this,e)}return Object(l.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{children:Object(u.jsx)("header",{style:{zIndex:10,width:"100%"},children:Object(u.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light",children:[Object(u.jsx)("a",{className:"navbar-brand",href:"/",style:{marginLeft:"7.5%"},children:Object(u.jsx)("img",{src:f,alt:"HempIN",style:{height:"15vh"}})}),Object(u.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar",children:Object(u.jsx)("span",{class:"navbar-toggler-icon"})}),Object(u.jsx)("div",{className:"collapse navbar-collapse",id:"collapsibleNavbar",children:Object(u.jsxs)("ul",{className:"navbar-nav ml-auto",style:{marginRight:"10%"},children:[Object(u.jsx)("li",{className:"nav-item",style:{fontWeight:"800"},children:Object(u.jsx)(O.b,{className:"nav-link",to:"/",children:"Home"})}),Object(u.jsx)("li",{className:"nav-item",style:{fontWeight:"800"},children:Object(u.jsx)(O.b,{className:"nav-link",to:"/HempIN/products",children:"Products"})}),Object(u.jsx)("li",{className:"nav-item",style:{fontWeight:"800"},children:Object(u.jsx)(O.b,{className:"nav-link",to:"/ourteam",children:"Our Team"})}),Object(u.jsx)("li",{className:"nav-item",style:{fontWeight:"800"},children:Object(u.jsx)(O.b,{className:"nav-link",to:"/contact-us",children:"Contact Us"})})]})})]})})})}}]),a}(n.Component),y=function(e){return e.Team.map((function(e){return Object(u.jsxs)("div",{class:"card",style:{marginLeft:"9%"},children:[Object(u.jsx)("div",{class:"image",children:Object(u.jsx)("img",{src:e.Photo})}),Object(u.jsxs)("div",{class:"content",children:[Object(u.jsx)("a",{class:"header",children:e.Name}),Object(u.jsx)("div",{class:"meta",children:Object(u.jsx)("span",{class:"date",children:e.Designation})}),Object(u.jsx)("div",{class:"description",style:{textAlign:"justify"},children:e.Bio})]}),Object(u.jsx)("div",{class:"extra content",children:Object(u.jsxs)("a",{children:[Object(u.jsx)("i",{class:"calendar alternate outline icon"}),"Joined 2021"]})})]})}))},N=function(e){return Object(u.jsx)("div",{style:{marginTop:"2%"},children:Object(u.jsx)("div",{className:"ui link cards",children:y(e)})})},k=a(24),C=a(34),P=a(43),w=a(26),S=a(17),D=function(e){return{type:"ADD_ITEM",payload:e}},W=function(e){var t=e.Product,a=Object(S.b)(),i=Object(n.useState)({1:0,2:0,3:0,4:0,5:0,6:0}),s=Object(P.a)(i,2),c=s[0],r=s[1];function l(e){r(Object(C.a)(Object(C.a)({},c),{},Object(k.a)({},e.target.id,e.target.value)))}return t.map((function(e){return Object(u.jsxs)("div",{className:"card",style:{marginLeft:"9%",minWidth:"20%",maxWidth:"100%"},children:[Object(u.jsx)("div",{class:"image",children:Object(u.jsx)(w.a,{src:e.Photo,style:{height:"300px"}})}),Object(u.jsxs)("div",{class:"content",children:[Object(u.jsxs)("a",{class:"header",children:[e.Name,Object(u.jsxs)("span",{style:{border:"1px solid black",float:"right",padding:"2px"},children:["Rs.",e.Price]})]}),Object(u.jsxs)("div",{class:"description",children:[Object(u.jsx)("p",{children:e.Detail}),Object(u.jsx)("br",{})]}),Object(u.jsxs)("div",{class:"extra",children:[Object(u.jsx)("div",{class:"ui label",children:"NEW"}),Object(u.jsxs)("div",{class:"ui label",children:[Object(u.jsx)("i",{class:"globe icon"})," Available"]}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{class:"ui input focus",style:{width:"60%"},children:Object(u.jsx)("input",{type:"number",id:e.key,value:0==c[e.key]?null:c[e.key],placeholder:"Quantity...",onChange:l})}),Object(u.jsx)("div",{class:"ui primary button",style:{float:"right"},onClick:function(t){!function(e,t,n,i,s){if(0!=c[e]){var r={id:Math.floor(9e4*Math.random())+1e4,product_id:e,name:t,photo:n,price:i,detail:s,addedQuantity:c[e]};a(D(r))}}(e.key,e.Name,e.Photo,e.Price,e.Detail)},children:Object(u.jsx)("i",{class:"cart icon"})})]})]})]})}))},I=function(e){return Object(u.jsx)("div",{className:"ui cards",children:W(e)})},E=function(e){var t=Object(S.c)((function(e){return e.CartReducer}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("br",{}),Object(u.jsx)("div",{style:{position:"relative",textAlign:"right",float:"right",marginRight:"110px",fontSize:"20px",color:"white",width:"fit-content",alignItems:"right",display:"flexbox"},children:Object(u.jsx)(O.b,{to:"/cart",children:Object(u.jsxs)("button",{style:{padding:"5px",backgroundColor:"#e87676",color:"black",border:"none",fontWeight:"bolder"},children:["My Cart ",Object(u.jsx)("i",{class:"fas fa-shopping-cart",style:{color:"white"}}),"\xa0",Object(u.jsx)("sup",{style:{color:"white"},children:null!=t.length?t.length:0})]})})}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{style:{width:"100%",position:"relative"},children:Object(u.jsx)(I,{Product:e.Product})})]})},T=function(e){return{type:"REMOVE_ITEM",payload:e}},H=a(18),M=a(64),A=a(68),R=a(65),B=a(66),_=a(67),z=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={modal:!1,name:"",address:"",phoneno:"",email:""},n.toggle=n.toggle.bind(Object(H.a)(n)),n.handleChangeName=n.handleChangeName.bind(Object(H.a)(n)),n.handleChangeAddress=n.handleChangeAddress.bind(Object(H.a)(n)),n.handleChangePhone=n.handleChangePhone.bind(Object(H.a)(n)),n.handleChangeEmail=n.handleChangeEmail.bind(Object(H.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(H.a)(n)),n}return Object(l.a)(a,[{key:"toggle",value:function(){this.setState({modal:!this.state.modal})}},{key:"handleChangeName",value:function(e){this.setState({name:e.target.value})}},{key:"handleChangeAddress",value:function(e){this.setState({address:e.target.value})}},{key:"handleChangePhone",value:function(e){this.setState({phone:e.target.value})}},{key:"handleChangeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"render",value:function(){return Object(u.jsxs)("div",{style:{display:"flex",alignItems:"center",flexWrap:"wrap",justifyContent:"center",marginTop:"20px"},children:[Object(u.jsx)("div",{style:{marginBottom:"50px"},children:Object(u.jsx)(M.a,{color:"success",onClick:this.toggle,style:{padding:"5px 10px 5px 10px",fontSize:"1.2em",fontWeight:"bold"},children:"Checkout"})}),Object(u.jsx)(A.a,{isOpen:this.state.modal,children:Object(u.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(u.jsx)(R.a,{children:"Enter Your Details"}),Object(u.jsxs)(B.a,{children:[Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"col-md",children:[Object(u.jsx)("label",{children:"Name:"}),Object(u.jsx)("input",{type:"text",value:this.state.name,onChange:this.handleChangeName,className:"form-control"})]})}),Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"form-group col-md",children:[Object(u.jsx)("label",{children:"Address:"}),Object(u.jsx)("input",{type:"text",value:this.state.team,onChange:this.handleChangeAddress,className:"form-control"})]})}),Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"form-group col-md",children:[Object(u.jsx)("label",{children:"Phone:"}),Object(u.jsx)("input",{type:"tel",value:this.country,onChange:this.handleChangePhone,className:"form-control"})]})}),Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"form-group col-md",children:[Object(u.jsx)("label",{children:"Email:"}),Object(u.jsx)("input",{type:"email",value:this.country,onChange:this.handleChangeEmail,className:"form-control"})]})}),Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"form-group col-md",children:[Object(u.jsx)("label",{children:"Payment Type:"}),"\u2003",Object(u.jsx)("input",{type:"checkbox",id:"pod",name:"pod",value:"pod",checked:"checked"}),"\xa0",Object(u.jsx)("label",{for:"pod",children:"Pay On Delivery"}),Object(u.jsx)("br",{})]})})]}),Object(u.jsxs)(_.a,{children:[Object(u.jsx)("input",{type:"submit",value:"Place Order",color:"primary",className:"btn btn-primary",onClick:function(){return window.location.href="/processing-order"}}),Object(u.jsx)(M.a,{color:"danger",onClick:this.toggle,children:"Cancel"})]})]})})]})}}]),a}(i.a.Component),L=function(e){var t=Object(S.b)();return e.map((function(e){return Object(u.jsxs)("div",{className:"card",style:{marginLeft:"9%",minWidth:"20%",maxWidth:"100%"},children:[Object(u.jsx)("div",{class:"image",children:Object(u.jsx)(w.a,{src:e.photo,style:{height:"300px"}})}),Object(u.jsxs)("div",{class:"content",children:[Object(u.jsx)("a",{class:"header",children:e.name}),Object(u.jsxs)("div",{class:"description",children:[Object(u.jsx)("p",{children:e.detail}),Object(u.jsx)("br",{})]}),Object(u.jsxs)("div",{class:"extra",children:[Object(u.jsx)("div",{children:Object(u.jsxs)("h6",{children:["Added Quantity: ",e.addedQuantity]})}),Object(u.jsx)("div",{class:"ui primary button",style:{float:"right",backgroundColor:"#e25555"},onClick:function(a){return n=e.id,void t(T(n));var n},children:Object(u.jsx)("i",{class:"fas fa-trash-alt",style:{color:"white",fontSize:"1.1em"}})})]}),Object(u.jsxs)("h6",{children:["Total Price :"," ",Object(u.jsxs)("span",{style:{border:"1px solid black",padding:"2px"},children:["Rs. ",e.addedQuantity*e.price]}),Object(u.jsxs)("small",{class:"text-muted",children:["\u2003(Rs. ",e.price," each)"]})]})]})]})}))},V=function(){var e=Object(S.c)((function(e){return e.CartReducer}));return 0==e.length?Object(u.jsxs)("div",{className:"emptyCart",style:{alignItems:"center",textAlign:"center",marginTop:"5%",fontSize:"24px",fontWeight:"bold"},children:["Your cart is Empty.",Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)(O.b,{to:"/products",children:Object(u.jsxs)("button",{style:{padding:"5px",backgroundColor:"#e87676",color:"black",border:"none",fontWeight:"bolder"},children:[Object(u.jsx)("i",{class:"fas fa-arrow-circle-left"}),"\xa0Start Shopping"]})})]}):Object(u.jsxs)("div",{children:[Object(u.jsx)("br",{}),Object(u.jsx)("div",{style:{position:"relative",textAlign:"right",float:"left",marginLeft:"110px",fontSize:"20px",color:"white",width:"fit-content",alignItems:"right",display:"flexbox"},children:Object(u.jsx)(O.b,{to:"/products",children:Object(u.jsxs)("button",{style:{padding:"5px",backgroundColor:"#e87676",color:"black",border:"none",fontWeight:"bolder"},children:[Object(u.jsx)("i",{class:"fas fa-arrow-circle-left"}),"\xa0Continue Shopping"]})})}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{className:"ui cards",children:L(e)}),Object(u.jsx)("div",{children:Object(u.jsx)(z,{})})]})},F=a.p+"static/media/Madhur.32763653.jpeg",Q=a.p+"static/media/prawess.198e34aa.webp",J=a.p+"static/media/Pranshu.732acca7.jpg",X=a.p+"static/media/Ashish.59ab4455.jpg",U=a.p+"static/media/hemphandbag2.7ca13c45.jpg",Y=a.p+"static/media/hempshoes.67f78bad.jpg",G=a.p+"static/media/Vanshikha.e4ff6a1a.jpeg",K=a.p+"static/media/Rishi.e1f0a6ca.jpg",q=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{style:{display:"flex",flexWrap:"nowrap",justifyContent:"center",alignItems:"center",marginTop:"70px",fontSize:"1.5em",fontWeight:"bold"},children:"Your Order is Successful. Thank you for choosing HempIN."}),Object(u.jsx)("div",{style:{display:"flex",flexWrap:"nowrap",justifyContent:"center",alignItems:"center"},children:Object(u.jsx)(O.b,{to:"/products",children:Object(u.jsxs)("button",{style:{padding:"10px",backgroundColor:"#e87676",color:"black",border:"none",fontWeight:"bolder",fontSize:"1.3em"},children:[Object(u.jsx)("i",{class:"fas fa-arrow-circle-left"}),"\xa0Start Shopping"]})})})]})}}]),a}(i.a.Component),Z=a(41),$=a.n(Z),ee=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return setTimeout((function(){window.location.href="/success"}),3e3),Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"Spinner-div",style:{display:"flex",flexWrap:"nowrap",justifyContent:"center",alignItems:"center",marginTop:"70px"},children:Object(u.jsx)($.a,{size:120,spinnerColor:"#333",spinnerWidth:2,visible:!0})}),Object(u.jsx)("div",{style:{display:"flex",flexWrap:"nowrap",justifyContent:"center",alignItems:"center",marginTop:"70px"},children:Object(u.jsx)("p",{style:{fontSize:"1.5em",fontWeight:"bold"},children:"Please wait while we process your order."})})]})}}]),a}(i.a.Component),te=function(){return Object(u.jsx)("div",{className:"contact-us",children:Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("h3",{children:"Customer Service"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("i",{class:"fas fa-envelope"}),"\xa0customer@hempin.com ",Object(u.jsx)("br",{}),Object(u.jsx)("i",{class:"fas fa-phone-alt"}),"\xa0+91 9999999999"]})]})})},ae=[{Name:"Prawesh Mohan Bhattarai",Designation:"Design and Product Manager",Photo:Q,Bio:"Prawesh Mohan Bhattarai is the Design and Product Manager for HempIN. He is responsible for design and distribution of all the products."},{Name:"Madhur Bhatia",Designation:"PR Head",Photo:F,Bio:"Madhur Bhatia is PR head for HempIN. She holds leadership roles in both enterprise and consumer businesses across the company."},{Name:"Vanshikha Singh",Designation:"Marketing Manager",Photo:G,Bio:"Vanshikha Singh is Marketing Manager for HempIN. She works on various marketing strategies and implements them to increase the reach for the start up."},{Name:"Rishi Vandhanaa K",Designation:"Finance Manager",Photo:K,Bio:"Rishi Vandhanaa K is Finance Manager for HempIN. She is responsible for the budgeting, accounting and tally of the start-up."},{Name:"Pranshu Acharya",Designation:"Backend Developer",Photo:J,Bio:"Pranshu Acharya is a Backend Web Developer for HempIN. He manages the databases for products to be distributed from the website."},{Name:"Ashish Poudel",Designation:"Frontend Developer",Photo:X,Bio:"Ashish Poudel is Front End Web Developer for HempIN. He designs and regularly updates the website to ensure a user friendly experience."}],ne=[{Photo:h,Name:"Hemp Bag",Detail:"Sufficient Space, Cool Print",Price:"749",key:"1"},{Photo:p,Name:"Hemp Cap",Detail:"Golf Cap, Available in black and white",Price:"599",key:"2"},{Photo:b,Name:"Hemp Hand Bag",Detail:"Huge Space, Perfect for Shopping",Price:"549",key:"3"},{Photo:j,Name:"Hemp Tshirt",Detail:"Plan white Tshirt with added comfort",Price:"999",key:"4"},{Photo:U,Name:"Hemp Hand Bag",Detail:"Beautiful Design, Good for Travel",Price:"549",key:"5"},{Photo:Y,Name:"Hemp Shoes",Detail:"Light Weight, Beautiful Design",Price:"2999",key:"6"}],ie=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(u.jsx)(O.a,{children:Object(u.jsxs)("div",{children:[Object(u.jsx)(v,{}),Object(u.jsxs)(g.c,{children:[Object(u.jsx)(g.a,{path:"/cart",component:function(){return Object(u.jsx)(V,{})}}),Object(u.jsx)(g.a,{path:"/HempIN/products",component:function(){return Object(u.jsx)(E,{Product:ne})}}),Object(u.jsx)(g.a,{path:"/ourteam",component:function(){return Object(u.jsx)(N,{Team:ae})}}),Object(u.jsx)(g.a,{path:"/processing-order",component:function(){return Object(u.jsx)(ee,{})}}),Object(u.jsx)(g.a,{path:"/contact-us",component:function(){return Object(u.jsx)(te,{})}}),Object(u.jsx)(g.a,{path:"/success",component:function(){return Object(u.jsx)(q,{})}}),Object(u.jsx)(g.a,{path:"/",component:x})]})]})})}}]),a}(i.a.Component),se=a(42),ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEM":return[].concat(Object(se.a)(e),[t.payload]);case"REMOVE_ITEM":return e.filter((function(e){return e.id!=t.payload}));default:return e}},re=a(27),le=Object(re.a)({CartReducer:ce}),oe=(a(61),Object(re.b)(le,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));c.a.render(Object(u.jsx)(S.a,{store:oe,children:Object(u.jsx)(ie,{})}),document.querySelector("#root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.bda2326b.chunk.js.map