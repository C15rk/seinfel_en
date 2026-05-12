<script setup>
useHead({
  title: 'contact',  // 页面标题
  meta: [
    {
      name: 'Contact Seinfeld',
      content: 'Contact Seinfeld',
      hid: 'contact'  // 保证唯一性，避免重复
    }
  ]
})
import {onMounted,ref} from "vue";
import {add} from "~/utils/bor.js";

let time=ref('')
let active=ref( )
let isShow=ref(false)
let dings=ref([
  {
    // name:'UNITED STATES',
    // N:'Ric Taylor Business Development Manager',
    // T:'+1 919.805.4667',
    // E:'Ric.Taylor@ZFTCN.com',
    // N2:'Johnny Riddle',
    // T2:'+817-653-0121',
    // E2:'johnny.riddle@zftcn.com'
  },
  {
    // name:'United Kingdom',
    // N:'Tommy Thompson',
    // T:'+44 7354678087',
    // E:'tommy.thompson@zftuk.com',
  },
  {
    name:'France',
    N:'Philippe Baumann',
    T:'+33 6 30 96 28 71',
    E:'',
  },
  {
    name:'Germany',
    N:'steven.you',
    T:'+44(0) 7746 139 683',
    E:'steven.you@zftuk.com',

  },
  {
    name:'DUBAI',
    N:'Sayyad Jasim',
    T:'+971 543509985',
    E:'sayyad.jasim@zftuk.com'
  },
  {
    name:'India',
    N:'Sayyad Jasim',
    T:'+971 543509985',
    E:'sayyad.jasim@zftuk.com'
  },
  {
    name:'Malaysia',
    N:'',
    T:'+65 (3) 1064341',
    E:'sales@seinfel.com'
  },
  {
    name:'Singapore',
    N:'steven.you',
    T:'+44(0) 7746 139 683',
    E:'steven.you@zftuk.com'
  },
  {
    name:'Cambodia',
    N:'987 SERANGOON ROAD',
    T:'',
    E:''
  },
  {
    name:'Vietnam',
    N:'Jason Phan',
    T:'+84 856842842',
    E:'jason.phan@zftcn.com'
  },
  {
    name:'CHINA',
    N:'',
    T:'+86-0573-88222777',
    E:'marketing@seinfel.com'
  },
  {
    name:'Korea',
    N:'KIM CHANGMIN',
    T:'+ 86-15618586702',
    E:'kim.jin@zftcn.com'
  },
  {
    name:'Japan',
    N:'陆恺/ 陸カイ',
    T:'+86-13291978218',
    E:'kent.lu@zftcn.com'
  },

])
let dingDom=ref(null)
let show=function (event,obj){
  if(time.value){
    clearTimeout(time.value)
  }
  active.value=obj
  isShow.value=true


}
let hidde=function (){
  time.value=setTimeout(()=>{
    isShow.value=false
  },200)
}

let infos=[
  {
    country:'Germany',
    name:'steven.you',
    mobileTelphone:'+44(0) 7746 139 683',
    email:'steven.you@zftuk.com'
  },
  {
    country:'France',
    name:'Philippe Baumann',
    mobileTelphone:'+33 6 30 96 28 71',
    email:'/'
  },
  {
    country:'Dubai',
    name:'Sayyad Jasim',
    mobileTelphone:' +971 543509985',
    email:'sayyad.jasim@zftuk.com'
  },

  {
    country:'India',
    name:'Sayyad Jasim',
    mobileTelphone:' +971 543509985',
    email:'sayyad.jasim@zftuk.com'
  },
  {
    country:'Japan',
    name:'陆恺/ 陸カイ',
    mobileTelphone:'+86-13291978218',
    email:'kent.lu@zftcn.com'
  },

  {
    country:'Korea',
    name:'KIM CHANGMIN',
    mobileTelphone:'+ 86-15618586702',
    email:'kim.jin@zftcn.com'
  },

  {
    country:'Singapore',
    name:'steven.you',
    mobileTelphone:'+44(0) 7746 139 683',
    email:'steven.you@zftuk.com'
  },
  {
    country:'Vietnam ',
    name:'Jason Phan ',
    mobileTelphone:'+84 856842842',
    email:'jason.phan@zftcn.com'
  },
  {
    country:'United States',
    name:'Johnny Riddle',
    mobileTelphone:'+817-653-0121',
    email:'johnny.riddle@zftcn.com'
  }
]
onMounted(()=>{
  add()
})
</script>

<template>
  <div class="mainBoxx">

    <div class="oneRow" style="margin-bottom: 1rem;">
      <bor class="indexProductsBor" />
      <div class="left">
        <img  src="../public/images/contact/logo.webp" alt="logo">

      </div>
    </div>
    <!-- <div class="two">
       <div class="wrap" >
          <div class="ding" v-for="(item,index) in dings" :key="index" @mouseenter="(event)=>show(event,item)" @mouseleave="hidde()"></div>
       </div>
    </div> -->
    <div class="tipBox" v-if="active?.name"  ref="dingDom" :style="{opacity:isShow?'1':'0',left:active.name==='UNITED STATES'?'28%':''}">
      <div class="name">
        {{active?.name}}
      </div>
      <div class="info">
         <p>
           {{active?.N}}
         </p>
        <p>
          {{active?.T}}
        </p>
        <p>
          {{active?.E}}
        </p>
      </div>
      <div class="info" v-if="active.N2" style="margin-top: 0.1rem">
        <p>
          {{active?.N2}}
        </p>
        <p>
          {{active?.T2}}
        </p>
        <p>
          {{active?.E2}}
        </p>
      </div>
    </div>
    <div class="three">
        <div class="box">
            <div class="lin1">
              HEADQUARTERS
            </div>
          <div class="lin">
            <p>N</p>
            <span>ZFT GROUP DEVELOPMENT PTE.LTD.</span>
          </div>
          <div class="lin">
            <p>A</p>
            <span>987 SERANGOON ROAD<br>SINGAPORE（328147）</span>
          </div>
          <div class="lin">
            <p>N</p>
            <span>+65 (3) 1064341</span>
          </div>
          <div class="lin" style="border-bottom: 2px solid white">
            <p>E</p>
            <span>sales@seinfel.com  </span>
          </div>
        </div>
    </div>
    <div class="four">
      <div class="item">
        <div class="lin1">
          CAMBODIA MANUFACTURING BASE
        </div>
        <div class="lin">
          <p>N</p>
          <span>987 SERANGOON ROAD</span>
        </div>
        <div class="lin" style="border: none">
          <p>A</p>
          <span>156km road No.1 , Phum Preypdaov, Sangkat Chrokmtes,<br> Bavet City, Svay Rieng Provice, Cambodia.</span>
        </div>
      </div>
      <div class="item">
        <div class="lin1">
          CHINA MANUFACTURING BASE
        </div>
        <div class="lin">
          <p>N</p>
          <span>Zhejiang Zhaohui Filter Technology Co., Ltd.   </span>
        </div>
        <div class="lin">
          <p>A</p>
          <span>No.370,Century Avenue Development Zone Chongfu Town, Tongxiang Zhejiang, China</span>
        </div>
        <div class="lin">
          <p>N</p>
          <span>+86-0573-88222777</span>
        </div>
        <div class="lin" style="border:none">
          <p>E</p>
          <span>marketing@seinfel.com</span>
        </div>
      </div>
    </div>
    <div class="five">
      <div class="lin1">
         <p>
           COUNTRY
         </p>
        <p>
          NAME
        </p>
        <p>
          MOBILE TELEPHONE
        </p>
        <p>
          E-MAIL
        </p>
      </div>
      <div class="lin" v-for="(item,index) in infos" :key="index" :style="{borderBottom:index===infos.length-1?'2px solid white':''}">
        <div class="txt" v-for="(it,i) in item" :key="i">
          {{ it }}
        </div>
      </div >
    </div>

  </div>
</template>

<style scoped>

.mainBoxx{
  width: 100%;
  height: 100%;
  position: relative;
}
.three{
  width: 17.65rem;
  margin: 0 auto;
  margin-bottom: 1.66rem;
}
.three .box{
  width: 100%;
  height: 3.34rem;
  color: white;

}
.three .box .lin1{
  height: 0.84rem;
  width: 100%;
  font-size: 0.5rem;
  font-family: AlibabaPuHuiTi2-45-Light;
  border-top:2px solid white;
  border-bottom:2px solid white;
  display: flex;
  justify-content: left;
  align-items: center;

}
.three .box .lin{
  font-size: 0.25rem;
  font-family: AlibabaPuHuiTi2-45-Light;
  padding: 0.05rem 0;
  border-bottom: 1px solid white;
  display: flex;

}
.three .box .lin p{
  margin-right: 0.3rem;
}
.three .box .lin span{
  white-space: pre-wrap;
}
.four{
  width: 17.65rem;
  margin: 0 auto;
  margin-bottom: 1.66rem;
   height: 3.1rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.7rem;
 }
.four .item{
  width: 8.29rem;
  height: 100%;
  border-bottom: 2px solid white;
  color: white;
}
.four .item .lin1{
  height: 0.84rem;
  width: 100%;
  font-size: 0.5rem;
  font-family: AlibabaPuHuiTi2-45-Light;
  border-top:2px solid white;
  border-bottom:2px solid white;
  display: flex;
  justify-content: left;
  align-items: center;
}
.four .item .lin{
  font-size: 0.25rem;
  font-family: AlibabaPuHuiTi2-45-Light;
  padding: 0.05rem 0;
  border-bottom: 1px solid white;
  display: flex;

}
.four .item .lin p{
  margin-right: 0.3rem;
}
.five{
  width: 17.65rem;
  margin: 0 auto 2rem;
  height: 5.95rem;
  border-top: 2px solid white;
  color: white;
}
.five .lin1{
  height: 0.84rem;
  width: 100%;
  font-size: 0.49rem;
  font-family: AlibabaPuHuiTi2-45-Light;

  border-bottom:2px solid white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.five .lin1 p{
  width: 4.53rem;
  text-align: center;
  display: block;
}
.five .lin{
  font-size: 0.25rem;
  font-family: AlibabaPuHuiTi2-45-Light;
  padding: 0.05rem 0;
  border-bottom: 1px solid white;
  display: flex;
  justify-content: space-between;
}
.five .lin .txt{
  flex: 1;
  text-align: center;
}
.oneRow {
  height: 2.2rem;
  width: 100%;
  position: relative;
  border-top: 1px solid white;
  display: flex;

}
.tipBox{
  position: absolute;
  width: 4rem;
transition: all 0.2s;
  background: var(--backColor);
  top: 15%;
  left: 48%;
  border-radius: 0.1rem;
  padding: 0.1rem;
  font-family: AlibabaPuHuiTi2-45-Light;
  color: white;

}
.tipBox .name{
  font-size: 0.25rem;
  border-bottom: 1px solid white;
}
.tipBox .info{
  font-size: 0.2rem;
  margin-left: 40%;
}
.oneRow .left {
  width: 7.68rem;
  position: relative;
}
.oneRow .left img{
  width: 3.31rem;
  height: 0.79rem;
  margin: 0.91rem  0 0.1rem 0.8rem;
}

.two{
  margin: 0.9rem 0 1.41rem 0;
  width: 100%;
  height: 7.54rem;
  position: relative;
}
.two .tip{
  width: 2.46rem;
  height: 4.5rem;
  position: absolute;
  right: 1rem;
  top: 2.64rem;
}
.two .wrap{
  width: 14.64rem;
  height: 100%;
  background-image: url("../public/images/contact/1.webp");
  background-size: 100%;
  margin-left: 1.28rem;
  position: relative;
}
.two .wrap .ding{
  position: absolute;
  width: 0.23rem;
  height: 0.34rem;
  cursor: pointer;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.two .wrap .ding:nth-child(1){
  left: 19.5%;
  top: 37%;

}
.two .wrap .ding:nth-child(2){
  left: 38.5%;
  top: 24%;
}
.two .wrap .ding:nth-child(3){
  left: 39.7%;
  top: 29%;
}
.two .wrap .ding:nth-child(4){
  left: 41%;
  top: 27%;
}
.two .wrap .ding:nth-child(5){
  left: 52.5%;
  top: 46%;
}
.two .wrap .ding:nth-child(6){
  left: 57.5%;
  top: 48.2%;

}
.two .wrap .ding:nth-child(7){
  left: 62.9%;
  top: 56%;
}
.two .wrap .ding:nth-child(8){
  left: 64%;
  top: 60%;
  width: 0.25rem;
  height: 0.4rem;
}
.two .wrap .ding:nth-child(9){
  left: 63.5%;
  top: 51.7%;

}
.two .wrap .ding:nth-child(10){
  left: 65%;
  top: 53%;

}

.two .wrap .ding:nth-child(11){
  left: 66.5%;
  top: 43%;
}
.two .wrap .ding:nth-child(12){
  left: 69.5%;
  top: 36.5%;
}
.two .wrap .ding:nth-child(13){
  left: 71.8%;
  top: 38%;
}

@media (max-width: 768px) {

    .five{
      border-bottom: none;
    }
    .lin1{
      border-top: 1px solid white !important;
      border-bottom: 1px solid white !important;
      font-size: 0.4rem !important;
    }
    .four .item{
      border-bottom: 1px solid white !important;
    }
  .four{
    height: 3.3rem;
  }

}
@media (max-width: 1024px){
  .five{
    border-bottom: none;
  }
}
</style>