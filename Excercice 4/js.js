//Excercice 4 :

var age = 0;
var jeune = 0;
var moyen = 0;
var vieux = 0;

while (age < 100) 
    {
        age =  parseInt(prompt("rentrez vos Ages, n/ terminer par 100")); // la saisie s'arretera avec la rentrée du nombre 100
        if (age < 20)
            jeune++;
        else if (age > 40)
            vieux++; // on incrémenta a chaque fois pour etre sur de continuer dans ma boucle et de rajouter les valeurs tant qu'on a pas rentré 100
        else
            moyen++;
    }
console.log("Nombre de jeune : " + jeune + "\n"+ "Nombre de moyen : " + moyen +"\n"+ "Nombre de vieux : " + vieux);

