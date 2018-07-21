<template>
  <div class="wrapper">
      {{msg}}
      <!-- <foot></foot> -->
  </div>
</template>

<script>
// import foot from './foot'
export default {
  components:{
      // foot:foot
  },
  props:{},
  data(){
    return {
      msg:'我的淘宝'
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style scoped>
</style>