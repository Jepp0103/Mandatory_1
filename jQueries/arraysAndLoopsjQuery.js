//jQuery hide and show buttons for the arraysAndLoops page
  
  //Discarded numbers paragraph
  discardedNumbersButton = "#discardedNumbersButton"
  var discardedNumbersInfo = "#discardedNumbersInfo"
  $(discardedNumbersButton).css("background-color", "#ff3333");
  var discardedNumbersClickCount = 0;
  $(discardedNumbersButton).text("Hide discarded numbers paragraph");

  $(discardedNumbersButton).click(() => {
      console.log(discardedNumbersClickCount);

      if(discardedNumbersClickCount % 2 == 0) {
        $(discardedNumbersInfo).toggle();
        $(discardedNumbersButton).text("Show discarded numbers paragraph");
        $(discardedNumbersButton).css("background-color", "Chartreuse");
      }

      else {
        $(discardedNumbersInfo).toggle();
        $(discardedNumbersButton).text("Hide discarded numbers paragraph");
        $(discardedNumbersButton).css("background-color", "#ff3333");
      }
      
      discardedNumbersClickCount++;
  });

  //Modulo paragraph
  var moduloButton = "#moduloButton"
  var moduloInfo = "#moduloInfo"

  $(moduloButton).css("background-color", "#ff3333");
  var moduloClickCount = 0;
  $(moduloButton).text("Hide modulo paragraph");

  $(moduloButton).click(() => {
      console.log(moduloClickCount);

      if(moduloClickCount % 2 == 0) {
        $(moduloInfo).toggle();
        $(moduloButton).text("Show modulo paragraph");
        $(moduloButton).css("background-color", "Chartreuse");
      }

      else {
        $(moduloInfo).toggle();
        $(moduloButton).text("Hide modulo paragraph");
        $(moduloButton).css("background-color", "#ff3333");
      }
      
      moduloClickCount++;
  });

 