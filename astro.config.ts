import { defineConfig, passthroughImageService } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import preact from '@astrojs/preact';
import graphql from '@rollup/plugin-graphql';

export default defineConfig({
	output: 'hybrid',
	adapter: cloudflare(),

	devToolbar: {
		enabled: false
	},
	image: {
    service: passthroughImageService()
  },
	integrations: [preact({ compat: true })],
	vite: {
	  plugins: [graphql()]
	}
});
