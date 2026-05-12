<template>
  <layout-lift>
    <img src="../../../public/images/life/10.webp" alt="picture" class="one">
    <div class="item">
      Barcode management from raw material warehousing to finished product sales to customers;
      In the process of value conversion of raw materials & work-in-progress & finished products, the bar code is synchronized and converted to form a traceable chain;
      Every piece of goods in the hands of customers can be effectively traced to the raw material batch & manufacturing & quality personnel;
      The logistics and information flow in the whole supply chain are synchronized and entangled to ensure the scientific nature of the traceability;
      PLM system guarantees internal operation coherence and traceability.
    </div>
    <img src="../../../public/images/life/11.webp" alt="picture" class="two">
  </layout-lift>
</template>

<script setup>
useHead({
  title: 'Traceability program',  // 页面标题
  meta: [
    {
      name: 'Traceability program',
      content: 'Traceability program',
      hid: 'Traceability program'  // 保证唯一性，避免重复
    }
  ]
})

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
.one{
  width: 10.27rem;
  height:4.47rem;

}
.two{
  width: 10rem;
  height: 4.49rem;
  margin-top: 0.7rem;
}
@media (max-width: 1024px) {

  .item{
    scale: 1.5;
    margin:1.5rem;
  }

}
</style>