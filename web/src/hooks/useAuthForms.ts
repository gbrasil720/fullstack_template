import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useAuth } from './useAuth'

const loginFormSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6),
})

const registerFormSchema = z.object({
	email: z.string().email(),
	password: z.string().min(6),
	confirmPassword: z.string().min(6),
})

export const useAuthForms = () => {
	const { login, register } = useAuth()
	const registerForm = useForm<z.infer<typeof registerFormSchema>>({
		resolver: zodResolver(registerFormSchema),
	})

	const loginForm = useForm<z.infer<typeof loginFormSchema>>({
		resolver: zodResolver(loginFormSchema),
	})

	async function handleSubmitLoginForm(
		values: z.infer<typeof loginFormSchema>
	) {
		await login(values.email, values.password)
	}

	async function handleSubmitRegisterForm(
		values: z.infer<typeof registerFormSchema>
	) {
		await register(values.email, values.password, values.confirmPassword)
	}

	return {
		loginForm,
		handleSubmitLoginForm,
		registerForm,
		handleSubmitRegisterForm,
	}
}
