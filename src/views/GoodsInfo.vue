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
            <img :src="goodsInfo.big_img[0]" alt="">
        </div>
        <div class="info">
            <div class="name">商品名称: <span>{{goodsInfo.name}}</span> </div>
            <div class="price">商品价格: <span>{{goodsInfo.sale_price}}</span> </div>
            <div class="number">购买数量: <van-stepper v-model="number"/></div>
            <div class="text">商品描述: {{goodsInfo.description}}</div>
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
           number:1,
           goodsInfo:[]
        }
    },
    created(){
        const id = this.$route.params.id;

        this.$http.get('/v1/goods/getGoodsInfo/'+id).then(res=>{
            if(res.data.status==200){
               this.goodsInfo = res.data.data;
            }
        })
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
            ImagePreview(this.goodsInfo.big_img);
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
            img{
                width:100%;
                height:300px;
            }
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

