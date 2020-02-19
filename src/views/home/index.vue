<template>
  <div class="home">
    <el-container>
      <el-aside width="201px">
        <div class="title">
          <img src="../../assets/img/logo_admin.png" alt />
        </div>
        <el-menu background-color="#353b4e" text-color="#adafb5" active-text-color="#ffd04b">
          <el-menu-item index="1">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-order"></i>
              <span>内容管理</span>
            </template>
            <el-menu-item index="1-1">发表内容</el-menu-item>
            <el-menu-item index="1-2">内容列表</el-menu-item>
            <el-menu-item index="1-3">素材管理</el-menu-item>
            <el-menu-item index="1-4">评论列表</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-custom"></i>
              <span>粉丝管理</span>
            </template>
            <el-menu-item index="1-1">图文数据</el-menu-item>
            <el-menu-item index="1-2">粉丝概况</el-menu-item>
            <el-menu-item index="1-3">粉丝画像</el-menu-item>
            <el-menu-item index="1-4">粉丝列表</el-menu-item>
          </el-submenu>
          <el-menu-item index="4">
            <i class="el-icon-s-tools"></i>
            <span slot="title">账户信息</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>头部</el-header>
        <el-main>中间</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>
<style lang="less"  scoped>
.home {
  .title {
    background-color: #2e2f32;
    text-align: center;
    height: 50px;
    img {
      height: 25px;
      margin-top: 10px;
    }
  }
}
</style>
