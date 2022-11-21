/**
 * BEGIN
 */

import { Header } from 'core/components/header';

import 'globals.css';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        {/* @ts-expect-error Async Server Component */}
        <Header />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}

/**
 * END
 */
