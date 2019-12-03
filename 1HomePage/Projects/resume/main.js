(function () {
    'use strict';
    /* alert('this website is still under construction. please excuse any typos or bugs'); */

    let projects = document.querySelectorAll('.w3-quarter');
    let p_len = projects.length;

    for (let i = 0; i < p_len; i++) {
        projects[i].addEventListener('click', function pop() {
            console.log(projects[i].childNodes);
        });
        
    }

    






/* 

    when click on project box. make it come out for more details, images and a chance to visit the website.

    do this with event listener
     */
})();