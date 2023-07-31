<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-07-29 23:19:31
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-07-31 16:24:19
 * @FilePath: \blogSystem\src\components\YaoW.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="container">
			<el-button type="primary" @click="handleClick">调用父组件的方法</el-button>
  </div>
</template>

<script setup>
// 第一步 使用defineEmits声明父组件传来的事件
const emit = defineEmits(['handelChildrenClick'])
// 第二步 调用事件
const handleClick = () => {
	emit('handelChildrenClick')
};





</script>

<style lang="less">
.container {
  width: 400px;
  height: 300px;
  background: rgb(175, 146, 146);
  .userNameC {
    font-size: 20px;
    .endName {
      font-size: 12px;
    }
  }
}
</style>