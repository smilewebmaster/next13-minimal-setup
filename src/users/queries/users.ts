/**
 * BEGIN
 */

import { procedure } from 'server';

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

export const users = procedure.query(() => {
  return userList;
});

/**
 * END
 */
