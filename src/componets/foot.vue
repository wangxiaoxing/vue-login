<template>
 <div>
  <mt-tabbar v-model="selected">
  <mt-tab-item id="首页">
    <img v-show="selected=='首页'" slot="icon" src="../assets/icon/home_active.png">
    <img v-show="selected!=='首页'" slot="icon"  src="../assets/icon/home.png">
    首页
  </mt-tab-item>
  <mt-tab-item id="微淘">
    <img v-show="selected=='微淘'" slot="icon" src="../assets/icon/we_active.png">
    <img v-show="selected!=='微淘'" slot="icon" src="../assets/icon/we.png">
    微淘
  </mt-tab-item>
  <mt-tab-item id="消息">
   <img v-show="selected=='消息'" slot="icon" src="../assets/icon/message_light_active.png">
    <img v-show="selected!=='消息'" slot="icon" src="../assets/icon/message_light.png">
    消息
  </mt-tab-item>
  <mt-tab-item id="购物车">
    <img v-show="selected=='购物车'" slot="icon" src="../assets/icon/cart_light_active.png">
    <img v-show="selected!=='购物车'" slot="icon" src="../assets/icon/cart_light.png">
    购物车
  </mt-tab-item>
  <mt-tab-item id="我的淘宝">
    <img v-show="selected=='我的淘宝'" slot="icon" src="../assets/icon/people_active.png">
    <img v-show="selected!=='我的淘宝'" slot="icon" src="../assets/icon/people.png">
    我的淘宝
  </mt-tab-item>
</mt-tabbar>
</div>

</template>

<script>
export default {
  components:{
    
  },
  props:{},
  data(){
    return {
        selected:"首页"
    }
  },
  watch:{
    selected: function (newVal, oldVal) {
        // 这里就可以通过 val 的值变更来确定
        let target='';
        console.log(newVal);
        switch(newVal){
           case '首页':target='index';break;
           case '微淘':target='we';break;
           case '消息':target='message';break;
           case '购物车':target='cart';break;
           default:target='people';
        }
        this.$router.push('/'+target);
        
    }
  },
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style scoped>
</style>