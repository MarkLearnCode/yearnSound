<template>
  <div class="pl-2 pt-2 grid grid-row-3 gap-5">
    <div>
      <div class="text-2xl cursor-pointer" @click="toggleExpand">線材</div>
      <transition-expand>
        <div v-if="isExpanded" class="pl-5 pt-1.5 grid grid-row-3 gap-1">
          <div class="text-2xl cursor-pointer" @click="toRoute('sp')">喇叭線</div>
          <div class="text-2xl cursor-pointer" @click="toRoute('hp')">耳機線</div>
          <div class="text-2xl cursor-pointer" @click="toRoute('sg')">訊號線</div>
        </div>
      </transition-expand>
    </div>
    <div class="text-2xl cursor-pointer">音響架</div>
    <div class="text-2xl cursor-pointer">墊材</div>
  </div>
</template>
<script setup>
// 定義一個變量來追蹤展開狀態
const isExpanded = ref(false);

// 切換展開狀態的函數
const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};
const toRoute = (type) => {
  //   useRouter().push('product/' + type);
  const targetPath = `/product/${type}`;
  if (useRoute().path === targetPath) {
    useRouter().replace(targetPath);
  } else {
    useRouter().push(targetPath);
  }
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
