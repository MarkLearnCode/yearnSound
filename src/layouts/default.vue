<template>
  <div class="min-h-screen flex flex-col bg-blue-700/50 md:bg-opacity-50">
    <!-- bg-[url('@images/logo_bg.jpg')] -->
    <!-- Header -->
    <Header class="w-full bg-blue-500/50 text-white" />
    <!-- Main Content -->
    <div class="flex flex-1">
      <!-- Sidebar -->
      <div class="w-50 text-white p-4">
        <SideBar />
      </div>
      <!-- Page Content -->
      <div class="flex-1 p-6">
        <slot />
      </div>
    </div>
    <!-- Footer -->
    <Footer class="w-full bg-indigo-300/50 text-white p-2 mt-auto" />
  </div>
</template>

<script setup></script>
