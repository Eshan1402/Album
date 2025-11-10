// Enhanced Custom Cursor with Trail Effect
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

let mouseX = 0;
let mouseY = 0;
let followerX = 0;
let followerY = 0;

// Smooth cursor movement
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
    
    // Create cursor trail
    createCursorTrail(e.clientX, e.clientY);
});

// Animate follower cursor with delay
function animateFollower() {
    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;
    
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top = followerY + 'px';
    
    requestAnimationFrame(animateFollower);
}
animateFollower();

// Create cursor trail effect
function createCursorTrail(x, y) {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = x + 'px';
    trail.style.top = y + 'px';
    document.body.appendChild(trail);
    
    setTimeout(() => {
        trail.remove();
    }, 600);
}

// Hover effects on interactive elements
const hoverElements = document.querySelectorAll('a, button, .photo-card, .lightbox-close');
hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-grow');
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-grow');
    });
    
    el.addEventListener('mousedown', () => {
        cursor.classList.add('cursor-click');
    });
    
    el.addEventListener('mouseup', () => {
        cursor.classList.remove('cursor-click');
    });
});

// Special effect for photo cards
const photoCards = document.querySelectorAll('.photo-card');
photoCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Add subtle glow effect based on cursor position
        card.style.setProperty('--mouse-x', x + 'px');
        card.style.setProperty('--mouse-y', y + 'px');
    });
});

// Hide cursor on mobile devices
if (window.matchMedia('(max-width: 768px)').matches) {
    cursor.style.display = 'none';
    cursorFollower.style.display = 'none';
    document.body.style.cursor = 'default';
}
