const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

const distDir = 'dist';

async function build() {
    // Create dist directory if it doesn't exist
    if (!fs.existsSync(distDir)) {
        fs.mkdirSync(distDir);
    }

    try {
        // 1. Bundle TSX with esbuild
        await esbuild.build({
            entryPoints: ['index.tsx'],
            bundle: true,
            outfile: path.join(distDir, 'index.js'),
            jsx: 'automatic',
            loader: { '.tsx': 'tsx', '.ts': 'ts' },
            define: {
                'process.env.NODE_ENV': '"production"',
                // This makes the environment variable available to the client-side code
                'process.env.API_KEY': `"${process.env.API_KEY || ''}"` 
            },
            tsconfig: 'tsconfig.json',
        });

        // 2. Read index.html
        let html = fs.readFileSync('index.html', 'utf-8');

        // 3. Modify HTML
        // Remove importmap as dependencies are now bundled
        html = html.replace(/<script type="importmap">[\s\S]*?<\/script>/, '');
        // Update script tag to point to the bundled JS file
        html = html.replace('<script type="module" src="/index.tsx"></script>', '<script defer src="/index.js"></script>');
        
        // 4. Write modified index.html to dist
        fs.writeFileSync(path.join(distDir, 'index.html'), html);

        console.log('Build successful! Files are ready in /dist directory.');
    } catch (e) {
        console.error('Build failed:', e);
        process.exit(1);
    }
}

build();
