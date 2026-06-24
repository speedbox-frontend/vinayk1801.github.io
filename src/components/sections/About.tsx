'use client';

import { motion } from 'framer-motion';
import { Code2, Users, Zap, Award } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/data';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { GlassCard } from '@/components/ui/GlassCard';

const stats = [
  { icon: Code2, label: 'Years Experience', value: `${PERSONAL_INFO.yearsOfExperience}+` },
  { icon: Zap, label: 'Performance Gain', value: PERSONAL_INFO.performanceImprovement },
  { icon: Users, label: 'Team Led', value: `${PERSONAL_INFO.teamSizeLed}+` },
  { icon: Award, label: 'Projects', value: `${PERSONAL_INFO.projectsDelivered}+` },
];

export function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-wider text-primary uppercase">About Me</span>
            <h2 className="heading-lg mt-3 mb-4">Engineering Excellence</h2>
            <p className="body-lg max-w-3xl mx-auto">
              I architect and build high-performance web applications that scale. My focus is on
              delivering clean, maintainable code with exceptional user experiences.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-50" />
              <div className="relative glass rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {PERSONAL_INFO.summary}
                </p>
                <div className="flex flex-wrap gap-3">
                  {['React.js', 'Next.js', 'TypeScript', 'Performance', 'Architecture'].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-white/5 rounded-full border border-white/10"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <GlassCard className="text-center h-full">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="glass rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">What I Bring to the Table</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Frontend Architecture',
                  description:
                    'Designing scalable component systems, state management patterns, and modular architectures that grow with your product.',
                },
                {
                  title: 'Performance Optimization',
                  description:
                    'Reducing bundle sizes, optimizing render cycles, and implementing lazy loading to achieve sub-second load times.',
                },
                {
                  title: 'Team Leadership',
                  description:
                    'Mentoring engineers, conducting code reviews, and establishing engineering best practices across teams.',
                },
              ].map((item) => (
                <div key={item.title} className="p-4">
                  <h4 className="font-semibold mb-2 text-primary">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}