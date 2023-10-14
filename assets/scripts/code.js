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
        clone.style.transform = 
        "translate(" + 
        negativePositive() * randomNum(15, 30) + "px," + 
        negativePositive() * randomNum(15, 30) + "px)";
        
        let removeNode = setTimeout(() =>{
            button.removeChild(clone);
            clearTimeout(removeNode);
        }, 800);
    }
}

function loadSamurai() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("demoSamurai").innerHTML = this.responseText;
    }
    xhttp.open("GET", "assets/texts/samurai.txt");
    xhttp.send();
}

function loadCar() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("demoCar").innerHTML = this.responseText;
    }
    xhttp.open("GET", "assets/texts/car.txt");
    xhttp.send();
}

function loadCentaur() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("demoCentaur").innerHTML = this.responseText;
    }
    xhttp.open("GET", "assets/texts/centaur.txt");
    xhttp.send();
}

function loadDragon() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("demoDragon").innerHTML = this.responseText;
    }
    xhttp.open("GET", "assets/texts/dragon.txt");
    xhttp.send();
}

function loadFlyingship() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("demoFlyingship").innerHTML = this.responseText;
    }
    xhttp.open("GET", "assets/texts/flyingship.txt");
    xhttp.send();
}

function loadJet() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("demoJet").innerHTML = this.responseText;
    }
    xhttp.open("GET", "assets/texts/jet.txt");
    xhttp.send();
}

function loadMiniwalker() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("demoMiniwalker").innerHTML = this.responseText;
    }
    xhttp.open("GET", "assets/texts/miniwalker.txt");
    xhttp.send();
}

function loadWalker() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("demoWalker").innerHTML = this.responseText;
    }
    xhttp.open("GET", "assets/texts/walker.txt");
    xhttp.send();
}

try {
    loadDCar();
}
catch(err) {
    document.getElementById("demo").innerHTML = err.message;
}

function toLight() {
    var element = document.body;
    element.classList.toggle("bodyLight");
}

function redirect() {
    alert('Redirecting');
  }