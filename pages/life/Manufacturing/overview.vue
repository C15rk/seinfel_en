<template>
  <layout-lift>
    <div class="item" v-for="(item,index) in info" :key="index" :style="{' marginTop':index===0?'0':''}">
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
  </layout-lift>
</template>

<script setup>
useHead({
  title: 'overview',  // 页面标题
  meta: [
    {
      name: 'overview',
      content: 'overview',
      hid: 'overview'  // 保证唯一性，避免重复
    }
  ]
})
let info=[
  {
    txt:[
      'SEINFEL has a global manufacturing base, a multi-level evaluation program and a standardized quality control system.'
    ]
  },
  {
    name:[
      'Global Manufacturing Bases: '
    ],
    txt:[
      'We have manufacturing bases in Svay Rieng, Cambodia; Zhejiang, China; Guangdong, China; Anhui, China; and Johor Bahru, Malaysia (under planning). It covers an area of more than 180,000 square meters and has more than 2,000 employees. The bases are equipped with professional technicians, managers, inspectors, manufacturing personnel and all kinds of specialized equipment, which can meet the manufacturing and delivery needs of different countries and regions.'
    ]
  },
  {
    name:[
      'Multi-level evaluation program: '
    ],
    txt:[
      'The company has an all-round testing and evaluation system from product testing to whole machine testing and system evaluation. Each filter can be tested from the microstructure of the filter material, physical properties, and filtration performance. We can quickly match the performance of the whole machine, improve the quality and speed of the development of the whole machine, and combine with the application scenarios, simulate the use of the environment, quantify the system indicators, which is one of the important references for customers to optimize the design of the system.'
    ]
  },
  {
    name:[
      'Quality control: ',
    ],
    txt:[
      'quality line is like a lifeline, SEINFEL has established QRQC - Quick Reverse Quality Control and perfect product recall management system to protect the rights and interests of customers.'
    ]
  },
]

</script>
<style scoped>
.mainBox img{
  width: 10.09rem;
  height: 4.5rem;
}
.item{
  width: 10.09rem;
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
@media (max-width: 1024px) {

  .item{
   scale: 1.5;
    margin-bottom:1.5rem;
  }
}
</style>