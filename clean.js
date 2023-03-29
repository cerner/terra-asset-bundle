import fs from 'fs-extra';
import { globby } from 'globby';
import path from 'path';
import pkg from './package.json' assert { type: 'json' };

async function main() {
  const manifestPath = path.join(pkg.config.publicDir, 'manifest.json');
  const manifest = fs.existsSync(manifestPath) ?
    await fs.readJson(manifestPath) : {};

  const publicModules = new Set(
    await globby('*.+(js|mjs)', { cwd: pkg.config.publicDir }));

  // Remove files from the `publicModules` set if they're in the manifest:
  for (const fileName of Object.values(manifest)) {
    if (publicModules.has(fileName)) {
      publicModules.delete(fileName);
    }
  }

  // Delete all remaining modules (not in the manifest):
  for (const fileName of publicModules) {
    await fs.remove(path.join(pkg.config.publicDir, fileName));
  }
}

main();