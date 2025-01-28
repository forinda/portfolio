<template>
  <div class="w-72 h-screen border-r">
    <div class="flex items-center justify-center h-20 bg-gray-800">
      <img
        src="https://avatars.githubusercontent.com/u/55891685?v=4"
        alt=""
        class="w-12 h-12 rounded-full"
      />
    </div>
    <div class="p-4">
      <ul class="space-y-2">
        <li>
          <nuxt-link
            to="/"
            class="block text-gray-800 hover:bg-gray-200 p-2 rounded"
          >
            Home
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/task/#"
            class="block text-gray-800 hover:bg-gray-200 p-2 rounded"
          >
            Dashboard
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            to="/task/#"
            class="block text-gray-800 hover:bg-gray-200 p-2 rounded"
          >
            Create Task
          </nuxt-link>
        </li>
        <li>
          <nuxt-link
            :to="{name:'task-logout'}"
            class="block text-gray-800 hover:bg-gray-200 p-2 rounded"
          >
            Logout
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
