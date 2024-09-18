import { prisma } from '../db/db'
import bcrypt from 'bcrypt'

export async function registerUser(email: string, password: string) {
  const existingUser = await prisma.user.findUnique({ where: { email } })

  if (existingUser) {
    throw new Error('User already exists')
  }

  const hashedPassword = await bcrypt.hash(password, 10)
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  })

  return user
}
