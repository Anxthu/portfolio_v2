const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDir = path.join(__dirname, '..', 'public', 'Projects Mockups');

async function optimizeImages(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            await optimizeImages(filePath);
        } else if (file.match(/\.(jpg|jpeg|png)$/i) && !file.includes('_opt.webp')) {
            const ext = path.extname(file);
            const baseName = path.basename(file, ext);
            const outPath = path.join(dir, `${baseName}_opt.webp`);

            console.log(`Processing ${filePath}...`);

            try {
                await sharp(filePath)
                    .resize({ width: 1920, withoutEnlargement: true }) // Scale down huge images to max 1920 width
                    .webp({ quality: 80 }) // Convert to WebP with 80% quality
                    .toFile(outPath);

                console.log(`✅ Saved optimized version: ${outPath}`);
            } catch (err) {
                console.error(`❌ Error parsing ${filePath}:`, err);
            }
        }
    }
}

console.log("Starting image optimization...");
optimizeImages(targetDir).then(() => {
    console.log("All done!");
});
