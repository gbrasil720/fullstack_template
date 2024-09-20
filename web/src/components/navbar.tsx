'use client'

import { Layers } from 'lucide-react'
import { ThemeSwitcher } from './theme-switcher'
import { useRouter } from 'next/navigation'

export function Navbar() {
	const router = useRouter()

	return (
		<nav className="justify-between container flex items-center p-10">
			{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<div
				className="flex items-center gap-3 text-lg hover:cursor-pointer hover:scale-110 transition-all"
				onClick={() => router.push('/')}
			>
				<Layers />
				<h1>Fullstack Template</h1>
			</div>
			<div>
				<ThemeSwitcher />
			</div>
		</nav>
	)
}
