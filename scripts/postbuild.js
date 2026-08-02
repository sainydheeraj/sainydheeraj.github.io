import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const indexPath = path.join(distDir, 'index.html');
const fourOhFourPath = path.join(distDir, '404.html');

if (fs.existsSync(indexPath)) {
  // Read index.html and ensure favicon links point to ./favicon.svg and ./favicon.png
  let content = fs.readFileSync(indexPath, 'utf-8');
  content = content.replace(/<link rel="icon"[^>]*>/gi, '<link rel="icon" type="image/svg+xml" href="./favicon.svg" /><link rel="alternate icon" type="image/png" href="./favicon.png" />');
  
  fs.writeFileSync(indexPath, content);
  fs.writeFileSync(fourOhFourPath, content);
  console.log('Postbuild: static index.html & 404.html prepared in dist/');
} else {
  console.error('Postbuild warning: dist/index.html not found');
}
