'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { EXPERIENCE } from '@/lib/data';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-wider text-primary uppercase">
              Experience
            </span>
            <h2 className="heading-lg mt-3 mb-4">Professional Journey</h2>
            <p className="body-lg max-w-2xl mx-auto">
              A track record of delivering enterprise-grade applications and leading engineering teams
              at fast-paced product companies.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/50 to-transparent" />

          {EXPERIENCE.map((job, index) => (
            <ScrollReveal key={job.id} delay={index * 0.15}>
              <div
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="ml-12 md:ml-0 glass rounded-2xl p-6 hover:glass-strong transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2 text-primary">
                      <Briefcase className="w-4 h-4" />
                      <span className="text-sm font-semibold">{job.company}</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">{job.role}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {job.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {job.location}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {job.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ChevronRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {job.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}