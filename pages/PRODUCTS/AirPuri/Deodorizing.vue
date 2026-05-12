<script setup>
import {scrollToElement} from "~/utils/1.js";

useHead({
  title: 'Deodorizing Filter',  // 页面标题
  meta: [
    {
      name: 'Deodorizing Filter',
      content: 'Deodorizing Filter',
      hid: 'Deodorizing Filter'  // 保证唯一性，避免重复
    }
  ]
})
import {ref} from 'vue'
let menuList=[
  {name:'Catalyst Filter',url:'#Catalyst',id:'Catalyst'},
  {name:'Activated Carbon Filter',url:'#Activated ',id:'Activated '},
]
let obj=ref([
  {
    one:[
      {
        url:'/images/products/21.webp',
        wid:'4.88rem',
        hei:'3.7rem',
        id:'Catalyst',
      },
      {
        url:'/images/products/22.webp',
        wid:'4.97rem',
        hei:'2.16rem'
      },
    ],
    two:{
      title:'CATALYST FILTER',

      infos:[
        {
          name:'Features:',
          txt:[
            'The cold catalyst and photocatalyst filter screens decompose harmful gases through catalyzed oxidation under certain temperature or light conditions, and have the ability to remove formaldehyde (VOC), without any treatment, lasting for a long time, and no secondary pollution.',
            'The cold catalyst can reach the desired effect of generating catalytic decomposition on harmful gases when temperature surpasses 5 ℃ and humidity reaches 40%.',
            'It can be used for a long time without any treatment',
            'It can be customized according to customer needs.'

          ]
        },
        {
          name:'Application:',
          txt:[
            'Household and commercial air purification equipment, ventilation systems.'
          ]
        }
      ],
    },

  },
  {
    one:[
      {
        url:'/images/products/23.webp',
        wid:'8.65rem',
        hei:'4.15rem',
        id:'Activated',
      },

    ],
    two:{
      title:'ACTIVATED CARBON FILTER',

      infos:[
        {
          name:'Features:',
          txt:[
            'Deodorizing filter is made of activated carbon with high specific surface. The activated carbon obtains directional adsorption specific volatile organic compounds (VOC), ',
            'through dipping it with different modifiers.',
            'Cellular structure is applied to fill above activated carbon material, which can enlarge contact area of the material and harmful gases and reduce wind resistance effectively.\n' +
            'Can be customized according to customer needs.',

          ]
        },
        {
          name:'Application:',
          txt:[
            'Household and commercial air purification equipment, ventilation systems.'
          ]
        }
      ],
    },

  },

])
let route=useRoute()
onMounted(()=>{
  scrollToElement(route)
})
</script>

<template>
  <div class="mainBox">
    <vertical-nav2 :menuList="menuList"></vertical-nav2>
    <div class="aaa">
      <div v-for="(item,index) in obj" :key="index" class="ma" :style="{marginTop:index===0?'0':'0.3rem'}">
        <div style="position: relative;height: 5.3rem;width: 100%;">
          <div class="list" >
            <div class="listItem" v-for="(ite,inde) in item.one" :key="inde">
              <bor2 :class="{'active':inde===item.one.length-1,'DustBor1':true}"></bor2>
              <img :src="ite.url" alt="PRODUCTS" v-if="ite.url" class="img" :id="ite.id" :style="{width:ite.wid,height:ite.hei}">
            </div>
          </div>
        </div>
        <div class="twoBox" :id="item.two.id">
          <div class="bor" ></div>
          <h1>{{item.two.title}}</h1>
          <div class="item" v-for="(ite,ind) in item.two.infos" :key="ind" :style="{marginBottom:ind===item.two.infos.length-1?'0':''}">
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
          <h2 v-if="item.tip">
            {{item.tip.name}}
          </h2>
          <img :src="item.tip.url" alt="" class="img1" v-if="item.tip">
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

.mainBox div:last-child{
  flex: 1;
}
.vertical-nav2 .itemm{
  font-family: AlibabaPuHuiTi2-45-Light;
  font-size: 0.25rem;
  color: white;
  margin-bottom: 0.31rem;
  display: block;
}
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

.list .listItem p{
  max-width: 3.24rem;
  margin-top: 0.4rem;
  font-size: 0.2rem;
  line-height: 0.25rem;
  text-align: center;
}
.twoBox{

  padding: 0.5rem 0 0.6rem 0.8rem;
  border-left: 1px solid white;
  position: relative;
  font-family: AlibabaPuHuiTi2-45-Light;
  color: white;
  margin-top: 0.15rem;
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
  width: 10.2rem;
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
  .DustBor1 {
    display: none;
  }
  .ma{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .vertical-nav2{
    display: none;
  }
  .list .listItem img{
    width: 4rem !important;
    height: auto;
  }
  .botto{
    display: none;
  }
  .aaa{
    margin-bottom: 50px;
    width: 80%;
  }
  .twoBox{
    border: none;
    scale: 1.3;
    margin-bottom: 0.5rem;
  }
  .twoBox{
    border: none;
    scale: 1.3;
    margin-bottom: 0.9rem;
  }
}


</style>