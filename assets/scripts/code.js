function toLight() {
    var element = document.body;
    element.classList.toggle("bodyLight");
}

function redirect() {
    alert('Redirecting');
  }

const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'});

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

//error handling for trying different functions
try {
    loadDCar();
}
catch(err) {
    document.getElementById("demo").innerHTML = err.message;
}