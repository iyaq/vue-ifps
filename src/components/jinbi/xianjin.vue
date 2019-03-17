<template>
    <!-- 现金转账 -->
    <div class="xianjin">
        <div class="xianjin-header">
            <img src="@/assets/fanhuianniu.png" alt="" @click="goBack">
            <span>现金转账</span>
        </div>
        <div class="xianjin-dv">
            <span></span>
            <span>请按提示信息向我公司付款</span>
        </div>
        <div class="xianjin-dv1">
            <ul>
                <li><span>收款方户名：</span> <p>盛天云算</p></li>
                <li><span>收款方开户行：</span><p>西安市未央区支行</p></li>
                <li><span>收款方账号：</span><p>163232323232323</p></li>
                <li><span>转账金额：</span><input type="text" placeholder="请输入转账金额" style="outline:none" class="xianjin-input"></li>
            </ul>
        </div>
        <div class="xianjin-dv2">
            <span>上传凭证：</span>
            <div class="xianjin-chuan">
                
            </div>
            <span>确认转账</span>
            <p> 温馨提示，如有任何疑问请联系在线客服<br/>(请在工作日9:00-17:00之前转账)</p>
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
            width: 94%;
            margin: 13px auto;
            background-color: #fff;
            padding: 35px 10px 20px 10px;
            span:nth-child(1){
                display: block;
                width: 2px ;
                height: 16px;
                background-color: #396EFF;
                float: left;
                margin: 3px;
                margin-right: 6px;
            }
            span:nth-child(2){
                display: block;
                font-size: 18px;
                color: #333;
            }
        }
        .xianjin-dv1{
            ul{
                margin: 0;
                padding: 0;
                overflow: hidden;
                background-color: #fff;
                width: 94%;
                margin: 0 auto;
                padding: 0 20px;
                li{
                    list-style: none;
                    overflow: hidden;
                    span{
                        float: left;
                        display: block;
                        padding: 10px 0;
                        font-size:14px;
                        color: #333; 
                        width: 0.85rem;
                    }
                    p{
                        margin-top: 10px;
                        margin-bottom: 0;
                         font-size:14px;
                        color: #333; 
                        text-align: left;
                        float: left;
                        width: 1.8rem;
                        border-bottom: 1px solid #F5F7F9;
                    }
                    .xianjin-input{
                        -web-kit-appearance:none;
                        -moz-appearance: none;
                        outline:0;
                        border:none;
                        margin-bottom: 0;
                        float: right;
                        width: 1.8rem;
                        padding: 0;
                        background-color: none;
                        border-bottom: 1px solid #F5F7F9;
                    }
                    .xianjin-input::-webkit-input-placeholder{
                        font-size: 14px;
                        color: #999;
                    }
                }
            }
                
                
            
        }
        .xianjin-dv2{
            width: 94%;
            margin: 0 auto;
            background-color: #fff;
            padding: 30px 20px;
            // overflow: hidden;
            span:nth-child(1){
                font-size: 14px;
                color: #333;
            }
            .xianjin-chuan{
                width: 175px;
                height: 90px;
                background-color: #ccc;
                margin:  25px 0px 40px 78px;
            }
            span:nth-child(3){
                font-size: 16px;
                color: #FFF;
                letter-spacing: 1px;
                background-color: #F8A841;
                padding: 14px 0.9rem;
                margin-left: 25px;
            }
            p{
                text-align: center;
                padding: 19px;
                font-size: 11px;
                color: #999;
            }   
        }
        
       
    }
     
</style>