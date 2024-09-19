'use client'

import { ExternalLink } from 'lucide-react'
import { MagicCard } from './magicui/magic-card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'

import { frontendTechs } from '@/utils/frontend-techs'
import { useRouter } from 'next/navigation'
import { backendTechs } from '@/utils/backend-techs'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function TechsTabs() {
	const [hasMounted, setHasMounted] = useState(false)
	const { theme } = useTheme()
	const router = useRouter()

	useEffect(() => {
		setHasMounted(true)
	})

	return (
		<Tabs
			defaultValue="frontend"
			className="w-[46.5rem] max-sm:w-full max-sm:p-8 mt-10 z-10"
		>
			<TabsList className="grid max-sm:absolute max-sm:left-5 max-sm:w-96 grid-cols-2 h-12">
				<TabsTrigger
					value="frontend"
					className="text-xl max-sm:text-base w-full"
				>
					Frontend Technologies
				</TabsTrigger>
				<TabsTrigger
					value="backend"
					className="text-xl max-sm:text-base w-full"
				>
					Backend Technologies
				</TabsTrigger>
			</TabsList>
			<TabsContent value="frontend">
				<div className="grid grid-cols-1 md:grid-cols-3 items-center gap-7 gap-x-64 -ml-40 mt-16">
					{frontendTechs.map((tech) => (
						<MagicCard
							key={tech.title}
							className="cursor-pointer flex-col items-start p-4 justify-between shadow-2xl text-3xl h-52 w-[22rem]"
							onClick={() => router.push(tech.link)}
							gradientColor={theme === 'dark' ? '#262626' : '#D9D9D955'}
						>
							<div className="size-14">
								{theme === 'light' && tech.logoDark && hasMounted ? (
									<tech.logoDark />
								) : (
									<tech.logo />
								)}
							</div>
							<div className="flex items-center gap-3">
								{tech.title}{' '}
								<ExternalLink className="size-4 text-muted-foreground" />
							</div>
							<p className="text-start text-base dark:text-zinc-200 text-zinc-800">
								{tech.description}
							</p>
						</MagicCard>
					))}
				</div>
			</TabsContent>
			<TabsContent value="backend">
				<div className="grid grid-cols-1 md:grid-cols-3 items-center gap-7 gap-x-64 -ml-40 mt-16">
					{backendTechs.map((tech) => (
						<MagicCard
							key={tech.title}
							className="cursor-pointer flex-col items-start p-4 justify-between shadow-2xl text-3xl h-52 w-[22rem]"
							onClick={() => router.push(tech.link)}
							gradientColor={theme === 'dark' ? '#262626' : '#D9D9D955'}
						>
							<div className="size-14">
								{theme === 'light' && tech.logoDark && hasMounted ? (
									<tech.logoDark />
								) : (
									<tech.logo />
								)}
							</div>
							<div className="flex items-center gap-3">
								{tech.title}{' '}
								<ExternalLink className="size-4 text-muted-foreground" />
							</div>
							<p className="text-start text-zinc-800 text-base dark:text-zinc-200">
								{tech.description}
							</p>
						</MagicCard>
					))}
				</div>
			</TabsContent>
		</Tabs>
	)
}
