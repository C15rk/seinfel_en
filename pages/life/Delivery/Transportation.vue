<template>
  <layout-lift>
    <div class="item">
      Sea, land and air global transportation, time-sensitive regional coverage;
      Air transportation next day, cross-border week, intercontinental fastest half a month;
      Full cargo insurance, online can check the real-time in-transit status;
      Self-operated fleet, GPS online process visualization;
      TMS systematic management, intelligent loading scheme & line optimization;
      Systematic linkage of global bases, economic distribution radius and optimal time efficiency.
    </div>
    <img src="../../../public/images/life/7.webp" alt="picture" class="img1">
    <img src="../../../public/images/life/77.webp" alt="picture" class="img2">
  </layout-lift>
</template>

<script setup>
useHead({
  title: 'Transportation program',  // 页面标题
  meta: [
    {
      name: 'Transportation program',
      content: 'Transportation program',
      hid: 'Transportation program'  // 保证唯一性，避免重复
    }
  ]
})

</script>
<style scoped>

.item{
  width: 10.09rem;

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
  width: 10.81rem;
  height: auto;
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