import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path';
import { realpathSync} from 'fs';

const dirname = realpathSync('.');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      sibling: resolve(dirname, '../sibling'),
    }
  }
})
