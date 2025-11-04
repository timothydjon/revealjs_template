#!/usr/bin/env node

import { cpSync, mkdirSync, existsSync, rmSync } from 'fs';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function build() {
    console.log('🔨 Building for production...\n');

    // Clean dist directory
    if (existsSync('dist')) {
        console.log('Cleaning dist directory...');
        rmSync('dist', { recursive: true, force: true });
    }

    // Create dist directory
    mkdirSync('dist', { recursive: true });

    // Copy necessary files and folders
    const items = [
        { src: 'index.prod.html', dest: 'dist/index.html' },
        { src: 'src', dest: 'dist/src' },
        { src: 'slides', dest: 'dist/slides' },
        { src: 'assets', dest: 'dist/assets' }
    ];

    for (const item of items) {
        if (existsSync(item.src)) {
            console.log(`Copying ${item.src}...`);
            if (item.src.includes('.html')) {
                cpSync(item.src, item.dest);
            } else {
                cpSync(item.src, item.dest, { recursive: true });
            }
        }
    }

    console.log('\n✅ Build complete! Files ready in dist/ directory');
    console.log('📦 Ready for deployment to GitHub Pages');
}

build().catch(console.error);