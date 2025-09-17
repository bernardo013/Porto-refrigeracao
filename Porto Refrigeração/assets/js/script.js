// Basic interactions for Porto Refrigeração Landing
(function () {
  const menuToggle = document.getElementById('menuToggle');
  const modernNav = document.querySelector('.modern-nav');
  const yearEl = document.getElementById('currentYear');

  // Current year
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  if (menuToggle && modernNav) {
    menuToggle.addEventListener('click', function () {
      const isOpen = modernNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  // Smooth scroll for same-page anchors
  document.addEventListener('click', function (e) {
    const target = e.target.closest('a[href^="#"]');
    if (!target) return;
    const id = target.getAttribute('href');
    if (!id || id === '#') return;
    const dest = document.querySelector(id);
    if (!dest) return;
    e.preventDefault();
    dest.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (modernNav && modernNav.classList.contains('open')) {
      modernNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Search functionality
  const searchInput = document.querySelector('.search-input');
  const searchBtn = document.querySelector('.search-btn');
  
  function handleSearch(e) {
    e.preventDefault();
    // Sempre rola para a seção de serviços independente do que foi digitado
    const servicosSection = document.getElementById('servicos');
    if (servicosSection) {
      servicosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Evento do botão de pesquisa
  if (searchBtn) {
    searchBtn.addEventListener('click', handleSearch);
  }

  // Evento do Enter no campo de pesquisa
  if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        handleSearch(e);
      }
    });
  }

  // Tabs functionality
  function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        const targetTab = this.getAttribute('data-tab');
        const parentSection = this.closest('.services-tabs-section');
        
        // Remove active class from all buttons in this section
        const sectionButtons = parentSection.querySelectorAll('.tab-btn');
        const sectionContents = parentSection.querySelectorAll('.tab-content');
        
        sectionButtons.forEach(btn => btn.classList.remove('active'));
        sectionContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        this.classList.add('active');
        const targetContent = parentSection.querySelector(`#${targetTab}`);
        if (targetContent) {
          targetContent.classList.add('active');
        }
      });
    });
  }

  // Initialize tabs
  initTabs();

  // Scroll to Top functionality
  const scrollToTopBtn = document.getElementById('scrollToTop');
  
  if (scrollToTopBtn) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
      } else {
        scrollToTopBtn.classList.remove('visible');
      }
    });

    // Scroll to top when clicked
    scrollToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
})();



