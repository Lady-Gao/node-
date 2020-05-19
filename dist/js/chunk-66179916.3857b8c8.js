(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-66179916"],{"9d46":function(e,t,a){"use strict";a.r(t),a("386d"),a("96cf");var c=a("3b8d"),o=a("cebc"),n=(a("ac6a"),{props:{options:{type:[Object],default:function(){return{}}}},inject:["store"],data:function(){return{loading:!1,label:"",common:{enterpriseId:"",fleetId:"",plateList:[],editTimes:null},addForm:{fleetName:"",peccancyCode:"",peccancyAgent:"",peccancyDriver:"",peccancyLocation:"",peccancyFee:"",peccancyNote:"",peccancyTime:"",peccancyAction:"",plateCode:"",vehicleId:""},rules:{peccancyCode:[{required:!0,message:"请输入违法代码",trigger:"blur,change"}],peccancyAgent:[{required:!0,message:"请输入经办人",trigger:"blur,change"}],peccancyDriver:[{required:!0,message:"请输入驾驶人",trigger:"blur,change"}],peccancyLocation:[{required:!0,message:"请输入违法地点",trigger:"blur,change"}],peccancyFee:[{required:!0,message:"请输入处罚金额",trigger:"blur,change"},{pattern:/^[0-9]+$/,message:this.$t("filter.type2"),trigger:"blur,change"}],peccancyTime:[{required:!0,message:"请输入违法时间",trigger:"blur,change"}],peccancyAction:[{required:!0,message:"请输入违法行为",trigger:"blur,change"}],plateCode:[{required:!0,message:"请选择车辆",trigger:"blur,change"}]},pickerOption:{disabledDate:function(e){return e.getTime()>Date.now()}}}},created:function(){var e=this;this.store.modify.id&&this.$service.mapParams(this.addForm,this.store.modify),this.store.modify.id&&(this.addForm.plateCode=this.store.modify.vehicleId,this.$store.dispatch("findVehicleByPlateCode",{plateCode:this.store.modify.plateCode}).then(function(t){e.common.enterpriseId=t.data.enterpriseId,e.common.fleetId=t.data.fleetId}),this.common.editTimes=0)},methods:{cancelDialog:function(){this.$emit("update:visible",!1)},confirm:function(){var e=this,t="";this.$refs.peccancy.validate(function(a){if(!a)return!1;e.loading=!0;var c=e.addForm;e.store.modify.id?(t="updateVehiclePeccancy",c.id=e.store.modify.id,c.vehicleId=e.store.modify.vehicleId,c.plateCode=e.store.modify.plateCode):(t="insertVehiclePeccancy",c.vehicleId=e.addForm.vehicleId),e.$store.dispatch(t,c).then(function(t){t.flag?(e.$emit("update:visible",!1),e.$emit("update:refresh",!0),e.$message.success({message:e.store.modify.id?"修改成功":"新增成功"}),e.loading=!1,e.$emit("update:visible",!1)):e.$message.error({message:e.store.modify.id?"修改失败":"新增失败"})})})}},watch:{"common.enterpriseId":function(e){0==this.common.editTimes?this.common.editTimes++:(this.addForm.fleetName="",this.addForm.vehicleId="")},"common.fleetId":function(e){var t=this;this.common.plateList=[],this.addForm.vehicleId="",this.$http({url:"/vehicle/queryVehicleByFleetId",params:{fleetIds:e}}).then(function(e){e.data.forEach(function(e){t.common.plateList.push({label:e.plateCode,value:e.id})})})},"addForm.plateCode":function(e){var t=this;e&&this.common.plateList.forEach(function(a){a.value==e&&(t.addForm.plateCode=a.label,t.addForm.vehicleId=a.value)})}}}),i=a("2877"),r=Object(i.a)(n,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"peccancy",attrs:{model:e.addForm,rules:e.rules}},[e.store.modify.id?e._e():a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{"label-position":"top",label:"所属公司/机构"}},[a("cv-dropdown-tree",{staticStyle:{width:"330px"},attrs:{data:e.store.company_tree,readonly:!1,"is-default":!1,label:e.label},on:{"update:label":function(t){e.label=t}},model:{value:e.common.enterpriseId,callback:function(t){e.$set(e.common,"enterpriseId",t)},expression:"common.enterpriseId"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{"label-position":"top",label:"车组选择"}},[a("cv-dropdown-tree",{staticStyle:{width:"100%"},attrs:{url:"/enterprise/findFleetTreeList","is-initial":!1,"auto-params":{enterpriseId:e.label.enterpriseId,pId:e.label.id,type:e.label.type}},model:{value:e.common.fleetId,callback:function(t){e.$set(e.common,"fleetId","string"==typeof t?t.trim():t)},expression:"common.fleetId"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{"label-position":"top",label:"车牌号码",prop:"plateCode"}},[a("el-select",{staticStyle:{width:"330px"},attrs:{disabled:e.store.modify.id,filterable:"",clearable:"",placeholder:"请选择车辆"},model:{value:e.addForm.plateCode,callback:function(t){e.$set(e.addForm,"plateCode",t)},expression:"addForm.plateCode"}},e._l(e.common.plateList,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{"label-position":"top",label:"驾驶人",prop:"peccancyDriver"}},[a("el-input",{model:{value:e.addForm.peccancyDriver,callback:function(t){e.$set(e.addForm,"peccancyDriver","string"==typeof t?t.trim():t)},expression:"addForm.peccancyDriver"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{"label-position":"top",label:"违法行为",prop:"peccancyAction"}},[a("el-input",{staticStyle:{width:"330px"},attrs:{maxlength:"10"},model:{value:e.addForm.peccancyAction,callback:function(t){e.$set(e.addForm,"peccancyAction","string"==typeof t?t.trim():t)},expression:"addForm.peccancyAction"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{"label-position":"top",label:"违法时间",prop:"peccancyTime"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{"picker-options":e.pickerOption,type:"date",editable:!1,clearable:!1,"value-format":"yyyy-MM-dd"},model:{value:e.addForm.peccancyTime,callback:function(t){e.$set(e.addForm,"peccancyTime","string"==typeof t?t.trim():t)},expression:"addForm.peccancyTime"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{"label-position":"top",label:"违法地点",prop:"peccancyLocation"}},[a("el-input",{staticStyle:{width:"330px"},model:{value:e.addForm.peccancyLocation,callback:function(t){e.$set(e.addForm,"peccancyLocation","string"==typeof t?t.trim():t)},expression:"addForm.peccancyLocation"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{"label-position":"top",label:"违法代码",prop:"peccancyCode"}},[a("el-input",{model:{value:e.addForm.peccancyCode,callback:function(t){e.$set(e.addForm,"peccancyCode","string"==typeof t?t.trim():t)},expression:"addForm.peccancyCode"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{"label-position":"top",label:"处罚金额",prop:"peccancyFee"}},[a("el-input",{staticStyle:{width:"330px"},model:{value:e.addForm.peccancyFee,callback:function(t){e.$set(e.addForm,"peccancyFee","string"==typeof t?t.trim():t)},expression:"addForm.peccancyFee"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{"label-position":"top",label:"经办人",prop:"peccancyAgent"}},[a("el-input",{model:{value:e.addForm.peccancyAgent,callback:function(t){e.$set(e.addForm,"peccancyAgent","string"==typeof t?t.trim():t)},expression:"addForm.peccancyAgent"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{"label-position":"top",label:"备注说明"}},[a("el-input",{staticStyle:{width:"330px"},attrs:{type:"textarea"},model:{value:e.addForm.peccancyNote,callback:function(t){e.$set(e.addForm,"peccancyNote","string"==typeof t?t.trim():t)},expression:"addForm.peccancyNote"}})],1)],1)],1),a("el-form-item",{staticStyle:{"text-align":"center"}},[a("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.confirm}},[e._v("确定")]),a("el-button",{on:{click:e.cancelDialog}},[e._v("取消")])],1)],1)},[],!1,null,null,null).exports,l={inject:["store"],data:function(){return{peccancyTime:"",common:{plateList:[]},pickerOption:{disabledDate:function(e){return e.getTime()>Date.now()}}}},created:function(){this.store.search.startTime&&(this.peccancyTime=[this.store.search.startTime,this.store.search.endTime])},methods:{cancelDialog:function(){this.$emit("update:visible",!1)},confirm:function(){this.$emit("update:refresh",!0),this.$emit("update:visible",!1)}},watch:{peccancyTime:function(e){this.store.search.startTime=e?e[0]:"",this.store.search.endTime=e?e[1]:""}}},s=Object(i.a)(l,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{"label-position":"top",label:"车牌号码"}},[a("el-input",{staticStyle:{width:"330px"},attrs:{clearable:!0},model:{value:e.store.search.plateCode,callback:function(t){e.$set(e.store.search,"plateCode",t)},expression:"store.search.plateCode"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{"label-position":"top",label:"违法时间"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{clearable:!0,editable:!1,type:"daterange",placeholder:"选择时间范围","picker-options":e.pickerOption,"value-format":"yyyy-MM-dd"},model:{value:e.peccancyTime,callback:function(t){e.peccancyTime=t},expression:"peccancyTime"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{"label-position":"top",label:"违法地点"}},[a("el-input",{staticStyle:{width:"330px"},attrs:{clearable:!0},model:{value:e.store.search.peccancyLocation,callback:function(t){e.$set(e.store.search,"peccancyLocation",t)},expression:"store.search.peccancyLocation"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{"label-position":"top",label:"违法代码"}},[a("el-input",{attrs:{clearable:!0},model:{value:e.store.search.peccancyCode,callback:function(t){e.$set(e.store.search,"peccancyCode",t)},expression:"store.search.peccancyCode"}})],1)],1)],1),a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{"label-position":"top",label:"违法行为"}},[a("el-input",{staticStyle:{width:"330px"},attrs:{clearable:!0},model:{value:e.store.search.peccancyAction,callback:function(t){e.$set(e.store.search,"peccancyAction",t)},expression:"store.search.peccancyAction"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{"label-position":"top",label:"经办人"}},[a("el-input",{attrs:{clearable:!0},model:{value:e.store.search.peccancyAgent,callback:function(t){e.$set(e.store.search,"peccancyAgent",t)},expression:"store.search.peccancyAgent"}})],1)],1)],1),a("el-form-item",{staticStyle:{"text-align":"center"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v("确定")]),a("el-button",{on:{click:e.cancelDialog}},[e._v("取消")])],1)],1)},[],!1,null,null,null).exports,p=a("b0ad"),d=a("e4d3"),m=a("2f62"),u={name:"peccancy",components:{peccancyAddmodify:r,peccancySearch:s},mixins:[d.a,p.a],computed:{_table:function(){return this.$refs.peccancyTable}},data:function(){return{dialog:{flag:!1,size:"dialog-middle",name:"",title:""},refresh:!1,outPutParams:{},store:{search:{plateCode:"",peccancyAgent:"",peccancyCode:"",peccancyAction:"",peccancyLocation:"",startTime:"",endTime:""},modify:{}}}},methods:Object(o.a)({},Object(m.b)(["queryCompanyInfoList"]),{add:function(){this.$service.mapParams(this.dialog,{title:"添加",name:"peccancyAddmodify",flag:!0}),this.store.modify={}},search:function(){this.$service.mapParams(this.dialog,{flag:!0,title:"搜索",name:"peccancySearch"})},del:function(e){var t=this;this.confirmPrompt().then(function(){Object(c.a)(regeneratorRuntime.mark(function a(){var c,o;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.$store.dispatch("deleteVehiclePeccancyById",{id:e.id});case 2:c=a.sent,c.data,o=c.flag,c.errorCode,o?(t.$message.success({message:"删除成功"}),t.refresh=!0):t.$message.error({message:"删除失败"});case 7:case"end":return a.stop()}},a)}))()})},edit:function(e){this.$service.mapParams(this.dialog,{title:"修改",name:"peccancyAddmodify",flag:!0}),this.store.modify=e},outPut:function(){var e=this.$service.winParams(this.$COMMON.baseUrl+"/vehiclePeccancy/exportVehiclePeccancyInfo",this.store.search);window.location.href=e}}),watch:{"dialog.flag":function(e){e||(this.dialog.name="")},refresh:function(e){e&&(this._table.tableInitial(),this.refresh=!1)}},mounted:function(){this.staticTree()}},f=Object(i.a)(u,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"peccancy"},[a("cv-operation",[a("el-form-item",[a("cv-tool",{staticClass:"cv-tool",attrs:{name:e.$route.name,data:e.$store.getters.manageMenus,"is-remove":!1,"is-modify":!1},on:{export:e.outPut,add:e.add,search:e.search}})],1)],1),a("cv-content",[a("cv-grid",{ref:"peccancyTable",attrs:{params:e.store.search,url:"/vehiclePeccancy/findVehiclePeccancyPage"}},[a("el-table-column",{attrs:{label:e.$t("common.vehicle.plateCode"),prop:"plateCode"}}),a("el-table-column",{attrs:{label:e.$t("peccancy.peccancyDriver"),prop:"peccancyDriver"}}),a("el-table-column",{attrs:{label:e.$t("peccancy.peccancyTime"),prop:"peccancyTime"}}),a("el-table-column",{attrs:{label:e.$t("peccancy.peccancyLocation"),prop:"peccancyLocation"}}),a("el-table-column",{attrs:{label:e.$t("peccancy.peccancyCode"),prop:"peccancyCode"}}),a("el-table-column",{attrs:{label:e.$t("peccancy.peccancyAction"),prop:"peccancyAction"}}),a("el-table-column",{attrs:{label:e.$t("peccancy.peccancyFee"),prop:"peccancyFee"}}),a("el-table-column",{attrs:{label:e.$t("peccancy.peccancyAgent"),prop:"peccancyAgent"}}),a("el-table-column",{attrs:{label:e.$t("action.operation"),prop:"operate"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("cv-span",{attrs:{type:"success"},nativeOn:{click:function(a){return e.edit(t.row)}}},[e._v("修改")]),a("cv-table-tool",{attrs:{name:e.$route.name,data:e.$store.getters.manageMenus,"is-modify":!1},on:{remove:function(a){return e.del(t.row)}}})]}}])})],1)],1),a("el-dialog",{attrs:{visible:e.dialog.flag,title:e.dialog.title,"custom-class":e.dialog.size},on:{"update:visible":function(t){return e.$set(e.dialog,"flag",t)}}},[a(e.dialog.name,{tag:"component",attrs:{visible:e.dialog.flag,refresh:e.refresh},on:{"update:visible":function(t){return e.$set(e.dialog,"flag",t)},"update:refresh":function(t){e.refresh=t}}})],1)],1)},[],!1,null,null,null).exports;t.default=f},b0ad:function(e,t,a){"use strict";(function(e){a("7f7f"),t.a={methods:{confirmPrompt:function(e,t){var a=this,c=e||this.$t("action.confirmIsRemove");return new Promise(function(e,o){a.$confirm(c,a.$t("action.tip"),{confirmButtonText:a.$t("action.confirm"),cancelButtonText:a.$t("action.cancel"),type:"warning"}).then(function(){e()}).catch(function(){"function"==typeof t&&t()})})},timeLimitFunc:function(e,t,a){if(e&&t)return((new Date(t)-new Date(e))/864e5).toFixed(1)<=a||this.$message.error({message:this.$t("请选择时间范围在"+a+"天内")});this.$message.error({message:this.$t("请选择时间范围")})},addRemoveUnique:function(e,t,a){var c=e.length,o=t.length;return o<c?{name:"add",data:this.$service.isUnique(e,t,a)}:c<o?{name:"remove",data:this.$service.isUnique(t,e,a)}:c==o?{name:"equal",data:this.$service.isUnique(e,t,a)}:void 0},showTooltip:function(e,t){var a=e.target,c=this.$refs[t];c.referenceElm=a,c.$refs.popper.style.display="none",c.doDestroy(),c.setExpectedState(!0),c.handleShowPopper()},mouseenterShowTip:function(e,t,a){var c=e.target;if(c.scrollWidth>c.offsetWidth||a)return this.showTooltip(e,t),a?a.startTime+"~"+a.endTime:c.innerText},mouseenterShowToolTip:function(e,t,a){var c=e.target;return this.showTooltip(e,t),!a&&c.innerText},mouseoverHideTip:function(e){var t=this.$refs[e];t&&(t.setExpectedState(!1),t.handleClosePopper())},asyncDownloadScript:function(t,a){var c=this,o=0<arguments.length&&void 0!==t?t:"Baidu",n=1<arguments.length?a:void 0;return e[o]?e[o]._preloader?e[o]._preloader:Promise.resolve(e[o]):(e[o]={},e[o]._preloader=new Promise(function(t,a){var i=document.createElement("script");i.src=n,e.document.body.appendChild(i),c.$service.isIe()&&c.$service.IE_VERSION<11?i.onreadystatechange=function(){"loaded"!=i.readyState&&"complete"!=i.readyState||(t(e[o]),e[o]._preloader=null)}:i.onload=function(){t(e[o]),e[o]._preloader=null}}),e[o]._preloader)}}}}).call(this,a("c8ba"))},e4d3:function(e,t,a){"use strict";t.a={data:function(){return{store:{company_tree:[]}}},provide:function(){return{store:this.store}},methods:{staticTree:function(){var e=this;this.$http({url:"/enterprise/findEnterpriseOrganizationTreeList"}).then(function(t){var a=t.data,c=t.flag;e.store.company_tree=c?a:[]})},staticTreeOld:function(){var e=this;this.$http({url:"/enterprise/getEnterpriseTreeList"}).then(function(t){var a=t.data,c=t.flag;e.store.company_tree=c?a:[]})}}}}}]);