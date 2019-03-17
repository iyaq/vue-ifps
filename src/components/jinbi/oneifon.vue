<template>
    <!-- 个人信息 -->
    <div class="oneifon">
        <div class="oneifon-header">
            <img src="@/assets/fanhuianniu.png" alt="" @click="goBack">
            <span>个人信息</span>
        </div>
        <div class="oneifon-dv">
            <ul>
                <Li>
                    <span>头像</span>
                    <span class="oneifon-img">
                        <img src="@/assets/Head portrait.png" alt="">
                    </span>
                </Li>
                <Li>
                    <span>昵称</span>
                    <span>梦里花</span>
                </Li>
                <Li>
                   <span>账号</span>
                   <span>13109465451@qq.com</span>
                </Li>
            </ul>
        </div>
        <div class="oneifon-dv1">
            <!-- <span>实名认证</span>
            <span>已认证</span> -->
            <ul>
                <Li>
                    <span>实名认证</span>
                    
                    <span @click="change"><img src="@/assets/arrow.png" alt=""></span>
                    <span class="oneifon-img">
                        已认证
                    </span>
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
        change(){
            this.$router.push({path:'/Identity'})
        }
    }
}
</script>
<style lang="less" scoped>
    .oneifon{
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
        .oneifon-dv{
            overflow: hidden;
            background-color: #fff;
            width: 96%;
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
                }
                span:nth-child(2){
                    float: right;
                }
                .oneifon-img{
                    width: 52px;
                    height: 52px;
                    border-radius: 50%;
                }
            }
        }
        .oneifon-dv1{
            width: 96%;
            margin: 0 auto;
            background-color: #fff;
            padding: 15px 10px ;
              ul{
                  margin: 0;
                  padding: 0;
                  li{
                      list-style: none;
                  }
                  span:nth-child(2){
                      float: right;
                     
                  }
                  span:nth-child(3){
                      float: right;
                    margin-right: 10px;
                    
                       color: #396dfe;
                       border:1px solid #396dfe;
                       border-radius: 4px;
                       padding: 2px 4px;
                  }
              }  
        }
    }
</style>