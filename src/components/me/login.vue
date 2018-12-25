<template>
<div class="login">
    <van-cell-group>
        <van-field
            v-model="username"
            required
            clearable
            label="用户名"
            icon="question-o"
            placeholder="请输入用户名"
        />
        <van-field
            v-model="password"
            type="password"
            label="密码"
            clearable
            placeholder="请输入密码"
            required
        />
    </van-cell-group>
    <van-button type="danger" size="large">登录</van-button>
    <div class="reg">
        未注册 ? <a href="javascript:;" @click="register">去注册</a>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{
            username:"",
            password:""
        }
    },
    methods:{
        register(){
            this.$router.push('/me/register');
        }
    }
}
</script>

<style lang="less">
.login{
    .van-cell{
        height:50px;
        line-height: 30px;
    }
    .van-cell__title,
    .van-cell__value{
        font-size: 18px;
    }
    button{
        width:80%;
        margin-top:30px;
    }
    .reg{
        margin:30px;
        text-align: right;
        padding-right:30px;
        font-size: 20px;
        a{
            font-size: 24px;
            color:blue;
        }
    }
}
</style>

