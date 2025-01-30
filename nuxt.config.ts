import type { CookieOptions } from "#app";
const ONE_DAY = 60 * 60 * 24 * 1000;
const ONE_WEEK = ONE_DAY * 7;
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "@nuxt/icon",
    "@nuxtjs/google-fonts",
    "@nuxt/content",
    "@vee-validate/nuxt",
    "nuxt-headlessui",
    "@nuxt/image",
    "nuxt-swal",
  ],
  googleFonts: {
    families: {
      Rubik: [400, 500, 700],
      Roboto: [400, 500, 700],
      "Source Code Pro": [400, 500, 700],
    },
  },
  headlessui: {
    prefix: "hui-",
  },
  colorMode: {
    preference: "light",
    storage: "cookie",
  },
  image: {
    dir: "assets/images",
  },
  experimental: {
    typedPages: true,
  },
  runtimeConfig: {
    cookieName: "__session",
    cookieSecret: "secret",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
      domain: process.env.NUXT_COOKIE_DOMAIN ?? "localhost",
      sameSite: process.env.NUXT_COOKIE_SAMESITE || "strict",
      httpOnly: true,
      maxAge: ONE_DAY.toString(),
      rememberMeExpires: ONE_WEEK.toString(),
    },
    public:{
      API_URL: process.env.NUXT_API_URL ?? "http://localhost:3000/api/v1",
    }
  },
  "vee-validate": {
    autoImports: true,
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      FieldArray: "VeeFieldArray",
      ErrorMessage: "VeeErrorMessage",
    },
  },
  content: {
    markdown: {},
    highlight: { theme: "dark-plus" },
  },
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
      duration: 300,
    },
  },
});
