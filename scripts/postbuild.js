import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const indexPath = path.join(distDir, 'index.html');
const fourOhFourPath = path.join(distDir, '404.html');

if (fs.existsSync(indexPath)) {
  let content = fs.readFileSync(indexPath, 'utf-8');

  // Replace absolute /assets/ with relative ./assets/ for CSS and JS
  content = content.replace(/src="\/assets\//g, 'src="./assets/');
  content = content.replace(/href="\/assets\//g, 'href="./assets/');

  // Ensure favicon links point to circular favicon.svg & favicon.png
  if (!content.includes('favicon.svg')) {
    content = content.replace(
      /<head>/i,
      '<head>\n    <link rel="icon" type="image/svg+xml" href="./favicon.svg" />\n    <link rel="alternate icon" type="image/png" href="./favicon.png" />'
    );
  }

  fs.writeFileSync(indexPath, content, 'utf-8');
  fs.writeFileSync(fourOhFourPath, content, 'utf-8');
  console.log('Postbuild: relative asset paths & 404.html prepared in dist/');
} else {
  console.error('Postbuild warning: dist/index.html not found');
}
