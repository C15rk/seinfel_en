<script setup >
useHead({
  title: 'Filter',  // 页面标题
  meta: [
    {
      name: 'Filter',
      content: 'Filter',
      hid: 'Filter'  // 保证唯一性，避免重复
    }
  ]
})
import {ref} from 'vue'
let info=ref([
  {
    name:[
      'Features:'
    ],
    txt:[
      'Antimicrobial, absorbent, deodorant, washable',
      'Having different optional materials such as PP, PET, PTFE, Glass Fiber, etc.',
      'Based on customers’ request, ZFT provides economic, scientific, and effective solutions ',
      'with advanced technical support and targeted services.',
    ]
  },
  {
    name:[
      'Application:'
    ],
    txt:[
      'Household and commercial handheld, bucket, horizontal, vertical, vacuum cleaners, sweeping robots.'
    ]
  },
])
</script>

<template>
  <div class="mainBox">
    <vertical-nav2 :menuList="menuList"></vertical-nav2>
    <div class="aaa">
      <div class="box">
        <img src="../../../public/images/products/5.webp" alt="products">
        <bor class="paperOne"></bor>
      </div>
      <div class="bott">
        <div class="item" v-for="(item,index) in info" :key="index">
          <div class="title" v-for="(tit,id) in item.name" :key="id">
            <h2>
              {{tit}}
            </h2>
          </div>
          <div class="txt">
            <p v-for="(txt,i) in item.txt" :key="i">
              {{txt}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mainBox{
  width: 100%;
  position: relative;
  font-size: 0.25rem;
  font-family: AlibabaPuHuiTi2-45-Light;
  line-height: 0.4rem;
  color: white;
  display: flex;
}
.aaa{
  flex: 1;
}
.box{
  height: 6.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.box img{
  width: 90%;
  height: auto;
}
.paperOne{

  left: -0.15rem;
  bottom: -0.3rem;
}
.bott{
  padding: 0.5rem 0 0 0.8rem;
  height: 11.5rem;
}
.item{
  width: 10.12rem;
  margin-top: 0.5rem;
  font-family: AlibabaPuHuiTi2-45-Light;
}
.item .title{
  margin-bottom: 0.17rem;
}
.item h2{
  font-size: 0.4rem;
  line-height: 0.35rem;

}
.txt{
  font-size: 0.25rem;
  line-height: 0.4rem;
}
@media (max-width: 1024px){
  .box{
    border: none;
    height: auto;
    margin-top: 0.5rem;
  }
  .bott{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .box img{
    width: 70%;
  }
  .item{
    scale: 1.5;
    margin-top: 1.3rem;
  }

}
</style>