document.getElementById("play").addEventListener("click", initGame);




function initGame() {

    // creo costante difficoltà per agire sulla difficoltà
    const difficoltà = document.getElementById("difficoltà").value;

    if (difficoltà == "1") {
        console.log("gioco avviato in difficoltà facile");

        // creo il main
        const main = document.querySelector("main");

        // svuota il main
        main.innerHTML = "";

        // creo un div
        const griglia = document.createElement("div");
        // creo le classi per il div
        griglia.classList.add("container", "flex", "wrap");

        // creo celle da 0 a 100
        for (let i = 0; i < 100; i++) {
            // creo un div
            const box = document.createElement("div");
            // lo appendo come figlio a "griglia"
            griglia.appendChild(box);
            // creo classi per il div
            box.classList.add("cella", "easy");
            // aggiungo il testo (i) da 0 a 100 a "box"
            box.innerText = (i+1);

            box.addEventListener("click", function() {
                console.log("this: ", this);
                this.classList.toggle("clicked");
            });
            
        }

        

        // appendo la griglia grande
        main.appendChild(griglia);

        main
    } else if (difficoltà == "2") {

        console.log("gioco avviato in difficoltà media");

        // creo il main
        const main = document.querySelector("main");

        // svuota il main
        main.innerHTML = "";

        // creo un div
        const griglia = document.createElement("div");

        // creo le classi per il div
        griglia.classList.add("container", "flex", "wrap");

        // creo celle da 0 a 100
        for (let i = 0; i < 81; i++) {

            // creo un div
            const box = document.createElement("div");

            // lo appendo come figlio a "griglia"
            griglia.appendChild(box);

            // creo classi per il div
            box.classList.add("cella", "medium");

            // aggiungo il testo (i) da 0 a 100 a "box"
            box.innerText = (i+1);

            box.addEventListener("click", function() {
                console.log("this: ", this);
                this.classList.toggle("clicked");
            });
            
        }

        // appendo la griglia grande
        main.appendChild(griglia);

    } else if (difficoltà == "3") {

        console.log("gioco avviato in difficoltà difficile");

        // creo il main
        const main = document.querySelector("main");

        // svuota il main
        main.innerHTML = "";

        // creo un div
        const griglia = document.createElement("div");

        // creo le classi per il div
        griglia.classList.add("container", "flex", "wrap");

        // creo celle da 0 a 100
        for (let i = 0; i < 49; i++) {

            // creo un div
            const box = document.createElement("div");

            // lo appendo come figlio a "griglia"
            griglia.appendChild(box);

            // creo classi per il div
            box.classList.add("cella", "hard");

            // aggiungo il testo (i) da 0 a 100 a "box"
            box.innerText = (i+1);

            box.addEventListener("click", function() {
                console.log("this: ", this);
                this.classList.toggle("clicked");
            });
            
        }

        // appendo la griglia grande
        main.appendChild(griglia);
    }

    function generateRandomInteger(max) {
        return Math.floor(Math.random() * max) + 1;
    }
    let value = generateRandomInteger(10);

    console.log(value)
}

