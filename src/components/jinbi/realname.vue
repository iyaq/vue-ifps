<template>
    <div class="realname">
        <header>
            <img src="@/assets/fanhuianniu.png" alt="" @click="goBack">
            <span >实名信息</span>
        </header>
        <div class="content">
            <group label-width="6em" label-margin-right="2em" label-align="left" class="first">
                <x-input title="姓名" v-model="name" text-align="right"></x-input>
                <selector ref="defaultValueRef" title="证件类型" direction="rtl" :options="idtypedata" v-model="idtype"></selector>
                <x-input title="证件号码" v-model="idnum"  text-align="right"></x-input>
            </group>
            <group label-width="6em" label-margin-right="2em" label-align="left" class="first">
                <x-input title="实名手机号" v-model="tel"></x-input>
            </group>
            <group label-width="6em" label-margin-right="2em" label-align="left" class="first">
                <x-input title="银行卡号" v-model="banknum"  text-align="right"></x-input>
                <selector ref="defaultValueRef" title="持卡银行" direction="rtl" :options="bankdata" v-model="bank"></selector>
            </group>
        </div>

        <!--临时跳转：-->
        <span @click="gotoauthentication">跳转到身份验证</span>
    </div>
</template>

<script>
    import { Group,Cell, XInput,Selector  } from 'vux'
    export default {
        name: "realname",
        components: {
            Group,Cell, XInput,Selector
    },
        data(){
            return{
                name:'',
                idtypedata: [{key: 'idcard', value: '身份证'}, {key: 'drivinglicense', value: '驾照'}],
                idtype:'idcard',
                idnum:'',
                tel:'',
                banknum:'',
                bankdata:[{key: 'CCB', value: '中国建设银行'}, {key: 'BOC', value: '中国银行'}],
                bank:'CCB'
            }
        },
        methods:{
            goBack() {
                // 点击后退
                this.$router.go(-1);
            },
            gotoauthentication(){
                this.$router.push({path:'/authentication'})
            }

        }
    }
</script>

<style scoped lang="less">
    .realname{
        header{
            background-color: #fff;
            width: 100%;
            padding-top: 64px;
            padding-bottom: 24px;
            height: 128px;
            box-sizing: border-box;
            /*padding: 0 12px;*/
            img{
                vertical-align:bottom;
                margin-left: 19px;
                display: inline-block;
                height: 38px;
                margin-bottom: 1px;
            }
            span{
                line-height: 40px;
                color:rgba(51,51,51,1);
                font-size: 40px;
                font-family: PingFang-SC-Bold;
                font-weight: bold;
                padding-left: 19px;
            }
        }
        .content{
            width: 94%;
            margin: 20px auto;
        }
    }
</style>