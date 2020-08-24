<template>
  <div class="hell">
    <!-- 头 -->
    <div class="head">
    <mt-header title="个人资料">
        <router-link slot="left" to="/me">
        <mt-button type="primary" icon="back"></mt-button>
        </router-link>
    </mt-header>
</div>
    <!-- touxiang -->
    <div class="photo">
    <div  @click="actionSheet">
        <mt-cell title="头像" is-link>
        <img src="../assets/img/00adca5a0d93daa80121985c9ef05f.jpg">
        </mt-cell>
 <mt-actionsheet
 :actions= "data"
v-model="sheetVisible">
    </mt-actionsheet>
    </div>
    <!-- yonghuming -->
    <div @click="prompt">
    <mt-cell title="用户名" is-link>
    miss</mt-cell>
    </div>
    <!-- xingbie -->
    <mt-cell title="性别" is-link >男</mt-cell>
    <mt-cell title="绑定手机号"></mt-cell>
    <div @click="address">
    <mt-cell title="收货地址" isLink></mt-cell>
    </div>
    <mt-cell title="账号管理" isLink></mt-cell>
  </div>
    <div class="china">
        <mt-cell title="多语言" isLink>简体中文</mt-cell>
        <mt-cell title="推送通知" isLink>已开启</mt-cell>
    </div>
    <div >
        <mt-button class="quit" type="primary" size="large">退出登录</mt-button>
    </div>
</div>
</template>
<style scoped>
    .hell{
        background-color: #fafafa;
    }
    .head /deep/ .mint-header {
    font-size: 16px;
    background-color: rgba(0, 0, 0, 0);
    color: #000;
    letter-spacing:2px;
}
    .photo{
        width:95%;
        margin:10px auto;
        background:#fff;
        border-radius: 10px;
    }
    .photo img{
        border-radius: 50%;
        width: 40px;
        height: 40px;
    }
    .china{
        width:95%;
        margin:10px auto;
        background:#fff;
        border-radius: 10px;
        display: block;
    }
    .quit{
        display: block;
        width: 90%;
        background-color:#6e7ed6;
        border-radius: 33px;
        margin: 0 auto;
        margin-top: 24px;


    }
</style>

<script>
export default {
  data () {
    return {
      // action sheet 选项内容
      data: [{
        name: '拍照',
        method : this.getCamera	// 调用methods中的函数
      }, {
        name: '从相册中选择', 
        method : this.getLibrary	// 调用methods中的函数
      }],
      // action sheet 默认不显示，为false。操作sheetVisible可以控制显示与隐藏
      sheetVisible: false
    }
  },
  methods: {
    address() {
    this.$router.push("/address");
    },
    actionSheet: function(){
    	// 打开action sheet
      this.sheetVisible = true;
    },
    getCamera: function(){
      console.log("打开照相机")
    },
    getLibrary: function(){
      console.log("打开相册")
    },
    prompt(){
        this.$messagebox.prompt("修改用户名",{
          //输入框的占位符
            inputPlaceholder:"miss"
        }).then((action)=>{
            console.log(action.value + '目录创建成功');
        }).catch(()=>{

        });
    }
}  
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->