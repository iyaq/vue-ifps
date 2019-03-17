<template>
    <!-- 设置 -->
    <div class="tixian">
       <div class="tixian-header">
            <img src="@/assets/fanhuianniu.png" alt="" @click="goBack">
            <span >金币提现</span>
        </div>
        <div class="tixian-dv1">
            <div class="tixian-dv2">
                <span>账户金币余额</span>
                <span>30.12</span>
            </div>
            <div class="tixian-dv3">
                <span>可提现余额≈1000/个</span>
            </div>
        </div>
        <div class="tixian-dv4">
            <span>提现额度</span>
            <ul>
                <li>
                    <input type="text" placeholder="6000.00/个 ≈ 6000/元" class="tixian-input" style="outline:none">
                </li>
                <li class="tixian-lisi"><a href="#">全部提现</a></li>
            </ul>
            <ul>
                <li>提现到银行卡</li>
                <li><a href="#"><img src="@/assets/jianhanglogo.png" alt="" class="tixian-img"> <span>建设银行</span></a></li>
                
            </ul>
        </div>
        <div class="tixian-dv5">
            <span>确认提现</span>
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
    .tixian{
        .tixian-header{
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
         .tixian-dv1{
            width: 94%;
            margin: 0 auto;
            margin-top: 10px;
            height: 219px;
            background-image: url(../../assets/Assets.png);
            background-size: 100% 100%;
            margin-bottom: 10px;
            .tixian-dv2{
                 padding-bottom: 30px;
                 border: 1px solid #F5F7F9;
                span{
                    display: block;
                    text-align: center;
                }
                span:nth-child(1){
                    font-size: 15px;
                    color: #999;
                    padding: 50px 0 10px 0;
                }
                span:nth-child(2){
                    font-size: 36px;
                    color: #396EFF;
                    padding: 0px 0 25px 0;
                }
                span:nth-child(3){
                    width: 100pt;
                    margin: 0 auto;
                    font-size: 15pt;
                    color: #fff;
                    padding: 10px 20px;
                    background-color: #396EFF;
                }
            }
            .tixian-dv3{
                text-align: center;
                margin-top: 16pt;
                font-size: 14px;
                color: #999;
            }
        }
        .tixian-dv4{
            background-color: #fff;
            width: 94%;
            margin: 0 auto;
            overflow: hidden;
            span{
                font-size: 15px;
                color: #333;
                padding-left: 8px;
            }
            ul{
                margin: 0;
                padding: 0 8px;
                overflow: hidden;
                border-bottom:1px solid #DDDDDD;
                li{
                    list-style: none;
                    float: left;
                    margin-top: 6px;
                    padding-bottom: 10px;
                     .tixian-input{
                        -web-kit-appearance:none;
                        -moz-appearance: none;
                        outline:0;
                        border:none;
                        width: 2rem;
                        margin-bottom: 0;
                        padding-left: 0;
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
                .tixian-lisi{
                    padding:10px 0;
                }
                li:nth-child(1){
                    font-size: 24px;
                    font-weight: 700;
                    color: #333;
                }
                li:nth-child(2){
                    float: right;
                    color: #396EFF;
                    font-size: 15px;
                }
            }
            ul:nth-child(3){
                li:nth-child(1){
                    font-size: 15px;
                    color: #333;
                    margin-top: 12px;
                    padding-bottom: 15px;
                    font-weight: 40;
                }
                li:nth-child(2){
                    float: right;
                    font-size: 15px;
                    margin-top: 12px;
                    padding-bottom: 15px;
                    a{
                        text-decoration: none;
                        color: #999;
                        .tixian-img{
                            display: block;
                            float: left;
                        }
                    }
                }
            }
        }
        .tixian-dv5{
            width: 94%;
            // height: 235px;
            margin: 0 auto;
            background-color: #fff;
            padding: 56px 0;
            text-align: center;
            span{
                padding: 20px 1.2rem;
                background-color: #F8A841;
                color: #fff;
            }
        }
    }
</style>
