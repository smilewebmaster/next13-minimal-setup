/**
 * BEGIN
 */

import { TRPCSwr } from 'core/components/trpc-swr';
import { Fragment } from 'react';

export default async function Page() {
  return (
    <Fragment>
      <div>Users</div>
      <TRPCSwr />
    </Fragment>
  );
}

/**
 * END
 */
