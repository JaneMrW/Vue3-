<template>
  <!-- 顶部 -->
  <el-row class="el-row">
    <el-col class="el-col" :span="6" v-for="item in cardData" :key="item.id">
      <el-card  shadow="hover" @click="goToDetails(item)">
        <!-- @mouseleave="visible = !visible,curId=''" -->
        <!-- @mouseenter="mouseEnterCard(item)" -->
        <!-- 单个卡片 -->
        <div class="cardContainer">
          <img class="imageStyle" style="border:solid,2px,red" :src="item.image" />
          <div class="container">
            <p class="goodName">{{item.goodName}}</p>
            <div class="size">{{item.size }}</div>
            <div class="price">￥{{item.price }}</div>
          </div>
          <div v-if="item.id == curId" class="parent">
            <div class="buttonRanger">
              <el-button
                style="height:26px;width62px;background:#FF1976D2"
                :icon="Edit"
                type="primary"
              >新增</el-button>
              <el-button
                style="height:26px;width62px;background:#FFE96767"
                :icon="Delete"
                type="primary"
              >删除</el-button>
            </div>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
import { Edit, Delete, Search, RefreshRight } from "@element-plus/icons-vue";
let curId = ref("");
let visible = ref(false);
//页面数据
const cardData = [
  {
    id: 1,
    image: new URL("../assets/img/bullRed.jpg", import.meta.url).href,
    goodName:
      "Jordan 23号可调节大容量 聚酷纤维书包背包仿球衣双肩包 常规 北卡蓝/公牛红/黑色",
    size: "公牛红",
    price: "359"
  },
  {
    id: 2,
    image: new URL("../assets/img/purple.jpg", import.meta.url).href,
    goodName: "Nike 拉链开合可调节肩带 织物 书包背包双肩包小号 儿童款 粉色",
    size: "均码",
    price: "110"
  },
  {
    id: 3,
    image: new URL("../assets/img/green.jpg", import.meta.url).href,
    goodName: "Nike耐克Havward 休闲运动涤纶书包背包双肩包男女同款情侣款 绿色",
    size: "均码",
    price: "359"
  },
  {
    id: 4,
    image: new URL("../assets/img/black.jpg", import.meta.url).href,
    goodName: "Nike 运动休闲字母印花拉链 书包背包双肩包 男款 黑色",
    size: "均码",
    price: "90"
  },
  {
    id: 5,
    image: new URL("../assets/img/laohuabag.jpg", import.meta.url).href,
    goodName: "Jordan Logo标志 斜挎单肩包 男女同款情侣款黑色",
    size: "均码",
    price: "280"
  },
  {
    id: 6,
    image: new URL("../assets/img/converPrintingBag.jpg", import.meta.url).href,
    goodName:
      "Converse 时尚运动卡通贴画 聚酷纤维 书包背包双肩包 男女同款情侣款白色",
    size: "均码",
    price: "280"
  },
  {
    id: 7,
    image: new URL("../assets/img/babyBlueBag.jpg", import.meta.url).href,
    goodName:
      "Nike 春季收纳拉链口袋拼接网眼训练耐用 书包背包双肩包男女同款情侣款 浅紫色",
    size: "均码",
    price: "190"
  },
  {
    id: 8,
    image: new URL("../assets/img/shoulderBag.jpg", import.meta.url).href,
    goodName:
      "Nike Utilitv Power气热背带运动训练可调节肩带 织物露营包旅行包健身包 男女同款情侣款 军械深海蓝/军械深海蓝/君王",
    size: "均码",
    price: "190"
  },
  {
    id: 9,
    image: new URL("../assets/img/babyGreen.jpg", import.meta.url).href,
    goodName:
      "[2023年春季新款] Nike 运动休闲 织物书包背包双肩包男女同款情侣款 绿黄色",
    size: "均码",
    price: "200"
  }
];
const goToDetails = (item) => {
  console.log("??????");
  router.push({
    name: "GoodDetail",
    //参数
    query:{
      goodPrice:item.price,
      goodName:item.goodName,
      goodSize:item.size,
    }
  });
};
//鼠标移入card事件
const mouseEnterCard = item => {
  curId.value = item.id;
  visible.value = !visible;
};
</script>
<style lang="less">
.el-row {
  padding: 10px;
}
.el-col el-col-6 el-col {
  padding: 10px;
}
.cardContainer {
  display: flex;
  height: 65px;
  .imageStyle {
    width: 65px;
    height: 65px;
  }
  .goodName {
    width: 300px;
    font-size: 1px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .size {
    font-weight: bold;
  }
  .price {
    font-weight: bold;
  }
}

.allBase {
  // color: #868686;
  font-size: 16px;
  cursor: pointer;
}
.allBase:hover {
  color: #ff1976d2;
}
.parent {
  display: flex;
}
.buttonRanger {
  margin-top: 64px;
  margin-left: 66px;
}
</style>
