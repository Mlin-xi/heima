<template>
  <div class="layout-header">
    <el-row class="title" type="flex" justify="space-between">
      <!-- spans 给宽度 -->
      <el-col :span="6" class="left">
        <i class="el-icon-s-unfold icon"></i>
        <span>江苏传智播客教育科技股份有限公司</span>
      </el-col>
      <el-col :span="5.5" class="right">
          <el-input class="input"  prefix-icon="el-icon-search" placeholder="请输入搜素的文章内容"></el-input>
          <span class="sp">消息</span>
        <img class="head-img" :src="userInfo.photo ? userInfo.photo : defaultImg" alt />
        <el-dropdown style="margin:0" trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            {{userInfo.name}}
          <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="account">个人信息</el-dropdown-item>
            <el-dropdown-item command="git">git地址</el-dropdown-item>
            <el-dropdown-item command="lgout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {},
      defaultImg: require('../../assets/img/avatar.jpg')
    }
  },
  methods: {
    // 获取用户信息
    getUserInfo () {
      const token = window.localStorage.getItem('user-token') // 获取token
      this.$axios({
        url: '/user/profile',
        headers: { Authorization: `Bearer ${token}` }
      }).then(res => {
        console.log(res)
        this.userInfo = res.data.data
      })
    },
    // 点击菜单项触发的方法
    handleCommand (command) {
      if (command === 'account') {
        // 个人信息
      } else if (command === 'git') {
        //  git地址
        window.location.href = 'https://github.com/Mlin-xi/heima.git'
      } else {
        //  退出
        window.localStorage.clear() // 清除缓存
        this.$router.push('login') // 跳转到登录页
      }
    }
  },
  created () {
    this.getUserInfo()
  }
};
</script>

<style lang="less" scope>
.layout-header {
  background-color: #fff;
  height: 50px;
  .title {
    line-height: 50px;
    .left{
        display: flex;
        align-items: center;
        .icon {
      font-size: 22px;
      margin: 0 8px 0;
    }
    }
    .right{
        position: relative;
        display: flex;
        align-items: center;
        margin-right: 10px;
        .head-img {
            border-radius: 50%;
            height: 40px;
            margin: 0 8px 0
        }
        .sp{
            margin: 0 0 0 8px
        }
        .input{
            width: 200px;
        }
    }
  }
}
</style>
