<template>
  <div class="border-b p-4 w-full">
    <div class="flex items-center justify-between gap-4">
      <button>
        <icon :name="'lucide-menu'" class="h-6 w-6" />
      </button>
      <input
        type="text"
        class="border w-full border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none p-3 rounded-md shadow-sm"
        placeholder="Search for tasks"
      />
      <div class="flex items-center gap-4">
        <button>
          <icon :name="'lucide-bell'" class="h-6 w-6" />
        </button>
        <button>
          <icon :name="'lucide-user'" class="h-6 w-6" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
