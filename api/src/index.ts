import { Elysia } from 'elysia'
import { swagger } from '@elysiajs/swagger'

import { sendMessage } from './http/routes/send-message'
import jwt from '@elysiajs/jwt'
import { cors } from '@elysiajs/cors'
import type { AuthenticatedRequest } from '../types/auth'
import { env } from './env'
import { authRoutes } from './http/routes/auth'

export const app = new Elysia().use(cors()).use(swagger()).use(sendMessage).use(authRoutes)

app.use(jwt({ secret: env.JWT_SECRET }))

app.get(
  '/protected',
  async ({ request }: { request: AuthenticatedRequest }) => {
    return { message: `This is a protected route. Hello ${request.user.email}` }
  }
)

app.listen(3333)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
