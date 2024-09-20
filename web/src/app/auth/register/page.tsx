'use client'

import DotPattern from '@/components/magicui/dot-pattern'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormDescription,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { useAuth } from '@/hooks/useAuth'
import { useAuthForms } from '@/hooks/useAuthForms'
import { cn } from '@/lib/utils'

export default function RegisterPage() {
	const { error, loading } = useAuth()
	const { registerForm, handleSubmitRegisterForm } = useAuthForms()

	return (
		<>
			<Navbar />
			<div className="flex items-center justify-center mt-28">
				<div className="dark:bg-zinc-900 bg-zinc-100 p-10 rounded-xl shadow-md w-full max-w-md z-10">
					<h2 className="text-2xl mb-4">Register</h2>
					{error && <p className="text-red-500 mb-4">{error}</p>}
					<Form {...registerForm}>
						<form
							onSubmit={registerForm.handleSubmit(handleSubmitRegisterForm)}
							className="space-y-6"
						>
							<FormField
								control={registerForm.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-muted-foreground font-semibold text-base">
											E-mail
										</FormLabel>
										<FormControl>
											<Input
												placeholder="test@example.com"
												className="text-base"
												required
												{...field}
											/>
										</FormControl>
										<FormDescription className="text-base">
											The email address you used to sign up.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={registerForm.control}
								name="password"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-muted-foreground font-semibold text-base">
											Password
										</FormLabel>
										<FormControl>
											<Input
												placeholder="*************"
												required
												className="text-base"
												type="password"
												{...field}
											/>
										</FormControl>
										<FormDescription className="text-base">
											Enter your password.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={registerForm.control}
								name="confirmPassword"
								render={({ field }) => (
									<FormItem>
										<FormLabel className="text-muted-foreground font-semibold text-base">
											Password
										</FormLabel>
										<FormControl>
											<Input
												placeholder="*************"
												required
												className="text-base"
												type="password"
												{...field}
											/>
										</FormControl>
										<FormDescription className="text-base">
											Enter your password again.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>

							<Button
								type="submit"
								className="bg-orange-500 text-white py-2 px-4 rounded-lg w-full hover:bg-orange-500/80 transition-all"
								disabled={loading}
							>
								{loading ? 'Loading...' : 'Register'}
							</Button>
						</form>
					</Form>
				</div>

				<DotPattern
					className={cn(
						'md:[mask-image:radial-gradient(900px_circle_at_center,white,transparent)] overflow-hidden h-[56.3rem]'
					)}
				/>
			</div>
		</>
	)
}
