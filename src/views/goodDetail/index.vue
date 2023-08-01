<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-07-31 16:15:13
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-08-01 21:20:08
 * @FilePath: \blogSystem\src\views\goodDetail\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
  // import { useRoute } from 'vue-router'
  // const route = useRoute();
  // let userName = route.params.userName
  // console.log('userNameuserNameuserName',userName);
-->
<template>
  <div>
    <el-descriptions title="商品参数" direction="vertical" :column="4" border>
      <el-descriptions-item label="商品名称">{{route.query.goodName}}</el-descriptions-item>
      <el-descriptions-item label="数量"></el-descriptions-item>
      <el-descriptions-item label="单价" :span="2">{{route.query.goodPrice}}</el-descriptions-item>
      <el-descriptions-item label="尺码">
        <el-tag size="small">{{route.query.goodSize}}</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="总价"></el-descriptions-item>
      <el-descriptions-item label="购买日期"></el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

// let {goodPrice,goodName} = route.query.goodPrice;
console.log('goodPrice',route.query.goodPrice);
console.log("goodName", route.query.goodName);
</script>

<style scoped>
.el-descriptions {
  margin-top: 20px;
}
</style>





