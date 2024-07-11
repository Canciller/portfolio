import { Link } from "@remix-run/react";

export function Navigation() {
  return (
    <div className="flex px-16 py-6 items-center gap-8 justify-between">
      <Link to="/" className="text-4xl text-gray-200 font-semibold">
        Emilio
      </Link>

      <nav>
        <ul className="flex gap-8 text-gray-200">
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
