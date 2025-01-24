<script setup lang="ts">
type SocialMediaLink = {
  label: string;
  href: string;
  icon: string;
  class?: string;
};
const socialMediaLinks = reactive<SocialMediaLink[]>([
  {
    label: "Twitter",
    href: "https://x.com/felix_orinda",
    icon: "lucide-twitter",
    class: "text-blue-500 hover:text-blue-700",
  },
  {
    label: "GitHub",
    href: "https://github.com/forinda",
    icon: "lucide-github",
    class: "text-gray-800 hover:text-gray-900",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/felixorinda",
    icon: "lucide-linkedin",
    class: "text-blue-700 hover:text-blue-900",
  },
]);
useSeoMeta(
  {
    title: "Main Page",
    description: "Main Page Description",
    ogTitle: "[og:title]",
    ogDescription: "[og:description]",
    ogImage: "[og:image]",
    ogUrl: "[og:url]",
    twitterTitle: "[twitter:title]",
    twitterDescription: "[twitter:description]",
    twitterImage: "[twitter:image]",
    twitterCard: "summary",
  },
  {},
);

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
});
</script>
<template>
  <main class="p-4 font-mono">
    <section class="flex flex-col-reverse md:flex-row md:items-center gap-4">
      <div class="font-mono flex flex-col gap-6 flex-1">
        <h1 class="text-xl font-bold">Hello, I'm Felix orinda</h1>
        <p class="text-5xl md:text-7xl mt-4 capitalize">software Developer</p>
        <small class="ml-4 flex items-center gap-4 italic">
          <icon name="lucide-arrow-right" />
          Based in Nairobi, Kenya
        </small>
        <div class="flex items-center gap-4">
          <a
            v-for="link in socialMediaLinks"
            :href="link.href"
            class="flex items-center gap-2"
            :class="[link.class]"
            target="_blank"
          >
            <icon :name="link.icon" class="h-6 w-6" />
            <span>{{ link.label }}</span>
          </a>
        </div>
      </div>
      <div
        class="flex flex-1 items-center justify-center relative overflow-hidden"
      >
        <span
          class="absolute h-[95%] bg-opacity-45 bg-orange-300 -z-20 rounded-full aspect-square -bottom-20"
        >
        </span>
        <span
          class="absolute h-[80%] bg-green-200 -z-10 rounded-full aspect-square -bottom-10"
        >
        </span>
        <span
          class="absolute h-[70%] bg-blue-200 -z-10 rounded-full aspect-square -bottom-10"
        >
        </span>
        <img
          src="~/assets/images/orinda.png"
          alt="Hero Image"
          class="max-h-[50vh]"
        />
      </div>
    </section>
    <section class="py-10 flex w-full">
      <div class="justify-center items-center">
        <h2 class="text-4xl font-bold mt-10 text-center uppercase underline">
          About Me
        </h2>
        <p class="mt-4 text-center w-full">
          I'm a software developer based in Nairobi, Kenya. I have a passion for
          building software that solves real-world problems. I have experience
          working with JavaScript, TypeScript, Node.js, React, Vue, Docker and
          other technologies.
        </p>
      </div>
    </section>
  </main>
</template>
