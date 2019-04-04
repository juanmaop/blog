<template>
  <div class="all">
    <el-container class="main">
      <el-aside class="main-left" style="width:900px;">
        <el-row class="main-left-row">
          <el-col>
            <el-card :body-style="{ padding: '0px' }" class="main-left-row-card" v-for="(blog,index) in blogList" v-bind:blog="blog" v-bind:key="index">
              <div class="main-left-row-card-top">
                <img :src="blog.blogCover" class="image">
                <div class="main-left-row-card-top-article">
                  <div class="main-left-div">
                    <router-link class="main-left-tag" v-bind:to="/blogDetail/+blog.id">{{blog.blogTags}}</router-link>
                    <!-- <a href="javascript:void()" class="main-left-tag">javascript</a> -->
                    <a href="javascript:void()" class="main-left-title">{{blog.blogTitle}}</a>
                  </div>
                  <div
                    class="main-left-row-card-top-article-content main-left-content"
                  >{{blog.blogIntroduction}}</div>
                </div>
              </div>
              <div class="main-left-row-card-bottom">
                <div class="bottom clearfix">
                  <time class="time">{{blog.blogLastUpdateTime}}</time>
                  <router-link  v-bind:to="/blogDetail/+1" class="main-left-row-card-bottom-router">{{blog.blogCommentCount}}条评论</router-link>
                  <router-link  v-bind:to="/blogDetail/+1" class="main-left-row-card-bottom-router">{{blog.blogReadCount}}次阅读</router-link>
                  <router-link  v-bind:to="/blogDetail/+1" class="main-left-row-card-bottom-router">{{blog.blogLikeCount}}人点赞</router-link>
                  <el-button type="text" class="button">阅读全文></el-button>
                </div>
              </div>
            </el-card>
            <router-view></router-view>
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
        <!-- <ul>
          <li v-for="item in Mockdata" :key="item.index">{{item}}</li>
        </ul> -->
      </el-main>
    </el-container>
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
      state1: "",
      blogList:[],
      Mockdata:[]
    };
  },
  methods: {
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
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(item) {
      console.log(item);
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
    
  }, 
  created(){
       this.$axios.post('/blog/listBlog',{},)
  .then(res => {
    // 成功回调
    this.blogList=res.data
    
    // console.log('成功'+JSON.stringify(res.data))
  }, res => {
    // 错误回调
    console.log('失败'+JSON.stringify(res))
  })
   this.$axios.get('/api/data').then(res => {
    this.Mockdata=res.data
  }, res => {
    console.log('失败'+JSON.stringify(res))
  })
   },
   updated(){
     console.log('updated')
   }
};
</script>
<style lang='less' scoped>
 .all {
    font-family: Microsoft YaHei;
    margin-bottom: 200px;
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
  }
  .main-left-row-card-bottom-router{
  text-decoration: none;
      color: #000;
      margin-right: 10px;
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
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
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
  
  .main-left {
    width: 900px;
  }
  }
  @media screen and (min-width: 1700px) {
  
  .main-left {
    width: 900px;
    margin-left: 300px;
  }
  }
</style>