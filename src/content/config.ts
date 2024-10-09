import { z, defineCollection } from 'astro:content';

const pageCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string()
  }),
});

export const collections = {
  'pages': pageCollection,
};
