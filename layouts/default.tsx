export default function Layout({children}: {children: React.ReactNode}) {

  return (
    <div className="flex flex-col w-full h-[100vh] bg-zinc-900 dark:bg-zinc-900">
      <div className="flex flex-col w-full h-full bg-zinc-900 dark:bg-zinc-900">
        <div className="flex flex-col w-full h-full bg-zinc-900 dark:bg-zinc-900">
          {children}
        </div>
      </div>
    </div>
  )
}
