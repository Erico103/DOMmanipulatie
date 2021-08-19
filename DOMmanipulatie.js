log= console.log

const theParent = document.querySelector('.big-five-list');
const animals = document.querySelectorAll('li')
theParent.addEventListener('click', chooseAnimal, false);
const spottedAnimals = document.getElementById('spotted-animals-list')
const removeFirstButton = document.getElementById("remove-first-item-button")
const child = spottedAnimals.querySelectorAll('li')[0]
const removeSecondButton = document.getElementById('remove-all-button')


function chooseAnimal(evt) {
    if (evt.target !== evt.currentTarget) {
    let animal = clickedItem = evt.target;
    const newLi=   document.createElement('li')
    spottedAnimals.appendChild(newLi).innerHTML = animal.innerHTML
        
        log("Hello " + animal.innerHTML);
       
    }
   
}
 
removeFirstButton.addEventListener('click',() =>{
    spottedAnimals.removeChild(spottedAnimals.childNodes[0])
    log("I have been clicked")
})
removeSecondButton.addEventListener('click',() =>{
    spottedAnimals.innerHTML = " "
    log("I have been clicked")
})
