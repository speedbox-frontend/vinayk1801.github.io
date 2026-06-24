'use client';

import { motion } from 'framer-motion';
import { Code2, Heart, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO, NAV_LINKS, SOCIAL_LINKS } from '@/lib/data';

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 text-lg font-bold mb-4">
              <Code2 className="w-6 h-6 text-primary" />
              <span className="gradient-text">{PERSONAL_INFO.name}</span>
            </a>
            <p className="text-sm text-muted-foreground max-w-sm">
              Senior Software Developer specializing in React.js, Next.js, and TypeScript.
              Building high-performance web applications with scalable architecture.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-500" /> using Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}