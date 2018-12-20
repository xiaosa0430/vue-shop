<template> 
<div class="goodsList">
    <van-nav-bar 
    title="商品列表"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
    />
    
    <div class="items">
        <div class="item" @click="goInfo(1)">
            <img src="../assets/images/3.png" alt="">
            <p>商品名称: <span>iphoneX</span></p>
            <p>市场价: <span>998.00</span></p>
        </div>
        <div class="item" @click="goInfo(2)">
            <img src="../assets/images/3.png" alt="">
            <p>商品名称: <span>iphoneX</span></p>
            <p>市场价: <span>998.00</span></p>
        </div>
        <div class="item" @click="goInfo(3)">
            <img src="../assets/images/3.png" alt="">
            <p>商品名称: <span>iphoneX</span></p>
            <p>市场价: <span>998.00</span></p>
        </div>
    </div>
   
</div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        onClickLeft(){
            this.$router.go(-1);
        },
        goInfo(id){
            this.$router.push("/goodsInfo/"+id)
        }
    }
}
</script>

<style lang="less" scoped>
.goodsList{
   
    .items{
        padding:3px;
        display:flex;
        flex-wrap:wrap;
        .item{
            width: 48%;
            border:1px solid #ccc;
            margin-left:5px;
            margin-bottom:3px;
            box-shadow: 1px 1px 3px #ccc;
            background-color: skygreen;
            font-size: 16px;
            text-align: left;
            img{
                width: 100%;
            }
            p{
                margin:0;
                padding:0;
                span{
                    color:red;
                    font-size: 18px;
                }
            }
    }
    }
    
}
</style>

