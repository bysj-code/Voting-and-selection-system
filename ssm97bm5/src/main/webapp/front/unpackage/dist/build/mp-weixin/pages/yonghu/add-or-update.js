(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/yonghu/add-or-update"],{"7e5ac":function(e,t,n){"use strict";n.r(t);var r=n("e202"),a=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=a.a},b8e3:function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r}));var a=function(){var e=this,t=e.$createElement;e._self._c},i=[]},ba6c:function(e,t,n){"use strict";n.r(t);var r=n("b8e3"),a=n("7e5ac");for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("c897");var u,o=n("f0c5"),c=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"2fdc9061",null,!1,r["a"],u);t["default"]=c.exports},c35e:function(e,t,n){},c897:function(e,t,n){"use strict";var r=n("c35e"),a=n.n(r);a.a},cdc0:function(e,t,n){"use strict";(function(e){n("8ef1");r(n("66fd"));var t=r(n("ba6c"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},e202:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n,r,a,i,u){try{var o=e[i](u),c=o.value}catch(s){return void n(s)}o.done?t(c):Promise.resolve(c).then(r,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var u=e.apply(t,n);function o(e){i(u,r,a,o,c,"next",e)}function c(e){i(u,r,a,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("892b"))}.bind(null,n)).catch(n.oe)},c={data:function(){return{cross:"",ruleForm:{zhanghao:"",xingming:"",touxiang:"",mima:"",xingbie:"",shouji:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{zhanghao:!1,xingming:!1,touxiang:!1,mima:!1,xingbie:!1,shouji:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(t){var n=this;return u(r.default.mark((function a(){var i,u,o,c;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=e.getStorageSync("nowTable"),a.next=3,n.$api.session(i);case 3:if(u=a.sent,n.user=u.data,n.xingbieOptions="男,女".split(","),n.ruleForm.userid=e.getStorageSync("userid"),t.refid&&(n.ruleForm.refid=t.refid,n.ruleForm.nickname=e.getStorageSync("nickname")),!t.id){a.next=14;break}return n.ruleForm.id=t.id,a.next=12,n.$api.info("yonghu",n.ruleForm.id);case 12:u=a.sent,n.ruleForm=u.data;case 14:if(n.cross=t.cross,!t.cross){a.next=46;break}o=e.getStorageSync("crossObj"),a.t0=r.default.keys(o);case 18:if((a.t1=a.t0()).done){a.next=46;break}if(c=a.t1.value,"zhanghao"!=c){a.next=24;break}return n.ruleForm.zhanghao=o[c],n.ro.zhanghao=!0,a.abrupt("continue",18);case 24:if("xingming"!=c){a.next=28;break}return n.ruleForm.xingming=o[c],n.ro.xingming=!0,a.abrupt("continue",18);case 28:if("touxiang"!=c){a.next=32;break}return n.ruleForm.touxiang=o[c],n.ro.touxiang=!0,a.abrupt("continue",18);case 32:if("mima"!=c){a.next=36;break}return n.ruleForm.mima=o[c],n.ro.mima=!0,a.abrupt("continue",18);case 36:if("xingbie"!=c){a.next=40;break}return n.ruleForm.xingbie=o[c],n.ro.xingbie=!0,a.abrupt("continue",18);case 40:if("shouji"!=c){a.next=44;break}return n.ruleForm.shouji=o[c],n.ro.shouji=!0,a.abrupt("continue",18);case 44:a.next=18;break;case 46:n.styleChange();case 47:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},touxiangTap:function(){var e=this;this.$api.upload((function(t){e.ruleForm.touxiang="upload/"+t.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=this;return u(r.default.mark((function n(){var a,i,u,o,c,s,l,f,g,d;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.ruleForm.zhanghao){n.next=3;break}return t.$utils.msg("账号不能为空"),n.abrupt("return");case 3:if(t.ruleForm.xingming){n.next=6;break}return t.$utils.msg("姓名不能为空"),n.abrupt("return");case 6:if(t.ruleForm.mima){n.next=9;break}return t.$utils.msg("密码不能为空"),n.abrupt("return");case 9:if(!t.ruleForm.shouji||t.$validate.isMobile(t.ruleForm.shouji)){n.next=12;break}return t.$utils.msg("手机应输入手机格式"),n.abrupt("return");case 12:if(!t.cross){n.next=28;break}if(o=e.getStorageSync("statusColumnName"),c=e.getStorageSync("statusColumnValue"),""==o){n.next=28;break}if(s=e.getStorageSync("crossObj"),o.startsWith("[")){n.next=24;break}for(l in s)l==o&&(s[l]=c);return f=e.getStorageSync("crossTable"),n.next=22,t.$api.update("".concat(f),s);case 22:n.next=28;break;case 24:a=Number(e.getStorageSync("userid")),i=s["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 28:if(!i||!a){n.next=50;break}return t.ruleForm.crossuserid=a,t.ruleForm.crossrefid=i,g={page:1,limit:10,crossuserid:a,crossrefid:i},n.next=34,t.$api.list("yonghu",g);case 34:if(d=n.sent,!(d.data.total>=u)){n.next=40;break}return t.$utils.msg(e.getStorageSync("tips")),n.abrupt("return",!1);case 40:if(!t.ruleForm.id){n.next=45;break}return n.next=43,t.$api.update("yonghu",t.ruleForm);case 43:n.next=47;break;case 45:return n.next=47,t.$api.add("yonghu",t.ruleForm);case 47:t.$utils.msgBack("提交成功");case 48:n.next=58;break;case 50:if(!t.ruleForm.id){n.next=55;break}return n.next=53,t.$api.update("yonghu",t.ruleForm);case 53:n.next=57;break;case 55:return n.next=57,t.$api.add("yonghu",t.ruleForm);case 57:t.$utils.msgBack("提交成功");case 58:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),r=t.getMonth()+1,a=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(n,"-").concat(r,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};t.default=c}).call(this,n("543d")["default"])}},[["cdc0","common/runtime","common/vendor"]]]);