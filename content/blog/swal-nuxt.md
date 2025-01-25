---
title: Building of `nuxt-swal` plugin
description: A package to simulate sweet alert plugin
createdAt: "2025-01-25T17:23:45.548Z"
author: Felix Orinda
thumbnail: https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
toc: true
---

# Nuxt Swal Plugin

> I'll walk you through the usage of [nuxt-swal](https://github.com/forinda/nuxt-swal)

This is one of the most amazing libraries I have found on the web with sweeet alert implmentation.

To get started you need to install the plugin

Using `nuxi`

```sh
npx nuxi module add nuxt-swal
```

Using `npm`

```sh
npm  install nuxt-swal
```

Update your `nuxt.config.js` or `nuxt.config.ts`

```ts
{
    modules: ["nuxt-swal"];
}
```

## Usage

## Composition API

```vue
<template>
    <sw-swal-pop
        :message="message"
        class="p-6 bg-green-400 rounded-xl shadow-md w-full"
        @send-message="sendMessage"
    />
</template>

<script setup lang="ts">
withDefaults(
    defineProps<{
        message?: string;
    }>(),
    {
        message: "Message with Composition API",
    },
);
const app = useNuxtApp();
const sendMessage = (message: string) => {
    app.$swal_mx.fire({
        title: "Message received",
        text: message,
        icon: "success",
    });
    console.log("Received message:", message);
};
</script>

<style lang="scss" scoped></style>
```

## Options API

```vue
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        message: {
            type: String,
            default: "Message with Options API",
            required: false,
        },
    },
    setup() {
        return {};
    },
    data() {
        return {};
    },
    methods: {
        async sendMessage(message: string) {
            const { value } = await this.$swal.fire<{ value: string }>({
                title: "Input email address",
                input: "email",
                inputLabel: "Your email address",
                inputPlaceholder: "Enter your email address",
                position: "center",
                footer: "This is a footer",
                timerProgressBar: true,
                timer: 5000,
                toast: true,
            });
            console.log("Received message:", message, "and email:", value);
        },
    },
});
</script>

<style scoped></style>
```
