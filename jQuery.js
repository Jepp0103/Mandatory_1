//jQuery
$(".introButton").css("background-color", "#ff3333");


var clickCount = 0;
$(".introButton").text("Hide intro");


$(".introButton").click(() => {
    console.log("Intro button clicked");
    console.log(clickCount);

    if(clickCount % 2 == 0) {
      $("#basicInfo").toggle();
      $(".introButton").text("Show intro");
      $(".introButton").css("background-color", "Chartreuse");
    }

    else {
      $("#basicInfo").toggle();
      $(".introButton").text("Hide intro");
      $(".introButton").css("background-color", "#ff3333");
    }
    
    clickCount++;
});


// $(".basicButton").