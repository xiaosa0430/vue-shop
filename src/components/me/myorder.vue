<template>
<div>
    <van-steps
    :active="active"
    icon="logistics"
    title="商品名称"
    description="商品描述信息"
    >
    <van-step>买家下单</van-step>
    <van-step>商家接单</van-step>
    <van-step>买家提货</van-step>
    <van-step>交易完成</van-step>
    </van-steps>

    <van-steps direction="vertical" :active="0" active-color="#f44">
        <van-step>
            <h3>【城市】物流状态1</h3>
            <p>2016-07-12 12:40</p>
        </van-step>
        <van-step>
            <h3>【城市】物流状态2</h3>
            <p>2016-07-11 10:00</p>
        </van-step>
        <van-step>
            <h3>快件已发货</h3>
            <p>2016-07-10 09:30</p>
        </van-step>
    </van-steps>
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
.van-steps__items h3{
    text-align: left;
}
.van-steps__items p{
    text-align: left;
    font-size:16px;
}
</style>
