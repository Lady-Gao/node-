(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-f1375520"],{"023b":function(e,t,i){"use strict";var n=i("8276");i.n(n).a},"05c0":function(e,t,i){"use strict";i("7f7f"),i("20d6"),i("ac6a");var n=i("cebc"),o=i("3f4e"),s=i("2f62"),a={name:"CvPublictreeContent",components:{CvContent:o.a},props:{model:String,vehicleMonitor:Function,loading:Boolean,noresize:{default:!1,type:Boolean}},data:function(){return{entryList:[],condition:""}},computed:Object(n.a)({},Object(s.c)(["onlineList","isAttention","socketEnterprise","socketVehicle","vehicle_data","vehicleCondition"]),{isCheck:function(){switch(this.model){case"multi":return!0;case"single":default:return!1}},_treeMethods:function(){return this.$refs.tabs},_contentMethods:function(){return this.$refs.content}}),beforeDestroy:function(){var e=this._treeMethods.getAllNodes;this.setStoreVehicleSearchCondition(this.condition),this.setStoreVehicleData(e())},mounted:function(){var e=this._treeMethods.$refs.tree.reference().ztreeApi;e()&&e().checkAllNodes(!1)},methods:Object(n.a)({},Object(s.b)(["setStoreVehicleData","setStoreVehicleSearchCondition"]),{handlerVehicleSearch:function(e){this.condition=e},vehicle_Monitor:function(e){var t=e.data;if(e.name,"function"==typeof this.vehicleMonitor)switch(this.model){case"multi":return this.vehicle_Monitor_multi(e);case"single":return this.vehicleMonitor(t[0])}},vehicle_Monitor_multi:function(e){var t=this,i=e.data;switch(e.name){case"check":this.entryList=this.entryList.concat(i);break;case"cancel":i.forEach(function(e){var i=t.entryList.findIndex(function(t){return t.id==e.id});0<=i&&t.entryList.splice(i,1)})}this.vehicleMonitor(this.entryList)}})},r=(i("45d7"),i("2877")),c=Object(r.a)(a,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("cv-content",{ref:"content",attrs:{loading:e.loading,noresize:e.noresize}},[e.model?i("cv-tabs-tree",{ref:"tabs",staticClass:"vehiclemaster-tree",attrs:{slot:"aside","vehicle-search":e.vehicleCondition,"is-checked":e.isCheck,"tree-data":e.vehicle_data,"online-monitor":e.onlineList,"vehicle-monitor":e.socketVehicle,"attention-monitor":e.isAttention,"enterprise-fleet-monitor":e.socketEnterprise,"node-monitor":e.vehicle_Monitor},on:{"vehicle-choose-search":e.handlerVehicleSearch},slot:"aside"}):e._e(),e._t("default")],2)},[],!1,null,"2dfdf41b",null).exports;c.install=function(e){e.component(c.name,c)},t.a=c},"370e":function(e,t,i){"use strict";i.r(t),i("386d");var n=i("b0ad"),o=i("05c0"),s=i("8598"),a=i("402e"),r={mixins:[n.a],components:{CvPublictreeContent:o.a,eventAdd:s.a,eventUpdate:a.a},data:function(){return{sendOk:!1,search:{vehicleId:""},vehicleObj:{},multipleSelection:[],dialog:{flag:!1,title:"--",size:"dialog-tiny",selectVehicleObject:null,name:"search",id:"",search:{vehicleId:""}}}},computed:{_table:function(){return this.$refs.table}},methods:{handleSelectionChange:function(e){this.multipleSelection=e},getSelectedCount:function(){return this.multipleSelection.length},getSelectedIds:function(){var e=[];return this.multipleSelection.map(function(t){e.push(t.id)}),e},load:function(){this._table.tableInitial()},filterSubscribe:function(e){switch(e.subscribe){case 0:return this.$t("vehicleInfomation.unsubscribe");case 1:return this.$t("vehicleInfomation.subscribed")}},remove:function(){var e=this;if(this.search.vehicleId){var t=this.getSelectedIds().join(","),i={vehicleId:this.search.vehicleId,type:0,ids:t};0<this.getSelectedCount()?this.confirmPrompt().then(function(){e.$store.dispatch("deleteSomeVehicleInformationSettingsCmd",i).then(function(t){!t.flag&&t.errorCode?e.$message.error({message:e.$t("error."+t.errorCode)}):(e.load(),e.$message.success({message:e.$t("action.removeSuccess")}))})}):this.$message.warning({message:this.$t("vehicleInfomation.alertToSelect")})}else this.$message.warning({message:this.$t("vgPower.choseVehicle")})},sendDelAll:function(){var e=this;if(this.search.vehicleId){var t={type:0,vehicleId:this.search.vehicleId};this.confirmPrompt(this.$t("vehicleInfomation.confirmIsSendDelAll")).then(function(){e.$store.dispatch("deleteAllVehicleInformationSettingsCmd",t).then(function(t){!t.flag&&t.errorCode?e.$message.error({message:e.$t("error."+t.errorCode)}):(e.load(),e.$message.success({message:e.$t("action.orderSuccess")}))})})}else this.$message.warning({message:this.$t("vgPower.choseVehicle")})},sendUpdate:function(){this.search.vehicleId?(this.dialog.flag=!0,this.dialog.name="eventUpdate",this.dialog.size="dialog-large",this.dialog.title="发送更新",this.dialog.id=this.search.vehicleId):this.$message.warning({message:this.$t("vgPower.choseVehicle")})},sendAdd:function(){this.search.vehicleId?(this.dialog.flag=!0,this.dialog.name="eventAdd",this.dialog.size="dialog-small",this.dialog.title=this.vehicleObj.plateCode,this.dialog.id=this.search.vehicleId):this.$message.warning({message:this.$t("vgPower.choseVehicle")})},sendEdit:function(){var e=this;if(this.search.vehicleId){var t=this.getSelectedIds().join(","),i={vehicleId:this.search.vehicleId,type:3,ids:t};0<this.getSelectedCount()?this.confirmPrompt(this.$t("vehicleInfomation.confirmIsSendEdit")).then(function(){e.$store.dispatch("updateVehicleInformationSettingsCmd",i).then(function(t){!t.flag&&t.errorCode?e.$message.error({message:e.$t("error."+t.errorCode)}):(e.load(),e.$message.success({message:e.$t("action.orderSuccess")}))})}):this.$message.warning({message:this.$t("eventInfo.alertToSelect")})}else this.$message.warning({message:this.$t("vgPower.choseVehicle")})},plateColor:function(e){return this.$filter.plateCodeColor(e.plateColor)},handlerVehicleMonitor:function(e){this.vehicleObj=e,this.search.vehicleId=e.id,this.load()}},watch:{sendOk:function(e){e&&(this._table.tableInitial(),this.sendOk=!1)}}},c=(i("023b"),i("2877")),l=Object(c.a)(r,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("cv-operation",{attrs:{position:"left"}},[i("el-form-item"),i("el-form-item",{staticStyle:{float:"right"}},[i("cv-tool",{staticStyle:{margin:"0px"},attrs:{name:e.$route.name,data:e.$store.getters.monitorMenu,"is-search":!1,"is-add":!1,"is-modify":!1,"is-remove":!1,"is-export":!1,"is-sendDelAll":!0,"is-sendUpdate":!0},on:{sendDelAll:e.sendDelAll,sendUpdate:e.sendUpdate,sendAdd:e.sendAdd,sendEdit:e.sendEdit}})],1)],1),i("cv-publictree-content",{attrs:{model:"single","vehicle-monitor":e.handlerVehicleMonitor}},[i("cv-grid",{ref:"table",attrs:{url:"/vehicleInformation/getVehicleInformationPage",params:e.search},on:{"selection-change":e.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"55"}}),i("el-table-column",{attrs:{label:e.$t("vehicleInfomation.plateCode"),prop:"plateCode"}}),i("el-table-column",{attrs:{label:e.$t("vehicleInfomation.plateColor"),prop:"plateColor",formatter:e.plateColor}}),i("el-table-column",{attrs:{label:e.$t("vehicleInfomation.infoType"),prop:"infoType"}}),i("el-table-column",{attrs:{label:e.$t("vehicleInfomation.infoTypeName"),prop:"infoTypeName"}}),i("el-table-column",{attrs:{label:e.$t("vehicleInfomation.subscribe"),prop:"isSend",formatter:e.filterSubscribe}})],1)],1),i("el-dialog",{attrs:{visible:e.dialog.flag,title:e.dialog.title,"custom-class":e.dialog.size},on:{"update:visible":function(t){return e.$set(e.dialog,"flag",t)}}},[i(e.dialog.name,{tag:"component",attrs:{options:e.dialog,sendOk:e.sendOk},on:{"update:sendOk":function(t){e.sendOk=t},"update:send-ok":function(t){e.sendOk=t}}})],1)],1)},[],!1,null,null,null).exports;t.default=l},"45d7":function(e,t,i){"use strict";var n=i("6e18");i.n(n).a},"6e18":function(e,t,i){},8276:function(e,t,i){},b0ad:function(e,t,i){"use strict";(function(e){i("7f7f"),t.a={methods:{confirmPrompt:function(e,t){var i=this,n=e||this.$t("action.confirmIsRemove");return new Promise(function(e,o){i.$confirm(n,i.$t("action.tip"),{confirmButtonText:i.$t("action.confirm"),cancelButtonText:i.$t("action.cancel"),type:"warning"}).then(function(){e()}).catch(function(){"function"==typeof t&&t()})})},timeLimitFunc:function(e,t,i){if(e&&t)return((new Date(t)-new Date(e))/864e5).toFixed(1)<=i||this.$message.error({message:this.$t("请选择时间范围在"+i+"天内")});this.$message.error({message:this.$t("请选择时间范围")})},addRemoveUnique:function(e,t,i){var n=e.length,o=t.length;return o<n?{name:"add",data:this.$service.isUnique(e,t,i)}:n<o?{name:"remove",data:this.$service.isUnique(t,e,i)}:n==o?{name:"equal",data:this.$service.isUnique(e,t,i)}:void 0},showTooltip:function(e,t){var i=e.target,n=this.$refs[t];n.referenceElm=i,n.$refs.popper.style.display="none",n.doDestroy(),n.setExpectedState(!0),n.handleShowPopper()},mouseenterShowTip:function(e,t,i){var n=e.target;if(n.scrollWidth>n.offsetWidth||i)return this.showTooltip(e,t),i?i.startTime+"~"+i.endTime:n.innerText},mouseenterShowToolTip:function(e,t,i){var n=e.target;return this.showTooltip(e,t),!i&&n.innerText},mouseoverHideTip:function(e){var t=this.$refs[e];t&&(t.setExpectedState(!1),t.handleClosePopper())},asyncDownloadScript:function(t,i){var n=this,o=0<arguments.length&&void 0!==t?t:"Baidu",s=1<arguments.length?i:void 0;return e[o]?e[o]._preloader?e[o]._preloader:Promise.resolve(e[o]):(e[o]={},e[o]._preloader=new Promise(function(t,i){var a=document.createElement("script");a.src=s,e.document.body.appendChild(a),n.$service.isIe()&&n.$service.IE_VERSION<11?a.onreadystatechange=function(){"loaded"!=a.readyState&&"complete"!=a.readyState||(t(e[o]),e[o]._preloader=null)}:a.onload=function(){t(e[o]),e[o]._preloader=null}}),e[o]._preloader)}}}}).call(this,i("c8ba"))}}]);