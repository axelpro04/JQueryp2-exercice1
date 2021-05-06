$(document).ready(function () {

    // $("#touch").mouseover(zoom);
    // $("#touch").mouseout(originScale);

    // function zoom() {
    //     $(this).css("width", "500px");
    // }

    // function originScale() {
    //     $("#touch").css("width", "200px");
    // }

    $("img").mouseover(function () {

        $(this).css("width", "500px");

    });
    $("img").mouseout(function () {

        $(this).css("width", "200px");
    }); 
});