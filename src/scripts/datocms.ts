import { print, type DocumentNode } from 'graphql';

export const get = async (query: DocumentNode, variables: any) => {
  const response = await fetch('https://graphql.datocms.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.DATOCMS_API_KEY}`,
    },
    body: JSON.stringify({
      query: print(query),
      variables
    }),
  });

  return (await response.json()).data;
};
