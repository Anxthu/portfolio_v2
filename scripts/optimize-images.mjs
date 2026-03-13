import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const SIZE_THRESHOLD = 500 * 1024; // 500KB

async function optimizeImages(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await optimizeImages(fullPath);
    } else if (
      stat.isFile() &&
      /\.(jpg|jpeg|png)$/i.test(file) &&
      stat.size > SIZE_THRESHOLD
    ) {
      console.log(`Found large image: ${file} (${(stat.size / 1024 / 1024).toFixed(2)} MB)`);
      
      const ext = path.extname(file);
      const outputFilename = file.replace(new RegExp(`${ext}$`, 'i'), '.webp');
      const outputPath = path.join(dir, outputFilename);

      try {
        await sharp(fullPath)
          .webp({ quality: 80, effort: 6 }) // Aggressive compression settings suitable for WebP
          .toFile(outputPath);
        
        const newStat = fs.statSync(outputPath);
        console.log(` -> Optimized to: ${outputFilename} (${(newStat.size / 1024 / 1024).toFixed(2)} MB)`);
        
        // Optional: you can delete the original here, or delete it later manually
        // array to keep track of old files
      } catch (error) {
        console.error(`Error optimizing ${file}:`, error);
      }
    }
  }
}

console.log('Starting image optimization...');
optimizeImages(PUBLIC_DIR)
  .then(() => console.log('Optimization complete.'))
  .catch(console.error);
