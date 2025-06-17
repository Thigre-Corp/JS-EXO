const container = document.getElementById("container"); // récupere le conteneur
Object.entries(quotes).forEach(([key, value]) =>{  // pour chaque élément de quotes (voir quote.js)
    const newQuote = document.createElement("div"); // créer un nouvelle DIV
    newQuote.innerHTML=("<q>"+value+"</q><span class='heart'>&#x2764;</span><p>"+key+"</p>"); // y ajouter du contenu
    newQuote.classList.add("quotation");    // lui donné la classe quotation
    newQuote.addEventListener('click', function(){  // en cas de click
        if (!localStorage.getItem(key)){            //vérifier si la clef avec pour variable key n'existe pas en localStorage
            localStorage.setItem(key, "favorite");  // affecté la variable key à la clef et la chaine favorite au stockage local
            newQuote.classList.add("favorite")      // ajouté la classe favorite à la DIV pour afficher le coeur en rouge
        }
        else {
            localStorage.removeItem(key);           // sinon retirer du stockage l'élément ayant pour clef la valeur key
            newQuote.classList.remove("favorite")   // retirer la classe "favorite" pour basculer le coeur en couleur par défaut
        }

    })
    if (localStorage.getItem(key) == "favorite"){   // lors du premier balayage, verifier si la clef de valeur key est présente et à pour valeur "favorite"
        newQuote.classList.add("favorite")          // et ajouter dans ce cas la classe favorite
        }
    container.appendChild(newQuote);    // affecté la nouvelle DIV au conteneur
}
);