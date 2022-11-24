/**
 * BEGIN
 */

import Link from 'next/link';
import { randomId } from 'randomId';

export async function Header() {
  const links = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Users',
      href: '/users',
    },
  ];

  return (
    <div className="flex items-center space-x-5">
      {links.map(({ title, href }) => (
        <Link key={randomId()} href={href}>
          {title}
        </Link>
      ))}
    </div>
  );
}

/**
 * END
 */
