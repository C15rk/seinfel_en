<template>
 <layout-lift>
   <img src="../../../public/images/life/3.webp" alt="picture">
 </layout-lift>
</template>

<script setup>
useHead({
  title: 'Incoming Goods',  // 页面标题
  meta: [
    {
      name: 'Incoming Goods',
      content: 'Incoming Goods',
      hid: 'Incoming Goods'  // 保证唯一性，避免重复
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

img{
  width: 9.33rem;
  height: 10.27rem;

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