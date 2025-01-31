<script setup lang="ts">
type MenuLinkItem = {
  label: string;
  href: string;
  isEnabled?: boolean;
  icon: string;
};
const menuItems = reactive<MenuLinkItem[]>([
  {
    href: "/",
    isEnabled: true,
    label: "Home",
    icon: "lucide-home",
  },
  {
    href: "/task",
    isEnabled: true,
    label: "Tasks",
    icon: "lucide-info",
  },
  {
    href: "/blog",
    isEnabled: true,
    label: "Blogs",
    icon: "lucide-square-library",
  },
  {
    href: "/projects",
    isEnabled: true,
    label: "Projects",
    icon: "lucide-square-code",
  },
  {
    href: "/#",
    isEnabled: false,
    label: "Contact",
    icon: "lucide-contact",
  },
]);
</script>

<template>
  <nav class="flex items-center">
    <!-- Mobile -->
    <div
      class="flex items-center justify-between w-full lg:hidden p-4 sticky top-0 z-10"
    >
      <nuxt-link to="/">
        <span class="text-xl font-bold">@forinda</span>
      </nuxt-link>
      <div class="flex items-center flex-row-reverse gap-2">
        <hui-menu>
          <hui-menu-button>
            <icon name="lucide-align-justify" class="h-6 w-6" />
          </hui-menu-button>
          <hui-menu-items
            class="absolute top-16 right-0 flex flex-col shadow-md rounded-md border border-gray-200 min-w-60"
          >
            <hui-menu-item
              v-slot="{ active }"
              v-for="item in menuItems"
              :key="item.label"
            >
              <nuxt-link
							:class="{
                  'bg-blue-500 text-white': active,
                  'opacity-50': !item.isEnabled,
                }"
                class="flex items-center gap-2 p-3 dark:text-gray-100"
                :href="item.href"
                :disabled="!item.isEnabled"
              >
                <icon :name="item.icon" class="h-6 w-6" />
                {{ item.label }}
              </nuxt-link>
            </hui-menu-item>
          </hui-menu-items>
        </hui-menu>
        <color-mode-selector></color-mode-selector>
      </div>
    </div>

    <!-- Tablet and Desktop -->
    <div
      class="hidden lg:flex items-center border-b-[.4px] justify-between w-full p-4 sticky top-0 z-10"
    >
      <!-- Brand -->
      <nuxt-link to="/">
        <span class="text-xl font-bold">Felix Orinda</span>
      </nuxt-link>

      <!-- Menu Items -->
      <ul class="flex items-center gap-6">
        <li
          v-for="item in menuItems"
          :key="item.label"
          :class="{
            'opacity-50 cursor-not-allowed': !item.isEnabled,
          }"
        >
          <nuxt-link
            class="flex items-center gap-2 text-gray-800 hover:text-blue-500 dark:text-gray-100"
            :href="item.href"
            :disabled="!item.isEnabled"
          >
            <!--            <icon :name="item.icon" class="h-6 w-6" />-->
            <span>{{ item.label }}</span>
          </nuxt-link>
        </li>
      </ul>

      <!-- Additional Features -->
      <div class="flex items-center gap-4">
        <color-mode-selector />
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* For disabled links */
.cursor-not-allowed {
  pointer-events: none;
}
</style>
