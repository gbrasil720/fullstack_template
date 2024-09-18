import { Elysia } from 'elysia'
import { z } from 'zod'

import { loginUser } from '../../use-cases/loginUser'
import { loginSchema, registerSchema } from '../../lib/schemas'
import { registerUser } from '../../use-cases/registerUser'

export const authRoutes = new Elysia()
  .post('/login', async ({ request, set }) => {
    try {
      const body = await request.json()

      const { email, password } = loginSchema.parse(body)

      const token = await loginUser(email, password)

      return { token }
    } catch (error) {
      set.status = 400
      if (error instanceof z.ZodError) {
        return {
          message: 'Validation failed',
          errors: error.errors,
        }
      }

      return { error }
    }
  })
  .post('/register', async ({ request, set }) => {
    try {
      const body = await request.json()

      const { email, password } = registerSchema.parse(body)

      const user = await registerUser(email, password)

      set.status = 201

      return { user }
    } catch (error) {
      set.status = 400
      if (error instanceof z.ZodError) {
        return {
          message: 'Validation failed',
          error: error.errors,
        }
      }

      return { error: 'User already exists' }
    }
  })
