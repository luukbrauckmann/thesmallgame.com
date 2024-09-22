import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';
import preact from '@astrojs/preact';
import graphql from '@rollup/plugin-graphql';

export default defineConfig({
	output: 'hybrid',
	adapter: cloudflare(),

	devToolbar: {
		enabled: false
	},

	integrations: [preact({ compat: true })],
	vite: {
	  plugins: [graphql()]
	}
});
