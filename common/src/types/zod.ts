import { z } from "zod"

export const signUpInput = z.object({
  name: z.string().min(3, { message: "Should be minimum 3 character long"}).max(20, { message: "Should be max 20 character long"}).optional(),
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(6)
})

export const signInInput = z.object({
  email: z.string().email(),
  password: z.string().min(6)
})

export const createBlogInput = z.object({
  authorId: z.string(),
  title: z.string(),
  content: z.string(),
  published: z.boolean().optional()
})

export const updateBlogInput = z.object({
  authorId: z.string(),
  title: z.string(),
  content: z.string(),
})

export type SignUpInputType = z.infer<typeof signUpInput>
export type SignInInputType = z.infer<typeof signInInput>
export type CreateBlogInputType = z.infer<typeof createBlogInput>
export type UpdateBlogInputType = z.infer<typeof updateBlogInput>