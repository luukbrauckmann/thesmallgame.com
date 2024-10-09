import 'tsconfig-paths/register';
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import { createDataFolder, generatePages, generateRoutes } from '@scripts';

await createDataFolder();
await generateRoutes();
await generatePages();

export default defineConfig({
	output: 'server',
	adapter: cloudflare({
		imageService: 'passthrough',
		platformProxy: {
			enabled: true
		}
	}),
	devToolbar: {
		enabled: false
	}
});
