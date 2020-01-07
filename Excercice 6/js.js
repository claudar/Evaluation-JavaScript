// excercice 6


var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
console.log(tab);


function tableau()
    {

        var i = 0;
        var name = prompt("Saisissez un prenom lister dans le tableau :");

        if(tab.includes(name)) //fonction qui va chercher l'element name dans le tableau
        {
            tab.splice(tab.indexOf(name), 1);  // fonction splice qui va supprimer l'index du nom choisi 
            tab[tab.length] = ""; // je rajoute un element vide a la fin
        }

        console.log(tab);
    }
tableau();


