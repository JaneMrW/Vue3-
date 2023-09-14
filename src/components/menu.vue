<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-08-01 14:48:54
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-08-02 08:26:17
 * @FilePath: \blogSystem\src\components\menu.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-aside style="width:200px;height:100%">
    <div class="topLogo">
      <div class="logoContainer">
        <img class="logo" src="../assets/img/indexLogin.jpg" />
        <div class="logoTitle">商家后台</div>
      </div>
    </div>
    <el-menu default-active="2" class="el-menu-vertical-demo">
      <el-menu-item index="1">
        <template #title>
          <el-icon>
            <HomeFilled />
          </el-icon>
            <span>首页</span>
        </template>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon>
          <icon-menu />
        </el-icon>
        <!-- <span>Navigator Two</span> -->
        <router-link :to="{path:'/card'}">
          <span>shop</span>
        </router-link>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon>
          <document />
        </el-icon>
        <span>Navigator Three</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon>
          <setting />
        </el-icon>
        <span>vue面试题</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  HomeFilled
} from "@element-plus/icons-vue";
</script>
<style lang='less'>
.topLogo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  .logoContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .logoTitle {
    font-size: 20px;
    font-weight: bold;
    padding-left: 5px;
  }
}
</style>