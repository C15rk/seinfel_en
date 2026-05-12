<template>
       <layout-lift>
         <img src="../../public/images/life/1.webp" alt="picture">
         <div class="item" v-for="(item,index) in info" :key="index">
           <div class="title" v-for="(tit,id) in item.name" :key="id">
             <h2>
               {{tit}}
             </h2>
           </div>
           <div class="txt">
             <p v-for="(txt,i) in item.txt" :key="i">
               {{txt}}
             </p>
           </div>
         </div>
       </layout-lift>
</template>

<script setup>
useHead({
  title: 'Planning & Design',  // 页面标题
  meta: [
    {
      name: 'Planning & Design',
      content: 'Planning & Design',
      hid: 'Planning & Design'  // 保证唯一性，避免重复
    }
  ]
})
let info=[
  {
    txt:[
      'SEINFEL can achieve the planning and design stage from customer’s demand analysis, solution design, customized samples + performance evaluation, and at the same time provide different tiered pricing plans, diversified packaging and quality solutions.'
    ]
  },
  {
    name:[
    'Customer demand analysis:'
    ],
    txt:[
        'We analyze the customer’s product performance, quality, standards followed, use scenarios, services, and other aspects of the needs of the customer, and these elements for a comprehensive assessment of the reasoning, resulting in the customer’s demand model.'
    ]
  },
  {
    name:[
    'Program design:'
    ],
    txt:[
      'Fast RFQ: In the design phase, we provide fast RFQ quotes, which are completed in 1-3 working days according to different products;',
      'Scenario recommendation: recommend suitable products and system solutions according to different application scenarios and usage conditions, such as domestic, commercial, industrial and other environments;',
      'On-site synchronous development: development engineers can be sent to the client site, to jointly carry out project development, to speed up the project completion schedule.'
    ]
  },
  {
    name:[
    'Customized samples',
    '&  Performance Evaluation:'
    ],
    txt:[
        'We analyze the customer’s product performance, quality, standards followed, use scenarios, services, and other aspects of the needs of the customer, and these elements for a comprehensive assessment of the reasoning, resulting in the customer’s demand model.'
    ]
  },
  {
    name:[
    'Diversified price programs:',
    ],
    txt:[
       'According to the actual demand, we provide different ladder price programs, low-cost programs and high-quality programs.'
    ]
  },
  {
    name:[
    'Multiple packaging solutions:',
    ],
    txt:[
       'With customized packaging solutions, providing customized design and production services according to the length of distance, different color printing requirements and customer needs. At the same time have semi-finished products off-site assembly program.'
    ]
  },
  {
    name:[
    'Different quality solutions: ',
    ],
    txt:[
       'Can be customized according to the user’s needs, product usage period and marking.'
    ]
  },
]

</script>
<style scoped>
.mainBox img{
    width: 10.09rem;
    height: 4.5rem;
}
.item{
  width: 10.09rem;
  margin-top: 0.5rem;
  font-family: AlibabaPuHuiTi2-45-Light;
}
.item .title{
  margin-bottom: 0.17rem;
}
.item h2{
  font-size: 0.4rem;
  line-height: 0.35rem;
 
}
.txt{
  font-size: 0.25rem;
  line-height: 0.4rem;
}
@media (max-width: 1024px) {
  .mainBox img{
    scale: 1.3;
    margin-bottom: 1rem;
  }
  .item{
   scale: 1.3;
    margin-bottom: 1.5rem;
}
}
</style>