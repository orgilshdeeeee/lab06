// dark mode товч
var themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', function () {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    themeBtn.textContent = 'Гэрэлтэй горим';
  } else {
    themeBtn.textContent = 'Харанхуй горим';
  }
});

// flip товч
var buttons = document.querySelectorAll('.flipBtn');
buttons.forEach(function (btn) {
  btn.addEventListener('click', function () {
    btn.parentElement.classList.toggle('flipped');
  });
});