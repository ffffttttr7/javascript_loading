// JavaScript
//console.log('Hello world!');

// 定数の定義
const loading = document.getElementById('loading');

// cssクラスを追加する関数
function animation(){
  loading.classList.add('loaded');
}

// window.addEventListener('load', animation);

// 指定秒後に動作させる
window.setTimeout( animation, 1000 );