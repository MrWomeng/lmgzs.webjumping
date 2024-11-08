
var html = document.getElementsByTagName("html")[0];
// var htmlBefore = document.defaultView.getComputedStyle(html, "before")
// var htmlBefore = window.getComputedStyle(html, '::before').getPropertyValue('backgroundPosition');
var root = document.querySelector(":root")
// var rootX = getComputedStyle(root).getPropertyValue("--bg-posX")

var DOMW = document.body.clientWidth
var DOMH = document.body.clientHeight

function getMousePos(event) {
    var e = event || window.event;
    var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var x = e.pageX || e.clientX + scrollX;
    var y = e.pageY || e.clientY + scrollY;
    return { "x": x, "y": y };
}

onmousemove = function()
{
    var XY = getMousePos()

    // root.style.setProperty("--bg-posX", XY.x / 50 + "px")
    // root.style.setProperty("--bg-posY", XY.y / 50 + "px")

    if ( XY.x < (DOMW / 2))
    {
        // root.style.setProperty("--bg-posX", ((DOMW / 2) - XY.x) / 50 + "px")
        root.style.setProperty("--bg-posX", ((DOMW / 2) - XY.x) / 50 + ((-DOMW / 100)) + "px")
    }
    else
    {
        // root.style.setProperty("--bg-posX", +((DOMW / 2) - XY.x) / 50 + "px")
        root.style.setProperty("--bg-posX", ((DOMW / 2) - XY.x) / 50 + ((-DOMW / 100)) + "px")
    }

    if ( XY.y < (DOMH / 2))
    {
        // root.style.setProperty("--bg-posY", ((DOMH / 2) - XY.y) / 50 + "px")
        root.style.setProperty("--bg-posY", ((DOMH / 2) - XY.y) / 50 + ((-DOMH / 100)) + "px")
    }
    else
    {
        // root.style.setProperty("--bg-posY", +((DOMH / 2) - XY.y) / 50 + "px")
        root.style.setProperty("--bg-posY", +((DOMH / 2) - XY.y) / 50 + ((-DOMH / 100)) + "px")
    }
}