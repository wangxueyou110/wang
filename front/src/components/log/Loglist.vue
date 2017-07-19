<template>
    <div>
        <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in loglist" >
                    <router-link tag="h3"
                    :to="'/daily/'+item._id"
                    class="list-group-item"
                    style="cursor: pointer"
                    >
                {{ item.name }}</router-link>

            </el-carousel-item>
        </el-carousel>

    </div>
</template>
<script>
    export default{
        props:['loglist'],
    }
</script>

<style lang="scss" scoped>
  .el-carousel__item h3 {
    color: black;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align:center;

  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>