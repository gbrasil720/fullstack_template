'use client'

import { useAuth } from '@/hooks/useAuth'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormDescription,
	FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'

import DotPattern from '@/components/magicui/dot-pattern'
import { cn } from '@/lib/utils'
import { useAuthForms } from '@/hooks/useAuthForms'
import { Input } from '@/components/ui/input'

export default function AuthPage() {
	const { error, loading } = useAuth()
	const {
		loginForm,
		handleSubmitLoginForm,
		registerForm,
		handleSubmitRegisterForm,
	} = useAuthForms()
	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="bg-zinc-900 p-10 rounded-xl shadow-md w-full max-w-md z-10">
				<Tabs defaultValue="login" className="w-full">
					<TabsList className="grid grid-cols-2 h-12">
						<TabsTrigger value="login" className="text-lg">
							Login
						</TabsTrigger>
						<TabsTrigger value="register" className="text-lg">
							Register
						</TabsTrigger>
					</TabsList>

					<TabsContent value="login">
						<h2 className="text-2xl mb-4">Login</h2>
						{error && <p className="text-red-500 mb-4">{error}</p>}
						<Form {...loginForm}>
							<form
								onSubmit={loginForm.handleSubmit(handleSubmitLoginForm)}
								className="space-y-6"
							>
								<FormField
									control={loginForm.control}
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
									control={loginForm.control}
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

								<Button
									type="submit"
									className="bg-orange-500 text-white py-2 px-4 rounded-lg w-full hover:bg-orange-500/80 transition-all"
									disabled={loading}
								>
									{loading ? 'Loading...' : 'Login'}
								</Button>
							</form>
						</Form>
					</TabsContent>

					<TabsContent value="register">
						<h2 className="text-2xl mb-4">Cadastro</h2>
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
					</TabsContent>
				</Tabs>
			</div>

			<DotPattern
				className={cn(
					'md:[mask-image:radial-gradient(900px_circle_at_center,white,transparent)] overflow-hidden'
				)}
			/>
		</div>
	)
}
