//function that alerts when you are leaving the site
function redirect() {
    alert('Leaving site');
}

//function that scrolls the screen to the top of the webpage
const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'});

//AJAX function for fetching the text document that contains the information text
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

var blink = document.getElementById('blink'); 
        setInterval(function () { 
            blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0); 
        }, 2000);  

//error handling for trying different functions
try {
    //function you want to execute
}
catch(err) {
    document.getElementById("demo").innerHTML = err.message;
}