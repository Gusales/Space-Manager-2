import { z } from 'zod'

export const errorSchema = z.object({
  data: z.object({
    mensage: z.string(),
  }),
})

export type ErrorBody = z.infer<typeof errorSchema>
