import { useRouter } from 'next/router'
import { useState } from 'react'

import { createClient } from '@/utils/supabase/component'

// Icons
import { FaGoogle, FaApple } from "react-icons/fa";

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
    router.push('/')
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
    router.push('/')
  }

  async function signInWithProvider(provider: 'google' | 'apple') {
    const { error } = await supabase.auth.signInWithOAuth({ provider })
    if (error) {
      console.error(error)
    }
  }

  return (
    <main
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
      }}
    >
      <div className="bg-white/30 backdrop-blur-md rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Welcome to NomNom 🍳</h1>

        {/* SSO Buttons */}
        {/* <div className="flex flex-col gap-4 mb-6">
          <button
            onClick={() => signInWithProvider('google')}
            className="flex items-center justify-center gap-2 bg-white border rounded-lg py-2 text-gray-700 hover:bg-gray-100 transition"
          >
            <FaGoogle className="text-red-500" />
            Continue with Google
          </button>
          <button
            onClick={() => signInWithProvider('apple')}
            className="flex items-center justify-center gap-2 bg-black text-white rounded-lg py-2 hover:bg-gray-900 transition"
          >
            <FaApple />
            Continue with Apple
          </button>
        </div> */}

        {/* Divider */}
        {/* <div className="flex items-center gap-4 mb-6">
          <hr className="flex-grow border-gray-300" />
          <span className="text-zinc-200 text-sm">or continue with email</span>
          <hr className="flex-grow border-gray-300" />
        </div> */}

        {/* Email/Password Form */}
        <form className="flex flex-col gap-4">
          <label htmlFor="email" className="text-zinc-200 font-medium">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="you@example.com"
          />
          <label htmlFor="password" className="text-zinc-200  font-medium">Password</label>
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
