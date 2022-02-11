// 검색창 이미지까지 클릭시 창이 길게 늘어나도록, 창을 끄면 없어지도록
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});
searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});
searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear(); // 현재 연도 표시