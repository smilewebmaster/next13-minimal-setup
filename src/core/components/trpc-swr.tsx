/**
 * BEGIN
 */

'use client';

import { client } from 'client';
import useSWR from 'swr';

const fetcher = () => client.users.query();

export function TRPCSwr() {
  const { data, error } = useSWR('/user/1', fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return <div>{JSON.stringify(data)}</div>;
}

/**
 * END
 */
