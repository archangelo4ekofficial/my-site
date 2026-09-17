// Плавная прокрутка и активная навигация
document.addEventListener('DOMContentLoaded', () => {
  // Подсветка активной ссылки
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('nav__link--active');
    } else {
      link.classList.remove('nav__link--active');
    }
  });

  // Обработка кнопки "Записаться"
  const btn = document.querySelector('.btn-primary');
  if (btn) {
    btn.addEventListener('click', () => {
      alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    });
  }

  // Плавное появление секций при скролле
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(section);
  });
});