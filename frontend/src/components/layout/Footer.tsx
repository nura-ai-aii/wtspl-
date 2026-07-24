import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.brandSection}>
          <Link href="/" className={styles.logo}>
            <Image src="/logo.png" alt="WhatsMaster Tech Solutions" width={180} height={40} style={{ objectFit: 'contain' }} />
          </Link>
          <p className={styles.description}>
            Empowering businesses through artificial intelligence, innovation, and digital transformation. Building the future, today.
          </p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialIcon} aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#" className={styles.socialIcon} aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href="#" className={styles.socialIcon} aria-label="Facebook"><Facebook size={20} /></a>
            <a href="#" className={styles.socialIcon} aria-label="Instagram"><Instagram size={20} /></a>
          </div>
        </div>

        <div className={styles.linkGroup}>
          <h3 className={styles.groupTitle}>Company</h3>
          <ul className={styles.linkList}>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/founder">Founder</Link></li>
            <li><Link href="/career">Careers</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.linkGroup}>
          <h3 className={styles.groupTitle}>Services</h3>
          <ul className={styles.linkList}>
            <li><Link href="/services/ai">Artificial Intelligence</Link></li>
            <li><Link href="/services/cyber-security">Cyber Security</Link></li>
            <li><Link href="/services/software">Software Development</Link></li>
            <li><Link href="/services/automation">Business Automation</Link></li>
          </ul>
        </div>

        <div className={styles.contactSection}>
          <h3 className={styles.groupTitle}>Contact Info</h3>
          <ul className={styles.contactList}>
            <li>
              <Mail size={18} className={styles.contactIcon} />
              <span>contact@whatsmaster.tech</span>
            </li>
            <li>
              <Phone size={18} className={styles.contactIcon} />
              <span>+91 9876543210</span>
            </li>
            <li>
              <MapPin size={18} className={styles.contactIcon} />
              <span>Kolkata, West Bengal, India</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomContent}`}>
          <p>© {new Date().getFullYear()} WhatsMaster Tech Solutions Private Limited. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
