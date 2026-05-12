<template>
  <layout-lift>
    <div class="item">
      The company has a perfect product recall management program, which can initiate the recall procedure in a timely and effective manner and notify the relevant parties of the relevant information in order to minimize customer losses. The product in question is brought under control quickly and completely to minimize or reduce the harm caused to users.
    </div>
    <img src="../../../public/images/life/6.webp" alt="picture">
  </layout-lift>
</template>

<script setup>
useHead({
  title: 'Product Recall Management',  // 页面标题
  meta: [
    {
      name: 'Product Recall Management',
      content: 'Product Recall Management',
      hid: 'Product Recall Management'  // 保证唯一性，避免重复
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
  width: 11.43rem;
  height: 4.39rem;
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