'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mountain, Phone, Mail, Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <Link href="/" className="logo">
            <span className="logo-icon"><Mountain size={22} /></span>
            Adventure<span>Sewa</span>
          </Link>

          <nav className="nav-links">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? 'active' : ''}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link href="/contact" className="btn btn-primary header-cta">
            Get a Quote
          </Link>

          <button
            className={`mobile-toggle ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {links.map(link => (
          <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
            {link.label}
          </Link>
        ))}
        <Link href="/contact" className="btn btn-primary" onClick={() => setMobileOpen(false)}>
          Get a Quote
        </Link>
      </div>
    </>
  );
}
