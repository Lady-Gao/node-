(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4e29936e"],{8369:function(e,t,r){"use strict";var a=r("cebc");t.a={data:function(){return{table:{size:10,total:0,current:1,flag:!1,loading:!1,data:[]}}},methods:{tableLoading:function(e,t,r,l){var i=this;r?(this.table.flag=!0,this.table.current=1):this.table.flag=!1,this.table.loading=!0;var n=Object(a.a)({current:this.table.current,size:this.table.size},t);this.$http(l?{url:e,data:n}:{url:e,params:n}).then(function(e){var t=e.data;e.flag&&0!=t.length?(i.table.data=t.records,i.table.total=t.total,i.table.current=t.current):(i.table.data=[],i.table.total=0),i.table.loading=!1}).catch(function(e){i.table.loading=!1})},tableFilterColor:function(e){return this.$filter.plateCodeColor(e.plateColor)},tableFilterIcType:function(e){return this.$filter.icType(e.state)},tableFilterIcResult:function(e){return this.$filter.icResult(e.readerresult)},tableFilterTiredAlarm:function(e){return this.$filter.tiredAlarmType(e.alarm)},tableFilterTiredAdas:function(e){return this.$filter.tiredAdasType(e.alarm)},tableFilterOrderTypeS:function(e){return this.$filter.orderTypeS(e.sendFlag)},tableFilterFormat:function(e){return this.$filter.format(e.orderTime||e.gpsTime)},tableFilterFormats:function(e){return this.$filter.format(e.backTime)},tableBusLineType:function(e){return this.$filter.lineType(e.lineType)},tableFilterAcc:function(e){return this.$filter.accStatus(e.accStatus)},tableSplitMobile:function(e){return e.mobileCode?e.mobileCode.slice(1,e.mobileCode.length):""},tableConfirm:function(e){return this.$filter.isConfirm(e.isnotarize)},tableUpkeep:function(e){return this.$filter.isConfirm(e.type)},tableRenewal:function(e){return this.$filter.renewal(e.state)},tableReMot:function(e){return this.$filter.reMot(e.state)},tableOil:function(e){return this.$filter.fixNumber(e.total,2)},tableSex:function(e){return this.$filter.sex(e.sex)},plateCodeF:function(e){return e.plateCode?e.plateCode:"--"},plateCodeAndColor:function(e){return e.plateCode+"("+this.$filter.plateCodeColor(e.plateColor)+")"},driverStuas:function(e){return this.$filter.alarmStatus(e.fatigueDrive)},overStuas:function(e){return this.$filter.alarmStatus(e.tOversSpeed)},overHStuas:function(e){return this.$filter.alarmStatus(e.tOverSpeedH)},filterAlStuas:function(e){return this.$filter.alarmStatus(e.overSpeed)},filteralarmStuas:function(e){return this.$filter.alarmStatus(e.overSpeedH)},filterLStuas:function(e){return this.$filter.alarmStatus(e.forbid)},applyFlag:function(e){return this.$filter.applyFlag(e.applyFlag)},SEtime:function(e){return this.$filter.SEtime(e.StartTime,e.EndTime)},channelType:function(e){return this.$filter.channelType(e.Channel)},FileSize:function(e){return this.$filter.FileSize(e.fileSize||e.FileSize||0)},AlarmFilter:function(e){return this.$filter.AlarmFilter(e.Alarm)},MediaTypeFilter:function(e){return this.$filter.MediaTypeFilter(e.MediaType)},StreamTypeFilter:function(e){return this.$filter.StreamTypeFilter(e.StreamType)},StorageTypeFilter:function(e){return this.$filter.StorageTypeFilter(e.StorageType)},statusType:function(e){return this.$filter.statusType(e.Status)},fileSource:function(e){return this.$filter.fileSource(e.fileSource)}}}},b66e:function(e,t,r){"use strict";r.r(t),r("386d");var a={mixins:[r("8369").a],data:function(){return{label:{},SEtime:[this.$filter.format(new Date,"yyyy-MM-dd start"),this.$filter.format(new Date,"yyyy-MM-dd HH:mm:ss")],search:{enterpriseId:"",fleetId:"",plateCode:"",operationType:"",startTime:this.$filter.format(new Date,"yyyy-MM-dd start"),endTime:this.$filter.format(new Date,"yyyy-MM-dd HH:mm:ss")},Oftype:[{id:"",name:"全部"},{id:"1",name:"添加"},{id:"2",name:"修改"},{id:"3",name:"删除"},{id:"4",name:"注销"},{id:"5",name:"下线"},{id:"6",name:"解绑"}]}},computed:{_table:function(){return this.$refs.table}},methods:{down:function(){this.search.enterpriseId||(this.search.enterpriseId="");var e=this.$service.winParams(this.$COMMON.baseUrl+"/videoController/exportTerminalOperationLog",this.search);window.location.href=e},load:function(){this._table.tableInitial(!0)}},watch:{SEtime:function(e){this.search.startTime=e?e[0]:"",this.search.endTime=e?e[1]:""}}},l=r("2877"),i={computed:{_table:function(){return this.$refs.countTable}},data:function(){return{header:{label:"",enterpriseName:"",SEtime:[this.$filter.format(new Date,"yyyy-MM-dd start"),this.$filter.format(new Date,"yyyy-MM-dd HH:mm:ss")],search:{account:"",enterpriseId:"",type:"",module:"",userId:"",plateCode:"",startTime:this.$filter.format(new Date,"yyyy-MM-dd start"),endTime:this.$filter.format(new Date,"yyyy-MM-dd HH:mm:ss")},typelist:[{id:"01",name:"操作日志"},{id:"02",name:"安全日志"},{id:"03",name:"系统日志"},{id:"04",name:"视频日志"}],pickerOption:{disabledDate:function(e){return e.getTime()>Date.now()}}}}},methods:{linkTo:function(e){e.input=this.header.search.plateCode,e.startTime=this.header.search.startTime,e.endTime=this.header.search.endTime,this.$emit("linkTo",e)},search:function(){this._table.tableInitial(!0)},Mission:function(){var e=this.$service.winParams(this.$COMMON.baseUrl+"/videoController/exportVideoOperationInfoNew",this.header.search);window.location.href=e}},watch:{"header.SEtime":function(e){this.header.search.startTime=e?e[0]:"",this.header.search.endTime=e?e[1]:""}}},n={props:{search:"",refresh:!1},data:function(){return{header:{label:"",enterpriseName:"",SEtime:[this.$filter.format(new Date,"yyyy-MM-dd start"),this.$filter.format(new Date,"yyyy-MM-dd HH:mm:ss")],search:{account:"",enterpriseId:"",type:"",module:"",userId:"",plateCode:"",startTime:this.$filter.format(new Date,"yyyy-MM-dd start"),endTime:this.$filter.format(new Date,"yyyy-MM-dd HH:mm:ss")},typelist:[{id:"01",name:"操作日志"},{id:"02",name:"安全日志"},{id:"03",name:"系统日志"},{id:"04",name:"视频日志"}],pickerOption:{disabledDate:function(e){return e.getTime()>Date.now()}}}}},computed:{_table:function(){return this.$refs.detailTable}},methods:{searchs:function(){this.header.search.userId?this._table.tableInitial(!0):this.$message.warning("请选择用户")},Mission:function(){if(""==this.header.search.userId)return this.$message.warning("请选择用户"),!1;var e=this.$service.winParams(this.$COMMON.baseUrl+"/videoController/exportVideoOperationInfoByUserIdNew",this.header.search);window.location.href=e},plateCode:function(e){return e.plateCode?e.plateCode:"--"}},watch:{refresh:function(e){var t=this;e&&(this.header.search.userId=this.search.userId,this.header.search.type=this.search.type,this.header.search.plateCode=this.search.plateCode,this.header.SEtime=[this.search.startTime,this.search.endTime],setTimeout(function(){t.searchs(),t.$emit("update:refresh",!1)},200))},"header.SEtime":function(e){this.header.search.startTime=e?e[0]:"",this.header.search.endTime=e?e[1]:""}}},s={components:{videoLog:Object(l.a)(a,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"videolog"},[r("cv-operation",{attrs:{position:"left"}},[r("el-form-item",[r("cv-dropdown-tree",{attrs:{placeholder:"请选择公司/机构搜索",url:"/enterprise/findEnterpriseOrganizationTreeList ",label:e.label},on:{"update:label":function(t){e.label=t}},model:{value:e.search.enterpriseId,callback:function(t){e.$set(e.search,"enterpriseId",t)},expression:"search.enterpriseId"}})],1),r("el-form-item",[r("cv-dropdown-tree",{attrs:{placeholder:"请选择车组搜索",url:"/enterprise/findFleetTreeList","un-node-filter":["type",null],"is-initial":!1,"auto-params":{enterpriseId:e.label.enterpriseId,pId:e.label.id,type:e.label.type}},model:{value:e.search.fleetId,callback:function(t){e.$set(e.search,"fleetId",t)},expression:"search.fleetId"}})],1),r("el-form-item",[r("el-input",{attrs:{placeholder:"请输入车牌号码搜索",clearable:!0},model:{value:e.search.plateCode,callback:function(t){e.$set(e.search,"plateCode",t)},expression:"search.plateCode"}})],1),r("el-form-item",[r("el-select",{attrs:{placeholder:"请选择操作类型搜索"},model:{value:e.search.operationType,callback:function(t){e.$set(e.search,"operationType",t)},expression:"search.operationType"}},e._l(e.Oftype,function(e){return r("el-option",{key:e.id,attrs:{value:e.id,label:e.name}})}),1)],1),r("el-form-item",[r("el-date-picker",{attrs:{type:"datetimerange","start-placeholder":"开始日期","end-placeholder":"结束日期","value-format":"yyyy-MM-dd HH:mm:ss",clearable:!1},model:{value:e.SEtime,callback:function(t){e.SEtime=t},expression:"SEtime"}})],1),r("el-form-item",[r("cv-tool",{attrs:{name:e.$route.name,data:e.$store.getters.monitorMenu,"is-add":!1,"is-remove":!1,"is-modify":!1},on:{search:e.load,export:e.down}})],1)],1),r("cv-content",[r("cv-grid",{ref:"table",attrs:{params:e.search,url:"/videoController/getTerminalOperationLog"}},[r("el-table-column",{attrs:{prop:"plateCode",formatter:e.plateCodeF,label:"车牌号码"}}),r("el-table-column",{attrs:{prop:"terminalCode",label:"设备编号"}}),r("el-table-column",{attrs:{prop:"enterpriseName",label:"所属公司"}}),r("el-table-column",{attrs:{prop:"simCode",label:"SIM卡"}}),r("el-table-column",{attrs:{prop:"operationType",label:"操作"}}),r("el-table-column",{attrs:{prop:"fTime",label:"时间"}}),r("el-table-column",{attrs:{prop:"account",label:"用户"}})],1)],1)],1)},[],!1,null,null,null).exports,countTable:Object(l.a)(i,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("cv-operation",{attrs:{position:"left"}},[r("el-form-item",[r("cv-dropdown-tree",{attrs:{placeholder:"请选择公司搜索",url:"/enterprise/getEnterpriseTreeList","is-default":!1,text:e.header.enterpriseName,label:e.header.label},on:{"update:text":function(t){return e.$set(e.header,"enterpriseName",t)},"update:label":function(t){return e.$set(e.header,"label",t)}},model:{value:e.header.search.enterpriseId,callback:function(t){e.$set(e.header.search,"enterpriseId",t)},expression:"header.search.enterpriseId"}})],1),r("el-form-item",[r("el-select",{attrs:{placeholder:"请选择类型搜索",clearable:!0},model:{value:e.header.search.type,callback:function(t){e.$set(e.header.search,"type",t)},expression:"header.search.type"}},e._l(e.header.typelist,function(e){return r("el-option",{key:e.id,attrs:{value:e.id,label:e.name}})}),1)],1),r("el-form-item",[r("el-input",{attrs:{clearable:"",placeholder:"请输入模块搜索"},model:{value:e.header.search.module,callback:function(t){e.$set(e.header.search,"module",t)},expression:"header.search.module"}})],1),r("el-form-item",[r("el-input",{attrs:{clearable:"",placeholder:"请输入用户搜索"},model:{value:e.header.search.account,callback:function(t){e.$set(e.header.search,"account",t)},expression:"header.search.account"}})],1),r("el-form-item",[r("el-input",{attrs:{clearable:"",placeholder:"请输入车牌号码搜索"},model:{value:e.header.search.plateCode,callback:function(t){e.$set(e.header.search,"plateCode",t)},expression:"header.search.plateCode"}})],1),r("el-form-item",[r("el-date-picker",{attrs:{"start-placeholder":"开始日期","end-placeholder":"结束日期",editable:!1,clearable:!1,"value-format":"yyyy-MM-dd HH:mm:ss",type:"datetimerange","picker-options":e.header.pickerOption},model:{value:e.header.SEtime,callback:function(t){e.$set(e.header,"SEtime",t)},expression:"header.SEtime"}})],1),r("el-form-item",[r("cv-tool",{staticStyle:{margin:"0px"},attrs:{name:e.$route.name,data:e.$store.getters.monitorMenu,"is-modify":!1,"is-remove":!1,"is-export":!0,"is-add":!1},on:{search:e.search,export:e.Mission}})],1)],1),r("cv-content",[r("cv-grid",{ref:"countTable",attrs:{params:e.header.search,url:"/videoController/queryVideoOperationInfoNew"}},[r("el-table-column",{attrs:{label:"公司",prop:"enterpriseName"}}),r("el-table-column",{attrs:{label:"用户",prop:"account"}}),r("el-table-column",{attrs:{label:"日期",prop:"operationTime"}}),r("el-table-column",{attrs:{label:"类型",prop:"type"}}),r("el-table-column",{attrs:{label:"模块",prop:"module"}}),r("el-table-column",{attrs:{label:"操作次数",prop:"num"}}),r("el-table-column",{attrs:{label:"详细"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text"},on:{click:function(r){return e.linkTo(t.row)}}},[e._v("操作详细")])]}}])})],1)],1)],1)},[],!1,null,null,null).exports,detailTable:Object(l.a)(n,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("cv-operation",{attrs:{position:"left"}},[r("el-form-item",[r("cv-dropdown-tree",{attrs:{placeholder:"请选择公司搜索",url:"/enterprise/getEnterpriseTreeList","is-default":!1,text:e.header.enterpriseName,label:e.header.label},on:{"update:text":function(t){return e.$set(e.header,"enterpriseName",t)},"update:label":function(t){return e.$set(e.header,"label",t)}},model:{value:e.header.search.enterpriseId,callback:function(t){e.$set(e.header.search,"enterpriseId",t)},expression:"header.search.enterpriseId"}})],1),r("el-form-item",[r("el-select",{attrs:{placeholder:"请选择类型搜索",clearable:!0},model:{value:e.header.search.type,callback:function(t){e.$set(e.header.search,"type",t)},expression:"header.search.type"}},e._l(e.header.typelist,function(e){return r("el-option",{key:e.id,attrs:{value:e.id,label:e.name}})}),1)],1),r("el-form-item",[r("el-input",{attrs:{clearable:"",placeholder:"请输入模块搜索"},model:{value:e.header.search.module,callback:function(t){e.$set(e.header.search,"module",t)},expression:"header.search.module"}})],1),r("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!e.search.plateCode,expression:"search.plateCode ? false :true"}]},[r("el-input",{attrs:{clearable:"",placeholder:"请输入车牌号码搜索"},model:{value:e.header.search.plateCode,callback:function(t){e.$set(e.header.search,"plateCode",t)},expression:"header.search.plateCode"}})],1),r("el-form-item",[r("el-date-picker",{attrs:{"start-placeholder":"开始日期","end-placeholder":"结束日期",editable:!1,clearable:!1,"value-format":"yyyy-MM-dd HH:mm:ss",type:"datetimerange","picker-options":e.header.pickerOption},model:{value:e.header.SEtime,callback:function(t){e.$set(e.header,"SEtime",t)},expression:"header.SEtime"}})],1),r("el-form-item",[r("cv-tool",{staticStyle:{margin:"0px"},attrs:{name:e.$route.name,data:e.$store.getters.monitorMenu,"is-modify":!1,"is-remove":!1,"is-export":!0,"is-add":!1},on:{search:e.searchs,export:e.Mission}})],1)],1),r("cv-content",[r("cv-grid",{ref:"detailTable",attrs:{params:e.header.search,url:"/videoController/queryVideoOperationInfoByUserIdNew"}},[r("el-table-column",{attrs:{label:"公司",prop:"enterpriseName"}}),r("el-table-column",{attrs:{prop:"plateCode",label:"车牌号码",formatter:e.plateCode}}),r("el-table-column",{attrs:{label:"用户",prop:"account"}}),r("el-table-column",{attrs:{label:"类型",prop:"fType"}}),r("el-table-column",{attrs:{label:"模块",prop:"module"}}),r("el-table-column",{attrs:{label:"内容",prop:"fContext"}}),r("el-table-column",{attrs:{label:"日期",prop:"fTime"}}),r("el-table-column",{attrs:{label:"IP地址",prop:"ipAddress"}})],1)],1)],1)},[],!1,null,null,null).exports},data:function(){return{content:{activeName:"tabs0"},refresh1:!1,search:{userId:"",type:"",plateCode:""}}},methods:{linkTo:function(e){var t=this;this.content.activeName="tabs1",this.search.userId=e.userId,this.search.plateCode=e.input,this.search.startTime=e.startTime,this.search.endTime=e.endTime,this.search.type=this.getType(e.type),setTimeout(function(e){t.refresh1=!0},200)},getType:function(e){switch(e){case"操作日志":return"01";case"安全日志":return"02";case"系统日志":return"03";case"视频日志":return"04"}}}},o=Object(l.a)(s,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"cv-operationlog"},[r("cv-operation",{attrs:{position:"left"}}),r("cv-content",[r("cv-tabs",{attrs:{titles:["操作日志","设备维护变更日志"],"force-render":!1}},[r("cv-tabs",{attrs:{titles:["统计列表","用户详细"]},model:{value:e.content.activeName,callback:function(t){e.$set(e.content,"activeName",t)},expression:"content.activeName"}},[r("count-table",{on:{linkTo:e.linkTo}}),r("detail-table",{attrs:{search:e.search,refresh:e.refresh1},on:{"update:refresh":function(t){e.refresh1=t}}})],1),r("video-log")],1)],1)],1)},[],!1,null,null,null).exports;t.default=o}}]);