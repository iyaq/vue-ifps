<template>
    <!-- USDT转账 -->
    <div class="xianjin">
        <div class="xianjin-header">
            <img src="@/assets/fanhuianniu.png" alt="" @click="goBack">
            <span>USDT转账</span>
        </div>
        <div class="xianjin-dv">
            <span>当前币种</span>
            <span>金币</span>
        </div>
        <div class="xianjin-dv1">
            <img src="@/assets/Qr code.png" alt="">
            <span>保存二维码</span>
            <span>2393302KKD303211-21212229394SJSJSJ2192939</span>
            <span>复制地址</span>
            <ul>
                <li><p>就是看到房价开始发生开始减肥快乐十分啦见识到了非技术开发建设就是看到房价开始发生开始减肥快乐十分啦见识到了非技术开发建设</p></li>
                <li><p>就是看到房价开始发生开始减肥快乐十分啦见识到了非技术开发建设</p></li>
                <li><p>就是看到房价开始发生开始减肥快乐十分啦见识到了非技术开发建设</p></li>
            </ul>
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
        goBack() {
            // 点击后退
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="less" scoped>
    .xianjin{
        .xianjin-header{
            // position: fixed;
            top: 0;
            left: 0;
            z-index: 10;
            background-color: #fff;
            height: 60px;
            width: 100%;
            padding: 0 12px;
            span{
                line-height: 60px;
                font-size: 24px;
                font-weight: 400;
                padding: 6px;
            }
        }
        .xianjin-dv{
            background-color: #fff;
            padding: 14px 0.2rem;
            overflow: hidden;
            margin-bottom: 13px;
            span:nth-child(1){
                font-size: 16px;
                color: #333;
                float: left;
            }
            span:nth-child(2){
                font-size: 16px;
                color: #396EFF;
                float: right;
            }
        }
        .xianjin-dv1{
            width: 94%;
            height: 100%;
            background-image: url(../../assets/dabeijinglan.png);
            background-size: 100% 100%;
            margin: 0 auto;
            ul{
                padding-left: 0.18rem;
                li{
                    list-style-image:url(../../assets/xiaoyuandian.png)
                    
                }
                p{
                    color: #333;
                }
            }
            
            img{
                padding: 0.6rem 0.2rem 0.02rem 0.66rem;
                display: block;
            }
            span{
                text-align: center;
                display: block;
            }
            span:nth-child(2){
                font-size: 15px;
                color: #396EFF;
            }
            span:nth-child(3){
                padding-top: 0.15rem;
                font-size: 12px;
                color: #666;
            }
            span:nth-child(4){
                font-size: 15px;
                color: #FFF;
                background-color: #396EFF;
                padding: 0.1rem;
                width: 1rem;
                margin: 0 auto;
                margin-top: 0.1rem;
                margin-bottom: 0.2rem;
            }
        }
    }
     
</style>