<template>
    <div class="bj">
        <div class="bja">
            <!-- tou -->
            <div class="head">
                <mt-header class="heada" title="账户余额" >
                    <router-link slot="left" to="/me">
            <mt-button class="backp" type="primary" icon="back"></mt-button>
                    </router-link>
                </mt-header>
            </div>
            <!--  -->
            <div class="backdrop">
                <div class="backa">
                    <img src="../assets/img/jine.png" alt="">
                </div>
                <div class="backb"><p>0</p></div>
                <div class="backc"><p>总金额(元)</p></div>
                <div class="backd">
                <div >
                    <p>0</p>
                    <p>可用余额(元)</p>
                </div>
                <div><p>0</p>
                    <p>可用余额(元)</p></div>
                </div>
                <div >
                    <mt-button class="backe" type="primary" size="large">门店充值</mt-button>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .bj{
        background-color: #f0f0f0;
        min-height: 100vh;
    }
    .bja{
        background: url("../assets/img/back.png");
        height:185px;
        background-size: cover;
        background-position: 100% 100%;
    }
    .head /deep/ .mint-header {
    background-color:rgba(0, 0, 0, 0);
    font-size: 20px;
    padding: 45px 5px;
    letter-spacing:2px;
    }
    .backp /deep/ .mintui{
    font-size: 25px;

}
    .backdrop{
        background-color: #fff;
        margin: 0 10px;
        border-radius: 5px;
        text-align: center;
        display: flex;
        flex-direction: column;
    }
    .backa{
        margin-top: 35px;
    }
    .backa>img{
        height: 30px;
        height: 30px;
    }
    .backb{
        font-size:50px;
        margin-top: 25px;
    }
    .backc{
        letter-spacing:2px;
        margin-top: 5px;
    }
    .backd{
        display: flex;
        align-self: center;
        margin-top: 60px;
        position: relative;
    }
    .backd::before{
        content: "";
        width: 1px;
        height:30px;
        position: absolute;
        top: 8px;
        right: 190px;
        background: #cdcdcd;
        vertical-align: middle
    }
    .backd p{
        margin:0  50px;
    }
    .backe{
        margin: 80px auto;
        display: block;
        width: 90%;
        background-color:#6e7ed6;
        border-radius: 33px;
        letter-spacing:1px;
        font-family: 'Courier New', Courier, monospace;
    }
</style>