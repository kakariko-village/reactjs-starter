export const Main: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props

  return (
    <main className="flex min-h-full flex-col bg-blue-100 pt-16 text-black">
      <div className="mx-auto w-screen max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="px-2 py-8 sm:px-6 lg:px-8">{children}</div>
      </div>
    </main>
  )
}
