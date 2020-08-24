<template>
  <div class="body">
    <div class="content">
    <div class="bjing"></div>
      <div id="bei">
     
        <div id="main" v-show="good_list.length !== 0">
          <div>
            <div class="biao">
              <span class="biao-title">饮品与小食订单</span>
              <div class="biaolj">
                <img src="../assets/img/qingkonglishijilu.png" />
                <span @click="del()">清空</span>
              </div>
            </div>
            <ul>
              <li
                class="car-item"
                v-for="(item, index) in good_list"
                :key="index"
              >
                <div class="input-block">
                  <label
                    class="input-label"
                    :class="{ active: item.is_selected }"
                    :for="'car-checkbox-' + index"
                    @click="select_one(index)"
                  ></label>
                </div>
                <div class="car-item-content">
                  <div class="car-img">
                    <a href>
                      <img :src="item.img" width="100%" />
                    </a>
                  </div>
                  <div class="car-cont">
                    <h3>{{ item.title }}</h3>
                    <div class="cat-desc">
                      <span>{{ item.spec }}</span>
                    </div>
                    <div class="car-price">
                      <span class="price">￥{{ item.price }}</span>
                      <span class="del">￥{{ item.del }}</span>
                    </div>
                  </div>
                  <div class="num">
                    <span @click="reduce(index)">-</span>
                    <span>{{ item.num }}</span>
                    <span @click="add(index)">+</span>
                  </div>
                </div>
              </li>
            </ul>

            <div class="car-zj">
              <div class="total-cont">
                <span>总价：￥{{ totalPrice.toFixed(2) }}</span>
              </div>
              <div class="btn-box">
                <button><router-link to="/sgpo">立即下单</router-link></button>
              </div>
            </div>
          </div>
        </div>
        <div id="tz" v-show="good_list.length == 0">
          <div class="img">
            <img
              src="../assets/img/fb33e2fb0d9ba8318f9f12d1e915d21_04.gif"
              alt=""
              style="width:200px"
            />
          </div>
          <div class="gw">
            <span style="text-align=center">你的购物车有一点寂寞</span>
          </div>
          <div class="jd">
            <button><router-link to="/menu1">去喝一杯吧</router-link></button>
          </div>
        </div>
      </div>
      <div style="margin:0 10px;padding-top:20px " @click="changed()">
        <div class="font">
          <span class="spa1">猜你喜欢</span>
          <div class="geng">
            <img src="../assets/img/huanyipi.png" />
            <a href="javascript:;">换一批</a>
          </div>
        </div>
        <div class="bottom">
          <div
            class="concarl"
            @click="changed()"
            v-for="item of changed"
            :key="item.id"
          >
            <div class="concarl-img">
              <a href>
                <img :src="item.img" alt />
              </a>
            </div>
            <div>
              <div class="concarl-title">{{ item.title }}</div>
              <div class="concarl-desc">{{ item.desc }}</div>
              <div class="concarl-price">
                <span class="prices">￥{{ item.price }}</span>
                <span class="dels">￥{{ item.del }}</span>
               <span class="btn iconfont z-icon-jia-tianchong jia"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  <!-- 0000000000000000000 -->
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



.body {
  min-height: 100vh;
  background-color: #f5f5f5;
}
.content {
  margin-bottom: 60px;
  overflow: hidden;
 

}
.spa1{
  position: relative;
  padding-left: 3px;

}
.spa1::before{
  position: absolute;
  content: "";
  width: 2px;
  height: 12px;
  background-color: #6f87c5;
  top: -3;
  left: -1px;
}
.bjing{
 background-image:url(../assets/img/bj01.png);
background-size: cover;
background-position: 100% 100%;
 height:150px;
  background-repeat: no-repeat;
}

#main {
  background-color: #fff;
  margin-top: -100px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 0 5px;
  padding-top: 10px;
  border-radius:10px; 
}
.biao {
  padding-bottom: 15px;
  border-bottom: 1px solid #ddd;
}
.biao-title {
  font-size: 14px;
}
.biaolj {
  float: right;
  margin-right: 5px;
  font-size: 14px;
  color: #ccc;
  text-align: center;
}
.biaolj img {
  margin-right: 5px;
  width: 15px;
}
.car-list {
  padding: 8px;
}
.car-item {
  border-bottom: 1px solid #ddd;
  position: relative;
  height: 76px;
  overflow: hidden;
  margin-top: 10px;
}
.car-checkbox {
  display: none;
}
b {
  color: blue;
  width:20px;
}
.input-block {
  width: 30px;
  float: left;
  height: 55px;
  line-height: 55px;
}
.input-label {
  cursor: pointer;
  position: absolute;
  width: 18px;
  height: 18px;
  top: 18px;
  left: 0;
  background: #fff;
  border: 2px solid #ccc;
  border-radius: 50%;
}
.car-img {
  width: 64px;
  height: 64px;
  float: left;
  overflow: hidden;
}
.car-img img {
  width: 100%;
}
.input-label.active {
  background: rgb(59, 100, 233);
}
.car-cont {
  margin-left: 100px;
}
.car-cont h3 {
  line-height: 24px;
  font-size: 16px;
}
.cat-desc {
  font-size: 14px;
  color: #999;
}
.car-price {
  right: 132px;
  bottom: 0px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  display: block;
}
.car-price .price {
  position: relative;
  width: 100%;
  color: orange;
}
.del {
  color: #ccc;
  margin: 0 10px;
  text-decoration: line-through;
  font-size: 10px;
}
.car-zj {
  height: 60px;

  left: 0;
  right: 0;
}
.total-cont {
  height: 60px;
  line-height: 60px;
  font-size: 16px;
  float: left;
}
.total-cont span {
  display: inline-block;
  margin-left: 12px;
}
.btn-box {
  float: right;
  height: 60px;
  line-height: 60px;
}
.btn-box button {
  height: 60%;
  border: none;
  background: #f15a24;
  color: #fff;

  border-radius: 10%;
  font-size: 16px;
  outline: none;
}
.num {
  position: absolute;
  top: 40px;
  right: 0px;
  width: 90px;
}
.num span {
  display: inline-block;
  width: 28px;
  height: 28px;

  text-align: center;
  line-height: 28px;
  border: 1px solid #ddd;
  font-size: 14px;
}
#tz {
  padding-top: 40px;
  /* display: none;  */
}
.img {
  width: auto;
  margin-top: 40px;
  text-align: center;
}
.gw {
  text-align: center;
  color: rgb(158, 154, 154);
  font-size:14px;
}
.jd {
  text-align: center;
  margin-top: 30px;
}
.jd button {
  display: inline-block;
  padding: 0 16px;
  font-size: 14px;
  line-height: 32px;
  text-align: center;
  cursor: pointer;
  color: #fff;
  background-color: #0084ff;
  border-radius: 20px;
  margin-top: 50px;
  height: 45px;
  margin: 0 auto;
  width: 185px;
  outline: none;
  border: none;
}
button a{
  color:#fff;
}
.font {
  margin-top: 0.4rem;
  padding: 0 0.2rem;
  font-size: 0.24rem;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
 
}
.font .spa{
   position:relative;
   
}

.geng {
  color: #1296db;
}
.geng img {
  margin-right: 5px;
  width: 10px;
}
.detail-item {
  height: 50px;
  margin: 10px;
  display: inline-block;
  position: relative;
}
.bottom {
  display: flex;
}
.concarl {
  width: 30%;
  flex: 1;
  margin-top: 10px;
  display: inline-block;
  background-color: #fff;
  margin: 10px 5px;
}
.concarl-img {
  width: 100%;
  height: 124px;
}
.concarl-img img {
  width: 100%;
  height: 100%;
}
.concarl-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
  margin: 4px 4px;
}
.concarl-desc {
  font-size: 10px;
  color: rgb(158, 154, 154);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 4px 4px;
}
.concarl-price {
  margin: 4px 4px;
}
.concarl-price .prices {
  color: orange;
  font-size: 14px;
  margin: 8px 0;
}
.concarl-price .dels {
  color: #ccc;
  font-size: 10px;
  margin: 0 10px;
  text-decoration: line-through;
}
.btn{
  color:#6f87c5;
  display:inline-block;
  position: absolute;
  bottom: 1px;
  right: 0px;
}
.concarl-price{
  position: relative;
}
</style>
<script>
import { MessageBox } from "mint-ui";
import { index } from "mint-ui";
import { is_selected } from "mint-ui";
export default {
  data() {
    return {
      footertab:"gwc",
      isSelected: "qw",
      good: true,
      good_list: [
        {
          title: "卡布奇诺瑞纳冰",
          img: require("../assets/img/09580eaf438d1225de73457f46ff6ae_03.gif"),
          num: 1,
          price: 18,
          del: 28,
          spec: "大/默认奶油",
          is_selected: true,
        },
        {
          title: "拿铁",
          img: require("../assets/img/09580eaf438d1225de73457f46ff6ae_06.gif"),
          num: 1,
          price: 13.75,
          del: 25,
          spec: "大/热/无糖",
          is_selected: true,
        },
        {
          title: "拿铁",
          img: require("../assets/img/09580eaf438d1225de73457f46ff6ae_06.gif"),
          num: 1,
          price: 13.75,
          del: 25,
          spec: "大/热/无糖",
          is_selected: true,
        },
        {
          title: "拿铁",
          img: require("../assets/img/09580eaf438d1225de73457f46ff6ae_06.gif"),
          num: 1,
          price: 13.75,
          del: 25,
          spec: "大/热/无糖",
          is_selected: true,
        },
      ],

      list: [
        {
          title: "陨石拿铁",
          img: require("../assets/img/393c5b7ed3959d91642a6b447a79d4f_09.gif"),
          desc: "Brown Sugar BoBo Latte",
          price: 16.8,
          del: 28,
        },
        {
          title: "楽岛桃桃冰冰",
          img: require("../assets/img/393c5b7ed3959d91642a6b447a79d4f_07.gif"),
          desc: "Peach & Rose Exfreezo",
          price: 18,
          del: 28,
        },
        {
          title: "标准美式",
          img: require("../assets/img/393c5b7ed3959d91642a6b447a79d4f_05.gif"),
          desc: "Americano",
          price: 12.1,
          del: 22,
        },
        {
          title: "冲绳黑糖拿铁",
          img: require("../assets/img/b490052f31293d8b73845f2a13cd6a8_02.gif"),
          desc: "Brown Sugar Latte",
          price: 16.8,
          del: 28,
        },
        {
          title: "桃桃山雾乌龙茶",
          img: require("../assets/img/b490052f31293d8b73845f2a13cd6a8_03.gif"),
          desc: "White & Yellow Peach Oolong Tea",
          price: 17,
          del: 28,
        },
        {
          title: "菠萝的海瑞纳冰",
          img: require("../assets/img/b490052f31293d8b73845f2a13cd6a8_04.gif"),
          desc: "Pineapple & Strawberry Exfreezo",
          price: 14,
          del: 31,
        },
        {
          title: "草莓很好喝",
          img: require("../assets/img/1987c662d74d11b57fc8f0e4749f127_03.gif"),
          desc: "Strawberry & Yogurt Drink",
          price: 19,
          del: 31,
        },
        {
          title: "焦糖玛奇朵",
          img: require("../assets/img/1987c662d74d11b57fc8f0e4749f127_05.gif"),
          desc: "Caramel Macchiato",
          price: 19,
          del: 28,
        },
        {
          title: "香草拿铁",
          img: require("../assets/img/1987c662d74d11b57fc8f0e4749f127_04.gif"),
          desc: "Vanilla Latte",
          price: 16.8,
          del: 28,
        },
      ],
      totalPrice: 0,
      
      totalNum: 0,
      //selected_all: false,
      //del:true
    };
  },
  computed: {
    changed() {
      const r = Array.apply(null, { length: this.list.length })
        .map((n, i) => i)
        .map((n, i, all) => {
          const j = i + Math.floor(Math.random() * (all.length - i));
          const v = all[j];
          all[j] = n;
          return v;
        })
        .slice(0, 3)
        .map((i) => {
          return this.list[i];
        });
      console.log(r);
      return r;
    },
  },
  mounted: function() {
    this.getTotal();
    //changed();
    sessionStorage.setItem('count', 1);
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
  } , 
  methods: {
    
    shua() {},
    del(index) {
      this.$messagebox
        .confirm("确认要清空吗?", "清空确认")
        .then((action) => {
          this.good_list.splice(0);

          //document.getElementById("main").style.display="none";
          //console.log(cc);
          //document.getElementById("main").innerHTML = "";
        })
        .catch(() => {});
    },
    getTotal() {
      this.totalPrice = 0;
      this.delPrice = 0;
      this.totalNum = 0;
      for (var i = 0; i < this.good_list.length; i++) {
        var _d = this.good_list[i];
        if (_d.is_selected) {
          this.totalPrice += _d["price"] * _d["num"];
          this.totalNum += _d["num"];
        }
      }
    },
    select_one(index) {
      if (this.good_list[index].is_selected == true) {
        this.good_list[index].is_selected = false;
      } else {
        this.good_list[index].is_selected = true;
      }
      this.getTotal();
    },
    reduce(index) {
      if (this.good_list[index].num <= 1) return;
      this.good_list[index].num--;
      this.getTotal();
    },
    add(index) {
      this.good_list[index].num++;
      this.getTotal();
    },
  },
};
</script>
