// Image Main page fancy control 
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    const parallax = document.querySelector('.landing-page');
    parallax.style.backgroundPositionY = `${scrollPosition * 0.75}px`; // Adjust the multiplier for desired speed
});

document.addEventListener('DOMContentLoaded', function() {
    const reviews = document.querySelectorAll('.reviews-subs');
    const dots = document.querySelectorAll('.dot');
    let currentReviewIndex = 0;
  
    function showReview(index) {
      reviews[currentReviewIndex].classList.remove('active');
      reviews[currentReviewIndex].classList.add('transition-out');
      dots[currentReviewIndex].classList.remove('active');
  
      currentReviewIndex = index;
  
      reviews[currentReviewIndex].classList.add('active');
      reviews[currentReviewIndex].classList.remove('transition-out');
      dots[currentReviewIndex].classList.add('active');
    }
  
    function autoChangeReview() {
      showReview((currentReviewIndex + 1) % reviews.length);
    }
  
    setInterval(autoChangeReview, 11000);
  
    dots.forEach((dot, index) => {
      dot.addEventListener('click', function() {
        if (currentReviewIndex !== index) {
          showReview(index);
        }
      });
    });
  });
  