//Dark theme
$("#darkButton").text("Dark theme");
$("#darkButton").css("background-color", "black");
$("#darkButton").css("color", "white");
$("a").css("color", "black");
var darkClickCount = 0;

var tags = "a, p, li, ol, pre, h1, h4, h5, section";

$("#darkButton").click(() => {
    console.log(darkClickCount);
    if (darkClickCount % 2 == 0) {
        $("#darkButton").text("White theme");
        $("#darkButton").css("background-color", "white");
        $("#darkButton").css("color", "black");
        $("body").css("background-color", "black");
        $(tags).css("color", "white");
    }

    else {
        $("#darkButton").text("Dark theme");
        $("#darkButton").css("background-color", "black");
        $("#darkButton").css("color", "white");
        $("body").css("background-color", "white");
        $(tags).css("color", "black");
    }
    darkClickCount++;
});

  // Widget - jquery ready start
  $(document).ready(function() {
        // jQuery code
    $('.widget-btn').click(function(e) {
        e.preventDefault();
            $(".widget").toggleClass('active');
        });
    }); 
