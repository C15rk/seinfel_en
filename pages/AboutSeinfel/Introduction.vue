<template>
  <div class="mainBox">
    <vertical-nav2 :menuList="menuList"></vertical-nav2>
    <div class="aaa">
      <div class="title">
        <img src="../../public/images/about/1.webp" alt="" class="img1">
      </div>
      <div class="bot">
        <borCopy class="intro1"></borCopy>
        <div class="left">
          <p>
            Seinfel has been developing and producing filtration materials and products for the air filtration and purification industry for over 30 years, as part of the ZFT group of companies our experience is unrivalled. Our range of materials and products spans across all applications of domestic, commercial and industrial air purification, floorcare filtration, automotive filtration and environmentally friendly packaging materials. We can offer our clients bespoke customised solutions for a wide range of filtration applications utilising our team of over 100 dedicated R&D Engineers.
          </p>
          <img src="../../public/images/about/2.webp" alt="" class="icon">
        </div>
        <div class="right">
          <Bor2 class="int3"></Bor2>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup >
useHead({
  title: 'Introduction',  // 页面标题
  meta: [
    {
      name: 'Introduction',
      content: 'Introduction',
      hid: 'Introduction'  // 保证唯一性，避免重复
    }
  ]
})
</script>

<style scoped>
.mainBox{
  width: 100%;
  display: flex;
  height: calc(100% - 0.15rem);
  position: relative;

}
.aaa{
  flex: 1;
  border-left: 1px solid white;
}
.mainBox .title{
  width: 100%;
  height: 2.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mainBox .title img{
  width: 10.13rem;

}
.bot{
  height: 80.8%;
  position: relative;
  display: flex;
  justify-content: space-between;
  color: white;

}
.bot .left{
  width: 7.76rem;
  padding: 0.9rem;
}
.bot .left .icon{
  width: 3.17rem;
  height: 1.5rem;
}
.bot .left p{
  font-family: AlibabaPuHuiTi2-45-Light;
  font-size: 0.25rem;
  line-height: 0.4rem;
  margin-bottom: 200px;
}
.bot .right{
  flex: 1;
  height: 100%;
  position: relative;
}

@media (max-width: 1024px) {
  .aaa{
    border: none;
  
  }
  .bot{
    display: flex;
    flex-direction: column;
    align-items: center;

  }
  .bot .left{
    margin-top: 20px;
  }
  .bot .left .icon{
    width: 7rem;
    height: auto;
  }
  .bot .left p{
    margin-bottom: 100px;
  }
}
</style>