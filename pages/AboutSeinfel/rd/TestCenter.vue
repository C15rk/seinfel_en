<script setup >
useHead({
  title: 'Test Center',  // 页面标题
  meta: [
    {
      name: 'Test Center',
      content: 'Test Center',
      hid: 'Test Center'  // 保证唯一性，避免重复
    }
  ]
})
import {ref,onMounted} from 'vue'
import {add, add2, add3, add4} from "~/utils/bor.js";

let list=ref([
  {
    url:'/images/about/4.webp',
    name:'AFS150_Automatic_Filter Scanning Test System'
  },
  {
    url:'/images/about/5.webp',
    name:'PAF112 Cabin Air Filter Test System(Gas Adsorption)'
  },
  {
    url:'/images/about/6.webp',
    name:'CADR Test Chamber -30m ³ Test Warehouse'
  },
  {
    url:'/images/about/7.webp',
    name:'CADR Test Chamber -3m ³ Test Warehouse'
  },
  {
    url:'/images/about/8.webp',
    name:'ISO11155 Test Bench'
  },
  {
    url:'/images/about/9.webp',
    name:'Ventilation Filter Resistance Efficiency Test Bench'
  },
  {
    url:'/images/about/10.webp',
    name:'Mpps Efficiency Test Bench'
  },
  {
    url:'/images/about/11.webp',
    name:'Dust Dispersion Experimental Platform'
  },
  {
    url:'/images/about/12.webp',
    name:'Electro-dynamic Shaker'
  },
  {
    url:'/images/about/13.webp',
    name:'Electrodynamic Vibration Shaker'
  },
  {
    url:'/images/about/14.webp',
    name:'Smoothness Tester'
  },
  {
    url:'/images/about/15.webp',
    name:'Filter Element Structural Integrity Test Bench'
  },
  {
    url:'/images/about/16.webp',
    name:'Oil Filter Comprehensive Test Bench'
  },
  {
    url:'/images/about/17.webp',
    name:'Salt Spray Test Bench'
  },
  {
    url:'',
    name:''
  },
])
onMounted(()=>{
  // add()
  // add2()
  // add3()
  // add4()
})
</script>

<template>
  <div class="mainBox">
    <vertical-nav2 :menuList="menuList"></vertical-nav2>
    <div class="aaa">
      <div class="box">
        <p class="item">
          As we outline in our Research and Development page, we have a thirst for knowing and understanding how things work and function. As a filtration media and eco paper production company we have a responsibility to make sure that what ever products we produce meet with our own quality assurance standards as well as International and local approval standards.
        </p>
        <p  class="item">
          As part of our customer relations and growth development we offer our service on comparative testing, measuring the performance between existing products and new concepts / prototype under development to give validation in order to build a product that meets the user’s needs.
        </p>
        <p class="item">
          We have been honored and certified to having one of best Test laboratories in Zhejiang, analyzing and developing filtration membrane materials. Our products are certified by many top 500 enterprises.
        </p>
      </div>
      <div class="list" >
        <div class="listItem" v-for="(item,index) in list" :key="index">
          <bor2 :class="{'active':(index+1) % 3==0,'oneBor1':true}"></bor2>
          <img :src="item.url" alt="" v-if="item.url">
          <p>
            {{item.name}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.mainBox{
  width: 100%;
 display: flex;
}
.aaa{
  flex: 1;
  position: relative;
  font-size: 0.25rem;
  font-family: AlibabaPuHuiTi2-45-Light;
  line-height: 0.4rem;
  color: white;
}
.box{
  height: 7.71rem;
  border-left: 1px solid white;
  padding: 1.18rem 0 0 0.89rem;
}
.item{
  margin-bottom: 0.25rem;
  width: 9.43rem;
}
.list{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 0.15rem;
}
.list .listItem{
  width: 3.85rem;
  height: 4rem;
  padding: 0.575rem 0.34rem 0 0.34rem;
  font-size: 0.2rem;

  position: relative;
}
.list .listItem img{
  width: 3.24rem;
  height: 2.01rem;
}
.list .listItem p{
  max-width: 3.24rem;
  margin-top: 0.4rem;
  font-size: 0.2rem;
  line-height: 0.25rem;
  text-align: center;
}
@media (max-width: 1024px) {
  .mainBox{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .box{
    border: none;

  }
  .list{
    padding-left: 2rem;
    margin-top: 1rem;
  }
  .oneBor1 {
    display: none;
  }
  .item{
    scale: 1.5;
    margin-bottom:1.2rem;
  }
  .list .listItem p{
    font-size: 0.3rem;
    line-height: 0.3rem;
  }
}
@media (max-width: 1024px) {
  .aaa{
    border: none;
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>