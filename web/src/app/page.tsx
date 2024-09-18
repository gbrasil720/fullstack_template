import { CopyTemplate } from '@/components/copy-template'
import DotPattern from '@/components/magicui/dot-pattern'
import { TechsTabs } from '@/components/techs-tabs'
import { cn } from '@/lib/utils'
import { Layers, Layers3 } from 'lucide-react'

export default function Home() {
	return (
		<div className="flex h-full w-full flex-col items-center overflow-x-hidden justify-center md:shadow-xl text-center max-sm:px-40">
			<Layers className="size-32 text-zinc-200 mt-20 z-10" />
			<div className="text-center mt-10">
				<h1 className="text-6xl z-10">⚡ Fullstack Template</h1>
				<p className="text-zinc-200 text-2xl mb-8 z-10">
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
