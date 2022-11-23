// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Nuxter Product",
      meta: [{ name: "description", content: "Nuxt 3 and Tailwindcss" }],
    },
  },

  runtimeConfig: {
    currencyApiKey: process.env.currency_api_key,
  },
});
