
import React from 'react';

interface StatItemProps {
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => (
  <div className="flex flex-col items-center">
    <span className="text-xl md:text-2xl font-semibold">{value}</span>
    <span className="text-xs text-impact-muted">{label}</span>
  </div>
);

const StatsSection: React.FC = () => {
  return (
    <section className="py-8 mb-8">
      <div className="container mx-auto">
        <h2 className="section-heading text-center mb-6">What People are Saying</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
          <StatItem value="750+" label="Happy Customers" />
          <StatItem value="250+" label="Artisans Supported" />
          <StatItem value="320+" label="Products" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
