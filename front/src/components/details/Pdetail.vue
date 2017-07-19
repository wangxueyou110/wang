<template>
  <div>
    <el-row>
    	<Appheader></Appheader>
		<el-row :gutter="20" style="margin:0;padding:0">
		  <el-col :span="20" :offset="2">
		  <div class="grid-content bg-purple">
			<div class="phone-header">博客相册</div>
			<div class="phone-conter">
				<el-col :span="24">
				<el-row :gutter="20" class="phone-title">
					<el-col :span="4" class="phone-title-left">日本的幼儿园</el-col>
					<el-col :span="10" class="phone-title-right">
						<el-breadcrumb separator="|">
						  <el-breadcrumb-item :to="{ path: '/' }">首页>></el-breadcrumb-item>
						  <el-breadcrumb-item :to="{ path: '/pdetail' }" @click="closephone">日本的幼儿园>></el-breadcrumb-item>
						  <el-breadcrumb-item >首页>></el-breadcrumb-item>
						</el-breadcrumb>
					</el-col>
				</el-row>
				</el-col>
				<el-col :span="24" class="phone-title-two"><span>10</span>张相片 浏览<span>1143</span>  创建于<span>2014-01-14 19:35</span></el-col>
				<el-col :span="24" class="phone-conter-img" v-if="pbtn">
					<el-col :span="4"  v-for="(item,num) in phoneimg" :key="item">
						<a href="javascript:;" @click="openphone">
							<img :src="item" :index="num"/>							
						</a>
					</el-col>						
				</el-col>
				<el-col :span="24" v-if="!pbtn">
					<el-col :span="24"><a href="javascript:;" @click="closephone">返回</a></el-col>
					<el-col :span="24">
						<el-carousel :interval="4000" type="card" height="370px" :autoplay=false :initial-index="pdtailnum" >
					    <el-carousel-item v-for="item in phoneimg" :key="item" >
					        <img :src="item">
					    </el-carousel-item>
					</el-carousel>
					</el-col>
					
				</el-col>

			</div>
		  </div>
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

  data(){
  	return{
  		pbtn:true,
  		phoneimg:['src/images/phone1.jpg','src/images/phone2.jpg','src/images/phone3.jpg','src/images/phone4.jpg','src/images/phone5.jpg','src/images/phone1.jpg','src/images/phone2.jpg','src/images/phone3.jpg','src/images/phone4.jpg','src/images/phone5.jpg'],
  		pdtailnum:0
  	} 	
  },
  methods: {
  	openphone(e) {
  		this.pbtn=false;
  		this.pdtailnum=parseFloat(e.target.getAttribute('index'));
  	},
  	closephone(e) {
  		e.preventDefault()
  		this.pbtn=true
  		console.log(111)
  	}
  },
  components:{
  	Appheader:Header,
  	Appfooter:Footer
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
	  .el-col {
	    border-radius: 4px;
	  }
	  .bg-purple {
	    background: white;
	    border: 1px solid blue
	  }

	  .grid-content {
	    border-radius: 4px;
	    min-height: 400px;
	    overflow: hidden;
	    img{
	    	width: 140px;
	    	height: 96px;
            border: 1px solid #aaa;
            margin-bottom: 10px;
	    }
	  }
	  .phone-header{
	  	height: 27px;
	  	background:rgba(110, 209, 239, 0.8)
	  }
	  .phone-title{
		margin-top: 10px
	  }
	  .phone-title-left{
	  	font-weight: bold;
	  	font-size: 20px;
	  }
	  .phone-title-right{
	  	padding: 6px 0px;
	  }
	  .phone-title-two{
	  	color: #aaaaaa;
	  	font-size: 12px;
	  	padding: 10px
	  }
	  .phone-conter-img{
	  	padding: 10px 0
	  }
	   .el-carousel__item {
		    color: #475669;
		    font-size: 14px;
		    line-height: 200px;
		    margin: 0;
		    img{
		    	width: 100%;
   				height: 100%;
		    }
		  }
		  
</style>
