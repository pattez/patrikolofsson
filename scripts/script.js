/**
 * Created by Patrik on 2017-10-08.
 */



$(document).scroll(function () {
    let scrollPos = $(document).scrollTop();
    let compare = window.innerHeight * 0.44;

    if(scrollPos > compare) {
        $('#menu').css('color', 'black');
    } else if (compare > scrollPos) {
        $('#menu').css('color', 'white');
    }

});