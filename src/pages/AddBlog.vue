<template>
  <div id="all">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="博客标题" prop="name" class="form-div">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="博客标签" prop="type" class="form-div">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="JS" name="type"></el-checkbox>
          <el-checkbox label="Vue" name="type"></el-checkbox>
          <el-checkbox label="Java" name="type"></el-checkbox>
          <el-checkbox label="Python" name="type"></el-checkbox>
        </el-checkbox-group>
        <el-input v-model="ruleForm.type2"></el-input>
      </el-form-item>
      <el-form-item label="博客简介" prop="desc" class="form-div">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item label="博客封面" prop="cover" class="form-div">
        <el-upload
          class="upload-demo"
          drag
          action="http://119.29.96.116:8762/resource/file/upload"
          multiple
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或
            <em>点击上传</em>
          </div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <!-- <img id="myImg" src height="100px" width="100px"> -->
      </el-form-item>
      <el-form-item>
        <mark-down/>
      </el-form-item>

      <el-form-item style="margin-bottom:160px;">
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import MarkDown from "vue-meditor";
export default {
  components: {
    MarkDown
  },
  data() {
    return {
      ruleForm: {
        name: "",
        type: [],
        type2: [],
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入博客标题", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        type: [
          {
            type: "array",
            trigger: "change"
          }
        ],
        desc: [{ required: true, message: "请填写博客简介", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="less" scoped>
#all {
  margin-bottom: 160px;
}
.form-div {
  width: 700px;
  margin: auto;
  margin-top: 20px;
}
</style>

