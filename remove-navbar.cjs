const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(fullPath));
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            results.push(fullPath);
        }
    });
    return results;
}

const files = walk('./src');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    if (content.includes('import Navbar from "@/components/Navbar";')) {
        content = content.replace(/import Navbar from "@\/components\/Navbar";\r?\n/g, '');
        changed = true;
    }
    
    if (content.includes('<Navbar />')) {
        content = content.replace(/[ \t]*<Navbar \/>\r?\n/g, '');
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(file, content);
        console.log('Removed Navbar from', file);
    }
});
