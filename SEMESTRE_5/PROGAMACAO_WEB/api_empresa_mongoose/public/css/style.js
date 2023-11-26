$( document ).ready(function() {
    
    // Bounce button
    
    $("#bouncebutton").click(function(){
        const element =  document.querySelector('.bouncebutton');
        element.classList.add('animated', 'bounce');
        setTimeout(function() {
          element.classList.remove('bounce'); 
  },        2000);
    });
    
    
});

