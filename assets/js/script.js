$(document).ready(function () {
    // solution n1

    // appel de la fonction zoom au survol de l'image, je cible l'image grâce à l'ID touch
    // $("#touch").mouseover(zoom); 
    // appel de la fonction originScale en quittant l'image, je cible l'image grâce à l'ID touch 
    // $("#touch").mouseout(originScale);

    // je déclare ma fonction zoom que j'appelle ligne 5
    // function zoom() {
    // je modifie la taille de l'image de 500px
    //     $("#touch").css("width", "500px");
    // }

    // je déclare ma fonction originScale que j'appelle ligne 7 qui permet de revenir à la taille d'origine
    // function originScale() {
    //     $("#touch").css("width", "200px");
    // }

    // solution n2

    $("img").mouseover(function () {

        $(this).css("width", "500px");

    });
    $("img").mouseout(function () {

        $(this).css("width", "200px");
    }); 
});