// Slider: 

var slider = document.getElementById('slider');
var sliderInner = document.getElementById('slider-inner');
var sliderHandle = document.getElementById('slider-handle');

var isMouseDown = false;

function handleMove(e) {
  if (!isMouseDown) return;

  // Handle touch events
  if (e.changedTouches) {
    e = e.changedTouches[0];
  }

  var x = e.clientX - slider.getBoundingClientRect().left;
  var width = slider.offsetWidth;

  if (x < 0) x = 0;
  if (x > width) x = width;

  var percentage = x / width;

  sliderInner.style.width = (percentage * 100) + '%';
  sliderHandle.style.left = x + 'px';
}

sliderHandle.addEventListener('mousedown', function(e) {
  isMouseDown = true;
});

sliderHandle.addEventListener('touchstart', function(e) {
  e.preventDefault();
  isMouseDown = true;
});

window.addEventListener('mouseup', function(e) {
  isMouseDown = false;
});

window.addEventListener('touchend', function(e) {
  e.preventDefault();
  isMouseDown = false;
});

window.addEventListener('mousemove', handleMove);
window.addEventListener('touchmove', handleMove);