
const body = document.body;
const toggle = document.getElementById('themeToggle');

// Load theme from localStorage
const currentTheme = localStorage.getItem('theme') || 'light';
body.classList.add(currentTheme);

toggle.addEventListener('click', () => {
  if (body.classList.contains('light')) {
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
  }
});
























function clickimg(smallimg){
    var fullImg=document.getElementById("imagebox");
    fullImg.src = smallimg.src
}







//our see more button option section 1
const seeMoreBtn = document.getElementById('seeMoreBtn');
const moreText = document.getElementById('moreText');
seeMoreBtn.addEventListener('click', () => {
    moreText.classList.toggle('hidden');          
    seeMoreBtn.textContent = moreText.classList.contains('hidden') ? 'see more' : 'see less'; 
    // متن کا بٹن تبدیل کریں
});