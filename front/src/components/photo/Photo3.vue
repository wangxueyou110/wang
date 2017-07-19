<template>
  <div>
    <el-row>
    	<Appheader></Appheader>
		<el-row :gutter="20" style="margin:0;padding:0">
		  <el-col :span="20" :offset="2">

            <el-row>
                <el-col :span="4">
                    <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo" 	>
                        <el-menu-item-group title="旅游">
												  	<el-menu-item index="1"><router-link tag="li"
																				to="/Photo/日本"
																				class="list-group-item"
																				style="cursor: pointer"
															>
													日本</router-link></el-menu-item>
													<el-menu-item index="2"><router-link tag="li"
																				to="/Photo/澳大利亚"
																				class="list-group-item"
																				style="cursor: pointer"
															>
													澳大利亚</router-link></el-menu-item>
                        </el-menu-item-group>
                        <el-menu-item-group title="工作">
                            <el-menu-item index="3"><router-link tag="li"
																				to="/Photo/面试"
																				class="list-group-item"
																				style="cursor: pointer"
															>
													面试</router-link></el-menu-item>
                            	<el-menu-item v-for="(value,key) in linames" index={key}><router-link tag="li"
																				to="/Photo"
																				class="list-group-item"
																				style="cursor: pointer"
															>
													{{value.title}}</router-link></el-menu-item>
													

                        </el-menu-item-group>
                    </el-menu>
                </el-col>



                <el-col :span='20'>
										<router-view>	</router-view>       
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

  data(){
  	return{
  		pbtn:true,
  		phoneimg:['src/images/phone1.jpg','src/images/phone2.jpg','src/images/phone3.jpg','src/images/phone4.jpg','src/images/phone5.jpg','src/images/phone1.jpg','src/images/phone2.jpg','src/images/phone3.jpg','src/images/phone4.jpg','src/images/phone5.jpg'],
  		pdtailnum:0,
			photoplace:['日本','澳大利亚'],
			linames:[]
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
  	},
		getData(){
			this.axios.get('http://10.31.160.28:3000/cate/2').then((response) => {
							console.log(response.data);
							 	this.linames=response.data;
								 
					})
			}
    },
  components:{
  	Appheader:Header,
  	Appfooter:Footer
  },
	created(){
		this.getData();
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
