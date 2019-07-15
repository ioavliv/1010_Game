$(document).ready(function(event) {

  var html = '';
  for(let i=0; i<10; i++){
    html += '<div class="col" col-number="'+ i +'">';
    for(let j = 0; j < 10; j++) {
      html += '  <div class="tile" row-number="'+ j +'"><div></div></div>';
    }
    html += '</div>';
  }
  // Add all the div's to the HTML
  $('#game-board').html(html)

  //Shape selection 
  $(".newTurn").click(function(event){
    if($(event.target).is(".container")){
      let selectedItem = $(event.target).siblings();
      tempContainer = $(event.target).attr("class").split(' ')[1];
      if(!(shapeClicked == null)){
        if(tempContainer != container){
          return;
        }
        selectedItem.toggle()
        shapeClicked = null;
        return;
      }
      shapeClicked = selectedItem.attr("class").split(' ')[1];
      container = $(event.target).attr("class").split(' ')[1];
      selectedItem.toggle()
    }
  })

  // Shape placement logic
  $(".tile").click(function(event) { 

    //Update collison grid
    let col = parseInt($(this).closest(".col").attr("col-number"));
    let row = parseInt($(this).attr("row-number"));
    surroundingShape = shapesCollection[shapeClicked].surroundingShape;
  
    if(shapeClicked == null){
      return;
    }
    for(i = 0; i < surroundingShape.length; i++){
      if(row + surroundingShape[i][1] > 9 || col + surroundingShape[i][0] > 9 || grid[row + surroundingShape[i][1]][col + surroundingShape[i][0]] == 1){
        invalid.play();
        return; 
      }
    }

    if(shapeClicked != null){
      var myImage = new Image(48,48);
      myImage.style.borderRadius = "5px";
      myImage.style.backgroundColor = eval(`_${shapeClicked}`).color;
    }
   
    switch(shapeClicked) {
      case("1x1"):
      $(this).append(myImage);
      grid[row][col] = 1;
      pointCounter++;
      $(".score").html(pointCounter);
      clearLine(grid);
      shapeClicked = null;
      currentTime = 30;
      pop.play();
      break;
      case("2x1"):
      $(this).append(myImage);
      grid[row][col] = 1;
      pointCounter++;
      $(`.col[col-number='${col+1}']`).find(`.tile[row-number=${row}]`).append(myImage.cloneNode());
        grid[row][col+1] = 1;
        pointCounter++;
        $(".score").html(pointCounter);
        clearLine(grid);
        shapeClicked = null;
        currentTime = 30;
        pop.play();
      break;
      case("1x2"):
      $(this).append(myImage);
      grid[row][col] = 1;
      pointCounter++;
      $(`.col[col-number='${col}']`).find(`.tile[row-number=${row+1}]`).append(myImage.cloneNode());
        grid[row+1][col] = 1;
        pointCounter++;
        $(".score").html(pointCounter);
        clearLine(grid);
        shapeClicked = null;
        currentTime = 30;
        pop.play();
      break;
      case("3x1"):
        $(this).append(myImage);
        grid[row][col] = 1;
        pointCounter++;
        $(`.col[col-number='${col+1}']`).find(`.tile[row-number=${row}]`).append(myImage.cloneNode());
        grid[row][col+1] = 1;
        pointCounter++;
        $(`.col[col-number='${col+2}']`).find(`.tile[row-number=${row}]`).append(myImage.cloneNode());
        grid[row][col+2] = 1;
        pointCounter++;
        $(".score").html(pointCounter);
        clearLine(grid);
        shapeClicked = null;
        currentTime = 30;
        pop.play();
      break;
      case("1x3"):
        $(this).append(myImage);
        grid[row][col] = 1;
        pointCounter++;
        $(`.col[col-number='${col}']`).find(`.tile[row-number=${row+1}]`).append(myImage.cloneNode());
        grid[row+1][col] = 1;
        pointCounter++;
        $(`.col[col-number='${col}']`).find(`.tile[row-number=${row+2}]`).append(myImage.cloneNode());
        grid[row+2][col] = 1;
        pointCounter++;
        $(".score").html(pointCounter);
        clearLine(grid);
        shapeClicked = null;
        currentTime = 30;
        pop.play();
      break;
      case("4x1"):
        $(this).append(myImage);
        grid[row][col] = 1;
        pointCounter++;
        $(`.col[col-number='${col+1}']`).find(`.tile[row-number=${row}]`).append(myImage.cloneNode());
        grid[row][col+1] = 1;
        pointCounter++;
        $(`.col[col-number='${col+2}']`).find(`.tile[row-number=${row}]`).append(myImage.cloneNode());
        grid[row][col+2] = 1;
        pointCounter++;
        $(`.col[col-number='${col+3}']`).find(`.tile[row-number=${row}]`).append(myImage.cloneNode());
        grid[row][col+3] = 1;
        pointCounter++;
        $(".score").html(pointCounter);
        clearLine(grid);
        shapeClicked = null;
        currentTime = 30;
        pop.play();
      break;
      case("1x4"):
        $(this).append(myImage);
        grid[row][col] = 1;
        pointCounter++;
        $(`.col[col-number='${col}']`).find(`.tile[row-number=${row+1}]`).append(myImage.cloneNode());
        grid[row+1][col] = 1;
        pointCounter++;
        $(`.col[col-number='${col}']`).find(`.tile[row-number=${row+2}]`).append(myImage.cloneNode());
        grid[row+2][col] = 1;
        pointCounter++;
        $(`.col[col-number='${col}']`).find(`.tile[row-number=${row+3}]`).append(myImage.cloneNode());
        grid[row+3][col] = 1;
        pointCounter++;
        $(".score").html(pointCounter);
        clearLine(grid);
        shapeClicked = null;
        currentTime = 30;
        pop.play();
      break;
      case("5x1"):
        $(this).append(myImage);
        grid[row][col] = 1;
        pointCounter++;
        $(`.col[col-number='${col+1}']`).find(`.tile[row-number=${row}]`).append(myImage.cloneNode());
        grid[row][col+1] = 1;
        pointCounter++;
        $(`.col[col-number='${col+2}']`).find(`.tile[row-number=${row}]`).append(myImage.cloneNode());
        grid[row][col+2] = 1;
        pointCounter++;
        $(`.col[col-number='${col+3}']`).find(`.tile[row-number=${row}]`).append(myImage.cloneNode());
        grid[row][col+3] = 1;
        pointCounter++;
        $(`.col[col-number='${col+4}']`).find(`.tile[row-number=${row}]`).append(myImage.cloneNode());
        grid[row][col+4] = 1;
        pointCounter++;
        $(".score").html(pointCounter);
        clearLine(grid);
        shapeClicked = null;
        currentTime = 30;
        pop.play();
      break;
      case("1x5"):
        $(this).append(myImage);
        grid[row][col] = 1;
        pointCounter++;
        $(`.col[col-number='${col}']`).find(`.tile[row-number=${row+1}]`).append(myImage.cloneNode());
        grid[row+1][col] = 1;
        pointCounter++;
        $(`.col[col-number='${col}']`).find(`.tile[row-number=${row+2}]`).append(myImage.cloneNode());
        grid[row+2][col] = 1;
        pointCounter++;
        $(`.col[col-number='${col}']`).find(`.tile[row-number=${row+3}]`).append(myImage.cloneNode());
        grid[row+3][col] = 1;
        pointCounter++;
        $(`.col[col-number='${col}']`).find(`.tile[row-number=${row+4}]`).append(myImage.cloneNode());
        grid[row+4][col] = 1;
        pointCounter++;
        $(".score").html(pointCounter);
        clearLine(grid);
        shapeClicked = null;
        currentTime = 30;
        pop.play();
      break;
      case("2x2"):
        $(this).append(myImage);
        grid[row][col] = 1;
        pointCounter++;
        $(`.col[col-number='${col+1}']`).find(`.tile[row-number=${row}]`).append(myImage.cloneNode());
        grid[row][col+1] = 1;
        pointCounter++;
        $(`.col[col-number='${col}']`).find(`.tile[row-number=${row+1}]`).append(myImage.cloneNode());
        grid[row+1][col] = 1;
        pointCounter++;
        $(`.col[col-number='${col+1}']`).find(`.tile[row-number=${row+1}]`).append(myImage.cloneNode());
        grid[row+1][col+1] = 1;
        pointCounter++;
        $(".score").html(pointCounter);
        clearLine(grid);
        shapeClicked = null;
        currentTime = 30;
        pop.play();
      break;
      case("3x3"):
        $(this).append(myImage);
        grid[row][col] = 1;
        pointCounter++;
        $(`.col[col-number='${col+1}']`).find(`.tile[row-number=${row}]`).append(myImage.cloneNode());
        grid[row][col+1] = 1;
        pointCounter++;
        $(`.col[col-number='${col+2}']`).find(`.tile[row-number=${row}]`).append(myImage.cloneNode());
        grid[row][col+2] = 1;
        pointCounter++;
        $(`.col[col-number='${col}']`).find(`.tile[row-number=${row+1}]`).append(myImage.cloneNode());
        grid[row+1][col] = 1;
        pointCounter++;
        $(`.col[col-number='${col}']`).find(`.tile[row-number=${row+2}]`).append(myImage.cloneNode());
        grid[row+2][col] = 1;
        pointCounter++;
        $(`.col[col-number='${col+1}']`).find(`.tile[row-number=${row+1}]`).append(myImage.cloneNode());
        grid[row+1][col+1] = 1;
        pointCounter++;
        $(`.col[col-number='${col+1}']`).find(`.tile[row-number=${row+2}]`).append(myImage.cloneNode());
        grid[row+2][col+1] = 1;
        pointCounter++;
        $(`.col[col-number='${col+2}']`).find(`.tile[row-number=${row+1}]`).append(myImage.cloneNode());
        grid[row+1][col+2] = 1;
        pointCounter++;
        $(`.col[col-number='${col+2}']`).find(`.tile[row-number=${row+2}]`).append(myImage.cloneNode());
        grid[row+2][col+2] = 1;
        pointCounter++;
        $(".score").html(pointCounter);
        clearLine(grid);
        shapeClicked = null;
        currentTime = 30;
        pop.play();
      break;
      default:
      return;
    }

    //Create 3 more shapes for new turn
    if($(".c1").siblings().css("display") === "none" && $(".c2").siblings().css("display") === "none" && $(".c3").siblings().css("display") === "none"){
      $(".container").siblings().remove();       
      pickThree(shapesArray)
    }
  })

  //Button theme toggle
  $(".theme").click(function(event){
    $("body").toggleClass("dark-theme");
    $(".tile, .tile div").toggleClass("dark-theme-tile");
    $("h1").toggleClass("dark-theme-header");
    if($(".theme").html()=="Dark Theme"){
      $(".theme").html("Light Theme");
      $(".theme").addClass("btn-white");
      $(".theme").removeClass("btn-black");
    } else{
      $(".theme").html("Dark Theme")
      $(".theme").addClass("btn-black");
      $(".theme").removeClass("btn-white");
    }
  })

  //Button pause toggle
  $(".pause").click(function(event){
    var bg = $(".pause").css('background-image');
    bg = bg.replace('url("','').replace('")','');
    if (bg == "https://game-1010.herokuapp.com/pause.png") {
      $(this).css("background-image", "url(play.png)");
      clearInterval(intervalId);
      $(".newTurn").unbind();
    } else{
      $(".pause").css("background-image", "url(pause.png)");
      startTimer();
      $(".newTurn").click(function(event){
        if($(event.target).is(".container")){
          let selectedItem = $(event.target).siblings();
          tempContainer = $(event.target).attr("class").split(' ')[1];
          if(!(shapeClicked == null)){
            if(tempContainer != container){
              return;
            }
            selectedItem.toggle()
            shapeClicked = null;
            return;
          }
          shapeClicked = selectedItem.attr("class").split(' ')[1];
          container = $(event.target).attr("class").split(' ')[1];
          selectedItem.toggle()
        }
      });
    }
  })

  //Show what a placed item will look like
  $(".tile").mouseover(function(event){

    let col = parseInt($(this).closest(".col").attr("col-number"));
    let row = parseInt($(this).attr("row-number"));
    surroundingShape = shapesCollection[shapeClicked].surroundingShape;

    let myImage = new Image(48,48);
      myImage.style.borderRadius = "5px";

    for(i = 0; i < surroundingShape.length; i++){
      if(row + surroundingShape[i][1] > 9 || col + surroundingShape[i][0] > 9 || grid[row + surroundingShape[i][1]][col + surroundingShape[i][0]] == 1){
      myImage.style.backgroundColor = "rgb(255, 200, 200)";
        break; 
      }
      myImage.style.backgroundColor = "rgb(205, 255, 200)";
    }

    switch(shapeClicked) {
      case("1x1"):
      $(this).append(myImage);
      break;
      case("2x1"):
      $(this).append(myImage);
      $(`.col[col-number='${col+1}']`).find(`.tile[row-number=${row}]`).append(myImage.cloneNode());
      break;
      case("1x2"):
      $(this).append(myImage);
      $(`.col[col-number='${col}']`).find(`.tile[row-number=${row+1}]`).append(myImage.cloneNode());
      break;
      case("3x1"):
      $(this).append(myImage);
      $(`.col[col-number='${col+1}']`).find(`.tile[row-number=${row}]`).append(myImage.cloneNode());
      $(`.col[col-number='${col+2}']`).find(`.tile[row-number=${row}]`).append(myImage.cloneNode());
      break;
      case("1x3"):
      $(this).append(myImage);
      $(`.col[col-number='${col}']`).find(`.tile[row-number=${row+1}]`).append(myImage.cloneNode());
      $(`.col[col-number='${col}']`).find(`.tile[row-number=${row+2}]`).append(myImage.cloneNode());
      break;
      case("4x1"):
      $(this).append(myImage);
      $(`.col[col-number='${col+1}']`).find(`.tile[row-number=${row}]`).append(myImage.cloneNode());
      $(`.col[col-number='${col+2}']`).find(`.tile[row-number=${row}]`).append(myImage.cloneNode());
      $(`.col[col-number='${col+3}']`).find(`.tile[row-number=${row}]`).append(myImage.cloneNode());
      break;
      case("1x4"):
      $(this).append(myImage);
      $(`.col[col-number='${col}']`).find(`.tile[row-number=${row+1}]`).append(myImage.cloneNode());
      $(`.col[col-number='${col}']`).find(`.tile[row-number=${row+2}]`).append(myImage.cloneNode());
      $(`.col[col-number='${col}']`).find(`.tile[row-number=${row+3}]`).append(myImage.cloneNode());
      break;
      case("5x1"):
      $(this).append(myImage);
      $(`.col[col-number='${col+1}']`).find(`.tile[row-number=${row}]`).append(myImage.cloneNode());
      $(`.col[col-number='${col+2}']`).find(`.tile[row-number=${row}]`).append(myImage.cloneNode());
      $(`.col[col-number='${col+3}']`).find(`.tile[row-number=${row}]`).append(myImage.cloneNode());
      $(`.col[col-number='${col+4}']`).find(`.tile[row-number=${row}]`).append(myImage.cloneNode());
      break;
      case("1x5"):
      $(this).append(myImage);
      $(`.col[col-number='${col}']`).find(`.tile[row-number=${row+1}]`).append(myImage.cloneNode());
      $(`.col[col-number='${col}']`).find(`.tile[row-number=${row+2}]`).append(myImage.cloneNode());
      $(`.col[col-number='${col}']`).find(`.tile[row-number=${row+3}]`).append(myImage.cloneNode());
      $(`.col[col-number='${col}']`).find(`.tile[row-number=${row+4}]`).append(myImage.cloneNode());
      break;
      case("2x2"):
      $(this).append(myImage);
      $(`.col[col-number='${col}']`).find(`.tile[row-number=${row+1}]`).append(myImage.cloneNode());
      $(`.col[col-number='${col+1}']`).find(`.tile[row-number=${row}]`).append(myImage.cloneNode());
      $(`.col[col-number='${col+1}']`).find(`.tile[row-number=${row+1}]`).append(myImage.cloneNode());
      break;
      case("3x3"):
      $(this).append(myImage);
      $(`.col[col-number='${col}']`).find(`.tile[row-number=${row+1}]`).append(myImage.cloneNode());
      $(`.col[col-number='${col}']`).find(`.tile[row-number=${row+2}]`).append(myImage.cloneNode());
      $(`.col[col-number='${col+1}']`).find(`.tile[row-number=${row}]`).append(myImage.cloneNode());
      $(`.col[col-number='${col+2}']`).find(`.tile[row-number=${row}]`).append(myImage.cloneNode());
      $(`.col[col-number='${col+1}']`).find(`.tile[row-number=${row+1}]`).append(myImage.cloneNode());
      $(`.col[col-number='${col+2}']`).find(`.tile[row-number=${row+1}]`).append(myImage.cloneNode());
      $(`.col[col-number='${col+1}']`).find(`.tile[row-number=${row+2}]`).append(myImage.cloneNode());
      $(`.col[col-number='${col+2}']`).find(`.tile[row-number=${row+2}]`).append(myImage.cloneNode());
      break;
      default:
      return;
    }
  })

  $(".tile").mouseout(function(event){ 
    let col = parseInt($(this).closest(".col").attr("col-number"));
    let row = parseInt($(this).attr("row-number"));

    if(grid[row][col] != 1 || shapeClicked != null){
      switch(shapeClicked) {
      case("1x1"):
      $(`.col[col-number='${col}']`).find(`.tile[row-number=${row}] img:last-child`).remove();
      break;
      case("2x1"):
      $(`.col[col-number='${col}']`).find(`.tile[row-number=${row}] img:last-child`).remove();
      $(`.col[col-number='${col+1}']`).find(`.tile[row-number=${row}] img:last-child`).remove();
      break;
      case("1x2"):
      $(`.col[col-number='${col}']`).find(`.tile[row-number=${row}] img:last-child`).remove();
      $(`.col[col-number='${col}']`).find(`.tile[row-number=${row+1}] img:last-child`).remove();
      break;
      case("3x1"):
      $(`.col[col-number='${col}']`).find(`.tile[row-number=${row}] img:last-child`).remove();
      $(`.col[col-number='${col+1}']`).find(`.tile[row-number=${row}] img:last-child`).remove();
      $(`.col[col-number='${col+2}']`).find(`.tile[row-number=${row}] img:last-child`).remove();
      break;
      case("1x3"):
      $(`.col[col-number='${col}']`).find(`.tile[row-number=${row}] img:last-child`).remove();
      $(`.col[col-number='${col}']`).find(`.tile[row-number=${row+1}] img:last-child`).remove();
      $(`.col[col-number='${col}']`).find(`.tile[row-number=${row+2}] img:last-child`).remove();
      break;
      case("4x1"):
      $(`.col[col-number='${col}']`).find(`.tile[row-number=${row}] img:last-child`).remove();
      $(`.col[col-number='${col+1}']`).find(`.tile[row-number=${row}] img:last-child`).remove();
      $(`.col[col-number='${col+2}']`).find(`.tile[row-number=${row}] img:last-child`).remove();
      $(`.col[col-number='${col+3}']`).find(`.tile[row-number=${row}] img:last-child`).remove();
      break;
      case("1x4"):
      $(`.col[col-number='${col}']`).find(`.tile[row-number=${row}] img:last-child`).remove();
      $(`.col[col-number='${col}']`).find(`.tile[row-number=${row+1}] img:last-child`).remove();
      $(`.col[col-number='${col}']`).find(`.tile[row-number=${row+2}] img:last-child`).remove();
      $(`.col[col-number='${col}']`).find(`.tile[row-number=${row+3}] img:last-child`).remove();
      break;
      case("5x1"):
      $(`.col[col-number='${col}']`).find(`.tile[row-number=${row}] img:last-child`).remove();
      $(`.col[col-number='${col+1}']`).find(`.tile[row-number=${row}] img:last-child`).remove();
      $(`.col[col-number='${col+2}']`).find(`.tile[row-number=${row}] img:last-child`).remove();
      $(`.col[col-number='${col+3}']`).find(`.tile[row-number=${row}] img:last-child`).remove();
      $(`.col[col-number='${col+4}']`).find(`.tile[row-number=${row}] img:last-child`).remove();
      break;
      case("1x5"):
      $(`.col[col-number='${col}']`).find(`.tile[row-number=${row}] img:last-child`).remove();
      $(`.col[col-number='${col}']`).find(`.tile[row-number=${row+1}] img:last-child`).remove();
      $(`.col[col-number='${col}']`).find(`.tile[row-number=${row+2}] img:last-child`).remove();
      $(`.col[col-number='${col}']`).find(`.tile[row-number=${row+3}] img:last-child`).remove();
      $(`.col[col-number='${col}']`).find(`.tile[row-number=${row+4}] img:last-child`).remove();
      break;
      case("2x2"):
      $(`.col[col-number='${col}']`).find(`.tile[row-number=${row}] img:last-child`).remove();
      $(`.col[col-number='${col}']`).find(`.tile[row-number=${row+1}] img:last-child`).remove();
      $(`.col[col-number='${col+1}']`).find(`.tile[row-number=${row}] img:last-child`).remove();
      $(`.col[col-number='${col+1}']`).find(`.tile[row-number=${row+1}] img:last-child`).remove();
      break;
      case("3x3"):
      $(`.col[col-number='${col}']`).find(`.tile[row-number=${row}] img:last-child`).remove();
      $(`.col[col-number='${col}']`).find(`.tile[row-number=${row+1}] img:last-child`).remove();
      $(`.col[col-number='${col}']`).find(`.tile[row-number=${row+2}] img:last-child`).remove();
      $(`.col[col-number='${col+1}']`).find(`.tile[row-number=${row}] img:last-child`).remove();
      $(`.col[col-number='${col+2}']`).find(`.tile[row-number=${row}] img:last-child`).remove();
      $(`.col[col-number='${col+1}']`).find(`.tile[row-number=${row+1}] img:last-child`).remove();
      $(`.col[col-number='${col+2}']`).find(`.tile[row-number=${row+1}] img:last-child`).remove();
      $(`.col[col-number='${col+1}']`).find(`.tile[row-number=${row+2}] img:last-child`).remove();
      $(`.col[col-number='${col+2}']`).find(`.tile[row-number=${row+2}] img:last-child`).remove();
      break;
      default:
      return;
      }
    }
  })
})

var shapeClicked = null;
var container = null;
var pointCounter = 0;

//Create collision grid
var grid = [];

for(let i = 0; i < 10; i++) {
  for(let j = 0; j < 10; j++) {
    if(!Array.isArray(grid[i])) grid[i] = [];
    grid[i][j] = 0;
  }
}

shapesCollection = {};
//Block-shapes
function Shape(name, dimension, color) {
  this.surroundingShape = []
  for(let x=0; x<dimension[0];x++){
    for(let y=0; y<dimension[1]; y++){
      this.surroundingShape.push([x,y]);
    }
  }
  this.name = name;
  this.dimension = dimension;
  this.color = color;
  var myImage = new Image(dimension[0]*40,dimension[1]*40);
      myImage.style.backgroundColor = color;
      myImage.style.borderRadius = "5px";
      $(myImage).addClass("shape")
      $(myImage).addClass(name)
  this.img = myImage;
  shapesCollection[name] = this;
}

var _1x5 = new Shape("1x5", [1,5], "rgb(221,101,85)")
var _5x1 = new Shape("5x1", [5,1], "rgb(221,101,85)")
var _1x4 = new Shape("1x4", [1,4], "rgb(228,105,131)")
var _4x1 = new Shape("4x1", [4,1], "rgb(228,105,131)")
var _1x3 = new Shape("1x3", [1,3], "rgb(238,147,71)")
var _3x1 = new Shape("3x1", [3,1], "rgb(238,147,71)")
var _1x2 = new Shape("1x2", [1,2], "rgb(251,198,61)")
var _2x1 = new Shape("2x1", [2,1], "rgb(251,198,61)")
var _1x1 = new Shape("1x1", [1,1], "rgb(119,136,196)")
var _2x2 = new Shape("2x2", [2,2], "rgb(149,220,77)")
var _3x3 = new Shape("3x3", [3,3], "rgb(108,213,177)")

// Shape Collection
shapesArray = [_1x1, _1x2, _2x1, _1x3, _3x1, _1x4, _4x1, _1x5, _5x1, _2x2, _3x3];
pickThree(shapesArray);

function clearLine(grid){
  checkRow(grid);
  checkColumn(grid);
}

function checkRow(grid){
  var counterOne = [];

  for(let i = 0; i < 10; i++){
    for(let j = 0 ; j < 10; j++){
      if(grid[i][j] == 1){
        counterOne.push([i,j])
        if(counterOne.length === 10){
          for(let k = 0; k< 10; k++){
            grid[counterOne[i][0]][k] = 0;
            deleteRow = $(`.tile[row-number='${counterOne[i][k]}']`)
            if(deleteRow){
              deleteRow.children("img").addClass("vanish");
              success.play();
              $(deleteRow).on('transitionend', function(e){
                deleteRow.children("img").remove();
                checkRow(grid);
                checkColumn(grid);
              })
            }
          }
          counterOne = [];
        return;
        }
      }
    }
    counterOne = [];
  }
}

function checkColumn(grid){
  var counterOne = [];

  for(let i = 0; i < 10; i++){
    for(let j = 0 ; j < 10; j++){
      if(grid[j][i] == 1){
        counterOne.push([i,j])
        if(counterOne.length === 10){
          for(let k = 0; k< 10; k++){
            grid[k][counterOne[i][0]] = 0;
            deleteColumn =  $(`.col[col-number='${counterOne[i][k]}']`)
            if(deleteColumn){
              deleteColumn.children().children("img").addClass("vanish");
              success.play();
              $(deleteColumn).on('transitionend', function(e){
                deleteColumn.children().children("img").remove();
                checkColumn(grid);
                checkRow(grid);
              })
            }
          }
          counterOne = [];
        return;
        }
      }
    }
    counterOne = [];
  }
}

function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}
var success = new sound("109662__grunz__success.wav");
var game_over = new sound("382310__myfox14__game-over-arcade.wav");
var invalid = new sound("249618__vincentm400__invalid.mp3");
var pop = new sound("244655__greenvwbeetle__pop-1.flac");

 //Pick next 3 block-shapes
 function pickThree(array){
  let newTiles = [];
  let rand1 = Math.floor(Math.random() * array.length);
  let rand2 = Math.floor(Math.random() * array.length);
  let rand3 = Math.floor(Math.random() * array.length);
  newTiles.push(shapesArray[rand1]);
  newTiles.push(shapesArray[rand2]);
  newTiles.push(shapesArray[rand3]);
  $(".div1").append(newTiles[0].img.cloneNode());
  $(".div2").append(newTiles[1].img.cloneNode());
  $(".div3").append(newTiles[2].img.cloneNode());
  $(".div").animate({ right: "-200px" }, 0 );
  $(".div").animate({ right: "0" }, 200 );
}

var currentTime = 30;
function startTimer(){
  intervalId = setInterval(() => {
    currentTime--;
    $(".time").html(currentTime);
    if(currentTime == 0){
      $(".gameOver").html("GAME OVER");
      clearInterval(intervalId);
      game_over.play();
      $(".newTurn").unbind();
    }
  }, 1000)
}

startTimer();

