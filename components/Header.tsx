import React from 'react'
import ThemeButton from "@/components/ThemeButton";
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <div className="items-center text-center bg-white dark:bg-black dark:text-white">
        <a href="" className="text-black hover:text-red-700 font-semibold text-sm
          dark:text-white dark:hover:text-blue-500 line-clamp-1
          ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem voluptatum eius modi quibusdam excepturi temporibus, similique eos nesciunt numquam facere odio tempore odit deleniti asperiores quod delectus quaerat nostrum sint.</a>
      </div>

      <header className="bg-mysecond p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg md:text-xl font-semibold">
            logo
          </div>

          <div className="hidden md:block md:w-1/3 lg:w-1/2 bg-white">
            <input className="w-full focus:ring-4 ring-red-800 pl-2" type="text" />
          </div>

          <div className="text-white flex font-semibold text-lg space-x-3">

            <div>
              login
            </div>
            <ThemeButton />

          </div>

        </div>

      </header>

      <div className="flex items-center p-3 space-x-8 justify-center bg-mythird border-b-2 border-b-cyan-950 shadow-2xl">
        <Link href="/" className='text-white hover:text-black'>Anasayfa</Link>
        <Link href="/about" className='text-white hover:text-black'>About</Link>
        <Link href="/blog" className='text-white hover:text-black'>Blog</Link>
        <Link href="/contact" className='text-white hover:text-black'>Contact</Link>
      </div>
    </>
  )
}
