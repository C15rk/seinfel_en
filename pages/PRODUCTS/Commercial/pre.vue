<script setup>
import {scrollToElement} from "~/utils/1.js";

useHead({
  title: 'Pre-Filter',  // 页面标题
  meta: [
    {
      name: 'Pre-Filter',
      content: 'Pre-Filter',
      hid: 'Pre-Filter'  // 保证唯一性，避免重复
    }
  ]
})
import {ref} from 'vue'
let list=ref([
  {
    url:'/images/products/9.webp',

  },
  {
    url:'/images/products/10.webp',

  },
  {
    url:'/images/products/11.webp',

  },
])
let obj=[
  {
    one:[
      {
        url:'/images/products/9.webp',
        wid:'2.89rem',
        hei:'2.93rem',
        id:'Pleated',
      },
      {
        url:'/images/products/10.webp',
        wid:'2.89rem',
        hei:'2.93rem'
      },
      {
        url:'/images/products/11.webp',
        wid:'2.89rem',
        hei:'3.6rem'
      },
    ],
    two:{
      title:'PLEATED PRE-FILTER',

      infos:[
        {
          name:'Features:',
          txt:[
            'Metal mesh is tightly attached to the filter media to enhance its strength.',
            'Metal mesh pre-filters are used as primary filters in air-conditioning systems, mainly',
            'used to filter particles bigger than 5 micrometers.',
            "All products can be customized according to customers'requirements."
          ]
        },
        {
          name:'Application:',
          txt:[
            'Pleated pre filters are usually used for commercial and industrial HVAC pre filtration.'
          ]
        }
      ],
    },
    tip:{
      name:'Technical Parameters:',
      url:'/images/products/8.webp'
    }
  },
  {
    one:[
      {
        url:'/images/products/12.webp',
        id:'Pocket',
      },
      {
        url:'/images/products/13.webp',

      },   {
        url:'/images/products/133.webp',

      },

    ],
    two:{
      title:'POCKET PRE-FILTER ',

      infos:[
        {
          name:'Features:',
          txt:[
            'V-shaped bag filter, its effective utilization rate reaches 100%, has good performance of',
            'filtration and high dust capacity. The integrated frame design enhances the overall ',
            'structural strength and minimizes the resistance.',
            "All products can be customized according to customers’requirements"
          ]
        },
        {
          name:'Application:',
          txt:[
            'Pocket filters are usually used for commercial and industrial HVAC pre filtration. '
          ]
        }
      ],
    },
    tip:{
      name:'Technical Parameters:',
      url:'/images/products/14.webp'
    }
  },
]
let menuList=[
  {name:`Pleated \nPre-Filter`,url:'#Pleated',id:'Pleated'},
  {name:'Pocket   \nPre-Filter',url:'#Pocket',id:'Pocket'},

]
let route=useRoute()
onMounted(()=>{
  scrollToElement(route)
})
</script>

<template>
  <div class="mainBox">
    <vertical-nav2 :menuList="menuList" :wid="true"></vertical-nav2>
    <div class="aaa">
      <div v-for="(item,index) in obj" :key="index" class="ma" :style="{marginTop:index===0?'0':'0.3rem'}">
        <div style="position: relative;height: 5.3rem;width: 100%;">
          <div class="list" >
            <div class="listItem" v-for="(ite,inde) in item.one" :key="inde">
              <bor2 :class="{'active':inde===item.one.length-1,'DustBor1':true}"></bor2>
              <img :src="ite.url" alt="PRODUCTS" v-if="ite.url" class="img" :style="{width:ite.wid,height:ite.hei}" :id="ite.id">
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

  .twoBox h1{
    margin-top: 0.8rem;
  }
  .twoBox .bor{
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
    margin-bottom: 0.9rem;
  }
}


</style>