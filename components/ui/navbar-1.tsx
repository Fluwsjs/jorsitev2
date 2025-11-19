"use client"

import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = [
    { name: "Werkwijze", href: "/#werkwijze" },
    { name: "Diensten", href: "/#diensten" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Tarieven", href: "/#tarieven" },
  ]

  return (
    <div className="flex justify-center w-full py-6 px-4 fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-6 py-3 bg-neutral-dark/95 backdrop-blur-md border border-neutral/20 rounded-full shadow-xl w-full max-w-5xl relative z-10">
        <div className="flex items-center">
          <motion.a
            href="/"
            className="flex items-center space-x-2"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-neutral-dark font-bold text-lg">J</span>
            </div>
            <span className="text-xl font-bold gradient-text hidden sm:inline">JorSite</span>
          </motion.a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <a 
                href={item.href} 
                className="text-sm text-foreground hover:text-primary transition-colors font-medium relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </a>
            </motion.div>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <a
            href="/#contact"
            className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-neutral-dark bg-gradient-to-r from-primary to-accent rounded-full hover:opacity-90 transition-all"
          >
            Contact
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden flex items-center text-foreground" 
          onClick={toggleMenu} 
          whileTap={{ scale: 0.9 }}
        >
          <Menu className="h-6 w-6" />
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-neutral-dark z-50 pt-24 px-6 md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.button
              className="absolute top-6 right-6 p-2 text-foreground"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.button>
            <div className="flex flex-col space-y-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <a 
                    href={item.href} 
                    className="text-lg text-foreground hover:text-primary font-medium transition-colors" 
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </a>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                exit={{ opacity: 0, y: 20 }}
                className="pt-6"
              >
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-semibold text-neutral-dark bg-gradient-to-r from-primary to-accent rounded-full hover:opacity-90 transition-all"
                  onClick={toggleMenu}
                >
                  Contact
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export { Navbar1 }

