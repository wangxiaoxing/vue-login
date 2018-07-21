<template>
<div>
<div class="login_info">
    <div class="login_info1">
    您需要登录才能继续访问
    </div>
    <a class="login_info2">
    回到首页</a> 
</div>
  <div class="login_body">
      <div>
          <div class="login_icon">
          </div>
          <div class="account">
          <mt-field  placeholder="手机号/邮箱/会员名"></mt-field>
          <mt-field  placeholder="请输入密码"></mt-field>
          </div>
          <div class="account_foot">
              <a>免费注册</a>
              <a>忘记密码</a>
          </div>
          <div class="login_button">
              <mt-button type="primary" size="large" style="border-radius:0.99rem; margin:.3408rem auto 0;">登录</mt-button>
          </div>
          <div class="login_button">
          <mt-button type="primary" size="large" style="border-radius:0.99rem; margin:.1704rem auto 0;
              background-color:white;color:#FF5000;border:solid 1px #ff5000">短信验证码登录</mt-button>
          </div>
      </div>
  </div>
</div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped>
   .login_info{
       width:100%;
       display: flex;
       justify-content: space-between;
       align-items: center;
       background-color: rgb(238,238,238);
       font-size: .16rem;
       font-weight: bold;
       height: .52rem;
   }
   .login_info2{
       color:rgb(153,153,153);
   }
   .login_body{
       width:90%;margin:0 auto;
   }
   .login_icon{
        width:.8rem;
        height: .8rem;
        background:url("https://gw.alicdn.com/tfs/TB1p.BGQXXXXXbFXFXXXXXXXXXX-160-160.png") no-repeat;
        margin:0.47rem auto 0;
        background-size: contain;
   }
   .account{
        margin:0.432rem auto 0;
   }
   .account_foot{
       font-size:0.1344rem;
       display: flex;
       justify-content: space-between;
       color:#555;
       margin: .2112rem auto 0; 
   }
</style>