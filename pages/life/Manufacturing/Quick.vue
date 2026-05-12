<template>
  <layout-lift>
    <div class="item" style="margin-top: 0;">
      SEINFEL has a perfect rapid response quality control management program to respond, make rapid response and solution. The products/matters concerned are brought under control quickly and completely to minimize or reduce the adverse effects and losses caused to the customers.
    </div>
    <img src="../../../public/images/life/2.webp" alt="picture">
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
  </layout-lift>
</template>

<script setup>
useHead({
  title: 'Quick Reverse Quality Control',  // 页面标题
  meta: [
    {
      name: 'Quick Reverse Quality Control',
      content: 'Quick Reverse Quality Control',
      hid: 'Quick Reverse Quality Control'  // 保证唯一性，避免重复
    }
  ]
})
let info=[
  {
    txt:[
        'Full flow quality control from input, process management and output.',
        'Comply with ISO9001, ISO14001, ISO45001 system standards, and passed the German ',
        'IATF16949 certification in 2020.',
        'Have QRQC-quick reaction quality control and product recall, after-sales service system.'
    ]
  },
]

</script>
<style scoped>
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
p{
  font-size: 0.25rem;
  line-height: 0.4rem;
}
img{
  width: 8.9rem;
  height: 9.69rem;
  margin-top: 0.7rem;
}
@media (max-width: 1024px) {

  .item{
    scale: 1.5;
    margin-bottom:0.5rem;
  }
  img{
    margin-bottom: 0.5rem;
    width: 70%;
    height: auto;
  }
}
</style>