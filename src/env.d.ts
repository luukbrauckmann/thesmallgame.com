interface ImportMetaEnv {
	readonly DATOCMS_URL: string;
	readonly DATOCMS_API_KEY: string;
	readonly SUPABASE_URL: string;
	readonly SUPABASE_ANON_KEY: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
