/**
 * BEGIN
 */

import { TRPC } from 'core/components/trpc';
import { Fragment, Suspense } from 'react';

export default async function Page() {
  return (
    <Fragment>
      <div>Main Page</div>
      {/* @ts-expect-error Async Server Component */}
      <TRPC />
    </Fragment>
  );
}

/**
 * END
 */
