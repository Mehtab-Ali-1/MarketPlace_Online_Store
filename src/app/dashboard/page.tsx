'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { logout } from '@/app/actions/auth'
import { toast } from 'sonner'

export default function DashboardPage() {
  const router = useRouter()

  const handleLogout = async () => {
    await logout()
    toast.success('Logged out successfully')
    router.push('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <Button onClick={handleLogout} variant="outline">
              Logout
            </Button>
          </div>
          <p className="text-gray-600">
            Welcome to your dashboard! You are now signed in.
          </p>
        </div>
      </div>
    </div>
  )
}

