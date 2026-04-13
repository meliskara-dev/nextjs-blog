import React from 'react'

export default function Hero() {
  return (
    <div className="flex items-center">
      <img src="/shoppingbanner.jpg"
       className="h-44 md:h-96 lg:h-125 w-full object-cover
       blur-xs hover:blur-none hover:brightness-50 opacity-70 hover:opacity-95 transition duration-400" 
       />
    </div>
  )
}
