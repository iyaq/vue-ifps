<template>
  <!-- 矿机管理 -->
  <div class="MemberContainer">
      <div class="content">
          <div class="MemberContainer-header">
            <span >商城</span>
          </div>
    <div class="Member-dv">
        <ul>
            <li v-for=" item in listifon" :key="item.id">
                <img :src="item.homeProductImg" alt="">
                <div class="Member-dv1">
                    <span>{{item.productName}}</span>
                    <span class="Member-images" @click="change"><a :href="item.productPictures"><img src="@/assets/dingwei.png" alt="">陕西省未央区矿场</a></span>
                    <span>{{item.productPreferentialPrice}}元 <i>{{item.productUnitPrice}}元</i></span>
                    <span>已售{{item.productType}}台</span>
                </div>
                <div class="Member-dv2" @click="change(item.id)">
                    查看详情
                </div>
            </li>
        </ul>
    </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listifon:[]
    }
  },
  methods: {
    change(id) {
      this.$router.push({ path:  `/ifonall/${id}`});
    },
    Allifon(){
      this.axios.post("getProductList").then((res) => {
        console.log(res,'商品')
        if(res.data.data == null || res.data.data == 'undefined'){
          return
        }else{
          this.listifon = res.data.data
          console.log( this.listifon,'商品lllll')
        }
      })  
    },
   
  },
  created(){
      //从后台获取数据
      this.Allifon()
    }
};
</script>
<style lang="less" scoped>
.MemberContainer, .content {
    .content {
    position: fixed;
    top: 0;
    left: 0;
    // bottom: 48px; /*距离底部的距离为底部盒子的高度，自己也可以设置*/
    overflow-y: scroll;
    width: 100%;
    height: auto;
    -webkit-overflow-scrolling: touch; /*这句是为了滑动更顺畅*/
    // background-color: #fff;
  }

  .MemberContainer-header {
    // position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: #fff;
    height: 64px;
    width: 100%;
    padding: 0 12px;
    span {
      line-height: 74px;
      font-size: 24px;
      font-weight: 400;
      padding: 6px;
    }
  }
  .mui-table-view .mui-media-object{
      max-width: 86px;
      height: 86px;
  }
  .Member-dv{
      ul{
          margin: 0;
          padding: 0;
          li{
              list-style: none;
              margin: 8px 0 ;
              overflow: hidden;
              width: 94%;
              margin: 10px auto;
              background-color: #fff;
              padding: 20px 14px;
              position: relative;
              img{
                  float: left;
                  width: 85px;
                  height: 85px;
                  display: block;
              }
              .Member-dv1{
                   padding-left: 14px;
                   overflow: hidden;
                   .Member-images{
                     img{
                       width: 10px;
                       height: 13px;
                       margin-top: 4px;
                       margin-right: 3px;
                     }
                   }
                  span:nth-child(1){
                      font-size: 15px;
                      font-weight: 700;
                      color: #333;
                      display: block;
                  }
                  span:nth-child(2){
                      font-size: 13px;
                      font-weight: 400;
                      color: #999;
                      display: block;
                      a{
                        text-decoration: none;
                        color: #999;
                      }
                  }
                  span:nth-child(3){
                      font-size: 17px;
                      font-weight: 700;
                      color: #F96046;
                      display: block;
                      i{
                          text-decoration:line-through;
                          color: #999;
                          font-size: 13px;
                           font-style:normal
                      }
                  }
                  span:nth-child(4){
                      font-size: 13px;
                      font-weight: 400;
                      color: #999;
                      display: block;
                  }
              }
              .Member-dv2{
                  position: absolute;
                  bottom: 12px;
                  right: 10px;
                  font-size: 13px;
                  color: #396EFF;
                  border: 1px solid #DDD;
                  padding: 1px 2px;
              }
          }
      }
  }
}
</style>
