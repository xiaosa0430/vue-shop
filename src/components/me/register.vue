<template>
<div class="register">
    <van-cell-group>
    <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        icon="question-o"
        placeholder="请输入用户名"
        @click-icon="$toast('question')"
    />
    <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
    />
    </van-cell-group>
</div>
</template>

<script>
export default {
    data(){
        return{
            username:"",
            password:""
        }
    }
}
</script>

<style lang="less" scoped>

</style>

