import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const SRC_DIR = path.join(__dirname, '..', 'src');

// Find all .webp files
function findWebPFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      findWebPFiles(fullPath, fileList);
    } else if (/\.webp$/i.test(file)) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

// Find all source files
function findSrcFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      findSrcFiles(fullPath, fileList);
    } else if (/\.(ts|tsx|js|jsx|json)$/i.test(file)) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const webpFiles = findWebPFiles(PUBLIC_DIR);
const srcFiles = findSrcFiles(SRC_DIR);

const mappings = webpFiles.map(webpPath => {
  const relativeToPublic = path.relative(PUBLIC_DIR, webpPath).replace(/\\/g, '/');
  const basename = relativeToPublic.replace(/\.webp$/i, '');
  return { webp: `/${relativeToPublic}`, basename };
});

let updatedCount = 0;

for (const srcFile of srcFiles) {
  let content = fs.readFileSync(srcFile, 'utf-8');
  let changed = false;

  for (const { webp, basename } of mappings) {
    // Escape regex characters in basename
    const escapedBasename = basename.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    // Match exactly the basename + .jpg/.jpeg/.png
    const regex = new RegExp(`(?<=['"\`])/?${escapedBasename}\\.(?:jpg|jpeg|png|JPG)(?=['"\`])`, 'g');
    
    if (regex.test(content)) {
      content = content.replace(regex, webp);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(srcFile, content, 'utf-8');
    updatedCount++;
    console.log(`Updated references in: ${path.relative(SRC_DIR, srcFile)}`);
  }
}

console.log(`Finished updating ${updatedCount} files.`);
