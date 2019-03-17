<template>
  <div class="app-container">
    <!-- 顶部 Header 区域 -->
    <!-- <mt-header fixed title="ipfs">
      <span slot="left" @click="goBack" v-show="flag">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>-->
    <!-- 中间的 路由 router-view 区域 -->
    <transition>
      <router-view></router-view>
    </transition>

    <!-- 底部 Tabbar 区域 -->
     <tabbar v-show="flag" class="tabber-p">
      <tabbar-item link="/home">
        <img slot="icon" src="./assets/mall.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item show-dot link="/member">
         <img src="assets/mall.png" alt="">
        <span slot="label">商城</span>
      </tabbar-item>
      <tabbar-item selected link="/Orepool">
        <img src="assets/Ore pool.png" alt="">
        <span slot="label">矿池</span>
      </tabbar-item>
      <tabbar-item badge="2" link="/search">
         <img src="assets/mine .png" alt="">
        <span slot="label">News</span>
      </tabbar-item>
    </tabbar>
    <!-- <nav class=" mui-bar mui-bar-tab asd" v-show="flag" ref="asdf">
			<router-link class="mui-tab-item-llb" to="/home">
				<span class="mui-icon ">
        
          <img src="@/assets/Home page.png" alt="">
            <img src="@/assets/Home page  hold.png" alt="">
        </span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/member">
				<span class="mui-icon ">
          <img src="@/assets/mall.png" alt="">
          <img src="@/assets/mall -hold.png" alt="">

        </span>
				<span class="mui-tab-label">商城</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/Orepool">
				<span class="mui-icon t">
					<img src="@/assets/Ore pool.png" alt="">
					<img src="@/assets/Ore pool -hold.png" alt="">
				</span>
				<span class="mui-tab-label">矿池</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/search">
				<span class="mui-icon ">
          <img src="@/assets/mine .png" alt="">
          <img src="@/assets/mine-hold.png" alt="">
        </span>
				<span class="mui-tab-label">我的</span>
			</router-link>
    </nav> -->
    <!-- <mt-tabbar v-model="selected" v-show="flag">
      <mt-tab-item id="外卖">
        <img src="@/assets/Home page.png" alt>
        <img src="@/assets/Home page  hold.png" alt class="posa" v-show="falge">
        <span @click="change">首页</span>
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img src="@/assets/mall.png" alt>
        <img src="@/assets/mall -hold.png" alt class="posa1" v-show="falge1">
        <span @click="change1">商城</span>
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img src="@/assets/Ore pool.png" alt>
        <img src="@/assets/Ore pool -hold.png" alt class="posa2" v-show="falge2">
        <span @click="change2">矿池</span>
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img src="@/assets/mine .png" alt>
        <img src="@/assets/mine-hold.png" alt class="posa3" v-show="falge3">
        <span @click="change3">我的</span>
      </mt-tab-item>
    </mt-tabbar> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true,
      falge: false,
      falge1: false,
      falge2: false,
      falge3: false
    };
  },
  created() {
    // this.flag = this.$route.path === "/home" ? false : true;
    let w = document.documentElement.clientHeight;
    console.log(w, "w");
    var asss = w - "50px";
  },
  methods: {
    change() {
      this.$router.push({ path: "/home" });
      this.falge = true;
      this.falge1 = false;
      this.falge2 = false;
      this.falge3 = false;
    },
    change1() {
      this.$router.push({ path: "/member" });
      this.falge1 = true;
      this.falge = false;
      this.falge2 = false;
      this.falge3 = false;
    },
    change2() {
      this.$router.push({ path: "/Orepool" });
      this.falge2 = true;
      this.falge1 = false;
      this.falge = false;
      this.falge3 = false;
    },
    change3() {
      this.$router.push({ path: "/search" });
      this.falge3 = true;
      this.falge1 = false;
      this.falge2 = false;
      this.falge = false;
    },
    goBack() {
      // 点击后退
      this.$router.go(-1);
    }
  },
  watch: {
    "$route.path": function(newVal) {
      if (
        newVal === "/home" ||
        newVal === "/member" ||
        newVal === "/Orepool" ||
        newVal === "/search"
      ) {
        this.flag = true;
      } else {
        this.flag = false;
      }
    }
  }
};
</script>


<style lang="less" scoped>
.mint-header {
  z-index: 99;
}
.app-container {
  // padding-top: 60px;
  padding-bottom: 50px;
  overflow-x: hidden;
  height: 100%;
  .mui-bar {
    box-shadow: none !important;
    background-color: #fff !important;
    z-index: 100000000000000000000;
    position: none !important;
  }
  .weui-tabbar{
    position: fixed !important;
  }
  .asd {
    position: fixed;
   bottom: 0;
    left: 0;
    background-color: #fff;
  }
  .mintui {
    color: #ccc !important;
  }
  .mint-tab-item-label {
    img {
      display: block;
      margin-left: 0.32rem;
    }
    span {
      color: #999;
      display: block;
      margin-top: 2px;
    }
  }
  .tabber-p{
    .weui-tabbar__label{
      p{
      margin-bottom: 0 !important;
    }
    }
    
  }
  .mint-tabbar {
    background-color: #fff;
  }
  .posa {
    position: absolute;
    left: 0;
    top: 7px;
  }
  .posa1 {
    position: absolute;
    left: 0.8rem;
    top: 7px;
  }
  .posa2 {
    position: absolute;
    left: 1.6rem;
    top: 7px;
  }
  .posa3 {
    position: absolute;
    right: 0.32rem;
    top: 7px;
  }
}
.mint-tabbar > .mint-tab-item.is-selected {
  background-color: #fff !important;
}

.v-enter {
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.2s ease;
}

// // 该类名，解决 tabbar 点击无法切换的问题
// .mui-bar-tab .mui-tab-item-llb.mui-active {
//   color: #007aff;
// }

.mui-bar-tab .mui-tab-item-llb {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}

.mui-bar-tab .mui-tab-item-llb .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
  img:nth-child(2) {
    position: absolute;
    top: 0;
    left: 2px;
    display: none;
  }
}
.mui-bar-tab .mui-tab-item-llb .mui-icon:hover img:nth-child(2) {
  display: block;
}
.mui-bar-tab .mui-tab-item-llb .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
.mui-bar-tab .mui-tab-item-llb .mui-icon ~ .mui-tab-label[data-v-7ba5bd90] {
  // margin-left: 10px;
}
</style>
