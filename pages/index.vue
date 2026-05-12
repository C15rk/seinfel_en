<script setup>

useHead({
  title: 'Seinfel Home page',  // 页面标题
  meta: [
    {
      name: 'index',
      content: 'Seinfel Home page',
      hid: 'index'  // 保证唯一性，避免重复
    }
  ]
})

import { inject, ref, onMounted, onUnmounted, watch } from 'vue';
import { add } from '~/utils/bor.js';
const scrollHandler = inject('handleScroll');
import { useRouter } from 'vue-router';
import { useNuxtStore } from "~/composables/store.js";
const counter = useNuxtStore()
const router = useRouter();
const route = useRoute();
definePageMeta({
  layout: false,
})

let newInfo = ref([
  {
    txt: "ZFT Group Returns to the 2026 AHR Expo",
    time: '2026-4-2',
    url: '/images/index/43-1.jpg',
    info: {
      title: `ZFT Group Returns \nto the 2026 AHR Expo`,
      urls: [
        {
          path: '/images/index/43-1.jpg',
          tip: ''
        },
          {
          path: '/images/index/43-2.jpg',
          tip: ''
        },
          {
          path: '/images/index/43-3.jpg',
          tip: ''
        },
          {
          path: '/images/index/43-4.jpg',
          tip: ''
        },
          {
          path: '/images/index/43-5.jpg',
          tip: ''
        },
          {
          path: '/images/index/43-6.jpg',
          tip: ''
        },
          {
          path: '/images/index/43-7.jpg',
          tip: ''
        },  {
          path: '/images/index/43-8.jpg',
          tip: ''
        },
          {
          path: '/images/index/43-9.jpg',
          tip: ''
        },
          {
          path: '/images/index/43-10.jpg',
          tip: ''
        },
          {
          path: '/images/index/43-11.jpg',
          tip: ''
        },
          {
          path: '/images/index/43-12.jpg',
          tip: ''
        },
          {
          path: '/images/index/43-13.jpg',
          tip: ''
        },
      ],
      video: '',
      txt:
        `On February 4, 2026, the annual global HVAC&R industry spectacular—the AHR Expo (Air-Conditioning, Heating, Refrigerating Expo)—concluded successfully at the Las Vegas Convention Center. As an industry benchmark event with nearly a century of history, this year's expo brought together over 1,200 exhibitors from more than 70 countries and regions worldwide, attracting over 60,000 professional visitors for exchanges and negotiations. It stands as a core platform connecting global HVAC industry resources and leading technological innovation trends.
ZFT Group participated with its air filtration brand Seinfel, demonstrating the competitiveness of Chinese filtration enterprises on the North American stage through its fully self-controlled product strength across the entire value chain and global manufacturing layout.
As the largest and most professional HVAC&R exhibition in North America, the AHR Expo has long been the "wind vane" for industry technological innovation and market trends. Exhibits cover core categories across the entire industrial chain, including refrigeration and air conditioning systems, ventilation and air purification, heating and renewable energy, and building automation. Among these, the air purification sector, a high-growth segment, drew the attention of numerous industry giants and professional buyers. HVAC filtration systems, as core components ensuring indoor air quality and the efficient operation of HVAC systems, became one of the key focuses during the exhibition.
At this exhibition, Seinfel, ZFT's air filtration brand, highlighted its core strengths in self-developed materials and self-manufactured equipment. It showcased a full range of HVAC filtration products—primary, medium, and high-efficiency filters—including core categories such as panel primary filters, bag-type medium filters, and high-efficiency filters with/without separators. These products fully meet HVAC filtration needs across diverse scenarios, including commercial buildings, industrial plants, medical facilities, and residential buildings.
With over 30 years of deep roots in the filtration industry, ZFT Group has consistently adhered to the development strategy of "Building on Materials, Flying with Both Gas and Liquid Filtration". The company has built a complete core system for supply chain security, spanning from self-developed filtration materials, product design, and mold development to production and testing, achieving full-chain autonomy and control.
To better serve global customers and adapt to the needs of different regional markets, ZFT Grouphas established five production bases worldwide. Its Cambodia base officially went into production at the end of 2019, and the Malaysia base gradually started production in 2025. Together with its three major bases in Zhejiang, Guangdong, and Anhui, China, ZFT Group has formed a manufacturing network covering Asia and radiating globally. This global manufacturing layout not only effectively mitigates the impact of international trade frictions and adapts to market policies and logistics requirements in regions such as North America and Southeast Asia but also enhances delivery efficiency and optimizes cost structures through localized production, providing global customers with more competitive products and services.
The successful conclusion of the 2026 AHR Expo was not only a stage for ZFT Group to showcase its strength but also an important opportunity to connect with the global market and deepen international cooperation. In the future, ZFT Groupwill continue to focus on the Seinfel brand, deepen its presence in HVAC filtration and air purification, continuously strengthen its advantages in technological R&D and global manufacturing layout, and provide global customers with higher-quality filtration products and comprehensive solutions.`
    }
  },
  {
    txt: "As the chapter of the old year closes, a new journey sets sail!",
    time: '2026-1-28',
    url: '/images/index/2026-1-28_en.webp',
    info: {
      title: `As the chapter of the old year closes, \na new journey sets sail!`,
      urls: [
        {
          path: '/images/index/2026-1-28_en.webp',
          tip: ''
        },
      ],
      video: '',
      txt:
        `As the chapter of the old year closes, a new journey sets sail! Amidst the unprecedented changes of the century and the complex global trade landscape, ZFT Group has consistently been a driving force behind the development of the environmental protection industry. As a window into industry trends and a hub for resource aggregation, exhibitions have always served as a vital bridge for ZFT Group to connect with the market and explore opportunities together.
In 2026, we will focus on cutting-edge technologies, delve deep into market demands, align more precisely with objectives, and unlock new possibilities for growth. We look forward to engaging in insightful discussions about the industry's future and embarking on new chapters of cooperation with you at every exhibition venue!

Stop 1: Las Vegas, USA
Exhibition Name: 2026 AHR Expo 
Date: February 2-4, 2026
Booth No.: SU1959
Venue: Las Vegas Convention Center and South Halls, 3150 Paradise Rd, Las Vegas, NV 89109, USA
At the 2026 AHR Expo in the United States, ZFT Group will showcase commercial and industrial filtration solutions.

Stop 2: China Packaging Container Expo
Exhibition Name: 2026 China Packaging Container Expo
Date: April 15-17, 2026
Booth No.: 7B405
Venue: Shenzhen World Exhibition & Convention Center (Bao'an New Hall)
At the 2026 China Packaging Container Exhibition, ZFT Group will showcase 100% naturally degradable environmentally friendly paper inner packaging solutions as plastic alternatives.

Stop 3: 2026 Spring Canton Fair
Exhibition Name: 2026 Spring China Import and Export Fair (Canton Fair)
Date: April 15-19, 2026
Venue: China Import and Export Fair Complex (Pazhou Complex)

Stop 4: 2026 interpack Germany
Exhibition Name: 2026 interpack Germany (International Processing and Packaging Machinery Exhibition)
Date: May 7-13, 2026
Booth No.: 7.2 B19
Venue: Messe Düsseldorf, Stockumer Kirchstraße 61, 40474 Düsseldorf, Germany
Held every three years, the 2026 interpack Germany is a top-tier global event in the packaging and processing industry. ZFT Group will present 100% naturally degradable environmentally friendly paper inner packaging solutions as plastic substitutes.

Stop 5: 2026 CCFA New Consumption Forum
Exhibition Name: 2026 CCFA New Consumption Forum - China Convenience Store Conference
Date: May 20-22, 2026
Booth No.: 141
Venue: Changsha, China
To date, the CCFA New Consumption Forum - China Supermarket Commodity Procurement Annual Conference has been successfully held for 11 sessions, emerging as an industry benchmark event for supplier-retailer collaboration in China's supermarket sector.

Stop 6: WATERTECH CHINA 2026
Exhibition Name: WATERTECH CHINA 2026 
Date: June 9-11, 2026
Booth No.: 1.1 H640
Venue: Shanghai World Exhibition & Convention Center
As a UFI-certified international grand event focusing on environmental protection and the green economy, WATERTECH CHINA 2026 will center on "Industrial Energy Conservation & Environmental Protection" and "Human Settlement Environment & Health". Jeffel, a brand under ZFT Group, will showcase industrial and household water filtration environmental solutions.

Stop 7: 2026 FILTECH Germany
Exhibition Name: 2026 FILTECH Germany (Filtration and Separation Exhibition)
Date: June 3-July 2, 2026
Booth No.: Hall 7 H10
Venue: KoelnMesse, Cologne, Germany
FILTECH is a world-leading professional exhibition for filtration and separation technology, and one of the largest-scale and longest-standing professional events in the global filtration industry. Kefu Environmental Materials, a subsidiary of ZFT Group, will participate in this grand event again to display cutting-edge material technologies and products in the filtration sector.

Stop 8: 2026 IICIE International Integrated Circuit Innovation Expo
Exhibition Name: 2026 IICIE International Integrated Circuit Innovation Expo (IC Innovation Expo)
Date: September 9-11, 2026
Booth No.: 15D82
Venue: Shenzhen World Exhibition & Convention Center (Bao'an New Hall)
As a major semiconductor industry exhibition in South China, the IC Innovation Expo will witness ZFT Group presenting cleanroom ventilation and filtration solutions tailored for the semiconductor industry.

Stop 9: 2026 Autumn Canton Fair
Exhibition Name: 2026 Autumn China Import and Export Fair (Canton Fair)
Date: October 15-19, 2026
Venue: China Import and Export Fair Complex (Pazhou Complex)

Stop 10: 2026 Allen D. Leman Swine Conference
Exhibition Name: 2026 Allen D. Leman Swine Conference
Date: October 22-24, 2026
Booth No.: W5130/W5132
Venue: Zhongyuan International Exhibition Center (Zhengzhou Airport Economy Zone)
2026 Allen D. Leman Swine Conference is a world-leading professional event covering the entire pork industry chain. ZFT Group together with its brand Jeffel, will jointly participate in the exhibition to showcase air and water filtration solutions for the swine industry.`
    }
  },
  {
    txt: "ZFT Group 2025 Shenzhen Semiconductor Exhibition: Empowering the Future of the Industry with Clean Technology",
    time: '2025-9-19',
    url: '/images/index/9-20-1.webp',
    info: {
      title: "ZFT Group 2025 Shenzhen Semiconductor Exhibition: Empowering the Future of the Industry with Clean Technology",
      urls: [
        {
          path: '/images/index/9-20-1.webp',
          tip: ''
        },
        {
          path: '/images/index/9-20-2.webp',
          tip: ''
        },
        {
          path: '/images/index/9-20-3.webp',
          tip: ''
        },
        {
          path: '/images/index/9-20-4.webp',
          tip: ''
        },
        {
          path: '/images/index/9-20-5.webp',
          tip: ''
        },
        {
          path: '/images/index/9-20-6.webp',
          tip: ''
        },
        {
          path: '/images/index/9-20-7.webp',
          tip: ''
        },
        {
          path: '/images/index/9-20-8.webp',
          tip: ''
        },
      ],
      video: '',
      txt:
        `From September 10-12, 2025 , the Shenzhen International Convention and Exhibition Center (Bao'an New Hall) hosted the semiconductor industry's annual event— the Shenzhen International Semiconductor Exhibition and Integrated Circuit Industry Innovation Exhibition (SEMI-e 2025) . As a key intersection of the global semiconductor supply chain, this year's exhibition, themed "Cores for the Future, Intelligent Creation of Ecosystems," brought together over 1,000 leading domestic and international companies. The exhibition area exceeded 60,000 square meters, covering the entire supply chain ecosystem, including chip design, wafer manufacturing, advanced packaging, semiconductor equipment, and materials.


As a benchmark enterprise in the field of clean technology, ZFT Group brought its core solutions for semiconductor clean rooms to explore the future with colleagues in the industry.


Protecting semiconductor manufacturing with clean technology

As the semiconductor industry accelerates its evolution toward high precision and high integration, a clean environment has become crucial for ensuring chip yield and performance. ZFT Group 's participation in this exhibition aims to provide semiconductor customers with comprehensive clean solutions from air purification to water treatment by showcasing its three core product lines: primary, medium, and high-efficiency filters ; FFUs (fan filter units) ; and water filtration RO membranes and ultrafiltration MBR systems .

Air purification system : In response to the stringent cleanliness requirements of wafer manufacturing, packaging and testing, Zhaohui's primary filters can intercept large particle pollutants, medium-efficiency filters further filter micron-sized particles, and high-efficiency filters (such as HEPA/ULPA) achieve an interception efficiency of more than 99.97% for 0.3μm particles, building the "last line of defense" for the dust-free workshop.


FFU unit : Flexible deployment is achieved through modular design, supporting wind speed adjustment and energy consumption optimization, adapting to different cleanliness level requirements, and helping customers reduce operation and maintenance costs.


Water treatment system : After treatment through a combination of UF ultrafiltration and RO reverse osmosis membrane technology, further deep treatment and purification through EDI (electrodeionization) or polishing mixed bed can effectively remove ions, microorganisms and organic matter in the water, meeting the ultrapure water requirements of semiconductor cleaning, etching and other processes, helping customers achieve efficient use of water resources .



Deepen cooperation and jointly develop a new industrial ecosystem

During the exhibition, the ZFT Group team held in-depth dialogues with universities and companies such as Samsung Semiconductor , PWT China , Southwest Jiaotong University , BYD , and Fudan University , clarifying the core demands of customers and research institutions for cleanroom energy consumption optimization, water treatment system stability, and filter life extension, providing direction for the development of next-generation products .`
    }
  },
  {
    txt: "The 36th China Refrigeration Exhibition (CRH Expo 2025) was grandly held at the Shanghai New International Expo Center.",
    time: '2025-5-20',
    url: '/images/index/2025_5_20_1.webp',
    info: {
      title: "The 36th China Refrigeration Exhibition (CRH Expo 2025) was grandly held at the Shanghai New International Expo Center.",
      urls: [
        {
          path: '/images/index/2025_5_20_1.webp',
          tip: ''
        },
        {
          path: '/images/index/2025_5_20_2.webp',
          tip: ''
        },
        {
          path: '/images/index/2025_5_20_3.webp',
          tip: ''
        },
        {
          path: '/images/index/2025_5_20_4.webp',
          tip: ''
        },
        {
          path: '/images/index/2025_5_20_5.webp',
          tip: ''
        },
        {
          path: '/images/index/2025_5_20_6.webp',
          tip: ''
        },
        {
          path: '/images/index/2025_5_20_7.webp',
          tip: ''
        },
      ],
      video: '',
      txt:
        `With the theme of 'Intelligently Connecting Cooling and Heating, Sharing the Future',this exhibition brought together more than 1,200 industry leaders from around the world, with an exhibition area of 115,000 square meters, attracting more than 80,000 professional visitors and industry elites to participate in the event. As a benchmark company in the field of filtration technology, ZFT Group brought all high, medium and low-efficiency filtration solutions and raw materials under its air filtration sub-brand seinfel to Hall W5.

As one of the few companies in the industry that has the research and development and manufacturing of original materials, this time we displayed key materials in the HVAC industry, including glass fiber materials, melt-blown composite materials, coating materials, and bag materials. These materials can be used in HVAC purification products of different filtration grades such as primary efficiency, medium efficiency, and high efficiency, and can be customized and developed according to actual use needs.

At the same time, commercial and industrial filtration products and solutions were also displayed. The products include primary bag filters, primary plate filters, V-bank filters, medium-efficiency glass fiber filters, medium-efficiency chemical fiber filters, high-efficiency filters, FFU and other filters of different grades. Suitable for office buildings, hotels, shopping malls, catering, semiconductors, electronics, automobiles and manufacturing industries.

FFU fan filter unit is a self-powered air purification device, which consists of a high-performance centrifugal fan, a static pressure box and a high-efficiency filter. It has excellent air flow pattern, low noise, low energy consumption, low vibration, adjustable speed, maintenance-free and easy installation. It can deliver high-quality clean air to the clean room for a long time. At the same time, it can realize multi-module combination and group use. It is the most ideal air supply device for clean areas and is widely used in semiconductors, LCD panels, microelectronics and pharmaceuticals.

Among them, the activated carbon V-type filter made its debut. With its compact structure, it can be installed in the air-conditioning unit to effectively remove chemical pollutants. Its fixed structure will not change the original installation frame. It has won many favors on site and can be applied to the improvement and improvement of air-conditioning systems to reduce pollutants from indoors and outdoors.

During the exhibition, a delegation from the Chinese residential environment industry came to the Chaohui booth for inspection. The delegation nodded to the effectiveness of the filters at all levels on display, hoping to establish a long-term cooperative relationship.

Global Dialogue: Cross-regional technology collision, jointly explore new opportunities for the "Belt and Road"
During the exhibition, the ZFT Group booth welcomed intensive visits from global users, and had in-depth exchanges with more than 300 industry colleagues from China, South Korea, India, Vietnam, Canada, Russia, the United Kingdom, Australia, the Philippines, the United Arab Emirates, Turkey, Pakistan and other Americas, Europe, and Asia, and jointly drew up a new blueprint for the upgrading of the HVAC industry with filtration technology.

In the future, ZFT Group will continue to be driven by technological innovation and work with global partners to jointly promote the HVAC industry to a more efficient, greener and smarter direction.
`
    }
  },
  {
    txt: "Cofon participates in the \n2025FiltXpo",
    time: '2025-5-7',
    url: '/images/index/2025-5-7-1.webp',
    info: {
      title: "Cofon participates in the \n2025FiltXpo",
      urls: [
        {
          path: '/images/index/2025-5-7-1.webp',
          tip: ''
        },
        {
          path: '/images/index/2025-5-7-2.webp',
          tip: ''
        },
        {
          path: '/images/index/2025-5-7-3.webp',
          tip: ''
        },
        {
          path: '/images/index/2025-5-7-4.webp',
          tip: ''
        },
        {
          path: '/images/index/2025-5-7-5.webp',
          tip: ''
        },
        {
          path: '/images/index/2025-5-7-6.webp',
          tip: ''
        },
        {
          path: '/images/index/2025-5-7-7.webp',
          tip: ''
        },
      ],
      video: '',
      txt:
        `From April 29 to May 1, 2025, the annual event in the field of filtration and separation technology in North America, the American Filtration Exhibition 2025FiltXpo, was successfully held at the Miami Beach Convention and Exhibition in Florida. As the only professional exhibition in North America focusing on filtration and separation technology, this exhibition brought together 400 leading companies from around the world and attracted more than 14,000 professional visitors, covering core areas such as industrial manufacturing, medical health, new energy, and automotive engineering.

ZFT Group material brand cofon brought four core products to the show, including PTFE materials, glass fiber materials, bag materials, and melt-blown materials. The products can be used in vacuum cleaners (Deebot, handheld, commercial), mask filtration, air conditioning filtration, automotive filtration, industrial dust filter bags, industrial air filtration and other fields.

Our company's self-developed PFAS-Free H13 glass fiber filter material debuted in North America for the first time, and we named it "ZeroPFAS". It is a filter material with zero addition of PFAS (perfluorinated and polyfluoroalkyl substances), which improves the degradation performance in the environment and reduces environmental pollution. At the same time, it has excellent mechanical and cycle performance, ensuring the stability and durability of the product; and its high-precision filtration efficiency and long life can meet complex and demanding application requirements.

PFAS-Free H13 glass fiber filter material can be made into filters of different grades. The high-precision filtration efficiency and long life of this innovative material make it an ideal choice for clean rooms, biomedicine, high-performance battery separators and aerospace.

During the exhibition, the Cofon® international team composed of Chinese and foreign people reached a number of sample tests and cooperation intentions with customers in the United States, Mexico, Brazil and other places with its professional knowledge, and the South American agent negotiation made a breakthrough!

Afterwards, with FILTEXPO as the fulcrum, ZFT Group will continue to deepen its layout in the Americas and empower the global filtration industry upgrade with professional material technology!
`


    }
  },
  {
    txt: "Intelligently Driving South America and Filtering the Future | ZFT GROUP Achieved Fruitful Results at the 2025 Automec Brazil",
    time: '2025-5-6',
    url: '/images/index/2025-5-13-1.webp',
    info: {
      title: "Intelligently Driving South America and Filtering the Future | ZFT GROUP Achieved Fruitful Results at the 2025 Automec Brazil",
      urls: [
        {
          path: '/images/index/2025-5-13-1.webp',
          tip: ''
        },
        {
          path: '/images/index/2025-5-13-2.webp',
          tip: ''
        },
        {
          path: '/images/index/2025-5-13-3.webp',
          tip: ''
        },
        {
          path: '/images/index/2025-5-13-4.webp',
          tip: ''
        },
        {
          path: '/images/index/2025-5-13-5.webp',
          tip: ''
        },
        {
          path: '/images/index/2025-5-13-6.webp',
          tip: ''
        },
        {
          path: '/images/index/2025-5-13-7.webp',
          tip: ''
        },
      ],
      video: '',
      txt:
        `The 17th 2025 Automec Brazil was held in Sao Paulo Convention Center. As the largest and most professional automotive aftermarket event in South America, this exhibition attracted more than 1,200 companies from around the world to participate, with an exhibition area of over 100,000 square meters. About 70,000 professional visitors from Brazil, Argentina, Chile, Peru , Paraguay, Russia and other South American countries as well as Europe, America and Asia gathered together to discuss the innovation trend of the automotive industry chain .

Seinfel , the air brand under ZFT Group , participated in the exhibition and brought major filters and filtration solutions for the automotive industry, such as air filters, cabin filters, and battery filters. With its technological innovation and localized service capabilities, it engaged in in-depth dialogues with South American brands, dealers, and auto repair shops , injecting new impetus into the expansion of the South American market.

were in charge of all customer negotiations at this exhibition: Andrew Sharp, Vice President of Overseas Marketing, and Johnny Riddle, Business Development.

ZFT Group can start research and development from raw material filter materials and tailor different filter requirements for customers. The scene attracted many people in the industry to stop and communicate.

Andrew Sharp shared: During the three days of the exhibition, they established effective communication with more than 80 potential customers. In addition to dealers, auto repair shops, and after-sales service providers, they also had in-depth exchanges with well-known auto brands such as Mitsubishi Brazil , Suzuki Motor , Parker , Filtros Brasil , Hengst Brazil , Quatrodistribiidora, and Tecfiltro . They were very interested in the cabin filters and air filters displayed on site. The auto aftermarket in South America is huge.

As South American countries have increasingly stringent requirements on automobile exhaust emissions and in-car air quality, and the high temperature, high humidity and dusty climate conditions in South America have placed higher demands on filter performance , the market demand has shown a significant growth trend .

Through this exhibition, ZFT Group understands the demand for filters in the South American market. In the future, it will continue to use technological innovation as an engine, continue to innovate and work with South American partners to jointly address the challenges of climate change and energy transformation, and inject "green power" into the high-quality development of the South American automotive industry.
`


    }
  },
  {
    txt: "JEFFEL and ZFT Group jointly appeared at the 2025 IE Expo: \nDrawing a green future with the power of technology",
    time: '2025-4-27',
    url: '/images/index/2025-5-6-1.webp',
    info: {
      title: "JEFFEL and ZFT Group jointly appeared at the 2025 IE Expo: \nDrawing a green future with the power of technology",
      urls: [
        {
          path: '/images/index/2025-5-6-1.webp',
          tip: ''
        },
        {
          path: '/images/index/2025-5-6-2.webp',
          tip: ''
        },
        {
          path: '/images/index/22025-5-6-3.webp',
          tip: ''
        },
        {
          path: '/images/index/2025-5-6-4.webp',
          tip: ''
        },
        {
          path: '/images/index/2025-5-6-5.webp',
          tip: ''
        },
        {
          path: '/images/index/2025-5-6-6.webp',
          tip: ''
        }

      ],
      video: '',
      txt: `From April 21 to 23, 2025, the 26th 2025 IE Expo opened grandly. As the largest and most influential environmental protection event in Asia, this exhibition, with the theme of "Science and Technology Leading Green and Low-carbon Transformation", brought together more than 2,200 companies from 22 countries and regions, with an exhibition area of 198,000 square meters, focusing on displaying cutting-edge technologies and solutions in nine major fields such as water treatment, solid waste resource utilization, and environmental monitoring. JEFFEL and ZFT Group have joined forces to bring core products such as MBR membranes, ultrafiltration membranes, RO reverse osmosis, nanofiltration water purification systems, and commercial/industrial air filters to the show, interpreting the concept of green development with filtration technology , and gaining much attention in the industry .

JEF Exhibition
The exhibition, themed "Technology Leading Green and Low-carbon Transformation", attracted more than 2,200 companies from 22 countries and regions around the world to participate in the exhibition, with an exhibition area of 198,000 square meters, focusing on the cutting-edge technologies and solutions in nine fields, including water treatment, solid waste resource utilization, and environmental monitoring. The joint booth of JEFFEL and ZFT Group was themed " All-round Solutions for Water and Air Filtration ", and through physical displays and technical explanations, it fully presented the company's core products and technologies in the two major fields of water treatment and air purification.

Water Filtration: Protecting Water Quality

JF displayed a series of water treatment products and technologies on site, including MBR membrane, ultrafiltration system, hollow fiber nanofiltration system, RO reverse osmosis membrane, etc., which can meet the needs of different water treatment scenarios such as municipal, industrial wastewater, aquaculture wastewater, water purification, and reclaimed water reuse.

Among them, reverse osmosis products have won numerous praises from customers for their excellent performance. The products are widely used in seawater desalination, industrial wastewater treatment, pure water and ultrapure water preparation, brackish water desalination, municipal wastewater treatment, food processing, biopharmaceuticals and other fields .
1. High water output. The wider water inlet channel design enables it to have a larger flux.
2. High desalination rate. With superb membrane technology, the product has high desalination rate and stability, and the produced water can fully meet the relevant requirements and standards;
3. Low investment cost. Lower energy consumption, thus optimizing operating costs;
4. Long service life. The fully automatic and high-precision manufacturing process reduces the overall contamination of the membrane surface by optimizing the component structure design, prolongs the service life, maximizes the efficiency of the membrane element, and significantly reduces the operating cost.
5. For different water source types, we have developed multiple series of products such as SW, BW, FR, etc.; according to different water volume requirements of customers, we also have membrane elements of different specifications such as "8040", "4040", "4021", etc.

Air filter: protecting respiratory health 
For industrial and commercial scenarios, the company has launched primary, medium, high, sub-high, and activated carbon air filters, which are made of non-woven fabrics , synthetic fibers, glass fibers, activated carbon, galvanized iron, aluminum alloys and other materials, with large dust holding capacity and low resistance. For example, primary filters are suitable for primary filtration in the filtration system, while high-efficiency filters are used for terminal filtration in clean rooms, electronic factories and other high-clean environments . It provides reliable air purification for industrial waste gas treatment, central air conditioning ventilation , clean rooms, precision air conditioning, spray systems and other scenarios .


Deepen technology and expand new opportunities in the global market
At this exhibition, we communicated with more than 100 companies from China, India, Thailand, Vietnam, Kazakhstan and other countries around the world , and learned about the needs of overseas companies for filtration products for the first time. In the future, the company will continue to deepen its core technologies such as membrane separation and air purification, and promote product iteration and upgrading based on customer needs. We will collaborate with global partners to jointly explore new paths for green and low-carbon transformation and contribute to global sustainable development.
`
    }
  },
  {
    txt: "ZFT Group shine at the 2025 China Packaging Container Exhibition\nleading the new trend of environmentally friendly packaging",
    time: '2025-4-17',
    url: '/images/index/2025_4_17_1.webp',
    info: {
      title: "ZZFT Group shine at the 2025 China Packaging Container Exhibition\nleading the new trend of environmentally friendly packaging",
      urls: [
        {
          path: '/images/index/2025_4_17_1.webp',
          tip: ''
        },
        {
          path: '/images/index/2025_4_17_2.webp',
          tip: ''
        },
        {
          path: '/images/index/2025_4_17_3.webp',
          tip: ''
        },
        {
          path: '/images/index/2025_4_17_4.webp',
          tip: ''
        },
        {
          path: '/images/index/2025_4_17_5.webp',
          tip: ''
        },
        {
          path: '/images/index/2025_4_17_6.webp',
          tip: ''
        },
        {
          path: '/images/index/2025_4_17_7.webp',
          tip: ''
        },
        {
          path: '/images/index/2025_4_17_8.webp',
          tip: ''
        },
        {
          path: '/images/index/2025_4_17_9.webp',
          tip: ''
        },
        {
          path: '/images/index/2025_4_17_10.webp',
          tip: ''
        },
        {
          path: '/images/index/2025_4_17_11.webp',
          tip: ''
        }
      ],
      video: '/video/2025中国包装容器展朝晖展位现场视频.mp4',
      txt: `From April 8 to 10, the 2025 China Packaging Container Exhibition was held in Shanghai New International Expo Center. This annual event of the packaging industry attracted the attention of many industry insiders. As my country's innovative and comprehensive display platform for all categories of packaging and containers, the exhibition brought together 500+ high-quality packaging suppliers at home and abroad. The exhibits cover all categories of packaging and container products such as paper, plastic, metal, glass, etc., automated packaging equipment and various packaging services, materials and accessories. In addition, the exhibition also launched innovative projects such as the Sustainable Packaging Zone, the Black Technology Conference, and the PACKCON STAR AWARDS, which fully demonstrated the future trends of the packaging industry.

At this exhibition, ZFT Group made a wonderful appearance with its independently developed 100% degradable and environmentally friendly packaging bags, becoming the focus of everyone's attention. This eco-friendly packaging bag is made of 100% imported wood pulp fiber, which can be naturally degraded after 90 to 120 days. From the main material to the auxiliary material, 100% environmentally friendly and degradable materials are used, such as 100% degradable wood pulp fiber paper, 100% environmentally friendly cotton thread, plant-based ink and biological starch glue, which fully conforms to the current green and environmental protection concept. The product has passed the FSC forest certification, has a compostable degradation report, and an ISTA 6A transportation test report, and the quality is guaranteed.

Since its launch, Zhaohui Co., Ltd.'s 100% degradable and eco-friendly packaging bags have been widely used in many fields. In the field of 3C electronic products, it can be seen in the inner packaging of products such as headphones and sweeping robots. Compared with traditional plastic bags, it has higher strength, stronger tolerance, and good anti-scratch performance;

In the small household appliances, cosmetics, and toy industries, its delicate paper texture adds a touch of refinement to the products; in the fields of auto parts, power tools, leather products, hardware, etc., this environmentally friendly packaging bag also protects the products with its excellent physical properties; in addition, in industries with special requirements for packaging such as ceramic crafts, Zhaohui environmentally friendly packaging bags also perform well, which can not only protect products, but also highlight the unique charm of products.

ZFT Group have gained a lot by participating in this exhibition. On the one hand, it successfully demonstrated the company's innovative and environmentally friendly products and technologies to many industry professionals, further enhancing brand awareness and influence; on the other hand, it has conducted in-depth exchanges with many high-quality suppliers and brand owners at home and abroad, and expanded business cooperation opportunities. At the same time, it also has a deeper understanding of the market demand trend for environmentally friendly packaging products, providing a strong basis for the company's future product research and development and market expansion. In the future, Chaohui Co., Ltd. will continue to uphold the spirit of innovation, constantly explore new possibilities in the field of environmentally friendly packaging, and contribute more to promoting the green development of the packaging industry.

      `
    }
  },
  {
    txt: "ZFT Group\n2025 American AHR Exhibition ended successfully",
    time: '2025-2-15',
    url: '/images/index/2025_AHR1.webp',
    info: {
      title: "ZFT Group\n2025 American AHR Exhibition ended successfully",
      urls: [
        {
          path: '/images/index/2025_AHR1.webp',
          tip: ''
        },
        {
          path: '/images/index/2025_AHR2.webp',
          tip: ''
        },
        {
          path: '/images/index/2025_AHR4.webp',
          tip: ''
        },
        {
          path: '/images/index/2025_AHR5.webp',
          tip: ''
        },
      ],
      video: '',
      txt: "February 10, 2025 , the top event in the global air conditioning, heating, refrigeration and ventilation industry, the American AHR Expo (International Air Conditioning, Heating, Refrigeration Exhibition), came to a successful conclusion in Ortlando , USA . As one of the most influential exhibitions in the industry, AHR Expo attracted industry experts, companies and innovative products from all over the world to participate in the exhibition, discuss industry trends, and showcase the latest technologies and products.\n" +
        "\n" +
        "At present, the market demand for HVAC (heating, ventilation and air conditioning) equipment continues to grow, and the market competition is fierce but the prospects are broad. With the steady growth of the global economy, the acceleration of urbanization and the improvement of residents' living standards, HVAC equipment has been widely used in residential, commercial, industrial and special environments. Intelligence, high efficiency and energy saving, green buildings and sustainable development have become the keywords for the development of the industry.\n" +
        "\n" +
        "At this exhibition, ZFT Group displayed a variety of core filtration products including primary efficiency bag filters, primary efficiency plate filters, V-bank filters, medium efficiency glass fiber filters, medium efficiency chemical fiber filters, high efficiency filters, liquid tank filters, and warm pass filter materials , which attracted many customers to stop and consult.\n" +
        "\n" +
        "The various levels of filters displayed by ZFT Group can be widely used in pre-filtration and main filtration systems for commercial and industrial ventilation purification in office buildings, hospitals, clean rooms, etc., to provide clean and safe air.\n" +
        "\n" +
        "At the exhibition, ZFT Group had in-depth exchanges with customers from different parts of America and Europe. Through face-to-face communication, we have a clearer understanding of customer needs and industry development trends. These valuable customer needs and industry information will provide strong support for ZFT Group's future product development and market promotion.\n" +
        "\n" +
        "This exhibition not only demonstrates ZFT Group 's leading position in the field of warm pass filtration, but also provides us with a platform to communicate with global customers and industry experts. In the future, ZFT Group will continue to uphold the corporate spirit of \"ingenuity and dedication\", continuously improve product quality and service quality, and provide global customers with more high-quality and efficient warm pass filtration solutions."
    }
  },
  {
    txt: "[ZFT Group·Cofon Materials]\nAttended FSA2024 Asian Filtration and Separation Industry Seminar",
    time: '2024-12-18',
    url: '/images/index/12_20_1.webp',
    info: {
      title: "[ZFT Group·Cofon Materials]\nAttended FSA2024 Asian Filtration and Separation Industry Seminar",
      urls: [
        {
          path: '/images/index/12_20_1.webp',
          tip: ''
        },
        {
          path: '/images/index/12_20_2.webp',
          tip: ''
        },
        {
          path: '/images/index/12_20_3.webp',
          tip: ''
        },
        {
          path: '/images/index/12_20_4.webp',
          tip: ''
        },
        {
          path: '/images/index/12_20_5.webp',
          tip: ''
        },
      ],
      video: '',
      txt: "FSA2024 Asia Event\n" +
        "FSA2024 Asia Filtration and Separation Industry Exhibition is co-organized by the Filtration and Separation Technology Professional Committee of China Technology Market Association (CFS), Shanghai Xida Technology Co., Ltd. (CNTA), and Informa Markets . As an annual top event in the industry, it not only brings together the world's top technologies and products, but also serves as a bridge for exchange of ideas and cooperation. Kefu Materials, a subsidiary of ZFT Group, brings the latest scientific research results to explore new technologies in the industry on this platform !\n" +
        "\n" +
        "Zhaohui Shares: Continuous innovation leads the future\n" +
        "At the FSA2024 industrial seminar, ZFT Group with its profound industry accumulation and innovative spirit, brought a wonderful report entitled \"Key Process of High Dust Capacity Coarse Denier Melt-Spinning Filter Material and Its Application Research in HVAC\". As a veteran company in the field of environmental protection filter materials , ZFT Group has been committed to the research and development and application of filtration technology since its establishment. The 30 years of persistence embodies ZFT Group 's unremitting pursuit of quality and deep understanding of innovation.\n" +
        "\n" +
        "HVAC Market\n" +
        "The global HVAC filter market is expected to reach $5.12 billion in 2023 and will continue to grow in the next few years. Growth rate: It is expected that by 2030, the global HVAC filter market will reach $9.76 billion, with a compound annual growth rate (CAGR) of about 9.8%. The HVAC market capacity continues to expand and has broad prospects.\n" +
        "Note: Data source: QYR Research Report \"2024-2030 Global and China HVAC Industry Filter Market Status and Future Development Trends\"\n" +
        "\n" +
        "High dust holding coarse denier meltblown material\n" +
        "The core of this sharing - high dust holding coarse denier melt-spun filter material, is a key material for HVAC air filtration newly developed by ZFT Group. This material achieves a balance between high efficiency and low resistance with its unique process design .\n" +
        "Its characteristics are:\n" +
        "Coarse and fine spiral twisted fiber mesh structure : High dust holding coarse denier melt-spun filter material has a unique designable coarse and fine fiber alternating structure, in which the coarse fiber diameter can reach more than 25μm, interweaving in the fiber structure to form a strong skeleton support, while its fine fiber can reach 3-10μm, filling in the skeleton to form a three-dimensional fiber mesh structure of coarse and fine spiral interweaving , which is the basis for its high filtration efficiency.\n" +
        "Good fluffiness: The high dust holding coarse denier melt-spun filter material has very good fluffiness due to its unique structure. The thickness can be from 0.6mm to 8mm, which gives it a huge dust holding advantage in HVAC applications.\n" +
        "Electrostatic electret property : The high dust holding coarse denier melt-spun filter material product uses polypropylene as the main raw material and has electrostatic electret property . Through the electret process, it can have a higher electrostatic adsorption property, so that it can have a very high interception efficiency for fine dust particles below 1μm through electrostatic adsorption on the basis of basic structure filtration .\n" +
        "Larger weight range: High dust holding coarse denier melt-spun filter material products have a larger weight range, with a minimum weight of 30g/m2 and a maximum weight of 400g/m2. It has a wide adaptability and different weights can be selected according to different application requirements.\n" +
        "Short processing steps: High dust holding coarse denier melt-spinning filter material is a pure filament process. The raw materials used are mainly thermoplastic resins, which are made by melt spinning. It has the characteristics of short processing flow, one-time molding and high output.\n" +
        "\n" +
        "High dust holding coarse denier melt-spun filter materials can be widely used in wire mesh supported filters, plate self-supporting filters, bag filters and other products due to their excellent filtering performance.\n" +
        "\n" +
        "The on-site response was enthusiastic and they talked about the future together\n" +
        "At the report sharing site, Li Hongchang, the technical engineering manager of ZFT Group, explained in an easy-to-understand manner the technical details and application cases of high dust holding coarse denier meltblown filter materials, which aroused great interest among the audience. The audience took out their mobile phones to take photos and record, and many industry colleagues seized the opportunity to actively ask questions and conduct in-depth discussions on material performance optimization, process and other aspects. After the meeting, many participants took the initiative to add contact information, looking forward to deeper cooperation and exchanges in the future."
    }
  },
  {
    txt: 'ZFT Group 2024 FILTECH Exhibition:\n' +
      'Leading the New Future of Filtration Technology',
    time: '2024-11-27',
    url: '/images/index/2024_FILTECH_德国_2.webp',
    info: {
      title: 'ZFT Group 2024 FILTECH Exhibition:\n' +
        'Leading the New Future of Filtration Technology',
      urls: [
        {
          path: '/images/index/2024_FILTECH_德国_2.webp',
          tip: ''
        },
        {
          path: '/images/index/2024_FILTECH_德国_6.webp',
          tip: ''
        },
        {
          path: '/images/index/2024_FILTECH_德国_7.webp',
          tip: ''
        },
        {
          path: '/images/index/2024_FILTECH_德国_8.webp',
          tip: ''
        },
        {
          path: '/images/index/2024_FILTECH_德国_12.webp',
          tip: ''
        },
        {
          path: '/images/index/2024_FILTECH_德国_13.webp',
          tip: ''
        },
      ],
      video: '',
      txt: "Recently, the world-renowned filtration industry event-the 2024 FILTECH exhibition was successfully concluded in Cologne, Germany on November 14. Cofon Filtration Materials, a subsidiary brand of ZFT Group, participated in the exhibition again. The exhibition not only displayed the latest filtration materials and technologies, but also exhibited low, medium and high efficiency filters in the field of warm pass filtration.\n" +
        "\n" +
        "The Cologne International Filtration and Separation Technology Equipment Industry Exhibition (FILTECH) in Germany is a professional filtration and separation exhibition in Europe and one of the most influential events in the field of filtration technology in the world. The Cologne Filtration Exhibition in Germany is a comprehensive exhibition that integrates procurement, sales, improvement or research of filtration and separation equipment and services, covering various market areas. FILTECH was held for the first time in 1967, and has been held every year and a half since then. Each exhibition will display the most advanced filtration and separation technologies and products. This exhibition provides an extremely rare opportunity for Chinese filtration companies to explore the European market, and it is also the most important communication and display platform for major exhibitors.\n" +
        "\n" +
        "As a leading material company with more than 30 years of industry experience, Kefu Filter Materials is committed to providing healthy air and healthy water filtration solutions. The meltblown materials, glass fiber materials, PTFE materials, composite materials, environmentally friendly packaging materials and other filter materials displayed at this exhibition can be used in vacuum cleaners (Deebot, handheld, commercial), mask filtration, air conditioning filtration, automobile filtration, industrial dust filter bags, industrial air filtration, industrial packaging and other fields.\n" +
        "\n" +
        "The PFAS- Free H13 glass fiber filter material independently developed by our company made its debut. It is a filter material with zero addition of PFAS (perfluorinated and polyfluoroalkyl substances), which improves the degradation performance in the environment and reduces environmental pollution. At the same time, it has excellent mechanical and cyclic properties to ensure the stability and durability of the product; and its high-precision filtration efficiency and long life can meet complex and demanding application requirements.\n" +
        "\n" +
        "PFAS- Free H13 glass fiber filter material can be made into filters of different grades and used in clean rooms, biomedicine, high-performance battery separators and aerospace.\n" +
        "\n" +
        "PP meltblown material has become another highlight of the exhibition. The company has a number of electret patented technologies to ensure low resistance and high efficiency of the product. Its gradient filtration design prolongs the service life of the filter; it can be used in combination with different non-woven fabrics and applied to medium and high efficiency filter devices and bag filters in automotive air conditioning systems, central air conditioning systems, clean room purification fields, etc.; it can also be used in masks, household and commercial vacuum cleaners, air purifier nets and other components.\n" +
        "\n" +
        "The company's products comply with international standards such as ASHRAE 52.2, EN779, and ISO16890, and have been exported to Europe, America, the Middle East, Asia and other regions.\n" +
        "\n" +
        "During the exhibition, ZFT Group 's staff had in-depth exchanges and interactions with visitors from Europe, the United States, the Middle East and other parts of the world. They introduced the company's products and services in detail and answered visitors' various questions about filtration technology. ZFT Group 's professionalism and high-quality services have won high recognition and praise from visitors."
    }
  },
  {
    txt: 'ZFT Group will participate in\n' +
      '2024 AAPEX',
    time: '2024-11-12',
    url: '/images/index/202411121.webp',
    info: {
      title: 'ZFT Group will participate in\n' +
        '2024 AAPEX',
      urls: [
        {
          path: '/images/index/202411121.webp',
          tip: ''
        },
        {
          path: '/images/index/202411122.webp',
          tip: ''
        },
        {
          path: '/images/index/202411123.webp',
          tip: ''
        },
        {
          path: '/images/index/202411124.webp',
          tip: ''
        },
      ],
      video: '',
      txt: "In this golden autumn season, the top global automotive industry parts and components event opened in Las Vegas, the United States. The three-day 2024 AAPEX came to a successful conclusion on November 7! As one of the most influential events in the global automotive aftermarket, AAPEX not only brings together top manufacturers, suppliers and industry elites from all over the world, but also is the forefront of the exchange of innovative technologies and market trends.\n" +
        "\n" +
        "ZFT Group as a high-quality supplier in the field of automotive filters, not only displayed conventional air filters and air conditioning filters at this exhibition, but also grandly launched new functional new energy battery air filters and functional air conditioning filters (aromatic and bamboo charcoal fiber) new products, which received a lot of attention and praise!\n" +
        "\n" +
        "Exhibition Review\n" +
        "ZFT Group has participated in the event for many consecutive years. At the 2024AAPEX exhibition, ZFT Group 's booth attracted the attention of many industry leaders, especially the new functional new energy battery air filter and functional air conditioning filter (aromatic and bamboo charcoal fiber) launched at this exhibition. Its excellent filtering performance and durability have won the interest and attention of customers.\n" +
        "\n" +
        "New functional new energy battery air filter - The rapid growth of new energy vehicles has accelerated the demand for battery filters. ZFT Group 's independently developed battery filter is designed to protect the battery system of electric vehicles from external damage such as dust and moisture, effectively extending the battery life and improving the overall performance of the vehicle.\n" +
        "\n" +
        "Aroma and bamboo charcoal fiber air conditioning filter - Combining modern people's pursuit of health and comfortable driving experience, we have launched an air conditioning filter that combines natural fragrance and bamboo charcoal purification technology. It can not only efficiently filter particulates, pollen and harmful gases in the air, but also release natural fragrance to create a fresh and pleasant in-car environment.\n" +
        "\n" +
        "Cambodia Manufacturing Base: Dual Guarantee of Cost Advantage and Delivery Efficiency\n" +
        "\n" +
        "With the current changes in tariffs and the complex economic situation, the global supply chain pattern has changed significantly. Against this background, the importance of Cambodia as a manufacturing base has become increasingly prominent, and it has become increasingly critical for American and European companies.\n" +
        "\n" +
        "Cambodia is located in Southeast Asia and has a superior geographical location, which is convenient for trade with the global market. Cambodia's labor costs are relatively low and the labor supply is sufficient, which gives companies a clear advantage in controlling production costs.\n" +
        "The first phase of ZFT Group 's Cambodia Manufacturing Base was launched in 2019. The base has been continuously improved and expanded in the past five years. The third phase has been successfully put into production, and the plant area has reached 32,000 square meters. At the same time, a food-grade clean workshop, a complete material, device and filtration system testing center have been established, and the business covers floor cleaning, air filtration, automotive filtration products and filtration solutions.\n" +
        "\n" +
        "Since its establishment, the Cambodia Manufacturing Base has served most of the company's customers in the Americas and Europe, and has been highly recognized by customers.\n" +
        "\n" +
        "During the exhibition, ZFT Group 's American and Chinese teams worked together to win the respect of customers with professional knowledge and high-quality services. During the three days, we had in-depth exchanges and negotiations with many well-known auto parts companies in the United States, the United Kingdom, Germany, France, etc. Through face-to-face communication, we not only grasped the latest needs and trends of the global market more accurately, but also successfully established preliminary cooperative relationships, laying a solid foundation for further expansion in the global market in the future."
    }
  },
  {
    txt: 'ZFT Group participated in the ALL4PACK\n' +
      'in France',
    time: '2024-11-08',
    url: '/images/index/2024118-1.webp',
    info: {
      title: 'ZFT Group participated in the ALL4PACK\n' +
        'in France',
      urls: [
        {
          path: '/images/index/2024118-1.webp',
          tip: ''
        },
        {
          path: '/images/index/2024118-2.webp',
          tip: ''
        },
        {
          path: '/images/index/2024118-3.webp',
          tip: ''
        },
        {
          path: '/images/index/2024118-4.webp',
          tip: ''
        },
        {
          path: '/images/index/2024118-5.webp',
          tip: ''
        },
        {
          path: '/images/index/2024118-6.webp',
          tip: ''
        },
        {
          path: '/images/index/2024118-7.webp',
          tip: ''
        },
      ],
      video: '',
      txt: "At the just concluded 2024 Paris Packaging Industry Exhibition (ALL4PACK 2024), ZFT Group was favored by customers for its independently developed 100% degradable and environmentally friendly packaging bags. This exhibition not only showcased the latest technologies and trends in the global packaging industry, but also made ZFT Group deeply feel the urgent need for environmentally friendly products in the European market under the environmental protection policy of the international plastic elimination order.\n" +
        "\n" +
        "Exhibition Introduction\n" +
        "The ALL4PACK exhibition was held at the Paris Nord Villepinte Exhibition Center from November 4 to 7, 2024. The exhibition brought together more than 1,000 featured companies from all over the world and attracted tens of thousands of professional visitors to visit and exchange. As an important gathering place for purchasing personnel and decision makers in the packaging industry around the world, ALL4PACK represents the development and innovation direction of the international packaging industry and is one of the most influential packaging industry events.\n" +
        "\n" +
        "Environmental protection policy of the international plastic elimination order\n" +
        "In recent years, many countries and regions around the world have taken actions to restrict the use of plastic products to address the problem of plastic pollution. From January 1, 2023, France requires fast food restaurants to use reusable tableware instead of disposable plastic tableware, and plans to gradually ban disposable plastic packaging, with the goal of reducing the use of disposable plastic products to zero by 2040. In addition, the European Union also officially implemented the Sustainable Product Ecodesign Regulation (ESPR) on July 18, 2024, requiring products to comply with ecodesign requirements before they can enter the EU market or be put into use. These policies and actions show the global concern about plastic pollution and the common determination to solve this problem.\n" +
        "\n" +
        "Introduction to ZFT Group 's 100% degradable environmentally friendly packaging bags\n" +
        "With changes in regulations and growing consumer demand for more sustainable and responsible packaging, the 100% degradable environmentally friendly packaging bags independently developed by ZFT Group have undoubtedly become the focus of the exhibition under such an environmental protection background. ZFT Group 's environmentally friendly packaging bags use 100% pure wood pulp fibers, which can be naturally degraded after 90 to 120 days. The products have passed FSC forest certification and have ROHS/REACH/MSDS/TDS/biodegradation reports/Halogen Approval reports.\n" +
        "\n" +
        "The product has high strength, strong tolerance, delicate paper and anti-scratch. The company is equipped with high and low temperature environment experiments, drop, vibration and other transportation test equipment to ensure product quality.\n" +
        "\n" +
        "Since its launch, the product has been widely used in the packaging fields of 3C electronic products, small household appliances, cosmetics, toys, auto parts and decorative parts, power tools, leather products, hardware, wine, ceramic crafts, etc.\n" +
        "\n" +
        "Exhibition gains\n" +
        "\n" +
        "By participating in this exhibition, ZFT Group not only demonstrated its innovative and environmentally friendly products and technologies, but also deeply understood the urgent demand for environmentally friendly products in the European market. During the exhibition, ZFT Group had in-depth exchanges with many European companies and explored cooperation opportunities, laying a solid foundation for future market expansion.\n" +
        "\n" +
        "After several days of exhibition exchanges and field visits, the company deeply felt the impact and promotion of international environmental protection policies on the packaging industry. ZFT Group will continue to increase R&D investment, continuously improve the environmental performance and market competitiveness of its products, and contribute its own strength to the global environmental protection cause."
    }
  },
  {
    txt: '[ZFT GROUP] Set sail for 2025 and draw a grand blueprint together \n the three-day strategic event concluded successfully',
    time: '2024-10-21',
    url: '/images/index/10-25-2.webp',
    info: {
      title: '[ZFT GROUP] Set sail for 2025 and draw a grand blueprint together\n' +
        'the three-day strategic event concluded successfully',
      urls: [
        {
          path: '/images/index/10-25-1.webp',
          tip: ''
        },
        {
          path: '/images/index/10-25-2.webp',
          tip: ''
        },
      ],
      video: '',
      txt: "Opening message\n" +
        "In this new era full of hope and challenges, ZFT GROUP has been seeking change and innovation, leading the company to a higher level through strategy. The 2025 strategy launch and three-year strategic planning meeting concluded successfully after three days of intense and passionate discussions. We not only reviewed the achievements and existing problems in 2024, but also looked forward to the infinite possibilities in the future. ZFT GROUP will continue to adhere to innovation and innovation, delve into the field of environmental protection, and create a green future.\n" +
        "\n" +
        "\n" +
        "The meeting was chaired by Li Wei, Director of System Operations, and included company President You Jianming, Vice President Zhong Jincao, Vice President of Domestic Marketing Liu Yonghuan, Vice President of Finance Center and Director of the President’s Office Sun Chenglei, Vice President of Overseas Sales Andrew Sharp, Marketing Management Director Shen Yanhu, Gong Weifeng, Director of the Production Operation Management Center, Lu Jian, Director of the Enterprise Research Institute, Cao Haigang, Director, and other relevant leaders and company backbones attended the meeting.\n" +
        "\n" +
        "\n" +
        "Don’t be diligent but lack of plan\n" +
        "\n" +
        "The meeting kicked off in a solemn and orderly atmosphere. Mr. You Jianming, the company's president, took the stage first and delivered an inspiring opening speech. He emphasized the vital importance of strategy in corporate development and is the direction of company development. Don't use tactical diligence to cover up strategic laziness. A solid and powerful strategy can avoid many uncertain factors. Even if the external environment is complex and changeable, it can still gain a firm foothold and allow the company to continue to move forward steadily.\n" +
        "\n" +
        "\n" +
        "Finance Department: Based on data, move forward steadily\n" +
        "\n" +
        "Sun Chenglei, Vice President of the Finance Center and Director of the President's Office, made a financial report on the company's overall operating conditions. He used detailed data to show the company's achievements and existing problems in 2024, and also gave directions for improvement, laying the foundation for the company's development and profit improvement in 2025.\n" +
        "\n" +
        "\n" +
        "Domestic Marketing Department: Deep insights and steady progress\n" +
        "Liu Yonghuan, Vice President of Domestic Marketing, painted a magnificent picture of market development for us with his keen market insights and forward-looking strategic deployment. He pointed out that in the turbulent, uncertain, complex and ambiguous environment that the current society is in, as well as in the face of increasingly fierce market competition, good strategies are needed to influence the development of the company. He made full discussions in the fields of air filtration, water filtration, and environmentally friendly packaging.\n" +
        "\n" +
        "\n" +
        "Overseas Marketing Department: Sail overseas and embrace the world\n" +
        "Andrew Sharp, Vice President of Overseas Sales, used SWOT principles to analyze the internal and external competitive environment and situation under competitive conditions, and analyzed the internal and external strengths, weaknesses, opportunities and threats. At the same time, he reported on the sales situation in 2024 and the sales target in 2025, and shared the blueprint for overseas market expansion.\n" +
        "\n" +
        "Production Operations Management Center: Provide quality products, reduce costs and increase efficiency\n" +
        "Gong Weifeng, director of the Production Operation Management Center, made a report from the perspective of manufacturing and supply chain. He pointed out that it will strengthen strategic cooperation with key suppliers, optimize product lines, and improve product quality. By continuously optimizing management measures, we can reduce costs and inventory and deliver timely and effective deliveries, thereby increasing profit margins.\n" +
        "\n" +
        "On the second day of the meeting, all participating representatives had an in-depth discussion around the strategic goals for 2025 and jointly formulated sales goals and implementation paths for the next three years. We have made it clear that technological innovation is the driving force and market expansion is the core, and we have proposed specific and quantifiable sales targets and key strategic measures to ensure that the goals can be successfully achieved.\n" +
        "\n" +
        "Through the three-day meeting, ZFT GROUP further clarified its future strategic development direction, and at the same time inspired every ZFT GROUP person to move forward bravely, work hard and write a new chapter for ZFT GROUP 's future."
    }
  },
  {
    txt: 'Exhibition Notice of\n' +
      'Oct and Nov',
    time: '2024-10-13',
    url: '/images/index/newJin.webp',
    info: {
      title: 'Exhibition Notice of\n' +
        'Oct and Nov',
      urls: [
        {
          path: '/images/index/newJin2.webp',
          tip: ''
        },
        {
          path: '/images/index/newJin3.webp',
          tip: ''
        },
        {
          path: '/images/index/newJin4.webp',
          tip: ''
        },
      ],
      video: '',
      txt: "ZFT Group will has 4 exhibitions holding in next half this year and very hope all customers visit our number.\n" +
        "\n" +
        "1st：GuangZhou China \n" +
        "\n" +
        "Exhibition Name：136 th Canton Fair\n" +
        "Exhibition Time：2024.10.15-19\n" +
        "Exhibition Number：2.2K01-02\n" +
        "Exhibition Adress：Canton Fair Complex\n" +
        "\n" +
        "2nd：Paris France\n" +
        "\n" +
        "Exhibition Name：2024 All4pack\n" +
        "Exhibition Time：2024 .11 .4 -7 \n" +
        "Exhibition Number：5 B085\n" +
        "Exhibition Adress：Paris Nord Villepinte,ZAC Paris Nord 2 93420 Villepinte\n" +
        "\n" +
        "3rd：Las Vegas USA\n" +
        "\n" +
        "Exhibition Name：2024 AAPEX\n" +
        "Exhibition Time：2024.11.5-7\n" +
        "Exhibition Number：A4474\n" +
        "Exhibition Adress: Las Vegas, NV The Venetian Expo & Caesars Forum\n" +
        "\n" +
        "4th：Cologne Germany\n" +
        "\n" +
        "Exhibition Name：2024 FILTECH\n" +
        "Exhibition Time：2024.11.12-14\n" +
        "Exhibition Number：Hall 7 P12\n" +
        "Exhibition Number：KoelnMesse Halls 7+8 Entrance North / Messeplatz 1 50679 Cologne – Germany"
    }
  },
  {
    txt: 'Automechanika Frankfurt\n' +
      '2024',
    time: '2024-09-18',
    url: '/images/index/new1111.webp',
    info: {
      title: '2024 \n' +
        '135th Spring Canton Fair',
      urls: [
        {
          path: '/images/index/new1111.webp',
          tip: ''
        },
        {
          path: '/images/index/new2222.webp',
          tip: '',
        },


      ],
      video: '',
      txt: "Automechanika Frankfurt 2024 ended successfully on September 14. ZFT Group had showed the air filters, cabin filters, and eco-oil filter, battery air filters were favored by many customers.\n" +
        "During the five-day exhibition, we received hundreds of potential customers and gave about 10 preliminary cooperation intentions, which laid a good foundation for future European market development.\n" +
        "Our operations are backed by an IATF 16949 approved management system, ensuring top-tier \n" +
        "quality and efficiency. Additionally, we hold ISO 14001 and ISO 9001 certifications, reinforcing\n" +
        "our commitment to environmental responsibility and consistent quality standards.\n" +
        "At ZFT Group, we lead the way in air filtration technology. With Seinfel as our flagship brand, we specialize in premium automotive air filtration solutions that set the standard for quality and reliability.\n" +
        "Reliable Air Quality: Seinfel filters are engineered to consistently deliver the air quality your vehicle needs for optimal performance and protection.\n" +
        "Global Trust: Automotive industries around the world trust Seinfel for our commitment to excellence and innovation.\n" +
        "Dependable Performance: Our high-quality air filters are designed for durability and consistent performance, mile after mile.Join the global movement for cleaner air. Partner with Seinfel by ZFT Group today and experience the difference that premium air filtration can make.\n"
    }
  },
  {
    txt: 'The 35th International Exhibition on Refrigeration, Air Conditioning, Heating, Ventilation and Food Freezing & Processing',
    time: '2024-04-29',
    url: '/images/index/new111.webp',
    info: {
      title: 'The 35th International Exhibition on Refrigeration, Air Conditioning, Heating, Ventilation and Food Freezing & Processing in Beijing, China',
      urls: [
        {
          path: '/images/index/new1.webp',
          tip: ''
        },
        {
          path: '/images/index/new2.webp',
          tip: '2024 China Refrigeration Expo\nZFT Filter Products',
        },


      ],
      video: '',
      txt: "China Refrigeration Expo CR EXPO is one of the world’s leading exhibitions for refrigeration, air conditioning, HVAC, frozen food processing, packaging and storage (referred to as China Refrigeration Expo). China Refrigeration Expo is one of the world’s largest professional exhibitions in this specialized field, with two international authoritative certifications of UFI and USFCS, forming a diversified platform with the exhibition as the leading one, high-end forum as the support, and the Internet as the carrier.\n" +
        "The 2024 China Refrigeration Exhibition was held in the capital Beijing. As a global leading filtration system solution service provider with more than 30 years of historical experience, Chaohui once again participated in this exhibition and displayed commercial and industrial filtration products and solutions, which include different levels of filters such as primary bag filters, primary plate filters, V-bank filters, medium-performance fiberglass filters, medium-performance chemical fiber filters, high-efficiency filters and tank filters, etc. Chaohui’s products are widely used in office buildings, hotels, shopping malls, shopping malls and other commercial and industrial buildings, and are suitable for the following applications. They are suitable for office buildings, hotels, shopping malls, restaurants, semiconductor, electronics, automotive and manufacturing industries.\n" +
        "As one of the few companies in the industry that owns the R&D and manufacturing of original materials, this time we show the key materials in the HVAC industry, glass fiber materials, meltblown composites, laminating materials, and bagging materials. These materials can be used in HVAC purification products of different filtration levels, such as primary, medium and high efficiency, and can be customized and developed according to the actual use requirements."
    }
  },
  {
    txt: "ZFT's April Exhibition\n Series Ends Successfully: Painting A New Chapter In Environmental Protection Industry",
    time: '2024-04-29',
    url: '/images/index/new4.webp',
    info: {
      title: "2024 PACKCON Packaging\n" +
        "& Container Show",
      urls: [
        {
          path: '/images/index/new3.webp',
          tip: ""
        },
        {
          path: '/images/index/new4.webp',
          tip: "2024 China Refrigeration Expo\nZFT's Booth",
        },
      ],
      txt: "PACKCON China is jointly organized by the China Packaging Federation and Reed Exhibitions, bringing together more than 30,000 packaging purchasing decision makers from eight major end-use sectors: electronics and electrical appliances, e-commerce and logistics, food, beverage, catering and takeaway, daily use, household chemicals and\npharmaceuticals and healthcare.\n 2024PACKCON China was successfully held on April 10-12, 2024 at Shenzhen International Convention & Exhibition Center (Bao’an New Venue), focusing on the full range of packaging and container products such as paper, plastic, metal, glass, etc. as well as comprehensive packaging solutions.\n" +
        "As a new star in the packaging industry, Chaohui was invited to participate in this event again. The exhibition mainly displayed environmental protection packaging products.\n" +
        "Chaohui special environmentally friendly packaging bags are made of 100% wood pulp fiber, the wood used is imported from overseas material origin has FSC forest certification, which guarantees the stable forest management right, and can be used to replace plastic as the inner packaging of products.\n" +
        "The product has high strength, strong endurance, delicate paper, anti-scratch, and is widely used in the packaging of 3C electronic products, small home appliances, cosmetics, toys, auto parts and decorative parts, power tools, leather products, hardware, alcohol, ceramic handicrafts and so on."
    }
  },
  {
    txt: "2024 \n" +
      "135th Spring Canton Fair",
    time: '2024-04-29',
    url: '/images/index/new333.webp',
    info: {
      title: "2024 \n" +
        "135th Spring Canton Fair",
      urls: [
        {
          path: "/images/index/new5.webp",
          tip: "2024 Spring Canton Fair\nZFT Environmental Packaging Products"
        },
        {
          path: "/images/index/new6.webp",
          tip: "2024 Spring Canton Fair\nThree Filter Systems",
        },
      ],

      txt: "The annual spring Canton Fair was successfully concluded on April 19 at Pazhou Exhibition Center in Guangzhou. As one of the largest comprehensive international trade events in the world, Canton Fair brings together many high-quality enterprises and products.\n" +
        "Chaohui is honored to continue to participate in the first phase of the Canton Fair. In Chaowai’s booth located in the Home Appliances section, the mainstream technologies and products in the home appliance industry, floor cleaning system, household air purification system, water purification and filtration system, commercial air filtration system and environmentally friendly packaging products were displayed.\n" +
        "At the Packaging & Container Fair which ended on April 12, its natural degradable feature, ZFT environmental protection packaging was praised by many customers. At the Canton Fair for overseas markets, environmentally friendly packaging that can replace plastic is also popular. Customers in the UK, Germany, Italy, the US and other European and American markets are very interested in alternative plastic inner packaging, and we have established contact with many companies to further explore ways of cooperation in the future.\n" +
        "In addition, the company’s three major filtration systems: floor cleaning system, household/commercial air purification system, and water purification and filtration system have also gained a high degree of attention from global customers.\n" +
        "Chaohui is one of the few full chain suppliers in the world from the R&D and manufacturing of raw materials, R&D and manufacturing of finished products and system development. We have thousands of raw material libraries, different ladder prices, multiple packaging solutions, different transportation solutions, globalized manufacturing and warehousing solutions to choose from.\n" +
        "After the three events, we have learned the changes of customers’ demands in the current domestic and international situation, i.e. there are opportunities and challenges, which is a valuable treasure for Chaohui. In the future development, we will continue to increase the technological innovation and provide the best products, technology and services to our customers."
    }
  },
  {
    txt: "2024\n Chicago AHR",
    time: '2024-01-24',
    url: '/images/index/new444.webp',
    info: {
      title: "2024 \n" +
        "Chicago AHR",
      urls: [
        {
          path: "/images/index/new7.webp",
          tip: ""
        },
        {
          path: "/images/index/new8.webp",
          tip: "",
        },
        {
          path: "/images/index/new9.webp",
          tip: "",
        },
      ],
      txt: "ZFT Group is once again participating in this important event and has the opportunity to discuss new technologies and products for HVAC with senior industry experts from around the world.\n" +
        "AHR in the United States is one of the top events in the global HVAC and refrigeration industry, attracting nearly 1600+exhibitors and nearly 100000 professional visitors annually.\n" +
        "At this exhibition, the new brand \"SeinfelTM\" of ZFT Group made its debut.\n" +
        "In order to adapt to the company’s business development plan, ZFT Group has invested in the existing water filtration brand Jeffel ® And filter material brand Cofon ® On the basis of this, we officially launched a new air filtration brand - SeinfelTM.\n" +
        "SeinfelTM carries the innovative concept and technological strength of ZFT Group, and is committed to providing efficient and environmentally friendly air filtration solutions to meet the diverse needs of the global market.\n" +
        "Commercial buildings/public buildings play a crucial role in society, and according to research, indoor air pollution levels may be up to five times higher than outdoor levels.\n" +
        "A good air purification and ventilation system is essential to prevent cross infection and improve the air quality and comfort of the building environment.\n" +
        "At the same time, in order to better serve global customers, ZFT Group has established a global production and sales network. Its manufacturing bases will be distributed in Cambodia, China, Malaysia, and other places, and sales offices will be set up in the United States, Singapore, the United Kingdom, Dubai, Germany, France, and China. In addition, we established our Singapore company FILTERPRO DEVELOPment PTE. LTD. in 2023, responsible for providing services and expanding our global business.\n" +
        "The 2024 Chicago American HVAC and Refrigeration Show (AHR) has laid a solid foundation for further expanding Chaohui’s global business. In the future, Chaohui will continue to launch more high-quality products and services, providing efficient, energy-saving, and environmentally friendly air ventilation and purification solutions for global users.\n" +
        "\n"
    }
  },
  {
    txt: "Accelerating Double\n Cycling, ZFT Kicks Off The Year With 2023 American AHR Appearance",
    time: '2023',
    url: '/images/index/new555.webp',
    info: {
      title: "Accelerating Double Cycling, \nZFT Kicks Off The Year With 2023 American AHR Appearance",
      urls: [
        {
          path: "/images/index/new10.webp",
          tip: ""
        },
        {
          path: "/images/index/new11.webp",
          tip: "",
        },
        {
          path: "/images/index/new12.webp",
          tip: "",
        },
      ],
      txt: "February 6-8, 2023 American Heating, Refrigeration and Air Conditioning and Ventilation Expo (AHR Expo 2023) in Atlanta Georgia World Congress Center successfully concluded, AHR Expo is a long history, is the United States refrigeration, HVAC and pumps and valves in the field of products in the largest, most important and most influential professional exposition, but also the global heating, ventilation and refrigeration industry's major event, since 1930, since its inception, AHR Expo has been in pursuit of industry trends and continuous innovation to bring together the industry’s top technology and products, attracting many experts in the industry to exchange and cooperate. Since its inception in 1930, AHR Expo has been following the development trend of the industry, constantly innovating, bringing together the top technologies and products in the industry, and attracting many experts in the industry to communicate and cooperate with each other.\n" +
        "ZFT has been attaching great importance to AHR Expo since it entered the HVAC field, it is one of the important platforms for ZFT to develop the market in North America, and it is a very effective way to show the company’s strength, products and technology. 2023 AHR Expo, which is the debut of Chaohui International Stage after the epidemic, after two years of precipitation, we have brought brand new products and services, which have been recognized and favored by many industry insiders. We were recognized and favored by many people in the industry. We displayed the mainstream products and technical solutions in the industry, such as primary bag filter, primary plate filter, V-bank filter, medium-performance fiberglass filter, medium-performance chemical fiber filter, high-efficiency filter, liquid tank filter, warming filter material, etc. We are committed to providing professional air filtration products and services for the users both at home and abroad, presenting the core technology of ZFT air filtration, and contributing to the promotion of the sustainable development of the world, energy saving, healthy production and health, as well as to the improvement of the quality of air filtration. energy saving, and realize healthy production and life with vitality.\n" +
        "\n" +
        "Commercial buildings/public buildings play a vital role in the society, the air quality inside the building is getting more and more attention from people, according to the research, the pollution level of indoor air may be as much as five times higher than that of the outdoor, the indoor pollution that may be contained in molds, spores, pollen, carbon monoxide, radon, volatile organic compounds (VOC), automobile engine exhaust, industrial plant exhaust, asbestos, clay and so on. Harmful substances, to solve the quality of indoor air has become an important thing.\n" +
        "\n" +
        "The bag type, plate type primary and medium-effect filters displayed at ZFT booth can effectively filter all kinds of bacteria and particles. The plate filter adopts the filter media and metal mesh closely bonded to increase the strength of the filter media pleated layer, effectively weakening the filter media pleated layer of jitter, thus reducing the secondary pollution, has been widely used in air conditioning and ventilation filtration system, to provide a core guarantee for indoor air quality.\n" +
        "In the field of industrial manufacturing, medical, semiconductor, food and other industries, clean room ventilation is very critical, ZFT independent research and development of high efficiency filters, high efficiency filters without partitions, liquid tank filters, etc. are widely used in civil and industrial clean place of the end filtration. The products are leak tested one by one according to EN1822 standard and adopt high strength structure design to get lower resistance and longer service life.\n" +
        "ZFT is one of the few filter manufacturers in the industry who owns the raw material research and development and manufacturing. In the existing ventilation system, primary filters usually have high resistance and frequent replacement, resulting in energy waste. zft solves the problem from the source of filters and specially develops a material for bag filters, H.e.L.p.S. H.e.L.p.S material adopts a multi-layer composite process, which has a resistance lower than the industry level by 20% in the case of the same efficiency, prolongs the service life of the product, saves energy and further promotes the path of sustainable development. Further promote the path of sustainable development."
    }
  },
  {
    txt: "Semiconductor \n" +
      "Air Filtration Solutions",
    time: '2023',
    url: '/images/index/new14.webp',
    info: {
      title: "Semiconductor \n" +
        "Air Filtration Solutions",
      urls: [
      ],
      video: '/video/index.mp4',
      txt: "Improve your process yield with complete solutions for advanced semiconductor manufacturing.\n" +
        "ZFT solutions provide field- and lab-proven protection in semiconductor manufacturing environments, including lithography, etch, diffusion, metallization, thin films, ion implantation, inspection tools, and reticle or wafer storage areas.\n" +
        "Air filtration solutions for the semiconductor industry, products include pre-filter, medium-efficiency filter, high-efficiency filter, chemical filter, fan unit."
    }
  },
  {
    txt: "The 133rd Canton Fair,\n Welcome To ZFT",
    time: '2023',
    url: '/images/index/new15.webp',
    info: {
      title: "The 133rd Canton Fair,\n" +
        "Welcome To ZFT",
      urls: [
        {
          path: "/images/index/new13.webp",
          tip: "Vacuum Cleaner Accessories"
        },
        {
          path: "/images/index/new14.webp",
          tip: "Air Purification Filter",
        },
        {
          path: "/images/index/new15.webp",
          tip: "Car Filter",
        },
      ],
      txt: "After three years of the epidemic, facing the spring breeze, the Canton Fair finally ushered in the road of offline restart. The 133rd Canton Fair will be held from April 15th to May 5th in three phases of online and offline integration. This Canton Fair will focus on high-quality development Theme, and for the first time opened the fourth phase of the Canton Fair, with an exhibition scale of 1.5 million square meters, a new high in scale. The exhibited products will include 16 categories, gathering high-quality suppliers from various industries and domestic and foreign buyers.\n" +
        "ZFT is honored to continue to participate in the Canton Fair. This is not only a demonstration of the company’s strength, but also an excellent opportunity to communicate face-to-face with foreign users without going abroad. We will stick to our heart, uphold the customer first, and look forward to meeting friends from all walks of life.\n" +
        "As a senior company in the filtration industry, ZFT will display not only old products such as vacuum cleaner accessories, air purification filters, and car filters, but also new commercial and industrial filtration products at the Canton Fair.\n" +
        "With the acceleration of urbanization, people’s pursuit of quality of life is getting higher and higher. In addition to paying attention to the air quality of residences, people are paying more and more attention to the air quality of public places such as schools, shopping malls, hospitals, airports, and railway stations. Studies have shown that the air in buildings may contain harmful substances such as mold, spores, pollen, carbon monoxide, radon, volatile organic compounds (VOC), bacteria, viruses, asbestos, clay, basic particles, and more.\n" +
        "ZFT’s bag-type primary filter, format primary filter, V-bank filter, medium-efficiency glass fiber filter, and medium-efficiency chemical fiber filter can filter various harmful substances, and provide customized solutions , to provide you with a healthy living environment.\n" +
        "ZFT is one of the few full-link suppliers in the industry from raw materials to devices to solutions. It is one of the leading suppliers of vacuum cleaner accessories in the world and has established long-term cooperative relationships with many Fortune 500 companies."
    }
  },
  {
    txt: "2023 FiltXPO \n" +
      "& 2023 AAPEX \n" +
      "Concluded Successfully",
    time: '2023',
    url: '/images/index/new666.webp',
    info: {
      title: "2023 FiltXPO \n" +
        "& 2023 AAPEX Concluded Successfully",
      urls: [
        {
          path: "/images/index/new16.webp",
          tip: ""
        },
        {
          path: "/images/index/new17.webp",
          tip: "2023 Las Vegas International Auto Parts\n& After-Service ExpO (AAPEX)",
        },
        {
          path: "/images/index/new18.webp",
          tip: "",
        },
        {
          path: "/images/index/new19.webp",
          tip: "",
        },
        {
          path: "/images/index/new20.webp",
          tip: "TOPAS PAF112",
        },
      ],
      txt: "In the season of crisp autumn and fruitful harvests, ZFT has also gained a lot. ZFT participated in two influential exhibitions held in the United States - the 2023 American International Filtration and Separation Technology Equipment Exhibition (FiltXPO) and the 2023 Las Vegas International Auto Parts and After-Service Expo (AAPEX). Both exhibitions are important events in their respective fields, attracting industry elites and experts from around the world.\n" +
        "The American International Filtration and Separation Technology Equipment Exhibition is the only professional filtration and separation exhibition in the United States. The exhibition is hosted by the National Nonwoven Association. As a leading exhibition in the global filtration industry, FiltXPO brings together high-quality filtration products and solutions from all over the world. plan. Kofer Materials, a wholly-owned subsidiary of ZFT , has attracted a large number of visitors’ attention and consultation for its high-performance melt-blown materials, PTFE materials, and fiberglass materials.\n" +
        "PTFE material is a star product of Cofer Company. It is stable and efficient, has low resistance, good discount performance and high temperature resistance. This material is widely used in filter devices such as industrial dust collectors, clean rooms, clean tables, and sterile operating rooms.\n" +
        "Cover’s melt-blown materials feature high porosity, low resistance, high filtration efficiency and advanced post-processing technology. This material has excellent filtration efficiency and dust holding capacity, and can effectively filter particulate matter such as bacteria and viruses in the air. It is widely used in filter components in masks, air purifiers, household and commercial vacuum cleaners and other fields.\n" +
        "\n" +
        "Fiberglass material is another high-performance filter material from Cofer Company, which has the properties of high efficiency, low resistance, high strength, and high waterproofing . This material is widely used in clean rooms, clean benches, industrial filtration, electronics factories, military equipment, medical and health care, scientific research units and other fields.\n" +
        "In addition, Cofer’s absorbent paper has high strength and excellent water absorption properties. Widely used in humidifiers, medical equipment air filters and other fields.\n" +
        " \n" +
        "At the 2023 FiltXPO exhibition, Cofer’s booth attracted the attention of many visitors. The company’s professionals introduced the performance characteristics and application fields of various materials in detail, and demonstrated samples and practical application cases of various materials on site. Visitors and customers expressed their appreciation and recognition for Cofer’s products and services, and expressed their willingness for further cooperation.\n" +
        "AAPEX is hosted by the American Automotive Repair and Service Industry Association, the Automobile and Equipment Manufacturers Association, and the Automobile Parts Association. It is a grand event for the global auto parts industry and showcases the latest auto parts and maintenance technologies.\n" +
        "ZFT displayed cabin filters, air filters, and oil filters at this exhibition, and brought the company’s independently developed filter materials.\n" +
        "“Clean the environment, create a green future, and return water and air to their original clean, pure and fresh state” is ZFT’s consistent pursuit.\n" +
        "In order to protect the interior environment of the car and make driving and riding comfortable, we ensure the quality of the filter by checking every level from R&D to manufacturing.\n" +
        "Each filter is strictly manufactured through more than 20 processes. From the performance comparison test of more than 10 different types of original materials, the most suitable material ratio for the filter is selected, and after different processing, compounding and other processes, it is formed. The main filter material of the filter.\n" +
        "We guarantee product quality and we establish international experimental testing equipment. The T OPAS PAF112 automotive cabin filter testing system was introduced, which can detect n-butane, toluene, sulfur dioxide SO2 and other gases. The products comply with ISO11155-2, DIN71460-2 and GB/T 32085.2 standards.\n" +
        "In the two exhibitions, ZFT conducted in-depth exchanges and cooperation discussions with customers and partners from around the world. Its products and technologies have been widely recognized and praised. In the future, ZFT will continue to be committed to R&D and innovation, provide more high-quality products and services, and promote the development of the global filtration industry.\n"
    }
  },
])
let newBu = ref([])
//轮播图
let isChangeBanner = ref(false)

//底部轮播图切换上一个
let indexWrap = ref(null)
let reachedTopOnce = ref(false); // 标志位

let indexWrapScoll = ref(null)
let banner = ref(null)
let index = ref(0);
let indexWrapZindex = ref('')
let isShow = ref(false)
let zheZhao = ref({})
let isLoaded = ref(false)

// 触摸滑动处理函数
let isMouseDown = ref(false)
let startY = 0;
let endY = 0;

let keyWord = ref('')

let bannerItems = ref([
  {
    bg: 'images/index/banner1.webp',
    title: 'From Media To Products',
    description: `
        We possess the capability to independently develop raw materials and master the core<br>
                              technologies of our products, achieving a seamless transition from media to finished goods.<br> We
                              swiftly and smoothly meet precise technical specifications, <br> comprehensively satisfying the diverse
                              needs of the air filtration market.<br>
        `,
    buttonSrc: 'images/index/benJian.webp',
    zIndex: 30,
    bgAnimation: 'scale 1.5s 0.5s forwards',
    animation: '',
    btnAnimation: 'show 1.5s 1.5s forwards',
    boxAnimation: 'riToLe 1.5s 1.5s forwards',
    url: '/PRODUCTS/FloorCare/Paper'
  },
  {
    bg: 'images/index/banner2.webp',
    title: '100+ R&D',
    description: `
        Our continuous innovation in products and systems,<br> and ongoing technological
                            progress are underpinned by an R&D team of over 100 members,<br> coupled with
                            more than 30 years of accumulated industry experience.<br>
        `,
    buttonSrc: 'images/index/benJian.webp',
    zIndex: 0,
    bgAnimation: '',
    animation: '',
    btnAnimation: '',
    boxAnimation: '',
    url: '/AboutSeinfel/rd/OneStop'
  },
  {
    bg: 'images/index/banner3.webp',
    title: ' TOPAS TESTING',
    description: `
           We have established a comprehensive testing system and <br>a suite of high-standard
                              testing equipment, which not only safeguards Seinfel's <br>technology and products
                              but also assures our customers who choose us.
          `,
    buttonSrc: 'images/index/benJian.webp',
    zIndex: 0,
    bgAnimation: '',
    animation: '',
    btnAnimation: '',
    boxAnimation: '',
    url: '/AboutSeinfel/rd/TestCenter'
  },
  {
    bg: 'images/index/banner4.webp',

    title2: 'SQUARE METER FACTORY',
    description: `
           Globally, we boast over 180,000 square meters of manufacturing facilities, spaces  that<br> enable us
                              to maximize production output and ensure the smooth execution of deliveries.
          `, buttonSrc: 'images/index/benJian.webp',
    zIndex: 0,
    bgAnimation: '',
    animation: '',
    btnAnimation: '',
    boxAnimation: '',
    url: '/AboutSeinfel/Introduction'
  },
  {
    bg: 'images/index/banner5.webp',
    title: ' 30+Years',
    description: `
            Since 1993, we have been a prominent player in the air filtration industry.<br> Opting
                              for us equates to gaining a reliable partner endowed<br> with over 30 years of
                              experience, technology, and production prowess.
          `,
    buttonSrc: 'images/index/benJian.webp',
    zIndex: 0,
    bgAnimation: '',
    animation: '',
    btnAnimation: '',
    boxAnimation: '',
    url: '/AboutSeinfel/Seinfel'
  },
  {
    bg: 'images/index/banner6.webp',
    title: ' Global Presence',
    description: `
              Headquartered in Singapore, with production bases across Cambodia, China, and Malaysia,<br>we
                              have marketing departments in the UK, USA, France, Germany, Japan, Korea, Dubai, India, <br>Malaysia,
                              Vietnam, and other countries, committed to delivering impeccable services to our <br>global clientele.
          `,
    buttonSrc: 'images/index/benJian.webp',
    zIndex: 0,
    bgAnimation: '',
    animation: '',
    btnAnimation: '',
    boxAnimation: '',
    url: '/contact'
  },
])
let bannerItems2 = ref([
  {
    bg: 'images/index/banner1.webp',
    title: 'From Media To Products',
    description: `
        We possess the capability to independently develop raw materials and master the core technologies of our products, achieving a seamless transition from media to finished goods. Weswiftly and smoothly meet precise technical specifications,comprehensively satisfying the diverse needs of the air filtration market.
        `,
    buttonSrc: 'images/index/benJian.webp',
    zIndex: 30,
    bgAnimation: 'scale 1.5s 0.5s forwards',
    animation: '',
    btnAnimation: 'show 1.5s 1.5s forwards',
    boxAnimation: 'riToLe 1.5s 1.5s forwards',
    url: '/PRODUCTS/FloorCare/Paper'
  },
  {
    bg: 'images/index/banner2.webp',
    title: '100+ R&D',
    description: `
        Our continuous innovation in products and systems,and ongoing technological progress are underpinned by an R&D team of over 100 members,coupled with more than 30 years of accumulated industry experience.
        `,
    buttonSrc: 'images/index/benJian.webp',
    zIndex: 0,
    bgAnimation: '',
    animation: '',
    btnAnimation: '',
    boxAnimation: '',
    url: '/AboutSeinfel/rd/OneStop'
  },
  {
    bg: 'images/index/banner3.webp',
    title: ' TOPAS TESTING',
    description: `
           We have established a comprehensive testing system and a suite of high-standard testing equipment, which not only safeguards Seinfel's technology and products but also assures our customers who choose us.
          `,
    buttonSrc: 'images/index/benJian.webp',
    zIndex: 0,
    bgAnimation: '',
    animation: '',
    btnAnimation: '',
    boxAnimation: '',
    url: '/AboutSeinfel/rd/TestCenter'
  },
  {
    bg: 'images/index/banner4.webp',

    title2: 'SQUARE METER FACTORY',
    description: `
           Globally, we boast over 180,000 square meters of manufacturing facilities, spaces  that enable us to maximize production output and ensure the smooth execution of deliveries. `, buttonSrc: 'images/index/benJian.webp',
    zIndex: 0,
    bgAnimation: '',
    animation: '',
    btnAnimation: '',
    boxAnimation: '',
    url: '/AboutSeinfel/Introduction'
  },
  {
    bg: 'images/index/banner5.webp',
    title: ' 30+Years',
    description: `
            Since 1993, we have been a prominent player in the air filtration industry. Opting for us equates to gaining a reliable partner endowed with over 30 years of experience, technology, and production prowess.
          `,
    buttonSrc: 'images/index/benJian.webp',
    zIndex: 0,
    bgAnimation: '',
    animation: '',
    btnAnimation: '',
    boxAnimation: '',
    url: '/AboutSeinfel/Seinfel'
  },
  {
    bg: 'images/index/banner6.webp',
    title: ' Global Presence',
    description: `
              Headquartered in Singapore, with production bases across Cambodia, China, and Malaysia,we have marketing departments in the UK, USA, France, Germany, Japan, Korea, Dubai, India, Malaysia, Vietnam, and other countries, committed to delivering impeccable services to our global clientele.
          `,
    buttonSrc: 'images/index/benJian.webp',
    zIndex: 0,
    bgAnimation: '',
    animation: '',
    btnAnimation: '',
    boxAnimation: '',
    url: '/contact'
  },
])

function showNews(obj) {
  isShow.value = true
  zheZhao.value = obj
}
function handleWheel(event) {
  // deltaY > 0 表示向下滚动, deltaY < 0 表示向上滚动
  if (event.deltaY > 0) {
    changeBanner(1)
  } else {
    changeBanner(0)
  }
}

function goto(url) {
  router.push(url);
}
function changeBanner(status, num) {

  if (isChangeBanner.value) return;
  if (status == 2) {
    index.value = 5
    let nowBnner = indexWrap.value
    nowBnner.style.animation = window.screen.width > 768 ? " BotToHi 2s forwards" : "";
    indexWrapZindex.value = 10
    const nextBanner = bannerItems.value[index.value];
    nextBanner.zIndex = 100;

    nextBanner.animation = window.screen.width > 768 ? "TopTobot 1.5s forwards" : "";

    //收尾
    isChangeBanner.value = true;
    nextBanner.bgAnimation = window.screen.width > 768 ? "scale 2.5s 1.5s forwards" : "";
    nextBanner.btnAnimation = window.screen.width > 768 ? "show 1.5s 2.8s forwards" : "show 1.5s 0.5s forwards";
    nextBanner.boxAnimation = window.screen.width > 768 ? "riToLe 1.5s 2.8s forwards" : "riToLe 1.5s 0.5s forwards";
    setTimeout(() => {
      indexWrapZindex.zIndex = 9
    }, 2000)
    setTimeout(() => {
      isChangeBanner.value = false;

    }, window.screen.width > 768 ? 3500 : 1500);

    return;
  }
  if (index.value < bannerItems.value.length) {

    let nowBnner = bannerItems.value[index.value];

    if (status) {
      index.value = index.value + 1
      nowBnner.animation = window.screen.width > 768 ? "TopToHi 2s forwards" : "";
      nowBnner.zIndex = 10
      let bgs = banner.value.getElementsByClassName('bg')
      if (index.value < bannerItems.value.length - 1) {
        bgs[index.value + 1].src = bannerItems.value[index.value + 1].bg
      }

      if (index.value !== bannerItems.value.length) {
        const nextBanner = bannerItems.value[index.value];
        nextBanner.zIndex = 100;

        nextBanner.animation = window.screen.width > 768 ? "boToTop 1.5s forwards" : "";
        addAnimation(nextBanner, nowBnner);
      } else {
        indexWrapZindex.value = '100'
        indexWrap.value.style.animation = window.screen.width > 768 && !num ? "boToTop 1.5s forwards" : "";
        add()
      }
    } else {
      index.value = index.value - 1
      if (index.value < 0) {
        index.value = 0
        return;
      }
      nowBnner.animation = window.screen.width > 768 ? "BotToHi 2s forwards" : "";
      nowBnner.zIndex = 10
      let bgs = banner.value.getElementsByClassName('bg')
      if (index.value < bannerItems.value.length - 1) {
        bgs[index.value + 1].src = bannerItems.value[index.value + 1].bg
      }

      if (index.value !== bannerItems.value.length) {
        const nextBanner = bannerItems.value[index.value];
        nextBanner.zIndex = 100;

        nextBanner.animation = window.screen.width > 768 ? "TopTobot 1.5s forwards" : "";
        addAnimation(nextBanner, nowBnner);
      } else {
        indexWrapZindex.value = '100'
        indexWrap.value.style.animation = window.screen.width > 768 ? "TopTobot 1.5s forwards" : "";
        add()
      }
    }
  }
}

function addAnimation(nextBanner, nowBnner) {
  isChangeBanner.value = true;
  nextBanner.bgAnimation = window.screen.width > 768 ? "scale 2.5s 1.5s forwards" : "";
  nextBanner.btnAnimation = window.screen.width > 768 ? "show 1.5s 2.8s forwards" : "show 1.5s 0.5s forwards";
  nextBanner.boxAnimation = window.screen.width > 768 ? "riToLe 1.5s 2.8s forwards" : "riToLe 1.5s 0.5s forwards";
  setTimeout(() => {
    nowBnner.zIndex = 9
    nowBnner.bgAnimation = ''
    nowBnner.animation = ''
    nowBnner.btnAnimation = ''
    nowBnner.boxAnimation = ''
  }, 2000)
  setTimeout(() => {
    isChangeBanner.value = false;

  }, window.screen.width > 768 ? 3500 : 1500);
}


// 添加节流函数
function throttlee(fn, wait) {
  let lastTime = 0;
  return function (...args) {
    let now = new Date();
    if (now - lastTime > wait) {
      lastTime = now;
      fn.apply(this, args);
    }
  };
}

function handleTouchStart(event) {
  startY = event.touches[0].clientY;
}

function handleTouchMove(event) {
  endY = event.touches[0].clientY;
}

function handleTouchEnd() {
  if (startY > endY + 30) { // 检测向上滑动
    changeBanner(1, 1);
  }
}


function handleMouseDown(event) {
  isMouseDown = true;
  startY = event.clientY;
}

function handleMouseMove(event) {
  if (isMouseDown) {
    endY = event.clientY;
  }
}

function handleMouseUp() {
  if (isMouseDown && startY > endY + 30) { // 确认这是一个向上滑动
    changeBanner(1);
  }
  isMouseDown = false;
}

function scrollHand() {
  // 检查当前滚动位置并与阈值比较
  const shouldBeHidden = indexWrapScoll.value.scrollTop > 60;
  // if(indexWrapScoll.value.scrollTop <=0){
  //   if(reachedTopOnce.value){
  //     console.log('滑动')
  //     changeBanner(2)
  //     reachedTopOnce.value = false;
  //   }else{
  //     console.log('不滑动')
  //     reachedTopOnce.value = true;
  //   }
  // }

  // 只有当当前可见性状态与应有状态不符时才更新
  if (shouldBeHidden) {
    scrollHandler(1);
  } else if (!shouldBeHidden) {
    scrollHandler(0);
  }
}


//跳过轮播图
function news(num) {
  index.value = 5
  changeBanner(1, 1)
  if (num) {
    const element = document.getElementById('companynews');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // 平滑滚动到目标元素
    }
  }

}



onMounted(() => {
  if (window.screen.width < 768) {
    bannerItems.value = bannerItems2.value
  }
  isLoaded.value = true
  let num = newInfo.value.length % 5
  if (num !== 0) {
    for (let index = 0; index < 5 - num - 1; index++) {
      newBu.value.push({

      })
    }

  }
  if (route.query.new) {
    if (route.query.companynews) {
      news(1)
    } else {
      news()
    }

  }
  banner.value.addEventListener('touchstart', handleTouchStart);
  banner.value.addEventListener('touchmove', handleTouchMove);
  banner.value.addEventListener('touchend', handleTouchEnd);
  banner.value.addEventListener('mousedown', handleMouseDown);
  banner.value.addEventListener('mousemove', handleMouseMove);
  banner.value.addEventListener('mouseup', handleMouseUp);
});

onUnmounted(() => {
  if (banner.value) {
    banner.value.removeEventListener('touchstart', handleTouchStart);
    banner.value.removeEventListener('touchmove', handleTouchMove);
    banner.value.removeEventListener('touchend', handleTouchEnd);
    banner.value.removeEventListener('mousedown', handleMouseDown);
    banner.value.removeEventListener('mousemove', handleMouseMove);
    banner.value.removeEventListener('mouseup', handleMouseUp);
  }
});
</script>

<template>
  <div>
    <one></one>
    <div class="banner" ref="banner">
      <div @wheel="handleWheel" v-for="(item, idx) in bannerItems" :key="idx" :class="['bannerItem']"
        :style="{ zIndex: item.zIndex, animation: item.animation }">
        <img alt="banner" :style="{ animation: item.bgAnimation }" :src="idx === 0 || idx === 1 ? item.bg : ''"
          class="bg">
        <div class="info" v-if="isLoaded">
          <div class="box" :style="{ animation: item.boxAnimation }" :class="[{ 'activeBanner': idx == 3 }]"
            @click="goto(item.url)">
            <h1
              :style="{ margin: idx == 3 ? '0.2rem 0' : '', lineHeight: idx == 3 ? '1' : '1.4rem', paddingRight: counter.isApp ? '0.9rem' : '' }"
              v-if="item.title">
              {{ item.title }}
              <img src="/public/images/index/benJian.webp" alt="" v-if="!counter.isApp">
              <img src="/public/images/index/benJian.webp" alt="" v-else
                style="opacity: 1;width: 0.8rem;height: 0.8rem">
            </h1>
            <h1 :style="{ margin: '0.2rem', 'line-height': 1, paddingRight: counter.isApp ? '0.9rem' : '' }" v-else>
              180,000<br>
              SQUARE METER FACTORY
              <img src="/public/images/index/benJian.webp" alt="" v-if="!counter.isApp" style="top: 75%">
              <img src="/public/images/index/benJian.webp" alt="" v-else
                style="opacity: 1;width: 0.8rem;height: 0.8rem">
            </h1>
            <p :style="{ fontSize: idx == 2 || idx == 4 ? '0.3rem' : '0.25rem', top: idx == 3 ? '2rem' : '' }"
              v-html="item.description">
            </p>
          </div>
        </div>
        <div class="btn" :style="{ animation: item.btnAnimation }" @click="changeBanner(1)">
          <span>0{{ idx + 1 }}</span>
          <img alt="button" :src="item.buttonSrc">
        </div>
      </div>

      <div class="bannerItem products" :style="{ zIndex: indexWrapZindex, cursor: 'default' }" ref="indexWrap">
        <img alt="background image" src="/public/images/index/banner7.webp" class="bg"
          style="object-position:center 80%;object-fit: cover;">
        <section class="wrap" @scroll="scrollHand" id="indexWrap" ref="indexWrapScoll">
          <div class="oneRow">
            <bor class="indexProductsBor" />
            <div class="left">
              <p>
                PRODUCTS
              </p>

            </div>
            <div class="right">
              <searchPro></searchPro>
            </div>
          </div>
          <div class="twoRow">
            <bor class="indeTwoBor" />
            <bor class="indeBor3" />

            <div class="item pro" @click="goto('/PRODUCTS/FloorCare/Paper')">
              <div class="left">
                <p style="margin-bottom: 0.07rem">
                  Floor Care
                </p>
                <img alt="arrows" src="/public/images/jiantou.webp" class="jiantou">
              </div>
              <div class="right">
                <img src="/public/images/index/FloorCare.webp" alt="" style="display: block;width: 100%;height: 100%">
              </div>

            </div>
          </div>
          <div class="threeRow">
            <bor class="indeBor4" />
            <bor class="indeBor5" />

            <div class="left pro" @click="goto('/PRODUCTS/AirPuri/Dust')">
              <img alt="AirPuriﬁcation" src="/public/images/index/AirPuriﬁcation.webp" class="pic">
              <img src="/public/images/index/AirPuriﬁcationZhe.webp" alt="" class="pic zhe">
              <div class="tip">
                <p>Air Puriﬁcation</p>
                <img alt="arrows" src="/public/images/jiantou.webp" class="jiantou">
              </div>
            </div>
            <div class="right pro" @click="goto('/PRODUCTS/Commercial/pre')">
              <div class="tip">
                <p>Commercial & Industrial<br> Air Filtration </p>
                <img alt="arrows" src="/public/images/jiantou.webp" class="jiantou">
              </div>

              <div class="pic">
                <div class="zhezhao"></div>
                <img alt="CommercialIndustrialAirFiltration"
                  src="/public/images/index/CommercialIndustrialAirFiltration.webp">
              </div>

            </div>
          </div>
          <div class="fourRow">
            <bor class="indeBor6" />
            <bor class="indeBor7" />


            <div class="left pro" @click="goto('/PRODUCTS/Automotive/Product')">
              <img alt="CarFiltration" src="/public/images/index/CarFiltration.webp" class="pic">
              <div class="tip">
                <p>Car<br>Filtration</p>
                <img alt="arrows" src="/public/images/jiantou.webp" class="jiantou">
              </div>
            </div>
            <div class="right pro" @click="goto('/PRODUCTS/EcoFriendly/Product')">
              <img alt="EnvironmentallyFriendlyPackaging"
                src="/public/images/index/EnvironmentallyFriendlyPackaging.webp" class="pic">
              <img src="/public/images/index/EnvironmentallyFriendlyPackagingZhe.webp" alt="" class="pic zhe">
              <div class="tip">
                <p>
                  Environmentally<br>
                  <img alt="arrows" src="/public/images/jiantou.webp" class="jiantou"> Friendly
                  <br>Packaging
                </p>
              </div>
            </div>
          </div>

          <article class="companynews" id="companynews">
            <div class="top">
              <div class="left">
                <p>
                  COMPANY<br>
                  NEWS
                </p>
              </div>
              <div class="right">
                <img alt="companynews" src="/public/images/index/companynews.webp">
              </div>
            </div>

            <bor class="indeBor8"></bor>
            <div class="box">
              <div @click="showNews(item.info)" :class="['item', { 'fiveItem': index % 5 === 4 }]"
                v-for="(item, index) in newInfo" :key="index">
                <bor2 class="indeBor9"></bor2>
                <p class="infoo">
                  {{ item.txt }}
                </p>
                <p class="time">
                  {{ item.time }}
                </p>
                <div class="ceng">
                  <img :src="item.url" alt="" class="bgi">
                  <img src="/public/images/index/jiantou2.webp" alt="" class="jian">
                  <img src="/public/images/index/jiantou3.webp" alt="" class="jian2">
                </div>
              </div>
              <div class="item" style="justify-content: center" v-if="newInfo.length % 5 !== 0">
                <bor2 class="indeBor9"></bor2>
                <p>..........</p>
              </div>
              <div :class="['item', { 'fiveItem': index === newBu.length - 1 }]" v-for="(item, index) in newBu"
                :key="index">
                <bor2 class="indeBor9"></bor2>
              </div>
            </div>
          </article>
          <foot></foot>
        </section>
      </div>

    </div>
    <div class="zhezhaoo" v-if="isShow">
      <div class="zheBox">
        <bor class="indexBorZhe"></bor>
        <div class="back" @click="isShow = false">
          <img src="../public/images/index/newJiantou.webp" alt="">
          <p>
            Back
          </p>
        </div>
        <p class="title">
          {{ zheZhao.title }}
        </p>
        <div class="zheWrap">
          <div class="left">
            <video v-if="zheZhao.video" autoplay controls loop width="100%">
              <source :src="zheZhao.video">
            </video>
            <div v-for="(item, index) in zheZhao.urls" :key="index" style="margin-bottom: 0.2rem">
              <img :src="item.path" alt="">
              <p class="newTipp">
                {{ item.tip }}
              </p>
            </div>


          </div>
          <p class="right">
            {{ zheZhao.txt }}
          </p>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.fiveItem .indeBor9 .right {
  display: none !important;
}

.zhezhaoo {
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: rgba(0, 24, 128, 0.5);
  z-index: 1000;
  top: 0;
  left: 0;
  padding: 1rem 0.5rem;
}

.zhezhaoo .zheBox {
  width: 18.2rem;
  height: 8.8rem;
  background: #2546D6;
  border-radius: 0.1rem;
  padding: 0.4rem 0.2rem 0.22rem 0.2rem;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.zhezhaoo .zheBox .back {
  display: flex;
  font-size: 0.35rem;
  align-items: center;
  position: absolute;
  right: 0.18rem;
  top: 0.47rem;
  cursor: pointer;
  font-family: AlibabaPuHuiTi2-45-Light;
}

.zhezhaoo .zheBox .newTipp {
  white-space: pre-wrap;
  text-align: right;
  font-family: AlibabaPuHuiTi2-45-Light;
}

.zhezhaoo .zheBox img {
  width: 0.4rem;
  height: 0.4rem;
  margin-right: 0.1rem;
}

.zhezhaoo .zheBox .title {
  width: 16.2rem;
  margin-left: 0.4rem;
  font-size: 0.5rem;
  font-family: AlibabaPuHuiTi2-45-Light;
  white-space: pre-wrap;
  text-align: start;
}

.zhezhaoo .zheBox .zheWrap {
  margin-top: 0.3rem;
  display: flex;
  width: 100%;
  height: 6.2rem;
  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;
  /* Internet Explorer 10+ */
  overflow-y: scroll;
  padding: 0 0.4rem;
}

.zhezhaoo .zheBox .zheWrap .left {
  width: 7.25rem;
  padding-top: 0.6rem;
}

.zhezhaoo .zheBox .zheWrap .left img,
.zhezhaoo .zheBox .zheWrap .left video {

  width: 100%;
  height: auto;
}

.zhezhaoo .zheBox .zheWrap .right {
  padding-top: 0.6rem;
  width: 8.51rem;
  font-size: 0.25rem;
  font-family: AlibabaPuHuiTi2-45-Light;
  margin-left: 1.1rem;
  white-space: pre-wrap;
  line-height: 0.4rem;
}

.jiantou {
  width: 0.5rem;
  height: 0.41rem;
}

h2 {
  font-size: 0.5rem;
  font-family: AlibabaPuHuiTi2;
  color: white;
  text-align: end;
}

.bannerItem .wrap p {
  font-family: AlibabaPuHuiTi2;
  color: white;
  text-align: end;
  font-size: 0.5rem;
}

.banner {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 200;
  position: relative;
}

.banner .active {
  top: 100%;
  left: 0;
  z-index: 99;
}

.banner .products {
  background: linear-gradient(#0123B5, #001880);

}

.bannerItem {
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  font-family: AlibabaPuHuiTi2;
  cursor: pointer;
  top: 0;
  left: 0;
  transition: 1s;
  background-color: #fff;
}

.bannerItem .bg {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  height: auto;
  object-fit: cover;
  object-position: center;
  /* 确保图片居中显示 */
  min-width: 100%;
  /* 确保宽度至少为容器宽度 */
  min-height: 100%;
  /* 确保高度至少为容器高度 */

  z-index: -1;
}

.bannerItem .btn {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0.3rem;
  opacity: 0;
  width: 0.6rem;
  height: 0.4rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.28rem;
  font-family: AlibabaPuHuiTi2;
  align-items: center;
  color: white;
}

.bannerItem .btn img {
  width: 0.25rem;
  height: 0.25rem;
  margin-left: 0.05rem;
}

.bannerItem .info {
  width: 65%;
  height: 3.33rem;
  color: white;
  position: absolute;
  right: 0;
  top: 43vh;
  font-family: AlibabaPuHuiTi2;
}

.bannerItem .info .box {
  overflow: hidden;
  width: 0;
  /* 初始化宽度 */
  display: flex;
  flex-direction: column;
  align-items: end;
  height: 100%;
  position: absolute;
  right: 0 !important;
  top: 0;
  /* 设置从右边开始 */
  --alpha: 0.5;
  border-left: none;
  /* 移除左边的边框 */
  background-color: rgba(0, 0, 255, 0.5) !important;
  transition: background 1.5s;
}

.bannerItem .info h1,
.bannerItem .info p {
  width: 12.48rem;
  position: absolute;
  right: 0.8rem;
  /* 保持现有的右侧间距 */
}

.bannerItem .info h1 {
  font-size: 0.8rem;
  line-height: 1.45rem;
  display: flex;
  justify-content: right;
  align-items: center;
  position: relative;
  transition: all 0.2s;
  text-align: right;
}

.bannerItem .info h1 img {
  width: 0.6rem;
  height: 0.6rem;
  margin-left: 0.2rem;
  transition: all 0.2s;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;

}

.bannerItem .info:hover h1 {
  padding-right: 0.7rem;
}

.bannerItem .info:hover h1 img {
  opacity: 1;
  transition-delay: 0.2s;
}

.bannerItem .info p {

  font-size: 0.25rem;
  line-height: 0.4rem;
  text-align: right;
  display: block;
  top: 1.35rem;

}

.bannerItem .wrap {

  height: 100%;
  overflow-y: scroll;
  padding-top: 1.13rem;
  position: absolute;
  top: 0;
  left: 0;
  background: none;
}

.bannerItem .wrap .pro {
  cursor: pointer;
}

.bannerItem .wrap .oneRow {
  height: 2.2rem;
  width: 100%;
  position: relative;
  border-top: 1px solid white;
  display: flex;
}

.bannerItem .wrap .oneRow .left {
  width: 7.68rem;
  position: relative;

}

.bannerItem .wrap .oneRow .left p {
  font-family: AlibabaPuHuiTi2-45-Light;
  font-size: 1.05rem;
  line-height: 1.26rem;
  color: white;
  margin: 0.91rem 0 0.1rem 0.8rem;
  text-align: left;
}

.bannerItem .wrap .oneRow .right {
  width: 11.52rem;
  position: relative;
}

.bannerItem .wrap .oneRow .right .search {
  width: 11.21rem;
  height: 0.8rem;
  left: 0.13rem;
  top: 1.02rem;
  position: absolute;
  -webkit-filter: brightness(100%);
  filter: brightness(100%);
}

.bannerItem .wrap .oneRow .right input {
  position: absolute;
  width: 9.8rem;
  height: 0.8rem;
  left: 1.43rem;
  top: 1.02rem;
  border: none;
  outline: none;
  background: none;
  color: white;
  font-size: 0.3rem;
  font-family: AlibabaPuHuiTi2;
  color: white;
}

.bannerItem .wrap .oneRow .right #btn {
  width: 0.5rem;
  height: 0.5rem;
  position: absolute;
  left: 0.42rem;
  top: 1.15rem;
  cursor: pointer;
  opacity: 0;
}

.bannerItem .wrap .twoRow {
  height: 3.1rem;
  position: relative;
}

.bannerItem .wrap .twoRow .bor {
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;

}

.bannerItem .wrap .twoRow .item {
  width: 11.91rem;
  margin: 0.15rem 0 0 4.02rem;
  height: 2.80rem;
  display: flex;
  justify-content: end;
  position: relative;

}

.bannerItem .wrap .twoRow .item .left {
  width: 3.1rem;
  height: 100%;
  color: white;
  text-align: right;
  position: relative;
}


.bannerItem .wrap .twoRow .item .right {
  width: 8.61rem;
  height: 2.80rem;
  display: block;
  position: relative;
  margin-left: 0.2rem;
}

.bannerItem .wrap .twoRow .item .right::before {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 8.61rem;
  height: 2.80rem;
  background-color: rgba(255, 255, 255, 0.5);
  /* 设置灰白蒙版的颜色和透明度 */
  border-radius: 0.15rem;
  transition: opacity 0.3s;
  /* 添加过渡效果 */
}

.bannerItem .wrap .twoRow .item .right:hover::before {
  opacity: 0;
  transition-delay: 0.2s;
}

.bannerItem .wrap .threeRow {
  width: 100%;
  height: 3.1rem;
  margin-top: 0.05rem;
  display: flex;
  justify-content: space-between;
  position: relative;
}

.bannerItem .wrap .threeRow .bor {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.bannerItem .wrap .threeRow .left {
  width: 8.19rem;
  height: 2.80rem;
  display: flex;
  justify-content: center;
  margin-left: 0.1rem;
  position: relative;
}



.bannerItem .wrap .threeRow .left .pic {
  width: 100%;
  height: auto;
  display: block;
  top: 0;
  left: 0;
  position: absolute;
}

.bannerItem .wrap .threeRow .left .zhe {
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s;
}

.bannerItem .wrap .threeRow .left:hover .zhe {
  opacity: 0;
}

.bannerItem .wrap .threeRow .left .tip {
  position: absolute;
  left: 1.05rem;
  bottom: 0rem;
  color: white;
  display: flex;
  align-items: center;
}

.bannerItem .wrap .threeRow .left .tip p {
  margin-right: 0.07rem;
}

.bannerItem .wrap .threeRow .right {
  width: 10.6rem;
  height: 2.8rem;
  display: flex;
  justify-content: end;
  padding: 0 0.15rem;
}

.bannerItem .wrap .threeRow .right .tip {
  text-align: right;
  margin-right: 0.2rem;
  position: relative;
}

.bannerItem .wrap .threeRow .right .tip p {
  font-size: 0.49rem;
  line-height: 0.6rem;
}

.bannerItem .wrap .threeRow .right .pic {
  width: 4.85rem;
  height: auto;
  position: relative;
}

.bannerItem .wrap .threeRow .right .pic .zhezhao {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff;
  opacity: 0.4;
  border-radius: 0.1rem;
  transition: all 0.3s;
}

.bannerItem .wrap .threeRow .right:hover .pic .zhezhao {
  opacity: 0;
}

.bannerItem .wrap .threeRow .right .pic img {
  width: 100%;
  height: 100%;

}

.bannerItem .wrap .fourRow {
  width: 100%;
  height: 3.1rem;

  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 20px;

  margin-top: 0.05rem;
}

.bannerItem .wrap .fourRow .bor {
  width: 99.4%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0.6%;
}

.bannerItem .wrap .fourRow .left {
  width: 8.06rem;
  height: 2.82rem;
  position: relative;
  margin-left: 10.1%;
  display: flex;
}

.bannerItem .wrap .fourRow .left::before {
  content: " ";
  position: absolute;
  top: 0;
  left: 0rem;
  z-index: 1;
  width: 5.25rem;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  /* 设置灰白蒙版的颜色和透明度 */
  border-radius: 0.15rem;
  transition: opacity 0.3s;
  /* 添加过渡效果 */
}

.bannerItem .wrap .fourRow .left:hover::before {
  opacity: 0;
  transition-delay: 0.2s;
}

.bannerItem .wrap .fourRow .left p {
  text-align: left;
  line-height: 0.6rem;
}

.bannerItem .wrap .fourRow .left .jiantou {
  transform: rotateY(180deg);
  /* 水平镜像翻转 */
}

.bannerItem .wrap .fourRow .left .pic {
  width: 5.25rem;
  height: auto;
  display: block;
  margin-right: 0.18rem;
}

.bannerItem .wrap .fourRow .right {
  width: 8.1rem;
  height: 2.8rem;
  position: relative;
  margin-right: 0.5%;
}


.bannerItem .wrap .fourRow .right .pic {
  width: 7.06rem;
  height: auto;
}

.bannerItem .wrap .fourRow .right .zhe {
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.3s;
}

.bannerItem .wrap .fourRow .right:hover .zhe {
  opacity: 0.3;
}

.bannerItem .wrap .fourRow .right .tip {
  position: absolute;
  right: 0.4rem;
  top: -0.05rem;
}

.bannerItem .wrap .fourRow .right .tip p {
  text-align: left;
  font-size: 0.49rem;
  line-height: 0.6rem;
  margin-left: 0.2rem
}

.bannerItem .wrap .fourRow .right .tip .jiantou {
  transform: rotateY(180deg);
  /* 水平镜像翻转 */
}

.bannerItem .companynews {
  width: 100%;
  border-top: 1px solid white;
  margin: 2.67rem 0;
  position: relative;

}

.bannerItem .companynews .top {
  max-width: 100%;
  height: 3.25rem;
  display: flex;
}

.bannerItem .companynews .top .left {
  width: 7.685rem;
  height: 100%;
  padding: 0.15rem;
}

.bannerItem .companynews .top .left p {
  font-family: AlibabaPuHuiTi2-45-Light;
  font-size: 1.05rem;
  line-height: 1.26rem;
  color: white;
  margin: 0.67rem 0 0rem 0.8rem;
  text-align: left;
  line-height: 1;
}

.bannerItem .companynews .top .right {
  width: 11.51rem;
  height: 100%;

  padding: 0.15rem;
}

.bannerItem .companynews .top .right img {
  width: 100%;
  display: block;
  object-fit: cover;
}

.bannerItem .companynews .box {
  width: 100%;
  display: flex;
  flex-wrap: wrap;

}

.bannerItem .companynews .box .item {
  position: relative;
  width: 20%;
  height: 3rem;
  /* 根据需要调整宽高 */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.2rem 0.3rem;
  align-items: center;
  color: white;
  font-family: AlibabaPuHuiTi2-45-Light;
}

.bannerItem .companynews .box .item .infoo {
  text-align: center;
  font-size: 0.25rem;
  width: 3.2rem;
  word-wrap: break-word;
  overflow: hidden;
  padding-top: 0.1rem;
  white-space: pre-wrap;
}

.bannerItem .companynews .box .item .time {
  font-size: 0.16rem;
}

.bannerItem .companynews .box .item .ceng {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 3.4rem;
  opacity: 0;
  height: 2.68rem;
  transition: all 0.3s;
  border-radius: 10px;
  overflow: hidden;
}

.bannerItem .companynews .box .item:hover .ceng {
  opacity: 1;
}

.bannerItem .companynews .box .item .ceng .jian {
  width: 25%;
  height: 25%;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
  /* 确保变换从中心进行 */
}

.bannerItem .companynews .box .item .ceng .jian2 {
  width: 65%;
  height: 70%;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s;
}

.bannerItem .companynews .box .item:hover .ceng .jian {
  transform-origin: center center;
  /* 确保变换从中心进行 */
  animation: scale2 0.5s ease forwards;
}

.bannerItem .companynews .box .item:hover .ceng .jian2 {
  opacity: 0;
}

.bannerItem .companynews .box .item .ceng .bgi {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}



@media (max-width: 768px) {
  .bannerItem .wrap p {
    font-size: 0.4rem !important;
  }

  .bannerItem .wrap .twoRow .item .left .jiantou {
    position: absolute;
    top: 25% !important;
    right: 0.1rem;
  }

  .bannerItem .wrap .threeRow .right .tip .jiantou {
    position: absolute;
    top: 47% !important;
    right: 0.1rem;
  }

  .bannerItem .wrap .fourRow .left .tip .jiantou {
    position: absolute;
    top: 48% !important;
    left: 5.45rem;
  }

  .bannerItem .wrap .threeRow .left .tip {
    left: 1.55rem;
  }

  .bannerItem .wrap .fourRow .right .tip {
    right: 0.95rem;
  }

  .bannerItem .wrap .oneRow .left p {
    font-size: 1.05rem !important;
  }

  .bannerItem .companynews .top .left p {
    font-size: 1.05rem !important;
  }

  .bannerItem .companynews .box .item .infoo {
    font-size: 0.25rem !important;

  }

  .bannerItem .companynews .box .item .time {
    font-size: 0.2rem !important;
  }

  .bannerItem .wrap {
    padding-top: 60px;
  }




  .bannerItem .info {
    width: 100%;
    height: 260px;
    top: 36vh;

  }

  .bannerItem .info,
  box {
    align-items: center;
    justify-content: center;
  }


  .bannerItem .btn {
    width: 35px;
    font-size: 1rem;
    bottom: 1rem;
  }

  .bannerItem .btn img {
    width: 1rem;
    height: 1rem;
    margin-left: 0.2rem;

  }

  .bannerItem .info h1,
  .bannerItem .info p {
    width: 18.48rem;
    left: 50%;
    transform: translateX(-50%);
  }

  .bannerItem .info h1 {
    font-size: 30px;
    line-height: 70px !important;
    text-align: right;
    left: 47%;

  }

  .bannerItem .info p {
    font-size: 15px !important;
    line-height: 25px;
    text-align: right;
    top: 2.8rem !important;
  }

  .bannerItem .activeBanner h1 {
    line-height: 1 !important;
    margin-top: 0.4rem !important;
  }

  .bannerItem .info .activeBanner p {
    top: 3.3rem !important;
  }
}

@media (max-width: 412px) {



  .bannerItem .info h1 {
    font-size: 20px;
    line-height: 30px !important;
    top: 1rem;
  }

  .bannerItem .info p {
    font-size: 12px !important;
    line-height: 20px;
    text-align: right;
    top: 3.5rem !important;
  }

  .bannerItem .activeBanner h1 {
    line-height: 1 !important;
    margin-top: 0.4rem !important;
  }

  .bannerItem .info .activeBanner p {
    top: 4.3rem !important;
  }

}
</style>