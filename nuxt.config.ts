// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-10-21",
  app: {
    head: {
      script: [
        {
          innerHTML: `
            const theme = localStorage.getItem('theme') || 'system';
            document.documentElement.dataset.theme = theme;
          `,
          type: "text/javascript",
          tagPriority: 0,
        },
      ],
    },
  }
});
