document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

const links = document.querySelectorAll('a.project-link');
const previewFrame = document.getElementById('preview');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        previewFrame.src = this.dataset.src;
    });
});

// Cursor Effects
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    link.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});








document.addEventListener('DOMContentLoaded', function() {
    const loadingOverlay = document.querySelector('.loading-overlay');
    const curtainLift = document.createElement('div');
    curtainLift.classList.add('curtain-lift');
    document.body.appendChild(curtainLift);

    setTimeout(() => {
        loadingOverlay.style.display = 'none';
    }, 6000); // Hide the loading overlay after 6 seconds (4s + 2s animation)
});