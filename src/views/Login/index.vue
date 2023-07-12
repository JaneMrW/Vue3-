<!--
 * @Author: your name
 * @Date: 2023-07-10 15:40:57
 * @LastEditTime: 2023-07-11 10:35:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \blogSystem\src\views\bug\index.vue
-->
<template>
  <div class="container">
    <img class="backImg" src="../../assets/login.jpg" alt="">
    <!-- 登录框 -->
    <div class="loginModal">
      <div class="loginTitle">博客管理系统</div>
      <el-form :model="form" label-width="50px">
        <el-form-item label="账户">
          <el-input style="width:315px" placeholder="请输入账户" clearable />
        </el-form-item>
        <el-form-item label="密码">
          <el-input style="width:315px" placeholder="请输入密码" clearable />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
</script>

<style lang="less">
.container {
  height: 100%;
  display: flex;
  position:relative;
  .backImg {
    height: 100%;
    width: 100%;
  }
}
.loginModal {
  width: 400px;
  position: absolute;
  top: 30%;
  left: 42%;
  // background: rgb(241, 240, 237);
  border-radius: 5px;
  
  .loginTitle {
    font-size: 20px;
    font-weight: bold;
    width: 100%;
    margin: 5px 0;
    // height: 20px;

    align-items: center;
    text-align: center;
  }
}
</style>>

