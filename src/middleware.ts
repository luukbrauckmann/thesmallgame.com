// import { defineMiddleware } from 'astro:middleware';
// import { parse } from 'cookie';
// import { supabase } from '@scripts';

// export const onRequest = defineMiddleware(async (context, next) => {
// 	const cookies = parse(context.request.headers.get('cookie'));
// 	const accessToken = cookies['sb-access-token'];
// 	const refreshToken = cookies['sb-refresh-token'];

// 	const { data, error } = await supabase.auth.setSession({
// 		refresh_token: refreshToken,
// 		access_token: accessToken
// 	});

// 	if (data) {
// 		Object.assign(context.locals, { ...data });
// 	}

// 	return next();
// });
