(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1072cfdd"],{"2b02":function(t,e,a){},"37c8":function(t,e,a){e.f=a("2b4c")},"3a72":function(t,e,a){var i=a("7726"),r=a("8378"),n=a("2d00"),s=a("37c8"),o=a("86cc").f;t.exports=function(t){var e=r.Symbol||(r.Symbol=n?{}:i.Symbol||{});"_"==t.charAt(0)||t in e||o(e,t,{value:s.f(t)})}},"3dca":function(t,e,a){"use strict";var i=a("2b02");a.n(i).a},"67ab":function(t,e,a){function i(t){o(t,r,{value:{i:"O"+ ++l,w:{}}})}var r=a("ca5a")("meta"),n=a("d3f4"),s=a("69a8"),o=a("86cc").f,l=0,c=Object.isExtensible||function(){return!0},h=!a("79e5")(function(){return c(Object.preventExtensions({}))}),f=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!n(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!s(t,r)){if(!c(t))return"F";if(!e)return"E";i(t)}return t[r].i},getWeak:function(t,e){if(!s(t,r)){if(!c(t))return!0;if(!e)return!1;i(t)}return t[r].w},onFreeze:function(t){return h&&f.NEED&&c(t)&&!s(t,r)&&i(t),t}}},"7bbc":function(t,e,a){var i=a("6821"),r=a("9093").f,n={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return s&&"[object Window]"==n.call(t)?function(t){try{return r(t)}catch(t){return s.slice()}}(t):r(i(t))}},"8a81":function(t,e,a){"use strict";function i(t){var e=V[t]=T(H[Y]);return e._k=t,e}function r(t,e){F(t);for(var a,i=S(e=_(e)),r=0,n=i.length;r<n;)et(t,a=i[r++],e[a]);return t}function n(t){var e=W.call(this,t=N(t,!0));return!(this===G&&h(V,t)&&!h(X,t))&&(!(e||!h(this,t)||!h(V,t)||h(this,B)&&this[B][t])||e)}function s(t,e){if(t=_(t),e=N(e,!0),t!==G||!h(V,e)||h(X,e)){var a=D(t,e);return!a||!h(V,e)||h(t,B)&&t[B][e]||(a.enumerable=!0),a}}function o(t){for(var e,a=I(_(t)),i=[],r=0;a.length>r;)h(V,e=a[r++])||e==B||e==d||i.push(e);return i}function l(t){for(var e,a=t===G,i=I(a?X:_(t)),r=[],n=0;i.length>n;)!h(V,e=i[n++])||a&&!h(G,e)||r.push(V[e]);return r}var c=a("7726"),h=a("69a8"),f=a("9e1e"),u=a("5ca1"),m=a("2aba"),d=a("67ab").KEY,p=a("79e5"),g=a("5537"),y=a("7f20"),b=a("ca5a"),v=a("2b4c"),O=a("37c8"),M=a("3a72"),S=a("d4c0"),k=a("1169"),F=a("cb7c"),w=a("d3f4"),C=a("4bf8"),_=a("6821"),N=a("6a99"),$=a("4630"),T=a("2aeb"),j=a("7bbc"),A=a("11e9"),L=a("2621"),P=a("86cc"),x=a("0d58"),D=A.f,E=P.f,I=j.f,H=c.Symbol,J=c.JSON,R=J&&J.stringify,Y="prototype",B=v("_hidden"),K=v("toPrimitive"),W={}.propertyIsEnumerable,z=g("symbol-registry"),V=g("symbols"),X=g("op-symbols"),G=Object[Y],Q="function"==typeof H&&!!L.f,q=c.QObject,U=!q||!q[Y]||!q[Y].findChild,Z=f&&p(function(){return 7!=T(E({},"a",{get:function(){return E(this,"a",{value:7}).a}})).a})?function(t,e,a){var i=D(G,e);i&&delete G[e],E(t,e,a),i&&t!==G&&E(G,e,i)}:E,tt=Q&&"symbol"==typeof H.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof H},et=function(t,e,a){return t===G&&et(X,e,a),F(t),e=N(e,!0),F(a),h(V,e)?(a.enumerable?(h(t,B)&&t[B][e]&&(t[B][e]=!1),a=T(a,{enumerable:$(0,!1)})):(h(t,B)||E(t,B,$(1,{})),t[B][e]=!0),Z(t,e,a)):E(t,e,a)};Q||(m((H=function(t){if(this instanceof H)throw TypeError("Symbol is not a constructor!");var e=b(0<arguments.length?t:void 0),a=function(t){this===G&&a.call(X,t),h(this,B)&&h(this[B],e)&&(this[B][e]=!1),Z(this,e,$(1,t))};return f&&U&&Z(G,e,{configurable:!0,set:a}),i(e)})[Y],"toString",function(){return this._k}),A.f=s,P.f=et,a("9093").f=j.f=o,a("52a7").f=n,L.f=l,f&&!a("2d00")&&m(G,"propertyIsEnumerable",n,!0),O.f=function(t){return i(v(t))}),u(u.G+u.W+u.F*!Q,{Symbol:H});for(var at="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),it=0;at.length>it;)v(at[it++]);for(var rt=x(v.store),nt=0;rt.length>nt;)M(rt[nt++]);u(u.S+u.F*!Q,"Symbol",{for:function(t){return h(z,t+="")?z[t]:z[t]=H(t)},keyFor:function(t){if(!tt(t))throw TypeError(t+" is not a symbol!");for(var e in z)if(z[e]===t)return e},useSetter:function(){U=!0},useSimple:function(){U=!1}}),u(u.S+u.F*!Q,"Object",{create:function(t,e){return void 0===e?T(t):r(T(t),e)},defineProperty:et,defineProperties:r,getOwnPropertyDescriptor:s,getOwnPropertyNames:o,getOwnPropertySymbols:l});var st=p(function(){L.f(1)});u(u.S+u.F*st,"Object",{getOwnPropertySymbols:function(t){return L.f(C(t))}}),J&&u(u.S+u.F*(!Q||p(function(){var t=H();return"[null]"!=R([t])||"{}"!=R({a:t})||"{}"!=R(Object(t))})),"JSON",{stringify:function(t){for(var e,a,i=[t],r=1;r<arguments.length;)i.push(arguments[r++]);if(a=e=i[1],(w(e)||void 0!==t)&&!tt(t))return k(e)||(e=function(t,e){if("function"==typeof a&&(e=a.call(this,t,e)),!tt(e))return e}),i[1]=e,R.apply(J,i)}}),H[Y][K]||a("32e9")(H[Y],K,H[Y].valueOf),y(H,"Symbol"),y(Math,"Math",!0),y(c.JSON,"JSON",!0)},"943c":function(t,e,a){"use strict";a.r(e),a("ac4d"),a("8a81"),a("ac6a");var i=a("cebc"),r=a("afa1"),n=a("4728"),s=a("2f62"),o={components:{scrollbarPagination:r.a,vehicleMessage:n.a},computed:Object(i.a)({},Object(s.c)(["mapName"]),{_mapMethods:function(){return this.$refs.map.mapMethods}}),data:function(){return{areaForm:{},pickerOptions0:{disabledDate:function(t){return t.getTime()>new Date-864e5}},newTime:!1,isFull:!1,disStr:"block",num:0,countNum:2,addOverLayFlg:!1,cleanFlg:!0,searchFlg:!0,tagArry:[],loadFlag:!1,pointMarkers:{},vehicleData:{},MarkerClusterer:null,mapAllPoint:[],time:[this.$filter.timeStamp(this.$filter.format(new Date-864e5,"yyyy-MM-dd start")),this.$filter.timeStamp(this.$filter.format(new Date-864e5,"yyyy-MM-dd end"))],searchObj:{beginTime:"",endTime:"",overLayObj:{}},popover:{flag:!1},scurrent:0,currentId:null,scrollPageData:null,allData:null,allPoint:[]}},methods:{change:function(t){this.searchObj.beginTime=/NAN/gi.test(this.$filter.format(this.time[0]))?this.time[0]:this.$filter.format(this.time[0],"yyyy-MM-dd HH:mm:ss"),this.searchObj.endTime=/NAN/gi.test(this.$filter.format(this.time[1]))?this.time[1]:this.$filter.format(this.time[1],"yyyy-MM-dd HH:mm:ss"),1<this.$filter.timeRange(this.searchObj.beginTime,this.searchObj.endTime)?(this.$message.warning("查询时间不能超过1天!"),this.addOverLayFlg=!0):this.addOverLayFlg=!1},toggleSearch:function(){this.isFull?(this.isFull=!1,this.disStr="block"):(this.isFull=!0,this.disStr="none")},addOverLay:function(){this.toggleSearch(),this.pointMarkers={};var t=this;this._mapMethods.onclickRectangle(function(e){t.num++,t._mapMethods.overlayEdit(e.overlay,!1),t.tagArry.push({name:"区域"+t.num,type:"success",options:e}),t.toggleSearch(),t.tagArry.length==t.countNum&&(t.addOverLayFlg=!0),t.cleanFlg=!1,t.searchFlg=!1})},cleanMap:function(){this._mapMethods.markerClustererClearAll(),this._mapMethods.clearOverlays(),this.tagArry=[],this.mapAllPoint=[],this.allData=[],this.num=0,this.addOverLayFlg=!1,this.cleanFlg=!0,this.searchFlg=!0},searchDate:function(){var t=this;if(this.time[0]){var e=this.getParams();this.loadFlag=!0,this.$store.dispatch("findAreaCar",{areaList:e,mapType:this.$store.getters.mapType}).then(function(e){e.flag?e.data&&0!=e.data.length?(t.cleanMap(),t.allData=e.data,t.setOverLay(t.allData),t.loadFlag=!1,t.scurrent=1,t._mapMethods.getBestView(t.allPoint)):(t.cleanMap(),t.$message.error("查询数据为空"),t.loadFlag=!1):(t.$message.error(t.$t("error."+e.errorCode)),t.cleanMap(),t.loadFlag=!1)})}else this.$message.warning("请选择正确的时间范围!")},setOverLay:function(t){var e=this;t.forEach(function(t){var a={};a.latitude=t.mapLatitude,a.longitude=t.mapLongitude,e.allPoint.push({lat:t.mapLatitude,lng:t.mapLongitude});var i=e._mapMethods.point(a),r=e._mapMethods.mapAddpoint(a,e.$filter.isOnline(t,!1,e.$store.getters.mapName));r.setRotation(t.directionText),r.label=e._mapMethods.addLabel(r,t.plateCode),e.mapAllPoint.push(r),e._mapMethods.addEventListener(r,"click",function(){e.popover.flag=!0,e.vehicleData=t,r.label.setStyle({backgroundColor:"black",color:"#fff"}),e.currentId=t.vehicleId,r.setTop(!0),e._mapMethods.moveToCenter(i,20)}),r.setRotation(t.direction),e.mapAllPoint.push(r),e.pointMarkers[t.vehicleId]=r}),this._mapMethods.markerClustererAddMarkers(this.mapAllPoint),this._mapMethods.getBestView(this.allPoint)},getParams:function(){var t=this.tagArry,e=[];this.searchObj.beginTime=/NAN/gi.test(this.$filter.format(this.time[0]))?this.time[0]:this.$filter.format(this.time[0],"yyyy-MM-dd HH:mm:ss"),this.searchObj.endTime=/NAN/gi.test(this.$filter.format(this.time[1]))?this.time[1]:this.$filter.format(this.time[1],"yyyy-MM-dd HH:mm:ss");var a=!0,i=!1,r=void 0;try{for(var n,s=t[Symbol.iterator]();!(a=(n=s.next()).done);a=!0){var o=n.value.options.params;e.push({leftX:o.minLat,leftY:o.minLng,rightX:o.maxLat,rightY:o.maxLng,beginTime:this.searchObj.beginTime,endTime:this.searchObj.endTime})}}catch(t){i=!0,r=t}finally{try{a||null==s.return||s.return()}finally{if(i)throw r}}return JSON.stringify(e)},handleClose:function(t){this._mapMethods.removeOverlay(t.options.overlay),this.tagArry.splice(this.tagArry.indexOf(t),1),this.tagArry.length<this.countNum&&(this.addOverLayFlg=!1),0==this.tagArry.length&&(this.cleanFlg=!0,this.searchFlg=!0)},paginationClick:function(t){var e=this._mapMethods.point({lat:t.mapLatitude,lng:t.mapLongitude});this._mapMethods.moveToCenter(e,20),this.pointMarkers[t.vehicleId].label.setStyle({backgroundColor:"black",color:"#fff"}),this.pointMarkers[t.vehicleId].setTop(!0),this.vehicleData=t,this.currentId=t.vehicleId,this.popover.flag=!0}},watch:{currentId:function(t,e){e&&(this.pointMarkers[e].label.setStyle({backgroundColor:"#f8f8f8",color:"#666"}),this.pointMarkers[e].setTop(!1))}}},l=(a("3dca"),a("2877")),c=Object(l.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"areaDiv"},[a(t.mapName,{directives:[{name:"loading",rawName:"v-loading",value:t.loadFlag,expression:"loadFlag"}],ref:"map",tag:"component",staticClass:"multiMap",attrs:{zooms:[4,18],"element-loading-text":"拼命加载中"}}),a("el-card",{staticClass:"box-card areaCard",attrs:{"body-style":{display:t.disStr}}},[a("div",{staticClass:"clearfix textFont",attrs:{slot:"header"},slot:"header"},[a("span",{staticStyle:{"line-height":"1"}},[t._v("定时定位查车")]),a("span",{staticClass:"toolItem",on:{click:t.toggleSearch}},[a("cv-icon",{attrs:{name:t.isFull?"shanglajiantou-copy":"xialajiantou"}})],1)]),a("cv-scrollbar",{ref:"searchText",staticClass:"formClass"},[a("el-form",{ref:"searchForm",attrs:{model:t.areaForm}},[a("el-form-item",{attrs:{label:"选择时间:"}},[a("el-tooltip",{attrs:{placement:"top",enterable:!1}},[a("div",{attrs:{slot:"content"},slot:"content"},[t._v("\n                            "+t._s(/NAN/gi.test(this.$filter.format(this.time[0]))?this.time[0]:t.$filter.format(this.time[0],"yyyy-MM-dd HH:mm:ss"))+"\n                            -\n                            "+t._s(/NAN/gi.test(this.$filter.format(this.time[1]))?this.time[1]:t.$filter.format(this.time[1],"yyyy-MM-dd HH:mm:ss"))+"\n                        ")]),a("el-date-picker",{staticClass:"picker",attrs:{"picker-options":t.pickerOptions0,clearable:!1,editable:!1,type:"datetimerange",placeholder:"选择时间范围",prop:"time"},on:{change:function(e){return t.change(t.val)}},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1)],1)],1),a("div",{staticClass:"areaBtn"},[a("el-button-group",{staticClass:"btnfloat"},[a("el-button",{attrs:{disabled:t.addOverLayFlg},on:{click:t.addOverLay}},[t._v("画框")]),a("el-button",{attrs:{disabled:t.cleanFlg},on:{click:t.cleanMap}},[t._v("重置")]),a("el-button",{attrs:{disabled:t.searchFlg},on:{click:t.searchDate}},[t._v("查询")])],1)],1)],1),a("div",{staticClass:"areaTag"},t._l(t.tagArry,function(e){return a("el-tag",{key:e.name,staticClass:"tag",attrs:{closable:!0,type:e.type},on:{close:function(a){return t.handleClose(e)}}},[t._v(t._s(e.name))])}),1)],1),a("vehicle-message",{staticStyle:{top:"0px",right:"5px"},attrs:{data:t.vehicleData,"is-show":t.popover,"is-send":!1}}),a("scrollbar-pagination",{staticClass:"track-list",attrs:{all:t.allData,"current-id":t.currentId},on:{position:t.paginationClick}})],1)},[],!1,null,null,null).exports;e.default=c},ac4d:function(t,e,a){a("3a72")("asyncIterator")},d4c0:function(t,e,a){var i=a("0d58"),r=a("2621"),n=a("52a7");t.exports=function(t){var e=i(t),a=r.f;if(a)for(var s,o=a(t),l=n.f,c=0;o.length>c;)l.call(t,s=o[c++])&&e.push(s);return e}}}]);