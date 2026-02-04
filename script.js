// Animate skill bars on load
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelectorAll('.skill-fill').forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width + '%';
        });
    }, 1400);
});
