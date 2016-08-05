$(document).ready(function() {
  $(".toplink").on("click", function(e) {
    if (this.hash !== "") {
      var hash = this.hash;
      console.log(hash);
      console.log($(hash).offset().top)
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2000, function() {
        window.location.hash = hash;
      });
    }
  });

  $('.thumbs').on("click",function(e){
    e.preventDefault();
    console.log(e);
    var imgUrl = $(this).data("img-url");
    $('#lbIMG').attr("src", imgUrl);
    $('.lightbox').show();
    $('.lightbox').on("click",function(){
      $('.lightbox').hide();
    });
  });
})



/* $(document).ready(function(){
 $("#about").click(function(event){
 	event.preventDefault();
 $('body', 'html').animate({scrollTop: 200px});
      });
  });*/



