//jQuery hide and show buttons for the commandsAndTools page
  
//Node paragraph
  var nodeButton = "#nodeButton"
  var nodeInfo = "#nodeInfo, #nodeRunningInfo"
  $(nodeButton).css("background-color", "#ff3333");
  var nodeClickCount = 0;
  $(nodeButton).text("Hide node paragraph");

  $(nodeButton).click(() => {
      console.log(nodeClickCount);

      if (nodeClickCount % 2 == 0) {
        $(nodeInfo).toggle();
        $(nodeButton).text("Show node paragraph");
        $(nodeButton).css("background-color", "Chartreuse");
      }

      else {
        $(nodeInfo).toggle();
        $(nodeButton).text("Hide node paragraph");
        $(nodeButton).css("background-color", "#ff3333");
      }
      
      nodeClickCount++;
  });

  //Express paragraph
  var expressButton = "#expressButton"
  var expressInfo = "#expressInfo, #setupExpressInfo"

  $(expressButton).css("background-color", "#ff3333");
  var expressClickCount = 0;
  $(expressButton).text("Hide express paragraph");

  $(expressButton).click(() => {
      console.log(expressClickCount);

      if (expressClickCount % 2 == 0) {
        $(expressInfo).toggle();
        $(expressButton).text("Show express paragraph");
        $(expressButton).css("background-color", "Chartreuse");
      }

      else {
        $(expressInfo).toggle();
        $(expressButton).text("Hide express paragraph");
        $(expressButton).css("background-color", "#ff3333");
      }
      
      expressClickCount++;
  });

  //nodemon paragraph
  var nodemonButton = "#nodemonButton"
  var nodemonInfo = "#nodemonInfo, #setupnodemonInfo"

  $(nodemonButton).css("background-color", "#ff3333");
  var nodemonClickCount = 0;
  $(nodemonButton).text("Hide nodemon paragraph");

  $(nodemonButton).click(() => {
      console.log(nodemonClickCount);

      if (nodemonClickCount % 2 == 0) {
        $(nodemonInfo).toggle();
        $(nodemonButton).text("Show nodemon paragraph");
        $(nodemonButton).css("background-color", "Chartreuse");
      }

      else {
        $(nodemonInfo).toggle();
        $(nodemonButton).text("Hide nodemon paragraph");
        $(nodemonButton).css("background-color", "#ff3333");
      }
      
      nodemonClickCount++;
  });

    //budo paragraph
    var budoButton = "#budoButton"
    var budoInfo = "#budoInfo, #setupBudoInfo"
  
    $(budoButton).css("background-color", "#ff3333");
    var budoClickCount = 0;
    $(budoButton).text("Hide budo paragraph");
  
    $(budoButton).click(() => {
        console.log(budoClickCount);
  
        if (budoClickCount % 2 == 0) {
          $(budoInfo).toggle();
          $(budoButton).text("Show budo paragraph");
          $(budoButton).css("background-color", "Chartreuse");
        }
  
        else {
          $(budoInfo).toggle();
          $(budoButton).text("Hide budo paragraph");
          $(budoButton).css("background-color", "#ff3333");
        }
        
        budoClickCount++;
    });