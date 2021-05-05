$("#touch").mouseover(zoom);
$("#touch").mouseout(originScale);
    
function zoom() {
    $(this).css("width", "3000px");
}

function originScale() {
    $(this).css("width", "200px");
}