<script setup >
useHead({
  title: 'One Stop Filtration Industry Solution',  // 页面标题
  meta: [
    {
      name: 'One Stop Filtration Industry Solution',
      content: 'One Stop Filtration Industry Solution',
      hid: 'One Stop Filtration Industry Solution'  // 保证唯一性，避免重复
    }
  ]
})
</script>

<template>
  <div class="mainBox">
    <vertical-nav2 :menuList="menuList"></vertical-nav2>
   <div class="aaa">
     <p>
       Research and Development allows us to stay one step ahead of our competition, we have accumulated over 110 patents in producing air filter medias and filters. Through R&D we can design new products and improve on existing offerings, giving us and you the competitive edge.
     </p>
     <p>
       In our teams of development, we move forward to evolving new generation products within filtration medias, filter designs and eco sustainable paper and packaging.  Innovation and product development is a strong valued asset to our existing and new customers looking for solutions and that competitive edge. We would welcome your filter media, filter and eco-packaging enquiries.
     </p>
     <img src="../../../public/images/about/18.webp" alt="">
   </div>
  </div>
</template>

<style scoped>
.mainBox{
  width: 100%;
  height: calc(100% - 0.15rem);
  display: flex;
}
.aaa{
  flex: 1;
  padding: 1.18rem 0 0 0.89rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  border-left: 1px solid white;
  position: relative;
  font-size: 0.25rem;
  font-family: AlibabaPuHuiTi2-45-Light;
  line-height: 0.4rem;
  color: white;
}
.mainBox p{
  margin-bottom: 0.25rem;
  width: 9.75rem;
  margin-right: 0.9rem;;
}
.mainBox img{
  width: 4.47rem;
  object-fit: cover;
  margin-top: 1.16rem;
}
@media (max-width: 1024px) {
  .aaa{
    border: none;
    margin-bottom: 50px;
  }
  .mainBox p{
    width: 80% !important;
    font-size:0.35rem ;
  }
}
</style>