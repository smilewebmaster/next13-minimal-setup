/**
 * BEGIN
 */

/**
 *
 * @param ms
 * @returns
 */

export async function delay(ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * END
 */
