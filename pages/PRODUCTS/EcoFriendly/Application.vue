<script setup lang="ts">
useHead({
  title: 'Application',  // 页面标题
  meta: [
    {
      name: 'Application',
      content: 'Application',
      hid: 'Application'  // 保证唯一性，避免重复
    }
  ]
})
import {ref} from 'vue'

let obj=[
  {
    one:[
      {
        url:'/images/products/64.webp',
        name:'AFS150_Automatic_Filter Scanning Test System'
      },
      {
        url:'/images/products/65.webp',
        name:'PAF112 Cabin Air Filter Test System(Gas Adsorption)'
      },
      {
        url:'/images/products/62.webp',
        name:'CADR Test Chamber -30m ³ Test Warehouse'
      },
      {
        url:'/images/products/63.webp',
        name:'CADR Test Chamber -30m ³ Test Warehouse'
      },
    ],
    two:{
      infos:[
        {
          name:'Features:',
          txt:[
              "The products are widely used in the packaging of 3C electronic products, small home appliances, cosmetics, toys, auto parts and decorative parts, power tools, leather products, hardware, wine, ceramic crafts, cutlery sachets etc."
          ]
        },
      ],
    },
  },

]
</script>

<template>
  <div class="mainBox">
    <vertical-nav2 :menuList="menuList"></vertical-nav2>
   <div class="aaa">
     <div v-for="(item,index) in obj" :key="index" class="ma" :style="{marginTop:index===0?'0':'0.3rem'}">
       <div class="twoBox" >

         <div class="item" v-for="(ite,ind) in item.two.infos" :key="ind">
           <div class="txt">
             <p v-for="(it,i) in ite.txt" :key="i">
               {{it}}
             </p>
           </div>
         </div>
         <img style="width:9.97rem;height: 8.42rem;margin: 0.5rem 0" src="../../../public/images/products/61.webp" alt="products">
       </div>
       <div class="list" >
         <div class="listItem" v-for="(item,index) in item.one" :key="index" >
           <bor2 :class="{'active':(index+1) % 4==0,'oneBor2':true}"></bor2>
           <img :src="item.url" alt="products" v-if="item.url" :style="{width:index===2 || index===3?'4.2rem':'',height:index===2 || index===3?'2.8rem':''}">
         </div>
       </div>
       <div>
       </div>
     </div>
     <div class="botto">
       <bor2 class="DustBor2"></bor2>
     </div>
   </div>
  </div>
</template>

<style scoped>
.botto{
  width: 100%;
  height: 4.16rem;
  position: relative;
}
.mainBox{

  display: flex;
  height: calc(100% - 0.15rem);
  position: relative;
  //border-left: 1px solid white;

}
.item{

  width: 9.43rem;
}
.list{
  display: flex;
  flex-wrap: wrap;
  width: 100%;

}
.list .listItem{
  width: 50%;
  height: 3.76rem;
  font-size: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  align-items: center;
}
.list .listItem img{
  width: 5rem;
  height: 2.4rem;
}
.aaa{
  flex: 1;
}
.twoBox{
  margin-bottom: 0.15rem;
  padding: 0.2rem 0 0.2rem 0.8rem;
  border-left: 1px solid white;
  position: relative;
  font-family: AlibabaPuHuiTi2-45-Light;
  color: white;
}

.twoBox h1{
  font-size: 0.4rem;
  text-align: center;
}
.item{
  width: 10.09rem;
  font-family: AlibabaPuHuiTi2-45-Light;
}
.item .title{
  margin-bottom: 0.17rem;
}
h2{
  font-size: 0.4rem;
  line-height: 0.35rem;

}

.txt{
  font-size: 0.25rem;
  line-height: 0.4rem;
}


@media (max-width: 1024px) {
  .mainBox{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .twoBox{
    border: none;
  }

  .DustBor1 {
    display: none;
  }
  .list{
    position: static;
  }
}

@media (max-width: 1024px) {
  .mainBox{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

  }
  .twoBox{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

  }
  .item{
    scale: 1.5;
    margin: 1rem 0;
  }
  .oneBor2 {
    display: none;
  }
  .botto{
    display: none;
  }

}
</style>