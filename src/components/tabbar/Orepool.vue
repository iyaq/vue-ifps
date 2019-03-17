<template>
    <!-- 矿池 -->
    <div class="Orepool">
        <div class="content">
            <div class="Orepool-header">
                <span >矿池</span>
            </div>
            <div class="Orepool-dv">
                <img src="@/assets/wunei.png" alt="">
                <div class="Orepool-dv1">
                    矿池测试中，敬请期待
                </div>
            </div>
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

    }
}
</script>
<style lang="less" scoped>
    .Orepool, .content{
        position: relative;
        overflow: hidden;
            .content {
                position: fixed;
                top: 0;
                left: 0;
                bottom: 48px; /*距离底部的距离为底部盒子的高度，自己也可以设置*/
                overflow-y: scroll;
                width: 100%;
                height: auto;
                -webkit-overflow-scrolling: touch; /*这句是为了滑动更顺畅*/
                // background-color: #fff;
            }
        .Orepool-header{
            // position: fixed;
            top: 0;
            left: 0;
            z-index: 10;
            background-color: #fff;
            height: 64px;
            width: 100%;
            padding: 0 12px;
            span{
                line-height: 74px;
                font-size: 24px;
                font-weight: 400;
                padding: 6px;
            }
        }
        .Orepool-dv{
            width: 100%;
            // height: 589.86px;
            img{
                width: 100%;
                height: 100%;
                display: block;
            }
        }
        .Orepool-dv1{
            position: absolute;
            bottom: 150px;
            left: 90px;
            font-size: 18px;
            color: #9197A8;
        }
    }
</style>