//video

window.addEventListener("load", function () {

    let video = window.document.querySelector("#video")

    video.play();

    video.loop = true;




});




//reload

window.addEventListener('resize', function (event) {

    recarrega();

});




function recarrega() {

    document.location.reload();

};




//reload

window.addEventListener('resize', function (event) {

    recarrega();

});




function recarrega() {

    document.location.reload();

};




//inicializacao Aos

AOS.init({

    duration:2000,

});




//lightbox

$(document).ready(function () {

    $('.grid').isotope({

        itemSelector: '.item',

    });

 

    $('.filterBtnGroup').on('click', 'li', function () {

        var filterValue = $(this).attr('data-filter');

        $('.grid').isotope({ filter: filterValue });

        $('.filterBtnGroup li').removeClass('active');

        $(this).addClass('active');

    });

 

  })