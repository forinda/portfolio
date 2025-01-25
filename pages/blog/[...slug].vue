<template>
  <article
    class="prose dark:prose-invert max-w-none"
  >
  <div class="flex gap-4"> 
    <div class="flex gap-4">
      <div class="w-60 border-r flex flex-col sticky top-0 p-2">
        <nuxt-link to="/blog" class="text-blue-600 hover:underline"
          >Back to Blog</nuxt-link
        >
        <div class="w-full">
          <img
            :src="data?.thumbnail"
            :alt="data?.title"
            class="w-full h-full object-contain rounded-xl"
          />
        </div>
        <div>Written by: {{ data?.author }}</div>
        <div>
          Published on: {{ moment(data?.createdAt).format("MMMM DD, YYYY") }}
        </div>
      </div>
      </div>
    <content-doc :value="data!">
      <!-- {{ doc.body.toc.links }} -->
      <template #not-found>
        <div class="flex flex-col justify-center h-screen items-center">
          <div>
            <h1 class="text-9xl">Oops!</h1>
          </div>
          <div>
            <p>404 - PAGE NOT FOUND</p>
            <div>
              <nuxt-link to="/" class="ml-16 bg-green-600 p-3 rounded-md"
                >Home</nuxt-link
              >
            </div>
          </div>
        </div>
      </template>
      <template v-slot="{ doc }">
        <div class="grid grid-cols-6 gap-18 space-x-8">
          <div
            :class="{
              'col-span-6 md:col-span-4': doc.toc,
              'col-span-6': !doc.toc,
            }"
          >
            <content-renderer :value="doc" />
          </div>
          <div class="hidden md:col-span-2 md:block not-prose" v-if="doc.toc">
            <aside class="sticky top-8">
              <div class="font-semibold mb-2">Table Of Contents</div>
              <nav>
                <toc-links :links="doc?.body!.toc!.links" :active-id="activeId!" />
              </nav>
            </aside>
          </div>
        </div>
      </template>
    </content-doc>
  </div>
  </article>
</template>

<script setup lang="ts">
import moment from 'moment';
const {path} = useRoute();
const { data, error } = useAsyncData("page", () =>
  queryContent(path).findOne(),
);
const activeId = ref<string|null>(null);
onMounted(() => {
  const callback = (entries:IntersectionObserverEntry[]) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        activeId.value = entry.target.id;
        break;
      }
    }
  };

  const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.5,
  });
  const elements = document.querySelectorAll("h2, h3");
  for (const element of elements) {
    observer.observe(element);
  }

  onBeforeUnmount(() => {
    for (const element of elements) {
      observer.unobserve(element);
    }
  });
});
</script>
