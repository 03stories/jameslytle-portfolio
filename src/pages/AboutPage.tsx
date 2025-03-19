import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { getAboutContent } from '@/utils/contentLoader'

const AboutPage = () => {
  const aboutContent = getAboutContent()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* About header */}
      <section className="bg-gradient-to-r from-primary-50 to-accent-50 py-12 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-3xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              About Me
            </h1>
            <p className="text-lg text-neutral-700">
              Learn about my background, skills, and approach to product design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Profile section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Profile image & links */}
            <motion.div 
              className="md:col-span-1"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="sticky top-24">
                <div className="bg-white rounded-xl overflow-hidden shadow-workshop border border-neutral-200 mb-6">
                  <img
                    src={aboutContent.image}
                    alt="James Lytle headshot"
                    className="w-full h-auto object-cover"
                  />
                </div>
                
                <div className="bg-white rounded-xl shadow-workshop border border-neutral-200 p-6">
                  <h3 className="font-serif font-bold text-xl mb-4">Connect</h3>
                  
                  <div className="space-y-4">
                    <motion.a 
                      href={aboutContent.resume} 
                      download
                      className="flex items-center font-medium text-primary-600 hover:text-primary-700"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <FontAwesomeIcon icon={faDownload} className="mr-3 w-5" />
                      <span>Download Resume</span>
                    </motion.a>
                    
                    <motion.a 
                      href="mailto:contact@jameslytle.com" 
                      className="flex items-center font-medium text-primary-600 hover:text-primary-700"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <FontAwesomeIcon icon={faEnvelope} className="mr-3 w-5" />
                      <span>Email Me</span>
                    </motion.a>
                    
                    <motion.a 
                      href="https://linkedin.com/in/username" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center font-medium text-primary-600 hover:text-primary-700"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <FontAwesomeIcon icon={faLinkedin} className="mr-3 w-5" />
                      <span>LinkedIn</span>
                    </motion.a>
                    
                    <motion.a 
                      href="https://github.com/username" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center font-medium text-primary-600 hover:text-primary-700"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <FontAwesomeIcon icon={faGithub} className="mr-3 w-5" />
                      <span>GitHub</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Bio content */}
            <motion.div 
              className="md:col-span-2"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown>
                  {aboutContent.content}
                </ReactMarkdown>
              </div>
              
              {/* Skills section */}
              <div className="mt-12 bg-white rounded-xl shadow-workshop border border-neutral-200 p-6">
                <h2 className="font-serif font-bold text-2xl mb-6">Skills & Expertise</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <SkillCategory 
                    title="UX & Product Design" 
                    skills={["User Research", "Information Architecture", "Wireframing", "Prototyping", "Usability Testing"]} 
                  />
                  
                  <SkillCategory 
                    title="Tools & Technologies" 
                    skills={["Figma", "Sketch", "Adobe Creative Suite", "React", "HTML/CSS"]} 
                  />
                  
                  <SkillCategory 
                    title="Data & Analytics" 
                    skills={["Data Visualization", "Dashboard Design", "Analytics Strategy", "A/B Testing"]} 
                  />
                  
                  <SkillCategory 
                    title="Strategy & Leadership" 
                    skills={["Product Strategy", "Design Systems", "Team Leadership", "Stakeholder Management"]} 
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

interface SkillCategoryProps {
  title: string
  skills: string[]
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div>
      <h3 className="font-serif font-bold text-lg mb-3">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <span className="h-2 w-2 bg-primary-600 rounded-full mr-3"></span>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AboutPage