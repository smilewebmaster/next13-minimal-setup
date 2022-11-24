/**
 * BEGIN
 */

import { router } from "server";
import { userById } from "users/queries/userById";
import { users } from "users/queries/users";

export const appRouter = router({
  userById,
  users
});

/**
 * END
 */