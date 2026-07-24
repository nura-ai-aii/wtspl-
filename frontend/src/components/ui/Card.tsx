import { HTMLAttributes, forwardRef } from 'react';
import styles from './Card.module.css';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'glass' | 'solid' | 'neon';
  hoverEffect?: 'lift' | 'glow' | 'none';
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'glass', hoverEffect = 'lift', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`${styles.card} ${styles[variant]} ${styles[hoverEffect]} ${className || ''}`}
        {...props}
      >
        {variant === 'neon' && <div className={styles.neonBorder} />}
        <div className={styles.cardContent}>
          {children}
        </div>
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
