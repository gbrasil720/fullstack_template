import Elysia, { t } from 'elysia'

import { sendMessage as sendMessageUseCase } from '../../use-cases/send-message'

export const sendMessage = new Elysia().get(
  '/message',
  ({ query, set }) => {
    try {
      const { message } = query

      set.status = 200

      const useCaseResponse = sendMessageUseCase(
        String(message.split('+').join(' '))
      )

      return {
        message: useCaseResponse.message,
      }
    } catch (err) {
      console.log(err)
    }
  },
  {
    query: t.Object({
      message: t.String(),
    }),
  }
)
