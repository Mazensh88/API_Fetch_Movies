(this.webpackJsonpmoviews_api=this.webpackJsonpmoviews_api||[]).push([[0],{14:function(e,t,i){},15:function(e,t,i){},16:function(e,t,i){"use strict";i.r(t);var c=i(0),n=i(1),o=i.n(n),r=i(7),s=i.n(r),l=(i(14),i(3)),a=(i(15),i(8)),j=i(6),d=function(e,t){switch(t.type){case"ADD_MOVIE_TO_MOVIELIST":return Object(j.a)(Object(j.a)({},e),{},{movielist:[t.payload].concat(Object(a.a)(e.movielist))});default:return e}},u={movielist:localStorage.getItem("movielist")?JSON.parse(localStorage.getItem("movielist")):[]},b=Object(n.createContext)(u),v=function(e){var t=Object(n.useReducer)(d,u),i=Object(l.a)(t,2),o=i[0],r=i[1];Object(n.useEffect)((function(){localStorage.setItem("movielist",JSON.stringify(o.movielist))}),[o]);return Object(c.jsx)(b.Provider,{value:{movielist:o.movielist,addMovieToSelectedList:function(e){r({type:"ADD_MOVIE_TO_MOVIELIST",payload:e})}},children:e.children})},O=function(e){var t=e.movie,i=Object(n.useContext)(b),o=i.addMovieToSelectedList,r=(i.removeMovieList,!!i.movielist.find((function(e){return e.imdbID===t.imdbID})));return Object(c.jsx)("div",{children:Object(c.jsxs)("h3",{children:[t.Title,Object(c.jsx)("button",{disabled:r,onClick:function(){return o(t)},children:"Nominate"})]})})},m=function(e){var t=e.type,i=e.movie,o=Object(n.useContext)(b).removeMovieFromWatchlist;return Object(c.jsx)("div",{className:"inner-card-controls",children:"movielist"===t&&Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("button",{onClick:function(){return o(i.id)},children:Object(c.jsx)("i",{className:"fa-fw fa fa-times"})})})})},h=function(e){var t=e.movie,i=e.type,o=Object(n.useContext)(b);o.removeMovieList,o.movielist;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:t.Title}),Object(c.jsx)(m,{type:i,movie:t,children:" Remove "})]})};var f=function(){var e=Object(n.useContext)(b).movielist,t=Object(n.useState)(""),i=Object(l.a)(t,2),o=i[0],r=i[1],s=Object(n.useState)([]),a=Object(l.a)(s,2),j=a[0],d=a[1];return Object(c.jsxs)("div",{children:[Object(c.jsx)(v,{children:Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:Object(c.jsx)("input",{type:"text",placeholder:"Search for a movie",value:o,onChange:function(e){e.preventDefault(),r(e.target.value),fetch("http://www.omdbapi.com/?s=".concat(e.target.value,"&apikey=bea9b037")).then((function(e){return e.json()})).then((function(e){"True"===e.Response?d(e.Search):d([])}))}})}),Object(c.jsx)("div",{children:j.length>0&&Object(c.jsx)("ul",{className:"results",children:j.map((function(e,t){return Object(c.jsx)("li",{children:Object(c.jsx)(O,{movie:e})},e.imdbID)}))})})]})}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Nominated "}),Object(c.jsx)("div",{children:Object(c.jsx)("ul",{children:e.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(h,{movie:e})},e.imdbID)}))})})]})]})},x=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,17)).then((function(t){var i=t.getCLS,c=t.getFID,n=t.getFCP,o=t.getLCP,r=t.getTTFB;i(e),c(e),n(e),o(e),r(e)}))};s.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),x()}},[[16,1,2]]]);
//# sourceMappingURL=main.f34ca3ce.chunk.js.map