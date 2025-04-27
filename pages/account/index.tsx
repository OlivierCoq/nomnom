import { useRouter } from 'next/router'

const Account = () => {

  const router = useRouter()

  return (
    <div>
      <h1 className="text-9xl text-red-400">Account</h1>
      <p>Account page</p>
      <button onClick={() => router.push('/home')}>Go to Home</button>
    </div>
  )

}

export default Account