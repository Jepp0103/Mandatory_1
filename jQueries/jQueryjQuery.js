//jQuery hide and show buttons for the jQuery page
    //Hide all theory button
    var hideAllTheoryButton = "#hideAllTheoryButton";
    var allTheoryInfo = "#allTheoryInfo";
    $(hideAllTheoryButton).css("background-color", "#ff3333");
    var allTheoryClickCount = 0;
    $(hideAllTheoryButton).text("Hide all theory and try jQuery playroom!");
  
    $(hideAllTheoryButton).click(() => {
        console.log("Button clicked");
        console.log(allTheoryClickCount);
  
        if (allTheoryClickCount % 2 == 0) {
          $(allTheoryInfo).toggle();
          $(hideAllTheoryButton).text("Show all theory");
          $(hideAllTheoryButton).css("background-color", "Chartreuse");
        }
  
        else {
          $(allTheoryInfo).toggle();
          $(hideAllTheoryButton).text("Hide all theory and try jQuery playroom!");
          $(hideAllTheoryButton).css("background-color", "#ff3333");
        }
        
        allTheoryClickCount++;
    });


  //Accessing and manipulating HTML section
  var introButton = "#introButton";
  var jQueryBasicInfo = "#jQueryBasicInfo";
  $(introButton).css("background-color", "#ff3333");
  var clickCount = 0;
  $(introButton).text("Hide accessing and manipulation");

  $(introButton).click(() => {
      console.log("Intro button clicked");
      console.log(clickCount);

      if (clickCount % 2 == 0) {
        $(jQueryBasicInfo).toggle();
        $(introButton).text("Show accessing and manipulation");
        $(introButton).css("background-color", "Chartreuse");
      }

      else {
        $(jQueryBasicInfo).toggle();
        $(introButton).text("Hide accessing and manipulation");
        $(introButton).css("background-color", "#ff3333");
      }
      
      clickCount++;
  });

  //Mouseover/mouse leave picture - baby lion to grown up lion - and angry lion
  $("#clickToLearn").hide();
  $("#lionInfo").hide();

  $("#mouseOverPicture").mouseover(() => {
    $("#mouseOverPicture").attr("src", "grownLion.JPG");
    $("#clickToLearn").show();
  });

  $("#mouseOverPicture").mouseleave(() => {
    $("#mouseOverPicture").attr("src", "babyLion.JPG");
    $("#clickToLearn").hide();
  });

  //Alert box with info about lions
  $("#mouseOverPicture").on("click", function() {
    console.log("Picture clicked");
    $(function() {
      $("#lionInfo").dialog({
        width: 800
      });
    });  
  }); 