<template>
    <!-- 设置中心 -->
    <div class="setfocus">
        <div class="setfocus-header">
            <img src="@/assets/fanhuianniu.png" alt="" @click="goBack">
            
            <span>设置中心</span>
        </div>
        <div class="setfocus-dv">
            <ul>
                <Li>
                    <span>密码设置</span>
                    <span >
                        <img src="@/assets/arrow.png" alt="">
                    </span>
                </Li>
                <Li>
                    <span>注册协议</span>
                    <span></span>
                </Li>
            </ul>
        </div>
        <div class="setfocus-dv1">
          
            <ul>
                <Li>
                    <span>关于本机</span>
                    <span><img src="@/assets/arrow.png" alt=""></span>
                </Li>
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
    .setfocus{
        .setfocus-header{
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
        .setfocus-dv{
            overflow: hidden;
            background-color: #fff;
            width: 94%;
            border-radius: 4px;
            margin: 0 auto;
            margin-top: 8px;
            margin-bottom: 8px;
            ul{
                margin: 0;
                padding: 0;
                overflow: hidden;
                li:nth-child(1){
                    padding: 5px 10px;
                    span{
                        line-height: 52px;
                    }
                }
                li{
                    list-style: none;
                    padding: 15px 10px;
                    border-bottom: 1px solid #f6f7f9;
                    overflow: hidden;
                }
                span:nth-child(1){
                    float: left;
                    font-size: 15px;
                    color: #333;
                    font-weight: Regular;
                }
                span:nth-child(2){
                    float: right;
                }
            }
        }
        .setfocus-dv1{
            width: 94%;
            margin: 0 auto;
            background-color: #fff;
            padding: 15px 10px ;
            ul{
                margin: 0;
                padding: 0;
                li{
                    list-style: none;
                }
                span:nth-child(1){
                    font-size: 15px;
                    color: #333;
                }
                span:nth-child(2){
                    float: right;
              } 
            }  
        }
    }
</style>