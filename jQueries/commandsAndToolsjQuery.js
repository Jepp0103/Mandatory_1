//jQuery hide and show buttons for the commandsAndTools page
  //Node section
  var nodeButton = "#nodeButton"
  var nodeInfo = "#nodeInfo, #nodeRunningInfo"
  $(nodeButton).css("background-color", "#ff3333");
  var nodeClickCount = 0;
  $(nodeButton).text("Hide node paragraph");

  $(nodeButton).click(() => {
      console.log(nodeClickCount);

      if(nodeClickCount % 2 == 0) {
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

  //Express section
  var expressButton = "#expressButton"
  var expressInfo = "#expressInfo, #setupExpressInfo"
  $(expressButton).css("background-color", "#ff3333");
  var expressClickCount = 0;
  $(expressButton).text("Hide express paragraph");

  $(expressButton).click(() => {
      console.log(expressClickCount);

      if(expressClickCount % 2 == 0) {
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