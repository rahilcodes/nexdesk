const fs = require('fs');
const path = require('path');

const FILES_TO_CLEAN = [
  'index.html',
  'index.txt',
  '404.html',
  'blog.html',
  'blog.txt',
  'terms.html',
  'terms.txt',
  'icon.png',
  '_next',
  'blog',
  'images'
];

function deleteRecursive(itemPath) {
  if (fs.existsSync(itemPath)) {
    const stats = fs.statSync(itemPath);
    if (stats.isDirectory()) {
      fs.readdirSync(itemPath).forEach(file => {
        deleteRecursive(path.join(itemPath, file));
      });
      fs.rmdirSync(itemPath);
    } else {
      fs.unlinkSync(itemPath);
    }
  }
}

function copyRecursive(src, dest) {
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest);
    }
    fs.readdirSync(src).forEach(child => {
      copyRecursive(path.join(src, child), path.join(dest, child));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

console.log('Cleaning up previous build files from root...');
FILES_TO_CLEAN.forEach(item => {
  const itemPath = path.join(__dirname, item);
  deleteRecursive(itemPath);
});

console.log('Copying new build files from out/ to root...');
const outDir = path.join(__dirname, 'out');
if (fs.existsSync(outDir)) {
  fs.readdirSync(outDir).forEach(child => {
    const srcPath = path.join(outDir, child);
    const destPath = path.join(__dirname, child);
    copyRecursive(srcPath, destPath);
  });
  console.log('Build files successfully copied to root!');
} else {
  console.error('Error: "out" directory not found. Please run "npm run build" first.');
}
