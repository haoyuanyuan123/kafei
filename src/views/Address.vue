<template>
  <!-- 消息中心顶部导航 -->
  <div class="xbg">
    <mt-header title="我的地址">
      <router-link to="/me" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="xitp">
      <img src="../assets/img/tt.png" slot="icon" />
      <p>您还没有地址信息</p>
      <div @click="addss">
        <mt-button class="dd" type="primary" size="large">+添加地址</mt-button>
      </div>
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
.dd {
  margin-top: 130px;
  border-radius:20px;
  
}
</style>
<script>
export default {
    methods:{
        addss() {
    this.$router.push("/addss");
    },
    }
}
</script>
