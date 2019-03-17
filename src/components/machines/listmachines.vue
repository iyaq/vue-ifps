<template>
<!-- 收益详情 -->
    <div class="listmachines">
         <div class="machines-dv">
            <span class="machines-span">FILECOIN</span>
        </div>
        <div class="machines-dv1">
            <ul>
                <li>挖矿计算机</li>
                <li >收益列表</li>
                <li>行情</li>
            </ul>
        </div>
        <div class="machines-dv2">
            <span>分享</span>
            <div class="machines-dvyi">
                <h3>矿机收益列表</h3>
                <span>2019-03-07</span>
            </div>
        </div>
   
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style lang="less" scoped>
    .listmachines{
        .machines-dv{
            background-color: #ccc;
            width: 100%;
            height: 88px;
            .machines-span{
                display: block;
                text-align: center;
                line-height: 88px;
            }
        }
        .machines-dv1{
            border-bottom:1px solid #797979; 
            overflow: hidden;
            ul{
                overflow: hidden;
                margin: 0;
                padding: 0;
                padding-left: 16px;
                li{
                    list-style: none;
                    float: left;
                    color: #666;
                    font-size: 20px;
                    width: 33.333333333%;
                    height: 78px;
                    text-align: center;
                    line-height: 78px;
                    font-weight: 400;
                }
                li:nth-child(2){
                    padding-left: 22px;
                }
            }
        }
        .machines-dv2{
            background-color: #ccc;
            span:nth-child(1){
                float: right;
                padding-right: 18px;
                color: #666;
                padding-top: 12px;
                font-size: 28px;
            }
            .machines-dvyi{
                padding: 80px 0;
                 h3{
                text-align: center;
                padding-bottom: 12px;
                font-size: 28px;
                font-weight: normal;
            }
            span{
                display: block;
                text-align: center;
                color: #999;
                font-family: Arial;
                font-size: 30px;
            }
            }
           
        }
        
    }
    
</style>
