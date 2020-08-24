<template>
  <div class="hell">
    <!-- 头 -->
    <div class="head">
      <mt-header title="添加地址">
        <router-link slot="left" to="/me">
          <mt-button type="primary" icon="back"></mt-button>
        </router-link>
      </mt-header>
    </div>
    <div >
      <mt-field class="mes" type="text" label="用户名" placeholder="请输入您的称呼"></mt-field>
      <mt-field class="mes" type="text" label="性别">
          <mt-radio align="left" v-model="value" :options="options" 
          @change="check"></mt-radio>
      </mt-field><mt-radio></mt-radio>
    </div>
  </div>
</template>
<style scoped>
.hell {
  background-color: #fafafa;
}
.head /deep/ .mint-header {
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0);
  color: #000;
  letter-spacing: 2px;
}
.mes {
   margin: 0 10px;
   border-bottom: 1px solid  #ccc9c9;
   
}

</style>
<script>
    export default{
        data(){
            return{
                value:"",
                options:[{
                    label:"男"
                },
                {
                    label:"女"
                }
                ]
            }
        }
    }
</script>


  