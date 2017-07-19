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
                                <el-form-item label="确认密码" prop="checkPass">
                                    <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
                                </el-form-item>
                                
                                
                                <el-form-item>
                                    <el-button type="primary" @click="submitForm('ruleForm2')">注册</el-button>
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
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          password: '',
          checkPass: '',
          name: ''
        },
        rules2: {
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
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
          _this.ruleForm2.checkPass = CryptoJS.MD5(_this.ruleForm2.checkPass, {
                    asString: true
                }).toString();
          this.axios.post('http://localhost:3000/users/data', _this.ruleForm2)
          .then(response => {
            _this.ruleForm2=""
            _this.$router.push({path:'/login'})
          })

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

      getData(){
        this.axios.post('http://localhost:3000/users/data').then((response) => {	
          this.data= response.data
        })
      }

    }
  
  }
</script>
<style>

</style>
   
