let nav = document.querySelector("nav");
  window.onscroll = function() {
    if(document.documentElement.scrollTop > 0){
      nav.classList.add("sticky");
    }else {
      nav.classList.remove("sticky");
    }
  }

// JavaScript to handle the Read More functionality
document.querySelectorAll('.read-more-btn').forEach(button => {
button.addEventListener('click', function () {
  const description = this.previousElementSibling; // Get the description element
  
  // If the text is collapsed (max-height set to 120px), expand it
  if (description.style.maxHeight === '120px' || description.style.maxHeight === '') {
    description.style.maxHeight = 'none'; // Expand the text
    this.textContent = 'Read Less'; // Change button text
  } else {
    description.style.maxHeight = '120px'; // Collapse the text
    this.textContent = 'Read More'; // Change button text
  }
});
});

