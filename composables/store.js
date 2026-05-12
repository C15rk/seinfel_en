import { ref } from "vue";

export const useNuxtStore = defineStore("nuxtStore", () => {
  let isShowMenu = ref(false);
  let isShowNav = ref(true);
  let routerPath = ref("/");
  let isAdd = ref(false);
  let news = ref(false);
  let isApp = ref(false);
  let list = ref([
    [
      {
        id: 1,
        name: "Introduction",
        showSubmenu: false,
        subcategories: [],
        path: "/AboutSeinfel",
        router: "/AboutSeinfel/Introduction",
        title: ["About", "Seinfel"],
      },
      {
        id: 2,
        name: "Seinfel Development History",
        showSubmenu: false,
        subcategories: [],
        path: "/AboutSeinfel",
        router: "/AboutSeinfel/Seinfel",
      },
      {
        id: 3,
        name: "Manufacturing Capability",
        showSubmenu: false,
        subcategories: [],
        path: "/AboutSeinfel",
        router: "/AboutSeinfel/Manu",
      },
      {
        id: 4,
        name: "R&d Capabilities",
        showSubmenu: false,
        subcategories: [
          { id: 41, name: "One Stop", name2: "Filtration Industry Solution", url: "/AboutSeinfel/rd/OneStop", top: "", Side: "" },
          { id: 42, name: "Test Center", url: "/AboutSeinfel/rd/TestCenter", top: "", Side: "" },
        ],
        path: "/AboutSeinfel",
        router: "/AboutSeinfel/rd",
      },
      // {
      //     id: 5,
      //     name: 'Related Certificates',
      //     showSubmenu: false,
      //     subcategories: [
      //     ],
      //     path: '/AboutSeinfel',
      //     router:'/AboutSeinfel/Related'
      // },
    ],
    [
      {
        id: 1,
        name: `Planning\n& Design`,
        name2: "",
        showSubmenu: false,
        subcategories: [],
        path: "/life",
        router: "/life/Planning",
        title: ["FULL LIFE CYCLE", "SOLUTIONS"],
        leftIndex: "9.24rem",
      },
      {
        id: 2,
        name: `Manufacturing\n& Evaluation`,
        name2: "",
        showSubmenu: false,
        subcategories: [
          { id: 21, name: "overview", name2: "", url: "/life/Manufacturing/overview", top: "", Side: "" },
          { id: 22, name: "Quick Reverse Quality Control", name2: "", url: "/life/Manufacturing/Quick", top: "", Side: "" },
          { id: 23, name: "Incoming Goods", name2: "Inspection Flowchart", url: "/life/Manufacturing/Incoming", top: "", Side: "" },
          { id: 24, name: "Workflow chart", name2: "", url: "/life/Manufacturing/Workflow", top: "", Side: "" },
          { id: 25, name: "Process Inspection Flowchart", name2: "", url: "/life/Manufacturing/Process", top: "", Side: "" },
          { id: 26, name: "Product Recall Management", name2: "", url: "/life/Manufacturing/Product", top: "", Side: "" },
        ],
        path: "/life",
        router: "/life/Manufacturing",
      },
      {
        id: 3,
        name: `Delivery\n& Aftersales`,
        name2: "",
        showSubmenu: false,
        subcategories: [
          { id: 31, name: "Transportation program", name2: "", url: "/life/Delivery/Transportation", top: "", Side: "" },
          { id: 32, name: "Warehousing Program", name2: "", url: "/life/Delivery/Warehousing", top: "", Side: "" },
          { id: 33, name: "Traceability program", name2: "Inspection Flowchart", url: "/life/Delivery/Traceability", top: "", Side: "" },
        ],
        path: "/life",
        router: "/life/Delivery",
      },
    ],
    [
      {
        id: 1,
        name: "Floor\nCare",
        name2: "",
        showSubmenu: false,
        subcategories: [
          { id: 11, name: "Paper Bags", name2: "", url: "/PRODUCTS/FloorCare/Paper", top: "", Side: "" },
          { id: 12, name: "Woven Bags", name2: "", url: "/PRODUCTS/FloorCare/Woven", top: "", Side: "" },
          { id: 13, name: "Sewn Bags", name2: "", url: "/PRODUCTS/FloorCare/Sewn", top: "", Side: "" },
          { id: 14, name: "Filter", name2: "", url: "/PRODUCTS/FloorCare/Filter", top: "", Side: "" },
          { id: 15, name: "Soft Frame Filter", name2: "", url: "/PRODUCTS/FloorCare/Soft", top: "", Side: "" },
          { id: 16, name: "Pre-Filter", name2: "", url: "/PRODUCTS/FloorCare/Pre", top: "", Side: "" },
        ],
        path: "/PRODUCTS",
        router: "/PRODUCTS/FloorCare",
        title: ["PRODUCTS"],
        isShowBack: true,
      },
      {
        id: 2,
        name: `Air\nPuriﬁcation`,
        name2: "",
        showSubmenu: false,
        subcategories: [
          {
            id: 21,
            name: "Dust Removal Filter",
            name2: "",
            url: "/PRODUCTS/AirPuri/Dust",
            top: "",
            Side: [
              { name: "Pre-filter", url: "#Pre" },
              { name: "High Efficiency Filter", url: "#High" },
              { name: "PTFE-Washable Filter", url: "#PTFE" },
            ],
          },
          {
            id: 22,
            name: "Deodorizing Filter",
            name2: "",
            url: "/PRODUCTS/AirPuri/Deodorizing",
            top: "",
            Side: [
              { name: "Catalyst Filter", url: "" },
              { name: "Activated Carbon Filter", url: "" },
            ],
          },
          {
            id: 23,
            name: "Health Function Filter",
            name2: "",
            url: "/PRODUCTS/AirPuri/Health",
            top: "",
            Side: [
              { name: "Antibacterial & Antiviral Coated Filt", url: "" },
              { name: "Odor Purification Composite Filter", url: "" },
            ],
          },
          {
            id: 24,
            name: "Humidification Filter",
            name2: "",
            url: "/PRODUCTS/AirPuri/Humidification",
            top: "",
            Side: [
              { name: "Pre-filter", url: "" },
              { name: "High Efficiency Filter", url: "" },
              { name: "PTFE-Washable Filter", url: "" },
            ],
          },
        ],
        path: "/PRODUCTS",
        router: "/PRODUCTS/AirPuri",
        title: ["PRODUCTS"],
        isShowBack: true,
      },
      {
        id: 3,
        name: `Commercial\n& Industrial Air Filtration `,
        showSubmenu: false,
        subcategories: [
          { id: 31, name: " Pre-Filter", name2: "", url: "/PRODUCTS/Commercial/pre", top: "", Side: ["Pleated        Pre-Filter\n", "Pocket          Pre-Filter"] },
          { id: 32, name: "Medium Efficiency Filter", name2: "", url: "/PRODUCTS/Commercial/Medium", top: "", Side: ["Micro Fiber Glass Pocket Filters", "Chemical Fiber Bag Filter", "V-Bank Filter V"] },
          { id: 33, name: "High Efficiency Filter", name2: "", url: "/PRODUCTS/Commercial/High", top: "", Side: ["Deep Pleated HEPA Filter", "Mini-Pleated HEPA Filter"] },
          { id: 34, name: "FFU Unit", name2: "", url: "/PRODUCTS/Commercial/FFU", top: "", Side: [] },
          { id: 34, name: "HEPA BOX", name2: "", url: "/PRODUCTS/Commercial/HEPA", top: "", Side: [] },
        ],
        path: "/PRODUCTS",
        router: "/PRODUCTS/Commercial",
        title: ["PRODUCTS"],
        isShowBack: true,
      },
      {
        id: 4,
        name: `Eco-Friendly Packaging Bag `,
        showSubmenu: false,
        subcategories: [
          { id: 41, name: "Product Introduction", name2: "", url: "/PRODUCTS/EcoFriendly/Product", top: "", Side: [] },
          { id: 42, name: "Product Category", name2: "", url: "/PRODUCTS/EcoFriendly/ProductCategory", top: "", Side: [] },
          { id: 43, name: "Environmental Protection Certificate", name2: "", url: "/PRODUCTS/EcoFriendly/Environmental", top: "", Side: [] },
          { id: 44, name: "Application", name2: "", url: "/PRODUCTS/EcoFriendly/Application", top: "", Side: [] },
        ],
        path: "/PRODUCTS",
        router: "/PRODUCTS/EcoFriendly",
        title: ["PRODUCTS"],
        isShowBack: true,
      },
      {
        id: 5,
        name: `Automotive Filtration `,
        showSubmenu: false,
        subcategories: [
          {
            id: 51,
            name: "Product Introduction",
            name2: "",
            url: "/PRODUCTS/Automotive/Product",
            top: "",
            Side: [
              { name: "Cabin Filter", url: "" },
              { name: "Air Filter", url: "" },
              { name: "ECO-OIL FILTER", url: "" },
              { name: "Battery Air Filter Element", url: "" },
            ],
          },
          { id: 52, name: "Catalogo Online", name2: "", url: "/PRODUCTS/Automotive/Catalogo", top: "", Side: [] },
        ],
        path: "/PRODUCTS",
        router: "/PRODUCTS/Automotive",
        isShowBack: true,
      },
    ],
  ]);

  let menuList = ref({
    title: [],
    list: [],
    leftIndex: "",
    isShowBack: false,
    tips: [],
  });
  const hiddenMenu = () => {
    isShowMenu.value = false;
  };
  const showMenu = () => {
    isShowMenu.value = true;
  };
  const hiddenNav = () => {
    isShowNav.value = false;
  };
  const showNav = () => {
    isShowNav.value = true;
  };
  let test = (path) => {
    //检测一级路由是否匹配，返回给布局对应的路由数据
    if (path.match(/^\/[^/]+/)) {
      // return  path.match(/(\/[^\/]+){2}/)[0]
      return path.match(/^\/[^/]+/)[0];
    }
  };
  let test2 = (path) => {
    //检测二级路由是否匹配，对应一级选项卡匹配高亮
    if (path.match(/^\/[^/]+/)) {
      if (path.match(/(\/[^\/]+){2}/)) {
        return path.match(/(\/[^\/]+){2}/)[0];
      }
    }
  };
  const changeRouterPath = (path) => {
    let lists = list.value;
    if (path == "/" || path == "/applicationareas" || path == "/contact") {
      return;
    }

    routerPath.value = test2(path);

    for (let item of lists) {
      if (item[0].path === test(path)) {
        menuList.value.list = item;
        menuList.value.title = item[0].title;
        menuList.value.leftIndex = item[0].leftIndex;
        menuList.value.isShowBack = !!item[0].isShowBack;
        menuList.value.tips = [];
        for (const e of item) {
          if (e.router === routerPath.value || e.router.slice(3) === routerPath.value) {
            for (const eElement of e.subcategories) {
              if (eElement.url === path) {
                menuList.value.tips = eElement.Side;
                return;
              }
            }
          }
        }
      }
    }
  };

  let changeApp = (bol) => {
    isApp.value = bol;
  };
  let changeNews = () => {
    news.value = !news.value;
  };
  return {
    isShowMenu,
    isShowNav,
    hiddenNav,
    showNav,
    hiddenMenu,
    showMenu,
    routerPath,
    changeRouterPath,
    list,
    menuList,
    isAdd,
    news,
    changeNews,
    changeApp,
    isApp,
  };
});
