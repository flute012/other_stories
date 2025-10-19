import { getTotalDots, getFirstLessonIndex } from './data.js';

class NavDots {
  constructor(containerEl, options = {}) {
    this.container = containerEl;
    this.currentDot = 0;
    
    this.onDotClick = options.onDotClick || null;
    
    this.init();
  }

  init() {
    this.render();
    this.bindEvents();
  }

  render() {
    const totalDots = getTotalDots();
    let dotsHTML = '';
    
    for (let i = 0; i < totalDots; i++) {
      const activeClass = i === this.currentDot ? 'active' : '';
      dotsHTML += `<span class="nav-dot ${activeClass}" data-index="${i}"></span>`;
    }
    
    this.container.innerHTML = `
      <div class="nav-dots-wrapper">
        ${dotsHTML}
      </div>
    `;

    this.dots = this.container.querySelectorAll('.nav-dot');
  }

  bindEvents() {
    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        this.setActive(index);
        
        if (this.onDotClick) {
          const lessonIndex = getFirstLessonIndex(index);
          this.onDotClick(lessonIndex);
        }
      });
    });
  }

  setActive(index) {
    const totalDots = getTotalDots();
    if (index < 0 || index >= totalDots) return;
    
    this.dots.forEach(dot => dot.classList.remove('active'));
    
    this.dots[index].classList.add('active');
    this.currentDot = index;
  }

  getCurrentDot() {
    return this.currentDot;
  }
}

export default NavDots;