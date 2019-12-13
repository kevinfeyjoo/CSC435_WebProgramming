(function () {
    'use strict';

    let projects = document.querySelectorAll('.w3-quarter');
    let p_len = projects.length;
    let modals = document.getElementsByClassName('modal');
    let closeBtn = document.getElementsByClassName('closeBtn');

    for (let i = 0; i < p_len; i++) {
        //click on project to display modal
        projects[i].addEventListener('click', function pop() {
            modals[i].style.display = 'block';
            
            closeBtn[i].addEventListener('click', function close() {
                modals[i].style.display = 'none';
            })
        });
    }



})();