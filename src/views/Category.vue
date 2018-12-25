<template>
<div class="category">
      <!-- Tab 标签滑块 -->
    <van-tabs @click="onClick">
      <van-tab 
        v-for="(item,index) in category" 
        :title="item.name" 
        :key="index"
        class="tab">

        <div class="subCate">
          <img src="../assets/images/bg.jpg" alt="" @click="goList(item.id)" v-for="(item,index) in imgList" :key="index">
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
          category:[],
          imgList: [],
          loading: false,
          finished: false
      }
    },
    created(){
     
      this.$http.get("/v1/goods/getGoodsCategories").then(res=>{
       
        if(res.data.status==200){
            this.category = res.data.data;

            this.$http.get("/v1/goods/getGoodsSubCategories/"+this.category[0].id).then(res=>{
            if(res.data.status==200){
               this.imgList = res.data.data;
            }
        })
        }

      })
    },
    methods:{
      onLoad() {},
      goList(id){
         this.$router.push("/goodsList/"+id)
      },
      onClick(index, title) {
        // this.$toast(index);
        this.$http.get("/v1/goods/getGoodsSubCategories/"+index).then(res=>{
            if(res.data.status==200){
               this.imgList = res.data.data;
            }
        })
      }
    },

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

