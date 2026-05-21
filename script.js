// ====== A. MOBILE NAVIGATION DRAWER TOGGLE ======
const menuToggle = document.getElementById('menuToggle');
const mobileDrawer = document.getElementById('mobileDrawer');

menuToggle.addEventListener('click', () => {
    mobileDrawer.classList.toggle('open');
});

// Close drawer if user clicks a link inside it
mobileDrawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
    });
});


// ====== B. AUTOMATIC HERO IMAGES SLIDESHOW ======
const slides = document.querySelectorAll('.hero-section .slide');
let currentSlideIndex = 0;
const slideIntervalTime = 5000; // Change image every 5 seconds

function showNextSlide() {
    // Remove active class from the current running slide
    slides[currentSlideIndex].classList.remove('active');
    
    // Increment index counter loop
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    
    // Add active slide style layer to current element
    slides[currentSlideIndex].classList.add('active');
}

// Start auto slide rotation execution
setInterval(showNextSlide, slideIntervalTime);


// ====== C. INTERACTIVE CONTACT FORM VALIDATION ======
function validateForm(event) {
    event.preventDefault(); // Stop form page from reloading defaultly
    
    const name = document.getElementById('userName').value.trim();
    const email = document.getElementById('userEmail').value.trim();
    const message = document.getElementById('userMessage').value.trim();
    const statusMsg = document.getElementById('formStatus');
    
    // Basic verification confirmation
    if (name.length < 3) {
        statusMsg.style.color = "red";
        statusMsg.innerText = "Please enter a valid full name.";
        return false;
    }
    
    if (message.length < 10) {
        statusMsg.style.color = "red";
        statusMsg.innerText = "Your message must be at least 10 characters long.";
        return false;
    }

    // Success response styling simulation
    statusMsg.style.color = "green";
    statusMsg.innerText = `Thank you, ${name}! Your message was successfully routed.`;
    
    // Clear out target inputs safely
    document.getElementById('contactForm').reset();
    return true;
}
// ====== D. ADMISSION FORM INTERACTION ======
function handleAdmissionSubmit(event) {
    event.preventDefault(); // Stop page refresh
    
    const studentName = document.getElementById('studentName').value.trim();
    const selectedCombo = document.getElementById('targetCombination').value;
    const admissionStatus = document.getElementById('admissionStatus');
    
    // Simulate processing request successfully
    admissionStatus.style.color = "green";
    admissionStatus.innerText = `Success! Application for "${studentName}" targeting ${selectedCombo} combination has been registered. The Registrar will contact your family soon.`;
    
    // Clear fields
    document.getElementById('admissionForm').reset();
    return true;
}
