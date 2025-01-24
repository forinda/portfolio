<script setup>
const colorMode = useColorMode();
const modes = ["system", "light", "dark"];
const isDarkMode = ref(false);
const isDark = computed(() => colorMode.preference === "dark");
const colorModeIcon = computed(() => (isDark.value ? "🌜" : "🌞"));
watch(isDarkMode, (value) => {
  colorMode.preference = value ? "dark" : "light";
});
</script>

<template>
  <div>
    <hui-switch
      v-model="isDarkMode"
      aria-label="Toggle color mode"
      :class="isDarkMode ? 'bg-gray-200' : 'bg-gray-500'"
      class="relative inline-flex h-6 w-11 items-center rounded-full"
    >
      <span class="sr-only">Toggle color mode</span>
      <span
        :class="isDark ? 'translate-x-6' : 'translate-x-1'"
        class="inline-flex items-center justify-center h-5 w-5 transform rounded-full dark:bg-black shadow-lg transition"
      >
        {{ colorModeIcon }}
      </span>
    </hui-switch>
  </div>
</template>
