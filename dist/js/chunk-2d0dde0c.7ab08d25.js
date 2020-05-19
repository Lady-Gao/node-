(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0dde0c"],{"82ea":function(e,t,i){"use strict";i.r(t),i("c5f6");var r={data:function(){return{label:"",enterpriseId:"",fleetId:"",loading:!1,isRead:!1,formContent:{acceleration:"1",deceleration:"1",turning:"1",hypervelocity:"1",fatigue:"1",collision:"1",rollover:"1"},fleetParams:{enterpriseId:this.$store.getters.user.enterpriseId,pId:this.$store.getters.user.enterpriseId,type:1},rules:{acceleration:[{min:0,max:3,message:this.$filter.lanReplace(this.$t("filter.Length"),{min:0,max:3})},{pattern:/^[0-9]+$/,message:this.$t("filter.type2"),trigger:"blur,change"}],deceleration:[{min:0,max:3,message:this.$filter.lanReplace(this.$t("filter.Length"),{min:0,max:3})},{pattern:/^[0-9]+$/,message:this.$t("filter.type2"),trigger:"blur,change"}],turning:[{min:0,max:3,message:this.$filter.lanReplace(this.$t("filter.Length"),{min:0,max:3})},{pattern:/^[0-9]+$/,message:this.$t("filter.type2"),trigger:"blur,change"}],hypervelocity:[{min:0,max:3,message:this.$filter.lanReplace(this.$t("filter.Length"),{min:0,max:3})},{pattern:/^[0-9]+$/,message:this.$t("filter.type2"),trigger:"blur,change"}],fatigue:[{min:0,max:3,message:this.$filter.lanReplace(this.$t("filter.Length"),{min:0,max:3})},{pattern:/^[0-9]+$/,message:this.$t("filter.type2"),trigger:"blur,change"}],collision:[{min:0,max:3,message:this.$filter.lanReplace(this.$t("filter.Length"),{min:0,max:3})},{pattern:/^[0-9]+$/,message:this.$t("filter.type2"),trigger:"blur,change"}],rollover:[{min:0,max:3,message:this.$filter.lanReplace(this.$t("filter.Length"),{min:0,max:3})},{pattern:/^[0-9]+$/,message:this.$t("filter.type2"),trigger:"blur,change"}]}}},methods:{selectFleet:function(e){},save:function(){var e=this;if(""==this.fleetId)return this.$message.warning({message:this.$t("请选择车组")}),!1;var t={acceleration:this.formContent.acceleration,collision:this.formContent.collision,deceleration:this.formContent.deceleration,fatigue:this.formContent.fatigue,hypervelocity:this.formContent.hypervelocity,rollover:this.formContent.rollover,turning:this.formContent.turning,vehicleTeamId:this.fleetId},i=0;for(var r in t){if("vehicleTeamId"==r)break;i=Number(t[r])+i}this.$refs.drivingScore.validate(function(r){return!!r&&(100<i?(e.$message.warning({message:e.$t("总分超过100，请重新输入")}),!1):(e.loading=!0,void e.$store.dispatch("updatePiccWeightsInfo",t).then(function(t){t.flag&&e.$message.success({message:e.$t("保存成功")}),e.loading=!1}).catch(function(t){e.loading=!1})))})}},watch:{fleetId:function(e){var t=this;this.isRead=!0,this.$store.dispatch("queryPiccWeightsInfo",{vehicleTeamId:e}).then(function(e){if(e.flag&&!e.errorCode)for(var i in t.formContent)switch(i){case"acceleration":t.formContent[i]=e.data.acceleration;break;case"deceleration":t.formContent[i]=e.data.deceleration;break;case"turning":t.formContent[i]=e.data.turning;break;case"hypervelocity":t.formContent[i]=e.data.hypervelocity;break;case"fatigue":t.formContent[i]=e.data.fatigue;break;case"collision":t.formContent[i]=e.data.collision;break;case"rollover":t.formContent[i]=e.data.rollover}else for(var r in t.formContent)t.formContent[r]="1";t.isRead=!1}).catch(function(e){t.isRed=!1})}},created:function(){this.enterpriseId=this.$store.getters.user.enterpriseId}},n=i("2877"),a={components:{driveScore:Object(n.a)(r,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-form",{ref:"drivingScore",attrs:{inline:!0,model:e.formContent,"label-width":"80px",rules:e.rules}},[i("el-form-item",{attrs:{label:e.$t("急加速"),prop:"acceleration"}},[i("el-input",{staticStyle:{width:"215px"},attrs:{size:"small",readonly:e.isRead},model:{value:e.formContent.acceleration,callback:function(t){e.$set(e.formContent,"acceleration",t)},expression:"formContent.acceleration"}})],1),i("el-form-item",{attrs:{label:e.$t("急减速"),prop:"deceleration"}},[i("el-input",{staticStyle:{width:"215px"},attrs:{size:"small",readonly:e.isRead},model:{value:e.formContent.deceleration,callback:function(t){e.$set(e.formContent,"deceleration",t)},expression:"formContent.deceleration"}})],1),i("el-form-item",{attrs:{label:e.$t("急转弯"),prop:"turning"}},[i("el-input",{staticStyle:{width:"215px"},attrs:{size:"small",readonly:e.isRead},model:{value:e.formContent.turning,callback:function(t){e.$set(e.formContent,"turning",t)},expression:"formContent.turning"}})],1),i("el-form-item",{attrs:{label:e.$t("超速行驶"),prop:"hypervelocity"}},[i("el-input",{staticStyle:{width:"215px"},attrs:{size:"small",readonly:e.isRead},model:{value:e.formContent.hypervelocity,callback:function(t){e.$set(e.formContent,"hypervelocity",t)},expression:"formContent.hypervelocity"}})],1),i("el-form-item",{attrs:{label:e.$t("疲劳驾驶"),prop:"fatigue"}},[i("el-input",{staticStyle:{width:"215px"},attrs:{size:"small",readonly:e.isRead},model:{value:e.formContent.fatigue,callback:function(t){e.$set(e.formContent,"fatigue",t)},expression:"formContent.fatigue"}})],1),i("el-form-item",{attrs:{label:e.$t("碰撞"),prop:"collision"}},[i("el-input",{staticStyle:{width:"215px"},attrs:{size:"small",readonly:e.isRead},model:{value:e.formContent.collision,callback:function(t){e.$set(e.formContent,"collision",t)},expression:"formContent.collision"}})],1),i("el-form-item",{attrs:{label:e.$t("侧翻"),prop:"rollover"}},[i("el-input",{staticStyle:{width:"215px"},attrs:{size:"small",readonly:e.isRead},model:{value:e.formContent.rollover,callback:function(t){e.$set(e.formContent,"rollover",t)},expression:"formContent.rollover"}})],1),i("el-form-item",{attrs:{label:"车组"}},[i("cv-dropdown-tree",{staticStyle:{width:"215px"},attrs:{url:"/enterprise/findFleetTreeList","auto-params":e.fleetParams},model:{value:e.fleetId,callback:function(t){e.fleetId="string"==typeof t?t.trim():t},expression:"fleetId"}})],1),i("el-form-item",{staticStyle:{width:"100%","text-align":"center"}},[i("el-button",{staticStyle:{width:"100px"},attrs:{type:"primary",loading:e.loading},on:{click:e.save}},[e._v("保存")])],1)],1)},[],!1,null,null,null).exports}},l=Object(n.a)(a,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"drivingScore"},[t("cv-content",{staticStyle:{top:"10px"},attrs:{fill:!0}},[t("drive-score",{staticStyle:{width:"620px",margin:"10px auto"}})],1)],1)},[],!1,null,null,null).exports;t.default=l}}]);