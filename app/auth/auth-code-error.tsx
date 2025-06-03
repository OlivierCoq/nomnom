import { useRouter } from 'next/router';
import Head from 'next/head';

export default function AuthCodeError() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Authentication Error</title>
      </Head>
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1 className="text-white">Authentication Error</h1>
        <p className="text-white">There was a problem verifying your login code.</p>
        <button
          style={{
            marginTop: '1rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={() => router.push('/login')}
        >
          Try Again
        </button>
      </div>
    </>
  );
}
