'use client'
import Link from "next/link";
export default function Navbar() {
  return (
   <div>
      {/* Navbar */}
      <nav className="bg-red-300 text-black flex justify-between items-center w-full px-5 md:px-10 py-4 fixed top-0 z-50 ">
        <h1 className="font-heading text-2xl md:text-3xl text-brand-yellow">
          Triese Er
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium">
          <Link href="/">HOME</Link>
          <Link href="/menu">MENU</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/contact">CONTACT</Link>
        </div>

        <button className="bg-brand-red text-red px-5 py-2 border  border-black rounded-full font-semibold hover:scale-105 transition cursor-pointer">
          ORDER NOW
        </button>
      </nav>

   </div>
  )
}

