/**
 * BEGIN
 */

import { createTRPCProxyClient, loggerLink, httpBatchLink } from "@trpc/client";
import { getBaseUrl } from "baseUrl";
import { AppRouter } from "server";

export const trpc = createTRPCProxyClient<AppRouter>({
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