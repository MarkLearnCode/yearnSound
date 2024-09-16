<template>
  <div>
    <!-- Menu Button (Hamburger / X) -->
    <button class="fixed top-14 left-2 z-50 p-2 focus:outline-none" @click="toggleMenu">
      <div class="w-5 h-4 relative">
        <span
          :class="[
            'block absolute w-full h-0.5 bg-white transition-all duration-300',
            isMenuOpen ? 'rotate-45 top-1/2' : 'top-0'
          ]"
        ></span>
        <span
          :class="[
            'block absolute w-full h-0.5 bg-white transition-all duration-300',
            isMenuOpen ? 'opacity-0' : 'top-1/2 transform -translate-y-1/2'
          ]"
        ></span>
        <span
          :class="[
            'block absolute w-full h-0.5 bg-white transition-all duration-300',
            isMenuOpen ? '-rotate-45 top-1/2' : 'bottom-0'
          ]"
        ></span>
      </div>
    </button>

    <!-- Sidebar -->
    <div
      :class="[
        'top-14 fixed top-0 left-0 h-full bg-gray-800 text-white z-40 p-4 transition-transform duration-500',
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      ]"
      style="width: 25%"
    >
      <ul class="pt-5">
        <li class="mb-2 cursor-pointer" @click="navigate('speakCable')">喇叭線</li>
        <li class="mb-2 cursor-pointer" @click="navigate('headphoneCable')">耳機線</li>
        <li class="mb-2 cursor-pointer" @click="navigate('signalCable')">訊號線</li>
        <li class="mb-2 cursor-pointer" @click="navigate('rack')">音響架</li>
        <li class="mb-2 cursor-pointer" @click="navigate('shockAbsorber')">墊材</li>
      </ul>
    </div>

    <!-- Background overlay when menu is open -->
    <div v-if="isMenuOpen" class="fixed inset-0 bg-black opacity-50 z-30" @click="toggleMenu"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const navigate = (option) => {
  console.log(`Navigating to ${option}`);
  const targetPath = `/product/${option}`;
  if (useRoute().path === targetPath) {
    useRouter().replace(targetPath);
  } else {
    useRouter().push(targetPath);
  }
  toggleMenu();
};
</script>
