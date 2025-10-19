import { actionButtons, getDotIndex } from './data.js';

class LessonSlider {
  constructor(containerEl, options = {}) {
    this.container = containerEl;
    this.currentBookIndex = 0;
    this.currentLessonIndex = 0;
    this.lessonsData = [];
    this.startX = 0;
    this.currentX = 0;
    this.isDragging = false;
    this.threshold = options.threshold || 50;
    
    this.onSlideChange = options.onSlideChange || null;
    
    this.init();
  }

  init() {
    this.render();
    this.bindEvents();
  }

  // 設定當前冊次資料
  setBook(bookIndex, lessonsData) {
    this.currentBookIndex = bookIndex;
    this.lessonsData = lessonsData;
    this.currentLessonIndex = 0;
    this.updateView();
  }

  render() {
    // 每組 2 個按鈕，共 4 組
    let rowsHTML = '';
    for (let i = 0; i < actionButtons.length; i += 2) {
      const btn1 = actionButtons[i];
      const btn2 = actionButtons[i + 1];
      
      rowsHTML += `
        <div class="action-row">
          <div class="action-item">
            <div class="action-icon-wrapper ${btn1.bgColor}">
              <img src="${btn1.icon}" alt="${btn1.name}" class="action-icon">
            </div>
            <button class="btn-action">${btn1.name}</button>
          </div>
          ${btn2 ? `
          <div class="action-item">
            <div class="action-icon-wrapper ${btn2.bgColor}">
              <img src="${btn2.icon}" alt="${btn2.name}" class="action-icon">
            </div>
            <button class="btn-action">${btn2.name}</button>
          </div>
          ` : ''}
        </div>
      `;
    }

    this.container.innerHTML = `
      <div class="lesson-wrapper">
        <div class="lesson-content">
          <h2 class="lesson-title"></h2>
          <div class="actions-section">
            ${rowsHTML}
          </div>
        </div>
      </div>
    `;

    this.wrapper = this.container.querySelector('.lesson-wrapper');
    this.titleEl = this.container.querySelector('.lesson-title');
  }

  bindEvents() {
    this.wrapper.addEventListener('touchstart', (e) => this.handleStart(e), { passive: true });
    this.wrapper.addEventListener('touchmove', (e) => this.handleMove(e), { passive: false });
    this.wrapper.addEventListener('touchend', (e) => this.handleEnd(e));

    this.wrapper.addEventListener('mousedown', (e) => this.handleStart(e));
    this.wrapper.addEventListener('mousemove', (e) => this.handleMove(e));
    this.wrapper.addEventListener('mouseup', (e) => this.handleEnd(e));
    this.wrapper.addEventListener('mouseleave', (e) => this.handleEnd(e));

    this.wrapper.addEventListener('dragstart', (e) => e.preventDefault());
  }

  handleStart(e) {
    this.isDragging = true;
    this.startX = this.getClientX(e);
    this.wrapper.style.transition = 'none';
  }

  handleMove(e) {
    if (!this.isDragging) return;
    
    this.currentX = this.getClientX(e);
    const diff = this.currentX - this.startX;

    const limitedDiff = diff * 0.3;
    this.wrapper.style.transform = `translateX(${limitedDiff}px)`;

    if (Math.abs(diff) > 10) {
      e.preventDefault();
    }
  }

  handleEnd(e) {
    if (!this.isDragging) return;
    
    this.isDragging = false;
    const diff = this.currentX - this.startX;

    if (Math.abs(diff) > this.threshold) {
      if (diff > 0) {
        this.prev();
      } else {
        this.next();
      }
    } else {
      this.resetPosition();
    }
  }

  getClientX(e) {
    return e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
  }

  resetPosition() {
    this.wrapper.style.transition = 'transform 0.3s ease';
    this.wrapper.style.transform = 'translateX(0)';
  }

  next() {
    if (this.currentLessonIndex < this.lessonsData.length - 1) {
      this.currentLessonIndex++;
      this.updateView();
    } else {
      this.resetPosition();
    }
  }

  prev() {
    if (this.currentLessonIndex > 0) {
      this.currentLessonIndex--;
      this.updateView();
    } else {
      this.resetPosition();
    }
  }

  goTo(index) {
    if (index >= 0 && index < this.lessonsData.length) {
      this.currentLessonIndex = index;
      this.updateView();
    }
  }

  updateView() {
    if (!this.lessonsData || this.lessonsData.length === 0) return;
    
    const lesson = this.lessonsData[this.currentLessonIndex];
    
    this.wrapper.style.backgroundImage = `url('${lesson.bgImage}')`;
    this.wrapper.style.transition = 'background-image 0.5s ease, transform 0.3s ease';
    this.wrapper.style.transform = 'translateX(0)';

    this.titleEl.textContent = lesson.title;

    if (this.onSlideChange) {
      const dotIndex = getDotIndex(this.currentLessonIndex);
      this.onSlideChange(this.currentLessonIndex, dotIndex);
    }
  }

  getCurrentIndex() {
    return this.currentLessonIndex;
  }
}

export default LessonSlider;