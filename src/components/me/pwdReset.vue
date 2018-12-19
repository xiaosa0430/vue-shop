<template>
    <div>
        <van-panel title="输入新密码">
            <van-password-input
                :value="newPwd"
                @focus="showKeyboard = true"
            />
        </van-panel>

        <van-button size="large" type="danger">提交新密码</van-button>

        <van-number-keyboard
        :show="showKeyboard"
        @input="onInput"
        @delete="onDelete"
        @blur="showKeyboard = false"
        />
    </div>
</template>

<script>
export default {
    data() {
        return {
            newPwd: '',
            showKeyboard: true
        };
    },

    methods: {
        onInput(key) {
        this.newPwd = (this.newPwd + key).slice(0, 6);
        },
        onDelete() {
        this.newPwd = this.newPwd.slice(0, this.newPwd.length - 1);
        }
    }
}
</script>

<style lang="less" scoped>
    button{
        margin:10px 20px;
        width:90%;
        border-radius: 8px;
    }
</style>
