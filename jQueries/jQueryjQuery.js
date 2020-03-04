//jQuery hide and show buttons for the jQuery page
  //Intro section
  var introButton = "#introButton"
  var jQueryBasicInfo = "#jQueryBasicInfo"
  $(introButton).css("background-color", "#ff3333");
  var clickCount = 0;
  $(introButton).text("Hide intro");

  $(introButton).click(() => {
      console.log("Intro button clicked");
      console.log(clickCount);

      if (clickCount % 2 == 0) {
        $(jQueryBasicInfo).toggle();
        $(introButton).text("Show intro");
        $(introButton).css("background-color", "Chartreuse");
      }

      else {
        $(jQueryBasicInfo).toggle();
        $(introButton).text("Hide intro");
        $(introButton).css("background-color", "#ff3333");
      }
      
      clickCount++;
  });