import { createIcons, icons } from "lucide";

createIcons({ icons });

const siteHeader = document.querySelector<HTMLElement>(".site-header");
const mobileToggle =
  document.querySelector<HTMLButtonElement>(".mobile-toggle");
const mobileMenu = document.querySelector<HTMLElement>("#mobile-menu");
const mobileLinks =
  document.querySelectorAll<HTMLAnchorElement>(".mobile-menu nav a");

if (siteHeader && mobileToggle && mobileMenu) {
  const isDesktop = () => window.innerWidth > 940;

  const openMenu = () => {
    siteHeader.classList.add("is-open");
    mobileToggle.setAttribute("aria-expanded", "true");
    mobileMenu.setAttribute("aria-hidden", "false");
    mobileMenu.removeAttribute("inert");
  };

  const closeMenu = () => {
    siteHeader.classList.remove("is-open");
    mobileToggle.setAttribute("aria-expanded", "false");
    mobileMenu.setAttribute("aria-hidden", "true");
    mobileMenu.setAttribute("inert", "");
  };

  mobileToggle.addEventListener("click", () => {
    if (siteHeader.classList.contains("is-open")) {
      closeMenu();
      return;
    }

    openMenu();
  });

  closeMenu();

  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (isDesktop()) {
      closeMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (!siteHeader.classList.contains("is-open") || isDesktop()) {
      return;
    }

    if (!(event.target instanceof Node)) {
      return;
    }

    if (!siteHeader.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}
