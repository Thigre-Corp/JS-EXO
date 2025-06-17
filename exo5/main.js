const container = document.getElementById("container"); // récupere le conteneur

Object.entries(quotes).forEach(([key, value]) =>{  // pour chaque élément de quotes (voir quote.js)
    const newQuote = document.createElement("div"); // créer un nouvelle DIV
    newQuote.innerHTML=("<q>"+value+"</q><p>"+key+"</p>"); // y ajouter du contenu
    newQuote.classList.add("quotation");    // lui donné la classe quotation
    newQuote.addEventListener('click', function(){
        console.dir(newQuote);
    })
    container.appendChild(newQuote);    // l'affecté au conteneur
}
);