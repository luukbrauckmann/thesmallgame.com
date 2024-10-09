import { existsSync } from 'fs';
import { mkdir, readdir, readFile, rm, writeFile } from 'fs/promises';

export default async function () {
	const dataDir = '.data/pages';

	if (!existsSync(dataDir)) {
		await mkdir(dataDir);
	} else {
		const files = await readdir(dataDir);
		files.forEach(async (file) => {
			const filePath = `${dataDir}/${file}`;
			await rm(filePath, { recursive: true, force: true });
		});
	}

	const fileContent = await readFile('.data/routes.json', 'utf-8');
	const routes = JSON.parse(fileContent);

	routes.forEach(async (route: string) => {
		const directory = route.split('/');
		directory.pop();

		await mkdir(`.data/pages/${directory.join('/')}`, { recursive: true });

		await writeFile(`.data/pages/${route}.json`, JSON.stringify(route, null, 2));
	});
}
