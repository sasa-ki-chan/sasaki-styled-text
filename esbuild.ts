import esbuild from 'esbuild';
import fs from 'fs-extra';

const tsconfigPath = 'tsconfig.json';
const tsconfig = fs.readJSONSync(tsconfigPath, { throws: false }) || {};
const build = () => {
  fs.removeSync('dist');

  esbuild.build({
    entryPoints: ['src/index.ts', 'src/modules/ANSI.ts'],
    platform: 'node',
    bundle: true,
    outdir: 'dist/',
    tsconfigRaw: JSON.stringify(tsconfig),
    minify: false,
  }).then(() => console.log('Build completed successfully')).catch(() => process.exit(1));
}


build();