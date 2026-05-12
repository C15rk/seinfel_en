<template>
  <div class="mainBox">
    <vertical-nav2 :menuList="menuList"></vertical-nav2>
    <div class="aaa">
      <div class="info">
        <div class="top">
          <div class="left">
            YEAR
          </div>
          <div class="right">
            Development events
          </div>
          <borCopy class="seinBor1"></borCopy>
        </div>
        <div class="item" v-for="(item,index) in list" :key="index">
          <div class="left">
            {{ item.time }}
          </div>
          <div class="right">
            {{item.info}}
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script setup>
useHead({
  title: 'Seinfel Development History',  // 页面标题
  meta: [
    {
      name: 'Seinfel Development History',
      content: 'Seinfel Development History',
      hid: 'Seinfel Development History'  // 保证唯一性，避免重复
    }
  ]
})
import {ref} from "vue";

let list=ref([
  {
    time:1993,
    info:'First paper bag production for vacuum cleaners produced in China'
  },
  {
    time:1996,
    info:'Introduction of wet-laid nonwoven machine online export to 3M and Japan'
  },
  {
    time:1998,
    info:'Automatic dust bag production line started'
  },
  {
    time:2003,
    info:'Introduction of ultra-fine glass fiber filter materials'
  },
  {
    time:2004,
    info:'Introduction HEPA filter production lines'
  },
  {
    time:2009,
    info:'Introduced development and production of PTFE stretch film'
  },
  {
    time:2012,
    info:'Introduction Air purification production line'
  },{
    time:2013,
    info:'Production of high-efficiency, low resistance, and washable filters'
  },
  {
    time:2018,
    info:'R&D into continuous production of automotive filters'
  },
  {
    time:2019,
    info:'Introduction 100% biodegradable, packaging and paper'
  },
  {
    time:2020,
    info:'Commercial and industrial filters offered to the market'
  },
  {
    time:2023,
    info:'R&D development into energy saving air filters complementing high air stability, low resistance'
  }
])
</script>
<style scoped>
.mainBox{
  width: 100%;
  display: flex;
  height: calc(100% - 0.15rem);
}
.aaa{
  flex: 1;
  position: relative;
  border-left: 1px solid white;
  display: flex;
  justify-content: center;
}
.info{
  width: 10.39rem;
  height: 9.74rem;
  color: white;
  margin-top: 1.1rem;
  font-family: AlibabaPuHuiTi2-45-Light;
}
.info .top{
  height: 1.05rem;
  border-top: 1px solid white;
  font-size: 0.5rem;
  line-height: 0.3rem;
  display: flex;
  position: relative;
  justify-content: space-between;
  margin-bottom: 0.3rem;
}
.info .left{
  width: 18%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.info .right{
  width: 75%;
  display: flex;

  align-items: center;
}
.info .top .right{
  width: 70%;
}
.info .item{
  padding: 0.15rem 0;
  font-size: 0.25rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid white;
}
@media (max-width: 1024px) {
  .aaa{
    border: none;
    margin-bottom: 80px;
  }
}
</style>