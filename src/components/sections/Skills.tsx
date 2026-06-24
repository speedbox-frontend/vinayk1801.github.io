'use client';

import { motion } from 'framer-motion';
import { SKILLS } from '@/lib/data';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-wider text-primary uppercase">
              Skills
            </span>
            <h2 className="heading-lg mt-3 mb-4">Technical Expertise</h2>
            <p className="body-lg max-w-2xl mx-auto">
              A comprehensive toolkit built over years of building production-grade applications
              across diverse domains.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((category, categoryIndex) => (
            <ScrollReveal key={category.category} delay={categoryIndex * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="glass rounded-2xl p-6 h-full"
              >
                <h3 className="text-lg font-semibold mb-6 text-primary">{category.category}</h3>
                <div className="space-y-4">
                  {category.items.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Tech stack pills */}
        <ScrollReveal>
          <div className="mt-16 text-center">
            <h3 className="text-lg font-semibold mb-6">Technologies I Work With</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {Array.from(
                new Set(SKILLS.flatMap((cat) => cat.items.map((item) => item.name)))
              ).map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 text-sm font-medium bg-white/5 rounded-full border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-colors cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}