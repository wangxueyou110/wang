<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    // data(){
    //   return{
    //     datalist:[]
    //   }
    // },
    // methods:{
    //   getData(){
		// 	this.axios.get('http://10.31.160.28:3000/users').then((response) => {
		// 			console.log(response.data);
		// 			this.datalist=response.data
		// 		})
		// 	}
    // }
  }
</script>

<style lang="scss">
	*{
		margin: 0px;
		padding: 0px;
	}
#dailylog{
  p{
      padding: 10px 0;
      text-indent: 2em;
      img {
        margin:0 auto;
        max-width: 500px;
      }
  }
  

  }
  .indexp{
    p{
    padding: 10px 0;
    text-indent:2em;
  }
  img{
    margin:0 auto;
    max-width: 500px;
  }
}
</style>
