export const scrollToSection = (sectionId: string): void => {
  if (sectionId === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const element = document.getElementById(sectionId);
  if (element) {
    const navbarHeight = 64;
    const top = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};
