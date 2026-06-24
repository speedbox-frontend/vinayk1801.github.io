'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, Loader2 } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/data';
import { FloatingShape } from '@/components/3d/FloatingShape';
import { useToast } from '@/components/ui/Toast';

export function Hero() {
  const [isDownloading, setIsDownloading] = useState(false);
  const { showToast, updateToast } = useToast();

  const handleDownload = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isDownloading) return;

    setIsDownloading(true);
    const toastId = showToast('Preparing download...', 'loading', 0);

    try {
      const response = await fetch('/resume.pdf');
      if (!response.ok) throw new Error('File download failed');
      const blob = await response.blob();
      
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Vinay-Kumar-Resume.pdf');
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      link.parentNode?.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      updateToast(toastId, {
        message: 'Resume downloaded successfully!',
        type: 'success',
        duration: 4000,
      });
    } catch (error) {
      console.error('Download error:', error);
      updateToast(toastId, {
        message: 'Failed to download resume. Opening in new tab...',
        type: 'error',
        duration: 4000,
      });
      // Fallback: direct window open
      window.open('/resume.pdf', '_blank');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Floating shapes background */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingShape />
      </div>

      {/* Aurora gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-blob" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-[100px] animate-blob animation-delay-4000" />

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wide text-primary bg-primary/10 rounded-full border border-primary/20">
            Available for Opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          className="heading-xl mb-6"
        >
          Hi, I&apos;m{' '}
          <span className="gradient-text">{PERSONAL_INFO.name}</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-xl sm:text-2xl lg:text-3xl font-semibold text-muted-foreground mb-6"
        >
          {PERSONAL_INFO.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="body-lg max-w-2xl mx-auto mb-10"
        >
          {PERSONAL_INFO.tagline}. Specialized in React.js, Next.js, and TypeScript with
          proven expertise in scalable architecture and performance optimization.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a href="#contact" className="btn-primary w-full sm:w-auto">
            <Mail className="w-4 h-4" />
            Get in Touch
          </a>
          <a
            href="/resume.pdf"
            download="Vinay-Kumar-Resume.pdf"
            onClick={handleDownload}
            className={`btn-outline w-full sm:w-auto ${isDownloading ? 'opacity-70 pointer-events-none' : ''}`}
          >
            {isDownloading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Download className="w-4 h-4" />
            )}
            {isDownloading ? 'Preparing...' : 'Resume'}
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline w-full sm:w-auto"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline w-full sm:w-auto"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>Open to Work</span>
          </div>
          <span className="hidden sm:inline">|</span>
          <span>{PERSONAL_INFO.yearsOfExperience}+ Years Experience</span>
          <span className="hidden sm:inline">|</span>
          <span>{PERSONAL_INFO.projectsDelivered}+ Projects Delivered</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-xs font-medium">Scroll Down</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}