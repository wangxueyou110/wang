<template>
  <div class="header-wrap">
    <Row>
        <Col span="8" class="header-left">后台数据支持管理系统</Col>
        <Col span="8" offset="8" class="header-right">
        <router-link to="/" activeClass="active" exact>
        <Button type="primary"  @click="toLoading" v-if="login">
            <span >退出</span>
        </Button>
        </router-link>
        </Col>
    </Row>
    
    
</div>
</template>

<script>
import { store } from '../../store';
    export default {
        data () {
            return {
                loading: false,
                aa:true
            }
        },
        methods: {
            toLoading () {                
                this.$store.commit('changeLogin');
                this.loading = this.$store.login;
                this.$store.commit('checkLogin');
            }
        },
        computed:{
            // aab(){
            //     return this.loading=this.$store.login
            // }  
        }
    }

</script>

<style scoped>
    .header-wrap{
        width: 100%;
        height: 80px;
        line-height: 80px;

    }
    .header-left{
        text-align: center;
        font-family: "microsoft yahei";
        font-size: 30px;
        width: 100%;
    }
    .header-right{
        font-size: 15px;
        padding-right: 30px;
        text-align: right;
    }
    
</style>