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

							<el-tree class="filter-tree" :data="logs" :props="defaultProps" @current-change="clickphone"  ref="tree2">
							</el-tree>
                    </el-menu>
                </el-col>
                <el-col :span='20'>

								<Apploglist :loglist="data3"></Apploglist>
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
import Loglist from './Loglist.vue';

export default {
  created(){
    this.getData();
  },
  data(){
  	return{
  	pbtn:true,
		filterText: '',
		logs: [],
		defaultProps: {
			children: 'children',
			label: 'title'
		},
		logid:'', 
		loglists:[], 
		data3:[]
  	} 	
  },
  props:['loglist'],
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
		this.axios.post('http://localhost:3000/log/list').then((response) => {	
			this.loglists= response.data
		})
		this.axios.get('http://localhost:3000/cate/1').then((response) => {	
			this.logs= response.data
		})			
	},
	clickphone(e,ev){
		console.log(e._id)
		console.log(this.loglists)		
		this.logid=e._id
		var newarr=[]
        for (var i = 0; i < this.loglists.docs.length; i++) {
            if (this.loglists.docs[i].cateId==e._id) {
                newarr.push(this.loglists.docs[i])
            }
        }
        this.data3= newarr
				console.log(this.loglists.docs)
	}
    },
  components:{
  	Appheader:Header,
  	Appfooter:Footer,
		Apploglist:Loglist
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
