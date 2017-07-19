<template>
    <div>
        <el-row :gutter="20" style="margin:0;padding:0">
            <el-col :span="20" :offset="2">
                <div class="footer">
                    <el-row :gutter="20" style="margin:0;padding:0">
                        <el-col :span="12" :offset="6">
                            <div class="grid-content bg-purple">
                                <ul>
                                    <li><a>我的照片书</a></li>
                                    <li><a>博客风格</a></li>
                                    <li><a>手机博客</a></li>
                                    <li><a>下载LOFTER APP</a></li>
                                    <li><a><span></span>订阅此博客</a></li>
                                </ul>
                            </div>
                        </el-col>
                    </el-row>
                   
                    <p>网易公司版权所有@1997-2017</p>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
    .footer{
        width: 100%;
        height: 150px;
        background: url(./../../images/4.jpg);
        background-size: 100% 100%;
       text-align: center;
       font-size: 14px;
    }
    ul{
        height: 80px;
        width: 100%;
        line-height: 100px;
        
    }
    li{
        list-style: none;
        float: left;
        
    }
    a{
        padding: 0 10px;
       text-align: center;
       color:blue;
       cursor:pointer;
       position: relative;
    }
    span{
        display: inline-block;
        width: 18px;
        height:18px;
        background: url(./../../images/5.jpg) no-repeat;
        background-size: 100% 100%;
        position: absolute;
        top: 0px;
        left: -5px;

    }
</style>


