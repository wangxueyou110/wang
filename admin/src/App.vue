<template>

    <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
        <Headerbar></Headerbar>
       <nprogress-container></nprogress-container>
       <template v-if="login">
        <Row type="flex">
            <asidebar :spanLeft="spanLeft"></asidebar>
            <i-col :span="spanRight" :iconSize="iconSize">
                <div class="layout-header">
                    <i-button type="text" @click="toggleClick">
                        <Icon type="navicon" size="32"></Icon>
                    </i-button>
                </div>
                
                <div class="layout-content">
                    <div class="layout-content-main"><router-view></router-view></div>
                </div>
                
                
            </i-col>
        </Row>
        <footerbar></footerbar>
        </template>

        <template v-else>
            <Form ref="formInline" :model="formInline" :rules="ruleInline" inline style='text-align:center'>
                <Form-item prop="name">
                    <Input type="text" v-model="formInline.name" placeholder="Username">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </Form-item>
                <Form-item prop="password">
                    <Input type="password" v-model="formInline.password" placeholder="Password">
                    <Icon type="ios-locked-outline" slot="prepend"></Icon>
                    </Input>
                </Form-item>
                <Form-item>
                    <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
                </Form-item>
            </Form>
        </template>
    </div>

</template>

<script>
    import Headerbar from './components/layout/Headerbar.vue'
    import Footerbar from './components/layout/Footerbar.vue'
    import Asidebar from './components/layout/Asidebar.vue'
    import {
        mapGetters,
        mapActions
    } from 'vuex'
    var CryptoJS = require("crypto-js");
    import NprogressContainer from 'vue-nprogress/src/NprogressContainer.vue'
    
    export default {
        data() {
            return {
                spanLeft: 5,
                spanRight: 19,
                formInline: {
                    name: '',
                    password: ''
                },
                ruleInline: {
                    name: [{
                        required: true,
                        message: '请填写用户名',
                        trigger: 'blur'
                    }],
                    password: [{
                            required: true,
                            message: '请填写密码',
                            trigger: 'blur'
                        },
                        {
                            type: 'string',
                            min: 6,
                            message: '密码长度不能小于6位',
                            trigger: 'blur'
                        }
                    ]
                }
            }
        },
        methods: {
            ...mapActions(['checkLogin']),
            handleSubmit(name) {
                // CryptoJS.MD5(_this.formValidate.password, { asString: true })
                let _this = this;
                _this.formInline.password = CryptoJS.MD5(_this.formInline.password, {
                    asString: true
                }).toString();
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        _this.$http.post("http://10.31.160.28:3000/users/login", _this.formInline).then(res => {
                            if (res.data.name && res.data.name.trim().length > 0) {
                                this.checkLogin(true);
                            } else {
                                this.$Message.error('用户名或密码错误!');
                            }
                        })
    
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            },
            toggleClick () {
                if (this.spanLeft === 5) {
                    this.spanLeft = 1;
                    this.spanRight = 23;
                } else {
                    this.spanLeft = 5;
                    this.spanRight = 19;
                }
            }
        },
        components: {
            Footerbar,
            Headerbar,
            Asidebar,
            NprogressContainer
        },
        computed: {
            ...mapGetters(['login']),
            iconSize () {
                return this.spanLeft === 5 ? 14 : 24;
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.$nprogress.configure({
                    parent: '.nprogress-container'
                })
            });
        }
    }
</script>

<style lang="scss">
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .layout-hide-text .layout-text{
        display: none;
    }
    .ivu-col{
        transition: width .2s ease-in-out;
    }
    
    .nprogress-container {
        position: fixed !important;
        width: 100%;
        height: 50px;
        z-index: 2048;
        pointer-events: none;
        #nprogress {
            $color: red;
            .bar {
                background: $color;
            }
            .peg {
                box-shadow: 0 0 10px $color, 0 0 5px $color;
            }
            .spinner-icon {
                border-top-color: $color;
                border-left-color: $color;
            }
        }
    }
</style>