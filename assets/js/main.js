// Main JavaScript for Wedding Album Website

// Photo data - ALL photos from Pictures folder
const photoFiles = [
    'IMG20251107012839.JPEG',
    'IMG_4356.heic', 'IMG_4357.heic', 'IMG_4358.heic', 'IMG_4359.heic', 'IMG_4360.heic',
    'IMG_4361.jpg', 'IMG_4362.jpg', 'IMG_4363.jpg', 'IMG_4364.heic', 'IMG_4365.heic',
    'IMG_4366.heic', 'IMG_4367.heic', 'IMG_4368.heic', 'IMG_4369.HEIC', 'IMG_4370.jpg',
    'IMG_4371.jpg', 'IMG_4372.jpg', 'IMG_4373.jpg', 'IMG_4374.jpg', 'IMG_4375.heic',
    'IMG_4376.heic', 'IMG_4377.heic', 'IMG_4378.heic', 'IMG_4379.HEIC', 'IMG_4380.HEIC',
    'IMG_4381.HEIC', 'IMG_4382.HEIC', 'IMG_4383.HEIC', 'IMG_4384.HEIC', 'IMG_4385.HEIC',
    'IMG_4386.HEIC', 'IMG_4387.HEIC', 'IMG_4388.HEIC', 'IMG_4389.heic', 'IMG_4390.heic',
    'IMG_4391.heic', 'IMG_4392.heic', 'IMG_4393.heic', 'IMG_4394.heic', 'IMG_4395.heic',
    'IMG_4396.heic', 'IMG_4397.heic', 'IMG_4398.heic', 'IMG_4399.heic', 'IMG_4400.heic',
    'IMG_4401.heic', 'IMG_4402.heic', 'IMG_4403.heic', 'IMG_4404.heic', 'IMG_4405.heic',
    'IMG_4406.heic', 'IMG_4407.heic', 'IMG_4408.heic', 'IMG_4409.heic', 'IMG_4410.heic',
    'IMG_4411.heic', 'IMG_4412.heic', 'IMG_4413.heic', 'IMG_4414.heic', 'IMG_4415.heic',
    'IMG_4416.heic', 'IMG_4417.heic', 'IMG_4418.heic', 'IMG_4419.heic', 'IMG_4420.heic',
    'IMG_4421.heic', 'IMG_4422.heic', 'IMG_4423.heic', 'IMG_4424.heic', 'IMG_4425.heic',
    'IMG_4426.heic', 'IMG_4427.HEIC', 'IMG_4428.HEIC', 'IMG_4429.HEIC', 'IMG_4431.heic',
    'IMG_4433.heic', 'IMG_4434.heic', 'IMG_4435.heic', 'IMG_4436.HEIC', 'IMG_4437.heic',
    'IMG_4438.HEIC', 'IMG_4439.HEIC', 'IMG_4440.heic', 'IMG_4441.heic', 'IMG_4442.heic',
    'IMG_4443.heic', 'IMG_4444.heic', 'IMG_4445.heic', 'IMG_4446.heic', 'IMG_4447.heic',
    'IMG_4448.heic', 'IMG_4449.heic', 'IMG_4450.heic', 'IMG_4452.heic', 'IMG_4453.heic',
    'IMG_4454.heic', 'IMG_4455.heic', 'IMG_4456.heic', 'IMG_4457.heic', 'IMG_4458.heic',
    'IMG_4459.heic', 'IMG_4460.heic', 'IMG_4461.heic', 'IMG_4462.heic', 'IMG_4463.heic',
    'IMG_4464.HEIC', 'IMG_4465.HEIC', 'IMG_4466.HEIC', 'IMG_4467.HEIC', 'IMG_4468.heic',
    'IMG_4469.heic', 'IMG_4470.heic', 'IMG_4471.heic', 'IMG_4472.heic', 'IMG_4473.heic',
    'IMG_4474.heic', 'IMG_4475.heic', 'IMG_4476.heic', 'IMG_4477.heic', 'IMG_4478.heic',
    'IMG_4479.heic', 'IMG_4480.heic', 'IMG_4481.heic', 'IMG_4482.heic', 'IMG_4483.heic',
    'IMG_4484.heic', 'IMG_4485.heic', 'IMG_4486.heic', 'IMG_4487.heic', 'IMG_4488.heic',
    'IMG_4489.heic', 'IMG_4490.heic', 'IMG_4491.heic', 'IMG_4492.heic', 'IMG_4493.heic',
    'IMG_4494.heic', 'IMG_4495.heic', 'IMG_4496.heic', 'IMG_4497.HEIC', 'IMG_4498.heic',
    'IMG_4499.heic', 'IMG_4500.heic', 'IMG_4501.heic', 'IMG_4502.heic'
];

// Pagination settings
const PHOTOS_PER_PAGE = 30;
let currentPage = 1;
let totalPages = Math.ceil(photoFiles.length / PHOTOS_PER_PAGE);

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializePagination();
    initializeGallery();
    initializeLightbox();
    addScrollAnimations();
    updatePaginationInfo();
});

// Initialize pagination
function initializePagination() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', goToPreviousPage);
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', goToNextPage);
    }
    
    // Update button states
    updatePaginationButtons();
}

// Initialize photo gallery
function initializeGallery() {
    renderCurrentPage();
}

// Render photos for current page
function renderCurrentPage() {
    const gallery = document.getElementById('photoGallery');
    
    if (!gallery) return;
    
    // Clear existing content
    gallery.innerHTML = '';
    
    // Calculate start and end indices for current page
    const startIndex = (currentPage - 1) * PHOTOS_PER_PAGE;
    const endIndex = Math.min(startIndex + PHOTOS_PER_PAGE, photoFiles.length);
    
    // Get photos for current page
    const currentPagePhotos = photoFiles.slice(startIndex, endIndex);
    
    // Create photo cards dynamically
    currentPagePhotos.forEach((photoFile, index) => {
        const globalIndex = startIndex + index;
        const photoCard = createPhotoCard(photoFile, globalIndex);
        gallery.appendChild(photoCard);
    });
    
    // Scroll to top of gallery
    gallery.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Update pagination info
    updatePaginationInfo();
    updatePaginationButtons();
}

// Create a photo card element
function createPhotoCard(photoFile, index) {
    const card = document.createElement('div');
    card.className = 'photo-card';
    card.style.animationDelay = `${Math.min((index % PHOTOS_PER_PAGE) * 0.05, 2)}s`;
    
    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'photo-card-image-wrapper';
    
    const img = document.createElement('img');
    // Use path relative to root for GitHub Pages
    img.src = `Pictures/${photoFile}`;
    img.alt = `Wedding Photo ${index + 1}`;
    img.loading = 'lazy';
    
    // Handle image load error - try alternative paths
    img.onerror = function() {
        // Try different path formats for GitHub Pages
        if (this.src.includes('Pictures/')) {
            this.src = `./Pictures/${photoFile}`;
        } else if (this.src.includes('./Pictures/')) {
            this.src = `/Pictures/${photoFile}`;
        } else {
            // Fallback placeholder
            this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23FFE4E6" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23FF69B4" font-family="Arial" font-size="20"%3EPhoto Loading...%3C/text%3E%3C/svg%3E';
        }
    };
    
    const overlay = document.createElement('div');
    overlay.className = 'photo-card-overlay';
    const icon = document.createElement('i');
    icon.className = 'fas fa-expand';
    overlay.appendChild(icon);
    
    imageWrapper.appendChild(img);
    imageWrapper.appendChild(overlay);
    
    const actions = document.createElement('div');
    actions.className = 'photo-card-actions';
    
    const downloadBtn = document.createElement('div');
    downloadBtn.className = 'download-button';
    const downloadLink = document.createElement('a');
    downloadLink.href = `Pictures/${photoFile}`;
    downloadLink.download = `Shivangi_Siddharth_Wedding_${index + 1}.${photoFile.split('.').pop().toLowerCase()}`;
    downloadLink.innerHTML = '<i class="fas fa-download"></i> Download Photo';
    downloadBtn.appendChild(downloadLink);
    actions.appendChild(downloadBtn);
    
    card.appendChild(imageWrapper);
    card.appendChild(actions);
    
    // Add click event to open lightbox
    card.addEventListener('click', (e) => {
        // Don't open lightbox if clicking download button
        if (!e.target.closest('.download-button')) {
            openLightbox(img.src, downloadLink.href, downloadLink.download);
        }
    });
    
    return card;
}

// Pagination functions
function goToNextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        renderCurrentPage();
    }
}

function goToPreviousPage() {
    if (currentPage > 1) {
        currentPage--;
        renderCurrentPage();
    }
}

function updatePaginationInfo() {
    const currentPageEl = document.getElementById('currentPage');
    const totalPagesEl = document.getElementById('totalPages');
    const showingStartEl = document.getElementById('showingStart');
    const showingEndEl = document.getElementById('showingEnd');
    const totalPhotosEl = document.getElementById('totalPhotos');
    
    if (currentPageEl) currentPageEl.textContent = currentPage;
    if (totalPagesEl) totalPagesEl.textContent = totalPages;
    
    const startIndex = (currentPage - 1) * PHOTOS_PER_PAGE + 1;
    const endIndex = Math.min(currentPage * PHOTOS_PER_PAGE, photoFiles.length);
    
    if (showingStartEl) showingStartEl.textContent = startIndex;
    if (showingEndEl) showingEndEl.textContent = endIndex;
    if (totalPhotosEl) totalPhotosEl.textContent = photoFiles.length;
}

function updatePaginationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) {
        if (currentPage === 1) {
            prevBtn.classList.add('disabled');
            prevBtn.disabled = true;
        } else {
            prevBtn.classList.remove('disabled');
            prevBtn.disabled = false;
        }
    }
    
    if (nextBtn) {
        if (currentPage === totalPages) {
            nextBtn.classList.add('disabled');
            nextBtn.disabled = true;
        } else {
            nextBtn.classList.remove('disabled');
            nextBtn.disabled = false;
        }
    }
}

// Initialize lightbox
function initializeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxDownload = document.getElementById('lightboxDownload');
    
    if (!lightbox || !lightboxClose) return;
    
    // Close lightbox
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}

// Open lightbox with image
function openLightbox(imageSrc, downloadHref, downloadName) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxDownload = document.getElementById('lightboxDownload');
    
    if (!lightbox || !lightboxImg) return;
    
    lightboxImg.src = imageSrc;
    lightboxDownload.href = downloadHref;
    lightboxDownload.download = downloadName;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;
    
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// Add scroll animations
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all photo cards
    const photoCards = document.querySelectorAll('.photo-card');
    photoCards.forEach(card => {
        observer.observe(card);
    });
}

// Add loading state
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger photo card animations
    const photoCards = document.querySelectorAll('.photo-card');
    photoCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, Math.min(index * 50, 2000)); // Cap at 2 seconds
    });
});
