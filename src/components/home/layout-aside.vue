<template>
  <div class="layout-aside">
    <div class="title">
      <img src="../../assets/img/logo_admin.png" alt />
    </div>
    <el-menu
      style=" width:201px"
      background-color="#353b4e"
      text-color="#adafb5"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="content">
        <template slot="title">
          <i class="el-icon-s-order"></i>
          <span>内容管理</span>
        </template>
        <el-menu-item index="/home/publish">发表内容</el-menu-item>
        <el-menu-item index="/home/articles">内容列表</el-menu-item>
        <el-menu-item index="/home/comment">评论管理</el-menu-item>
        <el-menu-item index="/home/material">素材管理</el-menu-item>
      </el-submenu>
  <!-- index 是为了区分开两个展开框 -->
      <el-submenu index="fans">
        <template slot="title">
          <i class="el-icon-s-custom"></i>
          <span>粉丝管理</span>
        </template>
        <el-menu-item index="/home/fansdata">图文数据</el-menu-item>
        <el-menu-item index="/home/fanslist">粉丝概况</el-menu-item>
        <el-menu-item index="/home/fansimg">粉丝画像</el-menu-item>
        <el-menu-item index="/home/account">粉丝列表</el-menu-item>
      </el-submenu>
      <el-menu-item index="4">
        <i class="el-icon-s-tools"></i>
        <span slot="title">账户信息</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less" scope>
.layout-aside {
  height: 100vh;
  width: 200px;
  background-color: #323745;
  .title {
    background-color: #2e2f32;
    text-align: center;
    img {
      height: 25px;
      margin-top: 10px;
    }
  }
}
</style>
