type FooterLink = {
  label: string
  href: string
}

type FooterProps = {
  brandName?: string
  description?: string
  links?: FooterLink[]
  copyrightText?: string
}

function Footer({
  brandName = 'BookFinds',
  description = 'Discover your next favorite read with ease.',
  links = [
    { label: 'Home', href: '/' },
    { label: 'Profile', href: '/profile' },
    { label: 'About', href: '#' },
  ],
  copyrightText = '© 2026 BookFinds. All rights reserved.',
}: FooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-slate-50/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">{brandName}</h2>
          <p className="mt-1 text-sm text-slate-600">{description}</p>
        </div>

        <nav className="flex flex-wrap gap-4 text-sm text-slate-600">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="border-t border-slate-200 px-6 py-4 text-center text-sm text-slate-500">
        {copyrightText}
      </div>
    </footer>
  )
}

export default Footer
