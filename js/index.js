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


    switch(tag) {
        case "P": case "H2":
            let fontSize = getComputedStyle(ele).fontSize;
            console.log(fontSize);
    }
})