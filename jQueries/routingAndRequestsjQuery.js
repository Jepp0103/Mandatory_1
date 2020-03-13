//Routing paragraph
var routingButton = "#routingButton"
var routingInfo = "#routingInfo"
$(routingButton).css("background-color", "#ff3333");
var routingClickCount = 0;
$(routingButton).text("Hide routing paragraph");

$(routingButton).click(() => {
    console.log(routingClickCount);

    if (routingClickCount % 2 == 0) {
      $(routingInfo).toggle();
      $(routingButton).text("Show routing paragraph");
      $(routingButton).css("background-color", "Chartreuse");
    }

    else {
      $(routingInfo).toggle();
      $(routingButton).text("Hide routing paragraph");
      $(routingButton).css("background-color", "#ff3333");
    }
    
    routingClickCount++;
}); 