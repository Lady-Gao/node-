(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-b43d123c"],{"7fd5":function(e,t,r){"use strict";var i=r("d27c");r.n(i).a},b0ad:function(e,t,r){"use strict";(function(e){r("7f7f"),t.a={methods:{confirmPrompt:function(e,t){var r=this,i=e||this.$t("action.confirmIsRemove");return new Promise(function(e,a){r.$confirm(i,r.$t("action.tip"),{confirmButtonText:r.$t("action.confirm"),cancelButtonText:r.$t("action.cancel"),type:"warning"}).then(function(){e()}).catch(function(){"function"==typeof t&&t()})})},timeLimitFunc:function(e,t,r){if(e&&t)return((new Date(t)-new Date(e))/864e5).toFixed(1)<=r||this.$message.error({message:this.$t("请选择时间范围在"+r+"天内")});this.$message.error({message:this.$t("请选择时间范围")})},addRemoveUnique:function(e,t,r){var i=e.length,a=t.length;return a<i?{name:"add",data:this.$service.isUnique(e,t,r)}:i<a?{name:"remove",data:this.$service.isUnique(t,e,r)}:i==a?{name:"equal",data:this.$service.isUnique(e,t,r)}:void 0},showTooltip:function(e,t){var r=e.target,i=this.$refs[t];i.referenceElm=r,i.$refs.popper.style.display="none",i.doDestroy(),i.setExpectedState(!0),i.handleShowPopper()},mouseenterShowTip:function(e,t,r){var i=e.target;if(i.scrollWidth>i.offsetWidth||r)return this.showTooltip(e,t),r?r.startTime+"~"+r.endTime:i.innerText},mouseenterShowToolTip:function(e,t,r){var i=e.target;return this.showTooltip(e,t),!r&&i.innerText},mouseoverHideTip:function(e){var t=this.$refs[e];t&&(t.setExpectedState(!1),t.handleClosePopper())},asyncDownloadScript:function(t,r){var i=this,a=0<arguments.length&&void 0!==t?t:"Baidu",n=1<arguments.length?r:void 0;return e[a]?e[a]._preloader?e[a]._preloader:Promise.resolve(e[a]):(e[a]={},e[a]._preloader=new Promise(function(t,r){var o=document.createElement("script");o.src=n,e.document.body.appendChild(o),i.$service.isIe()&&i.$service.IE_VERSION<11?o.onreadystatechange=function(){"loaded"!=o.readyState&&"complete"!=o.readyState||(t(e[a]),e[a]._preloader=null)}:o.onload=function(){t(e[a]),e[a]._preloader=null}}),e[a]._preloader)}}}}).call(this,r("c8ba"))},cc43:function(e,t,r){"use strict";r.r(t),r("386d");var i=r("cebc"),a=r("b0ad"),n=r("2f62"),o={mixins:[a.a],computed:Object(i.a)({_table:function(){return this.$refs.table}},Object(n.e)("outLineTime",["gridUrl"])),data:function(){return{label:"",search:{plateCode:"",enterpriseId:"",fleetId:"",startTime:this.$filter.format(new Date-2592e5,"yyyy-MM-dd start"),endTime:this.$filter.format(new Date-2592e5,"yyyy-MM-dd end")},SEtime:[this.$filter.format(new Date-2592e5,"yyyy-MM-dd start"),this.$filter.format(new Date-2592e5,"yyyy-MM-dd end")],pickerOption:{disabledDate:function(e){return e.getTime()>Date.now()}}}},methods:{gridRenderContent:function(e){return[{label:"车牌号码",prop:"plateCode"},{label:"车牌颜色",prop:"plateColor"},{label:"所属公司",prop:"enterpriseName"},{label:"车队",prop:"fleetName"},{label:"最后下线时间",prop:"lastOfftime"},{label:"超时时间(min)",prop:"overTime"},{label:"SIM卡号",prop:"mobileCode"}]},searchTable:function(){this._table.tableInitial(!0)},searchReg:function(e,t){return!(3<this.$filter.timeRange(e,t))||(this.$message.warning("查询时间间隔不能超过三天"),!1)},down:function(){var e=Object(i.a)({size:this._table.size,current:this._table.current},this.search),t=this.$service.winParams(this.$COMMON.baseUrl+"/vehicle/exportOfflineOverTimeReport",e);window.location.href=t}},watch:{SEtime:function(e){this.search.startTime=e?e[0]:"",this.search.endTime=e?e[1]:""}}},s=(r("7fd5"),r("2877")),l=Object(s.a)(o,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"onLineStatistics"},[r("cv-operation",{attrs:{position:"left"}},[r("el-form-item",{attrs:{label:"所属公司/机构"}},[r("cv-dropdown-tree",{attrs:{url:"/enterprise/findEnterpriseOrganizationTreeList",readonly:!1,"is-default":!1,label:e.label},on:{"update:label":function(t){e.label=t}},model:{value:e.search.enterpriseId,callback:function(t){e.$set(e.search,"enterpriseId",t)},expression:"search.enterpriseId"}})],1),r("el-form-item",{attrs:{label:"所属车组"}},[r("cv-dropdown-tree",{attrs:{"is-fleet":!0,url:"/enterprise/findFleetTreeList","is-default":!1,"auto-params":{enterpriseId:e.label.enterpriseId,pId:e.label.id,type:e.label.type}},model:{value:e.search.fleetId,callback:function(t){e.$set(e.search,"fleetId",t)},expression:"search.fleetId"}})],1),r("el-form-item",{attrs:{label:"车牌号"}},[r("el-input",{staticStyle:{width:"150px"},attrs:{clearable:""},model:{value:e.search.plateCode,callback:function(t){e.$set(e.search,"plateCode","string"==typeof t?t.trim():t)},expression:"search.plateCode"}})],1),r("el-form-item",{attrs:{label:"离线起止时间"}},[r("el-date-picker",{attrs:{editable:!1,"value-format":"yyyy-MM-dd HH:mm:ss",type:"datetimerange",placeholder:e.$t("请选择时间"),"picker-options":e.pickerOption},model:{value:e.SEtime,callback:function(t){e.SEtime=t},expression:"SEtime"}})],1),r("el-form-item",[r("cv-tool",{staticStyle:{margin:"0px"},attrs:{name:e.$route.name,data:e.$store.getters.monitorMenu,"is-add":!1,"is-modify":!1,"is-remove":!1},on:{export:e.down,search:e.searchTable}})],1)],1),r("cv-content",{attrs:{fill:!0}},[r("cv-grid",{ref:"table",attrs:{params:e.search,url:e.gridUrl,"render-content":e.gridRenderContent}})],1)],1)},[],!1,null,null,null).exports;t.default=l},d27c:function(e,t,r){}}]);