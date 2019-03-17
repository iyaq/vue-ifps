<template>
    <!-- 联系客服 -->
    <div class="lianxi">
        <div class="oneifon-header">
            <img src="@/assets/fanhuianniu.png" alt="" @click="goBack">
            <span>联系客服</span>
        </div>
        <div class="lianxi-dv">
            <ul>
                <li>下载合同
                    <span><img src="@/assets/arrow.png" alt=""></span>
                </li>
                <li>联系客服 
                    <span><img src="@/assets/arrow.png" alt=""></span>
                </li>
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
        },
    }
}
</script>
<style lang="less" scoped>
    .lianxi{
        .oneifon-header{
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
        .lianxi-dv{
            width: 96%;
            margin: 0 auto;
            background-color: #fff;
            border-radius: 4px;
            margin-top: 8px;
            ul{
                margin: 0;
                padding: 0;
                li{
                    list-style: none;
                    padding: 15px 12px;
                    border-bottom:1px solid #f6f7f9;
                    overflow: hidden;
                    span{
                        float: right;
                    }
                }
            }
        }
    }
</style>