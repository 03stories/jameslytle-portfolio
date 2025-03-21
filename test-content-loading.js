// Simple content loading test
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Content folder paths
const projectsDir = path.join(process.cwd(), 'content/projects');

// Testing project loading
function testProjectLoading() {
  console.log('Testing project loading...');
  
  try {
    const projectFolders = fs.readdirSync(projectsDir);
    
    console.log(`Found ${projectFolders.length} project folders: ${projectFolders.join(', ')}`);
    
    const projects = projectFolders
      .filter(folder => 
        !folder.startsWith('_') && 
        fs.statSync(path.join(projectsDir, folder)).isDirectory()
      )
      .map(folder => {
        const projectFile = path.join(projectsDir, folder, 'project.md');
        
        if (!fs.existsSync(projectFile)) {
          console.log(`Warning: No project.md found in ${folder}`);
          return null;
        }
        
        const fileContents = fs.readFileSync(projectFile, 'utf8');
        const { data } = matter(fileContents);
        
        return {
          slug: folder,
          title: data.title,
          date: data.date
        };
      })
      .filter(project => project !== null);
    
    console.log('Successfully loaded projects:');
    console.log(JSON.stringify(projects, null, 2));
    return true;
  } catch (error) {
    console.error('Error loading projects:', error);
    return false;
  }
}

// Run the tests
console.log('=== Content Loading Test ===');
testProjectLoading();
console.log('===========================');