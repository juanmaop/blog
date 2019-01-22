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
        <el-menu-item index="2">发博客</el-menu-item>
        <el-menu-item index="3">Javascript</el-menu-item>
        <el-menu-item index="4">Vue</el-menu-item>
        <el-menu-item index="5">Css</el-menu-item>
        <el-menu-item index="6">Java</el-menu-item>
        <el-menu-item index="7">MySql</el-menu-item>
        <!--
        <el-submenu index="3">
          <template slot="title">后端</template>
          <el-menu-item index="3-1">spring</el-menu-item>
          <el-menu-item index="3-2">redis</el-menu-item>
          <el-menu-item index="3-3">Mysql</el-menu-item>
        </el-submenu>-->
        <el-menu-item index="8">Git</el-menu-item>
        <el-menu-item index="9">Python</el-menu-item>
        <el-submenu index="10">
          <template slot="title">作者</template>
          <el-menu-item index="10-1">卷毛</el-menu-item>
          <el-menu-item index="10-2">贵</el-menu-item>
        </el-submenu>
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
                  <div class="main-left-div">
                    <a href="javascript:void()" class="main-left-tag">javascript</a>
                    <a href="javascript:void()" class="main-left-title">谈一谈javascript中的this</a>
                  </div>
                  <div
                    class="main-left-row-card-top-article-content main-left-content"
                  >这是javascript异步系列文章的第十篇，也是最后一篇，总结并归档。 十篇文章不足以把异步解释清清楚楚， 异步这块知识点在js中占比很大，很多莫名其妙的bug也出现在这里， 比如说下面的这个栗子： 一个bug 目录 …</div>
                </div>
              </div>
              <div class="main-left-row-card-bottom">
                <div class="bottom clearfix">
                  <time class="time">2019年1月15日</time>
                  <a href="javascript:void()">0条评论</a>
                  <a href="javascript:void()">200次阅读</a>
                  <a href="javascript:void()">4人点赞</a>
                  <el-button type="text" class="button">阅读全文></el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-aside>
      <el-main class="main-right">
        <!-- 站内搜索 -->
        <el-card class="right-box-card">
          <el-col :span="12" class="right-box-card-inside">
            <div>站内搜索</div>
            <el-autocomplete
              class="inline-input"
              v-model="state1"
              :fetch-suggestions="querySearch"
              placeholder="请输入内容"
              @select="handleSelect"
              clearable
            ></el-autocomplete>
          </el-col>
        </el-card>
        <!-- 标签群 -->
        <el-card class="right-box-card">
          <el-col :span="12" class="right-box-card-inside">
            <div style="margin-bottom:10px;">标签群</div>
            <el-tag class="right-tag">Javascript</el-tag>
            <el-tag type="success" class="right-tag">Webpack</el-tag>
            <el-tag type="info" class="right-tag">正则</el-tag>
            <el-tag type="warning" class="right-tag">ES6</el-tag>
            <el-tag type="danger" class="right-tag">Redius</el-tag>
            <el-tag type="info" class="right-tag">Spring</el-tag>
            <el-tag class="right-tag">异步</el-tag>
            <el-tag type="warning" class="right-tag">作用域</el-tag>
          </el-col>
        </el-card>
      </el-main>
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
      restaurants: [],
      state1: ""
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return [
        { value: "JS", address: "" },
        { value: "Vue", address: "" },
        { value: "Java", address: "" },
        { value: "Git", address: "" }
      ];
    },
    handleSelect(item) {
      console.log(item);
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
  }, 
  created(){
  //      this.axios.get('http://119.29.96.116:8762/blog/listBlog')
  // .then(res => {
  //   // 成功回调
  //   console.log('成功')
  // }, res => {
  //   // 错误回调
  // })
   },
};
</script>
<style lang='less'>
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
.main-left-row {
  float: right;
  width: 750px;
}
.main-left-row-card {
  margin-bottom: 20px;
}
.main-left-row-card-top {
  display: flex;
}
.main-left-row-card-top-article {
}
.main-left-div {
  color: #333333;
  font-size: 21px;
  text-align: left;
  margin-left: 20px;
  padding-top: 10px;
}
.main-left-tag {
  background-color: #00a2ff;
  color: #fff;
  text-decoration: none;
  font-size: 12rpx;
}
.main-left-title {
  text-decoration: none;
  color: #333333;
}
.main-left-row-card-top-article-content {
  text-align: left;
  margin: 20px;
  font-size: 15px;
}
.main-left-row-card-bottom {
  border-top: 1px solid #f3f3f3;
  padding: 14px;
  a {
    text-decoration: none;
    color: #000;
    margin-right: 10px;
  }
}
.main-right {
  margin: 0;
  margin-left: 50px;
  padding: 0;
}
.right-box-card {
  width: 360px;
  height: 145px;
  margin-bottom: 20px;
}
.right-box-card-inside {
  text-align: left;
  width: 360px;
}
.right-tag{
  margin-bottom: 5px;
}
.inline-input {
  width: 300px;
  margin-top: 10px;
}
.footer-version {
  padding-top: 50px;
}
.time {
  font-size: 12px;
  color: #999;
  float: left;
  margin-right: 20px;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  font-size: 12px;
  text-align: left;
}

.button {
  padding: 0;
  float: right;
  font-size: 12px;
  color: #000;
}

.image {
  width: 240px;
  height: 145px;
  display: block;
  margin: auto;
  margin-left: 10px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>