<template>
  <div class="wrapper">
  <mt-header title="快速注册">
    <router-link to="/" slot="left">
      <mt-button icon="back">返回</mt-button>
    </router-link>
    <mt-button slot="right">帮助</mt-button>
  </mt-header>
  <div class="main">
<mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
<mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
  </div>

  <div>
    <mt-button @click="submit" type="primary" size="large" style="border-radius:0.99rem; margin:.3408rem auto 0;">同意协议并注册</mt-button>
  </div>
  <div class="foot">
    <span class="grey">已阅读并同意以下协议</span><span class="black">《淘宝服务协议》、《隐私权政策》《支付宝服务协议》</span>
  </div>

  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
        username:'',
        password:'',
        phone:'',

    }
  },
  watch:{},
  computed:{},
  methods:{
    submit(){
      if(this.username==''||this.password==''||this.phone==''){
        this.$messagebox.alert('请输入所有信息');
      }else if(!this.phone.match(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/)){
        this.$messagebox.alert('手机号格式错误');
      }else{
      let that=this;
      this.$axios({
        method:'post',
        url:'/user',
        data:{
           username:that.username,
           password:that.password,
           phone:that.phone
        }
      }).then(function(response){
        if(response.data==true){
          that.$messagebox.alert('注册成功').then(function(){
            that.$router.push('/success');
          });

        }
      }).catch(function(response){
        console.log(response);
      })
      }
      
    }
  },
  created(){},
  mounted(){}
}
</script>
<style scoped>
.main{
  margin-top: 0.4rem;
}
.grey{
  color: gray
}
.black{
 color: black;
}
.foot{
 font-size: 0.15rem;
 margin-top: 0.15rem;
}
</style>