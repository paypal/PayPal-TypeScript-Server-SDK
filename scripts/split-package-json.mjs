// Node.js script to add separate package.json files to dist/esm and dist/cjs
// This acts as a hint for Node.js and TypeScript when loading modules(i.e. .js files).

import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

// Define the target directories and their respective package.json content
const targets = [
  {
    dir: join('dist', 'esm'),
    content: { type: 'module' }
  },
  {
    dir: join('dist', 'cjs'),
    content: { type: 'commonjs' }
  }
];

// Ensure each directory exists and write the package.json file
targets.forEach(({ dir, content }) => {
  mkdirSync(dir, { recursive: true });
  writeFileSync(
    join(dir, 'package.json'),
    JSON.stringify(content, null, 2) + '\n',
    'utf8'
  );
});
