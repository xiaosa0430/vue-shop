<template>
<div class="newsInfo">
    
    <van-nav-bar 
    title="新闻"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
    />
    <div class="header">
        <div class="title">{{newsInfo.title}}</div>
        <div class="subtitle">
            <span class="ctime">发表时间:{{newsInfo.ctime}}</span>
            <span class="views">评论次数:{{newsInfo.views}}</span>
        </div>
    </div>
    <div class="body" v-html="newsInfo.description"></div>
    <comment-box :id="id"></comment-box>
</div>
</template>

<script>
import comment from '../components/comment.vue'
export default {
    data(){
        return{
          id:this.$route.params.id,
          newsInfo:{}
        }
    },
    created(){
        this.$http.get('/v1/news/getNewsInfo/'+this.id).then(res=>{
            if(res.data.status==200){
               this.newsInfo = res.data.data;
            }
        })
    },
    methods:{
        onClickLeft(){
            this.$router.go(-1);
        }
    },
    components: {
        "comment-box": comment
    }
}
</script>

<style lang="less" scoped>
.newsInfo{
    .header{
        width:100%;
        // height:50px;
        border-bottom:1px solid #ccc;
        padding:5px;
        .title{
            color:red;
            font-weight: bold;
            font-size: 16px;
        }
        .subtitle{
            display:flex;
            justify-content: space-between;
            padding: 10px;
            font-size: 12px;
        }
    }
    .body{
        padding:10px;
        font-size: 14px;
        border-bottom:1px solid #ccc;
    }
   
}
</style>

