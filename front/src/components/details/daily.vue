<template>
  <div>
    <el-row>
      <Appheader></Appheader>
        <el-col :span="20" :offset="2">
            <div class="grid-content" style="font-size: 20px">日志</div>
        </el-col>
        <el-row>
            <el-col :span="12" :offset="2">
                <div class="grid-content">
                    <div class="retract_5 bd">
                    <div>
                      <h3>{{logdata.name}}</h3>
                    </div>
                    <div class="fl pd">
                    <div class="left f13 bd">
                       <span>{{logdata.date}}</span>|
                       <span>分类：{{logdata.cate.title}}</span>
                    </div>
                    <div class="right f13 bd">
                      <a>举报</a>|                     
                      <a>字号</a>|
                       <a>订阅</a>
                       <span></span>
                    </div>
                    </div>
                    <div class="fl">
                    
                    <div class="right bd f13">
                        <a>我的照片书</a>|
                        <a>下载LOFTER</a>
                    </div>  
                    </div>
                </div>
                <div v-html="logdata.desc" id="dailylog">
                  {{logdata.desc}}
                </div>
                
                  <!-- <p>《再见了，阿道夫》是电影《Lore》的日文片名翻译，今年初春在日本全国公演（中文片名翻译为《少女洛荷》）。</p>
                  <img src="../../images/adf.jpg">
                  <p>14岁的德国少女洛荷是党卫军高官的长女，她的父母信仰纳粹主义，并效忠总统希特勒。在这样的家庭环境下，14岁的洛蕾和她的弟妹，也对纳粹主义充满敬佩。他们被称为“希特勒的孩子”。</p>
                  <p>1945年德国战败，希特勒自杀，洛蕾的父亲在逃亡途中被捕，母亲也投案自首。14岁的洛蕾抱着襁褓中最小的弟弟，领着妹妹和一对双胞胎弟弟，5个孩子长途跋涉，前往900公里之外汉堡的祖母家。</p> -->
                  <!-- <div :data="data"></div> -->
                  
                    <div>
                      <span class="f13">阅读({{looknumber}})</span> | <span class="f13">评论({{total}})</span>
                    </div>
                    
                            
                  
                 <div>
                  <h4 class="bgspan">评论</h4>
                  
                   <div class="pd_up border_r" v-for="(value,index) in comment">
                      <el-row type="flex" class="row-bg border_r" >
                            <el-col :span="3" justify="center"><div class="grid-content box"><a href="#" class="left"><img src="../../images/adf.jpg" class="haedpc"></a></div></el-col>
                            
                            <el-col :span="21" >
                                    
                                   <el-row>
                                      <el-col :span="4"><div class="grid-content"><span class="f13">{{value.name}}</span></div></el-col>
                                      <el-col :span="10"><div class="grid-content"></div></el-col>
                                      <el-col :span="10"><div class="grid-content"><span class="f13 right">{{value.date}}</span></div></el-col>
                                    </el-row>
                                    <el-row>
                                      <el-col :span="24"><div class="grid-content"><p>{{value.desc}}</p></div></el-col>
                                    </el-row>
                             
                                   
                            </el-col>

                      </el-row>

                   </div>
                   <div class="block">
                      <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :page-size="totalpagesize"
                        layout="total, prev, pager, next"
                        :total="total">
                      </el-pagination>
                    </div>
                 <el-form ref="form" :model="form" :rules="rules2"  label-width="80px">
                 
                  <el-form-item label="评论" prop="desc">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit('form')">提交评论</el-button>
                    <el-button type="primary" @click="offSubmit()">取消</el-button>
                  </el-form-item>
                </el-form> 

                </div>    
                </div>
                
                </el-col>
            <el-col :span="6" :push="1">
                <el-row>
                    <el-col :span="24" class="border_r"><div class=" right bd"><p class="pd_up">关于我</p></div></el-col>
                </el-row>

                <el-row type="flex" justify="center">
                    <el-col :span="12" ><div class="box"><img src="../../images/7.jpg" class="haedbig"></div></el-col>
                </el-row>

                <el-row type="flex" justify="center">
                    <el-col :span="6" ><div class="border_r"><a href="#" class="">唐辛子</a><span></span></div></el-col>
                </el-row>
                 <el-row type="flex" justify="center">
                    <el-col :span="24" ><div class="border_r"><p>生活在日本的专栏作家
唐辛子,在日文中就是“辣椒”的意思,唐辛子就是“糖辣椒 ”,一个既甜且辣的人。原创博文,原创摄影图片,所有文章及相关图片版权由作者本人所有。转贴请标明出处,媒体转载引用请务必事前告知。多谢~邮箱：xinzijj@gmail.com</p></div></el-col>
                </el-row>
                <el-row type="flex" class="row-bg" justify="center">
                  <el-col :span="4"><div><a href="#">加博友</a></div></el-col>
                  <el-col :span="4"></el-col>
                  <el-col :span="4"><div><a href="#">加关注</a></div></el-col>
                </el-row>
            </el-col>
        </el-row>
       <Appfooter></Appfooter>
    </el-row>
  </div>
  
</template>

<script>
import Header from './../public/Header.vue';
import Footer from './../public/Footer.vue';
import moment from 'moment';
export default {
  components:{
    Appheader:Header,
  	Appfooter:Footer,
  	
  },
  	created(){
    this.getData();
    this.logname=window.sessionStorage.lodingname
  },
  data(){
    var checkDesc = (rule, value, callback) => {
        if (value === '') {
          return callback(new Error('请填写评论'));
        }else {
          callback();
        }
      };
    return{
      rules2: {
          desc: [
            { validator: checkDesc, trigger: 'blur' }
          ]
        },
      comment:[],
      desc: [
            { required: true, message: '请填写评论', trigger: 'blur' }
          ],
      logname:'',
      logdata:{
        cate:''
      },
      logid:'',
      form: {
          name:'',
           date: '',
           commenttype: '',
           commenttitle: '',
           commentId:'',
          desc: ''
        },
      ruleForm2:{
        commenttype:'习近平接受八国新任驻华大使递交国书',
        page:1,
      },
      total:0,
      totalpage:0,
      totalpagesize:5,
      looknumber:0

    }
    // console.log('数据传输成功')
  },
  
   methods: {
     offSubmit(){
         this.form={
              name:'',
             date: '',
             commenttype: '',
             commenttitle: '',
             commentId:'',
            desc: ''
           }
     },
     onSubmit(formName) {
       var _this=this;
       this.form.name=this.logname;
       this.form.commenttype=this.logdata.name;
       this.form.commenttitle=this.logdata.cate.title;
       this.form.commentId=this.logid;
      this.$refs[formName].validate((valid) => {
          if (valid) {
            if(_this.form.name){
              this.form.date=moment().format('YYYY MMM Do,h:mm:ss');
              this.axios.post('http://localhost:3000/comment/data', _this.form)
              .then(response => {
               _this.form={
                  name:'',
                 date: '',
                 commenttype: '',
                 commenttitle: '',
                 commentId:'',
                desc: ''
               }
               this.getData2()
              })

           }else{
             alert('登录后方可评论！！！')
           }





          } else {
            return false;
          }
        });

            
        
      },
		getData(){
      var _this=this;
       this.logid=this.$route.params.id;
       var comment=[];
			this.axios.post('http://localhost:3000/log/list').then((response) => {              
              for(var i=0;i<response.data.docs.length;i++){
                  if(response.data.docs[i]._id==_this.logid){
                    this.logdata=response.data.docs[i];
                  _this.looknumber= response.data.docs[i].looknumber;
                  _this.looknumber++
                  console.log(_this.looknumber)
                   this.axios.put(`http://localhost:3000/log/data/${this.logid}`,{looknumber:this.looknumber}).then((response) => {  
               console.log(response)         
                             
      })
                  }
              }
              this.ruleForm2.commenttype=this.logdata.name
              this.getData2()
              
      })
     

    },
    getData2(){
      var _this=this;
       this.logid=this.$route.params.id;
       
       this.ruleForm2.commenttype=this.logdata.name;
       
       var comment=[];
      this.axios.post('http://localhost:3000/comment/list',_this.ruleForm2).then((response) => {       
             this.total=response.data.total;                     
             this.comment=response.data.docs;               
          })

    },
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.ruleForm2.page=val;
        this.getData2()
      }
   }
}
</script>

<style lang="scss" scoped>
    .el-row {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 10px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    padding: 0 5px;
    line-height: 36px;
    padding-left: 20px;    
  }
  
  .retract_5{
      margin: 0 5px;
  }
  .border_r{
      border-bottom: 1px dashed red;
  }
  .box{
  display: flex;
  align-items: center;

}
a{
  text-decoration: none;
}
.left{
  float: left
}
.right{
  float: right
}
h3{
  padding: 30px 0 20px 10px;
}
.f13{
  font-size:13px
}

.bgspan span{
  width: 24px;
  height: 24px;
  display: inline-block;
  padding: 0 0 0 6px;
}
.fl{
  overflow: hidden
}
.pd{
  padding: 0 0 20px 0;
}
.pd_up{
 padding:20px 0 0 0;
}


img{
  margin: 10px 100px;
}
li{
     list-style: disc inside none;
     display: list-item;
    line-height: 1.65em;
    background: none repeat scroll 0 0 transparent;
    padding: 0;
    margin: 0;
    text-indent: 0;
    text-align: left;
    font-size: 14px;
}
.haedpc{
  width: 50px;
  height: 50px;
  margin: 10px 20px;
  border-radius: 50%
}
.haedbig{
  width: 160px;
  height: 160px;
  border-radius: 50%;
  margin: 0 0;


}
</style>
