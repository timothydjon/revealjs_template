import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function copyRecursive(src, dest) {
    await fs.mkdir(dest, { recursive: true });
    const entries = await fs.readdir(src, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            await copyRecursive(srcPath, destPath);
        } else {
            await fs.copyFile(srcPath, destPath);
        }
    }
}

async function buildPresentations() {
    const presentationsDir = path.join(__dirname, 'presentations');
    const distDir = path.join(__dirname, 'dist');

    // Clean dist directory
    await fs.rm(distDir, { recursive: true, force: true });
    await fs.mkdir(distDir, { recursive: true });

    // Copy base files (index.html, src, and reveal.js from node_modules)
    const baseFiles = [
        { src: 'index.html', dest: 'index.html' },
        { src: 'src', dest: 'src' },
        { src: 'node_modules/reveal.js', dest: 'node_modules/reveal.js' }
    ];

    // Get all presentation directories
    const presentations = await fs.readdir(presentationsDir, { withFileTypes: true });
    const presentationDirs = presentations.filter(d => d.isDirectory()).map(d => d.name);

    // Build each presentation
    for (const dir of presentationDirs) {
        const presentationPath = path.join(presentationsDir, dir);
        const outputPath = path.join(distDir, dir);

        console.log(`Building presentation: ${dir}`);

        // Create output directory
        await fs.mkdir(outputPath, { recursive: true });

        // Copy base files to presentation directory
        for (const file of baseFiles) {
            const srcPath = path.join(__dirname, file.src);
            const destPath = path.join(outputPath, file.dest);
            const stat = await fs.stat(srcPath);

            if (stat.isDirectory()) {
                await copyRecursive(srcPath, destPath);
            } else if (file.src === 'index.html') {
                // Read index.html and fix the markdown path
                let content = await fs.readFile(srcPath, 'utf-8');
                // Replace any data-markdown path to point to slides/presentation.md
                content = content.replace(
                    /data-markdown="[^"]*"/g,
                    'data-markdown="slides/presentation.md"'
                );
                await fs.writeFile(destPath, content);
            } else {
                await fs.copyFile(srcPath, destPath);
            }
        }

        // Create slides directory and copy presentation slides
        await fs.mkdir(path.join(outputPath, 'slides'), { recursive: true });
        await fs.copyFile(
            path.join(presentationPath, 'slides.md'),
            path.join(outputPath, 'slides', 'presentation.md')
        );

        // Copy any additional assets from the presentation directory
        const files = await fs.readdir(presentationPath);
        for (const file of files) {
            if (file !== 'slides.md') {
                const srcPath = path.join(presentationPath, file);
                const destPath = path.join(outputPath, file);
                const stat = await fs.stat(srcPath);

                if (stat.isDirectory()) {
                    await copyRecursive(srcPath, destPath);
                } else {
                    await fs.copyFile(srcPath, destPath);
                }
            }
        }
    }

    // Create index page
    const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Presentations</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            max-width: 900px;
            margin: 50px auto;
            padding: 20px;
            background: #1a1a2e;
            color: #eee;
        }
        h1 {
            color: #3498db;
            border-bottom: 2px solid #3498db;
            padding-bottom: 10px;
        }
        .presentations {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 30px;
        }
        .card {
            padding: 20px;
            background: rgba(255,255,255,0.05);
            border-radius: 8px;
            border: 1px solid rgba(52, 152, 219, 0.3);
            transition: all 0.3s ease;
        }
        .card:hover {
            background: rgba(255,255,255,0.08);
            border-color: #3498db;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
        }
        .card h2 {
            color: #3498db;
            margin: 0 0 10px 0;
            font-size: 1.3em;
        }
        .card a {
            color: #3498db;
            text-decoration: none;
            font-weight: 500;
        }
        .card a:hover {
            text-decoration: underline;
        }
        .card .description {
            color: #aaa;
            font-size: 0.9em;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <h1>📊 Available Presentations</h1>
    <div class="presentations">
        ${presentationDirs.map(dir => `
        <div class="card">
            <h2>${dir.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h2>
            <a href="${dir}/">▶️ View Presentation</a>
            <div class="description">
                ${dir === 'template' ? 'Basic template presentation' :
                  dir === 'mcp-barcamp2025' ? 'MCP: How AI Agents Connect to Data' :
                  'Custom presentation'}
            </div>
        </div>
        `).join('')}
    </div>
</body>
</html>`;

    await fs.writeFile(path.join(distDir, 'index.html'), indexHtml);

    console.log(`\n✅ Built ${presentationDirs.length} presentations`);
    console.log('📁 Output directory: dist/');
    console.log('🌐 Presentations available at:');
    presentationDirs.forEach(dir => {
        console.log(`   - /${dir}/`);
    });
}

buildPresentations().catch(console.error);