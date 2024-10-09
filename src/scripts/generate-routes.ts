import { writeFile } from 'fs/promises';

const { DATOCMS_URL, DATOCMS_API_KEY } = process.env;

export default async function () {
	const response = await fetch(DATOCMS_URL as string, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: `Bearer ${DATOCMS_API_KEY}`,
		},
		body: JSON.stringify({
			query: `query AllPagesQuery {
				allPages {
					_allSlugLocales {
						value
						locale
					}
				}
			}`,
		}),
	});

	const json = await response.json();
	const { allPages } = json.data;

	const routes = allPages.flatMap((page: any) => {
		const { _allSlugLocales } = page;
		return _allSlugLocales.map((slug: any) => {
			if (slug.value === '') {
				return `${slug.locale}`;
			} else {
				return `${slug.locale}/${slug.value}`;
			}
		});
	});

	await writeFile('.data/routes.json', JSON.stringify(routes, null, 2));
}
