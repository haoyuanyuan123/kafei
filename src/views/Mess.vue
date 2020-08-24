<template>
<!-- 消息中心顶部导航 -->
    <div class="xbg">
        <mt-header title="消息中心">
            <router-link to="/me" slot="left">
                <mt-button icon="back" ></mt-button>
            </router-link>
        </mt-header>
        <div class="xitp">
        <img  src="../assets/img/tt.png" slot="icon">
        <p>您还没有消息哦~</p>
        </div>
    </div>
</template>
<style scoped>
    .xbg{
        background-color:#f5f5f5;
        overflow: visible;
        height: 100vh;
        position: relative;
        overflow: hidden;
        
    }
    .xbg /deep/ .mint-header {
    background-color: rgba(0, 0, 0, 0);
    color: #000;
    font-size: 16px;
    margin-top: 15px;
    letter-spacing:2px;
}
    .xitp{
        height: 220px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        text-align: center;
        
    }
    .xitp p{
        font-family: 宋体;
        font-size: 12px;
        color: rgba(0, 0, 0, .4);
    }
    .xitp img{
        display: block;
        height: 200px; 
        padding-bottom:12px;
    }
</style>
