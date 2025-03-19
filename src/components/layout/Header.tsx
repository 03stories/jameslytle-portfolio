import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 bg-white/90 backdrop-blur-md z-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="font-serif font-bold text-xl">
              <motion.span 
                className="gradient-text"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                James Lytle
              </motion.span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} end>
              Home
            </NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              Projects
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              About
            </NavLink>
          </nav>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutral-500 hover:text-neutral-700 p-2"
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-white border-b border-neutral-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <div className="pt-2 pb-4 space-y-1 px-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive 
                  ? "block py-2 px-3 text-primary-600 bg-primary-50 rounded-md" 
                  : "block py-2 px-3 text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-md"
              }
              onClick={() => setIsMenuOpen(false)}
              end
            >
              Home
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                isActive 
                  ? "block py-2 px-3 text-primary-600 bg-primary-50 rounded-md" 
                  : "block py-2 px-3 text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-md"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive 
                  ? "block py-2 px-3 text-primary-600 bg-primary-50 rounded-md" 
                  : "block py-2 px-3 text-neutral-700 hover:text-primary-600 hover:bg-primary-50 rounded-md"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
          </div>
        </motion.div>
      )}
    </header>
  )
}

export default Header