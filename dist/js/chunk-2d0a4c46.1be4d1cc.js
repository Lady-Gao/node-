(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0a4c46"],{"089a":function(e,t,l){"use strict";l.r(t);var a={computed:{_table:function(){return this.$refs.table}},data:function(){return{searchOptions:{plateCode:"",terminalCode:"",ewaybillContent:""}}},methods:{issendtomon:function(e){return 0==e.issendtomon?"否":"是"},plateColor:function(e){return this.$filter.plateCodeColor(e.plateColor)},searchTable:function(){this._table.tableInitial(!0)}}},o=l("2877"),r=Object(o.a)(a,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"cv-terminal-success"},[l("cv-operation",{attrs:{position:"left"}},[l("el-form-item",[l("el-input",{attrs:{placeholder:"请输入终端编号搜索",clearable:!0},model:{value:e.searchOptions.terminalCode,callback:function(t){e.$set(e.searchOptions,"terminalCode","string"==typeof t?t.trim():t)},expression:"searchOptions.terminalCode"}})],1),l("el-form-item",[l("el-input",{attrs:{placeholder:"请输入车牌号码搜索",clearable:!0},model:{value:e.searchOptions.plateCode,callback:function(t){e.$set(e.searchOptions,"plateCode","string"==typeof t?t.trim():t)},expression:"searchOptions.plateCode"}})],1),l("el-form-item",[l("el-input",{attrs:{placeholder:"请输入运单内容搜索",clearable:!0},model:{value:e.searchOptions.ewaybillContent,callback:function(t){e.$set(e.searchOptions,"ewaybillContent","string"==typeof t?t.trim():t)},expression:"searchOptions.ewaybillContent"}})],1),l("el-form-item",[l("cv-tool",{staticStyle:{margin:"0px"},attrs:{name:e.$route.name,data:e.$store.getters.monitorMenu,"is-modify":!1,"is-remove":!1,"is-add":!1,"is-export":!1},on:{search:e.searchTable}})],1)],1),l("cv-content",{attrs:{fill:!0}},[l("cv-grid",{ref:"table",attrs:{params:e.searchOptions,url:"/log/getHistoryEwaybillPage"}},[l("el-table-column",{attrs:{label:e.$t("cE.carNumber"),"min-width":"100",prop:"plateCode"}}),l("el-table-column",{attrs:{label:e.$t("cE.carColor"),"min-width":"100",prop:"plateColor",formatter:e.plateColor}}),l("el-table-column",{attrs:{label:"终端编号","min-width":"120",prop:"terminalCode"}}),l("el-table-column",{attrs:{label:"创建时间","min-width":"150",prop:"createtimeStr"}}),l("el-table-column",{attrs:{label:"是否发送到监管","min-width":"150",prop:"issendtomon",formatter:e.issendtomon}}),l("el-table-column",{attrs:{label:"运单内容","min-width":"150",prop:"ewaybillContent"}})],1)],1)],1)},[],!1,null,null,null).exports;t.default=r}}]);