import { redirect } from 'next/navigation';

async function Index() {
  // Conditional redirect based on a condition
    redirect('/home');
  

  return (
    <div>
      {/* Component content */}
    </div>
  );
}

export default Index;