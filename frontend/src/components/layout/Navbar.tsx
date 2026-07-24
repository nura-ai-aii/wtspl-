"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <Image src="/logo.png" alt="WhatsMaster Tech Solutions" width={180} height={40} style={{ objectFit: 'contain' }} />
        </Link>

        <nav className={styles.desktopNav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <div className={styles.dropdown}>
            <button className={styles.navLink}>
              Company <ChevronDown size={16} />
            </button>
            <div className={styles.dropdownMenu}>
              <Link href="/about" className={styles.dropdownItem}>About Us</Link>
              <Link href="/founder" className={styles.dropdownItem}>Founder</Link>
              <Link href="/career" className={styles.dropdownItem}>Career</Link>
            </div>
          </div>
          <Link href="/services" className={styles.navLink}>Services</Link>
          <Link href="/products" className={styles.navLink}>Products</Link>
          <Link href="/pricing" className={styles.navLink}>Pricing</Link>
        </nav>

        <div className={styles.navActions}>
          <Link href="/contact" className={styles.contactBtn}>Contact Us</Link>
          <button 
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/" className={styles.mobileLink}>Home</Link>
          <Link href="/about" className={styles.mobileLink}>About</Link>
          <Link href="/services" className={styles.mobileLink}>Services</Link>
          <Link href="/products" className={styles.mobileLink}>Products</Link>
          <Link href="/contact" className={styles.mobileLink}>Contact</Link>
        </div>
      )}
    </header>
  );
}
