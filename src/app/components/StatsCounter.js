'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

function Counter({ end, duration = 2000, label, icon }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime = null;
          const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            setCount(Math.floor(progress * end));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [end, duration, hasAnimated]);

  return (
    <motion.div
      ref={counterRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass p-6 rounded-xl text-center shadow-lg border border-gray-300 dark:border-gray-700 hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300 hover:scale-105 bg-white dark:bg-transparent"
    >
      <div className="text-5xl mb-2">{icon}</div>
      <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
        {count}+
      </div>
      <div className="text-gray-700 dark:text-gray-400 font-medium">{label}</div>
    </motion.div>
  );
}

export default function StatsCounter() {
  const stats = [
    { end: 120, label: 'Heroes', icon: '⚔️' },
    { end: 6, label: 'Roles', icon: '🎯' },
    { end: 50, label: 'Counters', icon: '🛡️' },
    { end: 1000, label: 'Players Helped', icon: '👥' },
  ];

  return (
    <section className="mb-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Counter
            key={index}
            end={stat.end}
            label={stat.label}
            icon={stat.icon}
          />
        ))}
      </div>
    </section>
  );
}
