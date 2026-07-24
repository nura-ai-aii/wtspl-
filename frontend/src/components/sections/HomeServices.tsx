import { Code, Cpu, Shield, Smartphone, Globe, Bot } from 'lucide-react';
import Section from '../layout/Section';
import Card from '../ui/Card';
import styles from './HomeServices.module.css';

const services = [
  {
    icon: <Bot size={32} />,
    title: 'Artificial Intelligence',
    description: 'Enterprise AI solutions, predictive analytics, and smart automation systems.',
    color: 'var(--electric-cyan)'
  },
  {
    icon: <Shield size={32} />,
    title: 'Cyber Security',
    description: 'Military-grade encryption, security audits, and continuous threat monitoring.',
    color: 'var(--primary-blue)'
  },
  {
    icon: <Globe size={32} />,
    title: 'Web Development',
    description: 'High-performance, scalable, and visually stunning web applications.',
    color: 'var(--royal-purple)'
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile experiences for iOS and Android.',
    color: 'var(--electric-cyan)'
  },
  {
    icon: <Cpu size={32} />,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure, serverless computing, and AWS integrations.',
    color: 'var(--primary-blue)'
  },
  {
    icon: <Code size={32} />,
    title: 'Custom Software',
    description: 'Bespoke enterprise software tailored exactly to your business needs.',
    color: 'var(--royal-purple)'
  }
];

export default function HomeServices() {
  return (
    <Section 
      title="Our Premium Services" 
      subtitle="Cutting-edge technological solutions engineered to scale your business securely and efficiently."
      badge="What We Do"
      variant="dark"
    >
      <div className={styles.grid}>
        {services.map((service, index) => (
          <Card key={index} variant="neon" hoverEffect="glow" className={styles.serviceCard}>
            <div className={styles.iconWrapper} style={{ color: service.color }}>
              {service.icon}
            </div>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDesc}>{service.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
