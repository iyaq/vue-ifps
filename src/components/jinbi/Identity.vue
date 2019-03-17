<template>
    <!-- 身份管理中心 -->
    <div class="Identity">
        <div class="Identity-header">
            <img src="@/assets/fanhuianniu.png" alt="" @click="goBack">
            <span >身份管理中心</span>
        </div>  
        <div class="Identity-dv">
            <div class="gh">
                <img src="@/assets/zhao.png" alt="">
            </div>
            <div class="Identity-dvni">
                <span>昵称 </span>
                <span></span>
                <span>1083042065@qq.com</span>
            </div>
            <div class="Identity-sh">
                <img src="@/assets/yishiming.png" alt="">
            </div>
        </div>
        <!--临时跳转：-->
        <span @click="gotorealname">跳转到实名认证</span>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        goBack() {
            // 点击后退
            this.$router.go(-1);
        },
        gotorealname(){
            this.$router.push({path:'/realname'})
        }
    }
}
</script>
<style lang="less" scoped>
    .Identity{
        .Identity-header{
            // position: fixed;
            top: 0;
            left: 0;
            z-index: 10;
            background-color: #fff;
            height: 64px;
            width: 100%;
            padding: 0 12px;
            span{
                line-height: 74px;
                font-size: 24px;
                font-weight: 400;
                padding: 6px;
            }
        }
        .Identity-dv{
            width: 94%;
            margin: 0.13rem auto;
            background-image: url(../../assets/Assets.png);
            background-size: 100% 100%;
            padding: 0.16rem;
            overflow: hidden;
            .gh{
                float: left;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                margin-top: 12px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .Identity-dvni{
                float: left;
                padding-top: 0.2rem;
                padding-left: 0.15rem;
                span:nth-child(1){
                    display: block;
                    font-size: 18px;
                    color: #333;
                }
                span:nth-child(3){
                    display: block;
                    font-size: 15px;
                    color: #333;
                }
            }
            .Identity-sh{
                float: right;
                img{
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
        }
       
    }
    
</style>
