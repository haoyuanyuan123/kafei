<template>
    <div class="body">
      <div class="box-m">

 
      <!-- //轮播图 -->
      <div class="my-bj">
        <div class="banner">
          <mt-swipe :auto="5000">
            <mt-swipe-item><img src="../assets/img/banner.jpg" alt="" srcset=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/img/banner.jpg" alt="" srcset=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/img/banner.jpg" alt="" srcset=""></mt-swipe-item>
          </mt-swipe>
        </div>
      </div>
      <!-- //轮播图-end -->
      <!-- 分类模块 -->
        <div class="flei">
          <div class="bg_1">
             <div class="top">
              <div class="left">
                <span>自提/外送</span>
                <h3>现在下单</h3>
                <p>大师咖啡/瑞纳冰</p>
              </div>
              <div class="right">
                 <h3>冰果茶精选</h3>
                <p>奶茶/水果茶/牛乳茶</p>
              </div>
            </div>
            <div class="bottom">
              <div class="d1"><router-link to="/"><img src="../assets/img/t4.jpg" alt="" srcset=""></router-link></div>
              <div class="d2"><router-link to="/"><img src="../assets/img/t3.jpg" alt="" srcset=""></router-link></div>
              <div class="d3"><router-link to="/"><img src="../assets/img/t5.jpg" alt="" srcset=""></router-link></div>
              <div class="d4">
                <p class="t1"><router-link to="/"><img src="../assets/img/t6.jpg" alt="" srcset=""></router-link></p>
                <p class="t2"><router-link to="/"><img src="../assets/img/t7.jpg" alt="" srcset=""></router-link></p>
              </div>
            </div>
          </div>
         
        </div>
      <!-- 分类模块-end -->
      <!-- 展示轮播 -->
          <div class="swiper-container my-swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(p,i) in swiperimg" :key="i">
                <router-link to="/">
                  <img :src="p.url" alt="" srcset="">
                </router-link>
              </div>
            </div>
          </div>
      <!-- 展示轮播-end -->

      <!-- 商品列表 -->
      <div class="pro-box">
        <div class="tit">
          <h3>瑞亦潮品</h3>
          <router-link to="/" class="link">
            更多  &gt;
          </router-link>
        </div>
        <my-listp></my-listp>
      </div>
      <!-- 商品列表-end -->
    </div>
<!-- 00000000000000000000000000 -->
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

<script>
// import footer from '@/components/footer.vue'
import Swiper from 'swiper'; 
export default {
  name: 'home',
  components: {
    
  },
  data(){
    return{
     footertab:"home",
      swiperimg:[
        {url:require('../assets/img/swiper.jpg')}, {url:require('../assets/img/swiper.jpg')}, {url:require('../assets/img/swiper.jpg')}, {url:require('../assets/img/swiper.jpg')}
      ]
      
    }
    
  },
  mounted(){
  var mySwiper = new Swiper('.swiper-container', {
   autoplay:false,
    slidesPerView: 1.3,
     spaceBetween: 12,
     freeMode: true
  })
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
  
}
</script>


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






.body{
  background-color: #f5f5f5;
  min-height: 100vh;
}
.box-m{
  margin-bottom: 60px;
  overflow: hidden;
}
.my-bj{
  background: url(../assets/img/bj01.png);
  height: 255px;
  background-size: cover;
  background-position: 100% 100%;
  background-repeat: no-repeat;
  padding: 16px 10px;
}
.banner{
  height: 180px;
  border-radius: 14px;
  overflow: hidden;
}
.banner img{
  display: block;
  width: 100%;
  height: 100%;
}
.banner /deep/ .mint-swipe-indicator.is-active{
    background: #232773;
    opacity: .8;
}
.banner /deep/ .mint-swipe-indicator{
   background:#fff;
   opacity:.5;
}
.flei{
  padding: 10px;
  box-sizing: border-box;
  margin-top: -78px;
}
.flei .top{
  display: flex;
  margin-bottom: 4px;
}
.flei .bg_1{
  background-color: #fff;
  padding: 9px;
  box-sizing: border-box;
  border-radius: 9px;
}
.flei .left , .flei .right{
  flex: 1;
  height: 100px;
  padding: 15px;
  box-sizing: border-box;
}
.flei .left{
  background: url(../assets/img/f1.jpg);
   background-repeat: no-repeat;
  background-size: cover;

}
.flei .left span{
  font-family: "方正姚体";
  display: inline-block;
  border: 1px solid #333;
  padding: 3px;
   box-sizing: border-box;
   margin-bottom: 7px;
}
.flei .left h3 ,.flei .right h3{
  font-size: 18px;
  font-weight: 600;
  color: rgba(0, 0, 0, .7);
  margin-bottom: 6px;
}
.flei .left p ,.flei .right p{
  font-size: 12px;
  font-family: "宋体";
  color: rgba(0, 0, 0, .4);
}
.flei .right{
  background: url(../assets/img/f2.jpg);
   background-repeat: no-repeat;
  background-size: cover;
}
.flei .right{
  margin-left: 4px;
}
.flei .right h3{
  margin-top: 20px;
}
.bottom div{
  height: 120px;
}
.bottom{
  display: flex;
}
.d1,.d2,.d3,.d4{
  flex: 1;
}
.d1{
  margin-right: 4px;
}
.d1 img,.d2 img,.d3 img,.d4 img{
  display: block;
  width: 100%;
  height: 100%;
}
.d2{
  margin-right: 4px;
}
.d3{
  margin-right: 4px;
}
.d4 p{
width: 100%;
height: 50%;
padding-bottom: 2px;
box-sizing: border-box;
}
.d4 p+p{
  padding-top: 2px;
  padding-bottom: 0;
}
.d4 p img{
  display: block;
  width: 100%;
  height: 100%;
}
.my-swiper{margin-bottom: 18px;}
.my-swiper img{
  height: 180px;
  width: 100%;
  display: block;
}
.pro-box{
  padding: 0 6px;
  
}
.pro-box .tit{
  overflow: hidden;
  margin-bottom: 8px;
}
.pro-box h3{
  font-size: 16px;
  float: left;
}
.pro-box .link{
  display:block;
  float: right;
  font-size: 12px;
  color: rgba(0, 0, 0, .4);
}
.my-swiper{
  padding: 0 6px;
}
</style>
