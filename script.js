
document.addEventListener('DOMContentLoaded', function () {
  var yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  var path = window.location.pathname.split('/').pop() || 'index.html';
  var links = document.querySelectorAll('.menu a');
  links.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === path) {
      link.classList.add('active');
    }
  });
});
