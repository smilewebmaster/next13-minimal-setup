/**
 * BEGIN
 */

import { procedure } from 'server';
import { z } from 'zod';

interface User {
  id: string;
  name: string;
}

const userList: User[] = [
  {
    id: '1',
    name: 'KATT',
  },
  {
    id: '2',
    name: 'BATUHAN',
  },
  {
    id: '3',
    name: 'JOHN',
  },
  {
    id: '4',
    name: 'MATT',
  },
  {
    id: '5',
    name: 'TRPC',
  },
];

export const userById = procedure
  .input(
    z.object({
      id: z.string(),
    })
  )
  .query(({ input }) => {
    const user = userList.find((it) => it.id === input.id);
    return user;
  });

/**
 * END
 */
