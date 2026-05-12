<script setup lang="ts">
useHead({
  title: 'Manufacturing Capability',  // 页面标题
  meta: [
    {
      name: 'Manufacturing Capability',
      content: 'Manufacturing Capability',
      hid: 'Manufacturing Capability'  // 保证唯一性，避免重复
    }
  ]
})
</script>

<template>
 <div class="mainBox">
   <vertical-nav2 :menuList="menuList"></vertical-nav2>
  <div class="aaa">
    <p>
      As a leading manufacturer of air filtration medias and assembled filters for Industrial, Commercial and OEM filtration, we develop and produce filters for a very wide range of applications, this includes HVAC, Automotive, Rail, Scientific, Laboratory cabinets, Cleanroom, Medical Equipment, Safety Cabinets, Domestic Appliances, Air purifiers, Industrial Vacuum, Respiratory and more…
    </p>
    <img src="../../public/images/about/3.webp" alt="">
    <p class="item">
      In order to offer a high-end manufacturing service and distribution our investment throughout all of our manufacturing facilities starts with skilled production teams and quality assurance managers, our facilities include cleanrooms and high standard hygiene work stations and storage areas.
    </p>
    <p class="item">
      Our manufacturing equipment to enable us to keep control of the whole production process from moudling machines offering simple to complex moulds, Automated pleating equipment capable of mini pleats, deep pleats and special shaped sizes, Ultrasonic welding lines, various adhesive capabilities, automatic pad cutting, lazer – Pad print equipment etc. Our capital equipment continues to be updated in order to offer and supply consistency at high end production and importantly to decrease waste for our environmental commitment.
    </p>
    <p class="item">
      All of our facilities can handle short and long production runs as well as demanding delivery requirements.
    </p>
    <p class="item">
      With over 180,000 square meters of working area we are capable in providing you your present and future filter needs, we would welcome your enquiries.
    </p>
  </div>
 </div>
</template>

<style scoped>
.mainBox{
  width: 100%;
display: flex;
   height: 19.21rem;

}
.aaa{
  flex: 1;
  margin-bottom: 0.15rem;
  position: relative;
  border-left: 1px solid white;
  overflow: hidden;
  padding: 1.18rem 0 0 0.89rem;
  font-size: 0.25rem;
  font-family: AlibabaPuHuiTi2-45-Light;
  line-height: 0.4rem;
  color: white;
}
.mainBox p{
  max-width: 8.8rem;
}
.mainBox img{
  width: 100%;
  height: 5.3rem;
  margin: 0.83rem 0 1.08rem 0;
}
.item{
  margin-bottom: 0.25rem;
}

@media (max-width: 1024px) {
  .aaa{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
}
@media (max-width: 1024px) {
  .aaa{
    border: none;
    margin-bottom: 50px;

  }
  .mainBox img{
    width: 60%;
    height: auto;
  }
  .mainBox p{
    max-width: 80% !important;
    font-size:0.3rem ;
  }

}
</style>