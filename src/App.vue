<template>
  <div id="app">
    <div class="grid-content bg-purple-dark">
      <el-menu
        :default-active="$route.path"
        router 
        class="el-menu-demo"
        mode="horizontal"
        style="margin-left:1000px;"
      >
        <el-menu-item index="/index">首页</el-menu-item>
        <el-menu-item index="/AddBlog">发博客</el-menu-item>
        <el-menu-item index="/index/javascript">Javascript</el-menu-item>
        <el-menu-item index="/index/vue">Vue</el-menu-item>
        <el-menu-item index="/index/css">Css</el-menu-item>
        <el-menu-item index="/index/java">Java</el-menu-item>
        <el-menu-item index="/index/mysql">MySql</el-menu-item>
        <el-menu-item index="/index/git">Git</el-menu-item>
        <el-menu-item index="/index/python">Python</el-menu-item>
        <el-submenu index="10">
          <template slot="title">作者</template>
          <el-menu-item index="10-1">卷毛</el-menu-item>
          <el-menu-item index="10-2">vhgq</el-menu-item>
        </el-submenu>
        <el-menu-item index="/login">登录</el-menu-item>
      </el-menu>
    </div>
    <router-view></router-view>

    <div class="grid-content footer">
      <div class="footer-version">当前版本：V1.0</div>
    </div>
  <div class="arrow-up" @click="scrollUp" v-show="showScroll">
    <i class="el-icon-caret-top "></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "/index",
      activeIndex2: "1",
      restaurants: [],
      state1: "",
      showScroll:false,
      timer: null
    };
  },
  methods: {
    scrollUp(){
    
       document.body.scrollTop=0
      document.documentElement.scrollTop =0
    },
    handleScroll () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  if(scrollTop>=600)
    this.showScroll=true
  else
    this.showScroll=false
},
  },
  mounted(){
    window.addEventListener('scroll', this.handleScroll)
  },
}
</script>

<style lang='less'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.header {
  margin-left: 1000px;
}
.all {
  font-family: Microsoft YaHei;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.arrow-up{
  position: fixed;
  background-color: #fff;
    right: 100px;
    bottom: 200px;
    width: 40px;
    height: 40px;
    size: 40px;
    border-radius: 20px;
    cursor: pointer;
    transition: .3s;
    box-shadow: 0 0 6px rgba(0,0,0,.12);
    z-index: 5;
}
.arrow-up i{
      color: #409eff;
    display: block;
    line-height: 40px;
    text-align: center;
    font-size: 18px;
}
.footer {
  background: #9caebf;
  height: 150px;
  text-align: center;
  color: white;
  font-weight: bold;
  position: fixed;
  width: 100%;
  bottom: 0;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.main {
  margin-top: 50px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
@media screen and (max-width: 1400px) {
   .header {
  margin-left: 500px;
}
.main-left {
  width: 900px;
}
}
</style>
