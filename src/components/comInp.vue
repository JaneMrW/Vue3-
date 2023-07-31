<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-07-28 08:10:48
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-07-31 16:24:17
 * @FilePath: \blogSystem\src\components\comInp.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="userName">
    <el-button type="primary" @click="handleClick">你好，哥</el-button>
    <span>{{inputName}}</span>
  </div>
</template>

<script setup>
// import {defineEmits} from 'vue'
//接受父组件传来的值
const props = defineProps({
  inputName: {
    require: true,
    inputName: String
  }
});
const emit = defineEmits([ "getName" ]);

const handleClick = () => {
	console.log('handleClick');
	emit('getName')
};
const childrenFunc = () => {
	alert('触发了子组件的方法')
}
// console.log(props.inputName);
defineExpose({childrenFunc})
</script>

<style lang="less">
.userName {
  color: red;
}
</style>