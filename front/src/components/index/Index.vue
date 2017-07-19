<template>
  <div>
    <el-row>
    	<Appheader></Appheader>
       <el-row :gutter="20" style="margin:0;padding:0">
        <el-col :span="20" :offset="2">
          <el-row :gutter="20">
            <el-col :span="16">
              <div class="grid-content bg-purple">
                <div class="shoucang le">
                    <div class="shoucang_title">
                      <span style="line-height: 20px;font-weight:700;color:white" >网址收藏</span>
                    </div>
                    <div>
                      <p class="ptext"><a>· 唐辛子新书《日本式中毒》</a></p>
                      <p class="ptext"><a>· 《腾讯·大家》唐辛子专栏</a></p>
                      <p class="ptext"><a>·  点击进入《唐辛子in日本：有关教育、饮食和男女》当当网购地址</a></p>
                      <p class="ptext"><a>·  点击进入《日本女人的爱情武士道》当当网购地址</a></p>
                      <p class="ptext"><a>· 点击进入《日本女人的爱情武士道》豆瓣读书</a></p>
                      <p class="ptext"><a>·  辛子姐姐的凤凰博客</a></p>
                      <p class="ptext"><a>·  辛子姐姐的新浪博客</a></p>
                      <p class="ptext"><a>·  辛子姐姐的新浪微博</a></p>
                    </div>
                </div>
                <div class="shoucang">
                    <div class="shoucang_title">
                      <span style="line-height: 20px;font-weight:700;color:white" >日志</span>
                    </div>
                    <div class="text item">
                      <div class="con" v-for="(item,index) in indexdata">
                        <h3>{{item.name}}<span class="sytj"><img src="./../../images/6.jpg"></span></h3>
                        <div>
                          <span style="color:#666;font-size:12px">{{item.date}}</span>
                        </div>
                        <div class="cont indexp" v-html="item.desc" >
                          {{item.desc}}
                          <!--<p>
                            最近琼瑶阿姨的在网络公开交代自己的后事引发不小震撼。闻者皆赞阿姨豁达。
                            其实，“安乐死”并不是一个新鲜的话题，早在1916年，日本的大作家、医学博士森欧外就慎重地提出过“安乐死”，
                            并为此写过一部小说《高濑舟》。
                            转发曾经写过的一篇相关文章。
                          </p>
                          <h3 style="text-align:center;margin:30px 0;">森欧外的高濑川以及安乐死</h3>
                          <p>
                            去京都，每次必去之地，是四条河原町。从四条河原町朝着四条大桥方向慢慢踱步过去，便可看到木屋町通。木屋町通有一条极浅的川流，那便是高濑川。
                            高濑川沿岸种植着成排的樱花树，春天的时候，盛开着樱花的树枝低低地倾斜着一直拂向高濑川清浅的水面，粉色的花瓣在高濑川水中映照出倒影，
                            川水静如处子，屏息而不语。
                            这样欲擒故纵的、含蓄而又挑逗的画面，是极为京都的。京都的樱花，因为高濑川的存在，便显得与别处有些不同。
                          </p>-->
                        </div>
                        <p><a>阅读（{{item.looknumber}}）|</a><a>评论( {{item.commentCount}} )|</a><a>    阅读全文>></a></p>
                      </div>
                      
                      </div>
                    </div>
                </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple">
                  <div>
                    <div class="right_top">
                      <div class="shoucang_title">
                        <span style="line-height: 20px;font-weight:700;color:white" >关于我</span>
                      </div>
                      <div class="text item">
                        <div style="text-align:center"><img src="./../../images/7.jpg"></div>
                        <p class="zuozhe"><span class="ll"></span>唐辛子<span class="rr"></span></p>
                        <div class="live">生活在日本的专栏作家</div>
                        <div class="jianjie">
                          唐辛子,在日文中就是“辣椒”的意思,唐辛子就是“糖辣椒 ”,一个既甜且辣的人。
                          原创博文,原创摄影图片,所有文章及相关图片版权由作者本人所有。转贴请标明出处,媒体转载引用请务必事前告知。
                          多谢~邮箱：xinzijj@gmail.com
                        </div>
                        <div class="jianjie">
                          <p class="pp">
                            <b>近期心愿：</b>
                            <span>唐辛子同志新书《日本女人的爱情武士道》国内各大书店陆续上架中, 当当网购地址：
                            http://product.dangdang.com/product.aspx?product_id=22633524《唐辛子in日本：有关教育、饮食和男女》
                            当当网购地址：http://product.dangdang.com/product.aspx?product_id=20914618&ref=search-1-C
                            </span>
                          </p>
                          <p class="pp">
                            <b>E-Mail：</b>
                            <span>xinzijj@gmail.com</span>
                          </p>
                          <p class="pp">
                            <b>博客等级：</b>
                            <b style="color:#42b4d6">50</b>
                          </p>
                          <p class="pp">
                            <b>今日访问：</b>
                            <b style="color:#42b4d6">515</b>
                          </p>
                          <p class="pp">
                            <b>总访问量 ：</b>
                            <b style="color:#42b4d6">31709388</b>
                          </p>
                          <p class="pp">
                            <b>最后登录 ：</b>
                            <span>2017-06-21  13:30</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div class="right_top">
                      <div class="shoucang_title">
                        <span style="line-height: 20px;font-weight:700;color:white" >心情随笔</span>
                      </div>
                      <div class="text item">
                        <div>
                          <div class="stu"></div>
                          <b>唐辛子</b>
                        </div>
                        <div>
                          <div class="text item slie">
                            史上最热一天!!!
                            <span style="font-size:12px;color: gray;margin-left: 10px">01-05 22:03  </span><a style="font-size:12px">8条回复</a>
                          </div>
                          <div class="text item slie">
                            中国在中印边境试射远程火箭炮
                            <span style="font-size:12px;color: gray;margin-left: 10px">01-05 22:03  </span><a style="font-size:12px">8条回复</a>
                          </div>
                          <div class="text item slie">
                            你可以提出编程相关的疑惑，关注感兴趣的问题，对认可的回答投赞同票；
大家会帮你解决编程的问题，和你探讨技术更新，为你的回答投上赞同票。
立即注册
明天提醒我

                            <span style="font-size:12px;color: gray;margin-left: 10px">01-05 22:03  </span><a style="font-size:12px">8条回复</a>
                          </div>
                          <div class="text item slie">
                        西北地区东部、华北大部、黄淮北部和东部及江南中东部
                            <span style="font-size:12px;color: gray;margin-left: 10px">01-05 22:03  </span><a style="font-size:12px">8条回复</a>
                          </div>
                          <p style="text-align:right"><a>查看全部>></a></p>
                        </div>
                      </div>
                    </div>
                    <div class="right_top">
                      <div class="shoucang_title">
                        <span style="line-height: 20px;font-weight:700;color:white" >最近访客</span>
                      </div>
                      <div class="text item">
                        <el-row>
                          <el-col :span="12">
                            <div class="grid-content bg-purple">
                              <span><img src="./../../images/10.jpg" style="width: 50px;height: 50px"></span>
                              <span><p>戈之</p><p>1小时前</p></span>
                            </div>
                          </el-col>
                          <el-col :span="12">
                            <div class="grid-content bg-purple-light">
                              <span><img src="./../../images/11.jpg" style="width: 50px;height: 50px"></span>
                              <span><p>戈之</p><p>1小时前</p></span>
                            </div>
                          </el-col>
                        </el-row>
                        <p style="text-align:right"><a>查看全部>></a></p>
                      </div>
                    </div>
                    <div class="right_top">
                      <div class="shoucang_title">
                        <span style="line-height: 20px;font-weight:700;color:white" >留言</span>
                      </div>
                      <div>
                          <div v-for="(item,index) in liuyandata" class="text item slie">
                            <el-row :gutter="20">
                              <el-col :span="9"><div class="grid-content bg-purple">{{item.name}}</div></el-col>
                              
                              <el-col :span="11"><div class="grid-content bg-purple" style="font-size:12px;color:gray">{{item.date}}</div></el-col>
                            </el-row>
                            {{item.desc}}
                            
                          </div>
                          <p style="text-align:right"><a>查看全部>></a></p>
                      </div>
                    </div>
                  </div>
              </div>
            </el-col>
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
export default {
  components:{
  	Appheader:Header,
  	Appfooter:Footer

  },
  	created(){
		this.getData();
  },
  data(){
    return{
      indexdata:[],
      liuyandata:[]
    }
  }, 
  methods: {
  	getData(){
      var newarr=[]
		this.axios.post('http://localhost:3000/log/list').then((response) => {
			this.indexdata= response.data.docs
		}),
    this.axios.get('http://localhost:3000/comment').then((response) => {
      
      for (var i = response.data.length-5; i < response.data.length; i++) {
        newarr.push(response.data[i])
      }
			this.liuyandata= newarr.reverse();
		})
    }
}

}

</script>

<style lang="scss" scoped>
.el-row {
	    margin-bottom: 20px;
	    &:last-child {
	      margin-bottom: 0;
	    }
	  }
.text {
    font-size: 14px;
  }
.ptext{
  margin:5px 10px;
  font-size:14px;
}
  .item {
    padding: 18px 15px;
   
  }
 .con{
   border-bottom:1px dashed #42b4d6;
 }
 .cont{
   margin: 30px 0;
 }
 .shoucang{
   border: 1px solid #42b4d6;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-bottom:15px; 
 }
 .shoucang_title{
  height:30px;
  line-height: 30px;
  background:#42b4d6;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
 }
 .sytj{
   display: inline-block;
   width: 80px;
   height:20px;
   position: relative;
   img{
     width: 100%;
     height: 100%;
     position: absolute;
     top:4px;
   }
 }
 a{
   color:#32a2c8;
 }
 a:hover{
   cursor:pointer;
   text-decoration:underline;
 }
 .right_top{
   height: auto;
   border: 1px solid #42b4d6;
   border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-bottom:15px;
 }

 .zuozhe{
   position: relative;
   text-align: center;
   margin: 10px 0;
 }
 .ll,.rr{
   display: inline-block;
   width: 20px;
   height: 20px;
   position: absolute;
   top: 0px;
   
 }
 .ll{
  left: 35%;
  background: url(./../../images/8.jpg) no-repeat;
  background-size: 100% 100%;
 }
 .rr{
   background: url(./../../images/9.jpg) no-repeat;
   background-size:100% 100%; 
 }
 .live{
    text-align:center;
    width:45%;
    background:#efeae7;
    margin-left:29%;
    padding:2px 2px;
 }
 .jianjie{
    margin:10px 0;
    font-size:12px;
 }
 .pp{
   margin: 5px 0;
 }
.stu{
  width:40px;
  height: 40px;
  background: url(./../../images/7.jpg);
  background-size:100% 100%; 
}
.slie{
  border-bottom: 1px dashed #42b4d6;
}
.el-col-6 {
    width: 29%;
}
</style>
