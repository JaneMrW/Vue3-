<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-08-05 14:43:10
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-08-05 16:11:07
 * @FilePath: \blogSystem\src\views\vueApi\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div class="smallTitle">
      <span class="symbol"># &nbsp;</span> nextTick()
    </div>
    <Suspense>
       <template #default>
        <el-button id="counter" @click="increment" type="primary">{{ count }}</el-button>
       </template>
    </Suspense>
  </div>
</template>

<script setup>
import { ref, nextTick } from "vue";
const count = ref(0);
async function increment() {
  count.value++;
}
//DOM还未更新
console.log(document.getElementById("counter").textContent);
await nextTick();
//此时已经更新
console.log(document.getElementById("counter").textContent);
</script>

<style lang="less">
.smallTitle {
  font-weight: bold;
  font-size: 15px;
  .symbol {
    color: #42b883;
    font-size: 17px;
  }
}
</style>