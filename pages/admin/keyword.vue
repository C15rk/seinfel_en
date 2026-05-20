<script setup>
definePageMeta({
  layout: "back",
  pageTransition: {
    name: 'home'
  }
})
const table= ref([
  {
    "id": 5,
    "keyWord": "pre-filter",
    "count": 3
  }
])
let max=ref({})
const statsDisabled = true
onMounted(  ()=>{
  if (statsDisabled) {
    return
  }
  // get('/getKeyWord')
  //     .then((res) => {
  //       let tableData = res.results;
  //       for (let i = 0; i < tableData.length - 1; i++) {
  //         for (let j = 0; j < tableData.length - 1 - i; j++) {
  //           if (tableData[j].count < tableData[j + 1].count) {
  //             let temp = tableData[j];
  //             tableData[j] = tableData[j + 1];
  //             tableData[j + 1] = temp;
  //           }
  //         }
  //       }
  //       table.value=tableData
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       alert('获取数据失败');
  //     });


})
</script>

<template>
<div class="wrap">
  <p v-if="statsDisabled" class="notice">
    Keyword statistics are temporarily disabled for the Vercel deployment.
  </p>
  <el-table :data="table" border style="width: 100%">
    <el-table-column prop="keyWord" label="关键词"  />
    <el-table-column prop="count" label="统计" />
  </el-table>
</div>
</template>

<style scoped>
.wrap{
  width: 100%;
  height: 100%;
}
.notice{
  margin: 0.2rem;
  color: #666;
}
</style>
