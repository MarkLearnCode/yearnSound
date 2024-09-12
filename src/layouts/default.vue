<template>
  <div class="min-h-screen flex flex-col bg-blue-700/50 md:bg-opacity-50">
    <!-- bg-[url('@images/logo_bg.jpg')] -->
    <!-- Header -->
    <Header class="w-full bg-blue-500/50 text-white" />
    <!-- Main Content -->
    <div class="flex flex-1">
      <!-- Sidebar -->
       <div class="block md:hidden"><MobileSideBar /></div>
      <div class="hidden md:block w-[108px] text-white p-2 md:p-4 md:w-[200px]">
        <SideBar />
      </div>
      <!-- Page Content -->
      <div class="flex-1 p-4">
        <slot />
      </div>
    </div>
    <!-- Footer -->
    <Footer class="w-full bg-indigo-300/50 text-white p-2 mt-auto" />
  </div>
</template>

<script setup></script>
