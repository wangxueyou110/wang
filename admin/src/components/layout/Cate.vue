<template>
   <Tree :data="baseData" @on-select-change="selectChange"></Tree>
</template>

<script>
  export default{
    props:['type','selectChange'], // type是 Number 是数字 ， selectChange 是函数
    data() {
      return {
        baseData:[]
      }
    },
    methods:{
      getData() {
        var _this = this;
        _this.$http.get(`http://localhost:3000/cate/${_this.type}`).then(res => {
          _this.baseData = res.data;
        })
      }
    },
    created(){
      this.getData();
    }
  }
</script>