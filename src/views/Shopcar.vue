<template>
<div>
    <van-nav-bar
    title="购物车"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
    />

    <van-card
    num="2"
    price="2.00"
    desc="描述信息"  
    title="商品标题"
    :thumb="imageURL"
    />
    <van-card
    num="2"
    price="2.00"
    desc="描述信息"  
    title="商品标题"
    :thumb="imageURL"
    />
    <van-card
    num="2"
    price="2.00"
    desc="描述信息"  
    title="商品标题"
    :thumb="imageURL"
    />

    <van-submit-bar
    :price="3050"
    button-text="提交订单"
    @submit="onSubmit"
    />
</div>
</template>

<script>
import Vue from 'vue'
import { Toast } from 'vant';
Vue.use(Toast);

export default {
    data(){
        return {
            imageURL:"https://img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg"
        }
    },
    methods:{
       onClickLeft(){
          this.$router.go(-1);
       },
       onSubmit(){
           Toast('提交');
       }
   }
}
</script>

<style lang="less" scoped>

</style>

