import { Link } from "react-router";

function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white/80 px-6 py-4 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <ul>
          <li className="text-xl font-semibold tracking-tight text-gray-900">
            BookFinds
          </li>
        </ul>

        <nav className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Switch to Dark Mode
          </button>
          //TODO
          <ul className="flex items-center gap-3">
            <li className="text-sm font-medium text-gray-700 transition hover:text-gray-900">
              <Link to="/Profile">Profile</Link>
            </li>
            <li className="text-sm font-medium text-gray-700 transition hover:text-gray-900">
              <Link to="/Books">Books</Link>
            </li>
            <li className="text-sm font-medium text-gray-700 transition hover:text-gray-900">
              <Link to="/Bookmark">Bookmark</Link>
            </li>

            <li className="text-sm font-medium text-gray-700 transition hover:text-gray-900">
              //TODO About
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
