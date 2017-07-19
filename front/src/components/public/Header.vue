<template>
  <div>
     <el-row style="margin:0;padding:0">
        <el-row :gutter="20" style="margin:0;padding:0">
          <el-col :span="20" :offset="2">
            <div class="grid-content bg-purple">

              <el-carousel :interval="5000" arrow="always" height="200px">
                <el-carousel-item v-for="item in 4" :key="item">
                </el-carousel-item>
              </el-carousel>

              <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                
                  <el-row :gutter="20" style="margin:0;padding:0">
                     <el-col :span="18">
                      <div class="grid-content bg-purple">
                          <el-row>
                            <el-col :span="4">
                              <div class="grid-content bg-purple">
                                  <el-menu-item index="1"> 
                                  <router-link
																				to="/Index"
																				class="list-group-item"
																				style="cursor: pointer"
																				 >
													            首页</router-link>
                                  </el-menu-item> 
                              </div>
                            </el-col>
                            <el-col :span="4">
                              <div class="grid-content bg-purple-light">
                                  <el-menu-item index="2">
                                  <router-link 
                                        to="/Log"
																				class="list-group-item"
																				style="cursor: pointer"
                                      >日志</router-link>
                                  </el-menu-item> 
                              </div>
                            </el-col>
                             <el-col :span="4">

                              <div class="grid-content bg-purple">
                                  <el-menu-item index="3"> 
                                  <router-link 
																				to="/Photo"
																				class="list-group-item"
																				style="cursor: pointer"
																				 index="3">
													          相册</router-link>
                                  </el-menu-item>
                              </div>
                            </el-col>
                            <el-col :span="4">
                              <div class="grid-content bg-purple-light">
                                  <el-menu-item index="4"> 
                                  <router-link 
																				to="/Music"
																				class="list-group-item"
																				style="cursor: pointer"
																				 index="4">
													          音乐</router-link>
                                  </el-menu-item>
                              </div>
                            </el-col>
                            <el-col :span="4">
                              <div class="grid-content bg-purple">
                                  <el-menu-item index="5"> 
                                  <router-link 
																				to="/Movie"
																				class="list-group-item"
																				style="cursor: pointer"
																				 index="5">
													视频</router-link>
                          </el-menu-item>
                              </div>
                            </el-col> 
                            <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
                          </el-row>
                      </div>
                    </el-col> 

                    <el-col :span="6">
                      <div class="grid-content bg-purple">
                          <el-row>
                            <el-col :span="12" v-if="loginbtn">
                              <div class="grid-content bg-purple">
                                  <el-menu-item index="6  ">  
                                  <router-link to="/Login">登录</router-link>
                                  </el-menu-item>
                              </div>
                            </el-col>
                            <el-col :span="12" v-if="loginbtn">
                              <div class="grid-content bg-purple">
                                  <el-menu-item index="7">  
                                  <router-link to="/register">注册</router-link>
                                  </el-menu-item>
                              </div>
                            </el-col>

                            <el-col :span="12" v-if="!loginbtn">
                              <div class="grid-content bg-purple">
                                  <el-menu-item index="8" style="float:right">  
                                  <p>{{logname}}你好</p>
                                  </el-menu-item>
                              </div>
                            </el-col>
                            <el-col :span="12" v-if="!loginbtn">
                              <div class="grid-content bg-purple">
                                  <el-menu-item index="9">  
                                  <a @click="out">退出</a>
                                  </el-menu-item>
                              </div>
                            </el-col>
                          </el-row>
                      </div>
                    </el-col>
                  </el-row>
              </el-menu> 
            </div>
          </el-col>
        </el-row>
      </el-row>

  </div>
</template>

<script>
export default {
  created(){
    this.ifsession()
  },
  data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        loginbtn:true,
        logname:''
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      out(){
        console.log(111)
        window.sessionStorage.clear();
        window.location.reload();
        this.$router.push({path:'/'})
      },
      ifsession(){
        if(window.sessionStorage.lodingname){
          this.logname=window.sessionStorage.lodingname
          this.loginbtn=false;
        }else{
          this.loginbtn=true;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>


  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__container {
    position: relative;
    height: 200px;
}
 .el-col-18 {
    width: 85%;
}
.el-col-6 {
    width: 15%;
}
  
  .el-carousel__item:nth-child(2n) {
    background:url(./../../images/1.jpg);
    background-size: 100% 100%;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background:url(./../../images/2.jpg);
    background-size: 100% 100% ;
  }
 
 .el-row {
    margin-bottom: 20px;
   
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    text-align: center;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .el-menu--horizontal .el-menu-item {
    height: 45px;
    line-height: 45px;
  }
  a{text-decoration: none}
</style>
