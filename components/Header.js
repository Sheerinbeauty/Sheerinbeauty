'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <header className="bg-beige border-b-4 border-gold sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center group">
            <div className="text-2xl font-serif font-bold text-brown">
              Beauty<span className="text-gold"> Sheerin</span>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
            <button onClick={() => scrollToSection('services')} className="nav-link">Hair Services</button>
            <button onClick={() => scrollToSection('laser-skincare')} className="nav-link">Laser & Skincare</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
          </nav>

          <button className="md:hidden text-brown" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col space-y-3">
            <button onClick={() => scrollToSection('home')} className="nav-link block py-2 text-left">Home</button>
            <button onClick={() => scrollToSection('services')} className="nav-link block py-2 text-left">Hair Services</button>
            <button onClick={() => scrollToSection('laser-skincare')} className="nav-link block py-2 text-left">Laser & Skincare</button>
            <button onClick={() => scrollToSection('about')} className="nav-link block py-2 text-left">About</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link block py-2 text-left">Contact</button>
          </nav>
        )}
      </div>
    </header>
  )
}