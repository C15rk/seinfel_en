<template>
  <layout-lift>
    <img src="../../../public/images/life/4.webp" alt="picture">
  </layout-lift>
</template>

<script setup>
useHead({
  title: 'Workflow chart',  // 页面标题
  meta: [
    {
      name: 'Workflow chart',
      content: 'Workflow chart',
      hid: 'Workflow chart'  // 保证唯一性，避免重复
    }
  ]
})


</script>
<style scoped>

img{
  width: 9rem;
  height: 9.69rem;

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