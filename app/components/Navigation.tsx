'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Início' },
    { href: '/ancient-roots', label: 'Raízes Antigas' },
    { href: '/industrial-revolution', label: 'Rev. Industrial' },
    { href: '/software-era', label: 'Era do Software' },
    { href: '/modern-future', label: 'Futuro' },
    { href: '/timeline', label: 'Linha do Tempo' },
    { href: '/pioneers', label: 'Pioneiros' },
  ]

  return (
    <header className="main-header">
      <div className="container">
        <nav className="nav-container">
          <Link href="/" className="logo">
            ⚖️ A Jornada da Qualidade
          </Link>

          <button
            className="mobile-menu-button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`main-nav ${mobileOpen ? 'mobile-open' : ''}`}>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </nav>
      </div>

      <style jsx>{`
        .mobile-menu-button {
          display: none;
          flex-direction: column;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
        }

        .mobile-menu-button span {
          width: 25px;
          height: 3px;
          background-color: white;
          transition: all 0.3s ease;
          border-radius: 2px;
        }

        @media (max-width: 768px) {
          .mobile-menu-button {
            display: flex;
          }

          .main-nav {
            position: fixed;
            top: 60px;
            left: 0;
            right: 0;
            background-color: var(--dark-gray);
            padding: 1rem;
            transform: translateX(-100%);
            transition: transform 0.3s ease;
            z-index: 999;
          }

          .main-nav.mobile-open {
            transform: translateX(0);
          }

          .main-nav ul {
            flex-direction: column;
          }
        }
      `}</style>
    </header>
  )
}
