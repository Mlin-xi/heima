<template>
  <div class="login">
    <el-card class="login-card">
      <div class="logo">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <!-- 表单组件el-form表单容器 -->
      <el-form style="margin-top:20px" :model="loginForm" :rules="rules">
        <!-- 表单项 -->
        <el-form-item prop="tel">
          <!-- 组件内容 -->
          <el-input v-model="loginForm.tel" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="loginForm.code" style="width:250px" placeholder="请输入验证码"></el-input>
          <el-button style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="check">
          <el-checkbox v-model="loginForm.check">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    const func = function(rule, value, callBack) {
      if (value) {
        callBack(); // 如果value为true直接通过
      } else {
        callBack(new Error('请您同意条款'));
      }
    };
    return {
      loginForm: {
        tel: '', // 手机号
        code: '', // 验证码
        check: true // 是否勾选
      },
      rules: {
        tel: [
          { required: ' ture', message: '手机号不能为空', trigger: 'blur' },
          { len: 11, message: '手机长度必须为11个字符', trigger: 'blur' },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: '手机号格式错误',
            trigger: 'blur'
          }
        ],
        code: [
          { required: 'ture', message: '验证码不能为空', trigger: 'blur' },
          {
            pattern: /^\d{6}$/,
            message: '验证码长度必须为6个数字',
            trigger: 'blur'
          }
        ],
        check: [
          {
            validator: func
          }
        ]
      }
    };
  },
  methods: {}
};
</script>

<style lang='less' scoped>
.login {
  color: red;
  background-image: url("../../assets/img/login_bg.jpg");
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-card {
    width: 440px;
    height: 350px;
    .logo {
      text-align: center;
      img {
        height: 45px;
      }
    }
  }
}
</style>
