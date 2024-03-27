const { execSync } = require('child_process');
const glob = require('glob');

const files = glob.sync('src/**/*.ts');

files.forEach(file => {
  const outFile = file.replace('src', 'lib').replace('.ts', '.js');
  const command = `npx babel ${file} --out-file ${outFile} --presets @babel/preset-env,@babel/preset-typescript`;
  execSync(command, { stdio: 'inherit' });
});