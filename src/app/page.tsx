import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.gradientMesh}></div>
          <div className={styles.particleSystem}></div>
        </div>

        <div className={`container ${styles.heroContent}`}>
          <div className={styles.badge}>
            <span className="text-gradient">WhatsMaster Tech Solutions</span>
          </div>
          
          <h1 className={styles.title}>
            Empowering Businesses Through <br />
            <span className="text-gradient">Artificial Intelligence</span>, <br />
            Innovation and Digital Transformation.
          </h1>
          
          <p className={styles.subtitle}>
            WhatsMaster Tech Solutions Private Limited develops intelligent software, automation platforms, websites, AI solutions, and digital technologies that help individuals and businesses succeed.
          </p>

          <div className={styles.ctaGroup}>
            <button className={`${styles.primaryButton} neon-border`}>
              Explore Products
            </button>
            <button className={styles.secondaryButton}>
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* More sections will be added here: Stats, Services, Products, AI, Founder, Testimonials */}
    </main>
  );
}
