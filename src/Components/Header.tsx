import React from 'react'

function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white/80 px-6 py-4 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <a href="#" className="text-xl font-semibold tracking-tight text-gray-900">
          BookFinds
        </a>

        <nav className="flex items-center gap-3">
          <button
            type="button"
            className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Switch to Dark Mode
          </button>
          <a href="#" className="text-sm font-medium text-gray-700 transition hover:text-gray-900">
            Profile
          </a>
          <a href="#" className="text-sm font-medium text-gray-700 transition hover:text-gray-900">
            Cart
          </a>
          <a href="#" className="text-sm font-medium text-gray-700 transition hover:text-gray-900">
            About
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
