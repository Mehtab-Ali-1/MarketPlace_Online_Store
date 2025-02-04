'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'
import Link from 'next/link'
import { login } from '@/app/actions/auth'
import { useState } from 'react'

export default function LoginPage() {
  const router = useRouter()
  const [isPending, setIsPending] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); 
    const formData = new FormData(event.currentTarget);

    setIsPending(true)
    try {
      const response = await login(formData)
      if (response.success) {
        toast.success(response.message)
        router.push('/dashboard')
      } else {
        toast.error(response.message)
      }
    } catch (error) {
      toast.error('Something went wrong')
    } finally {
      setIsPending(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 rounded-2xl">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Welcome back</h2>
          <p className="mt-2 text-gray-600">
            Don`t have an account?{' '}
            <Link href="/signup" className="text-primary hover:border-b border-blue-500 text-blue-500">
              Sign up
            </Link>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">Email address</Label>
              <Input
                className='rounded-full bg-slate-100'
                id="email"
                name="email"
                type="email"
                required
                placeholder="john@example.com"
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                className='rounded-full bg-slate-100'
                id="password"
                name="password"
                type="password"
                required
                placeholder="••••••••"
              />
            </div>
          </div>

          <Button type="submit" className="w-full hover:bg-slate-300 bg-slate-200 rounded-full" disabled={isPending}>
            {isPending ? 'Signing in...' : 'Sign in'}
          </Button>
        </form>
      </div>
    </div>
  )
}