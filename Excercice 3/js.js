// Excercice 3

var n1 = parseInt(prompt("entrez un nombre"));
var resultat1 = 0;
var resultat2=0;
 var i = 0;
 var tab = [];
 tab[i] = n1;
while (n1 != 0) {
    resultat1 += n1;   //pour avoir le resultat que je veux soit je met resultat en premier soit je met resultat=n1 pour avoir le bon resultat$
    
    n1 = parseInt(prompt("entrez un nombre"));
    i++
     tab[i] = n1;
}
console.log("somme sera egale a"+resultat1);
resultat2 = resultat1 / i;
console.log("la moyenne sera egale a : " + resultat2);
var max = 0;
var i = 0;
var min = tab[i];

while (i != tab.length-1) { // je met mois un pour enlever la valeur du zero de fin de saisie 
    if (tab[i] > max) {
        max = tab[i];
        if (tab[i] < min)
            min = tab[i];
  }
  if (tab[i] < min)
  min = tab[i];
    i++;
}

console.log(max);
console.log(min);

