<script setup lang="ts">
import moment from "moment";

const { path } = useRoute();

const { data, error } = useAsyncData("page", () =>
  queryContent(path).findOne(),
);
</script>
<template>
  <article class="prose dark:prose-invert !max-w-none">
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
      <div>
        <ContentRenderer :value="data!">
          <template #empty>
            <p>No content found.</p>
          </template>
        </ContentRenderer>
      </div>
    </div>
  </article>
</template>
