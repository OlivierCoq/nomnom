import { useRouter } from 'next/router'
import { useState } from 'react'

import { createClient } from '@/utils/supabase/component'

export default function LoginPage() {
  const router = useRouter()
  const supabase = createClient()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  async function logIn() {
    setLoading(true)
    setErrorMessage('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setLoading(false)
    if (error) {
      setErrorMessage(error.message)
      return
    }
    router.push('/home')
  }

  async function signUp() {
    setLoading(true)
    setErrorMessage('')
    const { error } = await supabase.auth.signUp({ email, password })
    setLoading(false)
    if (error) {
      setErrorMessage(error.message)
      return
    }
    router.push('/home')
  }

  return (
    <main className="min-h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')" }}>
      <div className="bg-white/30 backdrop-blur-md rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Welcome to NomNom 🍳</h1>
        <form className="flex flex-col gap-4">
          <label htmlFor="email" className="text-gray-700 font-medium">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="you@example.com"
          />
          <label htmlFor="password" className="text-gray-700 font-medium">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="••••••••"
          />
          {errorMessage && <p className="text-red-600 text-sm text-center">{errorMessage}</p>}
          <button
            type="button"
            onClick={logIn}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Log In'}
          </button>
          <button
            type="button"
            onClick={signUp}
            className="border border-orange-500 text-orange-500 hover:bg-orange-100 font-semibold py-2 rounded-lg transition"
            disabled={loading}
          >
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </main>
  )
}
