webpackJsonp([8],{"/yGc":function(e,t){},"4W4+":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("Xxa5"),o=r.n(a),i=r("exGp"),s=r.n(i),n=r("Dd8w"),l=r.n(n),c=r("NYxO"),u=r("g1wi"),d={data:function(){return{token:"",id:this.$route.params.id,detail:null,categoryList:[],formValidate:{title:"",author:"",cover:"",description:""},ruleValidate:{title:[{required:!0,message:"专栏标题不能为空",trigger:"blur"}],author:[{required:!0,message:"专栏作者不能为空",trigger:"blur"}],cover:[{required:!0,message:"专栏封面不能为空",trigger:"blur"}],description:[{required:!0,message:"专栏简介不能为空",trigger:"blur"}]}}},created:function(){this._getUploadToken()},methods:l()({},Object(c.b)({createColumn:"column/create",getCategoryList:"category/getCategoryList"}),{uploadSuccess:function(e){var t="http://cdn.boblog.com/"+e.key;this.formValidate.cover=t,this.$Message.success("上传成功!")},uploadError:function(e){this.$Message.error("上传失败!"),console.log(e)},_getUploadToken:function(){var e=this;return s()(o.a.mark(function t(){var r;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(u.a)();case 3:r=t.sent,e.token=r.token,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}},t,e,[[0,7]])}))()},_createColumn:function(){var e=this;return s()(o.a.mark(function t(){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.formValidate.id=e.id,t.prev=1,t.next=4,e.createColumn(e.formValidate);case 4:e.$Message.success("新增成功!"),e.$router.push("/column"),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(1);case 10:case"end":return t.stop()}},t,e,[[1,8]])}))()},handleSubmit:function(e){var t=this;this.$refs[e].validate(function(e){e?t._createColumn():t.$Message.error("请完成表单!")})},handleReset:function(e){this.$refs[e].resetFields()}})},p={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("Form",{ref:"formValidate",attrs:{model:e.formValidate,rules:e.ruleValidate,"label-width":100}},[r("FormItem",{attrs:{label:"专栏标题",prop:"title"}},[r("Input",{attrs:{placeholder:"专栏标题"},model:{value:e.formValidate.title,callback:function(t){e.$set(e.formValidate,"title",t)},expression:"formValidate.title"}})],1),e._v(" "),r("FormItem",{attrs:{label:"专栏作者",prop:"author"}},[r("Input",{attrs:{placeholder:"专栏作者"},model:{value:e.formValidate.author,callback:function(t){e.$set(e.formValidate,"author",t)},expression:"formValidate.author"}})],1),e._v(" "),r("FormItem",{attrs:{label:"专栏简介",prop:"description"}},[r("Input",{attrs:{placeholder:"专栏简介"},model:{value:e.formValidate.description,callback:function(t){e.$set(e.formValidate,"description",t)},expression:"formValidate.description"}})],1),e._v(" "),r("FormItem",{attrs:{label:"专栏封面",prop:"cover"}},[r("div",{staticClass:"cover"},[r("div",{staticClass:"upload"},[r("Upload",{attrs:{multiple:"",type:"drag",action:"http://up-z2.qiniu.com","show-upload-list":!1,"on-success":e.uploadSuccess,"on-error":e.uploadError,data:{token:e.token}}},[r("div",{staticStyle:{padding:"20px 0"}},[r("Icon",{staticStyle:{color:"#3399ff"},attrs:{type:"ios-cloud-upload",size:"52"}}),e._v(" "),r("p",[e._v("点击或者拖拽上传")])],1)])],1),e._v(" "),e.formValidate.cover?r("div",{staticClass:"article-cover"},[r("img",{attrs:{src:e.formValidate.cover,alt:"cover"}})]):e._e()])]),e._v(" "),r("FormItem",[r("Button",{on:{click:function(t){return e.handleReset("formValidate")}}},[e._v("重置")]),e._v(" "),r("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit("formValidate")}}},[e._v("提交")])],1)],1)],1)},staticRenderFns:[]};var m=r("VU/8")(d,p,!1,function(e){r("/yGc")},"data-v-4ad40814",null);t.default=m.exports}});