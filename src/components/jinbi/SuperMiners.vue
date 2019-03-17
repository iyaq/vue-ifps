<template>
    <!-- 超级矿工 -->
    <div class="SuperMiners">
        <div class="SuperMiners-header">
            <img src="@/assets/fanhuianniu.png" alt="" @click="goBack">
            <span>超级矿工</span>
        </div>
        <div class="SuperMiners-dv1">
            <div class="SuperMiners-dv2">
                <span>总资产(个)</span>
                <span>12133232</span>
                <span>转出到金币 <img src="" alt=""></span>
            </div>
            <div class="SuperMiners-dv3">
                <ul>
                    <li>
                        <span>剩余转出额度(个)</span>
                        <span class="SuperMiners-shen">13232.00</span>
                    </li>
                    <li>
                        <span>昨日分红(个)</span>
                        <span class="SuperMiners-ho">12.213</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="SuperMiners-dv4">
            <div >
                <span class="SuperMiners-sp" ></span>
                <span class="SuperMiners-sp1" >分红明细</span>
            </div>
        </div>
        <div class="SuperMiners-dv5">
            <ul>
                <li>
                    <span class="SuperMiners-f">分红收益(个)</span>
                    <span class="SuperMiners-s">2019.03.16 17:44:23</span>
                </li>
                <li>
                    <span class="SuperMiners-yi">+100</span>
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
        }
    }
}
</script>
<style lang="less" scoped>
    .SuperMiners{
        .SuperMiners-header{
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
        .SuperMiners-dv1{
            width: 94%;
            margin: 13px auto;
            .SuperMiners-dv2{
                background-image: url(../../assets/Assets.png);
                background-size: 100% 100%;
                padding-bottom: 0.25rem;
                border-bottom: 1px solid #F5F7F9;
                span{
                    text-align: center;
                    display: block;
                }
                span:nth-child(1){
                    padding-top: 0.35rem;
                    padding-bottom: 0.08rem;
                    font-size: 15px;
                    color: #666;
                }
                span:nth-child(2){
                    padding-bottom: 0.35rem;
                    font-size: 36px;
                    color: #396EFF;
                }
                span:nth-child(3){
                    font-size: 15px;
                    color: #fff;
                    background-color: #F8A841;
                    padding: 0.1rem;
                    width: 1.3rem;
                    margin-left: 0.9rem;
                }
            }
            .SuperMiners-dv3{
                background-color: #fff;
                padding-top: 0.2rem;
                padding: 0.2rem 0.3rem ;
                ul{
                    margin: 0;
                    padding: 0;
                    overflow: hidden;
                    li{
                        list-style: none;
                        width: 48%;
                        float: left;
                        span{
                            display: block;
                            text-align: center;
                            font-size: 15px;
                            color: #999;
                        }
                        .SuperMiners-shen{
                            margin-top: 0.04rem;
                            font-size: 18px;
                            color: #333;
                        }
                        .SuperMiners-ho{
                            margin-top: 0.04rem;
                            font-size: 18px;
                            color: #333;
                        }
                    }
                    li:nth-child(2){
                        float: right;
                    }
                }
            }
        }
        .SuperMiners-dv4{
            width: 94%;
            margin: 0 auto;
            overflow: hidden;
            .SuperMiners-sp{
                height: 15px;
                width: 2px;
                display: block;
                background-color: #396EFF;
                float: left;
                margin-top: 3px;
                margin-right: 10px;
            }
            .SuperMiners-sp1{
                float: left;
                font-size: 18px;
                color: #333;
            }
        }
        .SuperMiners-dv5{
            overflow: hidden;
            width: 94%;
            margin: 0.10rem auto;
            background-color: #fff;
            ul{
                margin: 0;
                padding: 0;
                overflow: hidden;
                border-bottom: 1px solid #F5F7F9;
                padding: 0 0.02rem;
                li{
                    list-style: none;
                    width: 1.4rem;
                    float: left;
                    padding: 0.1rem 0.06rem;
                    .SuperMiners-f{
                        font-size: 15px;
                        color: #333;
                    }
                    .SuperMiners-s{
                        font-size: 14px;
                        color: #999;
                    }
                }
                li:nth-child(2){
                    float: right;
                    span{
                        text-align: right;
                        display: block;
                    }
                    .SuperMiners-yi{
                        color: #333;
                        font-size: 18px;
                        display: block;
                        margin-top: 0.08rem;
                    }
                }
            }
        }
        
    }
    
</style>