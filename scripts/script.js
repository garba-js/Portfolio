/* =========================================================
   GARBA JOSEPH - RESPONSIVE PORTFOLIO INTERACTIONS
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Live Clock
    const clockEl = document.getElementById('current-time');
    function updateClock() {
        if (!clockEl) return;
        const now = new Date();
        const hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        clockEl.textContent = `${hours}:${minutes}`;
    }
    setInterval(updateClock, 1000);
    updateClock();

    // 2. Horizontal App-Style Page Switching & Touch Swipe
    const navButtons = document.querySelectorAll('.nav-btn');
    const pagesTrack = document.getElementById('pages-track');
    const indicator = document.getElementById('nav-indicator');
    const viewport = document.getElementById('pages-viewport');
    const pages = document.querySelectorAll('.portfolio-page');
    const jumpButtons = document.querySelectorAll('[data-jump]');

    let currentIndex = 0;
    const totalPages = navButtons.length;

    function switchPage(index) {
        if (index < 0 || index >= totalPages) return;
        currentIndex = index;

        // Slide horizontal track (WhatsApp / Facebook effect)
        const offsetPercent = -(currentIndex * (100 / totalPages));
        pagesTrack.style.transform = `translateX(${offsetPercent}%)`;

        // Move active indicator bar on mobile/tablet
        if (indicator) {
            indicator.style.transform = `translateX(${currentIndex * 100}%)`;
        }

        // Update active states
        navButtons.forEach((btn, i) => {
            btn.classList.toggle('active', i === currentIndex);
        });

        // Reset scroll to top on newly selected page
        if (pages[currentIndex]) {
            pages[currentIndex].scrollTop = 0;
        }
    }

    navButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.getAttribute('data-index'), 10);
            switchPage(idx);
        });
    });

    jumpButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.getAttribute('data-jump'), 10);
            switchPage(idx);
        });
    });

    // Touch Swipe Support for Mobile & Tablet
    let startX = 0;
    let startY = 0;

    viewport.addEventListener('touchstart', (e) => {
        startX = e.changedTouches[0].screenX;
        startY = e.changedTouches[0].screenY;
    }, { passive: true });

    viewport.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].screenX;
        const endY = e.changedTouches[0].screenY;
        const diffX = endX - startX;
        const diffY = endY - startY;

        if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX < 0 && currentIndex < totalPages - 1) {
                switchPage(currentIndex + 1);
            } else if (diffX > 0 && currentIndex > 0) {
                switchPage(currentIndex - 1);
            }
        }
    }, { passive: true });

    // 3. Project Details Modal
    const modal = document.getElementById('project-modal');
    const modalContent = document.getElementById('modal-content');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalCode = document.getElementById('modal-code');
    const modalDemo = document.getElementById('modal-demo');
    const closeModalBtn = document.getElementById('close-modal-btn');

    document.querySelectorAll('.open-modal-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
            modalTitle.textContent = btn.getAttribute('data-title');
            modalDesc.textContent = btn.getAttribute('data-desc');
            modalCode.href = btn.getAttribute('data-github');
            modalDemo.href = btn.getAttribute('data-demo');

            modal.classList.add('open');
            modal.setAttribute('aria-hidden', 'false');
            requestAnimationFrame(() => {
                modalContent.classList.add('visible');
            });
        });
    });

    function closeModal() {
        modalContent.classList.remove('visible');
        setTimeout(() => {
            modal.classList.remove('open');
            modal.setAttribute('aria-hidden', 'true');
        }, 200);
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // 4. Contact Form & Toast Feedback
    const contactForm = document.getElementById('contact-form');
    const toast = document.getElementById('toast');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            contactForm.reset();

            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        });
    }
});
