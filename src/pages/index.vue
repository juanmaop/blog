<template>
  <div class="all">
    <div class="grid-content bg-purple-dark">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo header"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">前端</template>
          <el-menu-item index="2-1">Vue</el-menu-item>
          <el-menu-item index="2-2">css</el-menu-item>
          <el-menu-item index="2-3">js</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">后端</template>
          <el-menu-item index="3-1">spring</el-menu-item>
          <el-menu-item index="3-2">redis</el-menu-item>
          <el-menu-item index="3-3">Mysql</el-menu-item>
        </el-submenu>
        <el-menu-item index="4">Git</el-menu-item>
        <el-menu-item index="5">Python</el-menu-item>
      </el-menu>
    </div>
    <el-container class="main">
      <el-aside class="main-left" style="width:1200px;">
        <el-row class="main-left-row">
          <el-col>
            <el-card :body-style="{ padding: '0px' }" class="main-left-row-card">
              <div class="main-left-row-card-top">
              <img src="../assets/cover1.jpg" class="image">
              <div class="main-left-row-card-top-article">
                  <div>

                  </div>
                  <div class="main-left-row-card-top-article-content">这是javascript异步系列文章的第十篇，也是最后一篇，总结并归档。 十篇文章不足以把异步解释清清楚楚， 异步这块知识点在js中占比很大，很多莫名其妙的bug也出现在这里， 比如说下面的这个栗子： 一个bug 目录 …</div>
              </div>
              </div>
              <div class="main-left-row-card-bottom">
                <div class="bottom clearfix">
                  <time class="time">2019年1月15日</time>
                  <span>0条评论</span>
                  <span>200次阅读</span>
                  <span>4人点赞</span>
                  <el-button type="text" class="button">阅读全文></el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-aside>
      <el-main class="main-right">right</el-main>
    </el-container>
    <div class="grid-content footer">
      <div class="footer-version">当前版本：V1.0</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    //   currentDate: new Date()
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang='less'>
.header {
     margin-left: 1000px;
     width: 400px;
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
.bg-purple-dark {
//   background: #9caebf;
  //   height: 190px;
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
.main-left {
  width: 1200px;
}
.main-left-row{
    float:right;
    width: 750px;
}
.main-left-row-card{
    margin-bottom: 20px;
}
.main-left-row-card-top{
    display: flex;
}
.main-left-row-card-top-article{

}
.main-left-row-card-top-article-content{
    text-align: left;
}
.main-left-row-card-bottom{
    border-top: 1px solid #F3F3F3;
    padding: 14px;
}
.main-right {
  width: 200px;
  background-color: pink;
}
.footer-version {
  padding-top: 50px;
}
 .time {
    font-size: 13px;
    color: #999;
    float: left;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 240px;
    height: 145px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>