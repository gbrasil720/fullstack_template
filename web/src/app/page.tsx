import { CopyTemplate } from '@/components/copy-template'
import DotPattern from '@/components/magicui/dot-pattern'
import { Navbar } from '@/components/navbar'
import { TechsTabs } from '@/components/techs-tabs'
import { cn } from '@/lib/utils'
import { Layers } from 'lucide-react'

export default function Home() {
	return (
		<div className="flex h-full w-full flex-col items-center overflow-x-hidden justify-center md:shadow-xl text-center max-sm:px-40">
			<Navbar />

			<Layers className="size-32 dark:text-zinc-200 text-zinc-800 mt-20 z-10" />
			<div className="text-center mt-10">
				<h1 className="text-6xl z-10">⚡ Fullstack Template</h1>
				<p className="dark:text-zinc-200 text-zinc-800 text-2xl mb-8 z-10">
					A template build to make the project creation easier (for Bun and
					Next.js)
				</p>
				<CopyTemplate />
			</div>

			<TechsTabs />
			<DotPattern
				className={cn(
					'md:[mask-image:radial-gradient(900px_circle_at_center,white,transparent)] overflow-hidden'
				)}
			/>
		</div>
	)
}
