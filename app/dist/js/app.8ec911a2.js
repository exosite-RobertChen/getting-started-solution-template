(function(e){function t(t){for(var n,i,s=t[0],c=t[1],l=t[2],d=0,p=[];d<s.length;d++)i=s[d],r[i]&&p.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"039a":function(e,t,a){"use strict";var n=a("3760"),r=a.n(n);r.a},"2fd0":function(e,t,a){},"35ba":function(e,t,a){"use strict";var n=a("af6d"),r=a.n(n);r.a},3760:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("5176"),r=a.n(n),o=a("7618"),i=(a("cadf"),a("551c"),a("f751"),a("097d"),a("a026")),s=a("d225"),c=a("b0b4"),l=a("bd86"),u=a("bc3a"),d=a.n(u),p="/",v=d.a.create({baseURL:p,timeout:3e3,headers:{"Content-Type":"application/json",Accept:"application/json","Cache-Control":"no-cache"}}),f=v,m=function(){function e(t){Object(s["a"])(this,e),Object(l["a"])(this,"config",{}),r()(this,t)}return Object(c["a"])(e,[{key:"delete",value:function(){var e="/api/app/".concat(this.group,"/delete");return f.post(e,{aid:this.aid})}}]),e}(),h=a("8c4f"),b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-card-title",[e._v("\n    Device Groups\n    "),a("v-spacer"),a("v-btn",{attrs:{color:"accent"},on:{click:function(t){e.addGroupDialog=!0}}},[a("v-icon",[e._v("add")]),e._v("Create Group\n    ")],1)],1),a("v-list",{attrs:{"two-line":"",subheader:""}},[e._l(e.groups,function(t){return a("v-list-tile",{key:t.name,attrs:{avatar:""},on:{click:function(a){return e.groupDetails(t.name)}}},[a("v-list-tile-avatar",[a("v-icon",[e._v("folder_open")])],1),a("v-list-tile-content",[a("v-list-tile-title",[e._v(e._s(t.name))])],1),a("v-spacer"),"default"!==t.name?a("v-btn",{attrs:{flat:"",color:"red"},on:{click:function(a){return a.stopPropagation(),e.prepareDelete(t)}}},[e._v("Remove")]):e._e()],1)}),e.loading?a("div",{staticClass:"text-xs-center ma-1"},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1):e._e()],2),a("v-dialog",{attrs:{"max-width":"500"},model:{value:e.claimDeviceDialog,callback:function(t){e.claimDeviceDialog=t},expression:"claimDeviceDialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v("Claim Device Using Code")]),a("v-card-text",[a("v-text-field",{attrs:{label:"Claim Code"},model:{value:e.claimCode,callback:function(t){e.claimCode=t},expression:"claimCode"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{flat:""},nativeOn:{click:function(t){e.claimDeviceDialog=!1}}},[e._v("Cancel")]),a("v-btn",{attrs:{color:"primary",flat:""},nativeOn:{click:function(t){return e.claimDevice()}}},[e._v("Claim")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"500"},model:{value:e.addGroupDialog,callback:function(t){e.addGroupDialog=t},expression:"addGroupDialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v("Create Device Group")]),a("v-card-text",[a("v-text-field",{attrs:{label:"Name"},model:{value:e.groupName,callback:function(t){e.groupName=t},expression:"groupName"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{flat:""},nativeOn:{click:function(t){e.addGroupDialog=!1}}},[e._v("Cancel")]),a("v-btn",{attrs:{color:"primary",flat:""},nativeOn:{click:function(t){return e.addGroup()}}},[e._v("Add")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"500"},model:{value:e.removeGroupDialog,callback:function(t){e.removeGroupDialog=t},expression:"removeGroupDialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v('Remove Group "'+e._s(e.groupToRemove.name)+'" ?')])]),a("v-card-actions",[a("v-btn",{attrs:{flat:""},on:{click:function(t){e.removeGroupDialog=!1}}},[e._v("Cancel")]),a("v-spacer"),a("v-btn",{attrs:{flat:"",color:"red"},on:{click:function(t){return e.deleteGroup()}}},[e._v("Remove")])],1)],1)],1),a("v-snackbar",{attrs:{color:e.snackbarColor},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n    "+e._s(e.snackbarText)+"\n    "),a("v-btn",{attrs:{dark:"",flat:""},on:{click:function(t){e.snackbar=!1}}},[e._v("Close")])],1)],1)},g=[],k=(a("a481"),a("795b")),x=a.n(k),y=a("f499"),_=a.n(y),C=a("ba10"),T=a.n(C),A=function(){function e(){Object(s["a"])(this,e),Object(l["a"])(this,"authenticated",this.isAuthenticated()),Object(l["a"])(this,"authNotifier",new T.a),this.processingLogin=!1,this.login=this.login.bind(this),this.setSession=this.setSession.bind(this),this.logout=this.logout.bind(this),this.signup=this.signup.bind(this),this.isAuthenticated=this.isAuthenticated.bind(this),this.authNotifier.emit("authChange",{authenticated:this.isAuthenticated()})}return Object(c["a"])(e,[{key:"login",value:function(e){var t=this;return f.post("/api/users/login",e).then(function(e){return _()(e.data).toLowerCase().indexOf("invalid login")>-1?x.a.reject(new Error("invalid login")):(t.setSession(e),t.setProfile(),e)})}},{key:"signup",value:function(e){var t=this;return f.post("/api/users/create",e).then(function(e){if(e.data&&e.data.error)return x.a.reject(new Error(_()(e)));t.setSession(e),t.setProfile()})}},{key:"setProfile",value:function(){return f.get("/api/users/currentUser").then(function(e){localStorage.setItem("profile",_()(e.data))})}},{key:"setSession",value:function(e){var t=e.data;t&&(f.defaults.headers.common["Authorization"]=t,localStorage.setItem("token",t),this.authNotifier.emit("authChange",{authenticated:!0}))}},{key:"logout",value:function(){localStorage.removeItem("token"),localStorage.removeItem("profile"),this.userProfile=null,this.authNotifier.emit("authChange",!1),ue.replace("/login")}},{key:"isAuthenticated",value:function(){var e=localStorage.getItem("token");return e&&(f.defaults.headers.common["Authorization"]=e),e}},{key:"token",value:function(){return localStorage.getItem("token")}},{key:"profile",value:function(){var e=localStorage.getItem("profile");try{return JSON.parse(e)}catch(t){return{}}}}]),e}(),D=new A,w=function e(t){Object(s["a"])(this,e),r()(this,t)},R=a("a745"),G=a.n(R),O=(a("7f7f"),a("2ef0")),j=a.n(O),S=function(){function e(t){Object(s["a"])(this,e),r()(this,t)}return Object(c["a"])(e,[{key:"delete",value:function(){var e="/api/groups/delete";return f.post(e,this)}},{key:"devices",get:function(){var e="/api/groups/".concat(this.name,"/devices");return f.get(e).then(function(e){var t=G()(e.data)?e.data:[];return j.a.map(t,function(e){return new w(e)})})}},{key:"apps",get:function(){var e="/api/groups/".concat(this.name,"/apps"),t=this.name;return f.get(e).then(function(e){var a=G()(e.data)?e.data:[];return j.a.map(a,function(e){return e.group=t,new m(e)})})}}]),e}(),P={components:{},data:function(){return{authenticated:D.authenticated,selectedDevice:!1,devices:[],groups:[],loading:!1,groupToRemove:{},removeGroupDialog:!1,claimDeviceDialog:!1,claimingDevice:{},claimCode:"",selectedGroup:"",groupName:"",addGroupDialog:!1,snackbar:!1,snackbarText:"",snackbarColor:""}},methods:{groupDetails:function(e){ue.push({path:"/group/".concat(e,"/devices")})},prepareDelete:function(e){this.groupToRemove=e,this.removeGroupDialog=!0},fetchDevices:function(){var e=this;this.loading=!0,f.get("/api/devices").then(function(t){e.loading=!1,e.devices=t.data.map(function(t){r()(t,{$socket:e.$socket,$options:e.$options,$set:e.$set});var a=new w(t);return a.subscribe(),a})}).catch(function(){e.loading=!1})},fetchGroups:function(){var e=this;this.loading=!0,f.get("/api/groups").then(function(t){e.loading=!1,e.groups=t.data.map(function(e){return new S(e)})}).catch(function(){e.loading=!1})},unclaimDevice:function(e){var t=this;e.unclaim().then(function(){t.fetchDevices()})},addGroup:function(){var e=this,t="/api/groups/create";return f.post(t,{groupname:this.groupName}).then(function(t){t.data&&t.data.error?(e.snackbar=!0,e.snackbarColor="error",e.snackbarText=t.data.error,e.addGroupDialog=!1):(e.groupName="",e.snackbar=!0,e.snackbarColor="success",e.snackbarText="Group added successfully",e.addGroupDialog=!1,e.fetchGroups())}).catch(function(e){console.warn(e)})},deleteGroup:function(){var e=this;this.groupToRemove.delete().then(function(t){t.data&&t.data.error?(e.removeGroupDialog=!1,e.snackbar=!0,e.snackbarColor="error",e.snackbarText=t.data.error,e.groupToRemove={}):(e.removeGroupDialog=!1,e.snackbar=!0,e.snackbarColor="success",e.snackbarText="Group deleted",e.groupToRemove={},e.fetchGroups())}).catch(function(t){e.snackbar=!0,e.snackbarColor="error",e.snackbarText=t,e.addAppDialog=!1,e.groupToRemove={},console.warn(t),e.resetAppToAdd()})},claimDevice:function(){var e=this,t="/api/claim";return f.post(t,{claimCode:this.claimCode}).then(function(t){t.data&&t.data.error?(e.snackbar=!0,e.snackbarColor="error",e.snackbarText=t.data.error,e.claimDeviceDialog=!1):(e.claimCode="",e.snackbar=!0,e.snackbarColor="success",e.snackbarText="Claimed device successfully",e.claimDeviceDialog=!1,e.fetchDevices())}).catch(function(e){console.warn(e)})}},computed:{profile:function(){return D.profile()||{}}},mounted:function(){this.fetchGroups()},watch:{}},$=P,N=(a("8b71"),a("2877")),F=Object(N["a"])($,b,g,!1,null,null,null),q=F.exports,E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"login-container",attrs:{"fill-height":"",fluid:""}},[a("v-layout",{staticClass:"center"},[a("v-flex",{attrs:{md4:"","offset-md4":"",sm6:"","offset-sm3":"",xs8:"","offset-xs2":""}},[a("div",{staticClass:"text-xs-center"},[a("img",{staticClass:"login-logo mt-2 mb-2",attrs:{src:"static/brandlogo.png"}})]),e.isClaimQuery()?a("div",{staticClass:"subheading text-sm-center"},[a("v-card",{staticClass:"white--text",attrs:{color:"secondary",flat:""}},[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("span",[e._v("Please create an account or login to an existing account to claim your device(s).")])])])],1)],1):e._e(),e.isAppQuery()?a("div",{staticClass:"subheading text-sm-center"},[a("v-card",{staticClass:"white--text",attrs:{color:"secondary",flat:""}},[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("span",[e._v("To complete linking your application with this product, please create an account or login with an existing account.")])])])],1)],1):e._e(),a("v-tabs",{attrs:{"slider-color":"accent","fixed-tabs":"",color:"secondary"},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[a("v-tab",{key:"login",staticClass:"white--text",attrs:{ripple:""}},[e._v("Login")]),a("v-tab",{key:"signup",staticClass:"white--text",attrs:{ripple:""}},[e._v("Signup")]),a("v-tab-item",{key:"login",staticClass:"width-limit py-5"},[a("v-form",{ref:"login",model:{value:e.loginValid,callback:function(t){e.loginValid=t},expression:"loginValid"}},[a("v-text-field",{attrs:{dark:"",required:"",rules:e.emailRules,label:"Email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{attrs:{dark:"",required:"",rules:e.passwordRules,type:"password",label:"Password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),a("div",{staticClass:"text-xs-center"},[a("v-btn",{attrs:{disabled:!e.loginValid,color:"primary"},on:{click:function(t){return e.login()}}},[e._v("Login")])],1)],1),a("v-tab-item",{key:"signup",staticClass:"width-limit py-4"},[a("v-form",{ref:"signup",model:{value:e.signupValid,callback:function(t){e.signupValid=t},expression:"signupValid"}},[a("v-text-field",{attrs:{dark:"",required:"",rules:e.nameRules,label:"Name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("v-text-field",{attrs:{dark:"",required:"",rules:e.emailRules,label:"Email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{attrs:{dark:"",required:"",rules:e.passwordRules,type:"password",label:"Password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),a("div",{staticClass:"text-xs-center"},[a("v-btn",{attrs:{disabled:!e.signupValid,color:"primary"},on:{click:function(t){return e.signup()}}},[e._v("Signup")])],1)],1)],1)],1)],1),a("v-snackbar",{attrs:{color:e.snackbarColor},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n    "+e._s(e.snackbarText)+"\n    "),a("v-btn",{attrs:{dark:"",flat:""},on:{click:function(t){e.snackbar=!1}}},[e._v("Close")])],1)],1)},U=[],I={data:function(){return{active:"login",signupValid:!1,loginValid:!1,name:"",nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=30||"Name must be less than 30 characters"}],email:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+/.test(e)||"E-mail must be valid"}],password:"",passwordRules:[function(e){return!!e||"Password is required"},function(e){return e.length>7||"Password too short"}],snackbar:!1,snackbarText:"",snackbarColor:""}},methods:{isClaimQuery:function(){return this.$route.query.claim},isAppQuery:function(){return this.$route.query.apptoken},redirectHome:function(){ue.replace({path:"/",query:this.$route.query})},signup:function(){var e=this,t={name:this.name,email:this.email,password:this.password};D.signup(t).then(function(){e.redirectHome()}).catch(function(t){console.warn({err:t}),e.snackbar=!0,e.snackbarText="Error signing up",e.snackbarColor="error"})},login:function(){var e=this,t={email:this.email,password:this.password};D.login(t).then(function(){e.redirectHome()}).catch(function(t){console.warn({err:t}),e.snackbar=!0,e.snackbarText="Invalid Login",e.snackbarColor="error"})}}},M=I,L=(a("039a"),Object(N["a"])(M,E,U,!1,null,null,null)),V=L.exports,H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[a("v-slide-y-transition",{attrs:{mode:"out-in"}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs6:""}},[a("v-list",{attrs:{"two-line":"",subheader:""}},e._l(e.users,function(t){return a("v-list-tile",{key:t.id,attrs:{avatar:""},on:{click:function(a){e.selectedUser=t}}},[a("v-list-tile-avatar",[a("v-icon",[e._v("verified_user")])],1),a("v-list-tile-content",[a("v-list-tile-title",[e._v(e._s(t.name))]),a("v-list-tile-sub-title",[e._v(e._s(t.email))])],1)],1)}),1)],1),a("v-flex",{attrs:{xs6:""}},[e._v("\n        "+e._s(e.selectedUser)+"\n      ")])],1)],1)],1)},Q=[],J=function(){function e(t){Object(s["a"])(this,e),this.users=t,this.base="/api/users"}return Object(c["a"])(e,[{key:"fetch",value:function(){var e=this;return f.get(this.base).then(function(t){e.users=t.data})}},{key:"users",set:function(e){this._users=e},get:function(){return this._users}}]),e}(),z={data:function(){return{authenticated:D.authenticated,selectedUser:!1,users:[],loading:!1,Users:new J}},methods:{fetchUsers:function(){var e=this,t=this.Users.users;t||this.Users.fetch().then(function(){e.users=e.Users.users})}},mounted:function(){this.fetchUsers()},watch:{}},Y=z,W=(a("649e"),Object(N["a"])(Y,H,Q,!1,null,"18d14fdd",null)),B=W.exports,K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-tabs",{attrs:{centered:"",color:"primary","slider-color":"secondary"},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("v-tab",{key:"devices",attrs:{to:{name:"Group Details",params:{groupname:this.$route.params.groupname,tab:"devices"}},href:"#devices"}},[e._v("Devices")]),a("v-tab",{key:"apps",attrs:{to:{name:"Group Details",params:{groupname:this.$route.params.groupname,tab:"apps"}},href:"#apps"}},[e._v("Apps")])],1),a("v-tabs-items",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[a("v-tab-item",{key:"devices",attrs:{value:"devices"}},[a("v-card",[a("v-card-title",{attrs:{"primary-title":!0}},[e._v("\n          Devices\n          "),a("v-spacer"),a("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-data-table",{attrs:{headers:e.headers,items:e.devices,search:e.search,loading:e.devicesloading},scopedSlots:e._u([{key:"items",fn:function(t){return[a("td",[e._v(e._s(t.item.identity))]),a("td",[e._v(e._s(t.item.online?"online":"offline"))]),a("td",[e._v(e._s(t.item.lastip||"-"))]),a("td",[e._v(e._s(new Date(t.item.lastseen/1e3).toLocaleString()))])]}}])},[a("v-alert",{attrs:{value:!0,color:"error",icon:"warning"},scopedSlots:e._u([{key:"no-results",fn:function(){return[e._v('Your search for "'+e._s(e.search)+'" found no results.')]},proxy:!0}])})],1)],1)],1),a("v-tab-item",{key:"apps",attrs:{value:"apps"}},[a("v-card",[a("v-card-title",[e._v("\n          Apps\n          "),a("v-spacer"),a("v-btn",{attrs:{color:"accent"},on:{click:function(t){e.addAppDialog=!0}}},[a("v-icon",[e._v("cloud")]),e._v("Connect App\n          ")],1)],1),a("v-list",{attrs:{"two-line":"",subheader:""}},[e._l(e.apps,function(t,n){return[a("v-list-tile",{key:t.aid},[a("v-list-tile-avatar",[t.connected?a("v-icon",{attrs:{color:"green lighten-1"}},[e._v("cloud")]):a("v-icon",{attrs:{color:"red darken-2"}},[e._v("cloud")])],1),a("v-list-tile-content",[a("v-list-tile-title",[e._v(e._s(t.name))])],1),a("v-spacer"),a("v-btn",{attrs:{flat:"",color:"red"},on:{click:function(a){return e.prepareDelete(t)}}},[e._v("Remove")])],1),n+1<e.apps.length?a("v-divider",{key:"divider-"+n}):e._e()]}),e.appsloading||0!==e.apps.length?e._e():a("div",{staticClass:"subtitle px-3"},[e._v("You have no connected apps.")]),e.appsloading?a("div",{staticClass:"text-xs-center ma-1"},[a("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1):e._e()],2)],1)],1)],1),a("v-dialog",{attrs:{"max-width":"500"},model:{value:e.removeAppDialog,callback:function(t){e.removeAppDialog=t},expression:"removeAppDialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v('Remove Application "'+e._s(e.appToRemove.name)+'" ?')])]),a("v-card-actions",[a("v-btn",{attrs:{flat:""},on:{click:function(t){e.removeAppDialog=!1}}},[e._v("Cancel")]),a("v-spacer"),a("v-btn",{attrs:{flat:"",color:"red"},on:{click:function(t){return e.deleteApp()}}},[e._v("Remove")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"500"},model:{value:e.addAppDialog,callback:function(t){e.addAppDialog=t},expression:"addAppDialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v("Connect App")])]),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Name*",rules:[function(e){return!!e||"Name is required"}],required:""},model:{value:e.appToAdd.name,callback:function(t){e.$set(e.appToAdd,"name",t)},expression:"appToAdd.name"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-select",{attrs:{items:["Murano","External HTTPS"],label:"Type*",required:""},model:{value:e.appToAdd.type,callback:function(t){e.$set(e.appToAdd,"type",t)},expression:"appToAdd.type"}})],1),"External HTTPS"==e.appToAdd.type?a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{rules:[function(e){return/^https:\/\/.+/.test(e)||"Must start with https://"}],label:"HTTPS callback url",required:""},model:{value:e.appToAdd.httpsTarget,callback:function(t){e.$set(e.appToAdd,"httpsTarget",t)},expression:"appToAdd.httpsTarget"}})],1):e._e()],1)],1),a("small",[e._v("*indicates required field")])],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{flat:""},on:{click:function(t){e.addAppDialog=!1}}},[e._v("Cancel")]),a("v-btn",{attrs:{color:"primary"},nativeOn:{click:function(t){return e.connectApp()}}},[e._v("Generate Token")])],1)],1)],1),a("v-snackbar",{attrs:{color:e.snackbarColor},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n    "+e._s(e.snackbarText)+"\n    "),a("v-btn",{attrs:{dark:"",flat:""},on:{click:function(t){e.snackbar=!1}}},[e._v("Close")])],1),a("v-dialog",{attrs:{width:"700"},model:{value:e.appTokenDialog,callback:function(t){e.appTokenDialog=t},expression:"appTokenDialog"}},[a("v-card",{staticClass:"white--text",attrs:{color:"secondary"}},[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"headline"},[e._v("App token")]),a("span",[e._v(e._s(e.appToken))]),a("input",{attrs:{type:"hidden",id:"app-token"},domProps:{value:e.appToken}})])]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{flat:"",dark:""},on:{click:function(t){return e.CopyToClipboard()}}},[e._v("Copy to Clipboard")]),a("v-btn",{attrs:{flat:"",dark:""},on:{click:function(t){e.appTokenDialog=!1}}},[e._v("Close")])],1)],1)],1)],1)},X=[],Z=(a("c5f6"),{data:function(){return{devicesloading:!1,appsloading:!1,search:"",tabstate:"",addAppDialog:!1,removeAppDialog:!1,appToRemove:{},appTokenDialog:!1,appToken:"",appToAdd:{name:"",type:"Murano",muranoTarget:"",httpsTarget:""},headers:[{text:"Device ID",sortable:!1,value:"id"},{text:"Status",value:"online",sortable:!1},{text:"Last IP",value:"lastip",sortable:!1},{text:"Last Seen",value:"update",sortable:!1}],devices:[],apps:[],snackbar:!1,snackbarText:"",snackbarColor:""}},props:{applinked:Number,deviceclaimed:Number},methods:{CopyToClipboard:function(){var e=document.querySelector("#app-token");e.setAttribute("type","text"),e.select(),document.execCommand("copy"),e.setAttribute("type","hidden"),window.getSelection().removeAllRanges()},prepareDelete:function(e){this.appToRemove=e,this.removeAppDialog=!0},fetchDevices:function(){var e=this;this.devicesloading="primary",this.group.devices.then(function(t){e.devices=t,e.devicesloading=!1}).catch(function(){e.devicesloading=!1})},fetchApps:function(){var e=this;this.appsloading=!0,this.group.apps.then(function(t){e.apps=t,e.appsloading=!1}).catch(function(){e.appsloading=!1})},resetAppToAdd:function(){this.appToAdd.name="",this.appToAdd.target="Murano",this.appToAdd.muranoTarget="",this.appToAdd.httpsTarget=""},connectApp:function(){var e=this,t="/api/app/".concat(this.group.name,"/create"),a={name:this.appToAdd.name,type:this.appToAdd.type,target:"Murano"==this.appToAdd.type?this.appToAdd.muranoTarget:this.appToAdd.httpsTarget};return f.post(t,a).then(function(t){t.data&&t.data.error?(e.snackbar=!0,e.snackbarColor="error",e.snackbarText=t.data.error,e.addAppDialog=!1,e.resetAppToAdd()):(e.addAppDialog=!1,e.resetAppToAdd(),e.appToken=t.data.token,e.appTokenDialog=!0,e.fetchApps())}).catch(function(t){e.snackbar=!0,e.snackbarColor="error",e.snackbarText=t,e.addAppDialog=!1,console.warn(t),e.resetAppToAdd()})},deleteApp:function(){var e=this;this.appToRemove.delete().then(function(t){t.data&&t.data.error?(e.snackbar=!0,e.snackbarColor="error",e.snackbarText=t.data.error,e.removeAppDialog=!1,e.appToRemove={}):(e.removeAppDialog=!1,e.snackbar=!0,e.snackbarColor="success",e.snackbarText="Application removed",e.appToRemove={},e.fetchApps())}).catch(function(t){e.snackbar=!0,e.snackbarColor="error",e.snackbarText=t,e.addAppDialog=!1,console.warn(t),e.resetAppToAdd()})}},watch:{applinked:function(){this.fetchApps()},deviceclaimed:function(){this.fetchDevices()}},computed:{group:function(){return new S({name:this.$route.params.groupname})},tab:{get:function(){return this.tabstate="apps"===this.$route.params.tab?"apps":"devices",this.tabstate},set:function(e){this.tabstate=e}}},mounted:function(){this.fetchDevices(),this.fetchApps()}}),ee=Z,te=(a("a6f5"),Object(N["a"])(ee,K,X,!1,null,null,null)),ae=te.exports,ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"fill-height"},[a("v-layout",[a("v-flex",{staticClass:"px-4 border-right",attrs:{xs6:""}},[a("p",{staticClass:"title"},[e._v("Host: "+e._s(e.location))]),a("v-list",{attrs:{"two-line":""}},[e._l(e.routes,function(t,n){return[t.header?a("v-subheader",{key:n},[e._v(e._s(t.header))]):a("v-list-tile",{key:n,on:{click:function(a){return e.selectRoute(t)}}},[a("v-list-tile-content",[a("v-list-tile-title",[e._v(e._s(t.route))]),a("v-list-tile-sub-title",[e._v(e._s(t.description))])],1)],1)]})],2)],1),a("v-flex",{staticClass:"px-4 pt-4",attrs:{xs6:""}},[e.selectedRoute?a("v-toolbar",{attrs:{dense:"",color:"grey lighten-1"}},[a("v-toolbar-title",[e._v(e._s(e.selectedRoute.route))]),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{flat:"",disabled:e.loading},on:{click:function(t){return e.callApi()}}},[e.loading?a("v-progress-circular",{attrs:{indeterminate:""}}):a("span",[e._v("Call API")])],1)],1)],1):e._e(),a("v-toolbar",{directives:[{name:"show",rawName:"v-show",value:e.selectedRoute&&e.selectedRoute.parameters&&Object.keys(e.selectedRoute.parameters).length,expression:"selectedRoute && selectedRoute.parameters && Object.keys(selectedRoute.parameters).length"}]},e._l(e.selectedRoute.parameters,function(t){return a("v-text-field",{key:t.key,attrs:{label:t.label,"single-line":"","hide-details":""},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"parameter.value"}})}),1),e.selectedRoute&&e.selectedRoute.response?a("v-card",{staticClass:"mt-4",attrs:{dark:""}},[a("v-card-text",[a("pre",[e._v(e._s(e.selectedRoute.response))])])],1):e._e()],1)],1),a("v-snackbar",{attrs:{color:e.snackbarColor},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n    "+e._s(e.snackbarText)+"\n    "),a("v-btn",{attrs:{dark:"",flat:""},on:{click:function(t){e.snackbar=!1}}},[e._v("\n      Close\n    ")])],1)],1)},re=[],oe=window.location.origin,ie={data:function(){return{location:oe,loading:!1,selectedRoute:"",snackbarText:"",snackbar:!1,snackbarColor:"",result:"The API response will appear here",routes:[{header:"Devices"},{route:"/api/claim",method:"post",description:"Claim a device using a claim code",parameters:{claimCode:{key:"claimCode",type:"body",label:"Claim Code",value:""}}},{route:"/api/devices/${identity}/unclaim",method:"post",description:"Unclaim a claimed identity",parameters:{identity:{key:"identity",type:"url",label:"Device Identity",value:""}}},{route:"/api/devices/${identity}",method:"get",description:"Get a single device that the user has access to",parameters:{identity:{key:"identity",type:"url",label:"Device Identity",value:""}}},{route:"/api/devices",method:"get",description:"Get a list of devices the user has claimed"}]}},methods:{selectRoute:function(e){var t=j.a.map(e.parameters,function(e){return r()({},e,{value:""})});this.selectedRoute=r()({},e,{response:"",parameters:t})},callApi:function(){var e=this;if(!this.loading){var t,a=this.selectedRoute,n=a.method,r=a.parameters,o=this.selectedRoute.route,i={};r&&j.a.each(r,function(e){var t=e.type,a=e.key,n=e.value;"url"===t?o=j.a.replace(o,"${"+a+"}",n):i[a]=n}),t="get"===n?f[n](o):f[n](o,i),this.loading=!0,t.then(function(t){e.selectedRoute.response=j.a.get(t,"data"),e.loading=!1}).catch(function(t){e.loading=!1,e.selectedRoute.response="[".concat(j.a.get(t,"response.status"),"] ").concat(j.a.get(t,"response.data")),e.snackbarText=e.selectedRoute.response,e.snackbarColor="error",e.snackbar=!0})}}}},se=ie,ce=(a("35ba"),Object(N["a"])(se,ne,re,!1,null,null,null)),le=ce.exports;i["default"].use(h["a"]);var ue=new h["a"]({routes:[{path:"/",name:"Groups",component:q},{path:"/login",name:"Login",component:V},{path:"/users",name:"Users",component:B},{path:"/api",name:"Api",component:le},{path:"/group/:groupname/:tab",name:"Group Details",component:ae}]}),de=a("ce5b"),pe=a.n(de),ve=a("ec02"),fe=a.n(ve);a("d1e7"),a("bf40");i["default"].use(pe.a,{theme:{primary:"#FFFFFF",secondary:"#FFFFFF",accent:"#F15C2E",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},options:{customProperties:!0},iconfont:"md"}),i["default"].use(a("2ead")),i["default"].component("vue-headful",fe.a),i["default"].config.productionTip=!1,new i["default"]({el:"#app",router:ue,components:{App:m},template:'<App v-bind:title="title" v-bind:description="description" />',data:function(){return{title:"OEM Product",description:"OEM Product"}},created:function(){var e=this;f.get("static/branding.json").then(function(t){var a=t.data;if("object"!==Object(o["a"])(a))return console.error("Wrong branding.json format, json expected.");var n=a.title,i=a.description,s=a.theme,c=void 0===s?{}:s;n&&(e.title=n),i&&(e.description=i),r()(e.$vuetify.theme,c)},function(e){return console.error("Unable to load branding.json file",e)})}})},"649e":function(e,t,a){"use strict";var n=a("2fd0"),r=a.n(n);r.a},"8b71":function(e,t,a){"use strict";var n=a("e3a2"),r=a.n(n);r.a},a6f5:function(e,t,a){"use strict";var n=a("c279"),r=a.n(n);r.a},af6d:function(e,t,a){},c279:function(e,t,a){},e3a2:function(e,t,a){}});
//# sourceMappingURL=app.8ec911a2.js.map