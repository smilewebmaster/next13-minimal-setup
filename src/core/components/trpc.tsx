/**
 * BEGIN
 */

import { client } from 'client';

export async function TRPC() {
  const data = await client.userById.query({ id: '1' });
  return <div>{JSON.stringify(data)}</div>;
}

/**
 * END
 */
