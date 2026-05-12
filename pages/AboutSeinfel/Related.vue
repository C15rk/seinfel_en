<script setup >
useHead({
  title: 'Related Certificates',  // 页面标题
  meta: [
    {
      name: 'Related Certificates',
      content: 'Related Certificates',
      hid: 'Related Certificates'  // 保证唯一性，避免重复
    }
  ]
})
import {ref} from 'vue'
let list=ref([
  {
    url:'/images/about/19.webp',
    name:'AFS150_Automatic_Filter Scanning Test System'
  },
  {
    url:'/images/about/20.webp',
    name:'PAF112 Cabin Air Filter Test System(Gas Adsorption)'
  },
  {
    url:'/images/about/21.webp',
    name:'CADR Test Chamber -30m ³ Test Warehouse'
  },
  {
    url:'/images/about/22.webp',
    name:'CADR Test Chamber -3m ³ Test Warehouse'
  },
  {
    url:'/images/about/23.webp',
    name:'ISO11155 Test Bench'
  },
  {
    url:'/images/about/24.webp',
    name:'Ventilation Filter Resistance Efficiency Test Bench'
  },
  {
    url:'/images/about/25.webp',
    name:'Mpps Efficiency Test Bench'
  },
  {
    url:'/images/about/26.webp',
    name:'Dust Dispersion Experimental Platform'
  },
  {
    url:'/images/about/27.webp',
    name:'Electro-dynamic Shaker'
  },
  {
    url:'/images/about/28.webp',
    name:'Electrodynamic Vibration Shaker'
  },
  {
    url:'/images/about/29.webp',
    name:'Smoothness Tester'
  },

  {
    url:'',
    name:''
  },
])

</script>

<template>
  <div class="mainBox">
    <vertical-nav2 :menuList="menuList"></vertical-nav2>
    <div class="aaa">
      <div class="box">
        <p class="item">
          To fully ensure the quality, environment, and safety requirements of global customers, the company has successively obtained certificates such as SMETA Global Supply Chain Factory Inspection, IATF16969 Certification, CANS Laboratory, ISO/IEC 17025:2017 accredited laboratory judgment standards, FSC Forest Certification, IS09001 Quality Management System, ISO14001 Environmental Management System, ISO45001 Occupational Health and Safety Management System, etc.
        </p>
        <p  class="item">
          These certifications are recognise our commitment to quality management, production processes, laboratory capabilities, and ethical compliance. We will continue to be urged to maintain a high emphasis on quality, innovation, and ethics, continuously optimizing and improving our management systems, and providing better products and services to our global customers.
        </p>
      </div>
<!--      <div class="list" >-->
<!--        <div class="listItem" v-for="(item,index) in list" :key="index">-->
<!--          <bor2 class="oneBor1" :class="{'active':(index+1) % 4==0}"></bor2>-->
<!--          <img :src="item.url" alt="" v-if="item.url">-->

<!--        </div>-->
<!--      </div>-->
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


  height: 100%;
}
.aaa{
  flex: 1;
}
.box{
  height: 100%;
  //height: 7.71rem;
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
  width: 2.9rem;
  height: 4rem;
  padding: 0.4rem;
  font-size: 0.2rem;

  position: relative;
}
.list .listItem img{
  width: 2.15rem;
  height: 3.05rem;
  display: block;
}

@media (max-width: 1024px) {
  .aaa{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .box{
    border: none;

  }
  .list{
    padding-left: 2.5rem;
    margin-top: 0.5rem;
  }
  .oneBor1 {
    display: none;
  }
}
@media (max-width: 1024px) {
  .mainBox{
    border: none;
    margin-bottom: 50px;
  }
  .item{
    scale: 1.5;
    margin-bottom:1.5rem;
  }
  .list .listItem p{
    font-size: 0.3rem;
    line-height: 0.3rem;
  }
}
</style>