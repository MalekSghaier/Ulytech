const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function compressFolder(folder) {
  if (!fs.existsSync(folder)) return;
  const files = fs.readdirSync(folder);
  
  for (const file of files) {
    if (!/\.(png|jpg|jpeg)$/i.test(file)) continue;
    
    const input = path.join(folder, file);
    const output = path.join(folder, file.replace(/\.(png|jpg|jpeg)$/i, '.webp'));
    
    const before = fs.statSync(input).size;
    await sharp(input).webp({ quality: 75 }).toFile(output);
    const after = fs.statSync(output).size;
    
    console.log(`✅ ${file} → ${Math.round(before/1024)}KB → ${Math.round(after/1024)}KB`);
  }
}

async function main() {
  await compressFolder('./public');
}

main();