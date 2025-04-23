import { useRouter } from 'next/router'

const Home = () => {

  const router = useRouter()

  return (
    <div>
      <h1 className="text-9xl text-red-400">Home</h1>

    </div>
  )

}

export default Home