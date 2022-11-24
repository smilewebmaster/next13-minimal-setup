/**
 * BEGIN
 */

import { initTRPC } from '@trpc/server';
import { appRouter } from 'routers';
import { ZodError } from 'zod';

export type AppRouter = typeof appRouter;

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
export const mergeRouters = t.mergeRouters;
export const procedure = t.procedure;
export const middleware = t.middleware;

/**
 * END
 */
