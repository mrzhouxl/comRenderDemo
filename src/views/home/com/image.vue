<template>
  <div>
    <el-image :src="url"></el-image>
  </div>
</template>
<script>
export default {
  name: 'image',
  props:{
    url:{
      type:String,
      default:''
    }
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>
<style>
</style>