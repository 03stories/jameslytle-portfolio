import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-white border-t border-neutral-200 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-neutral-500 text-sm">
              © {currentYear} James Lytle. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <motion.a 
              href="https://github.com/username" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-700"
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="sr-only">GitHub</span>
              <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
            </motion.a>
            
            <motion.a 
              href="https://linkedin.com/in/username" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-700"
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="sr-only">LinkedIn</span>
              <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
            </motion.a>
            
            <motion.a 
              href="https://twitter.com/username" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-700"
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="sr-only">Twitter</span>
              <FontAwesomeIcon icon={faTwitter} className="h-6 w-6" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer