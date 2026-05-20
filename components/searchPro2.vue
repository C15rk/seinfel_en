<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

let keyWord = ref('')
let result = ref({})
let searchData = ref([
  {
    name: 'Paper Bags',
    url: '/PRODUCTS/FloorCare/Paper,Produced as Single, double or multiple layers to achieve gradient efficiency levels.Efficiency＞＝99.97%，Anti-microbial, Absorbent, Deodorant, Aromatized, Etc.White, Natural, Yellow, Blue, Green, or customizedcustomer requests, ZFT provides economic, scientific, and effective solutions with advanced technical support and targeted services.'
  },
  {
    name: 'Woven Bags,Multiple layers to achieve gradient effiency levels, long service life (2-3 times of ordinary ones) Ermeabilit：20~800L/m.s，Anti-microbial,Absorbent, Deodorant, etc. White, Green, Blue, Brown or customized customer requests, ZFT provides economic, scientific and effective solutions with advanced technical support and targeted services.',
    url: '/PRODUCTS/FloorCare/Woven'
  },
  {
    name: 'Sewn Bags,Anti-microbial, absorbent, deodorant, washableWhite sailcloth, velvet cloth, knitting composite cloth, edge stitching cloth, ATY cloth,Needle-punched cotton, SMS cloth. Based on customer requests, ZFT provides economic, scientific, and effective solutions with advanced technical support and targeted services.',
    url: '/PRODUCTS/FloorCare/Sewn'
  },
  {
    name: 'Filter,Antimicrobial, absorbent, deodorant, washable Having different optional materials such as PP, PET, PTFE, Glass Fiber, etc. Based on customers’ request, ZFT provides economic, scientific, and effective solutions with advanced technical support and targeted services.',
    url: '/PRODUCTS/FloorCare/Filter'
  },
  {
    name: 'Soft Frame Filter,High dust retention, washability, Long service life(3-5 times of ordinary ones) Gradient filtering，Electrostatic absorptionFoam, Needle-punched cotton, Fluffy cotton, cotton with multi-layers to achievegradient efficiency, Electrostatic cotton, Voile mesh, Mesh cloth etc.Based on customer requests, Seinfel provides economic, scientific and effective solutions with advanced technical support and targeted services',
    url: '/PRODUCTS/FloorCare/Soft'
  },
  {
    name: 'Pre-Filter,Anti-microbial, absorbent, deodorant, washable, de-noising etc.Foam, Spray-bonded non-woven, scouring pad, Needle-punched cotton. Spun bond,hydroentangling / Spun lacing, Sirocco cloth, Cotton with multi-layers to achievegradient efficiency, Electrostatic cotton etc.White, Black, or customizedBased on customer requests, ZFT provides economic, scientific and effective solutions with advanced technical support and targeted services.',
    url: '/PRODUCTS/FloorCare/Pre'
  },
  {
    name: 'Dust Removal Filter',
    url: '/PRODUCTS/AirPuri/Dust'
  },
  {
    name: 'Deodorizing Filter',
    url: '/PRODUCTS/AirPuri/Deodorizing'
  },
  {
    name: 'Health Function Filter',
    url: '/PRODUCTS/AirPuri/Health'
  },
  {
    name: 'Humidification Filter',
    url: '/PRODUCTS/AirPuri/Humidification'
  },
  {
    name: 'Pre-Filter',
    url: 'Medium Efficiency Filter'
  },
  {
    name: 'Medium Efficiency Filter',
    url: '/PRODUCTS/Commercial/Medium'
  },
  {
    name: 'High Efficiency Filter',
    url: '/PRODUCTS/Commercial/High'
  },
  {
    name: 'FFU Unit',
    url: '/PRODUCTS/Commercial/FFU'
  },
  {
    name: 'HEPA BOX',
    url: '/PRODUCTS/Commercial/HEPA'
  },
  {
    name: 'Eco-Friendly packaging Bag',
    url: '/PRODUCTS/EcoFriendly/Product'
  },
  {
    name: 'Product category',
    url: '/PRODUCTS/EcoFriendly/ProductCategory'
  },
  {
    name: 'EnvironmentalProtection Certificate',
    url: '/PRODUCTS/EcoFriendly/Environmental'
  },
  {
    name: 'Application',
    url: '/PRODUCTS/EcoFriendly/Application'
  },

])
let searchTitleDate = ref([
  {
    name: 'PRE-FILTER,Made of sponges, spongy cotton, scouring pad and other materials; being customized.It can be used as the base material to attach the active carbon and other adsorbents,and carry out different types of catalytic treatment to meet the effect of removingformaldehyde, benzene, ammonia, TVOCs and so on at the same time.The functional post treatment method, which can be impregnated or sprayed with antibacterial agents, can provide antibacterial and mildew proof properties, and prevent bacteria breeding and mildew on filters. Materials can be adjusted to be washable and reusable according to the customers requirements.',
    url: '/PRODUCTS/AirPuri/Dust#Pre'
  },
  {
    name: 'HIGH EFFICIENCY FILTER，The filtering efficiency is up to 99.97% with the thickness of fiber from 0.1-10μm.\n' +
        '\n' +
        'Can be endowed with antibacterial characteristic to prevent bacterial breeding.\n' +
        '\n' +
        'Can be customized according to customer needs.',
    url: '/PRODUCTS/AirPuri/Dust#High'
  },
  {
    name: 'PTFE - WASHABLE FILTER，With the hydrophobicity of PTFE, the products are washable up to 60 times, during which\n' +
        '\n' +
        'the efficiency decreases rather slowly.\n' +
        '\n' +
        'It can be used in the environment of high temperature, high humidity, ozone and so on.',
    url: '/PRODUCTS/AirPuri/Deodorizing#PTFE'
  },
  {
    name: 'CATALYST FILTER，The cold catalyst and photocatalyst filter screens decompose harmful gases through catalyzed oxidation under certain temperature or light conditions, and have the ability to remove formaldehyde (VOC), without any treatment, lasting for a long time, and no secondary pollution.\n' +
        '\n' +
        'The cold catalyst can reach the desired effect of generating catalytic decomposition on harmful gases when temperature surpasses 5 ℃ and humidity reaches 40%.\n' +
        '\n' +
        'It can be used for a long time without any treatment\n' +
        '\n' +
        'It can be customized according to customer needs.',
    url: '/PRODUCTS/AirPuri/Deodorizing#Catalyst'
  },
  {
    name: 'ACTIVATED CARBON FILTER，Deodorizing filter is made of activated carbon with high specific surface. The activated carbon obtains directional adsorption specific volatile organic compounds (VOC),\n' +
        '\n' +
        'through dipping it with different modifiers.\n' +
        '\n' +
        'Cellular structure is applied to fill above activated carbon material, which can enlarge contact area of the material and harmful gases and reduce wind resistance effectively. Can be customized according to customer needs.',
    url: '/PRODUCTS/AirPuri/Deodorizing#Activated'
  },
  {
    name: 'ANTIBACTERIAL AND ANTIVIRAL COATED FILTE，The cold catalyst and photocatalyst filter screens decompose harmful gases through catalyzed oxidation under certain temperature or light conditions, and have the ability to remove formaldehyde (VOC), without any treatment, lasting for a long time, and no secondary pollution.\n' +
        '\n' +
        'The cold catalyst can reach the desired effect of generating catalytic decomposition on harmful gases when temperature surpasses 5 ℃ and humidity reaches 40%.\n' +
        '\n' +
        'It can be used for a long time without any treatment\n' +
        '\n' +
        'It can be customized according to customer needs.',
    url: '/PRODUCTS/AirPuri/Health#Antibacterial'
  },
  {
    name: 'ODOR PURIFICATION COMPOSITE FILTER，Using high-quality activated carbon, activated carbon fiber or catalytic materials,\n' +
        '\n' +
        'continuous adsorption or decomposition of odour molecules can effectively remove\n' +
        '\n' +
        'smoke, mould, and pet odours from the air.\n' +
        '\n' +
        'It can also filter particulate matter such as dust and pollen from the air, reducing the\n' +
        '\n' +
        'spread of allergens and achieving efficient and long-lasting purification, creating a\n' +
        '\n' +
        'fresh and healthy living environment.\n' +
        '\n' +
        'Can be customized according to customer needs.',
    url: '/PRODUCTS/AirPuri/Health#Odor'
  },
  {
    name: 'HUMIDIFICATION FILTER',
    url: '/PRODUCTS/AirPuri/Humidification'
  },
  {
    name: 'PLEATED PRE-FILTER，Metal mesh is tightly attached to the filter media to enhance its strength.\n' +
        '\n' +
        'Metal mesh pre-filters are used as primary filters in air-conditioning systems, mainly\n' +
        '\n' +
        'used to filter particles bigger than 5 micrometers.\n' +
        '\n' +
        'All products can be customized according to customers\'requirements.',
    url: '/PRODUCTS/Commercial/pre#Pleated'
  },
  {
    name: 'POCKET PRE-FILTER，V-shaped bag filter, its effective utilization rate reaches 100%, has good performance of\n' +
        '\n' +
        'filtration and high dust capacity. The integrated frame design enhances the overall\n' +
        '\n' +
        'structural strength and minimizes the resistance.\n' +
        '\n' +
        'All products can be customized according to customers’ requirements',
    url: '/PRODUCTS/Commercial/pre#Pocket'
  },
  {
    name: 'MICRO FIBER GLASS POCKET FILTERS,Each pocket can be fully inflated and maintain the correct spacing under the design V-shape so that the clean air comes out through the exit at the back. The media and the metal frame are glued to ensure the integrity of the seal.\n' +
        '\n' +
        'All products can be customized according to the customers\'requirements.',
    url: '/PRODUCTS/Commercial/Medium#Micro'
  },
  {
    name: 'CHEMICAL FIBER BAG FILTER,Each pocket can be fully inflated and maintains the correct spacing under the design of the V-shape. The clean air comes out from the rear of the media and the metal frame is glued to ensure the integrity of the seal.\n' +
        '\n' +
        'All products can be customized according to the customers\'requirements.',
    url: '/PRODUCTS/Commercial/Medium#Chemical'
  },
  {
    name: 'V-BANK FILTER V,V-bank filters are assembled by several pieces of mini-pleated packs to compose of V-types. The effective media area can result in lower resistance, higher dust collection capacity and longer life span.\n' +
        '\n' +
        'All products can be customized according to customers\'requirements.',
    url: '/PRODUCTS/Commercial/Medium#Bank'
  },
  {
    name: 'DEEP PLEATED HEPA FILTER,Ultra-fine glass fiber paper ensures excellent filtration efficiency throughout its\n' +
        '\n' +
        'operational life.\n' +
        '\n' +
        'Filters have high a strength structure, low resistance and long working life.\n' +
        '\n' +
        'Individual leakage text according to EN1822.\n' +
        '\n' +
        'Box type, single-flange or double-flange boxes are available for the frame.\n' +
        '\n' +
        'All products can be customized according to customers\'requirements.',
    url: '/PRODUCTS/Commercial/High#Deep'
  },
  {
    name: 'MINI-PLEATED HEPA FILTER,The air flow, initial resistance and dust collection capacity of the Mini-Pleated HEPA filters are much better than the separator\n' +
        '\n' +
        'HEPA filter. The design of concentrated pleats of Mini-Pleated HEPA makes for a longer life and decrease the pressure drop.\n' +
        '\n' +
        'Mini-Pleated HEPA filters are suitable for clean rooms, work stations and benches FFU. High efficiency and low resistance.\n' +
        '\n' +
        'Individual leakage text according to EN1822.\n' +
        '\n' +
        'Bigger square of media, Thinner for the thickness.\n' +
        '\n' +
        'All products can be customized according to the customers\'requirements.',
    url: '/PRODUCTS/Commercial/High#Mini'
  },
  {
    name: 'CABIN FILTER',
    url: '/PRODUCTS/Automotive/Product#Cabin'
  },
  {
    name: 'CABIN FILTER',
    url: '/PRODUCTS/Automotive/Product#Cabin'
  },
  {
    name: 'AIR FILTER',
    url: '/PRODUCTS/Automotive/Product#Air'
  },
  {
    name: 'ECO-OIL FILTER',
    url: '/PRODUCTS/Automotive/Product#Fuel'
  },
  {
    name: 'BATTERY AIR FILTER ELEMENT',
    url: '/PRODUCTS/Automotive/Product#Battery'
  },
])

function search() {
  if (!keyWord) {
    return;
  }

  // 将用户的搜索查询转换为小写
  let lowerCaseQuery = keyWord.value.toLowerCase();

  // 在 searchData 数组中寻找模糊匹配的项，使用 includes 进行模糊匹配
  result.value = searchData.value.find(item => item.name.toLowerCase().includes(lowerCaseQuery));

  // 如果在 searchData 中没有找到，继续在 searchTitleDate 数组中寻找模糊匹配的项
  if (!result.value) {
    result.value = searchTitleDate.value.find(item => item.name.toLowerCase().includes(lowerCaseQuery));
  }

  // 如果找到结果，跳转到对应的 URL，否则提示用户没有找到
  if (result.value) {
    router.push(result.value.url);
    // Vercel deployment phase:
    // disable keyword statistics until the database-backed API is migrated.
    // get('/saveKeyWord', { keyWord: lowerCaseQuery });
  } else {
    alert('If you can\'t find it, please enter the full name or part of the name');
  }
}

function handleEnter() {
  search()
}
</script>

<template>

        <img alt="search" src="/public/images/index/search.webp" class="search">
        <img alt="search" src="/public/images/index/search.webp" class="search">
        <input placeholder="Product Search" v-model="keyWord" @keydown.enter="handleEnter">
        <button id="btn" @click="search()"></button>

</template>

<style scoped>

.search {
    /* width: 11.21rem; */
    width: 97%;
    height: 0.5rem;
    left: 0.13rem;
    top: 1.2rem;
    position: absolute;
    -webkit-filter: brightness(100%);
    filter: brightness(100%);
}

input {
    position: absolute;
    width: 80%;
    height: 0.5rem;
    left: 1rem;
    top: 1.18rem;
    border: none;
    outline: none;
    background: none;
    color: white;
    font-size: 0.25rem;
    font-family: AlibabaPuHuiTi2;
    color: white;
}

#btn {
    width: 0.5rem;
    height: 0.5rem;
    position: absolute;
    left: 0.25rem;
    top: 1.15rem;
    cursor: pointer;
    opacity: 0;
}
</style>
