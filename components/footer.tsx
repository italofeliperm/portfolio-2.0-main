"use client";

import {
  Github,
  Linkedin,
  Mail,
  Globe,
  Clock,
  ExternalLink,
  ArrowUpRight,
  MessageSquare,
  Code2,
} from "lucide-react";
import Image from "next/image";
import logoGabriel from "@/assets/images/logo-gabriel.png";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useI18nStore, translations } from "@/lib/i18n";

export function Footer() {
  const { language } = useI18nStore();
  const t = translations[language];

  return (
    <footer className="bg-background/95 border-t border-border/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* LinkedIn Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden bg-card/50">
            <a
              href="https://linkedin.com/in/gabrielanselmoa"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 relative"
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors relative">
                    <Linkedin className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                    LinkedIn
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80">
                    {t.contact.connectLinkedIn}
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </Card>

          {/* Email Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden bg-card/50">
            <a
              href="mailto:gabrielanselmo29@gmail.com"
              className="block p-6 relative"
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors relative">
                    <MessageSquare className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                    Email
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80">
                    {t.contact.sendEmail}
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </Card>

          {/* GitHub Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden bg-card/50">
            <a
              href="https://github.com/gabrielanselmoa"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 relative"
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors relative">
                    <Code2 className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                    GitHub
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80">
                    {t.contact.checkGithub}
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border/40">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2 text-muted-foreground group hover:text-primary transition-colors">
              <div className="p-2 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors">
                <Globe className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <span title={t.footer.location.title}>
                {t.footer.location.label}
              </span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground group hover:text-primary transition-colors">
              <div className="p-2 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors">
                <Clock className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <span title={t.footer.availability.title}>
                {t.footer.availability.label}
              </span>
            </div>
          </div>

          {/* <div className="">
            <Image
              src={logoGabriel}
              alt="Gabriel Logo"
              width={30}
              height={30}
                className="w-auto h-6 opacity-50 hover:opacity-100 transition-opacity"
            />
          </div> */}
            <p className="text-sm text-muted-foreground text-center">
              {t.footer.copyright}
            </p>
        </div>
      </div>
    </footer>
  );
}
