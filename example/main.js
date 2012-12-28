$(document).ready(function() {
      $('.text p').fitText(3.3);
      $('.quote p').fitText(2.9);
      $('h1.title').fitText(1);
      $('.text p, h1.title ').antiquify();
      
      function toggleButton() {
        var applied = true;
        $(".toggle").click( function() {
          if (applied == true) {
            $('.howdy').each(function(){
              $(this).replaceWith($(this).contents());
             });
            $('.text p, h1.title').removeAttr('style');
            $('.text p').fitText(3.3);
            $('.quote p').fitText(2.9);
            $('h1.title').fitText(1);  
            applied = false;
          } else if (applied == false) {  
            $('.text p, h1.title').antiquify();  
            $('.text p').fitText(3.3);
            $('.quote p').fitText(2.9);
            $('h1.title').fitText(1);
            applied = true;
          }
          
        });
      }
    
    toggleButton();
});