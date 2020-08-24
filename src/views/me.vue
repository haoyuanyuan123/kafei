<template>
  <div class="bj">
    <div class="bja">
      <!-- 跳转消息中心 -->
      <div class="mess">
        <router-link to="/mess" slot="left">
          <img src="../assets/img/xiaoxi.png" />
        </router-link>
      </div>
      <!-- 跳转个人资料 -->
      <div class="data">
        <router-link to="/data" class="link">
          <img src="../assets/img/00adca5a0d93daa80121985c9ef05f.jpg" />
          <p>
            miss
            <span>&gt;</span>
          </p>
        </router-link>
      </div>
      <!-- ssss -->
      <div>
        <ul class="head">
          <li class="bread" @click="go">
            <p class="heada">
              0
              <span class="headb">元</span>
            </p>
            <p>账户余额</p>
          </li>
          <li class="bread" @click="wallet">
            <p class="heada">
              0
              <span class="headb">张</span>
            </p>
            <p class="headc">咖啡钱包</p>
          </li>
          <li class="bread" @click="coupon">
            <p class="heada">
              0
              <span class="headb">张</span>
            </p>
            <p>优惠券</p>
          </li>
          <li @click="gift">
            <p class="heada">
              0
              <span class="headb">张</span>
            </p>
            <p>礼品卡</p>
          </li>
        </ul>
      </div>
      <!-- ddddddd -->
      <div class="cell">
        <div @click="order">
          <mt-cell class="cellm" title="我的订单">
            <img src="../assets/img/wodedingdan.png" slot="icon" />
          </mt-cell>
        </div>
        <div @click="invoice">
          <mt-cell title="发票管理">
            <img class="fapiao" src="../assets/img/invoice.png" slot="icon" />
          </mt-cell>
        </div>
        <div @click="prompt">
          <mt-cell title="兑换优惠">
            <img src="../assets/img/duihuanquan.png" slot="icon" />
          </mt-cell>
        </div>
        <mt-cell title="我的客服">
          <img src="../assets/img/service.png" slot="icon" />
        </mt-cell>
      </div>
      <!-- ffffff -->
      <div class="hehe">
        <img src="../assets/img/20200618143653.png" slot="icon" />
      </div>
    </div>


    <!-- 0000000000000000 -->
     <mt-tabbar v-model="footertab" fixed>
      <mt-tab-item id="home">
        <span class="iconfont z-icon-zhuye-copy" slot="icon"></span>
        首页
      </mt-tab-item>
      <mt-tab-item id="menu1">
        <span class="iconfont z-icon-icon-" slot="icon"></span>
        菜单
      </mt-tab-item>
      <mt-tab-item id="gwc">
        <span class="iconfont z-icon-weibiaoti--" slot="icon"></span>
        购物车
      </mt-tab-item>
      <mt-tab-item id="me">
        <span class="iconfont z-icon-wode" slot="icon"></span>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<style scoped>

.mint-tabbar > .mint-tab-item.is-selected {
  background-color: #eaeaea;
  color: #232773;
}

.z-icon-zhuye-copy {
  font-size: 24px;
}
.z-icon-weibiaoti-- {
  font-size: 29px;
  -webkit-transform: translate(-4.5px, -2px);
  -moz-transform: translate(-4.5px, -2px);
  -o-transform: translate(-4.5px, -2px);
  -ms-transform: translate(-4.5px, -2px);
  transform: translate(-4.5px, -2px);
}
.z-icon-wode {
  font-size: 22px;
  -webkit-transform: translatey(2px);
  -moz-transform: translatey(2px);
  -o-transform: translatey(2px);
  -ms-transform: translatey(2px);
  transform: translatey(2px);
}
.z-icon-icon- {
  font-size: 27px;
  -webkit-transform: translate(-1px, -2px);
  -moz-transform: translate(-1px, -2px);
  -o-transform: translate(-1px, -2px);
  -ms-transform: translate(-1px, -2px);
  transform: translate(-1px, -2px);
}
.z-icon-icon_chaopin-02 {
  font-size: 21px;
  -webkit-transform: translatey(3px);
  -moz-transform: translatey(3px);
  -o-transform: translatey(3px);
  -ms-transform: translatey(3px);
  transform: translatey(3px);
}





.bj {
  background-color: #f0f0f0;
  min-height: 100vh;
}
.bja {
  background: url("../assets/img/bj01.png");
  height: 185px;
  background-size: cover;
  background-position: 100% 100%;
  background-repeat: no-repeat;
}
.mess {
  overflow: hidden;
}
.mess img {
  float: right;
  margin-top: 20px;
  margin-right: 10px;
}
.data img {
  margin-left: 15px;
  border-radius: 50%;
  height: 40px;
  width: 40px;
}
.data p {
  font-size: 20px;
  margin-left: 10px;
  color: #f0f0f0;
  display: inline-block;
}
.data span {
  margin-left: 15px;
  vertical-align: middle;
}
.data .link {
  display: block;
}
.head {
  background-color: #fff;
  margin: 25px 10px 10px 10px;
  padding: 20px 0px;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  text-align: center;
}
.bread {
  position: relative;
}
.bread::before {
  content: "";
  width: 1px;
  height: 30px;
  position: absolute;
  top: 13px;
  right: -17px;
  background: #cdcdcd;
}
.head p {
  margin-top: 10px;
}
.head .heada {
  color: #0080ff;
  font-size: 20px;
}
.headb {
  font-size: 15px;
  margin-left: 5px;
}
.cell {
  color: #000;
  margin: 0 10px;
  background-size: 120% 0;
}
.cell /deep/ .mint-cell-wrapper {
  background-size: 0;
}
.hehe {
  margin: 15px 10px 30px 10px;
}
.hehe img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
</style>
<script>
export default {
  data(){
    return{
      footertab:"me"
    }
  },
  methods: {
    go() {
      this.$router.push("/account");
    },
    wallet() {
      this.$router.push("/wallet");
    },
    coupon() {
      this.$router.push("/coupon");
    },
    gift() {
      this.$router.push("/gift");
    },
    order() {
      this.$router.push("/order");
    },
    invoice() {
      this.$router.push("/invoice");
    },
    //
    prompt() {
      this.$messagebox
        .prompt("兑换优惠", {
          //输入框的占位符
          inputPlaceholder: "请输入兑换码"
        })
        .then(action => {
          console.log(action.value + "目录创建成功");
        })
        .catch(() => {});
    }
  },
    watch:{
    footertab(){
        if(this.footertab == 'home'){
          this.$router.push('/');
        } else if(this.footertab == 'gwc'){
          this.$router.push('/gwc');
        } else if(this.footertab == 'me'){
          this.$router.push('/me');
        }else if(this.footertab == 'menu1'){
           this.$router.push('/menu1');
        }
    }
  }  
};
</script>