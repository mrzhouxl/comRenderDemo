<template>
  <div class="my-input">
    <span class="title">{{title}}</span>
    <div>
      <el-input :value="value" @input="(e)=>$emit('input',e)" :placeholder="place"></el-input>
    </div>
  </div>
</template>

<script>
export default {
    name:'myInput',
  props: {
    title: {
      type: String,
      default: "测试",
    },
    value: {
      type: String,
      default: "",
    },
    place: {
      type: String,
      default: "请输入内容",
    },
  },
};
</script>

<style>
.my-input{
    display: flex;
    width: 100%;
    align-items: center;
    margin-top: 5px;
}
.my-input div{
    width: 100%;
}
.title{
    padding-right: 5px;
    width: 80px;
}
</style>