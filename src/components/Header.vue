<template>
  <div class="grid grid-cols-4 gap-0">
    <div>
      <img class="rounded-lg" src="@images/logo.jpg" alt="" width="200" @click="navigation('/')" />
    </div>
    <div
      @click="navigation('/news')"
      class="text-xl md:text-2xl lg:text-4xl m-auto font-extrabold cursor-pointer transition-transform duration-300 md:hover:translate-y-[-5px]"
    >
      最新消息
    </div>
    <div
      @click="navigation('/product')"
      class="text-xl md:text-2xl lg:text-4xl m-auto font-extrabold cursor-pointer transition-transform duration-300 md:hover:translate-y-[-5px]"
    >
      商品介紹
    </div>
    <div
      @click="navigation('/about')"
      class="text-xl md:text-2xl lg:text-4xl m-auto font-extrabold cursor-pointer transition-transform duration-300 md:hover:translate-y-[-5px]"
    >
      關於我們
    </div>
  </div>
</template>
<script setup>
const navigation = (path) => {
  useRouter().push(path);
};
</script>
