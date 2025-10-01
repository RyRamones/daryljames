let menuIcon = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
        navLinks.forEach(links => {
         links.classList.remove('active');
         document.querySelector('header nav a[href*= ' + id + ']').classList.add('active');
        });
    }
    });
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// projects

document.addEventListener('DOMContentLoaded', function() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  // Add click event to all filter buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const filterValue = this.getAttribute('data-filter');
      
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Filter portfolio items
      portfolioItems.forEach(item => {
        // Show all items if "all" is selected
        if (filterValue === 'all') {
          item.style.display = 'block';
          item.style.animation = 'fadeIn 0.5s ease-in-out';
        } 
        // Show items that match the filter
        else if (item.classList.contains(filterValue)) {
          item.style.display = 'block';
          item.style.animation = 'fadeIn 0.5s ease-in-out';
        } 
        // Hide items that don't match
        else {
          item.style.display = 'none';
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
    const projectBoxes = document.querySelectorAll('.project-box img');
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.getElementById('close');

    // Add click event to each image
    projectBoxes.forEach(img => {
        img.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior
            modalImg.src = this.src; // Set the modal image to the clicked image source
            modal.style.display = 'flex'; // Show the modal
        });
    });

    // Close the modal when the close button is clicked
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none'; // Hide the modal
    });

    // Close the modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none'; // Hide the modal if the background is clicked
        }
    });
});

