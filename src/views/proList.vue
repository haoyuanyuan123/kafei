<template>
<div class="my-box">
  <!-- 页头 -->
        <mt-header :title="tit">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <!-- 页头-end -->
        <div class="my-pro">
            <!-- banner -->
            <div class="ban"><img src="../assets/img/ban01.jpg" alt="" srcset=""></div>
            <!-- banner-end -->
            <!-- 商品列表 -->
            <my-listp></my-listp>
            <!-- 商品列表-end -->
            
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tit:'茶里专区',
       
          
        }
    }
}
</script>
<style scoped>

.my-box{
    overflow: hidden;
}
.my-pro{
    margin-bottom: 58px;
    padding: 0 5px
}
.my-box .mint-header{
    background-color: #fff;
    color: #666;
    font-size: 16px;
    font-weight: bold;
}
.my-box .mintui{
    font-size: 16px;
}
.my-pro .ban{
    height: 160px;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 15px;
}
.my-pro .ban img{
    display: block;
    width: 100%;
    height: 100%;
}

</style>

