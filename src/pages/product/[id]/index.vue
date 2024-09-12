<template>
  <div>
    <!-- <div class="flex justify-center">
      <div class="cursor-pointer pr-3 text-3xl font-bold text-indigo-500">初階</div>
      <div class="cursor-pointer pr-3 text-3xl font-bold text-indigo-500">中階</div>
      <div class="cursor-pointer pr-3 text-3xl font-bold text-indigo-500">高階</div>
    </div> -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 pt-5">
      <div v-for="(item, index) in items" :key="index">
        <UCard>
          <template #header>
            <!-- <Placeholder class="h-8" /> -->
            <div class="h-2 m-auto flex justify-center items-center text-3xl font-extrabold">
              {{ item.name }}
            </div>
          </template>
          <div @click="toDetailed(item.name)">
            <img class="m-0 p-0" :src="`${item.imgTop}`" alt="" />
          </div>
          <!-- <Placeholder class="h-26" /> -->

          <template #footer>
            <!-- <Placeholder class="h-8" /> -->
            <div class="grid grid-cols-1">
              <p class="text-xl m-auto">
                {{ item.introduce }}
              </p>
              <p class="text-xl">售價 : {{ item.price }}</p>
            </div>
          </template>
        </UCard>
      </div>
      <!-- <img src="/favicon.ico" alt="" /> -->
      <!-- <img src="/public/hp/ear1/1.jpg" alt="" srcset="" /> -->
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'nuxt/app';

const items = ref();
onMounted(async () => {
  await takeJsonData();
  checkRoute();
});
const title = ref('');
const interdiction = ref('');
console.log(45645564456);
console.log(useRoute().path);

// const productTitle = reactive({
// headphoneCable: '耳機線',
// speakCable: '喇叭線',
// signalCable: '訊號線',
// rack: '音響架',
// shockAbsorber: '墊材'
// });
// const productInterdiction = reactive({
// headphoneCable: '我們的耳機線分為三種不同價位的等級，可以等級需求進行選擇',
// speakCable: '我們的喇叭線分為三種不同價位的等級，可以等級需求進行選擇',
// signalCable: '我們的訊號線分為三種不同價位的等級，可以等級需求進行選擇',
// rack: '音響架',
// shockAbsorber: '墊材'
// });
const productTitle = ref();
const productInterdiction = ref();
const checkRoute = () => {
  if (useRoute().path === '/product/headphoneCable') {
    title.value = productTitle.headphoneCable;
    interdiction.value = productInterdiction.value.headphoneCable;
  }
  if (useRoute().path === '/product/speakCable') {
    title.value = productTitle.speakCable;
    interdiction.value = productInterdiction.value.speakCable;
  }
  if (useRoute().path === '/product/signalCable') {
    title.value = productTitle.signalCable;
    interdiction.value = productInterdiction.value.signalCable;
  }
  if (useRoute().path === '/product/rack') {
    title.value = productTitle.rack;
    interdiction.value = productInterdiction.value.rack;
  }
  if (useRoute().path === '/product/headphoneCable') {
    title.value = productTitle.shockAbsorber;
    interdiction.value = productInterdiction.value.shockAbsorber;
  }
};
const takeJsonData = async () => {
  const path = useRoute().path; // 或其他路徑參數
  console.log('path', path);
  const segments = path.split('/').filter((segment) => segment); // 根據 '/' 分割路徑
  console.log('segments', segments);
  const lastSegment = segments.pop(); // 獲取最後一個路徑名稱
  console.log(lastSegment);
  const data = await import(`~/assets/json/${lastSegment}.json`);
  productTitle.value = await import(`~/assets/json/productTitle.json`);
  productInterdiction.value = await import(`~/assets/json/productInterdiction.json`);
  items.value = data.default;
  console.log('items', items.value);
};
const toDetailed = (itemName) => {
  const path = useRoute().path;
  const url = path + '/' + itemName;
  useRouter().push(url);
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
