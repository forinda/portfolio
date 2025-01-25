<template>
  <div class="min-h-screen p-6">
    <!-- Header Section -->
    <header class="text-center mb-8">
      <h1 class="text-4xl font-extrabold">Welcome to My Articles</h1>
      <p class="mt-2">Explore the latest articles and stay informed!</p>
    </header>

    <!-- Content Section -->
    <main>
      <!-- Error Message -->
      <div
        v-if="error"
        class="text-center bg-red-100 text-red-700 p-4 rounded-lg"
      >
        <p>An error occurred: {{ error }}</p>
      </div>

      <!-- Loading State -->
      <div
        v-else-if="status === 'pending'"
        class="flex justify-center items-center"
      >
        <div
          class="animate-spin rounded-full h-8 w-8 border-t-4 border-blue-600"
        ></div>
        <p class="ml-3 text-gray-600">Loading...</p>
      </div>

      <!-- Articles List -->
      <div v-else>
        <ul class="gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <li
            v-for="post in data"
            :key="post.id"
            class="shadow-md border rounded-lg hover:shadow-lg transition grid grid-rows-2 h-96"
          >
            <div class="h-full">
              <img
                :src="post.thumbnail"
                :alt="post.title"
                class="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div class="py-4 px-2 h-1/2">
              <h2 class="text-xl font-semibold">
                {{ post.title || "Untitled Article" }}
              </h2>
              <p class="text-gray-600 mt-2">
                {{ post.description || "No description available." }}
              </p>
              <nuxt-link
                :to="post._path"
                class="text-blue-600 hover:underline mt-4 inline-block"
                >Read more</nuxt-link
              >
            </div>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const { data, status, error } = await useAsyncData("home", () =>
  queryContent("/").find(),
);
</script>

<style scoped>
/* Add hover effects and animations */
a {
  transition: color 0.2s ease-in-out;
}
a:hover {
  color: #2563eb; /* Darker blue */
}
</style>
