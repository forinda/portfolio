<script setup>
useHead({
  script: [{
    // Robo
  }],
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossorigin: 'anonymous'
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap',
      crossorigin: 'anonymous'
    }
  ]
})
</script>

<template>
  <div class="container max-w-2xl mx-auto">
    <header class="flex justify-between items-center mt-5">
      <div>
        <nuxt-link to="/">Felix Orinda</nuxt-link>
      </div>

      <Menu />
      <color-mode-selector />
    </header>
    <main class="mt-10">
      <slot />
    </main>
  </div>
</template>

<style>
body {
  font-family: 'Roboto', sans-serif;

}
body{
  @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300;
}
</style>