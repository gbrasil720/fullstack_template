import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { request } from 'undici'
import Elysia from 'elysia'
import { authRoutes } from '../src/http/routes/auth'
import { prisma } from '../src/db/db'

let server: Elysia

describe('Auth routes', () => {
  beforeAll(() => {
    server = new Elysia().use(authRoutes).listen(3001)
  })

  afterAll(async () => {
    await prisma.user.delete({
      where: {
        email: 'test@example.com',
      },
    })

    server.stop()
  })

  it('should register a new user', async () => {
    const response = await request('http://localhost:3001/register', {
      method: 'POST',
      body: JSON.stringify({
        email: 'test@example.com',
        password: 'password123',
        confirmPassword: 'password123',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const body = (await response.body.json()) as {
      user: { id: string; email: string }
    }
    expect(response.statusCode).toBe(201)
    expect(body.user).toHaveProperty('id')
    expect(body.user.email).toBe('test@example.com')
  })

  it('should fail to register an existing user', async () => {
    const response = await request('http://localhost:3001/register', {
      method: 'POST',
      body: JSON.stringify({
        email: 'test@example.com',
        password: 'password123',
        confirmPassword: 'password123',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const body = await response.body.json()
    expect(response.statusCode).toBe(400)
    expect(body).toHaveProperty('error', 'User already exists')
  })

  it('should log in an existing user', async () => {
    const response = await request('http://localhost:3001/login', {
      method: 'POST',
      body: JSON.stringify({
        email: 'test@example.com',
        password: 'password123',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const body = await response.body.json()

    expect(response.statusCode).toBe(200)
    expect(body).toHaveProperty('token')
  })

  it('should fail to log in with invalid password', async () => {
    const response = await request('http://localhost:3001/login', {
      method: 'POST',
      body: JSON.stringify({
        email: 'test@example.com',
        password: 'wrongpassword123',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const body = await response.body.json()
    expect(response.statusCode).toBe(400)
    expect(body).toHaveProperty('error')
  })
})
