<script setup>

const colorMode = useColorMode()
const modes = [
  'system',
  'light',
  'dark'
]
const nextModeIcons =/**@type {const} */ ({
  system: '🌞🌜',
  light: '🌞',
  dark: '🌜'
})

const nextMode = computed(() => {
  const currentIndex = modes.indexOf(colorMode.preference)
  let nextIndex = null
  if (currentIndex === modes.length - 1) {
    nextIndex = 0
  } else {
    nextIndex = currentIndex + 1
  }
  return modes[nextIndex]

})
const toggleColorMode = () => {
  colorMode.preference = nextMode.value
}

const nextModeIcon = computed(() => {
  return nextModeIcons[nextMode.value]
})
</script>

<template>
  <div>
    <button @click="toggleColorMode"
    class="hover:bg-gray-100 dark:bg-gray-600 px-2 py-1 text-gray-500"
    >
      {{ nextModeIcon }}
    </button>
  </div>
</template>
