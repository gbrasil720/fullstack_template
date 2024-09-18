import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { prisma } from '../db/db'
import { env } from '../env'

export async function loginUser(email: string, password: string) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (!user) {
    throw new Error('User not found')
  }

  const isPasswordValid = await bcrypt.compare(password, user.password)
  if (!isPasswordValid) {
    throw new Error('Invalid password')
  }

  const token = jwt.sign({ id: user.id, email: user.email }, env.JWT_SECRET, {
    expiresIn: '1h',
  })

  return token
}
