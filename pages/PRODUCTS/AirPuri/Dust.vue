<script setup >
import {scrollToElement} from "~/utils/1.js";

useHead({
  title: 'Dust Removal Filter',  // 页面标题
  meta: [
    {
      name: 'Dust Removal Filter',
      content: 'Dust Removal Filter',
      hid: 'Dust Removal Filter'  // 保证唯一性，避免重复
    }
  ]
})
import {ref} from 'vue'
let menuList=[
    {name:'Pre-filter',url:'#Pre',id:'Pre'},
  {name:'High Efficiency Filter',url:'#High',id:'High'},
  {name:'PTFE-Washable Filter',url:'#PTFE',id:'PTFE'}
]
let obj=ref([
  {
    one:[
      {
        url:'/images/products/15.webp',
        wid:'2.94rem',
        hei:'3.94rem',
        id:'Pre',
      },
      {
        url:'/images/products/16.webp',
        wid:'2.94rem',
        hei:'3.94rem'
      },
      {
        url:'/images/products/17.webp',
        wid:'2.94rem',
        hei:'3.94rem'
      },
    ],
    two:{
      title:'PRE-FILTER',
      infos:[
        {
          name:'Features:',
          txt:[
            'Made of sponges, spongy cotton, scouring pad and other materials; being customized.',
            'It can be used as the base material to attach the active carbon and other adsorbents, ',
            'and carry out different types of catalytic treatment to meet the effect of removing ',
            "formaldehyde, benzene, ammonia, TVOCs and so on at the same time.",
            "The functional post treatment method, which can be impregnated or sprayed with ",

            'antibacterial agents, can provide antibacterial and mildew proof properties, and',
            'prevent bacteria breeding and mildew on filters.',
            "Materials can be adjusted to be washable and reusable according to the customers",
            "requirements."
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
        url:'/images/products/18.webp',
        wid:'2.94rem',
        hei:'3.94rem',
        id:'High',
      },
      {
        url:'/images/products/19.webp',
        wid:'2.94rem',
        hei:'3.94rem'
      },

    ],
    two:{
      title:'HIGH EFFICIENCY FILTER',

      infos:[
        {
          name:'Features:',
          txt:[
            'The filtering efficiency is up to 99.97% with the thickness of fiber from 0.1-10μm.',
            'Can be endowed with antibacterial characteristic to prevent bacterial breeding.',
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
  {
    one:[
      {
        url:'/images/products/20.webp',
        wid:'5.56rem',
        hei:'4.8rem',
        id:'PTFE',
      },
    ],
    two:{
      title:'PTFE - WASHABLE FILTER',

      infos:[
        {
          name:'Features:',
          txt:[
            'With the hydrophobicity of PTFE, the products are washable up to 60 times, during which',
            'the efficiency decreases rather slowly.',
            'It can be used in the environment of high temperature, high humidity, ozone and so on.',

          ]
        },
        {
          name:'Application:',
          txt:[
            'Used within fresh ventilation air systems and the AHU’s, effectively remove the PM2.5 in the air. ',
            'Household air purification (No oil smoke).'
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
            <img :src="ite.url" alt="PRODUCTS" v-if="ite.url" class="img" :id="ite.id">
          </div>
        </div>
      </div>
      <div class="twoBox" >
        <div class="bor" ></div>
        <h1 :id="item.two.id">{{item.two.title}}</h1>
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
  flex: 1;
  justify-content: space-between;
}
.mainBox div:last-child{
  flex: 1;
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
  width: 3rem;
  height: 3rem;
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
}


</style>