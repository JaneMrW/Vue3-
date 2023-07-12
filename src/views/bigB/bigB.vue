<template>
  <el-row class="tac">
    <el-col :span="4">
      <!-- <h5 class="mb-2">Default colors</h5> -->
      <div class="userContainer">
        <div>
          <img class="headSculpture" src="../../assets/2841780.png" alt="" />
        </div>
        <div class="uerName">
          <div>
            <span class="font-weight:bold;font-size:17px">dabuliu</span>
          </div>
          <div class="buttonBottom">
            <div>
              <el-icon color="#1c84c6"><Watermelon /></el-icon
              ><span type="primary">在线</span>
            </div>
            <div>
              <el-icon color="#ed5565"><Open /></el-icon
              ><span type="primary">注销</span>
            </div>
          </div>
        </div>
      </div>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="1">
          <el-icon><House /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><Tools /></el-icon>
            <span>系统管理</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script setup>
import {
  Document,
  Menu as IconMenu,
  House,
  Tools,
  Setting,
  Watermelon,
  Open,
} from "@element-plus/icons-vue";
// const handleOpen = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }
// const handleClose = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }
</script>

<style lang="less">
.userContainer {
  display: flex;
  .headSculpture {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    padding: 15px;
  }
  .uerName {
    font-size: 16px;
    padding-top: 20px;
    .buttonBottom {
        display: flex;
        font-size: 15px;
    }
  }
}
</style>