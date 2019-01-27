<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> 
    <el-button @click="startHacking">Start</el-button> 
    <router-view/> -->
    <div class="grid-content bg-purple-dark">
      <el-menu
        :default-active="activeIndex"
        router 
        class="el-menu-demo header"
        mode="horizontal"
        
      >
        <el-menu-item index="/index">首页</el-menu-item>
        <el-menu-item index="2">发博客</el-menu-item>
        <el-menu-item index="3">Javascript</el-menu-item>
        <el-menu-item index="4">Vue</el-menu-item>
        <el-menu-item index="5">Css</el-menu-item>
        <el-menu-item index="6">Java</el-menu-item>
        <el-menu-item index="7">MySql</el-menu-item>
        <el-menu-item index="8">Git</el-menu-item>
        <el-menu-item index="9">Python</el-menu-item>
        <el-submenu index="10">
          <template slot="title">作者</template>
          <el-menu-item index="10-1">卷毛</el-menu-item>
          <el-menu-item index="10-2">贵</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <router-view></router-view>
    <div class="grid-content footer">
      <div class="footer-version">当前版本：V1.0</div>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'App',
  data() {
    return {
      activeIndex: "/index",
      activeIndex2: "1",
      //   currentDate: new Date()
      restaurants: [],
      state1: ""
    };
  },
  methods: {
    // startHacking () {
    //   this.$notify({
    //     title: 'It works!',
    //     type: 'success',
    //     message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
    //     duration: 5000
    //   })
    // }
    // handleSelect(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // handleSelect(item) {
    //   console.log(item);
    // }
  },

}
</script>

<style lang='less'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
  // height: 1200px;
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
