<template>
  <i-col :span="spanLeft" class="layout-menu-left">
    <Menu active-name="1" theme="dark" width="auto">
        <div class="layout-logo-left"></div>
        <Menu-item name="1">
             <router-link to="/" activeClass="active" exact><Icon type="home" :size="iconSize"></Icon></router-link>
            <span class="layout-text"> <router-link to="/" activeClass="active" exact>平台首页</router-link></span>
        </Menu-item>
        <Menu-item name="2">
            <router-link to="/user" activeClass="active"><Icon type="person" :size="iconSize"></Icon></router-link>
            <span class="layout-text"> <router-link to="/user" activeClass="active">用户模块</router-link></span>
        </Menu-item>
        <Menu-item name="3">
            <router-link to="/log" activeClass="active"><Icon type="document-text" :size="iconSize"></Icon></router-link>
            <span class="layout-text"> <router-link to="/log" activeClass="active">日志模块</router-link></span>
        </Menu-item>
        <Menu-item name="4">
            <router-link to="/upload" activeClass="active"><Icon type="image" :size="iconSize"></Icon></router-link>
            <span class="layout-text"> <router-link to="/upload" activeClass="active">相册模块</router-link></span>
        </Menu-item>
         <Menu-item name="5">
            <router-link to="/cate" activeClass="active"><Icon type="folder" :size="iconSize"></Icon></router-link>
            <span class="layout-text"> <router-link to="/cate" activeClass="active">分类模块</router-link></span>
        </Menu-item>
        <Menu-item name="6">
            <router-link to="/user" activeClass="active"><Icon type="ios-chatboxes" :size="iconSize"></Icon></router-link>
            <span class="layout-text"> <router-link to="/comment" activeClass="active">评论模块</router-link></span>
        </Menu-item>
         <Menu-item name="7">
            <router-link to="/music" activeClass="active"><Icon type="music-note" :size="iconSize"></Icon></router-link>
            <span class="layout-text"> <router-link to="/music" activeClass="active">音乐模块</router-link></span>
        </Menu-item>
        <Menu-item name="8">
            <router-link to="/music" activeClass="active"><Icon type="videocamera" :size="iconSize"></Icon></router-link>
            <span class="layout-text"> <router-link to="/movie" activeClass="active">电影模块</router-link></span>
        </Menu-item>
    </Menu>
</i-col>

</template>

<script>
    export default {
        props:['spanLeft','iconSize']
    }
</script>

<style lang="scss" scoped>
    .active{
        color:white!important;
    }
</style>