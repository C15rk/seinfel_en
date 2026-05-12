<template>
 <layout-lift>
   <img src="../../../public/images/life/8.webp" alt="picture" class="one">
   <div class="item">
     Over 300,000 square meters of self-owned warehouses to meet the inventory needs of each base;Over 100,000 square meters of VMI third-party hosting warehouses, effectively meeting JIT distribution for personalized customers at home and abroad;Block-chain type model of global base network sharing data and intelligent distribution of production & distribution;Efficient and accurate warehousing system;
     Professional and complete warehousing equipment and systematic SOP.
   </div>
   <img src="../../../public/images/life/9.webp" alt="picture" class="two">
 </layout-lift>
</template>

<script setup>
useHead({
  title: 'Warehousing Program',  // 页面标题
  meta: [
    {
      name: 'Warehousing Program',
      content: 'Warehousing Program',
      hid: 'Warehousing Program'  // 保证唯一性，避免重复
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
  width: 10.29rem;
  height: 5.51rem;

}
.two{
  width: 10rem;
  height: 10.45rem;
  margin-top: 0.7rem;
}
@media (max-width: 1024px) {

  .item{
    scale: 1.5;
    margin:1.5rem;
  }
  img{
    margin-bottom: 0.5rem;
    width: 70%;
    height: auto;
  }
}
</style>