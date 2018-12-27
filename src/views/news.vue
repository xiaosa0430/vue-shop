<template>
<div class="newsList">
      <!-- Tab 标签滑块 -->
   <van-tabs @click="onClick">
      <van-tab 
        v-for="(item,index) in newsCategory" 
        :title="item.name" 
        :key="index"
        class="tab">

        <!-- <div class="subCate">
          <img src="../assets/images/bg.jpg" alt="" @click="goList(item.id)" v-for="(item,index) in imgList" :key="index">
        </div> -->
        <!-- <ul class="subCate">
          <li @click="goList(item.id)" v-for="(item,index) in imgList" :key="index">
            <img :src="item.img">
            <span>{{item.name}}</span>
          </li>
        </ul> -->
     
      </van-tab>
    </van-tabs>   
       <!-- tabBar -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="pending-evaluate" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="search" dot to="/news">新闻</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart" info="5" to="/shopcar">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/me">我的</van-tabbar-item>
    </van-tabbar>
</div>
</template>

<script>
export default {
    data(){
      return {
          active:2,
          newsCategory:[]
      }
    },
    created(){
      this.$http.get("/v1/news/getNewsCategories").then(res=>{
          if(res.data.status==200){
              this.newsCategory = res.data.data;
          }
      })
    },
    methods:{
      onClick(index, title) {
        
      }
    }
}
</script>

<style lang="less" scoped>
.newsList{
  .subCate{
    width:100%;
    img{
      width: 100%;
      height: 150px;
    }
  }
}
</style>

