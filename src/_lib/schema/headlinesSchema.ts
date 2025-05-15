import { z } from "zod";

export const headlinesSchema = z.object({
  status: z.string().nullable(),
  totalResults: z.number().nullable(),
  articles: z
    .array(
      z.object({
        source: z
          .object({
            id: z.string().nullable(),
            name: z.string().nullable(),
          })
          .nullable(),
        author: z.string().nullable(),
        title: z.string().nullable(),
        description: z.string().nullable(),
        url: z.string(),
        urlToImage: z.string().nullable(),
        publishedAt: z.string(),
        content: z.string().nullable(),
      })
    )
});
