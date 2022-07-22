<template>
  <div>
    <el-upload class="upload-demo" 
      action=""
      :before-upload="handleUpload"
      :file-list="fileList">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>
<script>
export default {
  name: 'imageEdit',
  data() {
    return {
      fileList: []
    };
  },
  methods: {
    handleUpload(file){
      const url = URL.createObjectURL(file)
      this.$emit('input',{
        url
      })
    }
  }
}
</script>
<style>
</style>