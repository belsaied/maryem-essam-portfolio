// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://belsaied.github.io',
  base: '/maryem-essam-portfolio',
  build: {
    format: 'directory'
  }
});