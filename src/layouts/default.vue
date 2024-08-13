<template>
  <div class="min-h-screen flex flex-col bg-blue-900/50 md:bg-opacity-50">
    <!-- bg-[url('@images/logo_bg.jpg')] -->
    <!-- Header -->
    <Header class="w-full bg-blue-500 text-white" />
    <!-- Main Content -->
    <div class="flex flex-1">
      <!-- Sidebar -->
      <div class="w-52 text-white p-4">
        <SideBar />
      </div>
      <!-- Page Content -->
      <div class="flex-1 p-6">
        <slot />
      </div>
    </div>
    <!-- Footer -->
    <Footer class="w-full bg-blue-500 text-white p-4 mt-auto" />
  </div>
</template>

<script setup></script>
