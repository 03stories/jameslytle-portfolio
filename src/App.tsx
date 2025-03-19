import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from '@components/layout/Header'
import Footer from '@components/layout/Footer'
import HomePage from '@pages/HomePage'
import ProjectsPage from '@pages/ProjectsPage'
import ProjectDetailPage from '@pages/ProjectDetailPage'
import AboutPage from '@pages/AboutPage'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App