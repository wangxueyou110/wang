<template>
    <div>
        <el-row>
    	<Appheader></Appheader>
        <el-row :gutter="20" style="margin:100px 0;padding:0;">
            <el-col :span="20" :offset="2" >
                <el-row :gutter="20">
                    <el-col :span="12" :offset="6">
                        <div class="grid-content bg-purple">
                            <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                                <el-form-item label="用户名" prop="name">
                                    <el-input v-model.number="ruleForm2.name"></el-input>
                                </el-form-item>
                                <el-form-item label="密码" prop="password">
                                    <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
                                </el-form-item>
                                
                                
                                <el-form-item>
                                    <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
                                    <el-button @click="resetForm('ruleForm2')">重置</el-button>
                                </el-form-item>
                            </el-form>
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
import CryptoJS from 'crypto-js/core';
import MD5 from 'crypto-js/md5';
export default {
  components:{
  	Appheader:Header,
  	Appfooter:Footer
  },

  data() {
      var checkName = (rule, value, callback) => {
        if (value === '') {
          return callback(new Error('用户名不能为空'));
        }else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }else {
          callback();
        }
      };
      return {
        ruleForm2: {
          password: '',
          name: ''
        },
        rules2: {
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          name: [
            { validator: checkName, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        var _this=this 
        this.$refs[formName].validate((valid) => {
          if (valid) {           
          _this.ruleForm2.password = CryptoJS.MD5(_this.ruleForm2.password, {
              asString: true
          }).toString();
          this.axios.post('http://localhost:3000/users/login', _this.ruleForm2)
          .then(response => {     
            if(response.data){
               _this.ruleForm2=""
               sessionStorage.lodingname = response.data.name
               _this.$router.push({path:'/'})

            }else{
              _this.ruleForm2=""
              alert('账号或密码错误')
            }       
          })











          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

    }
  
  }
</script>
<style>

</style>
   
