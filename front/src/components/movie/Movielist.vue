<template>
    <div>
        <div>

        <el-row :gutter="24" style="margin:0;padding:0">
            <el-col :span="24" class="phone-conter-img" >
                <el-col :span="4"  v-for="(item,num) in movie" :key="num" style="height: 150px" >
                    <a href="javascript:;" @click="openmovie" style="text-decoration: none" >
                        <img class="aaa" src="src/images/movieimg.png" :index="num" style="width:100px;height:100px;padding:5px" :movieurl="item.filename" :moviename="item.originalname"   />
                        <p style="text-align: center;color: #333;font-size: 10px">{{item.originalname}}</p>                         
                    </a>
                    <el-dialog :title="moviename" :visible.sync="dialogTableVisible"  size="180px">
                        <video :src="mnameurl" autoplay="autoplay" class="audio" preload="none" controls="controls" type="audio/mpeg"></video>
                    </el-dialog>
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
                dialogTableVisible: false,
                mnameurl:'',
                moviename:''
            }
        },
        props:['movie'],
        methods: {
            openmovie(e) {
                
                this.mnameurl='http://localhost:3000/'+e.target.getAttribute('movieurl')
                this.moviename=e.target.getAttribute('moviename')
                console.log(e.target)
                this.dialogTableVisible=true;

            },
        }


    }
</script>
<style lang="scss" scoped>
    .phone-conter-img{
        padding: 30px 0
      }
</style>