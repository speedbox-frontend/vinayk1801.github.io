'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Layers, ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '@/lib/data';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { ProjectCaseStudy } from './ProjectCaseStudy';
import { ProjectItem } from '@/types';

const FILTERS = ['All', 'React.js', 'Next.js', 'Three.js', 'Redux', 'Stripe'];

export function Projects() {
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((project) => project.techStack.includes(activeFilter));

  return (
    <section id="projects" className="section-padding relative">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-wider text-primary uppercase">
              Projects
            </span>
            <h2 className="heading-lg mt-3 mb-4">Featured Work</h2>
            <p className="body-lg max-w-2xl mx-auto">
              Production-grade applications built with modern architecture, performance in mind,
              and measurable business impact. Click on any project to explore its full case study.
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Filter Bar */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-xl mx-auto">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold border transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-primary text-white border-primary shadow-glow'
                    : 'bg-white/5 text-muted-foreground border-white/10 hover:bg-white/10 hover:text-foreground'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                onClick={() => setActiveProject(project)}
                transition={{ duration: 0.3 }}
                className="group glass rounded-2xl overflow-hidden h-full flex flex-col cursor-pointer border border-white/5 hover:border-primary/20 hover:shadow-glow transition-all duration-300"
              >
                {/* Project image placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-grid-white/[0.02]" />
                  <Layers className="w-12 h-12 text-white/20 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-2 py-1 text-xs font-medium bg-white/10 rounded-md backdrop-blur-sm">
                      {project.role}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-primary/20 border border-primary/30 p-2 rounded-full backdrop-blur-sm">
                    <ArrowUpRight className="w-4 h-4 text-primary" />
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="View source code"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="View live demo"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {project.metrics.slice(0, 2).map((metric) => (
                      <div
                        key={metric.label}
                        className="text-center p-2 rounded-lg bg-white/5"
                      >
                        <div className="text-sm font-bold gradient-text">{metric.value}</div>
                        <div className="text-[10px] text-muted-foreground leading-tight uppercase font-medium">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-medium bg-primary/10 text-primary rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-2 py-0.5 text-[10px] font-medium bg-white/5 text-muted-foreground rounded-md">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <ProjectCaseStudy
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}