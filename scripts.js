document.querySelector('.logo').addEventListener('mouseover', function() {
    document.querySelector('.navbar').style.backgroundColor = '#a5580b';
});

document.querySelector('.logo').addEventListener('mouseout', function() {
    document.querySelector('.navbar').style.backgroundColor = '#343436';
}); 

////

document.addEventListener('DOMContentLoaded', function () {
    var carousels = document.querySelectorAll('.feed-carousel');
  
    carousels.forEach(function (carousel) {
      var carouselItems = carousel.querySelectorAll('.feed-carousel-item');
      var prevButton = carousel.querySelector('.feed-carousel-control-prev');
      var nextButton = carousel.querySelector('.feed-carousel-control-next');
  
      var activeIndex = 0;
  
      function showItem(index) {
        carouselItems[activeIndex].classList.remove('active');
        carouselItems[index].classList.add('active');
        activeIndex = index;
      }
  
      prevButton.addEventListener('click', function () {
        var newIndex = activeIndex - 1;
        if (newIndex < 0) {
          newIndex = carouselItems.length - 1;
        }
        showItem(newIndex);
      });
  
      nextButton.addEventListener('click', function () {
        var newIndex = activeIndex + 1;
        if (newIndex >= carouselItems.length) {
          newIndex = 0;
        }
        showItem(newIndex);
      });
  
      // Configurar autoplay
      var interval = 3000; // Intervalo entre slides em milissegundos
      setInterval(function () {
        var newIndex = activeIndex + 1;
        if (newIndex >= carouselItems.length) {
          newIndex = 0;
        }
        showItem(newIndex);
      }, interval);
    });
  });

  /////

  const imgs = document.querySelectorAll('.imgs-footer img');

imgs.forEach(img => {
    img.addEventListener('mouseover', () => {
        imgs.forEach(otherImg => {
            if (otherImg !== img) {
                otherImg.style.filter = 'brightness(20%)';
            } else {
                otherImg.style.filter = 'brightness(100%)';
            }
        });
    });

    img.addEventListener('mouseout', () => {
        imgs.forEach(img => {
            img.style.filter = 'brightness(100%)';
        });
    });
});
