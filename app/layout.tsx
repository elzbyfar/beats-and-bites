import type { Metadata } from 'next'
import './globals.css'
import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Beats and Bites',
  description: 'A place to share your favorite recipes and music',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <main className="flex min-h-screen flex-col items-center bg-[#FEF7EA]">
          <div className=' px-8 relative w-full h-36 bg-[#F2CBBF]'>
            <ul className="flex h-full items-center gap-8">
              <li className='bg-[#15433d] cursor-pointer rounded-full w-28 py-4 text-[#f2cbbf] text-center hover:bg-[#fef7ea] hover:text-[#15433d] transition-all duration-200 ease-in-out'>
                <a href="/about">About</a>
              </li>
              <li className='bg-[#15433d] cursor-pointer rounded-full w-28 py-4 text-[#f2cbbf] text-center hover:bg-[#fef7ea] hover:text-[#15433d] transition-all duration-200 ease-in-out'>
                <a href="/recipes">Recipes</a>
              </li>
              <li className='bg-[#15433d] cursor-pointer rounded-full w-28 py-4 text-[#f2cbbf] text-center hover:bg-[#fef7ea] hover:text-[#15433d] transition-all duration-200 ease-in-out'>
                <a href="/playlists">Playlists</a>
              </li>
            </ul>
            <a href='/' className="absolute left-1/2 -translate-x-[50%] top-1/2 -translate-y-[50%] rounded-md text-3xl font-semibold text-[#15433D]">
              Beats + Bites
            </a>
          </div>
          {children}
        </main>
      </body>
    </html>
  )
}
