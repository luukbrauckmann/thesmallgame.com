/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly DATOCMS_API_KEY: string;
}

declare module '*.gql' {
  import { DocumentNode } from 'graphql';
  const value: DocumentNode;
  export default value;
}

declare module '*.graphql' {
  import { DocumentNode } from 'graphql';
  const value: DocumentNode;
  export default value;
}
