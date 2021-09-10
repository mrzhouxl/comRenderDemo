<template>
  <div>
      {{model}}
    <el-form ref="form" label-width="80px" >
      <el-form-item label="文本标题">
        <el-input :value="model.title" @input="(e)=>emitEdit(e,'title')"></el-input>
      </el-form-item>
      <el-form-item label="文本简介">
        <el-input :value="model.place" @input="(e)=>emitEdit(e,'place')"></el-input>
      </el-form-item>
      <el-form-item label="输入框内容">
        <el-input :value="model.value" @input="(e)=>emitEdit(e,'value')"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    model: {
      type: Object,
      default() {
        return {
          title: "",
          value: "",
          place: "",
        };
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    emitEdit(e,key) {
      const newData = JSON.parse(JSON.stringify(this.model));
      newData[key] = e;
      this.$emit("input", newData);
    },
  },
};
</script>

<style>
</style>