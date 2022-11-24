/**
 * BEGIN
 */

'use client';

import useSWR from 'swr';
import { trpc } from 'trpc';

const fetcher = () => trpc.users.query();

export function UserList() {
  const { data, error } = useSWR('users', fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return <div>{JSON.stringify(data)}</div>;
}

/**
 * END
 */
