"use client";

import Link from "next/link";

const links = [
  {
    id: 1,
    title: "Main",
    href: "/",
  },
];

const NavBar = () => {
  return (
    <div className="w-full py-3 border-b border-gray-300">
      <ul>
        {links.map((link) => (
          <li key={1}>
            <Link className="p-4 transition hover:bg-blue-300 hover:text-white" href={link.href}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
