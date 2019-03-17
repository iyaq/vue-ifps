<template>
    <!-- 邀请好友 -->
    <div class="InviteFriends">
        <div class="InviteFriends-header">
            <img src="@/assets/fanhuianniu.png" alt="" @click="goBack">
            <span>{{masges}}</span>
        </div>
        <div class="InviteFriends-dv">
            <ul>
                <li @click="change2">邀请收益 <span class="shou-sp1"></span></li>
                <li @click="change">好友列表 <span class="shou-sp2"></span></li>
                <li @click="change1">邀请好友 <span class="shou-sp1"></span></li>
            </ul>
        </div>
        <div class="InviteFriends-dv1" v-show="falg">
            <div class="InviteFriends-dv2">
                <span>今日收益</span>
                <span>30.12</span>
                <span>增加额度</span>
            </div>
            <div class="InviteFriends-dv3">
                <span>累计收益(个)323232.00</span>
            </div>
        </div>
        <div class="InviteFriends-dv4">
            <div class="InviteFriends-one" v-show="falge1">
                <div >
                    <span class="InviteFriends-sp" ></span>
                    <span class="InviteFriends-sp1" >{{masgese}}</span>
                </div>
                <div class="InviteFriends-two" v-show="falge">
                    <span>
                        <img src="@/assets/riqi.png" alt="">
                    </span>
                    <span>今天</span>
                </div>
            </div>
        </div>
        <div class="InviteFriends-dv5" v-show="falge2">
            <ul>
                <li>
                    <span>131**@qq.com</span>
                    <span>2019-02-03</span>
                    <span>20:30:30</span>
                    <span>+100</span>
                </li>
            </ul>
        </div>
        <div class="InviteFriends-dv7" v-show="falge4">
            <ul>
                <li>
                    <span>1083042065@qq.com</span>
                    <span>2019-02-03</span>
                    <span>会员</span>
                   
                </li>
            </ul>
        </div>
        <div class="InviteFriends-dv6" v-show="falge3">
            <div class="aaa">
                <input type="text" placeholder="www.bidu.com" class="InviteFriends-input">
                <span>复制链接</span>
            </div>
            <div class="InviteFriends-wei">
                <img src="@/assets/Qr code.png" alt="">
                <p>我的邀请码</p>
                <p>AD13236</p>
                <p>立即邀请</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            masges:'邀请收益',
            masgese:'邀请收益明细',
            falg:true,
            falge:true,
            falge1:true,
            falge2:true,
            falge3:false,
            falge4:false
        }
    },
     methods:{
        change(){
            this.masges = '邀请好友'
            this.falg = false
            this.masgese = '邀请好友明细'
            this.falge = false
            this.falge1 = true
            this.falge2 = false
            this.falge3 = false
            this.falge4 = true
        },
        change2(){
            this.masges = '邀请收益'
             this.falg = true
             this.falge = true
             this.falge3 = false
             this.falge1 = true
             this.falge2 = true
             this.falge4 = false
        },
        change1(){
            this.masges = '邀请好友'
            this.falg = false
            this.falge = false
            this.falge1 = false
            this.falge2 = false
            this.falge3 = true
            this.falge4 = false
        },
        goBack() {
            // 点击后退
            this.$router.go(-1);
        },
    }
}
</script>
<style lang="less" scoped>
    .InviteFriends{
        .InviteFriends-header{
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
        .InviteFriends-dv {
            background-color: #fff;
            overflow: hidden;
            ul{
                margin: 0;
                padding: 0;
                overflow: hidden;
                padding: 0 47px;
                li{
                    list-style: none;
                    float: left;
                    padding: 18px 0 ;
                    font-size: 15px;
                    color: #666;
                    position: relative;
                    .shou-sp1{
                        position: absolute;
                        left: 13px;
                        bottom: 0;
                        display: block;
                        width: 33px;
                        height: 2px;
                        background-color: #1898F2;
                        display: none;
                    }
                    .shou-sp2{
                        position: absolute;
                        left: 75px;
                        bottom: 0;
                        display: block;
                        width: 33px;
                        height: 2px;
                        background-color: #1898F2;
                        display: none;
                    }
                }
                li:hover .shou-sp1{
                    display: block;
                    color: #333;
                }
                li:hover .shou-sp2{
                    display: block;
                    color: #333;
                }
                li:hover{
                    color: #333;
                }
                li:nth-child(2){
                    padding-left: 60px;
                }
                li:nth-child(3){
                    float: right;
                }
            }
        }
        .InviteFriends-dv1{
            width: 94%;
            margin: 0 auto;
            margin-top: 10px;
            height: 219px;
            background-image: url(../../assets/Assets.png);
            background-size: 100% 100%;
            .InviteFriends-dv2{
                 padding-bottom: 30px;
                 border: 1px solid #F5F7F9;
                span{
                    display: block;
                    text-align: center;
                }
                span:nth-child(1){
                    font-size: 15px;
                    color: #999;
                    padding: 27px 0 4px 0;
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
            .InviteFriends-dv3{
                text-align: center;
                margin-top: 10pt;
                font-size: 14px;
                color: #999;
            }
        }
        .InviteFriends-dv4{
            width: 94%;
            margin: 0 auto;
            overflow: hidden;
            .InviteFriends-one{
                overflow: hidden;
                padding: 18px 0 10px 0;
                .InviteFriends-sp{
                    height: 15px;
                    width: 2px;
                    display: block;
                    background-color: #396EFF;
                    float: left;
                    margin-top: 3px;
                    margin-right: 10px;
                }
                .InviteFriends-sp1{
                    float: left;
                    font-size: 18px;
                    color: #333;
                }
                .InviteFriends-two{
                    float: right;
                    span{
                        margin-right: 5px;
                        color: #999;
                        font-size: 14px;
                    }
                    span:nth-child(1){
                        margin-top: 3px;
                        display: block;
                        float: left;
                    }
                }
            }
        }
        .InviteFriends-dv5{
            background-color: #fff;
            width: 94%;
            margin: 0 auto;
            ul{
                margin: 0;
                padding: 0;
                li{
                    list-style: none;
                    padding: 20px 6px;
                    border-bottom: 1px solid #F5F7F9;
                    span{
                        margin-right: 0.2rem;
                        font-size: 13px;
                        color: #999;
                    }
                    span:nth-child(4){
                        margin-right: 0;
                        font-size: 13px;
                        color: #999;
                    }
                }
            }
        }
        .InviteFriends-dv6{
            width: 94%;
            margin: 13px auto;
            overflow: hidden;
            .aaa{
                overflow: hidden;
                margin-bottom: 13px;
            }
            .InviteFriends-input{
                width: 2rem;
                -web-kit-appearance:none;
                -moz-appearance: none;
                outline:0;
                border:none;
                margin-bottom: 0;
                float: left;
                margin-right: 0.1rem;
            }
            span{
                padding: 9.5px 21px;
                background-color: #F8A841;
                float: left;
                font-size: 15px;
                color: #FFF;
                letter-spacing: 1px;
            }
            .InviteFriends-wei{
                height: 465px;
                background-image: url(../../assets/dabeijinglan.png);
                background-size: 100% 100%;
                img{
                    display: block;
                    padding: 0.3rem 0.8rem 0.23rem 0.64rem;
                }
                p:nth-child(2){
                    font-size: 16px;
                    color: #666;
                    text-align: center;
                }
                p:nth-child(3){
                    font-size: 24px;
                    color: #333;
                    text-align: center;
                }
                p:nth-child(4){
                    width: 80%;
                    margin: 0 auto;
                    font-size: 16px;
                    color: #fff;
                    text-align: center;
                    background-color: #F8A841;
                    padding: 9.5px 10px;
                    letter-spacing: 1px;
                }
            }
        }
        .InviteFriends-dv7{
            background-color: #fff;
            width: 94%;
            margin: 0 auto;
            ul{
                margin: 0;
                padding: 0;
                li{
                    list-style: none;
                    padding: 20px 6px;
                    border-bottom: 1px solid #F5F7F9;
                    span{
                       padding-right: 27px;
                        font-size: 13px;
                        color: #999;
                    }
                    span:nth-child(2){
                        
                        padding-right: 36px;
                    }
                    span:nth-child(3){
                        border: 1px solid #999;
                        padding-right: 0;
                        padding: 1.1px 14px;
                        border-radius: 5px;
                    }
                }
            }
        }
    }
</style>

