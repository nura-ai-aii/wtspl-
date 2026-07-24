import Section from '../layout/Section';
import styles from './HomeFounder.module.css';

export default function HomeFounder() {
  return (
    <Section 
      title="Meet The Visionary" 
      badge="Founder"
      variant="default"
    >
      <div className={styles.founderContainer}>
        <div className={styles.imageWrapper}>
          {/* Placeholder for actual founder image */}
          <div className={styles.imagePlaceholder}>
            <div className={styles.glowOverlay}></div>
          </div>
        </div>
        
        <div className={styles.content}>
          <h3 className={styles.name}>Nur Mohammad Mandal</h3>
          <p className={styles.role}>Founder & CEO, WhatsMaster Tech Solutions</p>
          
          <div className={styles.bio}>
            <p>
              With a deep passion for software engineering, artificial intelligence, and business automation, Nur Mohammad Mandal founded WhatsMaster Tech Solutions to bridge the gap between complex technological innovations and accessible enterprise solutions.
            </p>
            <p>
              His vision is to empower individuals and businesses globally by providing secure, scalable digital products, automated systems, and next-generation AI platforms that drive future growth.
            </p>
          </div>
          
          <div className={styles.highlights}>
            <div className={styles.highlightItem}>
              <span className={styles.highlightNumber}>AI</span>
              <span className={styles.highlightText}>Innovation Focus</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.highlightNumber}>B2B</span>
              <span className={styles.highlightText}>Software Solutions</span>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.highlightNumber}>Global</span>
              <span className={styles.highlightText}>Future Vision</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
