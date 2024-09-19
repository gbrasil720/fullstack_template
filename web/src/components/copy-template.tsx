'use client'

import { useClipboard } from '@/hooks/useClipboard'
import { Copy } from 'lucide-react'

export function CopyTemplate() {
	const { onCopy } = useClipboard(
		'git clone https://github.com/gbrasil720/fullstack_template <project_name>'
	)

	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div
			className="flex overflow-x-hidden items-center border-2 rounded-lg p-2 hover:cursor-pointer hover:scale-95 transition-all group max-sm:w-[25rem] max-sm:h-[6rem]"
			onClick={onCopy}
		>
			<div className="flex items-center gap-3 dark:bg-zinc-900 bg-zinc-100 p-3 rounded-lg dark:group-hover:bg-zinc-800 group-hover:bg-zinc-200 transition-all max-sm:w-96 max-sm:h-20">
				<span className="text-orange-500">$</span>
				<code className="max-sm:text-xs">
					git clone https://github.com/gbrasil720/fullstack_template{' '}
					{'<project_name>'}
				</code>
				<Copy />
			</div>
		</div>
	)
}
