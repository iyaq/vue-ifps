<template>
<!-- 会员闪云 -->
    <div class="vipintercalate">
        <div class="vipintercalate-dv">
            <span class="vipintercalate-span">会员闪云</span>
        </div>
        <div class="vipintercalate-dv1">
            <div class="vipintercalate-gao">
                <span>高级会员</span>
                <h4>LV1</h4>
            </div>
        </div>
        <div class="vipintercalate-dv2">
            <div class="line"></div>
            <ul>
                <li>
                    <span>LV1</span>
                </li>
                <li>
                    <span>LV2</span>
                </li>
                <li>
                    <span>LV2</span>
                </li>
                <li>
                    <span>LV3</span>
                </li>
                <li>
                    <span>LV2</span>
                </li>
                <li>
                    <span>LV2</span>
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
    }
}
</script>
<style lang="less" scoped>
.vipintercalate{
    .vipintercalate-dv{
        background-color: #ccc;
        width: 100%;
        height: 88px;
        .vipintercalate-span{
            display: block;
            text-align: center;
            line-height: 88px;
            font-size: 24px;
            font-weight: 700;
        }
    }
    .vipintercalate-dv1{
        padding-top: 20px;
        width: 98%;
        margin: 0 auto;
        
        .vipintercalate-gao{
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            overflow: hidden;
            height: 88px;
            width: 100%;
            line-height: 88px;
            background-color: #ccc;
            padding: 0 18px;
            span{
                font-size: 20px;
                font-weight: 700;
                display: block;
                float: left;
            }
            h4{
                display: block;
                float: right;
                line-height: 88px;
            }
        }
    }
    .vipintercalate-dv2{
        overflow: hidden;
        // background-color: skyblue;
        margin: 0 auto;
        width: 98%;
        height: 200px;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        position: relative;
        .line{
            height: 6px;
            width: 98%;
            margin: 0 auto;
            margin-top: 60px;
            background-color: #ccc;
        }
        ul{
            margin: 0;
            padding: 0;
            overflow: hidden;
            position: absolute;
            top: 35px;
            left: 0;
            z-index: 10;
            width: 98%;
            li{
                float: left;
                list-style: none;
                width:56px;
                height: 56px;
                border-radius: 50%;
                background-color: #fff;
                // margin-right: ;
                span{
                    line-height: 56px;
                    // padding: 16px;
                    text-align: center;
                    display: block;
                }
            }
            li:last-child{
                margin-right: 0;
            }
            
        }

    }
}

</style>
