import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function AuthCallbackPage() {
  const router = useRouter()

  useEffect(() => {
    const handleOAuthRedirect = async () => {
      const supabase = createClientComponentClient()
      const { error, data } = await supabase.auth.getSession()

      if (error) {
        console.error('OAuth error:', error)
        // router.replace('/auth/auth-code-error')
      } else {
        console.log('OAuth success: ', data)
        const { data: { session }, error } = await supabase.auth.getSession()
        if (error) {
          console.error('Error getting session:', error)
          return
        }
        console.log('Session:', session)
        // start session here using our middleware
        // code is being sent and is at the callback URL
        // router.replace('/') // go to homepage or wherever
      }
    }

    handleOAuthRedirect()
  }, [router])

  return <p className="text-white">Signing you in...</p>
}
