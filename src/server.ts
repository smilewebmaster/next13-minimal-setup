/**
 * BEGIN
 */

import { initTRPC } from '@trpc/server';
import { z, ZodError } from 'zod';

const t = initTRPC.context().create({
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zod:
          error.cause instanceof ZodError
            ? error.cause.flatten().fieldErrors
            : null,
      },
    };
  },
});

export const router = t.router;
export const procedure = t.procedure;
export const middleware = t.middleware;

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

export const appRouter = t.router({
  userById: t.procedure
    .input(z.object({ id: z.string() }))
    .query(({ input }) => {
      const user = userList.find((it) => it.id === input.id);
      return user;
    }),
  users: t.procedure.query(() => {
    return userList;
  }),
});

export type AppRouter = typeof appRouter;

/**
 * END
 */
