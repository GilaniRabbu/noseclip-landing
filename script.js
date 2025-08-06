const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar-nav');
const sidebarLinks = sidebar.querySelectorAll('a');

hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('open');
});

// Close sidebar when a link is clicked (optional UX)
sidebarLinks.forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('open');
  });
});

// Optional: Close sidebar when clicking outside
document.addEventListener('click', (e) => {
  if (
    !sidebar.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    sidebar.classList.remove('open');
  }
});

// Close sidebar on window resize >= 1024
window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) {
    sidebar.classList.remove('open');
  }
});





function toggleSection(header) {
  const content = header.nextElementSibling;
  const chevron = header.querySelector('.chevron');

  // Toggle active class
  content.classList.toggle('active');
  chevron.classList.toggle('rotated');

  // Close other sections
  const allHeaders = document.querySelectorAll('.expandable-header');
  allHeaders.forEach(otherHeader => {
    if (otherHeader !== header) {
      const otherContent = otherHeader.nextElementSibling;
      const otherChevron = otherHeader.querySelector('.chevron');
      otherContent.classList.remove('active');
      otherChevron.classList.remove('rotated');
    }
  });
}





const productImages = [
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=600&fit=crop",
  "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=600&fit=crop",
  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=600&fit=crop",
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=600&fit=crop"
];

const features = [
  "Boost performance",
  "Stop snoring",
  "Optimized Airflow",
  "100% Drug Free"
];

const mainImage = document.getElementById("mainImage");
const thumbnails = document.getElementById("thumbnails");
const featuresDiv = document.getElementById("features");
const cartBtn = document.getElementById("addToCartBtn");
const cartText = document.getElementById("cartText");

// Populate thumbnails
productImages.forEach((img, index) => {
  const btn = document.createElement("button");
  const image = document.createElement("img");
  image.src = img;
  btn.appendChild(image);
  btn.addEventListener("click", () => {
    mainImage.src = img;
  });
  thumbnails.appendChild(btn);
});

// Populate features
features.forEach(f => {
  const item = document.createElement("div");
  item.innerHTML = `<span style="background: #ff6900; width: 8px; height: 8px; border-radius: 50%; display: inline-block;"></span><span>${f}</span>`;
  featuresDiv.appendChild(item);
});

// Add to cart behavior
cartBtn.addEventListener("click", async () => {
  cartBtn.disabled = true;
  cartText.innerHTML = `<span class="loader"></span> Adding to Cart...`;
  await new Promise(resolve => setTimeout(resolve, 3000));
  cartText.innerHTML = "Add to Cart →";
  cartBtn.disabled = false;
});





// Image loading optimization only
function optimizeImages() {
  const images = document.querySelectorAll('img');

  images.forEach(img => {
    img.addEventListener('load', function () {
      this.parentElement.style.opacity = '1';
    });

    img.addEventListener('error', function () {
      this.alt = 'Image could not be loaded';
      this.style.background = '#666';
    });
  });
}

// Initialize only image features
document.addEventListener('DOMContentLoaded', function () {
  optimizeImages();
});



// Handle Order Now button click
function handleOrderClick(event) {
  event.preventDefault();

  const button = event.currentTarget;
  const originalText = button.innerHTML;

  // Show loading state
  button.innerHTML = 'Processing...';
  button.style.pointerEvents = 'none';

  // Simulate order process
  setTimeout(() => {
    button.innerHTML = 'Order Placed! <span class="arrow">✓</span>';
    button.style.background = '#28a745';

    // Reset after 3 seconds
    setTimeout(() => {
      button.innerHTML = originalText;
      button.style.background = '#ff6b35';
      button.style.pointerEvents = 'auto';
    }, 3000);
  }, 2000);
}

// Copyright year update
function updateCopyrightYear() {
  const currentYear = new Date().getFullYear();
  const copyrightElement = document.querySelector('.copyright');
  if (copyrightElement) {
    copyrightElement.textContent = copyrightElement.textContent.replace('2024', currentYear);
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', function () {
  updateCopyrightYear();
});






// Testimonials data
const testimonials = [
  {
    text: "Finally, a product that actually helps with my snoring! My partner sleeps better, and so do I.",
    name: "Maria T",
    rating: "4.9",
    avatar: "./img/testimonial.png"
  },
  {
    text: "I was skeptical at first, but this nasal clip has completely changed my sleep quality. No more restless nights!",
    name: "Sarah M",
    rating: "5.0",
    avatar: "./img/testimonial.png"
  },
  {
    text: "As an athlete, proper breathing is crucial. This product has improved my performance and recovery significantly.",
    name: "Mora T",
    rating: "4.8",
    avatar: "./img/testimonial.png"
  },
  {
    text: "My allergies used to keep me up all night. Since using this nasal clip, I sleep peacefully through the night.",
    name: "Jennifer M",
    rating: "4.9",
    avatar: "./img/testimonial.png"
  }
];

let currentTestimonial = 0;

// Initialize testimonials
function initTestimonials() {
  updateTestimonial();
}

// Update testimonial content
function updateTestimonial() {
  const testimonial = testimonials[currentTestimonial];
  const card = document.getElementById('testimonialCard');

  // Add fade out effect
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';

  setTimeout(() => {
    // Update content
    document.getElementById('testimonialText').textContent = testimonial.text;
    document.getElementById('customerName').textContent = testimonial.name;
    document.getElementById('customerRating').textContent = testimonial.rating;
    document.getElementById('customerAvatar').src = testimonial.avatar;
    document.getElementById('customerAvatar').alt = `${testimonial.name} photo`;

    // Update navigation buttons
    updateNavigationButtons();

    // Fade in effect
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  }, 200);
}

// Update navigation button states
function updateNavigationButtons() {
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  // Reset classes
  prevBtn.classList.remove('active');
  nextBtn.classList.remove('active');

  // Disable/enable buttons
  prevBtn.disabled = currentTestimonial === 0;
  nextBtn.disabled = currentTestimonial === testimonials.length - 1;

  // Add active class to available button
  if (currentTestimonial > 0) {
    prevBtn.classList.add('active');
  }
  if (currentTestimonial < testimonials.length - 1) {
    nextBtn.classList.add('active');
  }
}

// Change testimonial
function changeTestimonial(direction) {
  const newIndex = currentTestimonial + direction;

  if (newIndex >= 0 && newIndex < testimonials.length) {
    currentTestimonial = newIndex;
    updateTestimonial();
  }
}

// Auto-play functionality
let autoPlayInterval;

function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    if (currentTestimonial < testimonials.length - 1) {
      changeTestimonial(1);
    } else {
      currentTestimonial = 0;
      updateTestimonial();
    }
  }, 4000);
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

// Keyboard navigation
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') {
    changeTestimonial(-1);
  } else if (e.key === 'ArrowRight') {
    changeTestimonial(1);
  }
});

// Touch/swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function (e) {
  touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function (e) {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const swipeThreshold = 50;
  const diff = touchStartX - touchEndX;

  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      // Swipe left - next testimonial
      changeTestimonial(1);
    } else {
      // Swipe right - previous testimonial
      changeTestimonial(-1);
    }
  }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function () {
  initTestimonials();

  // Start auto-play
  startAutoPlay();

  // Pause auto-play on hover
  const carousel = document.querySelector('.testimonial-carousel');
  carousel.addEventListener('mouseenter', stopAutoPlay);
  carousel.addEventListener('mouseleave', startAutoPlay);
});