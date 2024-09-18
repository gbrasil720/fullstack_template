'use client'

import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/navigation'
import axios from 'axios'

interface AuthState {
	token: string | null
	isAuthenticated: boolean
	loading: boolean
	error: string | null
}

export const useAuth = () => {
	const [cookies, setCookie, removeCookie] = useCookies(['token'])
	const [authState, setAuthState] = useState<AuthState>({
		token: cookies.token || null,
		isAuthenticated: !!cookies.token,
		loading: false,
		error: null,
	})
	const router = useRouter()

	const login = async (email: string, password: string) => {
		setAuthState((prevState) => ({ ...prevState, loading: true }))

		try {
			const response = await axios.post('http://localhost:3333/login', {
				email,
				password,
			})
			const token = response.data.token

			setCookie('token', token, { path: '/' })
			setAuthState({
				token,
				isAuthenticated: true,
				loading: false,
				error: null,
			})

			router.push('/dashboard')
		} catch (error: any) {
			setAuthState({
				token: null,
				isAuthenticated: false,
				loading: false,
				error: error.response
					? error.response.data.message
					: 'Erro ao fazer login',
			})
		}
	}

	const register = async (
		email: string,
		password: string,
		confirmPassword: string
	) => {
		setAuthState((prevState) => ({ ...prevState, loading: true }))

		if (password !== confirmPassword) {
			setAuthState({
				token: null,
				isAuthenticated: false,
				loading: false,
				error: 'Senhas não conferem',
			})

			return
		}

		try {
			await axios.post('http://localhost:3333/register', {
				email,
				password,
				confirmPassword,
			})
			setAuthState({
				token: null,
				isAuthenticated: false,
				loading: false,
				error: null,
			})

			router.push('/login')
		} catch (error: any) {
			setAuthState({
				token: null,
				isAuthenticated: false,
				loading: false,
				error: error.response
					? error.response.data.message
					: 'Erro ao cadastrar-se',
			})
		}
	}

	const logout = () => {
		removeCookie('token', { path: '/' })
		setAuthState({
			token: null,
			isAuthenticated: false,
			loading: false,
			error: null,
		})

		router.push('/auth')
	}

	useEffect(() => {
		if (cookies.token) {
			setAuthState((prevState) => ({
				...prevState,
				token: cookies.token,
				isAuthenticated: true,
			}))
		}
	}, [cookies.token])

	return {
		...authState,
		login,
		register,
		logout,
	}
}
