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
