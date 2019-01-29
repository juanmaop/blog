<template>
  <div id="all">
    <!-- blogDetail{{$route.params.id}} -->
    
    <el-container class="main">
      <el-aside class="main-left" style="width:900px;">
        <el-row class="main-left-row">
          <el-col>
            <el-card
              :body-style="{ padding: '0px' }"
              class="main-left-row-card"
            >
              <h2 class='title'>{{blogTitle}}</h2>
              <div class="time-read">
                  <span>{{blogLastUpdateTime}}</span>
                  <span>{{blogCommentCount}}条评论</span>
                  <span>{{blogReadCount}}次阅读</span>
                  <span>{{blogLikeCount}}人点赞</span>
              </div>
              <div class="introduction">{{blogIntroduction}}</div>
              <vue-markdown v-highlight :source="blogContent" class="introduction">{{blogContent}}</vue-markdown>
              <vue-markdown v-highlight :source="content" class="introduction">{{content}}</vue-markdown>
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
  </div>
</template>
<script>
import VueMarkdown from "vue-markdown";
import README from "../../README.md";
export default {
  name: "",
  components: {
    VueMarkdown
  },
  data() {
    return {
      content: README,
      state1: "",
      blogTitle:'',
      blogIntroduction:'',
      blogTags:'',
      blogContent:'',
      blogLikeCount:'',
      blogCommentCount:'',
      blogReadCount:'',
      blogAuthorId:'',
      blogLastUpdateTime:'',
    };
  },
  methods:{
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
       this.$axios.post('/blog/getBlog',{id:this.$route.params.id},)
  .then(res => {
    // 成功回调
    this.blogTitle=res.data.blogTitle;
    this.blogIntroduction=res.data.blogIntroduction;
    this.blogTags=res.data.blogTags;
    this.blogIntroduction=res.data.blogIntroduction;
    this.blogContent=res.data.blogContent;
    this.blogLikeCount=res.data.blogLikeCount;
    this.blogCommentCount=res.data.blogCommentCount;
    this.blogReadCount=res.data.blogReadCount;
    this.blogAuthorId=res.data.blogAuthorId;
    this.blogLastUpdateTime=res.data.blogLastUpdateTime;
  }, res => {
    // 错误回调
    console.log('失败'+JSON.stringify(res))
  })
   },
};
</script>
<style lang='less'>
#all {
  
  line-height: 30px;
}
.title{
    font-size: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
}
.time-read {
    text-align: center;
    }
  span{
    font-size: 13px;
    color: #777;
    margin-top: 10px;
    
}
.introduction{
    text-align: left;
    margin-left: 20px;
}


code {
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
.main-left-row-card-bottom-router {
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
.right-tag {
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

