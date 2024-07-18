const button = document.getElementById("loadButton");




button.addEventListener("click", function () {
  button.innerHTML = `<div class="load"></div>`;
  
  setTimeout(function () {
    
    location.replace("submit.html")
  }, 4000);
});

//ボタンを押したとき、リンク先に4秒後に飛ぶ処理//