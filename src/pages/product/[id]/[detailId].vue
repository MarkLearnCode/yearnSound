<template>
  <div class="grid grid-row-3 gap-0">
    <div class="flex justify-center">
      <div class="cursor-pointer pr-3 text-3xl font-bold text-indigo-500">初階</div>
      <div class="cursor-pointer pr-3 text-3xl font-bold text-indigo-500">中階</div>
      <div class="cursor-pointer pr-3 text-3xl font-bold text-indigo-500">高階</div>
    </div>
    <div>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
    <div class="w-35 ml-10">
      <UCarousel
        v-slot="{ item }"
        :items="items"
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
        arrows
        class="w-64"
      >
        <img :src="item" width="300" height="400" draggable="false" />
      </UCarousel>
    </div>

    <!-- <div>{{ title }}</div>
    <div>{{ interdiction }}</div> -->
  </div>
</template>
<script setup>
const items = ref();
onMounted(() => {
  items.value = [
    'https://picsum.photos/600/800?random=1',
    'https://picsum.photos/600/800?random=2',
    'https://picsum.photos/600/800?random=3',
    'https://picsum.photos/600/800?random=4',
    'https://picsum.photos/600/800?random=5',
    'https://picsum.photos/600/800?random=6'
  ];
});
const title = ref('');
const interdiction = ref('');
console.log(45645564456);
console.log(useRoute().path);
if (useRoute().path === '/product/hp') {
  console.log(useRoute().path);
  console.log(45645564456);

  title.value = '耳機線';
  interdiction.value = '我們的耳機線分為三種不同價位的等級，可以等級需求進行選擇';
}
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
