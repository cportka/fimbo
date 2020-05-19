 $(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('body,html').animate({
        scrollTop: $(hash).offset().top
        }, 1200, function(){
        window.location.hash = hash;
       });
       } 
      });
  });

  var width = $(window).width(); 
  window.onscroll = function(){
    if ((width >= 1000)){
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            $("#header").css("background","#fff");
            $("#header").css("color","#000");
            $("#header").css("box-shadow","0px 0px 20px rgba(0,0,0,0.09)");
            $("#header").css("padding","4vh 4vw");
            $("#navigation a").hover(function(){
                $(this).css("border-bottom","2px solid rgb(255, 44, 90)");
            },function(){
                $(this).css("border-bottom","2px solid transparent");
            });
        }else{
            $("#header").css("background","transparent");
            $("#header").css("color","#fff");
            $("#header").css("box-shadow","0px 0px 0px rgba(0,0,0,0)");
            $("#header").css("padding","6vh 4vw");
            $("#navigation a").hover(function(){
                $(this).css("border-bottom","2px solid #fff");
            },function(){
                $(this).css("border-bottom","2px solid transparent");
            });
        }
    }
    }
    
    setTimeout(function(){
        $("#loading").addClass("animated fadeOut");
        setTimeout(function(){
          $("#loading").removeClass("animated fadeOut");
          $("#loading").css("display","none");
        },600);
    },1200);
  
 function incrementValue() {
    //Get old number and increment
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;

    //Set new number
    document.getElementById('number').value = value;
    document.getElementById('number').innerHTML = value;

    var magic = "\t";
    //Set some magical numbers
    if (value >= 2) {
        magic = magic + " 2";
    }
    if (value >= 7) {
        magic = magic + " 7";
    }
    if (value >= 17) {
        magic = magic + " 17";
    }
    if (value >= 22) {
        magic = magic + " 22";
    }
    if (value >= 27) {
        magic = magic + " 27";
    }
    if (value >= 77) {
        magic = magic + " 77";
    }
    if (value >= 101) {
        magic = magic + " 101!";
    }
    document.getElementById('magic').innerHTML = magic;
}