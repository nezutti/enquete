window.addEventListener('scroll', function () {

  const forget = document.getElementById('forget');
  const forget_height=forget.getBoundingClientRect().bottom;

      // 1400pxまでスクロールされたらページ遷移
      if (window.scrollY>= forget_height) {
        this.setTimeout(function () {
          window.location.href = 'goodJob.html';
        },5000)// 5秒後にgoodJob.htmlに移行//
      }
    });