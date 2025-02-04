'use server'

import { cookies } from 'next/headers'

type AuthResponse = {
  success: boolean
  message: string
}

export async function signUp(formData: FormData): Promise<AuthResponse> {
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const name = formData.get('name') as string

  // Simulate storing user in database
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Set a cookie to simulate authentication
  cookies().set('auth-token', 'dummy-token', {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7 // 1 week
  })

  return {
    success: true,
    message: 'Account created successfully!'
  }
}

export async function login(formData: FormData): Promise<AuthResponse> {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  // Simulate checking credentials
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Set a cookie to simulate authentication
  cookies().set('auth-token', 'dummy-token', {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7 // 1 week
  })

  return {
    success: true,
    message: 'Logged in successfully!'
  }
}

export async function logout() {
  cookies().delete('auth-token')
}

export async function getAuthStatus() {
  const token = cookies().get('auth-token')
  return !!token
}

