<template>
<div class="category">
      <!-- Tab 标签滑块 -->
    <van-tabs>
      <van-tab 
        v-for="index in 8" 
        :title="'标签 ' + index" 
        :key="index"
        class="tab">
        内容 {{ index }}
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
            active:1
        }
    }
}
</script>

<style lang="less" scoped>

</style>

