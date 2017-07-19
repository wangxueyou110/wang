<template>
  <div>
    <el-row>
    	<Appheader></Appheader>
		<el-row :gutter="20" style="margin:0;padding:0">
		  <el-col :span="20" :offset="2">

            <el-row>
                <el-col :span="4">
                    <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo" 	>
                        <!-- <el-input
							  placeholder="输入关键字进行过滤"
							  v-model="filterText">
							</el-input> -->

							<el-tree class="filter-tree" :data="data2" :props="defaultProps" default-expand-all  @current-change="clickphone"  ref="tree2">
							</el-tree>
                    </el-menu>
                </el-col>
                <el-col :span='20'>
					<Appphotolist :photo="data3"></Appphotolist>       
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
import Photolist from './Photolist.vue';

export default {
  created(){
    this.getData();
  },
  data(){
  	return{
  	pbtn:true,
		filterText: '',
		data2: [],
		defaultProps: {
			children: 'children',
			label: 'title'
		},
		photoid:'', 
		data:[], 
		data3:[]
  	} 	
  },
  props:['photo'],
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
		this.axios.get('http://localhost:3000/uploads').then((response) => {	
			this.data= response.data
		})
		this.axios.get('http://localhost:3000/cate/2').then((response) => {	
			this.data2= response.data
		})			
	},
	clickphone(e,ev){
		console.log(e)
		this.photoid=e._id
		var newarr=[]
        for (var i = 0; i < this.data.length; i++) {
            if (this.data[i].cateId==e._id) {
                newarr.push(this.data[i])
            }
        }
        this.data3= newarr
	}
    },
  components:{
  	Appheader:Header,
  	Appfooter:Footer,
  	Appphotolist:Photolist
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
