<template>
    <div>
        <div>

        <el-row :gutter="24" style="margin:0;padding:0">
            <el-col :span="24" class="phone-conter-img" >
                <el-col :span="4"  v-for="(item,num) in music" :key="num" style="height: 150px" >
                    <a href="javascript:;" @click="openmusic" style="text-decoration: none" >
                        <img class="aaa" src="src/images/musicimg.jpg" :index="num" style="width:100px;height:80px;padding:5px" :musicurl="item.filename" :musicname="item.originalname"   />
                        <p style="text-align: center;color: #333;font-size: 10px">{{item.originalname}}</p>                         
                    </a>
                    <el-dialog :title="musicname" :visible.sync="dialogTableVisible"  size="180px">
                        <audio :src="mnameurl" autoplay="autoplay" class="audio" preload="none" controls="" type="audio/mpeg"></audio>
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
                musicname:''
            }
        },
        props:['music'],
        methods: {
            openmusic(e) {
                
                this.mnameurl='http://localhost:3000/'+e.target.getAttribute('musicurl')
                this.musicname=e.target.getAttribute('musicname')
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