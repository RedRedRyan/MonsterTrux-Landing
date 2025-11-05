"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm z-50 border-b-2 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary"> MONSTER TRUX</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-white hover:text-primary transition font-semibold"
            >
              Hero
            </button>
            <button
              onClick={() => scrollToSection("download")}
              className="text-white hover:text-primary transition font-semibold"
            >
              Download
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-primary transition font-semibold"
            >
              About
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-primary/20">
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left py-2 text-white hover:text-primary transition"
            >
              Hero
            </button>
            <button
              onClick={() => scrollToSection("download")}
              className="block w-full text-left py-2 text-white hover:text-primary transition"
            >
              Download
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 text-white hover:text-primary transition"
            >
              About
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
