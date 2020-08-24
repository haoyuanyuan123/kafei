<template>
    <div>
         <!-- 隐藏页头 -->
    <div class="hied-bar" ref=hideb>
        <div class="bun">
             <div class="btn">
            <span><a href="JavaScript:;"  id="o1" ref="b1" @click="mao"> 商品</a></span>
            <span><a href="JavaScript:;"  id="o2" ref="b2" @click="mao2">评论</a></span>
            <span><a href="JavaScript:;"  id="o3" ref="b3" @click="mao3">详情</a></span>
        </div>
        <router-link to="/prolist" class="lg"></router-link>
        </div>
       
       
    </div>
    <!-- 隐藏页头-enf -->
        <!-- 头部商品展示 -->
        <div class="prodesc" id="d1">
            <div class="d_jump">
            <div class="pic">
                <img src="../assets/img/cat01.jpg" alt="" srcset="">
                <router-link to="/home" class="iconfont z-icon-fanhui5"></router-link>
            </div>
            <div class="txt">
                <div class="top">
                    <p class="price">
                    <em class="danj">￥{{p_price}}</em>
                    <span class="number">
                        <button class="iconfont z-icon-iconset0187 jian" @click="jian"></button>
                        <em>{{p_n}}</em>
                        <button class="iconfont z-icon-jia-tianchong jia" @click="jia"></button>
                    </span>
                    </p>
                    <div class="tit">
                        <h3>{{p_tit}}</h3>
                        <p>{{p_tit2}}</p>
                        <p class="p2">已售卖{{p_number}}件</p>
                    </div>       
                    <div id="d2"></div>
                </div>
               <div class="yunfei">
                   <span>运费</span>免运费
               </div>
               </div>
               <!-- 评价 -->
                <div class="evaluate d_jump"   ref="hide1">
                   <mt-cell title="评价" is-link to="/">
                        <span style="color: #6f87c5">查看全部</span>
                    </mt-cell>
                    <ul class="evs-list">
                        <li v-for="(uname,i) of onn" :key="i">
                            <span class="toux"><img :src="uname.img" alt="" srcset=""></span>
                            <p >
                                <em>{{uname.p_name}}</em>
                                <span>{{uname.ptext}}</span>
                            </p>
                        </li>
                    </ul>
                       <div id="d3"></div>
                </div>
             
                 <!-- 评价-end -->
                <!-- 商品详情 -->
                <div class="p_desc d_jump"  ref="hide2">
                    <p class="tit">商品详情</p>
                    <div>
                        <img :src="pic_desc" alt="" srcset="">
                         <img :src="pic_desc2" alt="" srcset="">
                    </div>
                </div>
                <!-- 商品详情-end -->
            </div>
        </div>
        <!-- 头部商品展示-end -->
        <!-- 底部栏 -->
        <div class="d-bar">
           <p><span class="iconfont z-icon-weibiaoti--" slot="icon"></span>购物车</p> 
           <button>加入购物车</button>
           <button>立即购买</button>
        </div>
        <!-- 底部栏-end -->
    </div>
</template>
<style scoped>

.d-bar{
    height: 50px;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.d-bar span{
   display: block;
    font-size: 30px;
}
.d-bar p{
    font-size: 12px;
    position: relative;
}

.d-bar button{
    width: 120px;
    height: 30px;
    border-radius: 20px;
    border: 1px solid #777fae;
    background-color: #fff;
    font-size: 12px;
    color: #777fae;
}
.d-bar button+button{
    background-color: #6f87c5;
    color: #fff;
}
.hied-bar{
    height: 60px;
    background-color: rgba(255, 255, 255, 1);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    padding-top: 12px;
    box-sizing: border-box;
   display: none;

 
    
}
.hied-bar .btn{
    width: 70%;
    background-color: #6f87c5;
    border-radius: 25px;
    overflow: hidden;
    line-height: 35px;
    margin: 0 auto;
    padding: 2px 2px;
    box-sizing: border-box;
    overflow: hidden;

}
.hied-bar .bun{
        position: relative;
}
.hied-bar span a{
    float: left;
    width: 33%;
    text-align: center;
    color: #fff;
    font-size: 14px;
    display: block;
}
.hied-bar span a.on{
    background-color: #fff;
    border-radius: 25px;
    color: #6f87c5;
}
.hied-bar .lg{
    position: absolute;
    top: 50%;
    left: 10px;
    width: 20px;
    height: 20px;
    background: url(../assets/img/leftx.png) no-repeat;
    background-size: cover;
    transform: translatey(-50%);

}
.prodesc{
    margin-bottom: 55px
}
.prodesc .pic{
    height: 245px;
    position: relative;
}
.prodesc .txt{
    padding: 10px 5px;
    box-sizing: border-box;
    background-color: #f5f5f5;
}
.prodesc .top {
    background-color: #fff;
    border-radius: 7px;
    margin-bottom: 12px
}
.prodesc .yunfei{
    margin-bottom: 1px;
      background-color: #fff;
    border-radius: 7px;
}
.prodesc .top{
    padding: 10px 7px
}
.prodesc .pic img{
    display: block;
    width: 100%;
    height: 100%;
}
.prodesc .txt .price{
    overflow: hidden;
    margin-bottom: 8px
}
.prodesc .price .danj{
    font-size: 18px;
    color: #f00;
    font-family: 宋体；
}
.prodesc .z-icon-fanhui5{
    position: absolute;
    top: 12px;
    left: 12px;
    font-size: 26px;
    color: rgba(0, 0, 0, .7);
}
.prodesc .number{
    float: right;
}
.prodesc .number em{
    margin: 0 2px
}
.prodesc .jian{
    border: none;
    background:no-repeat;
    color: #0011fd;
    font-size: 18px
}
.prodesc .jia{
    border: none;
    background:no-repeat;
    color: #6f87c5;
    font-size: 17px
}
.prodesc .tit h3{
    font-weight: normal;
    font-size: 16px;
    color: #000;
    font-family: 宋体;
    margin-bottom: 8px
}
.prodesc .tit p{
    font-size: 12px;
    color: rgba(0, 0, 0, .6);
    margin-bottom: 8px
}
.prodesc .tit .p2{
     color: rgba(0, 0, 0, .4)
}
.prodesc .yunfei{
    font-size: 12px;
    padding: 10px 7px
}
.prodesc .yunfei span{
    color: rgba(0, 0, 0, .4);
    margin-right: 5px
}
.prodesc /deep/ .mint-cell-wrapper{
    font-size: 12px;
}
.prodesc /deep/ .mint-cell {
    min-height: 30px;
}
/* .prodesc .evs-list{

} */
.prodesc .evs-list{
    background-color: #fff;
    padding: 0 7px
}
.prodesc .evs-list li{
    border-bottom: 1px solid rgba(0, 0, 0,.1);
    padding: 8px 0;
}
.prodesc .evs-list li:last-child{
    border:none;
}
.prodesc .evs-list .toux{
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
}
.prodesc .evs-list .toux img{
    display: block;
    width: 100%;
    height: 100%;
}
.prodesc .evs-list p em{
    display: block;
    font-size: 12px;
    color: #000;
    margin-bottom: 4px;
}
.prodesc .evs-list p span{
    display: block;
    font-size: 12px;
}
.prodesc .evs-list p{
    display: inline-block;
    margin-left: 8px
}
.prodesc .p_desc{
    background-color: #fff;
    padding: 10px 7px;
        border-radius: 7px;
}
.prodesc .p_desc .tit{
    font-size: 12px;
    color: rgba(0, 0, 0, .9);
    margin-bottom: 10px;
}
.prodesc .p_desc img{
    display: block;
    width: 100%;
    height: 100%;
}
.prodesc .evaluate{
    margin-bottom: 12px;
    border-radius: 7px;
    overflow: hidden;
}
#d3{
    margin-bottom: 40px;
}
</style>
<script>
export default {
    data(){
        return{
            p_price:'79',
            p_n:'1',
            p_tit:"原叶茶乌龙蜜桃2盒装",
            p_tit2:'Peach Oolong Tea',
            p_number:'700',
            evaluate_n:'32',
            pic_desc:require('../assets/img/desc01.jpg'),
            pic_desc2:require('../assets/img/desc02.jpg'),
            onn:[
                {
                     p_name:'clare',
                     ptext:'非常好喝，很喜欢',
                     img:require('../assets/img/tx01.jpg')
                },
                {
                     p_name:'威尼斯小熊',
                     ptext:'价格实惠，味道非常好',
                    img:require('../assets/img/tx01.jpg')
                }
            ]
        }
    },
    methods:{
        jia(){
            this.p_n++;
        },
        jian(){
            if(this.p_n>1){
                this.p_n--;
            }
        },
         handleScroll () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            // console.log(scrollTop);
            var cc=document.getElementsByClassName("cc");
            if( scrollTop>=300){
                this.$refs.hideb.style.display="block";
            }else{
                 this.$refs.hideb.style.display="none";
            };
            
             var d2 = document.getElementById('d2').offsetTop-document.documentElement.scrollTop;
             var d3 = document.getElementById('d3').offsetTop-document.documentElement.scrollTop;
             console.log(d2)
          
           
             if(d2<=90 && d2>-5){
                 this.$refs.b2.setAttribute("class","on");
    
             }else if(d2<-10){
                 this.$refs.b2.setAttribute("class","onn");
             }

            if(d3<=100){
                 this.$refs.b3.setAttribute("class","on");
             }else{
                 this.$refs.b3.setAttribute("class","onn");
             }

         },
         mao(){
             document.getElementById('d1').scrollIntoView({behavior: "smooth"});
         },
         mao2(){
              document.getElementById('d2').scrollIntoView({behavior: "smooth"});

         },
            mao3(){
              document.getElementById('d3').scrollIntoView({behavior: "smooth"});
         }
       
    },
   mounted(){
         window.addEventListener('scroll', this.handleScroll)
   }
}

</script>




