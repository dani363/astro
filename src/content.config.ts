import { defineCollection, reference, z } from "astro:content";

const projectCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      cover: image(),
      techs: z.string().array(),
      category: z.array(reference("categoriesProjects")),
      url: z.string().url(),
      author: reference("authors"),
      isRelevant: z.boolean(),
    }),
});

const authorCollection = defineCollection({
  type: "data",
  schema: () =>
    z.object({
      id: z.string(),
      name: z.string(),
    }),
});

const categoryCollection = defineCollection({
  type: "data",
  schema: () =>
    z.object({
      id: z.string(),
      name: z.string(),
    }),
});

const categoryProjectCollection = defineCollection({
  type: "data",
  schema: () =>
    z.object({
      id: z.string(),
      name: z.string(),
      color: z.string(),
    }),
});

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      cover: image(),
      techs: z.string().array(),
      category: reference("categories"),
      url: z.string().url(),
      author: reference("authors"),
    }),
});

export const collections = {
  projects: projectCollection,
  authors: authorCollection,
  categories: categoryCollection,
  blogs: blogCollection,
  categoriesProjects: categoryProjectCollection,
};
