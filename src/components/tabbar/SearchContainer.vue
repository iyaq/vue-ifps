<template>
    <!-- 我的 -->
    <div class="SearchContainer">
        <div class="asd">
            <div class="ass">
            <!-- <img src="@/assets/Star.png" alt=""> -->
            <div class="Search-dv1">
                <span>我的</span>
            </div>
            <div class="Search-dv2">
                <div class="assf">
                    <img src="@/assets/zhao.png" alt="">
                </div>
                <div class="Search-dvni">
                    <span>昵称 <img src="@/assets/level.png" alt="">
                    <p>LV1</p></span>
                    <span></span>
                    <span>1083042065@qq.com</span>
                    <span @click="change5">
                        <img src="@/assets/arrow.png" alt="">
                    </span>
                </div>
            </div>
        </div>
        </div>
        <div class="Search-dv3">
            <ul>
                <li>
                    <span>
                        <img src="@/assets/COINS.png" alt="">
                    </span>
                    <span>我的金币</span>
                    <span @click="change1"><img src="@/assets/arrow.png" alt=""></span>
                </li>
                <li>
                    <span>
                        <img src="@/assets/miners.png" alt="">
                    </span>
                    <span >超级矿工</span>
                    <span  @click="change6"><img src="@/assets/arrow.png" alt=""></span>
                </li>
                <li>
                    <span>
                        <img src="@/assets/friends.png" alt="">
                    </span>
                    <span >邀请好友</span>
                    <span  @click="change4"><img src="@/assets/arrow.png" alt=""></span>
                </li>
            </ul>
        </div>
        <div class="Search-dv4">
            <ul>
                <li>
                    <span>
                        <img src="@/assets/er.png" alt="">
                    </span>
                    <span>联系客服</span>
                    <span @click="change3"><img src="@/assets/arrow.png" alt=""></span>
                </li>
                <li>
                    <span>
                        <img src="@/assets/Set.png" alt="">
                    </span>
                    <span >设置中心</span>
                    <span  @click="change2"><img src="@/assets/arrow.png" alt=""></span>
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
        change(){
            this.$router.push({path: '/intercalate',})
        },
        change1(){
            this.$router.push({path: '/Mycoin',})
        },
        change2(){
            this.$router.push({path: '/setfocus',})
        },
        change3(){
            this.$router.push({path: '/lainxi',})
        },
        change4(){
            this.$router.push({path: '/InviteFriends',})
        },
        change5(){
            this.$router.push({path: '/oneifon',})
        },
        change6(){
            this.$router.push({path: '/SuperMiners',})
        },
    },
     created(){
      //从后台获取数据
    }
}
</script>
<style lang="less" scoped>
    .SearchContainer{
        .asd{
            padding-top: 52px;
            background-color: #fff;
        }
        .ass{
            background-image: url(../../assets/Star.png);
            background-size: 100% 100%;
            height: 120px;
            // margin-top: 52px;
        }
        .Search-dv1{
            // background-color: #999;../assets/Search-dv1.png
            
            padding: 5px 0;
            text-align: center;
            overflow: hidden;
            position: absolute;
            top: 32px;
            left: 0;
            span:nth-child(1){
                font-size: 28px;
                float: left;
                padding-left: 18px;
            }
            span:nth-child(2){
               float: right;
               padding-right: 25px;
            }
        }
        .Search-dv2{
            overflow: hidden;
             position: relative;
            padding: 30px 18px;
            .assf{
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
            .Search-dvni{
                float: left;
                // padding: 20px 14px;
                padding-left: 14px;
                // padding-top: 20px;
               
                span{
                    display: block;
                    img{
                        margin-top: 6px;
                    }
                }
                span:nth-child(1){
                    padding-bottom: 8px;
                    font-size: 18px;
                    p{
                        position: absolute;
                    top: 40px;
                    left: 160px;
                    color: #fff;
                    }
                    
                }
                span:nth-child(4){
                    position: absolute;
                    right: 31px;
                    top: 52px;
                }
            }
        }
        .Search-dv3{
            width: 94%;
            margin: 0 auto;
            background-color: #fff;
            margin-top: 10px;
            margin-bottom: 10px;
            border-radius: 4px;
            ul{
                margin: 0;
                padding: 0;
                li{
                    list-style: none;
                    padding: 22px 18px;
                     border-bottom: 1px solid #f6f6f6 ;
                    span:nth-child(1){
                        padding-right: 14px;
                    }
                    span:nth-child(2){
                        font-size: 15px;
                        font-weight: Regular;
                    }
                    span:nth-child(3){
                        float:  right;
                    }
                }
            }
        }
        .Search-dv4{
            background-color: #fff;
            width: 94%;
            margin: 0 auto;
             border-radius: 4px;
            ul{
                margin: 0;
                padding: 0;
                li{
                    list-style: none;
                    padding: 22px 18px;
                    border-bottom: 1px solid #f6f6f6 ;
                    span:nth-child(1){
                        padding-right: 14px;
                    }
                     span:nth-child(2){
                        font-size: 15px;
                        font-weight: Regular;
                    }
                    span:nth-child(3){
                        float:  right;
                    }
                }
            }
        }
    }
</style>
