//Hiding the different paragraphs
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

    //Requests paragraph
    var requestsButton = "#requestsButton"
    var requestsInfo = "#requestsInfo"
    $(requestsButton).css("background-color", "#ff3333");
    var requestsClickCount = 0;
    $(requestsButton).text("Hide requests paragraph");

    $(requestsButton).click(() => {
        console.log(requestsClickCount);

        if (requestsClickCount % 2 == 0) {
          $(requestsInfo).toggle();
          $(requestsButton).text("Show requests paragraph");
          $(requestsButton).css("background-color", "Chartreuse");
        }

        else {
          $(requestsInfo).toggle();
          $(requestsButton).text("Hide requests paragraph");
          $(requestsButton).css("background-color", "#ff3333");
        }
        
        requestsClickCount++;
    }); 