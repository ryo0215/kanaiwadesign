// .fade-in クラスの要素を取得
const targets = document.querySelectorAll('.fade-in');

// IntersectionObserverを使ってスクロール時にふわっと表示
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');  // .active クラスを追加して表示
      observer.unobserve(entry.target);       // 一度表示したら監視を解除
    }
  });
}, {
  threshold: 0.1 // 10%が見えたら発火
});

// 各 .fade-in 要素に対して IntersectionObserver を設定
targets.forEach(target => {
  observer.observe(target);
});

$('.hamburger').on('click',function(){

  $('.hamburger').toggleClass('is-active');
  $('.mobile-menu').toggleClass('is-active');
});
$('.mobile-menu a').on('click',function(){

  $('.hamburger').removeClass('is-active');
  $('.mobile-menu').removeClass('is-active');
});

document.querySelector('.menu-btn').addEventListener('click', function(){
  document.querySelector('.menu').classList.toggle('is-active');
});