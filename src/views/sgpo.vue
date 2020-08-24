<template>
<div class="body">
  <div>
    <div class="header">
     <router-link  to="/gwc"> <img  src="../assets/img/back.png" /></router-link>
      <h4>确认订单</h4>
      <div></div>
    </div>
    <div class="detail">
    <span>亲爱的顾客，若您购买多个不同商品可能涉及不同仓库发货，进行拆分订单，具体以订单显示为准。</span>
    </div>
    <div id="order">
      <div class="address b">
          <div>
             <a ><img src="../assets/img/cg.png"></a>
             </div>
            <div class="wz" style="word-wrap: break-all;
    display:inline;">
              <p class="cs">河南省郑州市金水区文化路</p>
              <p class="sj">15923045635</p>
            </div>
          <div class="delivery">
            <a><img src="../assets/img/you.png"></a>
          </div>
        </div>
       </div>
     
      <div class="sp">
      <div class="biao">
              <span class="biao-title">订单列表</span>
            </div>
        <ul>
          <li class="car-item" v-for="(item,index) in good_list" :key="index">
          <div class="list">
            <img class="car-img" :src="item.img"/>
            <div class="list-item">
            <h3 class="car-cont">{{item.title}}</h3>
            <span class="cat-desc">{{item.spec}}</span>
            </div>
            </div>
            <div>
            <p class="num">x{{item.num}}</p>
            </div>
            <div>
            <p class="price">￥{{item.price}}</p>
            </div>
          </li>
        </ul>
        <div class="total" ><div></div> <span >应付￥{{total}}</span></div>
      </div>
      <div class="volume b">
        <p>咖啡钱包</p><p class="wu">无可用</p>
      </div>
      <div class="volume b">
        <p>优惠劵</p><p class="wu">无可用</p>
      </div>
<!--      <div class="distribution b">-->
<!--        <div>-->
<!--          <p>配送费</p>-->
<!--          <span>订单满99元免快递费 (免运费商品除外)</span>-->
<!--        </div>-->
<!--        <p>￥{{freight}}</p>-->
<!--      </div>-->
      <div class="pay b">
        <p>支付方式</p>
        <div class="zf">
          <img src="../assets/img/wx.png" height="38" width="47"/>
          <p style="text-align:center">微信支付</p>
          <a><img src="../assets/img/you.png"></a>
        </div>
      </div>
      <div class="xy">
      <div class="agreement">
        <input type="radio"> 我已阅读并同意 <span>《支付协议》</span>
      </div>
      <p class="tips">温馨提示：此订单电商仓直接发货快递到家，不支持门店配送或自取</p>
    </div>
    </div>
    <div class="payment">
      <span>合计：￥{{total}}</span>
      <button>去支付</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "OrderDelivery",
    data(){
      return{
        good_list:[{
          title: "卡布奇诺瑞纳冰",
          img: require("../assets/img/09580eaf438d1225de73457f46ff6ae_03.gif"),
          num: 1,
          price: 18,
          spec: "默认奶油",
          is_selected: true,
        },
        
        ],
        freight:0
      }
    },
    mounted(){
      if (this.total < 99) {
        this.freight = 10
      }
    },
    methods:{
      Return(){
        this.$router.go(-1)
      }
    },
    computed:{
      total(){
        let total = 0
        this.good_list.forEach(item=>{
          total+=item.num * item.price
        })
        return total.toFixed(2)
      }
    },
    created() {
      if (this.$store.state.good_list) {
        this.good_list= this.$store.state.good_list
      }
    }
  }
</script>

<style scoped>
.body {
  min-height: 100vh;
  background-color: #f5f5f5;
}
  .header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .1rem 0;
    box-sizing: border-box;
    background-color:#fff;
    padding:10px;
  }
  .header img{
    height:20px
  }
  
  .header h4{
    font-size: 20px;
    font-family:"微软雅黑";
    font-weight: 500;
  }
  .detail{
    background-color: #c4dcf9;
    color: #188de4;
  }
  .detail span{
    font-size:14px;
    font-family:"宋体";
    padding:10px;
    display:flex
  }
  .b{
    border-radius: .2rem;
    background: #ffffff;
    padding: 8px;
    margin: 5px;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
  }
  .wu{
    color:#888;
  }
   .address{
    font-size: .3rem;
    color: #575757;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .wz{
    word-wrap: break-all;
    display:inline;
    padding:10px;
  }
  .cs{
    font-size:16px;
    font-family:"宋体"
  }
  .total{
    padding:10px;
    display:flex;
    justify-content: space-between;
  }

  .sj{
    color:#666;
    padding-top:5px;
  }
  .sp{
    background-color:#fff;
    margin:5px;
  }
  .car-img {
  width: 64px;
  height: 64px;
  float: left;
  overflow: hidden;
}
.car-img img {
  width: 100%;
  margin-left:10px;
}
.zf{
  display:flex;
}
.zf img{
  width:25px;
  height:20px;
  margin-right:5px;
}
  .payment{
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    bottom: 0;
    font-size: .3rem;
    margin-left: -.2rem;
    background: #ffffff;
    padding: .2rem 0;
    box-sizing: border-box;
    padding: 15px 15px;
  }
  .payment span{
    font-size: 16px;
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
  margin-left:10px;
  margin-right:10px;
  display:flex;
   justify-content: space-between;
}
.biao {
  padding: 5px 10px;
  border-bottom: 1px solid #ddd;
}
.biao-title {
  font-size: 14px;
}

.total span{
  float:right
}
.list{
  display:flex;

}
 .list-item{
   display:block;
   /* vertical-align: middle; */
   padding-left:10px;
   padding-top:10px;
 }
 .cat-desc{
   font-size:12px;
   color:#888;
 }
 .num{
   color:#888;
 }
  .payment button{
    border-radius: 10%;
    font-size: 16px;
    color: #fff;
    margin-right: 10px;
    background: #DE6235;
    outline: none;
    border:none;
  }
  .xy{
    margin:20px;
    font-size:14px;

  }
  .agreement span{
    color:#6f87c5;
  }
  .tips{
    margin-top:10px;
    color:#888;
    font-size:10px;
  }
</style>

