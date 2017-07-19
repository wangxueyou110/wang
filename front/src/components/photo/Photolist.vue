<template>
    <div>
        <div>

        <el-row :gutter="24" style="margin:0;padding:0">
            <el-col :span="24" class="phone-conter-img" v-if="!pbtna">
                <el-col :span="6"  v-for="(item,num) in photo" :key="num" >
                    <a href="javascript:;" @click="openphone" >
                        <img class="aaa" :src="'http://localhost:3000/'+item.filename" :index="num" style="width:180px;height:140px;border: 1px solid #aaa;padding:5px"  />                         
                    </a>
                </el-col>                                                     
            </el-col>
            <el-col :span="24" v-if="pbtna">
                    <el-col :span="24"><a href="javascript:;" @click="closephone">返回</a></el-col>
                    <el-col :span="24">
                        <el-carousel :interval="4000" type="card" height="370px" :autoplay=false :initial-index="pdtailnum" >
                            <el-carousel-item v-for="(item,num) in photo" :key="num" >
                                <img :src="'http://localhost:3000/'+item.filename" style="width:100%;height:350px">
                            </el-carousel-item>
                        </el-carousel>
                    </el-col>                    
                </el-col>
        </el-row>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                data2:[],
                pbtna:false,
                pdtailnum:0,

            }
        },
        props:['photo'],
        methods: {
            openphone(e) {
                this.pbtna=true; 
                this.pdtailnum=parseFloat(e.target.getAttribute('index'));            
            },
            closephone(e) {
                e.preventDefault()
                this.pbtna=false
                
            }
        }


    }
</script>
<style lang="scss" scoped>
    .phone-conter-img{
        padding: 10px 0
      }
</style>