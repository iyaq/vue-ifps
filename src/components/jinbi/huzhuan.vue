<template>
    <!-- 设置 -->
    <div class="huzhuang">
        <div class="huzhuang-header">
            <img src="@/assets/fanhuianniu.png" alt="" @click="goBack">
            <span >金币互转</span>
        </div>  
        <div class="huzhuan-dv">
            <span>当前币种</span>
            <span>金币</span>
        </div>
        <div class="huzhuan-dv1">
            <ul>
                <li>
                    <span>余额</span>
                    <input type="text" placeholder="6000.00/个 ≈ 6000/元" class="huzhuan-input" style="outline:none">
                    <span class="huzhuan-sp1">全部转出</span>
                </li>
                <li>
                    <span>转出金额</span>
                    <input type="text" placeholder="6000.00/个 ≈ 6000/元" class="huzhuan-input" style="outline:none">
                   
                </li>
                <li>
                    <span>对方账号</span>
                    <input type="text" placeholder="请输入账号" class="huzhuan-input" style="outline:none">
                   
                </li>
            </ul>
            
            
            
        </div>
        <div class="huzhuan-dv2">
            <span>确认转出</span>
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
    .huzhuang{
        .huzhuang-header{
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
        .huzhuan-dv{
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
        .huzhuan-dv1{
            width: 94%;
            margin: 0 auto;
            background-color: #fff;
            position: relative;
            padding: 0.3rem 0 0.1rem 0;;
            
            ul{
                margin: 0;
                padding: 0;
                li{
                    list-style: none;
                    border-bottom: 1px solid #F5F6F7;
                    padding: 0.1rem 0.1rem;
                    span{
                        font-size: 15px;
                        color: #333;
                    }
                    .huzhuan-sp1{
                        position: absolute;
                        right: 0.19rem;
                        top: 0.46rem;
                        color: #396EFF;
                    }
                     input::-webkit-input-placeholder {
                         /* placeholder颜色  */
                         color: #999;
                         /* placeholder字体大小  */
                         font-size: 15px;
                         /* placeholder位置  */
                         text-align: left;
                     }
                }
            }
            
            .huzhuan-input{
                -web-kit-appearance:none;
                -moz-appearance: none;
                outline:0;
                border:none;
                width: 2rem;
                margin-bottom: 0;
            }
        }
        .huzhuan-dv2{
            width: 94%;
            margin: 0 auto;
            background-color: #fff;
            padding: 45px 0;
            text-align: center;
            span{
                padding: 16px 1rem;
                background-color: #F8A841;
                color: #fff;
                font-size: 0.18rem;
            }
        }
        .v-modal{
            position: absolute !important;
        }
    }
</style>