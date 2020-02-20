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
import layoutAside from '../../components/home/layout-aside'
import layoutHeader from '../../components/home/layout-header'
export default {
  components: {
    'layout-aside': layoutAside,
    'layout-header': layoutHeader
  }
};
</script>
<style lang="less" scoped>
</style>
