<!--
 * @Author: your name
 * @Date: 2023-07-11 21:14:29
 * @LastEditTime: 2023-07-11 21:36:18
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \blogSystem\src\views\YaoW\YaoW.vue
-->
<template>
  <div class="container">
    <el-form :model="form" label-width="120px">
      <el-form-item label="学校名称：">
        <el-input />
      </el-form-item>
      <el-form-item label="负责人：">
        <el-input />
      </el-form-item>
      <el-form-item label="联系电话：">
        <el-input />
      </el-form-item>
      <el-form-item label="学校代码：">
        <el-input />
      </el-form-item>
      <el-form-item label="用户名：">
        <el-input />
      </el-form-item>
      <el-form-item label="密码：">
        <el-input type="password" />
      </el-form-item>
      <el-form-item label="APPKey：">
        <el-input />
      </el-form-item>
      <el-form-item label="学校类型：">
        <el-input />
      </el-form-item>
      <el-form-item label="省机构编码：">
        <el-input />
      </el-form-item>
      <el-form-item label="省机构名称：">
        <el-input />
      </el-form-item>
      <el-form-item label="市机构编码：">
        <el-input />
      </el-form-item>
      <el-form-item label="市机构代码：">
        <el-input />
      </el-form-item>
      <el-form-item label="区县机构编码：">
        <el-input />
      </el-form-item>
      <el-form-item label="区县机构名称：">
        <el-input />
      </el-form-item>
      <el-form-item>
        <el-button style="background: #169bd5;width:100px"><span style="color:white">保存</span></el-button>
        <el-button style="width:100px">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
</script>
<style lang="less">
.container {
    padding-left: 20px;
}
.el-input {
  width: 350px;
}
.el-form-item__label {
  justify-content: flex-start;
}
</style>