(function () {
    'use strict';

    let projects = document.querySelectorAll('.w3-quarter');
    let p_len = projects.length;
    let modals = document.getElementsByClassName('modal');
    let closeBtn = document.getElementsByClassName('closeBtn');

    //toggle modal 
    for (let i = 0; i < p_len; i++) {
        //click on project to display modal
        projects[i].addEventListener('click', function pop() {
            modals[i].style.display = 'block';
            

            //window.addEventListener('click', function close() {
            closeBtn[i].addEventListener('click', function close() {
                modals[i].style.display = 'none';
            })
        });
    }

    //add a function to exit modal if click outside the modal area
    //this implementation needs work... tryh this https://sabe.io/tutorials/how-to-create-modal-popup-box
    function clickWindow(){     
        for (let i = 0; i < p_len; i++) {
            if (modals[i].style.display == 'block') {
                window.addEventListener('click', modals[i].style.display = 'none');
            }
        }
    }
})();