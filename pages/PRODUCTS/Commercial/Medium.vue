<script setup >
import {scrollToElement} from "~/utils/1.js";

useHead({
  title: 'Medium Efficiency Filter',  // 页面标题
  meta: [
    {
      name: 'Medium Efficiency Filter',
      content: 'Medium Efficiency Filter',
      hid: 'Medium Efficiency Filter'  // 保证唯一性，避免重复
    }
  ]
})
import {ref} from 'vue'
let menuList=[
  {name:'Micro Fiber Glass Pocket Filters',url:'#Micro',id:'Micro'},
  {name:'Chemical Fiber Bag Filter',url:'#Chemical',id:'Chemical'},
  {name:'V-Bank Filter V',url:'#Bank',id:'Bank'},
]
let obj=[
  {
    one:[
      {
        url:'/images/products/1333.webp',
        wid:'4.5rem',
        hei:'3.63rem',
        id:'Micro',
      },
      {
        url:'/images/products/1222.webp',
        wid:'4.77rem',
        hei:'3.5rem'
      },

    ],
    two:{
      title:'MICRO FIBER GLASS POCKET FILTERS',

      infos:[
        {
          name:'Features:',
          txt:[
            'Each pocket can be fully inflated and maintain the correct spacing under the design V-shape so that the clean air comes out through the exit at the back. The media and the metal frame are glued to ensure the integrity of the seal.',
            "All products can be customized according to the customers'requirements.",

          ]
        },
        {
          name:'Application:',
          txt:[
            "All products can be customized according to the customer's requirements, available in standard European / U.S sizes. Classification includes M5> F9 (Stitched seams). Product Information on request."
          ]
        }
      ],
    },
    tip:{
      name:'Technical Parameters:',
      url:'/images/products/29.webp'
    }
  },
  {
    one:[
      {
        url:'/images/products/30.webp',
        wid:'3.46rem',
        hei:'4rem',
        id:'Chemical',
      },
      {
        url:'/images/products/31.webp',
        wid:'4.7rem',
        hei:'3.61rem'
      },

    ],
    two:{
      title:'CHEMICAL FIBER BAG FILTER',

      infos:[
        {
          name:'Features:',
          txt:[
            'Each pocket can be fully inflated and maintains the correct spacing under the design of the V-shape. The clean air comes out from the rear of the media and the metal frame is glued to ensure the integrity of the seal.',
            "All products can be customized according to the customers'requirements.",

          ]
        },
        {
          name:'Application:',
          txt:[
              "All products can be customized according to the customer's requirements, available in standard European / U.S sizes. Classification includes M5> F9 (Stitched seams). Product Information on request."
          ]
        }
      ],
    },
    tip:{
      name:'Technical Parameters:',
      url:'/images/products/32.webp'
    }
  },
  {
    one:[
      {
        url:'/images/products/33.webp',
        wid:'4.61rem',
        hei:'4.63rem',
        id:'Bank',
      },
      {
        url:'/images/products/34.webp',
        wid:'3.86rem',
        hei:'4.04rem'
      },

    ],
    two:{
      title:'V-BANK FILTER V',

      infos:[
        {
          name:'Features:',
          txt:[
              'V-bank filters are assembled by several pieces of mini-pleated packs to compose of V-types. The effective media area can result in lower resistance, higher dust collection capacity and longer life span.',
            "All products can be customized according to customers'requirements.",

          ]
        },
        {
          name:'Application:',
          txt:[
              "V-bank filters are widely used in high volume airflow facilities. They are also used as secondary filters for facilities with HEPA/ULPA requirements."
          ]
        }
      ],
    },
    tip:{
      name:'Technical Parameters:',
      url:'/images/products/35.webp'
    }
  },
]
let route=useRoute()
onMounted(()=>{
  scrollToElement(route)
})
</script>

<template>
  <div class="mainBox">
    <vertical-nav2 :menuList="menuList" ></vertical-nav2>
    <div class="aaa">
      <div v-for="(item,index) in obj" :key="index" class="ma" :style="{marginTop:index===0?'0':'0.3rem'}">
        <div style="position: relative;height: 5.3rem;width: 100%;">
          <div class="list" >
            <div class="listItem" v-for="(ite,inde) in item.one" :key="inde">
              <bor2 :class="{'active':inde===item.one.length-1,'DustBor1':true}"></bor2>
              <img  :src="ite.url" alt="PRODUCTS" v-if="ite.url" class="img" :style="{width:ite.wid,height:ite.hei}" :id="ite.id">
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
          <h2 v-if="item.tip" style="margin-top: 0.5rem">
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
.vertical-nav2 {
  width: 2.2rem;
  padding: 0.33rem 0.19rem;
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
  flex: 1;
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
  .twoBox{
    border: none;
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
  .twoBox h1{
    margin-top: 0.2rem;
  }
  .twoBox .bor{
    display: none;
  }
  .aaa{
    margin-bottom: 50px;
    width: 80%;
  }
  .twoBox{
    border: none;
    scale: 1.3;

    margin: 1.1rem 0;
  }

}


</style>