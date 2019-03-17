<template>
    <!-- 我的金币 -->
    <div class="Mycoin">
         <!-- 顶部 Header 区域 -->
        <div class="oneifon-header">
            <img src="@/assets/fanhuianniu.png" alt="" @click="goBack">
            
            <span>我的金币</span>
        </div>
        <div class="Mycoin-dv1">
            <div class="Mycoin-dv2">
                <span>金币资产(个)</span>
                <h2>12133232</h2>
                <span>≈ 23232323元</span>
            </div>
            <div class="Mycoin-dv3">
                <ul>
                    <li>
                        <span>
                            <img src="@/assets/zhuanchu.png" alt="">
                        </span>
                        <span @click="change2">充值</span>
                    </li>
                    <li><span><img src="@/assets/withdrawal.png" alt=""></span><span @click="change">提现</span></li>
                    <li><span><img src="@/assets/huzhuan.png" alt=""></span><span @click="change1">互转</span></li>
                </ul>
            </div>
        </div>
        <div class="Mycoin-dv4">
            <div class="Mycoin-jiao">
                <span></span>
                交易详细
            </div>
            <div class="Mycoin-dvul">
                <ul>
                    <li>
                        <span><img src="@/assets/zhuanchu.png" alt=""></span>
                        <span ref="spanvalue" id="demo">13109465451</span>
                        <span>+100</span>
                        <span>2019-02-02</span>
                    </li>
                    <li>
                        <span><img src="@/assets/withdrawal.png" alt=""></span>
                        <span>13109465451</span>
                        <span>+100</span>
                        <span>2019-02-02</span>
                    </li>
                </ul>
            </div>
        </div>
        <mt-popup  position="bottom" popup-transition="popup-fade" v-show="falg">
            <ul class="Mycoin-ul">
                <li @click="change4">现金转账</li>
                <li @click="change5">USDT转账</li>
            </ul>
           
        </mt-popup>
        <div class="v-modal" style="z-index: 0;" @click="change3" v-show="falg1"></div>
    </div>
</template>
<script>

export default {
    data(){
        return{
            falg:false,
            falg1:false
        }
    },
    methods:{
        goBack() {
            // 点击后退
            this.$router.go(-1);
        },
        myFunction(){
            
        },
        change(){
             this.$router.push({path: '/tixian',})
        },
        change1(){
             this.$router.push({path: '/huzhuan',})
        },
        change2(){
             this.falg = !this.falg
             this.falg1 = !this.falg1
        },
        change3(){
             this.falg1 = false
             this.falg = false
        },
        change4(){
             this.$router.push({path: '/xianjin',})
        },
        change5(){
             this.$router.push({path: '/USTDzhuan',})
        },
    },
    created(){
        
    }
}
</script>
<style lang="less" scoped>
    .Mycoin{
        .mint-popup{
            position: absolute !important;

        }
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
        .Mycoin-dv1{
            background-color: #fff;
            width: 96%;
            border-radius: 4px;
            margin: 0 auto;
            margin-top: 8px;
            .Mycoin-dv2{
                text-align: center;
                 padding: 25px 0;
                 border-bottom: 1px solid #f6f7f9;
                span:nth-child(1){
                    color: #666;
                }
                h2{
                    color: #386fff;
                }
                span:nth-child(3){
                    color: #9bb2ff;
                }
            }
        }
        .Mycoin-dv3{
            
            ul{
                margin: 0;
                padding: 0;
                overflow: hidden;
               text-align: center;
               padding: 0 8px;
                li{
                    list-style: none;
                    float: left;
                    padding: 15px 0.23rem;
                    span:nth-child(1){
                        display: block;
                        margin-right: 8px;
                        float: left;
                        margin-top: 3px;
                    }
                }
            }
        }
        .Mycoin-dv4{
            
            .Mycoin-jiao{
                padding: 15px 15px 8px 8px ;
                font-weight: 700;
                span{
                    width: 2px;
                    height: 14px;
                    background-color: #396dff;
                    
                    display: -webkit-inline-box;
                }
            }
            .Mycoin-dvul{
                width: 96%;
                border-radius: 4px;
                background-color: #fff;
                margin: 0 auto;
                ul{
                    margin: 0;
                    padding: 0;
                    li{ 
                        list-style: none;
                        padding: 15px 12px;
                        border-bottom: 1px solid #f6f7f9;
                        overflow: hidden;
                        span:nth-child(1){
                            padding-right: 15px;
                            display: inline-block;
                            margin-top: 3px;
                        }
                        span:nth-child(2){
                            padding-right: 0.17rem;
                            color: #999;
                        }
                        span:nth-child(3){
                            padding-right: 0.26rem;
                        }
                        span:nth-child(4){
                            // padding-right: 20px;
                            // float: right;
                            color: #999;
                        }
                    }
                }
            }
           
        }
        .mint-header{
            height: 60px !important;
        }
        .mint-popup-bottom{
            bottom: 13px;
            z-index: 10;
        }
        .Mycoin-ul{
            margin: 0;
            padding: 0;
            width: 384px;
            height: 148px;
           li{
               list-style: none;
               padding: 26px 151px;
               border-bottom: 1px solid #ccc;
               text-align: center;
               letter-spacing: 1px;
           }
           li:nth-child(1){
               color: #386fff;
               font-size: 16px;
           }
           li:nth-child(2){
               color: #F8A841;
               font-size: 16px;
           }
        }
    }
</style>
