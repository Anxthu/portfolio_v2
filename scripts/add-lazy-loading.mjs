import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.join(__dirname, '..', 'src');

function findSrcFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      findSrcFiles(fullPath, fileList);
    } else if (/\.(tsx|jsx)$/i.test(file)) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const srcFiles = findSrcFiles(SRC_DIR);
let updatedCount = 0;

for (const srcFile of srcFiles) {
  let content = fs.readFileSync(srcFile, 'utf-8');
  let originalContent = content;

  // Regex to match <img ...> or <motion.img ...> that doesn't already have loading=
  // We use a relatively simple regex that might need some assumptions
  // It looks for <img followed by anything up to > or />, ensuring loading= is not present
  
  // A safer multi-line replace might be tricky with regex, let's try a robust approach
  const regex = /<(?:img|motion\.img)\b([^>]*?)(\/?)>/g;

  content = content.replace(regex, (match, attrs, selfClosing) => {
    // If it already has loading attr, skip
    if (/loading=/i.test(attrs)) {
      return match;
    }
    // Add loading="lazy" before the closing tag
    return `<${match.startsWith('<img') ? 'img' : 'motion.img'}${attrs} loading="lazy" ${selfClosing ? '/>' : '>'}`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(srcFile, content, 'utf-8');
    updatedCount++;
    console.log(`Added loading="lazy" to: ${path.relative(SRC_DIR, srcFile)}`);
  }
}

console.log(`Finished updating ${updatedCount} files.`);
