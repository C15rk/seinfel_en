<script setup lang="ts">
useHead({
  title: 'HEPA BOX',  // 页面标题
  meta: [
    {
      name: 'HEPA BOX',
      content: 'HEPA BOX',
      hid: 'HEPA BOX'  // 保证唯一性，避免重复
    }
  ]
})
import {ref} from 'vue'

let obj=[
  {
    one:[
      {
        url:'/images/products/47.webp',
        wid:'5.66rem',
        hei:'4.33rem'
      },
    ],
    two:{
      title:'HEPA BOX',
      infos:[
        {
          name:'Features:',
          txt:[
            'Box body made by rolled plate spray plastic or stainless-steel plate.',
            'Specially designed hold down device.',
              'Can matching with liquid or mechanical seal HEPA filter, diffuser',
              'Interface: circular /square side/up connection.',
              'size can be customized'
          ]
        },
        {
          name:'Application:',
          txt:[
              'Widely used for end filtration configurations in industrial clean spaces with high cleanliness requirements,',
              'For example, industries such as electronics, semiconductors, precision machinery, pharmaceuticals, hospitals, and food.'
          ]
        }
      ],
    },
    tip:{
      name:'Technical Parameters:',
      url:'/images/products/48.webp'
    }
  },

]
</script>

<template>
  <div class="mainBox">
    <vertical-nav2 :menuList="menuList"></vertical-nav2>
    <div>
      <div v-for="(item,index) in obj" :key="index" class="ma" :style="{marginTop:index===0?'0':'0.3rem'}">
        <div style="position: relative;height: 5.3rem;width: 100%;">
          <div class="list" >
            <div class="listItem" v-for="(ite,inde) in item.one" :key="inde">
              <bor2 :class="{'active':inde===item.one.length-1,'DustBor1':true}"></bor2>
              <img :src="ite.url" alt="PRODUCTS" v-if="ite.url" class="img">
            </div>
          </div>
        </div>
        <div class="twoBox">
          <div class="bor" ></div>
          <h1>{{item.two.title}}</h1>
          <div class="item" v-for="(ite,ind) in item.two.infos" :key="ind">
            <div class="title">
              <h2>
                {{ite.name}}
              </h2>
            </div>
            <div class="txt">
              <p v-for="(it,i) in ite.txt" :key="i">
                {{it}}
              </p>
            </div>
          </div>
          <h2>
            {{item.tip.name}}
          </h2>
          <img :src="item.tip.url" alt="" class="img1">
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
.img{
  width: 100%;
  height: auto;
}
.botto{
  width: 100%;
  height: 2.3rem;
  position: relative;
}
.mainBox{
  width: 100%;
 display: flex;
  height: calc(100% - 0.15rem);
  position: relative;
  //border-left: 1px solid white;
}
.ma{
  margin-bottom: 0.15rem;
}
.item{
  margin-bottom: 0.5rem;
  width: 9.43rem;
}
.list{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  position: absolute;
  left: 0;
  height: 100%;
}
.list .listItem{
  flex: 1;
  height: 100%;
  font-size: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  align-items: center;
}
.list .listItem img{
  width: 4rem;
  height: 4rem;
}
.list .listItem p{
  max-width: 3.24rem;
  margin-top: 0.4rem;
  font-size: 0.2rem;
  line-height: 0.25rem;
  text-align: center;
}
.twoBox{
  margin-top: 0.15rem;
  padding: 0.5rem 0 0.6rem 0.8rem;
  border-left: 1px solid white;
  position: relative;
  font-family: AlibabaPuHuiTi2-45-Light;
  color: white;
}
.twoBox .bor{
  bottom: -0.15rem;
  right: -0.15rem;
  width: calc(100%);
  height: 1px;
  background: white;
  position: absolute;
}
.twoBox h1{
  font-size: 0.4rem;
  text-align: center;
}
.item{
  width: 10.09rem;
  margin-top: 0.2rem;
  font-family: AlibabaPuHuiTi2-45-Light;
}
.item .title{
  margin-bottom: 0.17rem;
}
h2{
  font-size: 0.4rem;
  line-height: 0.35rem;

}
.img1{
  width: 10rem;
  object-fit: cover;
  margin-top: 0.23rem;
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
    scale: 1.3;
    margin: 1.1rem 0;
  }

  .DustBor1 {
    display: none;
  }
  .ma{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
  }
  .botto{
    display: none;
  }
}


</style>