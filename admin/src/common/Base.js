 var CryptoJS = require("crypto-js");

 export default {
     data() {
         return {
             modal1: false,
             ids: [],
             list: [],
             filter: {
                 page: 1,
                 limit: 5,
                 name: '',
                 total: 0
             },
             self: this
         }
     },
     methods: {
         edit(index) {
             var _this = this;
             var dataObj = Object.assign({}, _this.list[index]);
             _this.modal1 = true;
            _this.formValidate = dataObj;
         }, 
         listen(index) {
             var _this = this;
             var dataObj = Object.assign({}, _this.list[index]);
            // this.$Modal.confirm({
            //  render: (h) => {
            //         return h('div',[
            //             h('strong',`${dataObj.originalname}`),
            //             h('audio',{
            //                 attrs:{
            //                 src:`http://localhost:3000/${dataObj.filename}`,
            //                 width:"376px",
            //                 height:"50px",
            //                 class:"audio",
            //                 controls:"controls",
            //                 autoplay:"autoplay",
            //                 preload:"none",
            //                 type:"audio/mpeg"
            //               }
            //             })
            //         ])                       
            //     }
            // })

             this.$Modal.success({
                title: `${dataObj.originalname}`,
                content:`<audio src="http://localhost:3000/${dataObj.filename}" autoplay="autoplay" class="audio" preload="none" controls="" type="audio/mpeg"></audio>`
             })
         },
         watch(index) {
             var _this = this;
             var dataObj = Object.assign({}, _this.list[index]);
            this.$Modal.confirm({
                render: (h) => {
                    return h('div',[
                        h('strong',`${dataObj.originalname}`),
                        h('video',{
                            attrs:{
                            src:`http://localhost:3000/${dataObj.filename}`,
                            width:"100%",
                            height:"250px",
                            class:"video",
                            controls:"controls",
                            autoplay:"autoplay",
                            preload:"none"
                          }
                        })
                    ])                       
                }
            })  



             // this.$Modal.confirm({
             //    title: `${dataObj.originalname}`,
             //    content:`<video src="http://10.31.160.28:3000/${dataObj.filename}" autoplay="autoplay" class="audio" preload="none" controls="" ></video>`
             // })
         },
         show(index) {
             var _this = this;
             var dataObj = Object.assign({}, _this.list[index]);
             console.log(dataObj.name)
             this.$Modal.info({
                title: `${dataObj.name}`,
                content:`${dataObj.desc}`
             })
         },
         showp(index){
             var _this = this;
             var dataObj = Object.assign({}, _this.list[index]);
             self.location='http://localhost:8080/#/comment';
         },
         remove(index) {
             var _this = this;

             this.$Modal.confirm({
                 title: '确认删除数据',
                 content: '<p>确认删除数据</p>',
                 onOk: () => {
                     let deleteUrl = `http://localhost:3000/${_this.module}/` + _this.list[index]._id;
                     _this.$http.delete(deleteUrl)
                         .then(response => {

                             _this.getData()
                             this.$Message.info('成功删除数据');
                         })
                 },
                 onCancel: () => {
                     this.$Message.info('取消删除数据');
                 }
             });

         },
         removes() {
             var _this = this;
             if (_this.ids.length > 0) {
                 this.$Modal.confirm({
                     title: '确认删除数据',
                     content: '<p>确认删除数据</p>',
                     onOk: () => {
                         let deleteUrl = `http://localhost:3000/${_this.module}/removes`;
                         _this.$http.post(deleteUrl, { ids: _this.ids })
                             .then(response => {
                                 _this.getData()
                                 this.$Message.info('成功删除数据');
                             })
                     },
                     onCancel: () => {
                         this.$Message.info('取消删除数据');
                     }
                 });
             } else {
                 alert('请选择要删除的数据')
             }
         },
         changePage(page) {
             var _this = this;
             _this.filter.page = page;
             _this.getData();
         },
         search() {
             var _this = this;
             _this.getData();
         },
         handleSubmit(name) {
            console.log(name)
             var _this = this;
             var submitUrl, submitMethods;

             if (_this.formValidate._id != null) {
                 submitUrl = `http://localhost:3000/${_this.module}/data/` + _this.formValidate._id;
                 submitMethods = 'PUT';
             } else {
                 submitUrl = `http://localhost:3000/${_this.module}/data`;
                 submitMethods = 'POST'
             }
             _this.$refs[name].validate((valid) => {
                 if (valid) {
                     _this.formValidate.password = CryptoJS.MD5(_this.formValidate.password, { asString: true })
                         .toString();
                     console.log(_this.formValidate)
                     _this.$http({
                             url: submitUrl,
                             method: submitMethods,
                             data: _this.formValidate
                         })
                         .then(function(response) {
                            if(response.data){

                               _this.$Message.success('提交成功!');
                               _this.modal1 = false;
                               _this.getData();
                               Object.assign(_this.$data.formValidate, _this.$options.data().formValidate); // 让我们的数据恢复到初始化状态 
                            }else{
                                _this.$Message.success('用户名重复！    请修改！');
                            }  
                         }).catch((error) => {
                             if (error) {
                                 this.$Message.info(error.response.data.message)
                             }
                         });
                 } else {
                     this.$Message.error('表单验证失败!');
                 }
             })
         },
         handlerSelectionChange(selection) {
             var _this = this;
             if (selection && selection.length > 0) {
                 var ids = [];
                 let selectionLen = selection.length;
                 for (let i = 0; i < selectionLen; i++) {
                     ids.push(selection[i]._id);
                 }
                 _this.ids = ids;
             }

         },
         handleReset(name) {
             this.$refs[name].resetFields();
         },
         getData() {
             var _this = this;
             _this.$http.post(`http://localhost:3000/${_this.module}/list`, _this.filter)
                 .then(function(response) {
                     _this.list = response.data.docs;
                     
                     _this.filter.total = response.data.total;

                 })
         }
     },
     created() {
         this.getData();
     }
 }