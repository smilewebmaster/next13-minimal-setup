/**
 * BEGIN
 */

import { Fragment } from 'react';
import { UserList } from 'users/components/userList';

export default async function Page() {
  return (
    <Fragment>
      <div>Users</div>
      <UserList />
    </Fragment>
  );
}

/**
 * END
 */
