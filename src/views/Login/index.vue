<!--
 * @Author: your name
 * @Date: 2023-07-10 15:40:57
 * @LastEditTime: 2023-07-15 13:07:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \blogSystem\src\views\bug\index.vue
-->
<template>
  <div class="container">
    <img class="backImg" src="../../assets/login.jpg" alt="" />
    <!-- 登录框 -->
    <div class="loginModal">
      <div class="loginTitle">博客管理系统</div>
      <el-form
        :model="loginForm"
        label-width="70px"
        :rules="loginRules"
        ref="loginFormRef"
      >
        <el-form-item label="账户" prop="userName">
          <el-input
            v-model="loginForm.userName"
            style="width: 300px"
            placeholder="请输入账户"
            clearable
          >
          </el-input>
        </el-form-item>
        <el-form-item label="密码" prop="userPassWord">
          <el-input
            type="password"
            v-model="loginForm.userPassWord"
            style="width: 300px"
            placeholder="请输入密码"
            clearable
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, toRaw } from "vue";
import { Calendar, User } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
// 登录逻辑
const loginFormRef = ref();
const loginForm = reactive({ userName: "", userPassWord: "" });

const loginRules = reactive({
  userName: [
    { required: true, message: "请输入用户名", trigger: "blur" },
  ],
  userPassWord: [
    { required: true, message: "请输入密码", trigger: "blur" },
  ],
});
//验证通过函数
const onSubmit = () => {
  console.log("用户登录了");
  // console.log(loginFormRef,'loginFormRef');
  loginFormRef.value.validate().then(() => {
    debugger;
    console.log(toRaw(loginForm));
  });
  // console.log('e',e);
};
</script>

<style lang="less">
.container {
  height: 100%;
  display: flex;
  position: relative;
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
  background: rgb(234, 247, 248);
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

