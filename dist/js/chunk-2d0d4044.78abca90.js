(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0d4044"],{"5edb":function(e,a,t){"use strict";t.r(a);var r=t("ed08");a.default={state:{user:null,mapName:null,mapType:null,token:null},mutations:{setUser:function(e,a){switch(e.user=a.userInfo,parseInt(a.mapType)){case 1:e.mapName="cvBaiduMap";break;case 2:e.mapName="cvSm";break;case 4:e.mapName="cvGoogleMap";break;case 3:default:e.mapName="cvGaodeMap"}localStorage.setItem("token",a.token),localStorage.setItem("mapType",a.mapType),localStorage.setItem("user",JSON.stringify(a.userInfo))},setMapType:function(e,a){switch(e.mapType=a,localStorage.setItem("mapType",a),parseInt(a)){case 1:e.mapName="cvBaiduMap";break;case 4:e.mapName="cvGoogleMap";break;case 3:default:e.mapName="cvGaodeMap"}}},actions:{setMapType:function(e,a){(0,e.commit)("setMapType",a)},getToken:function(e,a){return e.commit,Object(r.b)({url:"/login",params:a})},setUser:function(e,a){var t=e.commit;e.dispatch,r.e.isObject(a)&&t("setUser",a)},findUserList:function(e,a){return e.commit,Object(r.b)({url:COMMON.baseUrl+"/enterprise/getEnterpriseById",params:{id:a}})},verifySessionStatus:function(e,a){return e.commit,Object(r.b)({url:COMMON.baseUrl+"/verifySessionStatus"})},exit:function(e,a){return e.commit,Object(r.b)({url:COMMON.baseUrl+"/logout"})}},getters:{user:function(e){var a=JSON.parse(localStorage.getItem("user"));return e.user||(r.e.isObject(a)?a:{})},mapType:function(e){return e.mapType||localStorage.getItem("mapType")},mapName:function(e){var a=localStorage.getItem("mapType");switch(parseInt(a)){case 1:return e.mapName||"cvBaiduMap";case 2:return e.mapName||"cvSm";case 4:return e.mapName||"cvGoogleMap";case 3:default:return e.mapName||"cvGaodeMap"}}}}}}]);