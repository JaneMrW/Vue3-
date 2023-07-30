<template>
  <!-- 顶部 -->
  <el-row :gutter="24">
    <el-col :span="6">
      <el-card
        class="boxBotton"
        shadow="hover"
        @mouseleave="visible = !visible"
        @mouseenter="visible = !visible"
      >
        <div class="topParent">
          <div></div>
          <div class="rightTop">通用规则库</div>
        </div>
        <div class="parent">
          <div>
            <img src="../../assets/严重.png" class="image" />
          </div>
          <div>
            <p class="goodName">姓名长度检查</p>
            <p class="badName">长度检查</p>
          </div>
          <div class="buttonRanger" v-show="visible">
            <el-button
              style="height:26px;width62px;background:#FF1976D2"
              :icon="Edit"
              type="parimary"
              >新增</el-button
            >
            <el-button
              style="height:26px;width62px;background:#FFE96767"
              :icon="Delete"
              type="parimary"
              >删除</el-button
            >
          </div>
        </div>
        <!-- <div class="bottomParent">
          <div>
            
          </div>
        </div> -->
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card class="boxBotton" shadow="hover">
        <div class="topParent">
          <div></div>
          <div class="rightTop">本科生院规则库</div>
        </div>
        <div class="parent">
          <div>
            <img src="../../assets/严重.png" class="image" />
          </div>
          <div>
            <p class="goodName">常用算法检查</p>
            <p class="badName">数据类型检查</p>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card class="boxBotton" shadow="hover">
        <div class="topParent">
          <div></div>
          <div class="rightTop">本科生院规则库</div>
        </div>
        <div class="parent">
          <div>
            <img src="../../assets/轻微.png" class="image" />

          </div>
          <div>
            <p class="goodName">常用算法检查</p>
            <p class="badName">自定义正则检查</p>
          </div>
        </div>
      </el-card>
    </el-col>
    <el-col :span="6">
      <el-card class="boxBotton" shadow="hover">
        <div class="topParent">
          <div></div>
          <div class="rightTop">本科生院规则库</div>
        </div>
        <div class="parent">
          <div>
            <img src="../../assets/轻微.png" class="image" />
          </div>
          <div>
            <p class="goodName">常用算法检查</p>
            <p class="badName">自定义正则检查</p>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script setup>
import { ref } from "vue";
import { Edit, Delete, Search, RefreshRight } from "@element-plus/icons-vue";
let visible = ref(false);
</script>
<style lang="less">
.headerTop {
  display: flex;
  height: 38px;
  align-items: center;
  margin: 12px 0 13px 0;
  border-bottom: 1px solid #f1f1f1;
  .ruleBase {
    margin-right: 7px;
    font-size: 16px;
    font-weight: bold;
  }
}
.allBase {
  color: #868686;
  font-size: 16px;
  cursor: pointer;
  .allbaseImg {
    margin-left: -11px;
  }
}
.allBase:hover {
  color: #ff1976d2;
}
.el-header {
  height: 107px;
}
.headerBottom {
  display: flex;
  justify-content: space-between;
  .rightSelect {
    display: flex;
  }
}
.el-row {
  margin-top: 20px;
}
.el-card__body {
  // display: flex;
  // padding: 4px 5px 14px 10px;
}
.goodName {
  font-size: 16px;
  font-weight: bold;
  margin-top: 24px;
}
.badName {
  font-size: 14px;
}
.rightTop {
  margin-top: -14px;
  margin-left: 258px;
}
.topParent {
  display: flex;
  justify-content: space-between;
  .rightTop {
    background: #f1f1f1;
    height: 22px;
    line-height: 22px;
    padding: 0 5px;
    margin: -20px -20px 0 0;
  }
}
.parent {
  display: flex;
}
.buttonRanger {
  margin-top: 64px;
  margin-left: 66px;
}
</style>
