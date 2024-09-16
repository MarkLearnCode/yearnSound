<template>
  <div class="flex flex-col md:flex-row">
    <div class="flex m-auto w-[250px] pb-3 md:w-2/5 md:mr-[3rem] md:ml-10">
      <UCarousel
        v-slot="{ item, index }"
        arrows
        :items="itemImgs"
        :ui="{
          item: 'basis-full',
          container: 'rounded-lg'
        }"
        :prev-button="{
          color: 'gray',
          icon: 'i-heroicons-arrow-left-20-solid',
          class: '-left-12'
        }"
        :next-button="{
          color: 'gray',
          icon: 'i-heroicons-arrow-right-20-solid',
          class: '-right-12'
        }"
      >
        <img :src="item" class="w-full" draggable="false" />
      </UCarousel>
    </div>
    <div class="flex flex-auto flex-col">
      <div class="text-center text-6xl font-bold">{{ title }}</div>
      <div
        ref="myChart"
        class="w-[320px] h-[280px] m-auto mt-5 md:mb-0 md:w-[450px] md:h-[340px]"
      ></div>
      <div class="text-3xl mt-3 md:ml-2 mt-5">{{ interdiction }}</div>
    </div>
  </div>
</template>

<script setup>
// import * as echarts from 'echarts';
import * as echarts from 'echarts/core';
import { RadarChart } from 'echarts/charts';
import { TitleComponent, LegendComponent, TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([RadarChart, TitleComponent, LegendComponent, TooltipComponent, CanvasRenderer]);

const itemImgs = ref([]);
const myChart = ref(null);
const itemsJson = ref(null);
const focusItem = ref(null);
const title = ref('');
const interdiction = ref('');
const radarSeriesData = ref([]);
onMounted(async () => {
  await takeJsonData();
  stuffPhoto();
  const chartDom = myChart.value;
  const chartInstance = echarts.init(chartDom);

  const option = {
    // title: {
    //   text: 'Basic Radar Chart'
    // },
    legend: {
      show: true,
      textStyle: {
        fontSize: 20,
        color: 'white'
      },
      top: 'bottom', // 可以设置为 'top', 'bottom', 'left', 'right'
      left: 'center', // 可以根据需要设置位置
      padding: [0, 0, 0, 0]
    },
    radar: {
      indicator: [
        { name: '高音', max: 100 },
        { name: '暖聲', max: 100 },
        { name: '低音', max: 100 },
        { name: '冷聲', max: 100 },
        { name: '解析', max: 100 }
      ]
    },
    textStyle: {
      fontSize: 20
    },
    series: [
      {
        name: 'Budget vs spending',
        type: 'radar',
        data: [
          {
            value: [50, 50, 50, 50, 50, 50],
            name: 'Actual Spending',
            areaStyle: {}
          },
          {
            value: [70, 22, 66, 68, 66, 70],
            name: 'basic0',
            areaStyle: {}
          },
          {
            value: [70, 92, 66, 78, 66, 70],
            name: 'basic1',
            areaStyle: {}
          },
          {
            value: [10, 22, 66, 78, 66, 70],
            name: 'basic2',
            areaStyle: {}
          },
          {
            value: [70, 22, 16, 78, 66, 50],
            name: 'basic3',
            areaStyle: {}
          }
        ]
      }
    ]
  };
  option.series[0].data = radarSeriesData.value;
  // 設置圖表的選項
  chartInstance.setOption(option);
});
console.log(useRoute().path);
if (useRoute().path === '/product/headphoneCable') {
  console.log(useRoute().path);
}
const stuffPhoto = () => {
  const path = useRoute().path;
  itemImgs.value.push(path + '/1.jpg');
  itemImgs.value.push(path + '/2.jpg');
  itemImgs.value.push(path + '/3.jpg');
};
const takeJsonData = async () => {
  const path = useRoute().path; // 或其他路徑參數
  console.log('path', path);
  const segments = path.split('/').filter((segment) => segment); // 根據 '/' 分割路徑
  console.log('segments', segments);
  let lastSegment = segments.pop(); // 獲取最後一個路徑名稱
  const focusSegments = lastSegment;
  lastSegment = segments.pop();
  console.log(lastSegment);
  const data = await import(`~/assets/json/${lastSegment}.json`);
  itemsJson.value = data.default;
  console.log('items', itemsJson.value);
  const radarData = [];
  let focusRadarData = null;
  itemsJson.value.forEach((e) => {
    const dataType = {
      value: [0, 0, 0, 0, 0],
      name: ''
    };
    // ,      areaStyle: {}
    if (e.name === focusSegments) {
      focusItem.value = e;
      console.log('focusItem', focusItem.value);
      dataType.name = e.name;
      dataType.value[0] = e.treble;
      dataType.value[1] = e.warm;
      dataType.value[2] = e.bass;
      dataType.value[3] = e.cold;
      dataType.value[4] = e.parse;
      focusRadarData = dataType;
      title.value = e.name;
      interdiction.value = e.introduce;
    } else {
      dataType.name = e.name;
      dataType.value[0] = e.treble;
      dataType.value[1] = e.warm;
      dataType.value[2] = e.bass;
      dataType.value[3] = e.cold;
      dataType.value[4] = e.parse;
      radarData.push(dataType);
    }
  });
  radarData.unshift(focusRadarData);
  radarSeriesData.value = radarData;
  console.log('radarData', radarData);
};
</script>

<style scoped>
/* 添加過渡效果 */
div[class*='cursor-pointer'] {
  transition: transform 0.3s ease-in-out;
}

div[class*='cursor-pointer']:hover {
  transform: translateY(-3px);
}
</style>
