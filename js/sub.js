(()=>{
  'use strict';

  const $SUBMIT = document.getElementById('submit');
  const $TEXT = 'お問い合わせ内容を送信します。OKボタンを押すとページ遷移し、\nお問い合わせ内容の送信が完了いたします。\nページ遷移しない場合は必要事項を確認し入力してください。';

    $SUBMIT.addEventListener('click', () =>{
      alert($TEXT);
    });
})();