(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6e5ffff0"],{"05c0":function(e,t,i){"use strict";i("7f7f"),i("20d6"),i("ac6a");var n=i("cebc"),a=i("3f4e"),o=i("2f62"),r={name:"CvPublictreeContent",components:{CvContent:a.a},props:{model:String,vehicleMonitor:Function,loading:Boolean,noresize:{default:!1,type:Boolean}},data:function(){return{entryList:[],condition:""}},computed:Object(n.a)({},Object(o.c)(["onlineList","isAttention","socketEnterprise","socketVehicle","vehicle_data","vehicleCondition"]),{isCheck:function(){switch(this.model){case"multi":return!0;case"single":default:return!1}},_treeMethods:function(){return this.$refs.tabs},_contentMethods:function(){return this.$refs.content}}),beforeDestroy:function(){var e=this._treeMethods.getAllNodes;this.setStoreVehicleSearchCondition(this.condition),this.setStoreVehicleData(e())},mounted:function(){var e=this._treeMethods.$refs.tree.reference().ztreeApi;e()&&e().checkAllNodes(!1)},methods:Object(n.a)({},Object(o.b)(["setStoreVehicleData","setStoreVehicleSearchCondition"]),{handlerVehicleSearch:function(e){this.condition=e},vehicle_Monitor:function(e){var t=e.data;if(e.name,"function"==typeof this.vehicleMonitor)switch(this.model){case"multi":return this.vehicle_Monitor_multi(e);case"single":return this.vehicleMonitor(t[0])}},vehicle_Monitor_multi:function(e){var t=this,i=e.data;switch(e.name){case"check":this.entryList=this.entryList.concat(i);break;case"cancel":i.forEach(function(e){var i=t.entryList.findIndex(function(t){return t.id==e.id});0<=i&&t.entryList.splice(i,1)})}this.vehicleMonitor(this.entryList)}})},l=(i("45d7"),i("2877")),s=Object(l.a)(r,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("cv-content",{ref:"content",attrs:{loading:e.loading,noresize:e.noresize}},[e.model?i("cv-tabs-tree",{ref:"tabs",staticClass:"vehiclemaster-tree",attrs:{slot:"aside","vehicle-search":e.vehicleCondition,"is-checked":e.isCheck,"tree-data":e.vehicle_data,"online-monitor":e.onlineList,"vehicle-monitor":e.socketVehicle,"attention-monitor":e.isAttention,"enterprise-fleet-monitor":e.socketEnterprise,"node-monitor":e.vehicle_Monitor},on:{"vehicle-choose-search":e.handlerVehicleSearch},slot:"aside"}):e._e(),e._t("default")],2)},[],!1,null,"2dfdf41b",null).exports;s.install=function(e){e.component(s.name,s)},t.a=s},"45d7":function(e,t,i){"use strict";var n=i("6e18");i.n(n).a},"6e18":function(e,t,i){},aa770:function(e,t,i){"use strict";i.r(t);var n={components:{CvPublictreeContent:i("05c0").a},data:function(){return{plateCode:"--",vehicleId:"",searchTime:[this.$filter.timeStamp(this.$filter.format(new Date-864e5,"yyyy-MM-dd")),this.$filter.timeStamp(this.$filter.format(new Date-864e5,"yyyy-MM-dd"))],table:[],pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()-864e5}}}},methods:{tableLoad:function(){var e=this,t=this.getData();this.$store.dispatch("queryEnergyConsumeDetailInfo",t).then(function(t){var i=t.data,n=t.flag;e.table=n&&i?i:[]})},down:function(){var e=this.getData();if(e){var t=this.$service.winParams(this.$COMMON.baseUrl+"/vehicleDailyReport/exportExcelEnergyConsumeDetailInfo",e);window.location.href=t}},getData:function(){return this.searchTime?this.vehicleId?{vehicleId:this.vehicleId,startTime:this.$filter.format(this.searchTime[0],"yyyy-MM-dd"),endTime:this.$filter.format(this.searchTime[1],"yyyy-MM-dd")}:(this.$message.warning("请选择车辆"),!1):(this.$message.warning("请选择时间"),!1)},handlerVehicleMonitor:function(e){this.vehicleId=e.id,this.plateCode=e.plateCode}},mounted:function(){this.$route.query&&(this.plateCode=this.$route.query.plateCode,this.vehicleId=this.$route.query.vehicleId,this.searchTime=[this.$filter.timeStamp(this.$route.query.startTime),this.$filter.timeStamp(this.$route.query.endTime)]),this.tableLoad()}},a=i("2877"),o=Object(a.a)(n,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"energy"},[i("cv-operation",{attrs:{position:"left"}},[i("el-form-item",{attrs:{label:"车牌号码:"}},[e._v("\n                "+e._s(e.plateCode)+"\n        ")]),i("el-form-item",{attrs:{label:"查询时间:"}},[i("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions},model:{value:e.searchTime,callback:function(t){e.searchTime=t},expression:"searchTime"}})],1),i("el-form-item",{staticStyle:{float:"right"},attrs:{label:""}},[i("cv-tool",{staticClass:"cv-tool",attrs:{name:e.$route.name,data:e.$store.getters.monitorMenu,"is-remove":!1,"is-add":!1,"is-modify":!1,"is-reset":!1},on:{search:e.tableLoad,export:e.down}})],1)],1),i("cv-publictree-content",{attrs:{model:"single","vehicle-monitor":e.handlerVehicleMonitor}},[i("cv-grid",{attrs:{data:e.table}},[i("el-table-column",{attrs:{label:"日期",prop:"date"}}),i("el-table-column",{attrs:{label:"时间(min)"}},[i("el-table-column",{attrs:{label:"开机时长",prop:"workDurationDb"}}),i("el-table-column",{attrs:{label:"空跑时长",prop:"batholithDurationDb"}}),i("el-table-column",{attrs:{label:"怠速时长",prop:"idlingDurationDb"}}),i("el-table-column",{attrs:{label:"作业时长",prop:"workDriverLastDb"}})],1),i("el-table-column",{attrs:{label:"里程(km)"}},[i("el-table-column",{attrs:{label:"行驶里程",prop:"mile"}})],1),i("el-table-column",{attrs:{label:"油耗(L)"}},[i("el-table-column",{attrs:{label:"行驶油耗",prop:"allSumOilUse"}}),i("el-table-column",{attrs:{label:"怠速油耗",prop:"idlingoil"}}),i("el-table-column",{attrs:{label:"作业油耗",prop:"workSumOilUse"}})],1),i("el-table-column",{attrs:{label:"效率"}},[i("el-table-column",{attrs:{label:"平均油耗(L/100km)",prop:"avgOil",width:"140"}}),i("el-table-column",{attrs:{label:"作业效率(L/h)",prop:"workAvgOil"}})],1)],1)],1)],1)},[],!1,null,null,null).exports;t.default=o}}]);