#!/usr/bin/env node

/**
 * CLI tool to create new presentations from template
 * Usage: node create-presentation.js "My New Presentation"
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const presentationName = process.argv[2];

if (!presentationName) {
    console.log('Usage: node create-presentation.js "Presentation Name"');
    process.exit(1);
}

const slug = presentationName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const markdownFile = `slides/${slug}.md`;
const htmlFile = `${slug}.html`;

// Create markdown template
const markdownTemplate = `<!-- .slide: class="title-slide" -->

# ${presentationName}

## Subtitle Here

<div class="author">Your Name</div>
<div class="date">${new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</div>

---

## Agenda

- Introduction
- Main Points
- Conclusion

---

## Introduction

Start your presentation here...

---

## Thank You!

### Questions?
`;

// Create HTML file
const htmlTemplate = fs.readFileSync('index.html', 'utf8')
    .replace('presentation.md', `${slug}.md`)
    .replace('<title>Presentation Title</title>', `<title>${presentationName}</title>`);

// Write files
fs.writeFileSync(markdownFile, markdownTemplate);
fs.writeFileSync(htmlFile, htmlTemplate);

console.log(`✅ Created new presentation: ${presentationName}`);
console.log(`📝 Markdown file: ${markdownFile}`);
console.log(`🌐 HTML file: ${htmlFile}`);
console.log(`\nTo start editing:`);
console.log(`1. Edit ${markdownFile} with your content`);
console.log(`2. Run 'npm start' to preview`);
console.log(`3. Open http://localhost:3000/${htmlFile}`);