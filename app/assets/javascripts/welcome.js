

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'vi',
    includedLanguages: 'en,de,ko,ru,ja,fr,th,zh-CN',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE 

  }, 'google_translate_element');
}





         $(document).ready(function(){
            $("li.item").tooltip();
});
