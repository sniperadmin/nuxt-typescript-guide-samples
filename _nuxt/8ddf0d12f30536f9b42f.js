(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{348:function(t,e,r){var content=r(368);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("015bd9fd",content,!0,{sourceMap:!1})},349:function(t,e,r){var content=r(370);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("03517379",content,!0,{sourceMap:!1})},367:function(t,e,r){"use strict";var n=r(348);r.n(n).a},368:function(t,e,r){(e=r(15)(!1)).push([t.i,".VuetifyLogo{height:180px;width:180px;transform:rotateY(560deg);-webkit-animation:turn 3.5s ease-out 1s forwards;animation:turn 3.5s ease-out 1s forwards}@-webkit-keyframes turn{to{transform:rotateY(0deg)}}@keyframes turn{to{transform:rotateY(0deg)}}",""]),t.exports=e},369:function(t,e,r){"use strict";var n=r(349);r.n(n).a},370:function(t,e,r){(e=r(15)(!1)).push([t.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear 1s forwards;animation:turn 2s linear 1s forwards;transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear 3.5s forwards;animation:goright .5s linear 3.5s forwards}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear 3s forwards;animation:godown .5s linear 3s forwards;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{transform:rotateX(0deg)}}@keyframes turn{to{transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""]),t.exports=e},371:function(t,e,r){"use strict";r(149);var n=r(150);e.a=Object(n.a)("flex")},382:function(t,e){t.exports=function(component,t){var e="function"==typeof component.exports?component.exports.extendOptions:component.options;for(var i in"function"==typeof component.exports&&(e.directives=component.exports.options.directives),e.directives=e.directives||{},t)e.directives[i]=e.directives[i]||t[i]}},388:function(t,e,r){"use strict";r.r(e);r(14),r(11),r(9),r(12),r(18),r(19),r(8),r(51);var n=r(4),o=r(22),l=r(39),c=r(32),f=r(29),d=r(17),v=r(28),m=(r(367),r(71)),h=Object(m.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("img",{staticClass:"VuetifyLogo",attrs:{alt:"Vuetify Logo",src:"/vuetify-logo.svg"}})}),[],!1,null,null,null).exports,x=(r(369),Object(m.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"VueToNuxtLogo"},[e("div",{staticClass:"Triangle Triangle--two"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--one"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--three"}),this._v(" "),e("div",{staticClass:"Triangle Triangle--four"})])}],!1,null,null,null).exports),y=r(343);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function O(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var j=function(t,e,r,desc){var n,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(o<3?n(l):o>3?n(e,r,l):n(e,r))||l);return o>3&&l&&Object.defineProperty(e,r,l),l},_=Object(y.namespace)("user"),k=function(t){Object(c.a)(v,t);var e,r=(e=v,function(){var t,r=Object(d.a)(e);if(O()){var n=Object(d.a)(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return Object(f.a)(this,t)});function v(){var t;return Object(o.a)(this,v),(t=r.apply(this,arguments)).code='\n    \x3c!-- this is the vue component --\x3e\n\n      <v-card-title class="headline">\n          Welcome {{ fullname }}\n        </v-card-title>\n        <v-card-text>\n          <v-text-field\n            v-model="localData.first"\n            dense\n            placeholder="first name here"\n          >\n\n          </v-text-field>\n        </v-card-text>\n        <v-card-actions>\n          <v-spacer />\n          <v-btn\n            @click="update"\n            color="primary"\n          >\n            Update User info\n          </v-btn>\n        </v-card-actions>\n      </v-card>\n    ',t.tsScript="\n    // and the script\n      import VuetifyLogo from '../components/VuetifyLogo.vue'\n      import Logo from '../components/Logo.vue'\n      import { Component, Vue, namespace } from 'nuxt-property-decorator'\n\n      const user = namespace('user')\n\n      @Component({\n        components: { Logo, VuetifyLogo }\n      })\n\n      export default class Profile extends Vue {\n        public localData: object = {}\n\n        // the \"user\" namespace is registered in the store\n        // so we can use the State, Getter and Mutation\n\n        @user.State\n        public info!: object\n\n        @user.Getter\n        public fullname!: string\n\n        @user.Mutation\n        public updateUserInfo!: (data: object) => void\n\n        mounted() {\n          this.localData = { ...this.localData, ...this.info }\n        }\n\n        public update(): void {\n          this.updateUserInfo(this.localData)\n        }\n      } \n    ",t.localData={},t}return Object(l.a)(v,[{key:"mounted",value:function(){this.localData=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.localData,{},this.info)}},{key:"update",value:function(){this.updateUserInfo(this.localData)}}]),v}(y.Vue);j([_.State],k.prototype,"info",void 0),j([_.Getter],k.prototype,"fullname",void 0),j([_.Mutation],k.prototype,"updateUserInfo",void 0);var V=k=j([Object(y.Component)({components:{Logo:x,VuetifyLogo:h}})],k),T=r(95),D=r.n(T),C=r(197),L=r(355),P=r(341),S=r(371),R=(r(149),r(150)),U=Object(R.a)("layout"),E=r(338),M=r(389),$=r(382),I=r.n($),G=r(179),N=Object(m.a)(V,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{column:"","justify-center":"","align-center":""}},[r("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[r("div",{staticClass:"text-center"},[r("logo"),t._v(" "),r("vuetify-logo")],1),t._v(" "),r("v-card",[r("v-card-title",{staticClass:"headline"},[t._v("\n        Welcome "+t._s(t.fullname)+"\n      ")]),t._v(" "),r("v-card-text",[r("v-text-field",{attrs:{dense:"",placeholder:"first name here"},model:{value:t.localData.first,callback:function(e){t.$set(t.localData,"first",e)},expression:"localData.first"}})],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"primary"},on:{click:t.update}},[t._v("\n          Update User info\n        ")])],1)],1)],1),t._v(" "),r("h2",[t._v("\n    and this is how it is made\n  ")]),t._v(" "),r("v-layout",{staticStyle:{"max-height":"500px"}},[r("v-flex",{staticStyle:{"margin-right":"10px"}},[r("prism-editor",{attrs:{code:t.code,language:"vue","line-numbers":"",readonly:""}})],1),t._v(" "),r("v-flex",{directives:[{name:"scroll",rawName:"v-scroll"}]},[r("prism-editor",{attrs:{code:t.tsScript,language:"js","line-numbers":"",readonly:""}})],1)],1),t._v(" "),r("v-card",[r("v-card-text",[r("v-flex",[r("v-btn",{attrs:{nuxt:"",to:"/store",color:"success"}},[t._v("refer to the store code here")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=N.exports;D()(N,{VBtn:C.a,VCard:L.a,VCardActions:P.a,VCardText:P.b,VCardTitle:P.c,VFlex:S.a,VLayout:U,VSpacer:E.a,VTextField:M.a}),I()(N,{Scroll:G.b})}}]);