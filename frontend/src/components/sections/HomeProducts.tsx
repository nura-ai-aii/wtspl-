import Section from '../layout/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';
import styles from './HomeProducts.module.css';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    title: 'AI Business Management',
    description: 'A complete enterprise ERP system powered by artificial intelligence to automate daily workflows, manage HR, and optimize inventory.',
    tag: 'Enterprise'
  },
  {
    title: 'WhatsMaster Automation Platform',
    description: 'Advanced WhatsApp business API integration with AI chatbots for customer support and automated marketing.',
    tag: 'SaaS'
  },
  {
    title: 'Cyber AI Scanner',
    description: 'Predictive vulnerability scanner that uses machine learning to identify security flaws before they are exploited.',
    tag: 'Security'
  }
];

export default function HomeProducts() {
  return (
    <Section 
      title="Our Flagship Products" 
      subtitle="Scalable SaaS platforms and intelligent automation systems built for the future."
      badge="Products"
      variant="gradient"
    >
      <div className={styles.grid}>
        {products.map((product, index) => (
          <Card key={index} variant="glass" hoverEffect="lift" className={styles.productCard}>
            <div className={styles.tag}>{product.tag}</div>
            <h3 className={styles.productTitle}>{product.title}</h3>
            <p className={styles.productDesc}>{product.description}</p>
            <div className={styles.action}>
              <Button variant="ghost" size="sm" className={styles.learnMore}>
                Learn More <ArrowRight size={16} />
              </Button>
            </div>
          </Card>
        ))}
      </div>
      
      <div className={styles.viewAll}>
        <Button variant="outline">View All Products</Button>
      </div>
    </Section>
  );
}
