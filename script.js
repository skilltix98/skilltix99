// script.js

// Scroll Animation
window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('visible');
        } else {
            reveals[i].classList.remove('visible');
        }
    }
}

// Modal Logic
const courseModal = document.getElementById('courseModal');
const loginModal = document.getElementById('loginModal');
const loginBtn = document.getElementById('loginBtn');
const courseInput = document.getElementById('courseInput');

// Open Course Modal
function openCourseModal(courseName) {
    courseModal.style.display = 'flex';
    document.getElementById('modalTitle').innerText = 'Apply for ' + courseName;
    courseInput.value = courseName;
}

// Open Login Modal
loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'flex';
});

// Close Modals
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target == courseModal) {
        courseModal.style.display = "none";
    }
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
}

// Frontend Only Form Handling (Simulation)
function submitForm(event, type) {
    event.preventDefault(); // Stop page reload
    
    // Simulate processing time
    const btn = event.target.querySelector('button');
    const originalText = btn.innerHTML;
    btn.innerHTML = 'Sending...';
    
    setTimeout(() => {
        alert(type + ' Successful! We will contact you soon.');
        event.target.reset(); // Clear form
        btn.innerHTML = originalText;
        
        // Close modals if open
        if(type === 'Course Application') closeModal('courseModal');
        if(type === 'Login') closeModal('loginModal');
        
    }, 1500);
}