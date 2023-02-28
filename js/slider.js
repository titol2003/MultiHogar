(function(){

    const slider =[... document.querySelectorAll('.testimony__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click', ()=>{
        chagePosition(1);

    });

    buttonBefore.addEventListener('click', ()=>{
        chagePosition(-1);

    });

    const chagePosition = (add)=>{
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
        value = Number (currentTestimony);
        value+=add;

        slider[Number(currentTestimony)-1].classList.remove('testimony__body--show');
        if(value === slider.length +1 || value === 0){
            value = value === 0? slider.length : 1;
        }

        slider[value-1].classList.add('testimony__body--show');
    }

})();

