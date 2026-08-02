import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const clientDir = path.resolve('dist/client');
const assetsDir = path.resolve('dist/client/assets');

if (fs.existsSync(assetsDir)) {
  const files = fs.readdirSync(assetsDir);
  const jsFile = files.find(f => f.startsWith('index-') && f.endsWith('.js'));
  const cssFile = files.find(f => f.startsWith('styles-') && f.endsWith('.css'));

  console.log(`Postbuild: found jsFile=${jsFile}, cssFile=${cssFile}`);

  const htmlContent = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dheeraj Sankhla | Full-Stack Engineer, AI & MCP Architect, Growth Marketer</title>
    <meta name="description" content="Portfolio & Resume of Dheeraj Sankhla - Full-Stack Software Engineer, Generative AI Architect (LLMs, MCP, RAG), Cloud Solutions (AWS/Supabase), E-Commerce Platform Architect, and Meta Ads Specialist." />
    <meta name="keywords" content="Dheeraj Sankhla, Full-Stack Developer, AI Architect, MCP, RAG, React, TypeScript, Node.js, AWS, Supabase, Meta Ads, E-Commerce" />
    ${cssFile ? `<link rel="stylesheet" href="./assets/${cssFile}">` : ''}
    ${jsFile ? `<script type="module" src="./assets/${jsFile}"></script>` : ''}
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`;

  // Write index.html into dist/client/index.html
  fs.writeFileSync(path.join(clientDir, 'index.html'), htmlContent);
  // Also write 404.html for SPA routing on GitHub Pages
  fs.writeFileSync(path.join(clientDir, '404.html'), htmlContent);

  // Copy dist/client contents directly to dist/ root so both dist/ and dist/client/ work
  function copyRecursive(src, dest) {
    const stats = fs.statSync(src);
    if (stats.isDirectory()) {
      if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
      for (const child of fs.readdirSync(src)) {
        copyRecursive(path.join(src, child), path.join(dest, child));
      }
    } else {
      fs.copyFileSync(src, dest);
    }
  }

  copyRecursive(clientDir, distDir);
  console.log('Postbuild: static index.html & 404.html generated successfully in dist/ & dist/client/');
} else {
  console.error('Postbuild error: assetsDir does not exist');
}
