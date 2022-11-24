/**
 * BEGIN
 */

import { VERCEL, RENDER, LOCAL } from 'env';

export function getBaseUrl() {
  if (typeof window !== 'undefined') return '';
  if (process.env.VERCEL_URL) return VERCEL;
  if (process.env.RENDER_INTERNAL_HOSTNAME) return RENDER;
  return LOCAL;
}

/**
 * END
 */
