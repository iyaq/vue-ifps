import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from '@/components/tabbar/HomeContainer.vue'
import MemberContainer from '@/components/tabbar/MemberContainer.vue'
import SearchContainer from '@/components/tabbar/SearchContainer.vue'
import Orepool from '@/components/tabbar/Orepool.vue'
import listmachines from '@/components/machines/listmachines'
import listmarket from '@/components/machines/listmarket'
import intercalate from '@/components/intercalate/intercalate'
import vipintercalate from '@/components/intercalate/vipintercalate'
import invite from '@/components/intercalate/invite'
import Mycoin from '@/components/jinbi/Mycoin'
import oneifon from '@/components/jinbi/oneifon'
import lainxi from '@/components/jinbi/lainxi'
import ifonall from '@/components/jinbi/ifonall'
import realname from '@/components/jinbi/realname'
import authentication from '@/components/jinbi/authentication'
import setfocus from '@/components/jinbi/setfocus'
import InviteFriends from '@/components/jinbi/InviteFriends'
import tixian from '@/components/jinbi/tixian'
import huzhuan from '@/components/jinbi/huzhuan'
import SuperMiners from '@/components/jinbi/SuperMiners'
import xianjin from '@/components/jinbi/xianjin'
import USTDzhuan from '@/components/jinbi/USTDzhuan'
import Identity from '@/components/jinbi/Identity'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/search', component: SearchContainer },
    { path: '/Orepool', component: Orepool },
    { path: '/machines', component: listmachines },
    { path: '/listmarket', component: listmarket },
    { path: '/intercalate', component: intercalate },
    { path: '/vipintercalate', component: vipintercalate },
    { path: '/invite', component: invite },
    { path: '/Mycoin', component: Mycoin },
    { path: '/oneifon', component: oneifon },
    { path: '/realname', component: realname },
    { path: '/authentication', component: authentication },
    { path: '/lainxi', component: lainxi },
    { path: '/ifonall/:id', component: ifonall },
    { path: '/setfocus', component: setfocus },
    { path: '/InviteFriends', component: InviteFriends },
    { path: '/tixian', component: tixian },
    { path: '/huzhuan', component: huzhuan },
    { path: '/SuperMiners', component: SuperMiners },
    { path: '/xianjin', component: xianjin },
    { path: '/USTDzhuan', component: USTDzhuan },
    { path: '/Identity', component: Identity },
  ]
})
