const assert = require('node:assert/strict');
const path = require('node:path');
const { pathToFileURL } = require('node:url');

async function main() {
  const rootDir = path.resolve(__dirname, '..');
  const cjsEntry = path.join(rootDir, 'dist', 'cjs', 'index.js');
  const esmEntry = pathToFileURL(
    path.join(rootDir, 'dist', 'esm', 'index.js')
  ).href;

  const cjsSdk = require(cjsEntry);
  const esmSdk = await import(esmEntry);

  assert.equal(cjsSdk.OrderStatus.Created, 'CREATED');
  assert.equal(cjsSdk.CaptureStatus.Completed, 'COMPLETED');
  assert.equal(esmSdk.OrderStatus.Created, 'CREATED');
  assert.equal(esmSdk.CaptureStatus.Completed, 'COMPLETED');

  console.log('Verified ESM and CJS dist exports');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
