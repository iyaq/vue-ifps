<template>
    <div class="authentication">
        <header>
            <img src="@/assets/fanhuianniu.png" alt="" @click="goBack">
            <span >身份验证</span>
        </header>
        <div class="content">
            <div class="null"></div>
            <div class="step">
                <step v-model="step" background-color='#fbf9fe' gutter="20px">
                    <step-item title=""></step-item>
                    <step-item title=""></step-item>
                    <step-item title=""></step-item>
                </step>

                <div v-show="step == 1" class="first">
                    <p class="note">拍摄上传您的二代身份证</p>
                    <div class="rz-picter">
                        <img :src="avatar" class="img-avatar">
                        <input type="file" name="avatar" id="uppic" accept="image/gif,image/jpeg,image/jpg,image/png" @change="changeImage($event)" ref="avatarInput" class="uppic">
                    </div>
                    <p class="uploadpostive">上传正面身份证</p>
                    <div class="rz-picter">
                        <img :src="avatar" class="img-avatar">
                        <input type="file" name="avatar" id="uppic" accept="image/gif,image/jpeg,image/jpg,image/png" @change="changeImage($event)" ref="avatarInput" class="uppic">
                    </div>
                    <p class="uploadpostive">上传反面身份证</p>
                </div>
                <div v-show="step == 2" class="second">
                    <div class="left">+86</div>
                    <div class="right">
                        <group>
                            <x-input  v-model="telphone" placeholder="请输入电话号码"></x-input>
                        </group>
                    </div>
                </div>
                <div v-show="step == 3" class="third">
                    <group>
                        <x-input title="银行卡号" v-model="banknum" placeholder="请输入银行卡号"></x-input>
                        <x-input title="持卡银行" v-model="bank" placeholder="请选择银行"></x-input>
                    </group>
                </div>
                <div class="btn_wrap">
                    <x-button type="primary" @click.native="nextStep" v-if="step == 1 || step == 2">下一步</x-button>
                    <x-button type="primary" @click.native="nextStep" v-else>确认提交</x-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Step, StepItem,XButton,XInput  } from 'vux'
    // import Uploader from 'vux-uploader'
    export default {
        name: "authentication",
        components: {
            Step,
            StepItem,
            XButton,
            XInput
            // Uploader,
        },
        data(){
            return{
                step:1,
                varmax:'1',
                images:[],
                uploadUrl:'',
                params:null,
                telphone:'',
                banknum:'',
                bank:'',
                avatar: require('../../assets/icon_add.png'),
            }
        },
        methods:{
            goBack() {
                // 点击后退
                this.$router.go(-1);
            },
            nextStep () {
                if(document.getElementById('uppic').value.length == '') {
                    alert('请上传图片');
                    return
                }else{
                    this.step ++;
                }

            },
            changeImage(e) {
                var file = e.target.files[0]
                var reader = new FileReader()
                var that = this
                reader.readAsDataURL(file)
                reader.onload = function(e) {
                    that.avatar = this.result
                }
            },
        }
    }
</script>

<style scoped lang="less">
    .authentication{
        height: 100%;
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
            background:rgba(255,255,255,1);
            height: calc(100% - 168px);
            .null{
                height: 1px;
            }
            .step{
                .btn_wrap {
                    padding: 0 1rem;
                    width:531px;
                    height:80px;
                    background:rgba(248,168,65,1);
                    margin: 0 auto;
                    font-size:32px;
                    font-weight:bold;
                    color:rgba(255,255,255,1);
                    border-radius: 1px;
                    position: fixed;
                    bottom: 130px;
                    left: 50%;
                    margin-left: -265.5px;
                }
                .first{
                    .note{
                        font-size:32px;
                        font-weight:bold;
                        color:rgba(153,153,153,1);
                        text-align: center;
                    }
                    .rz-picter{
                        width:350px;
                        height:180px;
                        background:rgba(245,247,249,1);
                        border:1px solid rgba(204,204,204,1);
                        margin: 60px auto;
                        margin-bottom: 20px;
                        /*padding-top: 65px;*/
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        position: relative;
                        .uppic {
                            height: 50px;
                            width: 150px;
                            margin: 0 auto;
                            opacity: 0;
                            z-index: 99999;
                        }
                        .img-avatar {
                            position: absolute;
                            /*height: 50px;
                            width: 50px;
                            display: block;
                            margin: 0 auto;
                            margin-top: 65px;*/
                            max-width: 100%;
                            max-height: 100%;
                        }
                    }
                    .uploadpostive{
                        margin-top: 20px;
                        text-align: center;
                        font-size:28px;
                        font-weight:bold;
                        color:rgba(51,51,51,1);
                    }
                }
                .second{
                    margin-left: calc((100% - 495px)/2);
                    margin-top: 152px;
                    .left{
                        float: left;
                        width: 108px;
                        border-bottom: 4px solid rgba(245,247,249,1);
                        font-size:36px;
                        font-weight:bold;
                        color:rgba(51,51,51,1);
                        text-align: center;
                        padding-bottom: 24px;
                        margin-right: 27px;
                    }
                    .right{
                        float: left;
                        width: 360px;
                        border-bottom: 4px solid rgba(245,247,249,1);
                        padding-bottom: 24px;
                    }
                    &:after{
                        content:'';
                        display: block;
                        clear: both;
                        height: 0;
                    }
                }
                .third{
                    margin-left: calc((100% - 515px)/2);
                    margin-right: calc((100% - 515px)/2);
                }
            }
        }
    }
</style>