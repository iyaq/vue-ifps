<template>
    <!-- 商品详情页 -->
    <div class="ifonall">
        <div class="oneifon-header">
            <img src="@/assets/fanhuianniu.png" alt="" @click="goBack">
            <span >产品信息</span>
        </div>
        <div class="ifonall-dv">
            <ul>
                <li @click="change1">基本信息</li>
                <li @click="change">详细配置</li>
                <li @click="change2">包装售后</li>
            </ul>
        </div>
        <div class="ifonall-dv1">
            <img :src="homeProductImg" alt="">
        </div>
        <div class="ifonall-dv2">
            <span class="ifonall-sp"></span>
            <span class="ifonall-sp1">基本信息</span>
        </div>
        <div class="ifonall-dv3">
            <span>{{productName}}</span>
            <span>销售价格:￥{{productUnitPrice}}</span>
            <span>特惠价格:￥{{productPreferentialPrice}}</span>
        </div>
        <div class="ifonall-dv4">
            <img :src="productDetail" alt="" v-show="falg">
            <img :src="prodcutProperty" alt="" v-show="falg1">
            <span class="ifonall-ll" v-show="falg2" v-html="afterSaleService">{{afterSaleService}}</span>
        </div>
        <div class="ifonall-dv5" ref="ifonall">
            <span>
                立即购买
            </span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            falg:true,
            falg1:false,
            falg2:false,
            uid:this.$route.params.id,
            homeProductImg:'',
            productName:'',
            productUnitPrice:'',
            productPreferentialPrice:'',
            productDetail:'',
            prodcutProperty:'',
            afterSaleService:''
        }
    },
    methods:{
        goBack() {
            // 点击后退
            this.$router.go(-1);
        },
        getProductDetail(){
            console.log(this.uid,'this.uid')
            this.axios.post("getProductDetail?productId="+this.uid).then((res)=>{
                console.log(res,'详细参数')
                if(res.data.data === null || res.data.data == "undefined"){
                    return
                }else{
                    this.homeProductImg = res.data.data.homeProductImg
                    this.productName = res.data.data.productName
                    this.productUnitPrice = res.data.data.productUnitPrice
                    this.productPreferentialPrice = res.data.data.productPreferentialPrice
                    this.productDetail = res.data.data.productDetail
                    this.prodcutProperty = res.data.data.prodcutProperty
                    this.afterSaleService = res.data.data.afterSaleService
                }
            })
        },
        change(){
            this.falg = false
            this.falg1 = true
            this.falg2 = false
        },
        change1(){
            this.falg = true
            this.falg1 = false
            this.falg2 = false
        },
        change2(){
            this.falg = false
            this.falg1 = false
            this.falg2 = true
        }
    },
    mounted(){
        this.getProductDetail()
        let h = document.documentElement.scrollTop || document.body.scrollTop;
        console.log(h,'h')
        // if(h==562){
        //     let ww = this.$refs.ifonall
        //     console.log(ww,'ww')
        //     ww.style.display = "block";
        // }else{
            
        //     let ww = this.$refs.ifonall
        //     console.log(ww,'ww')
        //     ww.style.display = "none";
        // }
    }
}
</script>
<style lang="less" scoped>
    .ifonall{
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
        .ifonall-dv{
            background-color: #fff;
            margin-bottom: 10px;
            padding-top: 10px;
            padding-bottom: 8px;
            ul{
                margin: 0;
                padding: 0;
                overflow: hidden;
                width: 96%;
                margin: 0 auto;
                li{
                    list-style: none;
                    float: left;
                    font-size: 14px;
                    text-align: center;
                    padding: 12px 0.24rem;
                    color: #333333;
                }
                li:hover{
                    background-color: #396EFF;
                    color: #fff;
                }
                li:nth-child(1){
                     border-left:1px solid #396EFF;
                     border-top:1px solid #396EFF;
                     border-bottom:1px solid #396EFF;
                }
                li:nth-child(2){
                     border-left:1px solid #396EFF;
                     border-top:1px solid #396EFF;
                     border-bottom:1px solid #396EFF;
                }
                li:nth-child(3){
                     border-right:1px solid #396EFF;
                     border-left:1px solid #396EFF;
                    padding: 12px 0.32rem;
                     border-top:1px solid #396EFF;
                     border-bottom:1px solid #396EFF;
                }
            }
        }
        .ifonall-dv1{
            width: 96%;
            margin: 0 auto;
            background-color: #fff;
            margin-bottom: 10px;
            height: 240px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .ifonall-dv2{
            margin-top: 10px;
            padding-top: 12px;
            width: 96%;
            margin: 0 auto;
            background-color: #fff;
            overflow: hidden;
            .ifonall-sp{
                height: 17px;
                width: 7px;
                display: block;
                background-color: #396EFF;
                float: left;
                margin-top: 3px;
                margin-right: 18px;
                }
            .ifonall-sp1{
                float: left;
                font-size: 18px;
                color: #333;
                font-weight: 700;
            }
        }
        .ifonall-dv3{
            width: 96%;
            margin: 0 auto;
            background-color: #fff;
            padding-left: 26px;
            padding-top: 13px;
            padding-bottom: 20px;
            margin-bottom: 13px;
            span{
                display: block;
            }
            span:nth-child( 1){
                font-weight: 700;
                font-size: 17px;
                color: #333;
                padding-bottom: 6px;
            }
            span:nth-child(2){
                text-decoration: line-through;
                font-size: 16px;
                color: #999;
            }
             span:nth-child(3){
                font-size: 16px;
                color: #F96046;
            }
        }
        .ifonall-dv4{
            width: 96%;
            margin: 0 auto;
            img{
                width: 100%;
                height: 100%;
                display: block;
            }
            .ifonall-ll{
                background-color: #fff;
                display: block;
            }
        }
        .ifonall-dv5{
            // position: fixed;
            // bottom:50px;
            // left: 13px;
            // display: none;
            span{
                display: block;
                padding: 20px 150px;
                background-color: #396EFF;
                color: #F8F8F8;
                font-size: 16px;
                letter-spacing:2px;
            }
        }
    }
</style>