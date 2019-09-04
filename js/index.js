document.querySelectorAll(".nav-link").forEach(function(ele) {
    ele.addEventListener("mouseover", function() {
       TweenLite.to(ele, 1, {transform: "scale(0.2, 0.2)"});
    });
    ele.addEventListener("mouseout", function() {
       TweenLite.to(ele, 1, {transform: "scale(1, 1)"});
    });
});

document.querySelector("body").addEventListener("keydown", function(e) {
    if(e.keyCode === 38)
        window.scrollBy(0, 10);
        else if(e.keyCode === 40)
        window.scrollBy(0, -10);
    else
    return;

    e.preventDefault();
});


document.querySelector("body").addEventListener("wheel", function(e) {
    let ele = document.elementFromPoint(e.clientX, e.clientY)
    let tag = ele.nodeName;

    /*
    index.js:26 [Intervention] Unable to preventDefault inside passive event listener due to target being treated as passive. 
    See https://www.chromestatus.com/features/6662647093133312
    */
   
   switch(tag) {
       case "P": case "H2":
           let fontSize = getComputedStyle(ele).fontSize;
           ele.style.fontSize = (parseInt(fontSize, 10) + (Math.sign(e.deltaY) * -5)) + "px";
           event.preventDefault();
    }
}, {passive: false})

document.querySelectorAll("img").forEach(function(ele) {
    ele.addEventListener("dblclick", function(e) {
        // ele.style.transform = "rotateX(180deg)";
        // TweenLite.to(ele, 2, {transform: "rotate(349deg)"});
        // TweenLite.to(ele, 2, {transform: "rotate(-180deg)"});
           TweenLite.to(ele, 2, {transform: "rotate(180deg)"});

            console.log(ele);
    })
})