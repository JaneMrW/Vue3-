<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-08-02 08:17:54
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-08-05 14:29:05
 * @FilePath: \blogSystem\src\views\vueIntQuestions\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="demo-collapse">
      <el-collapse v-for="item in questionList" :key="item.id" v-model="activeName" accordion>
        <el-collapse-item class="titleClass" :title=item.title  :name=item.id>
          <li style="font-size:14px;" v-for="Answer in item.Answer" :key="Answer.AnsId">
            {{ Answer. answer}}
          </li>
        </el-collapse-item>
      </el-collapse>
    </div>
  </template>
  

  
  <script  setup>
  import { ref,version } from 'vue'
  console.log('version',version)
  const activeName = ref('1')
  const questionList = [
    {
        id:1,
        title:'1、v-if与v-show的区别？',
        Answer:[
        {
            AnsId:1,
            answer:'相同点：都是控制dom元素的显示和隐藏的'
        },
        {
            AnsId:2,
            answer:'不同点：'
        },
        {
            AnsId:2,
            answer:'1、原理不同：v-if是通过dom元素的删除和添加，来完成显示和隐藏，v-show是通过修改样式属性display的值，来完成显示和隐藏'
        },
        {
            AnsId:3,
            answer:'2、性能消耗不同：v-if的性能损耗体现在切换时，v-show的性能损耗在首次'
        },
        {
            AnsId:4,
            answer:'3、使用场景不同：v-if使用在元素切换不频繁的场景，v-show使用在元素切换频繁的场景'
        },
        ]
    },
    {
        id:2,
        title:'2、说说你对 SPA 单页面的理解，它的优缺点分别是什么？',
        Answer:[
         {
            AnsId:1,
            answer:'相同点：都是控制dom元素的显示和隐藏的'
         }
        ]
    },
    {
        id:3,
        title:'3、怎么样理解vue的单项数据流？',
        Answer:[
         {
            AnsId:1,
            answer:`首先：单项数据流是发生在父组件朝子组件传值的时候，
            所有的prop使得其父子porp之间形成了一个单项下行绑定，也就是说：父级prop的
            更新会向下流动到子组件中，但是反过来不行。`,
         },
         {
            AnsId:2,
            answer:`而且：每次父级组件发生更新时，子组件中所有的prop都将会刷新为最新的值，所以，在一个子组件内部改变prop，Vue会在
            浏览器的控制台中发出警告。`,
         }
        ]
    },
    {
        id:4,
        title:'4、computed和watch的区别和运用的场景？',
        Answer:[
          {
            AnsId:1,
            answer:`相同点：`,
         },
         {
            AnsId:2,
            answer:`computed和watch都可以实现数据的监听`,
         },
         {
            AnsId:3,
            answer:`区别：`,
         },
         {
            AnsId:4,
            answer:`computed：是计算属性，以来其他属性值，并且computed的值有缓存，当依赖的属性值发生改变时，才会重新计算computed的值，默认是只读的
            (相当于getter函数)，它可以设置getter和setter函数来完成读写`,
         },
         {
            AnsId:5,
            answer:`watch：更多的是观察的作用，每次监听的数据变化时都会执行回调进行后续getter`,
         },
        ]
    }
  ]
  </script>
  <style lang="less">
    .el-collapse-item__header {
        font-size: 15px;
        font-weight: bold;
    }
  </style>