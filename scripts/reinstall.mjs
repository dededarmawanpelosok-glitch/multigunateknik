import { execSync } from 'child_process';
import { rmSync, existsSync } from 'fs';
import { join } from 'path';

const projectDir = '/vercel/share/v0-project';

// Remove package-lock.json if it exists
const lockFile = join(projectDir, 'package-lock.json');
if (existsSync(lockFile)) {
  rmSync(lockFile);
  console.log('Removed package-lock.json');
} else {
  console.log('package-lock.json already removed');
}

// Remove node_modules if it exists
const nodeModules = join(projectDir, 'node_modules');
if (existsSync(nodeModules)) {
  rmSync(nodeModules, { recursive: true, force: true });
  console.log('Removed node_modules');
}

// Run npm install to generate a fresh lock file
console.log('Running npm install...');
execSync('npm install', { cwd: projectDir, stdio: 'inherit' });
console.log('Done! Fresh package-lock.json generated.');
