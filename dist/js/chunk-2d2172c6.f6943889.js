(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d2172c6"],{c630:function(t,e,a){"use strict";a.r(e),a("7f7f"),a("386d");var l={data:function(){return{plateCode:"",table:{data:[],options:{current:1,size:10,total:0,flag:!1},loading:!1}}},methods:{search:function(t){var e=this;t?(this.table.options.flag=!0,this.table.options.current=1):this.table.options.flag=!1,this.table.loading=!0,this.$store.dispatch("findVehicleEndLocationInfoList",{plateCode:this.plateCode,current:this.table.options.current,size:this.table.options.size}).then(function(t){t.flag?(e.table.data=t.data.records,e.table.options.total=t.data.total):(e.table.data=[],e.table.options.total=0),e.table.loading=!1}).catch(function(t){e.table.loading=!1,e.$message.error("请求异常")})},down:function(){var t=this.$service.winParams(this.$COMMON.baseUrl+"/vehicleEndLocation/exportVehicleEndLocationInfoList",{plateCode:this.plateCode});window.location.href=t},tableFilterFormat:function(t){return this.$filter.format(t.orderTime||t.gpsTime)}},mounted:function(){this.search()}},o=a("2877"),n=Object(o.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"locationInfo-list"},[a("cv-tool",{attrs:{name:t.$route.name,data:t.$store.getters.manageMenus,"is-modify":!1,"is-add":!1,"is-remove":!1,"is-export":!0},on:{search:t.search,export:t.down}}),a("el-form",{staticStyle:{float:"right","margin-top":"12px"},attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"车牌号码:"}},[a("el-input",{attrs:{maxlength:10},model:{value:t.plateCode,callback:function(e){t.plateCode="string"==typeof e?e.trim():e},expression:"plateCode"}})],1)],1),a("cv-grid",{staticClass:"table",attrs:{options:t.table.options},on:{load:function(e){return t.search(!1)}}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.table.loading,expression:"table.loading"}],attrs:{border:"",stripe:"",data:t.table.data}},[a("el-table-column",{attrs:{label:"车牌号码",prop:"plateCode"}}),a("el-table-column",{attrs:{label:"车牌颜色",prop:"plateColor"}}),a("el-table-column",{attrs:{label:"经度",prop:"longitude"}}),a("el-table-column",{attrs:{label:"纬度",prop:"latitude"}}),a("el-table-column",{attrs:{label:"位置信息",prop:"locationName"}}),a("el-table-column",{attrs:{label:"里程(km)",prop:"mileage"}}),a("el-table-column",{attrs:{label:"行驶速度(km/h)",prop:"dspeed"}}),a("el-table-column",{attrs:{label:"GPS速度(km/h)",prop:"gpsSpeed"}}),a("el-table-column",{attrs:{label:"GPS时间",prop:"gpsTime",formatter:t.tableFilterFormat}}),a("el-table-column",{attrs:{label:"所属公司",prop:"enterpriseName"}})],1)],1)],1)},[],!1,null,"6376c5a1",null).exports;n.install=function(t){t.component(n.name,n)},e.default=n}}]);