"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[10],{2010:function(e,r,t){t.d(r,{Z:function(){return o}});var a=t(9303),n="Error_header_error__8xhVO",i="Error_description_error__n-HWJ",s=t(184),o=function(e){var r=e.message;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.Z,{}),(0,s.jsx)("h2",{className:n,children:"Oops something went wrong! Try reloading the page"}),(0,s.jsx)("p",{className:i,children:r})]})}},9303:function(e,r,t){t.d(r,{Z:function(){return o}});var a=t(7689),n=t(1087),i="GoBackBtn_movie_goback_btn__ctDMq",s=t(184),o=function(){var e,r=null!==(e=(0,a.TH)().state.from)&&void 0!==e?e:"/";return(0,s.jsx)(n.rU,{to:r,className:i,children:"Go back"})}},5843:function(e,r,t){t.d(r,{Z:function(){return v}});var a="MoviesList_container__0JGj2",n="MoviesList_movie_list__m49C0",i="MoviesList_movie_title__HT75l",s=t(7689),o=t(1087),c="MovieItem_movie_item__xpT3K",l="MovieItem_movie_img__36WAE",u="MovieItem_movie_link__TLLiQ",m="MovieItem_movie_title__rGVkP",_=t(184),h=function(e){var r=e.title,t=e.id,a=e.img,n=(0,s.TH)().pathname;return(0,_.jsx)("li",{className:c,children:(0,_.jsxs)(o.rU,{className:u,to:"/movies/".concat(t),state:{from:n},children:[(0,_.jsx)("img",{className:l,src:"https://image.tmdb.org/t/p/w500"+a,alt:r,loading:"lazy"}),(0,_.jsx)("p",{className:m,children:r})]})})},v=function(e){var r=e.movies,t=e.page,s=Boolean(r.length),o="home"===t?"Popular list:":"This is movie list according to your search:";return(0,_.jsxs)("div",{className:a,children:[s&&(0,_.jsx)("h1",{className:i,children:o}),(0,_.jsx)("ul",{className:n,children:r.map((function(e){var r=e.title,t=e.id,a=e.poster_path;return(0,_.jsx)(h,{title:r,id:t,img:a},t)}))})]})}},9010:function(e,r,t){t.r(r),t.d(r,{default:function(){return M}});var a=t(5861),n=t(9439),i=t(7757),s=t.n(i),o=t(7694),c=t(2791),l=t(1087),u=t(6227),m=t(5705),_=t(3795),h="Searchbar_form__D-hp5",v="Searchbar_input_wrap__LiusX",f="Searchbar_input__19umw",d="Searchbar_search_svg__vWNBJ",p="Searchbar_form_btn__jfKM-",g=t(7222),x=t(184),j=function(){var e=(0,g.a)(),r=e.value,t=e.setValue;return(0,x.jsx)(m.J9,{initialValues:{newValue:r},onSubmit:function(e){var a=e.newValue;if(!a)return o.Notify.failure("You have to write something here for a successful search");a!==r?t(a):o.Notify.info("You have to write new keyword...Try again!")},children:(0,x.jsx)(m.l0,{className:h,children:(0,x.jsxs)("div",{className:v,children:[(0,x.jsx)(m.gN,{className:f,name:"newValue",type:"text",placeholder:"Search movies..."}),(0,x.jsx)("button",{className:p,type:"submit",children:(0,x.jsx)(_.wTD,{className:d})})]})})})},w=t(5843),N=t(7784),b=t(2010),y="idle",k="pending",Z="rejected",T="resolved",M=function(){var e=(0,c.useState)(y),r=(0,n.Z)(e,2),t=r[0],i=r[1],m=(0,c.useState)([]),_=(0,n.Z)(m,2),h=_[0],v=_[1],f=(0,l.lr)(),d=(0,n.Z)(f,2),p=d[0],M=d[1],S=(0,g.a)(),V=S.value,L=S.setValue;return(0,c.useEffect)((function(){var e,r=null!==(e=p.get("query"))&&void 0!==e?e:"";V?M({query:V}):L(r)}),[p,L,V,M]),(0,c.useEffect)((function(){if(V){var e=function(){var e=(0,a.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(k),e.prev=1,e.next=4,(0,u.X5)(V);case 4:r=e.sent,v(r),i(T),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),o.Notify.failure("Oops something went wrong! Try reloading the page"),i(Z);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();e()}}),[V]),(0,x.jsxs)(x.Fragment,{children:[(t===T||t===y)&&(0,x.jsx)(j,{}),t===T&&(0,x.jsx)(w.Z,{movies:h,page:"movie"}),t===k&&(0,x.jsx)(N.Z,{}),t===Z&&(0,x.jsx)(b.Z,{message:"Load failed your movies"})]})}}}]);
//# sourceMappingURL=10.befd1282.chunk.js.map