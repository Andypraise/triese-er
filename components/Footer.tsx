import React from 'react'

export default function Footer() {
     const currentYear = new Date().getFullYear()
  return (
    <div>
         {/* Footer */}
      <footer className="bg-dark-brown text-black px-5 md:px-10 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <h2 className="font-heading text-2xl text-brand-yellow">
          Triese Er
        </h2>

        <p className="text-gray-400 text-sm">
          &copy; {currentYear} Triese Er. All Rights Reserved.
        </p>
      </footer>
    </div>
  )
}

 