<template>
  <div class="flex">
    <div class="flex w-2/5 mr-[3rem]">
      <UCarousel
        v-slot="{ item, index }"
        arrows
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
      >
        <img :src="item" class="w-full" draggable="false" />
      </UCarousel>
    </div>
    <div class="flex flex-auto flex-col">
      <div class="text-center text-2xl font-bold">產品名</div>
      <div class="text-xl">內文</div>
    </div>
  </div>
</template>

<script setup>
const items = ref([]);
onMounted(() => {
  stuffPhoto();
});
const title = ref('');
const interdiction = ref('');
console.log(45645564456);
console.log(useRoute().path);
if (useRoute().path === '/product/headphoneCable') {
  console.log(useRoute().path);
  console.log(45645564456);
}
const stuffPhoto = () => {
  const path = useRoute().path;
  items.value.push(path + '/1.jpg');
  items.value.push(path + '/2.jpg');
  items.value.push(path + '/3.jpg');
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
