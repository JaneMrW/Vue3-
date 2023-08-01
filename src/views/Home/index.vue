<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-07-13 23:06:53
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-08-01 16:57:13
 * @FilePath: \blogSystem\src\views\Home\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->


<template>
  <div class="common-layout">
    <el-container>
      <Menu></Menu>
      <el-container>
        <el-header>
          <div class="headerContainer">
            <div class="rules">
              <el-icon>
                <Histogram />
              </el-icon>
              <span style="padding-left:5px">玩法介绍</span>
            </div>
            <div>
              <el-dropdown>
                <div class="el-dropdown-link">
                  <img class="avtImg" src="../../assets/img/avtor.jpg" />
                </div>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>***</el-dropdown-item>
                    <el-dropdown-item @click="loginOut">退出</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import Menu from "../../components/menu.vue";
import { ArrowDown, Histogram } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
const router = useRouter();
const loginOut = () => {
  debugger;
  router.push({
    path: "/login"
  });
};
</script>
<style lang="less">
.headerContainer {
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .rules {
    padding-right: 10px;
  }
}
.avtImg {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
</style>

