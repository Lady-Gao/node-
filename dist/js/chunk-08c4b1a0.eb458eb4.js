(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-08c4b1a0"],{"07b9":function(e,t,r){"use strict";r("96cf");var a=r("3b8d"),n={name:"tankTable",props:{configId:{},refresh:{},configType:{},remark:{default:function(){return!0}}},mixins:[r("b0ad").a],computed:{_table:function(){return this.$refs.tankTable}},methods:{del:function(e){var t=this;this.confirmPrompt().then(function(){Object(a.a)(regeneratorRuntime.mark(function r(){var a,n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.$store.dispatch("deleteOilMassConfigDetail",{id:e});case 2:a=r.sent,a.data,n=a.flag,a.errorCode,n?(t.$message.success({message:"删除成功"}),t._table.tableInitial()):t.$message.error({message:"删除失败"});case 7:case"end":return r.stop()}},r)}))()})}},watch:{"configId.configId":function(e,t){e&&this._table.tableInitial(!0)},refresh:function(e){e&&(this._table.tableInitial(!0),this.$emit("update:refresh",!1))}}},i=r("2877"),o=Object(i.a)(n,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("cv-grid",{ref:"tankTable",attrs:{params:e.configId,url:"/oilMassConfig/queryOilMassConfigDetail"}},[r("el-table-column",{attrs:{type:"index",width:"60"}}),1==e.configType?r("el-table-column",{attrs:{label:e.$t("oil.percentage"),prop:"percentage"}}):e._e(),2==e.configType?r("el-table-column",{attrs:{label:e.$t("oil.maxHeight"),prop:"height"}}):e._e(),r("el-table-column",{attrs:{label:e.$t("oil.percentageOilmass"),prop:"percentageOilmass"}}),e.remark?r("el-table-column",{attrs:{label:e.$t("dD.bei"),prop:"remark"}}):e._e(),r("el-table-column",{attrs:{label:e.$t("action.operation")},scopedSlots:e._u([{key:"default",fn:function(t){return[r("cv-span",{attrs:{type:"danger"},nativeOn:{click:function(r){return e.del(t.row.id)}}},[e._v("删除")])]}}])})],1)},[],!1,null,null,null);t.a=o.exports},"389e":function(e,t,r){"use strict";var a=r("a257");r.n(a).a},a257:function(e,t,r){},b0ad:function(e,t,r){"use strict";(function(e){r("7f7f"),t.a={methods:{confirmPrompt:function(e,t){var r=this,a=e||this.$t("action.confirmIsRemove");return new Promise(function(e,n){r.$confirm(a,r.$t("action.tip"),{confirmButtonText:r.$t("action.confirm"),cancelButtonText:r.$t("action.cancel"),type:"warning"}).then(function(){e()}).catch(function(){"function"==typeof t&&t()})})},timeLimitFunc:function(e,t,r){if(e&&t)return((new Date(t)-new Date(e))/864e5).toFixed(1)<=r||this.$message.error({message:this.$t("请选择时间范围在"+r+"天内")});this.$message.error({message:this.$t("请选择时间范围")})},addRemoveUnique:function(e,t,r){var a=e.length,n=t.length;return n<a?{name:"add",data:this.$service.isUnique(e,t,r)}:a<n?{name:"remove",data:this.$service.isUnique(t,e,r)}:a==n?{name:"equal",data:this.$service.isUnique(e,t,r)}:void 0},showTooltip:function(e,t){var r=e.target,a=this.$refs[t];a.referenceElm=r,a.$refs.popper.style.display="none",a.doDestroy(),a.setExpectedState(!0),a.handleShowPopper()},mouseenterShowTip:function(e,t,r){var a=e.target;if(a.scrollWidth>a.offsetWidth||r)return this.showTooltip(e,t),r?r.startTime+"~"+r.endTime:a.innerText},mouseenterShowToolTip:function(e,t,r){var a=e.target;return this.showTooltip(e,t),!r&&a.innerText},mouseoverHideTip:function(e){var t=this.$refs[e];t&&(t.setExpectedState(!1),t.handleClosePopper())},asyncDownloadScript:function(t,r){var a=this,n=0<arguments.length&&void 0!==t?t:"Baidu",i=1<arguments.length?r:void 0;return e[n]?e[n]._preloader?e[n]._preloader:Promise.resolve(e[n]):(e[n]={},e[n]._preloader=new Promise(function(t,r){var o=document.createElement("script");o.src=i,e.document.body.appendChild(o),a.$service.isIe()&&a.$service.IE_VERSION<11?o.onreadystatechange=function(){"loaded"!=o.readyState&&"complete"!=o.readyState||(t(e[n]),e[n]._preloader=null)}:o.onload=function(){t(e[n]),e[n]._preloader=null}}),e[n]._preloader)}}}}).call(this,r("c8ba"))},f6fd:function(e,t,r){"use strict";r.r(t),r("ac6a"),r("7f7f");var a=r("07b9"),n={name:"tankNowTable",props:{vehicleId:{},searchFlag:{},type:{}},computed:{_table:function(){return this.$refs.detailTable}},data:function(){return{timer:null}},methods:{getTableData:function(){return this._table.table.data}},watch:{searchFlag:function(e){var t=this;e&&(this._table.tableInitial(),this.timer=setInterval(function(){t._table.tableInitial()},12e4),this.$emit("update:searchFlag",!1))}},destroyed:function(){clearInterval(this.timer)}},i=r("2877"),o=Object(i.a)(n,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("cv-grid",{ref:"detailTable",attrs:{params:e.vehicleId,url:"/oilMassConfig/queryRealTimeOil"}},[r("el-table-column",{attrs:{type:"index",width:"50"}}),r("el-table-column",{attrs:{label:e.$t("上报时间"),prop:"reportTime"}}),1==e.type?r("el-table-column",{attrs:{label:"当前液位(L)",prop:"oilLevel"}}):e._e(),2==e.type?r("el-table-column",{attrs:{label:"当前高度(mm)",prop:"oilHeight"}}):e._e()],1)},[],!1,null,null,null).exports,l={props:{options:{}},mixins:[""],data:function(){return{ruleForm:{currentLevel:"",currentHeight:"",currentMass:"",remark:""},rules:{currentLevel:[{required:!0,message:"请输入当前液位",trigger:"blur,change"}],currentHeight:[{required:!0,message:"请输入当前高度",trigger:"blur,change"}],currentMass:[{required:!0,message:"请输入当前油量",trigger:"blur,change"}]}}},methods:{cancelDialog:function(){this.$emit("update:visible",!1)},confirm:function(){var e=this;this.$refs.tankRules.validate(function(t){if(!t)return!1;var r={configId:e.options.configId,percentageOilmass:e.ruleForm.currentMass,remark:e.ruleForm.remark};1==e.$route.query.type?r.percentage=e.ruleForm.currentLevel:r.height=e.ruleForm.currentHeight,e.options.edit?(r.id=e.options.id,e.$store.dispatch("updateOilMassConfig",r).then(function(t){t.flag?(e.$message.success({message:"更新成功"}),e.$emit("update:refresh",!0)):e.$message.error({message:e.$t("error."+t.errorCode)}),e.$emit("update:visible",!1)})):e.$store.dispatch("insertOilMassConfigDetail",r).then(function(t){t.flag?(e.$message.success({message:"新增成功"}),e.$emit("update:refresh",!0)):e.$message.error({message:e.$t("error."+t.errorCode)}),e.$emit("update:visible",!1)})})}},mounted:function(){this.ruleForm.currentLevel=this.options.oilLevel,this.ruleForm.currentHeight=this.options.oilHeight}},s=Object(i.a)(l,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"tankRules",attrs:{model:e.ruleForm,rules:e.rules}},[1==e.$route.query.type?r("el-form-item",{attrs:{label:"当前液位(L)",prop:"currentLevel"}},[r("el-input",{model:{value:e.ruleForm.currentLevel,callback:function(t){e.$set(e.ruleForm,"currentLevel",t)},expression:"ruleForm.currentLevel"}})],1):e._e(),2==e.$route.query.type?r("el-form-item",{attrs:{label:"当前高度(mm)",prop:"currentHeight"}},[r("el-input",{model:{value:e.ruleForm.currentHeight,callback:function(t){e.$set(e.ruleForm,"currentHeight",t)},expression:"ruleForm.currentHeight"}})],1):e._e(),r("el-form-item",{attrs:{label:"当前油量(L)",prop:"currentMass"}},[r("el-input",{model:{value:e.ruleForm.currentMass,callback:function(t){e.$set(e.ruleForm,"currentMass",e._n(t))},expression:"ruleForm.currentMass"}})],1),r("el-form-item",{attrs:{label:"备注说明"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.ruleForm.remark,callback:function(t){e.$set(e.ruleForm,"remark",t)},expression:"ruleForm.remark"}})],1),r("el-form-item",{staticStyle:{"text-align":"center"}},[r("el-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v("确定")]),r("el-button",{on:{click:e.cancelDialog}},[e._v("取消")])],1)],1)},[],!1,null,null,null).exports,c={components:{tankTable:a.a,tankNowTable:o,tankAddmodify:s},data:function(){return{label:"",searchP:{configId:this.$route.query.id},searchP2:{vehicleId:""},common:{enterpriseId:"",fleetId:"",tankName:this.$route.query.name,tankAge:this.$route.query.level,tankHeight:this.$route.query.maxHeight,vehicleId:"",plateList:[],searchFlag:!1,type:this.$route.query.type},dialog:{flag:!1,title:"添加",size:"dialog-tiny",name:"tankAddmodify",options:{}},refreshFlag:!1}},methods:{add:function(){var e=this.$refs.nowtable.getTableData();this.dialog.options=0<e.length?e[0]:{},this.dialog.options.iD?(this.dialog.options.configId=this.$route.query.id,this.dialog.name="tankAddmodify",this.dialog.type=this.$route.query.type,this.dialog.flag=!0):this.$message.warning({message:1==this.$route.query.type?"无参考液位信息":"无参考高度信息"})},search:function(){this.common.searchFlag=!0},goBack:function(){this.$router.push("/index/tankManage")}},watch:{"common.fleetId":function(e){var t=this;this.searchP2.vehicleId="",this.common.plateList=[],e&&this.$http({url:"/vehicle/queryVehicleByFleetId",params:{fleetIds:e}}).then(function(e){e.data&&e.data.forEach(function(e){t.common.plateList.push({label:e.plateCode,value:e.id})})})},"dialog.flag":function(e){e||(this.dialog.name="")}}},u=(r("389e"),Object(i.a)(c,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-row",{staticClass:"tankManageDemarcate"},[r("el-col",{attrs:{span:8}},[r("cv-operation",{attrs:{position:"left"}},[r("el-form-item",{attrs:{label:"油箱名称"}},[r("el-tooltip",{attrs:{disabled:!e.common.tankName||e.common.tankName.length<8,content:e.common.tankName}},[r("el-input",{staticStyle:{width:"120px"},attrs:{readonly:""},model:{value:e.common.tankName,callback:function(t){e.$set(e.common,"tankName",t)},expression:"common.tankName"}})],1)],1),1==e.$route.query.type?r("el-form-item",{attrs:{label:"油箱容量"}},[r("el-input",{staticStyle:{width:"120px"},attrs:{readonly:""},model:{value:e.common.tankAge,callback:function(t){e.$set(e.common,"tankAge",t)},expression:"common.tankAge"}})],1):e._e(),2==e.$route.query.type?r("el-form-item",{attrs:{label:"油箱最大高度"}},[r("el-input",{staticStyle:{width:"120px"},attrs:{readonly:""},model:{value:e.common.tankHeight,callback:function(t){e.$set(e.common,"tankHeight",t)},expression:"common.tankHeight"}})],1):e._e()],1),r("cv-content",[r("tank-table",{ref:"list",attrs:{configId:e.searchP,configType:e.$route.query.type,remark:!1,refresh:e.refreshFlag},on:{"update:refresh":function(t){e.refreshFlag=t}}})],1)],1),r("el-col",{attrs:{span:16}},[r("cv-operation",{attrs:{position:"left"}},[r("el-form-item",{attrs:{label:"所属公司/机构"}},[r("cv-dropdown-tree",{staticStyle:{width:"180px"},attrs:{url:"/enterprise/findEnterpriseOrganizationTreeList ",readonly:!1,"is-default":!1,label:e.label},on:{"update:label":function(t){e.label=t}},model:{value:e.common.enterpriseId,callback:function(t){e.$set(e.common,"enterpriseId",t)},expression:"common.enterpriseId"}})],1),r("el-form-item",{attrs:{label:"车组选择"}},[r("cv-dropdown-tree",{staticStyle:{width:"180px"},attrs:{url:"/enterprise/findFleetTreeList","is-initial":!1,"auto-params":{enterpriseId:e.label.enterpriseId,pId:e.label.id,type:e.label.type}},model:{value:e.common.fleetId,callback:function(t){e.$set(e.common,"fleetId","string"==typeof t?t.trim():t)},expression:"common.fleetId"}})],1),r("el-form-item",{attrs:{label:"车辆选择"}},[r("el-select",{staticStyle:{width:"120px"},attrs:{filterable:"",clearable:"",placeholder:"请选择"},model:{value:e.searchP2.vehicleId,callback:function(t){e.$set(e.searchP2,"vehicleId",t)},expression:"searchP2.vehicleId"}},e._l(e.common.plateList,function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.search}},[e._v("查询")]),r("el-button",{attrs:{type:"primary"},on:{click:e.add}},[e._v("添加")]),r("el-button",{attrs:{type:"primary"},on:{click:e.goBack}},[e._v("返回")])],1)],1),r("cv-content",[r("tank-now-table",{ref:"nowtable",staticClass:"tablePosition",attrs:{vehicleId:e.searchP2,type:e.common.type,searchFlag:e.common.searchFlag},on:{"update:searchFlag":function(t){return e.$set(e.common,"searchFlag",t)},"update:search-flag":function(t){return e.$set(e.common,"searchFlag",t)}}})],1)],1),r("el-dialog",{attrs:{visible:e.dialog.flag,title:e.dialog.title,"custom-class":e.dialog.size},on:{"update:visible":function(t){return e.$set(e.dialog,"flag",t)}}},[r(e.dialog.name,{tag:"component",attrs:{options:e.dialog.options,visible:e.dialog.flag,refresh:e.refreshFlag},on:{"update:visible":function(t){return e.$set(e.dialog,"flag",t)},"update:refresh":function(t){e.refreshFlag=t}}})],1)],1)},[],!1,null,null,null).exports);t.default=u}}]);