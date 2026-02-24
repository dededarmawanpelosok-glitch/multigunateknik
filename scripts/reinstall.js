import { execSync } from 'child_process';
import { rmSync, existsSync } from 'fs';
import { join } from 'path';

const projectDir = '/vercel/share/v0-project';

// Remove stale lock files
const filesToRemove = ['package-lock.json', 'bun.lockb', 'pnpm-lock.yaml'];
for (const file of filesToRemove) {
  const filePath = join(projectDir, file);
  if (existsSync(filePath)) {
    console.log(`Removing ${file}...`);
    rmSync(filePath, { force: true });
  }
}

// Remove node_modules
const nodeModulesPath = join(projectDir, 'node_modules');
if (existsSync(nodeModulesPath)) {
  console.log('Removing node_modules...');
  rmSync(nodeModulesPath, { recursive: true, force: true });
}

// Run npm install to generate a fresh package-lock.json
console.log('Running npm install...');
execSync('npm install', { cwd: projectDir, stdio: 'inherit' });

console.log('Done! Fresh package-lock.json generated.');
