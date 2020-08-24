<template>
  <div id="bei">
  
      <div class="wel">
         Welcome
      </div>
    
      <div class="biao">
        <ul>
            <li><span>用户名：</span><input placeholder="请输入用户名" type="text"  v-model="username" class="m-inp"></li>
            <li><span>密码：</span><input placeholder="请输入密码"  type="password" v-model="password"  class="m-inp"></li>
            <li><span>确认密码：</span><input placeholder="请再次输入密码" type="password" v-model="conpassword"  class="m-inp"></li>
            <li><span>手机号：</span> <input placeholder="请输入手机号" type="number" v-model="phone"  class="m-inp"></li>
            <li><span>邀请码：</span><input type="text"  placeholder="验证码"  v-model="code"  class="m-inp"></li>
        </ul>
 
         </div>
          <div class="btn">
          <button class="button" @click="handler">立即注册</button>
          </div>
          
      <!-- 表单区域结束 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      conpassword: "",
      phone: "",
      code: ""
    };
  }
     ,
  methods:{
       checkUsername(){
          //用户名的规范
          var usernameRegExp = /^[0-9A-Za-z]{6,12}$/;
          //检测用户名
          if(usernameRegExp.test(this.username)){
              return true;
          } else {
              this.$messagebox.alert('用户名长度为6~12的字符');
              return false;
          }
      },
      //检测密码
      checkPassword(){
           //密码的规范
          var passwordRegExp = /^[0-9]{6,18}$/;

          //检测密码
          if(passwordRegExp.test(this.password)){
              return true;
          }else{
          this.$messagebox.alert('密码长度为6~18的字符');
              return false;
          }
      },
      //检测确认密码
      checkConpassword(){
          //检测确认密码
          if(this.conpassword==this.password){
              return true;
          }else{
              this.$messagebox.alert('两次密码不一致');
              return false;
          }

      },
      checkphone(){
          //手机号规范
           var phoneRegExp =/^1[0-9]{10}$/;
          //检测手机号
          if(phoneRegExp.test(this.phone)){
              return true;
          }else{;
          this.$messagebox.alert('手机号格式不正确');
          }
      },

      handler(){
          if(this.checkUsername()&&this.checkPassword()&&this.checkConpassword()&&this.checkphone()){
              var obj={
                  username:this.username,
                  password:this.password,
                  phone:this.phone
              };
              //qs的stringify()方法用于将数组/对象转换成请求字符串
              //console.log(this.qs.stringify(obj));
              this.axios.post('/register',this.qs.stringify(obj)).then((res)=>{
                  if(res.data.code ==201){
                      this.$messagebox.alert("用户名已存在","注册提示")
                  }
                  if(res.data.code ==200){
                      this.$router.push('/');
                      this.$messagebox.alert("注册成功","注册提示")
                  }
              })
          }
      }

  }
};
</script>

<style scoped>
.wel {
  text-align: center;
  font-size: 32px;
  padding: 25px;
  margin-bottom: 45px;
  margin-top: 30px;
  font-family: fantasy;
}
#bei {
  background: url(../assets/img/bann.jpg) no-repeat;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  position: absolute;
  padding: 0 20px;
  box-sizing: border-box;
}
.mint-header {
  align-items: center;
  background-color: #ddd;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  font-size: 40px;
  /* margin-top:40%; */
  line-height: 1;
  height: 90px;
  padding: 0 10px;
  position: relative;
  text-align: center;
  white-space: nowrap;
}
.biao ul {
  background-color: rgba(111, 135, 197, 0.5);
  padding: 40px 20px;
  border-radius: 25px;
}
.biao ul li {
  margin-bottom: 20px;
}
.biao {
  text-align: center;
  margin-bottom: 26px;
}
#bei .biao .m-inp {
  color: #333;
  border-radius: 4px;
  width: 188px;
  height: 30px;
  line-height: 30px;
  background: repeat;
  padding-left: 10px;
  position: relative;
  border: 1px solid #372779;
  font-size: 12px;
}

#bei input::-webkit-input-placeholder {
  color: #372779;
}
.biao ul li:last-child {
  margin-bottom: 0;
}
.biao span {
  width: 74px;
  text-align: right;
  display: inline-block;
  font-size: 14px;
  color: #372779;
}
.button {
  display: inline-block;
  padding: 0 16px;
  font-size: 14px;
  line-height: 32px;
  text-align: center;
  cursor: pointer;
  color: #372779;
 background-color: rgba(111, 135, 197, 0.5);
  border: none;
  border-radius: 13px;
  height: 40px;
  width: 100%;
  outline: none;
}
.btn {
  text-align: center;
  -webkit-tap-highlight-color: transparent;
}
.yanzheng {
  width: 300px;
  height: 50px;
  margin: 0 auto;
  position: relative;
}
.yanzheng button {
  position: absolute;
  right: 5%;
  top: 30px;
  background: #f00;
  color: #fff;
  outline: none;
  border: none;
}
.yanzheng input {
  width: 200px;
  position: absolute;
  right: 10px;
  top: 0;
}
</style>