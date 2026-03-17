const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const distPackages = [
  { dir: path.join(rootDir, 'dist', 'esm'), type: 'module' },
  { dir: path.join(rootDir, 'dist', 'cjs'), type: 'commonjs' },
];

for (const { dir, type } of distPackages) {
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(
    path.join(dir, 'package.json'),
    JSON.stringify({ type }, null, 2) + '\n'
  );
}
