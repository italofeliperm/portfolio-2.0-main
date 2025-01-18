import { useState, useEffect } from "react";

export function useScrollSpy() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let isScrolling = false;

    const handleScroll = () => {
      if (!isScrolling) {
        isScrolling = true;
        clearTimeout(timeoutId);
      }
      
      timeoutId = setTimeout(() => {
        const sections = document.querySelectorAll("section[id]");
        const scrollPosition = Math.round(window.scrollY);

        // More precise top detection
        if (scrollPosition <= 1) {
          setActiveSection("");
          isScrolling = false;
          return;
        }

        const scrollWithOffset = scrollPosition + 100;
        let foundActive = false;

        const sortedSections = Array.from(sections).sort((a, b) => {
          const aTop = (a as HTMLElement).offsetTop;
          const bTop = (b as HTMLElement).offsetTop;
          return aTop - bTop;
        });

        for (const section of sortedSections) {
          const sectionTop = (section as HTMLElement).offsetTop;
          const sectionHeight = section.clientHeight;
          const sectionId = section.getAttribute("id") || "";

          if (
            scrollWithOffset >= sectionTop &&
            scrollWithOffset < sectionTop + sectionHeight
          ) {
            setActiveSection(sectionId);
            foundActive = true;
            break;
          }
        }

        if (!foundActive) {
          setActiveSection("");
        }
        isScrolling = false;
      }, 10); // Shorter delay for more responsive updates
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return activeSection;
}
