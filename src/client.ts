/**
 * BEGIN
 */

import { createTRPCProxyClient, httpBatchLink, loggerLink } from '@trpc/client';
import { getBaseUrl } from 'base-url';
import { AppRouter } from 'server';

export const client = createTRPCProxyClient<AppRouter>({
  links: [
    loggerLink({
      enabled: (opts) =>
        process.env.NODE_ENV === 'development' ||
        (opts.direction === 'down' && opts.result instanceof Error),
    }),
    httpBatchLink({
      url: `${getBaseUrl()}/api/trpc`,
    }),
  ],
});

/**
 * END
 */
