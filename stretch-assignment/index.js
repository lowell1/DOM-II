var blocks = document.querySelectorAll(".block");
var topBlock = blocks[0];
var body = document.querySelector("body");
var curDist = 10;
var intervalID = null;
const moveRate = 30;
const moveDist = 5;
var moveDirection = 1;

function MoveTopBlock() {
  console.log("ekj");
    curDist += moveDist * moveDirection;
    topBlock.style.marginLeft = curDist + "px";
    if(curDist <= 10)  {
        topBlock.style.marginLeft = "10px";
        curDist = 10;
        clearInterval(intervalID);
        intervalID = null;
    }
}

body.addEventListener("mousedown", function(event) {
    var element = document.elementFromPoint(event.clientX, event.clientY);

    if(element === topBlock) {
        moveDirection = 1;
        if(!intervalID) intervalID = setInterval(MoveTopBlock, moveRate);
        // topBlock.style.marginLeft = "20px";
    } else if(element === body) {
        if(curDist > 10) moveDirection = 1;
    } else if(element.getAttribute("class").indexOf("block ") > -1) { //other block
        clearInterval(intervalID);
        topBlock.style.marginLeft = "10px";
        topBlock.style.order = 0;
        element.style.order = -1;
        topBlock = element;
        curDist = 10;
        moveDirection = 1;
        intervalID = setInterval(MoveTopBlock, moveRate);
    }
});

body.addEventListener("mouseup", function(event) {
    moveDirection = -1;
});

//user clicks on top block
    //block is not moving
        //start moving block to the right
    //block is moving to the left
        //stop moving block left
        //start moving block right

//user clicks on a block other than the top block
    //stop moving top block
    //move top block all the way back
    //set top block's order back to 0
    //set new block's order to -1
    //set top block to new block
    //reset distance var
    //start moving new block to right

//user clicks on document body
    //top block is moving to the left
        //stop moving top block to the left
        //start moving top block to the right

//user releases mouse button
    //top block is moving right
        //stop block moving right
        //move block left