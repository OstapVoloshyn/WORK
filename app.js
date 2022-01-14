const popper = document.getElementById('popper');
const navLink = document.getElementById('navLink');

navLink.addEventListener('click', function(){
    popper.classList.toggle('hide');
});


// const accordion = [...document.querySelectorAll('.card-header')];
// const arrow = document.querySelectorAll('.accordion__arrow');


// accordion.forEach(element => {
//   element.addEventListener('click', ()=>{
   
//     arrow.classList.toggle("arrow__rotate")

//   });
// });

const cardHeaderOne = document.getElementById('headingOne')
const accordionArrowOne = document.getElementById('accordionArrowOne')

cardHeaderOne.addEventListener('click', function(){
    accordionArrowOne.classList.toggle('arrow__rotate');
});

const cardHeaderTwo = document.getElementById('headingTwo')
const accordioArrowTwo = document.getElementById('accordioArrowTwo')

cardHeaderTwo.addEventListener('click', function(){
    accordioArrowTwo.classList.toggle('arrow__rotate');
});

const cardHeaderThree = document.getElementById('headingThree')
const accordionArrowThree = document.getElementById('accordionArrowThree')

cardHeaderThree.addEventListener('click', function(){
    accordionArrowThree.classList.toggle('arrow__rotate');
});

