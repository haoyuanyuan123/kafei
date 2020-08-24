<template>
  <!-- 消息中心顶部导航 -->
  <div class="xbg">
    <mt-header title="可用优惠券">
      <router-link to="/me" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="bar">
    <mt-navbar v-model="active" >
      <mt-tab-item id="1">饮品/食品券</mt-tab-item>
      <mt-tab-item id="2">电商潮品券</mt-tab-item>
    </mt-navbar>
    </div>
    <!-- 面板区域开始 -->
    <div class="xitp">
      <mt-tab-container v-model="active" >
        <mt-tab-container-item id="1">
          <div>
            <img src="../assets/img/yhq.png" slot="icon" />
          </div>
          <p>暂无可用优惠券</p>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <div class="xitp">
      <mt-tab-container v-model="active">
        <mt-tab-container-item id="2">
          <div>
            <img src="../assets/img/yhq.png" slot="icon" />
          </div>
          <p>暂无可用优惠券</p>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<style scoped>
.xbg {
  background-color: #f5f5f5;
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
  letter-spacing: 2px;
}
.xitp {
  height: 220px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.xitp p {
  font-family: 宋体;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.4);
}
.xitp img {
  display: block;
  height: 200px;
  padding-bottom: 12px;
}
  .bar /deep/ .mint-navbar {
    background-color:#6e88c5;
    border-radius:25px;
    margin: 0 10px;
    border: 2px solid #6e88c5;
    height: 32px;
}
    .bar /deep/.mint-navbar .mint-tab-item.is-selected {
    background-color: #f0f0f0;
    margin: 0px;
    border: 0px;
    border-radius: 25px;
}
.bar /deep/.mint-navbar .mint-tab-item {
    font-size: 15px;
    padding: 0px;
}
.bar /deep/ .mint-tab-item-label {
    color: inherit;
    font-size: 13px;
    line-height: 32px;
}
</style>
<script>
export default {
  data() {
    return {
      active: "1"
    };
  }
};
</script>
