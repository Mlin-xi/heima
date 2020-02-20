<template>
  <div class="home">
    <el-container>
      <el-aside style="width:200px">
        <layout-aside></layout-aside>
      </el-aside>
      <el-container>
        <el-header style="padding:0"><layout-header></layout-header></el-header>
        <el-main style="padding:0">中间</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
  // components: {
  //   'layout-aside': layoutAside,
  //   'layout-header': layoutHeader
  // } // 改为全局的组件了在index.js，就像ElementUI一样，直接Vue.use就可以直接用了
};
</script>
<style lang="less" scoped>
</style>
