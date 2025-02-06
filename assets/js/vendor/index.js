AOS.init();


// Read More Functionality JS Start
$('.subpage-readmore-btn').click(function (e) {
    e.preventDefault();
  
    const $this = $(this); // Cache $(this) for better performance
    const content = $this.parent().prev(); // Select the content to toggle
  
    content.stop(true, true).slideToggle(1200); // Set animation duration to 10 seconds
  
    // Update the button text and icon
    $this.html(function (_, currentHtml) {
      return currentHtml.includes('Read More') 
        ? 'Read Less <i class="fa-solid fa-angle-up"></i>' 
        : 'Read More <i class="fa-solid fa-angle-down"></i>';
    });
  });
  // Read More Functionality JS end


  // Toggle Menu Functionaliy Start

$(document).ready(function () {
  $(".menu-icon").click(function () {
    $("body").addClass("menuToggle");
  });
  $(".close-icon").click(function () {
    $("body").removeClass("menuToggle");
  });
});  
// Toggle Menu Functionaliy End