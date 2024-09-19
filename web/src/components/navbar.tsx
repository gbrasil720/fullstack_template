import { Layers } from 'lucide-react'
import { ThemeSwitcher } from './theme-switcher'

export function Navbar() {
	return (
		<nav className="justify-between container flex items-center p-10">
			<div className="flex items-center gap-3 text-lg">
				<Layers />
				<h1>Fullstack Template</h1>
			</div>
			<div>
				<ThemeSwitcher />
			</div>
		</nav>
	)
}
