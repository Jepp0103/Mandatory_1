//jQuery hide and show buttons for the objectsAndStrings page
  
  //Objects paragraph
  objectsButton = "#objectsButton"
  var objectsInfo = "#objectsInfo, #objectsExampleInfo"
  $(objectsButton).css("background-color", "#ff3333");
  var objectsClickCount = 0;
  $(objectsButton).text("Hide objects paragraph");

  $(objectsButton).click(() => {
      console.log(objectsClickCount);

      if (objectsClickCount % 2 == 0) {
        $(objectsInfo).toggle();
        $(objectsButton).text("Show objects paragraph");
        $(objectsButton).css("background-color", "Chartreuse");
      }

      else {
        $(objectsInfo).toggle();
        $(objectsButton).text("Hide objects paragraph");
        $(objectsButton).css("background-color", "#ff3333");
      }
      
      objectsClickCount++;
  });

  //Strings paragraph
  var stringsButton = "#stringsButton"
  var stringsInfo = "#stringsInfo, #exampleStringsInfo"

  $(stringsButton).css("background-color", "#ff3333");
  var stringsClickCount = 0;
  $(stringsButton).text("Hide strings paragraph");

  $(stringsButton).click(() => {
      console.log(stringsClickCount);

      if (stringsClickCount % 2 == 0) {
        $(stringsInfo).toggle();
        $(stringsButton).text("Show strings paragraph");
        $(stringsButton).css("background-color", "Chartreuse");
      }

      else {
        $(stringsInfo).toggle();
        $(stringsButton).text("Hide strings paragraph");
        $(stringsButton).css("background-color", "#ff3333");
      }
      
      stringsClickCount++;
  });

 