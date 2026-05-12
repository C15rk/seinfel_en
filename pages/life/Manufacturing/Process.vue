<template>
 <layout-lift>
   <img src="../../../public/images/life/5.webp" alt="picture">
 </layout-lift>
</template>

<script setup>
useHead({
  title: 'Process Inspection Flowchart',  // 页面标题
  meta: [
    {
      name: 'Process Inspection Flowchart',
      content: 'Process Inspection Flowchart',
      hid: 'Process Inspection Flowchart'  // 保证唯一性，避免重复
    }
  ]
})


</script>
<style scoped>

img{
  width: 8.57rem;
  height: 11.09rem;

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