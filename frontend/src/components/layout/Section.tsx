import { HTMLAttributes, forwardRef } from 'react';
import styles from './Section.module.css';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  badge?: string;
  containerClass?: string;
  variant?: 'default' | 'dark' | 'gradient';
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, title, subtitle, badge, containerClass, variant = 'default', children, ...props }, ref) => {
    return (
      <section 
        ref={ref}
        className={`${styles.section} ${styles[variant]} ${className || ''}`}
        {...props}
      >
        <div className={`container ${containerClass || ''}`}>
          {(badge || title || subtitle) && (
            <div className={styles.header}>
              {badge && (
                <div className={styles.badge}>
                  <span className="text-gradient">{badge}</span>
                </div>
              )}
              {title && <h2 className={styles.title}>{title}</h2>}
              {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            </div>
          )}
          
          <div className={styles.content}>
            {children}
          </div>
        </div>
      </section>
    );
  }
);

Section.displayName = 'Section';

export default Section;
