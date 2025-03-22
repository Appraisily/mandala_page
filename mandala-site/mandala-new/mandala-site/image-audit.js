const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to check all image references in files
function checkImageReferences() {
  // Find all TSX/JSX files in the project
  const files = glob.sync('src/**/*.{tsx,jsx}', {
    cwd: __dirname,
    ignore: ['**/node_modules/**']
  });
  
  console.log(`Found ${files.length} files to check`);
  
  const results = {
    imageReferences: [],
    missingImages: []
  };
  
  // Extract image references from files
  for (const file of files) {
    const content = fs.readFileSync(path.join(__dirname, file), 'utf8');
    
    // Look for Next.js Image components
    const nextImageRegex = /src\s*=\s*["']([^"']+\.(jpg|jpeg|png|svg|webp))["']/g;
    let match;
    
    while ((match = nextImageRegex.exec(content)) !== null) {
      const imagePath = match[1];
      
      // Only consider absolute paths that start with /
      if (imagePath.startsWith('/')) {
        const fullPath = path.join(__dirname, 'public', imagePath);
        const exists = fs.existsSync(fullPath);
        
        results.imageReferences.push({
          file,
          imagePath,
          exists
        });
        
        if (!exists) {
          results.missingImages.push({
            file,
            imagePath
          });
        }
      }
    }
  }
  
  // Write results to a file
  fs.writeFileSync(
    path.join(__dirname, 'image-audit-results.json'),
    JSON.stringify(results, null, 2)
  );
  
  // Print summary
  console.log(`\nImage Audit Results`);
  console.log(`Total image references: ${results.imageReferences.length}`);
  console.log(`Missing images: ${results.missingImages.length}`);
  
  if (results.missingImages.length > 0) {
    console.log('\nMissing Images:');
    
    // Group by image path
    const missingByPath = {};
    for (const item of results.missingImages) {
      if (!missingByPath[item.imagePath]) {
        missingByPath[item.imagePath] = [];
      }
      missingByPath[item.imagePath].push(item.file);
    }
    
    for (const [imagePath, files] of Object.entries(missingByPath)) {
      console.log(`\n${imagePath}`);
      console.log(`Referenced in ${files.length} files:`);
      files.forEach(file => console.log(`  - ${file}`));
    }
  }
  
  return results;
}

// Function to check image directories
function checkImageDirectories() {
  const publicDir = path.join(__dirname, 'public');
  const imagesDir = path.join(publicDir, 'images');
  
  if (!fs.existsSync(imagesDir)) {
    console.log('\nWarning: images directory does not exist!');
    return [];
  }
  
  // Get all image files
  const imageFiles = glob.sync('**/*.{jpg,jpeg,png,svg,webp,gif}', {
    cwd: imagesDir,
    nodir: true
  });
  
  console.log(`\nFound ${imageFiles.length} image files in public/images directory`);
  
  const subdirectories = fs.readdirSync(imagesDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  console.log(`Image subdirectories: ${subdirectories.join(', ')}`);
  
  // Count by directory
  const countByDir = {};
  for (const file of imageFiles) {
    const dir = path.dirname(file);
    countByDir[dir] = (countByDir[dir] || 0) + 1;
  }
  
  console.log('\nImages by directory:');
  for (const [dir, count] of Object.entries(countByDir)) {
    console.log(`${dir === '.' ? '(root)' : dir}: ${count} images`);
  }
  
  return imageFiles;
}

// Run the checks
const imageReferences = checkImageReferences();
const imageFiles = checkImageDirectories();

// Create a consolidated report
const report = {
  totalReferences: imageReferences.imageReferences.length,
  missingImages: imageReferences.missingImages.length,
  totalImageFiles: imageFiles.length,
  recommendations: []
};

// Add recommendations based on findings
if (imageReferences.missingImages.length > 0) {
  report.recommendations.push({
    issue: `Missing ${imageReferences.missingImages.length} referenced images`,
    fix: 'Add the missing image files to the public directory'
  });
}

// Look for common paths that might be case sensitivity issues
const missingPaths = imageReferences.missingImages.map(item => item.imagePath);
for (const missingPath of missingPaths) {
  // Check if a file with different case exists
  const dir = path.dirname(missingPath).substring(1); // remove leading slash
  const base = path.basename(missingPath);
  
  const similarFiles = imageFiles.filter(file => {
    return path.basename(file).toLowerCase() === base.toLowerCase() &&
           path.dirname(file) === dir;
  });
  
  if (similarFiles.length > 0) {
    report.recommendations.push({
      issue: `Case sensitivity issue for ${missingPath}`,
      fix: `Update references to use the correct case: ${similarFiles[0]}`
    });
  }
}

// Find referenced files with wrong extensions
const imageExtensions = ['.jpg', '.jpeg', '.png', '.svg', '.webp', '.gif'];
for (const missingRef of imageReferences.missingImages) {
  const basePath = missingRef.imagePath.replace(/\.[^.]+$/, '');
  
  for (const ext of imageExtensions) {
    const altPath = `${basePath}${ext}`;
    const fullAltPath = path.join(__dirname, 'public', altPath);
    
    if (fs.existsSync(fullAltPath)) {
      report.recommendations.push({
        issue: `Wrong extension for ${missingRef.imagePath}`,
        fix: `Update references to use correct extension: ${altPath}`
      });
      break;
    }
  }
}

// Save the report
fs.writeFileSync(
  path.join(__dirname, 'image-audit-report.json'),
  JSON.stringify(report, null, 2)
);

console.log('\nAudit complete. Results saved to image-audit-results.json and image-audit-report.json');