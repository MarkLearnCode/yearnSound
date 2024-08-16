<template>
  <div>
    <div class="flex justify-center">
      <div class="cursor-pointer pr-3 text-3xl font-bold text-indigo-500">初階</div>
      <div class="cursor-pointer pr-3 text-3xl font-bold text-indigo-500">中階</div>
      <div class="cursor-pointer pr-3 text-3xl font-bold text-indigo-500">高階</div>
    </div>
    <div class="grid grid-cols-3 gap-12 pt-5">
      <div>
        <UCard>
          <template #header>
            <Placeholder class="h-8" />
          </template>

          <Placeholder class="h-32" />

          <template #footer>
            <Placeholder class="h-8" />
          </template>
        </UCard>
      </div>
      <div>
        <UCard>
          <template #header>
            <Placeholder class="h-8" />
          </template>

          <Placeholder class="h-32" />

          <template #footer>
            <Placeholder class="h-8" />
          </template>
        </UCard>
      </div>
      <div>
        <UCard>
          <template #header>
            <Placeholder class="h-8" />
          </template>

          <Placeholder class="h-32" />

          <template #footer>
            <Placeholder class="h-8" />
          </template>
        </UCard>
      </div>
    </div>
  </div>
</template>
<script setup>
const items = ref();
onMounted(async () => {
  const path = useRoute().path; // 或其他路徑參數
  console.log('path', path);

  const segments = path.split('/').filter((segment) => segment); // 根據 '/' 分割路徑
  console.log('segments', segments);
  const lastSegment = segments.pop(); // 獲取最後一個路徑名稱
  console.log(lastSegment);
  const data = await import(`~/assets/json/${lastSegment}.json`);
  items.value = data.default;
  console.log(items.value);
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
