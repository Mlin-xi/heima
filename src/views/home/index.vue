<template>
  <div class="home">
    <el-container>
      <el-aside>
        <layout-aside></layout-aside>
      </el-aside>
      <el-container>
        <el-header>头部</el-header>
        <el-main>中间</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import layoutAside from '../../components/home/layout-aside'
export default {
  components: {
    'layout-aside': layoutAside
  }
};
</script>
<style lang="less" scoped>
</style>
