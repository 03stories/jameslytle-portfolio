import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

// Content loader functions that will run at build time 
function loadProjects() {
  const projectsDir = path.join(__dirname, 'content/projects')
  const projectFolders = fs.readdirSync(projectsDir)
  
  const projects = projectFolders
    .filter(folder => 
      !folder.startsWith('_') && 
      fs.statSync(path.join(projectsDir, folder)).isDirectory()
    )
    .map(folder => {
      const projectFile = path.join(projectsDir, folder, 'project.md')
      
      if (!fs.existsSync(projectFile)) {
        return null
      }
      
      const fileContents = fs.readFileSync(projectFile, 'utf8')
      const { data, content } = matter(fileContents)
      
      return {
        id: folder,
        title: data.title,
        date: data.date,
        description: data.description,
        featuredImage: data.featuredImage,
        content,
        slug: folder
      }
    })
    .filter(project => project !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  
  return projects
}

function loadAboutContent() {
  const aboutFile = path.join(__dirname, 'content/about/about.md')
  
  if (!fs.existsSync(aboutFile)) {
    return null
  }
  
  const fileContents = fs.readFileSync(aboutFile, 'utf8')
  const { data, content } = matter(fileContents)
  
  return {
    title: data.title,
    content,
    image: data.image,
    resume: data.resume
  }
}

function loadHomeContent() {
  const homeFile = path.join(__dirname, 'content/home/home.md')
  
  if (!fs.existsSync(homeFile)) {
    return null
  }
  
  const fileContents = fs.readFileSync(homeFile, 'utf8')
  const { data } = matter(fileContents)
  
  return {
    title: data.title,
    subtitle: data.subtitle,
    featuredProjects: data.featuredProjects || []
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@content': path.resolve(__dirname, './content')
    }
  },
  define: {
    // Make content available globally at build time
    __PROJECTS__: loadProjects(),
    __ABOUT_CONTENT__: loadAboutContent(),
    __HOME_CONTENT__: loadHomeContent()
  }
})