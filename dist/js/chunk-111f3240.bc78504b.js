(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-111f3240"],{"48ed":function(t,s,e){"use strict";var i=e("fd01"),a=e.n(i);a.a},dcd0:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"singlehire-page-wrap"},[e("b-row",{staticClass:"top-sect"},[e("b-col",{staticClass:"top-sect-texts",attrs:{sm:"6"}},[e("p",{staticClass:"name"},[t._v("\n                "+t._s(t.activeUser.userName)+" \n                "),t.activeUser.availability?e("span",{staticClass:"av"},[t._v("available for hire")]):e("span",{staticClass:"not-av"},[t._v("not available")])]),e("p",{staticClass:"title"},[t._v("\n                "+t._s(t.activeUser.jobTitle)+"\n            ")]),e("p",{staticClass:"self-text"},[t._v("\n                "+t._s(t.activeUser.userDesc)+"\n            ")]),e("p",{staticClass:"skill-title"},[t._v("\n                SKILLS & TOOLS\n            ")]),t._l(t.skills,(function(s,i){return e("span",{key:"pskill"+i,staticClass:"skill"},["photo"===s.type&&t.activeUser.userSkills.includes(s.name)?e("img",{staticStyle:{width:"30px"},attrs:{src:s.skillPhoto,alt:""}}):t._e()])})),t._l(t.skills,(function(s,i){return e("span",{key:"tskill"+i},["text"===s.type&&t.activeUser.userSkills.includes(s.name)?e("span",{staticClass:"skill text-skill"},[t._v("\n                    "+t._s(s.skillText)+"\n                ")]):t._e()])})),e("b-row",{staticClass:"top-btns"},[e("button",{staticClass:"apply-btn",on:{click:function(s){t.hireNow()}}},[t._v("\n                    Hire me\n                ")]),e("button",{staticClass:"apply-btn-two",on:{click:function(s){t.hireMe()}}},[t._v("\n                    View CV\n                ")])])],2),e("b-col",{staticClass:"img-grid-wrap",attrs:{sm:"6"}},[e("img",{staticClass:"animated \tslideInRight",attrs:{src:t.activeUser.userPhoto,alt:""}})])],1)],1)},a=[],n=(e("7514"),e("cebc")),l=e("2f62"),c=e("87e7"),r={data:function(){return{projects:[],email:""}},computed:Object(n["a"])(Object(n["a"])({},Object(l["b"])({sets:"getSets",students:"getStudents",skills:"getSkills"})),{},{activeUser:function(){var t=this;return this.students.find((function(s){return s._id===t.$route.params.userId}))}}),mounted:function(){var t=this;c["a"].getUserProjects(this.$route.params.userId).then((function(s){t.projects=s.data.userProjects})).catch((function(t){console.log(t)}))},methods:{hireNow:function(){window.open("https://forms.gle/7UaKupXe2vDBUCVP6","_blank")},hireMe:function(){window.open(this.activeUser.userCV,"_blank")}}},o=r,u=(e("48ed"),e("2877")),p=Object(u["a"])(o,i,a,!1,null,"090fa32f",null);p.options.__file="SingleHire.vue";s["default"]=p.exports},fd01:function(t,s,e){}}]);
//# sourceMappingURL=chunk-111f3240.bc78504b.js.map