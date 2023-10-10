let button = document.querySelector(".likeBtn");
let icon = document.querySelector(".likeIcon");

button.addEventListener("click", ()=>{
    button.classList.toggle("active");
    if(button.classList.contains("active")){
        createClones(button);
    }
});

function randomNum(min, max){
    return Math.floor(Math.random()*(max- min +1)+min);
}

function negativePositive(){
    return Math.random() <0.5 ? -1 : 1;
}

function createClones(button){
    let numberOfClones = randomNum(2, 4);

    for(let i=1; i <= numberOfClones; i++){
        let clone = icon.cloneNode(true);
        let size = randomNum(8, 20);
        button.appendChild(clone);
        clone.setAttribute("width", size);
        clone.setAttribute("height", size);
        clone.classList.add("clone");
        clone.style.transform = "translate(" + 
        negativePositive() * randomNum(15, 30) + "px," + 
        negativePositive() * randomNum(15, 30) + "px)";
        
        let removeNode = setTimeout(() =>{
            button.removeChild(clone);
            clearTimeout(removeNode);
        }, 800);
    }
}

function toLight() {
    var element = document.body;
    element.classList.toggle("bodyLight");
 }

 function toDark() {
    var element = document.body;
    element.classList.add("bodyDark",);
 }
