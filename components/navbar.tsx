"use client";

import { useState, useEffect } from "react";
import { Menu, X, Home, User, Briefcase, Mail, ArrowUp, Folder } from "lucide-react";
import GlobeLottie from "./icons/globe-lottie";

import { Button } from "@/components/ui/button";
import { useI18nStore, translations } from "@/lib/i18n";
import Link from "next/link";
import Image from "next/image";
import logoGabriel from "@/assets/images/logo-gabriel.png";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const navIcons = {
  about: User,
  projects: Folder,
  experience: Briefcase,
  contact: Mail,
};


export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useScrollSpy();

  const { language, setLanguage } = useI18nStore();
  const t = translations[language];

  const toggleLanguage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLanguage(language === "en" ? "pt" : "en");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);




  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Altura da navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  const resetActive = () => {
    setIsOpen(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    
    // Force a scroll update after animation completes
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "instant"
      });
    }, 500); // Wait for smooth scroll to complete
  };


  const navLinks = [
    { href: "about", label: t.nav.about },
    { href: "projects", label: t.nav.projects },
    { href: "experience", label: t.nav.experience },
    { href: "contact", label: t.nav.contact },
  ];

  return (
    <>
      <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled || isOpen
        ? "bg-background/95 backdrop-blur-sm border-b border-border/40"
        : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <button
                onClick={resetActive}

              className="hover:opacity-80 transition-opacity"
              >
              <Image
                src={logoGabriel}
                alt="Gabriel Logo"
                width={40}
                height={40}
                className="w-auto h-8"
                priority
              />
              </button>
            </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`nav-link text-muted-foreground hover:text-primary transition-colors ${
                  activeSection === link.href ? "active" : ""
                }`}
              >
                {link.label}
              </button>
            ))}
            <Button
              variant="ghost"
              onClick={toggleLanguage}
                className="text-foreground relative pl-2 pr-4 py-2 group"
            >
              <div className="absolute inset-0 group-hover:bg-foreground/5 rounded-lg transition-all duration-300" />
                <div className="relative flex items-center gap-0 font-medium">
                  <GlobeLottie />
                  <span className="-ml-1.5">{language.toUpperCase()}</span>
                </div>
            </Button>

          </div>

            {/* Mobile Language Switch */}
            <div className="md:hidden">
                <Button
                  variant="ghost"
                  onClick={toggleLanguage}
                    className="text-foreground relative pl-2 pr-3 py-2 group"
                >
                  <div className="absolute inset-0 group-hover:bg-foreground/5 rounded-lg transition-all duration-300" />
                    <div className="relative flex items-center gap-0 font-medium">
                      <GlobeLottie />
                      <span className="-ml-1.5">{language.toUpperCase()}</span>
                    </div>
                </Button>

            </div>

        </div>
      </div>

          </nav>

            {/* Mobile Bottom Navigation */}
            <div className={`md:hidden fixed bottom-4 left-4 right-4 bg-background/90 border border-border/40 z-50 rounded-full shadow-lg transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
              !scrolled 
              ? 'opacity-0 translate-y-full pointer-events-none blur-xl scale-95 rotate-3' 
              : 'opacity-100 translate-y-0 backdrop-blur-sm blur-0 scale-100 rotate-0'
            }`}>
          <div className="flex items-center justify-center h-16 relative">
            <div className="flex items-center justify-between w-full max-w-[85%] mx-auto">
            <div className="flex items-center gap-4 sm:gap-6">
              {navLinks.slice(0, 2).map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`flex flex-col items-center justify-center w-12 sm:w-14 rounded-full transition-all duration-200 ${
                activeSection === link.href ? "text-primary scale-110" : "text-muted-foreground hover:text-primary hover:scale-105"
                }`}
              >
                {link.href === "about" ? (
                  <User className="h-5 w-5 mb-1" />
                ) : (
                  <Folder className="h-5 w-5 mb-1" />
                )}

                <span className="text-[10px] font-medium leading-none">{link.label}</span>
              </button>
              ))}
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <div className="w-10 h-10">
              <button
                onClick={resetActive}
                className="w-full h-full flex items-center justify-center rounded-full transition-all duration-200 bg-primary text-primary-foreground hover:scale-110 hover:bg-primary/90 shadow-lg border-2 border-background"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-6">
              {navLinks.slice(2).map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`flex flex-col items-center justify-center w-12 sm:w-14 rounded-full transition-all duration-200 ${
                activeSection === link.href ? "text-primary scale-110" : "text-muted-foreground hover:text-primary hover:scale-105"
                }`}
              >
                {link.href === "experience" ? (
                  <Briefcase className="h-5 w-5 mb-1" />
                ) : (
                  <Mail className="h-5 w-5 mb-1" />
                )}

                <span className="text-[10px] font-medium leading-none">{link.label}</span>
              </button>
              ))}
            </div>
            </div>
          </div>
          </div>
        </>
      );
}
