import { describe, it, expect } from 'vitest'

describe('send message', () => {
  it('should return a message', async () => {
    const data = await fetch(
      'http://localhost:3333/message?message=hello+world'
    )
    const response = await data.json()

    expect(response).toEqual({ message: 'hello world' })
  })
})
