<template>
  <!-- 首页 -->
  <div class="HomeContainer">
    <div class="">
      <div class="HomeContainer-dv">
        <span>首页</span>
      </div>
      <div class="HomeContainer-dv1">
        <mt-swipe :auto="4000" :show-indicators="false">
          <!-- v-for="item in list" :key="item.id" -->
          <mt-swipe-item>
            <img src="@/assets/banner.png" alt>
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="@/assets/banner.png" alt>
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="@/assets/banner.png" alt>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="HomeContainer-dv2" id="wrap">
        <img src="@/assets/toutiao.png" alt>
        <p id="first">安徽省就服你撒的积分拿手机发你的骄傲萨凡纳京东方</p>
      </div>
      <div class="HomeContainer-dv3">
        <ul>
          <li>
            <img src="@/assets/zongsuanli.png" alt>
          </li>
          <li>
            <img src="@/assets/zuorishouyi.png" alt>
          </li>
        </ul>
      </div>
      <div class="HomeContainer-dv4">
        <img src="@/assets/quanqiuzongsuanli.png" alt>
      </div>
      <div class="HomeContainer-dv5">
        <img src="@/assets/zhongjianBanner .png" alt>
      </div>
      <div class="HomeContainer-dv6">
        <span>我们的优势</span>
      </div>
      <div class="HomeContainer-dv7">
        <img src="@/assets/youshi.png" alt>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    };
  }
};
</script>
<script type="text/javascript">
export default {
  data() {
    return {
      list: []
    };
  }
};
</script>
<style lang="less" scoped>
.HomeContainer {
  background-color: #fff;
  // position: relative;
  .mint-swipe {
    height: 144px !important;
    .mint-swipe-item {
      text-align: center;
      background-color: skyblue;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .content {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 48px; /*距离底部的距离为底部盒子的高度，自己也可以设置*/
    overflow-y: scroll;
    width: 100%;
    height: auto;
    -webkit-overflow-scrolling: touch; /*这句是为了滑动更顺畅*/
    background-color: #fff;
  }
  .HomeContainer-dv {
    span {
      display: block;
      padding-top: 0.35rem;
      padding-left: 0.1rem;
      padding-bottom: 0.13rem;
      font-size: 24px;
      color: #333;
      font-weight: 700;
    }
  }
  .HomeContainer-dv1 {
    width: 94%;
    margin: 0 auto;
  }
  .HomeContainer-dv2 {
    width: 94%;
    margin: 0 auto;
    padding-top: 0.08rem;
    padding-bottom: 0.08rem;
    background-color: #fff;
    img {
      display: inline-block;
      float: left;
      margin-top: 5px;
      margin-right: 6px;
    }
    p {
      width: 2.5rem; /*必须设置宽度*/
      overflow: hidden; /*溢出隐藏*/
      text-overflow: ellipsis; /*以省略号...显示*/
      white-space: nowrap; /*强制不换行*/
      font-size: 13px;
      color: #999;
      letter-spacing: 1px;
    }
  }
  .HomeContainer-dv3 {
    width: 94%;
    margin: 0 auto;
    margin-bottom: 0.03rem;
    background-color: #fff;
    ul {
      margin: 0;
      padding: 0;
      padding-bottom: 0.04rem;
      overflow: hidden;
      li {
        list-style: none;
        float: left;
      }
      li:nth-child(2) {
        float: right;
      }
    }
  }
  .HomeContainer-dv4 {
    width: 94%;
    margin: 0 auto;
    background-color: #fff;
    padding-bottom: 0.04rem;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .HomeContainer-dv5 {
    width: 94%;
    margin: 0 auto;
    background-color: #fff;
    margin-bottom: 0.04rem;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .HomeContainer-dv6 {
    width: 94%;
    margin: 0 auto;
    background-color: #fff;
    padding-bottom: 0.16rem;
    padding-top: 0.08rem;
    span {
      font-size: 18px;
      color: #333;
      display: block;
    }
  }
  .HomeContainer-dv7 {
    width: 94%;
    margin: 0 auto;
    background-color: #fff;
    margin-bottom: 0.03rem;
    // position: relative;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
