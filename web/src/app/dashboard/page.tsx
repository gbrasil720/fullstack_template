'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'
import DotPattern from '@/components/magicui/dot-pattern'
import { cn } from '@/lib/utils'
import { LoaderCircle } from 'lucide-react'

export default function ProtectedPage() {
	const { isAuthenticated, loading } = useAuth()
	const router = useRouter()
	const [mounted, setMounted] = useState(false) // Adicionado para verificar se o componente foi montado no cliente

	useEffect(() => {
		setMounted(true) // Marca o componente como montado no cliente
	}, [])

	useEffect(() => {
		if (mounted && !loading && !isAuthenticated) {
			router.push('/auth')
		}
	}, [loading, isAuthenticated, router, mounted])

	if (!mounted || loading) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<LoaderCircle className="size-14 animate-spin" />
			</div>
		)
	}

	return (
		<div>
			{isAuthenticated ? (
				<div className="flex items-center justify-center min-h-screen">
					<div className="bg-zinc-800 p-6 rounded-lg shadow-md z-10 text-center">
						<h1 className="text-3xl font-bold mb-4">Protected route</h1>
						<p>You are authenticated!</p>
					</div>
				</div>
			) : (
				<div className="flex items-center justify-center min-h-screen">
					<div className="bg-zinc-800 p-6 rounded-lg shadow-md z-10 text-center">
						<h1 className="text-3xl font-bold mb-4">Protected route</h1>
						<p>You are not authorized!</p>
					</div>
				</div>
			)}
			<DotPattern
				className={cn(
					'md:[mask-image:radial-gradient(900px_circle_at_center,white,transparent)] overflow-hidden'
				)}
			/>
		</div>
	)
}
