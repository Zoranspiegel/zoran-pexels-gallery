import { z } from 'zod';

const BaseImagesSchema = z.object({
  page: z.number(),
  per_page: z.number(),
  total_results: z.number(),
  next_page: z.string().url().optional(),
  prev_page: z.string().url().optional()
});

const PhotoSchema = z.object({
  id: z.number(),
  width: z.number(),
  height: z.number(),
  url: z.string().url(),
  photographer: z.string(),
  src: z.object({
    large: z.string().url()
  }),
  alt: z.string()
});

const ImagesSchema = BaseImagesSchema.extend({
  photos: z.array(PhotoSchema)
});

export default ImagesSchema;
