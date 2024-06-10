
let modal = document.querySelector('.modal');
let backdrop = document.querySelector('.backdrop');
let selectPlantButtons = document.querySelectorAll('.plan button');
let modalNoButton = document.querySelector('.modal__action--negative');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');




for (i = 0; i < selectPlantButtons.length; i++){
    selectPlantButtons[i].addEventListener('click', function(){
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        // // modal.className = 'open'; //this directly overwrite the class do not add it 
        modal.classList.add('open');
        backdrop.classList.add('open');

    });
    }

    function closeModal() {
        // modal.style.display = 'none';
        // backdrop.style.display = 'none';
        if (modal){
            modal.classList.remove('open');
        }
        backdrop.classList.remove('open');
    }

    if(modalNoButton){
        modalNoButton.addEventListener("click"/*evento a disparar podemos tener mas opciones*/, closeModal);
    }
    

    backdrop.addEventListener('click', function(){
        // mobileNav.style.display = 'none';
        mobileNav.classList.remove('open');
        closeModal(); 
    });

    toggleButton.addEventListener('click', function(){
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
    })


