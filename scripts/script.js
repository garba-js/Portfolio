// Portfolio JavaScript Logic

function switchTab(tabId) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show selected tab
    const targetTab = document.getElementById(tabId);
    if (targetTab) {
        targetTab.classList.add('active');
    }

    // Update nav buttons style
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        const iconDiv = btn.querySelector('div');
        if (btn.getAttribute('data-target') === tabId) {
            btn.classList.remove('text-slate-400');
            btn.classList.add('text-brand-500');
            iconDiv.classList.add('border-brand-500', 'bg-brand-500/10');
        } else {
            btn.classList.remove('text-brand-500');
            btn.classList.add('text-slate-400');
            iconDiv.classList.remove('border-brand-500', 'bg-brand-500/10');
        }
    });

    // Scroll phone view back to top
    const phoneScreen = document.querySelector('.phone-screen');
    if (phoneScreen) {
        phoneScreen.scrollTop = 0;
    }
}

let isAudioOn = true;
function toggleAudio() {
    isAudioOn = !isAudioOn;
    const btn = document.getElementById('audioBtn').querySelector('i');
    if (isAudioOn) {
        btn.className = 'fa-solid fa-volume-high text-xs';
    } else {
        btn.className = 'fa-solid fa-volume-xmark text-xs text-rose-400';
    }
}

let isDark = true;
function toggleTheme() {
    isDark = !isDark;
    const icon = document.getElementById('themeIcon');
    if (isDark) {
        icon.className = 'fa-solid fa-moon text-xs';
    } else {
        icon.className = 'fa-solid fa-sun text-xs text-amber-400';
    }
}

function triggerVibrate() {
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
}

function openShare() {
    if (navigator.share) {
        navigator.share({
            title: 'Mobile Portfolio',
            url: window.location.href
        }).catch(() => {});
    } else {
        alert('Portfolio link copied to clipboard!');
    }
}
