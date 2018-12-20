<template>
<div class="goodsInfo">
    
    <van-nav-bar 
    title="商品名称"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
    />
    <div class="detail">
        <div class="img" @click="showImagePreview">
            <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2322385387,3115581809&fm=11&gp=0.jpg" alt="">
        </div>
        <div class="info">
            <div class="name">商品名称: <span>xxxxx</span> </div>
            <div class="price">商品价格: <span>1213.00</span> </div>
            <div class="number">购买数量: <van-stepper v-model="number"/></div>
            <div class="text">购买详情:xxxxxxxxx</div>
        </div>
    </div>

    <van-goods-action>
        <van-goods-action-mini-btn
            icon="chat"
            text="客服"
            @click="onClickMiniBtn"
        />
        <van-goods-action-mini-btn
            icon="cart-o"
            text="购物车"
            @click="onClickMiniBtn"
        />
        <van-goods-action-big-btn
            text="加入购物车"
            @click="onClickBigBtn"
        />
        <van-goods-action-big-btn
            primary
            text="立即购买"
            @click="onClickBigBtn"
        />
    </van-goods-action>
</div>
</template>

<script>
import { ImagePreview } from 'vant';
import Vue from 'vue'
import { Toast } from 'vant';
Vue.use(Toast);
export default {
    data(){
        return{
           number:1
        }
    },
    methods:{
        onClickLeft(){
            this.$router.go(-1);
        },
        onClickMiniBtn() {
            Toast('点击图标');
        },
        onClickBigBtn() {
            Toast('点击按钮');
        },
        showImagePreview(){
            ImagePreview([
            'https://img.yzcdn.cn/2.jpg',
            'https://img.yzcdn.cn/2.jpg'
            ]);
        }
    }
}
</script>

<style lang="less" scoped>
.goodsInfo{
    .detail{
        padding-top:10px;
        .img{
            // background-color:#ccc;
        }
        .info{
            div{
                margin-top:5px;
                span{
                    color:red;
                     font-size: 24px;
                }
            }
            padding:5px;
            font-size: 20px;
            font-weight: bold;
            text-align:left;
            height:50px;
            .van-stepper{
                display:inline-block;
                font-size: 15px;
                font-weight: 400;
                margin-left:30px;
            }
        }
    }
}
</style>

