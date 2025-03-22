const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to find all component files in the project
function findComponentFiles() {
  return glob.sync('src/components/**/*.{tsx,jsx}', {
    cwd: __dirname,
    absolute: true
  });
}

// Function to find all page files in the project
function findPageFiles() {
  return glob.sync('src/app/**/*.{tsx,jsx}', {
    cwd: __dirname,
    absolute: true,
    ignore: ['src/app/layout.tsx', 'src/app/globals.css']
  });
}

// Function to check if the image exists
function imageExists(imagePath) {
  const fullPath = path.join(__dirname, 'public', imagePath);
  return fs.existsSync(fullPath);
}

// Function to extract image paths from a file
function extractImagePaths(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const imagePaths = [];
  
  // Match Next.js Image src attributes
  const nextImageMatches = content.match(/src\s*=\s*["']\/images\/[^"']+["']/g);
  if (nextImageMatches) {
    nextImageMatches.forEach(match => {
      const imgPath = match.match(/["'](\/images\/[^"']+)["']/)[1];
      imagePaths.push(imgPath);
    });
  }
  
  // Match regular img tags
  const imgTagMatches = content.match(/<img[^>]*src\s*=\s*["']\/images\/[^"']+["'][^>]*>/g);
  if (imgTagMatches) {
    imgTagMatches.forEach(match => {
      const imgPath = match.match(/src\s*=\s*["'](\/images\/[^"']+)["']/)[1];
      imagePaths.push(imgPath);
    });
  }
  
  // Match CSS background images
  const bgImageMatches = content.match(/background-image\s*:\s*url\(["']\/images\/[^"']+["']\)/g);
  if (bgImageMatches) {
    bgImageMatches.forEach(match => {
      const imgPath = match.match(/url\(["'](\/images\/[^"']+)["']\)/)[1];
      imagePaths.push(imgPath);
    });
  }
  
  return imagePaths;
}

// Main function to audit image paths
function auditImagePaths() {
  const componentFiles = findComponentFiles();
  const pageFiles = findPageFiles();
  const allFiles = [...componentFiles, ...pageFiles];
  
  console.log(`Found ${allFiles.length} files to check`);
  
  const results = {
    summary: {
      totalFiles: allFiles.length,
      filesWithImages: 0,
      totalImagePaths: 0,
      missingImages: 0
    },
    files: []
  };
  
  allFiles.forEach(filePath => {
    const relativePath = path.relative(__dirname, filePath);
    const imagePaths = extractImagePaths(filePath);
    
    if (imagePaths.length > 0) {
      results.summary.filesWithImages++;
      results.summary.totalImagePaths += imagePaths.length;
      
      const fileResult = {
        file: relativePath,
        imagePaths: [],
        missingImages: []
      };
      
      imagePaths.forEach(imgPath => {
        const exists = imageExists(imgPath);
        fileResult.imagePaths.push({
          path: imgPath,
          exists
        });
        
        if (!exists) {
          fileResult.missingImages.push(imgPath);
          results.summary.missingImages++;
        }
      });
      
      results.files.push(fileResult);
    }
  });
  
  // Save results to JSON
  fs.writeFileSync(
    path.join(__dirname, 'image-paths-audit.json'),
    JSON.stringify(results, null, 2)
  );
  
  // Print summary
  console.log('\nImage Paths Audit Summary:');
  console.log(`- Total files checked: ${results.summary.totalFiles}`);
  console.log(`- Files with image references: ${results.summary.filesWithImages}`);
  console.log(`- Total image paths found: ${results.summary.totalImagePaths}`);
  console.log(`- Missing images: ${results.summary.missingImages}`);
  
  // List files with missing images
  if (results.summary.missingImages > 0) {
    console.log('\nFiles with missing images:');
    results.files
      .filter(file => file.missingImages.length > 0)
      .forEach(file => {
        console.log(`\n${file.file}:`);
        file.missingImages.forEach(imgPath => {
          console.log(`- Missing: ${imgPath}`);
        });
      });
  }
  
  return results;
}

// Run the audit
auditImagePaths();