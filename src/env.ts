/**
 * BEGIN
 */

const PORT = process.env.PORT;
const VERCEL = `https://${process.env.VERCEL_URL}`;
const RENDER = `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${PORT}`;
const LOCAL = `http://localhost:${process.env.PORT ?? 3000}`;

export { PORT, VERCEL, RENDER, LOCAL };

/**
 * END
 */
