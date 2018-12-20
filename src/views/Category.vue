<template>
<div class="category">
      <!-- Tab 标签滑块 -->
    <van-tabs>
      <van-tab 
        v-for="index in 8" 
        :title="'一级分类 ' + index" 
        :key="index"
        class="tab">

        二级分类 {{ index }}
        <div class="subCate">
          <img src="../assets/images/bg.jpg" alt="" @click="goList(1)">
          <img src="../assets/images/bg.jpg" alt="" @click="goList(2)">
          <img src="../assets/images/bg.jpg" alt="" @click="goList(3)" >
          <img src="../assets/images/bg.jpg" alt="" @click="goList(4)">
        </div>

      </van-tab>
    </van-tabs>   

       <!-- tabBar -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="pending-evaluate" dot to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart" info="5" to="/shopcar">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/me">我的</van-tabbar-item>
    </van-tabbar>
</div>
</template>

<script>
export default {
    data(){
      return {
          active:1,
          imgList: [],
          loading: false,
          finished: false
      }
    },
    methods:{
       onLoad() {},
       goList(id){
         this.$router.push("/goodsList/"+id)
       }
    }
}
</script>

<style lang="less" scoped>
.category{
  .subCate{
    width:100%;
    img{
      width: 100%;
      height: 150px;
    }
  }
}
</style>

