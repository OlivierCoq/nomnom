// react
import { use, useEffect } from 'react'
import { useRouter } from 'next/router'
// import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { createClient } from '@/utils/supabase/component'



export default function AuthCallbackPage() {
  const router = useRouter()

useEffect(() => {
  const supabase = createClient()
  supabase.auth.getSession().then(({ data, error }) => {
    if (data.session) {
      router.push('/') // or wherever you want
    } else {
      console.error('Error getting session:', error)
      router.push('/auth/auth-code-error')
    }
  })
}, [])

  return <p className="text-white">Signing you in...</p>
}