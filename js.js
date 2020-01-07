/*excercice 1
var reponse1 = window.prompt("Saisissez votre nom");
var reponse2 = window.prompt("Saisissez votre prenom");

 if (window.confirm("etes vous un homme ?") == true)

  {

     alert ("Bonjour MR "+ reponse1 + " " + reponse2 +" \nBienvenue sur notre site web !");

  }
  else {
    alert ("Bonjour Mme "+ reponse1 + " " + reponse2 +" \nBienvenue sur notre site web !");
  }*/

/*excercice2
 var a="100", b=100, c=1.00, d=true
 alert("ceci est une chaine de caractères" + a)
b--
alert(b)
c=c+=a
alert(c)
 d = !d
 alert(d)*/

//partie conditions

/*Excercice 0
exemple1
var reponse1 = parseInt(prompt("saisissez votre temperature"));

if (reponse1 > 38)
  alert("Le patient a de la fièvre");
else
  alert("Le patient va bien");*/

/*Exemple 2&3
var reponse1 = parseInt(prompt("saisissez votre temperature"));
var reponse2 = parseInt(prompt("saisissez votre tension"));

if (reponse1 > 41 && reponse2 > 25) {

    alert("le patient va perdre patience");
}

else {
    alert("econduire l'olibrius");

}*/

/*exemple4
var reponse1 = parseInt(prompt("saisissez votre temperature"));
var reponse2 = parseInt(prompt("saisissez votre tension"));
var reponse3 = parseInt(prompt("saisissez votre pouls"));
if (reponse1 > 42 || reponse2 < 25 && reponse3 > 180) {
    alert("Prévenir la famille")
}
else {
    alert("tremblements")
}*/

/*exemple5
var reponse1 = parseInt(prompt("saisissez votre temperature"));
var reponse2 = parseInt(prompt("saisissez votre tension"));
if (reponse1 > 40 || reponse2 >= 25) {
    alert("Hospitaliser le patient")
}
else {
    alert("voir medecin pour plus de détails")
}*/

/*Exemple 6
var reponse1 = parseInt(prompt("saisissez votre temperature"))
var reponse2 = parseInt(prompt("saisissez votre pouls"))
if (reponse1 == 0 && reponse2 == 0) {
    console.log("appeler le curé")
}*/

/*var modele = (prompt("saisissez votre marque de voiture"))



switch (modele) {

    case "208":
    case "408":

        alert("Modèle 208 "+408+" : marque Peugeot");

        break;



    case "Clio":

        alert("Modèle Clio : marque Renault");

        break;



    case "C3":

        alert("Modèle C3 : marque Citroën");

        break;



    default:

        alert("Modèle " + modele + ": marque inconnue");

}*/

/*Excercice1

var reponse =parseInt(prompt("saisissez un nombre"));
if(reponse % 2 == 0){
    alert("ce nombre est pair")
}
else{
    alert("ce nombre est impair")
}*/

/*Excercice 2
var a=2019
var b = parseInt(prompt("saisissez votre année de naissance"))
c=a-b
if(c>=18){
    alert ("\nvous avez " +c+"ans!!! \n\n Vous êtes majeur") // pour concaténer les valeurs de c et mon texte dans mon alert j'utilise "texte"+valeur a concatener+"suite texte" et pour aller a la ligne j'utilise\n a ne pas confondre avec /n

}
else{
    alert ("\nvous avez " +c+"ans!!! \n\nVous êtes mineur")
}*/

//excercice 3
/*Ecrivez un programme qui demande l'année de naissance à l'utilisateur.
En réponse votre programme doit afficher l'âge de l'utilisateur et indiquer si l'utilisateur est majeur
ou mineur.
​
    var annee_naissance = parseInt(prompt("Saisir année de naissance"));
    
    age = 2019-annee_naissance;
   
    if (age < 18) 
    {
        alert("Vous avez "+age+" ans, vous êtes mineur");
    } 
    else 
    {
        alert("Vous avez "+age+" ans, vous êtes majeur");
    } */
/* 3 - Calculette
Faire la saisie de 2 nombres entiers, puis la saisie d'un opérateur '+', '-', '*' ou '/'.
Si l'utilisateur entre un opérateur erroné, le programme affichera un message d'erreur.
Dans le cas contraire, le programme effectuera l'opération demandée (en prévoyant le cas d'erreur
"division par 0"), puis affichera le résultat. 

    var nb1 = parseInt(prompt("Entrez votre premier nombre entier"));
    var nb2 = parseInt(prompt("Entrez votre deuxième nombre entier"));
    var operateur = prompt("entrez un opérateur +, -, * ou /");
  
 // On traite d'abord le cas de la division par 0 :
if (operateur=="/" && nb2==0) 
    {
 	   alert("Division par zéro : impossible");
    } 
    else 
 { /* Sinon, tout est OK pour effectuer le calcul demandé,
      * la structure conditionnelle 'switch' est parfaitement adaptée  
      */
/*switch (operateur) 
{
case "+":
            console.log(resultat = nb1 + nb2);
            break;
	
        case "-":
            console.log(resultat = nb1 - nb2);
            break;
	
        case "*":
            console.log(resultat = nb1 * nb2);
            break;
	
        case "/":
            console.log(resultat = nb1 / nb2);
            break;
    
    /* Si on n'est pas rentré dans l'un des cas précédents, c'est que l'opérateur saisi est invalide,
    * on peut alors utiliser le cas par défaut pour afficher un message d'erreur */
/*default:
    alert("Opérateur '"+operateur+"' invalide");
} // fin du switch  
} // fin du else*/

/*console.log("Table de multiplication par 5");

console.log("=============================");
 
console.log("5 * 0 = 0");
 
console.log("5 * 1 = 5");
 
console.log("5 * 2 = 10");
 
console.log("5 * 3 = 15");
 
console.log("5 * 4 = 20");
 
console.log("5 * 5 = 25") ;
 
console.log("5 * 6 = 30");
 
console.log("5 * 7 = 35");
 
console.log("5 * 8 = 40");
 
console.log("5 * 9 = 45");
 
console.log("5 * 10 = 50");-*/

//                                                                    LES BOUCLES 
//                                                                   EXCERCICE 1

/*var prenom=prompt("entrez un prenom");
var i=1;
var str="";
 
 
while(prenom!="" )
{
   i=i++;
   str=str+prenom;
   prenom=prompt("entrez un prenom");
}
i=i+2
console.log(i);
console.log(str)*/

/*EXCERCICE 2
var n = parseInt(prompt("entrez un nombre"));
while (n > 1) {
    console.log(n)
    n-- //je met la decrementation en dessous de mon console log si je veux que le chiffre n apparaisse sinon je le met au dessus 
}*/

//EXCERCICE 3 

/*var n1 = parseInt(prompt("entrez un nombre"));
var n2 = parseInt(prompt("entrez un nombre"));
var resultat= 0;
if (n1> n2)
{
    while (n1 >= n2)
    {
        
        resultat = resultat + n1;
        
        n1--;

    }
}
else {
    while (n1 <= n2){
        resultat= resultat + n1;
        n1++;
    }
}


console.log(resultat);*/

//EXCERCICE 4

/*var n1 = parseInt(prompt("entrez un nombre"));
var resultat1 = 0;
var resultat2=0;
 var i = 0
while (n1 != 0) {
    resultat1 += n1;   //pour avoir le resultat que je veux soit je met resultat en premier soit je met resultat=n1 pour avoir le bon resultat$
    
    n1 = parseInt(prompt("entrez un nombre"));
    i++
}
alert("somme sera egale a"+resultat1);
resultat2 = resultat1 / i;
alert("la moyenne sera egale a : " + resultat2);*/

/*Excercice 5
var n = parseInt(prompt("Entrez un nombre"));
var x = parseInt(prompt("Entrez un nombre"));
var resultat = 0;
var i = 1;

while(i<=n){
resultat= i*x
console.log( i + "x" + x + "=" + resultat);
i++
}*/

// Excercice 6

// var voyelles = 0;
// var mot = prompt("entrez un mot");
// i = 0;
// while( i<mot.length){
//     if (mot[i] == "a" || mot[i] == "e" || mot[i] == "i" || mot[i] == "o" || mot[i] == "u" || mot[i] == "y") 
// 		   {	
//  	          voyelles++;
//            }
//            i++
// 		} 
//     console.log("le nombre de voyelles dans :"+mot+" est de "+voyelles);

//excercice 7

// var activ = true;
// for (var index = 2; index < nb; index++) {
//     if ((nb % index == 0 && index != 1 && index != nb)) {
//         console.log("non premier");
//     }
// }

// console.log("premier");

// function prime() {
//     var nb = parseInt(prompt("entrez un nombre"));
//     let i = 2;
//     if (nb < 2)
//     return ("pas premier");
//     while (i < nb) {
//         if (nb % i == 0) {
//             return ("pas premier");
//         }
//         i++;
//     }
//     return ("premier");
// }
// var i = prime();
// console.log(i);

// ### 7 - Un nombre est-il premier
// ​
// Ecrivez un programme qui permet de tester si un nombre est premier.
// ​
// [Lire cette ressource] http://chatinais.pagesperso-orange.fr/coursjs/exercice/frprem0.htm
// ​
// 	while (isNaN(number)) {
// 	    // on renouvèle la saisie
// 	    number = parseInt(window.prompt('Saisissez un premier nombre :'));
// 	}
// 	    var divide = 0;
// 	    var bool = true;
// 	    // boucle parcourant les entiers entre n et racine carré du nombre saisi
// 	    while (n <= Math.sqrt(number)) {
// 	        // on divise notre nombre par n
// 	        divide = number / n;
// 	        console.log('resultat: ' + divide);
// 	        // si le resultat est différent de 0 et que le reste est égale à 0
// 	        if ((divide != 0) && (number % n == 0)) {
// 	            // on definit la variable bool à false
// 	            bool = false;
// 	            // et arrêt de la boucle
// 	            break;
// 	        }
// 	        // incrémentation de n
// 	        n++;
// 	    }
// 	    // si le resultat est différent de 0 et que le reste est égale à 0
// 	    if (bool == false) {
// 	        // information
// 	        alert('Ce nombre n\'est pas premier');
// 	    } else {
// 	        // information
// 	        alert('Ce nombre est premier');
// 	    }

// Excercice 8

// var magic = parseInt(Math.random() * 100);  //nombre generes aleatoirement par l'ordi
// var i = 0;
// alert(magic); // pour voir sirectement quel est le nobre généré par l'ordinateur 
// while (entree != magic) {

//     var entree = parseInt(prompt("entrez un nombre entre 1 & 100"));

//     if (entree < magic) {

//         alert("plus petit");
//     } if (entree > magic)  {        // j'utilise 2 if pour mes conditions au lieu d'un if et d'un else pour ne pas avoir d'erreur ou de bug
//         alert("plus grand")
//     }

//     i++

// }
// if (entree == magic) {
//     alert("vous avez trouvé!!!")
//}


// =====================================FONCTIONS=====================================================

/* Excercice 1

var n1;
var n2;
var image="";

function produit(n1,n2) //je declare mes variables a l'interieur de ma fonction je pourrais tout aussi bien les remplacer par des chiffres
{
    produit = n1*n2 // je fais mon operation de produit
    console.log("le produit est egal"+n1+ x +n2+ "est egal a" +produit); //je concatène ma chaine de caractères plus mon resultat pour avoir un affichage console
    return produit; // pour retourner la fonction produit
}
function cube(n1)
{
    cube = n1*n1*n1
    console.log("le cube de" +n1+ "est egal a" +cube);
    return cube;
}

function afficheImg(image) //je declare mon argument image
{
document.write("<img src=\""+image+"\">") //pour afficher l'image et appeller du html a l'interieur de mon javascript on utilisera document.write et on utilises les antislash pour le faire marcher(echapper) sur js
}

// appel des fonctions
var resultat= cube(3)
console.log("cube : "+cube)
afficheImg("papillon.jpg")*/ // varie en fonction du chemin dans lequel est sauvegardé le fichier

// Excercice 2

// var phrase = prompt("saisire une phrase");
// var lettre = prompt("saisir une lettre");
// var compteur = 0;
// function compte(){
//     var i=0;  // ATTENTION!!!!! ne pas oublier de declarer la var i hors du while contrairement au fort sinon ca fera une boucle infinie 
//     while ( i < phrase.length) {  //j'utilise phrase.length pour renvoyer le nombre d'unité de code la longueur de la phrase
//         if (phrase[i] == lettre) {
//             compteur++;
//         }
//         i++;  // pour l'incrementation toujour le mettre dans le while mais pas dans le if
//     }
//     alert("La lettre '"+lettre+"' est présente "+compteur+" fois dans '"+phrase+"'");
// }
// compte();


//EXCERCICE 3


// function multiple() 
//      {
//          var nombre = parseInt(prompt("entrez un nombre"));
//          var multi = parseInt(prompt("entrez un nombre"));

//          while (multi > 0) 
//          {
//              console.log(nombre*multi); 
//              multi--;
//          }
//      }
// //var n1 = parseInt(prompt("entrez un nombre"));
// var resultat1 = 0;
// var resultat2 = 0;
// var i = 0

// function somme() {
//     n1 = parseInt(prompt("entrez un nombre"));
//     while (n1 != 0) {
//         resultat1 += n1; //pour avoir le resultat que je veux soit je met resultat en premier soit je met resultat=n1 pour avoir le bon resultat$

//         n1 = parseInt(prompt("entrez un nombre"));
//         i++
//     }
//     console.log("somme sera egale a" + resultat1);
// }



// function moyenne() {

//     resultat2 = resultat1 / i;
//     console.log("la moyenne sera egale a : " + resultat2);
// }

// function voyelles(){

//     var voyelles = 0;
//     var mot = prompt("entrez un mot");
//     i = 0;
//     while( i<mot.length){
//         if (mot[i] == "a" || mot[i] == "e" || mot[i] == "i" || mot[i] == "o" || mot[i] == "u" || mot[i] == "y") 
//                {	
//                    voyelles++;
//                }
//                i++
//             } 
//         console.log("le nombre de voyelles dans :"+mot+" est de "+voyelles);

//     }    




// function compte() {
//     var compteur = 0;
//     var phrase = prompt("saisire une phrase");
//     var lettre = prompt("saisir une lettre");
//     var i = 0; // ATTENTION!!!!! ne pas oublier de declarer la var i hors du while contrairement au fort sinon ca fera une boucle infinie 
//     while (i < phrase.length) { //j'utilise phrase.length pour renvoyer le nombre d'unité de code la longueur de la phrase
//         if (phrase[i] == lettre) {
//             compteur++;
//         }
//         i++; // pour l'incrementation toujour le mettre dans le while mais pas dans le if
//     }
//     alert("La lettre '" + lettre + "' est présente " + compteur + " fois dans '" + phrase + "'");
// }


// var rep = prompt("entrz le chiffre voulue selon l'operation \n1-multiple \n2-somme et moyenne \n3-recherche du nombre de voyelles \n4-recherche du nombre des caractères suivants");

// je peux faire un un if ou un swich pour appeler la fonction directement en fonction de la réponse de départ 

// if (rep == 1)
//      multiple();
// else if(rep == 2)
//      somme();
// else if(rep == 3)
// voyelles();
// else if(rep == 4)
// compte();



/*var choix = prompt("entrz le chiffre voulue selon l'operation \n1-multiple \n2-somme et moyenne \n3-recherche du nombre de voyelles \n4-recherche du nombre des caractères suivants");
    
     switch (choix) // j'utilise un switch pour gerer tout mes cas de figure
     {
         case "1":
            multiple();
            break;
    
         case "2":
            somme_moyenne()
         	break;
	
	     case"3":
	        nb_voyelles();
            break;
            
		 case"4":
            comptelettre();
            break;

         default:
            alert("Choix non valide");
     } */

//  Excercice 4


// var str1 = "robert ;dupont ;amiens ;80000 ";
// var str2 = ";";
// var n = 2;
// var test;
// function strtok(str1,str2,n) 
// {
//     var res = str1.split(str2); /// !!! le premier element commence à 0 //split sépare les mots
//     console.log(res[n]);
//  }  
//  var test = prompt("entrez robert ;dupont ;amiens ;80000");

//  strtok(str1, str2, n);

//  ========================================LES TABLEAUX======================================================

//  var myTableau = [];    <-------declaration d'un tableau

// var myTableau = ["pomme", "poire", "banane"]; <----- declaration avec données de type chaîne
// var myTableau = [123, 456, 789]; <------ declaration avec données de type entier
// var myTableau = ["pomme", 123, 456]  <----- declaration avec données de type chaîne et entier
// Les syntaxes new Array(5) et Array(5) qui permettent de déclarer le nombre d’éléments d’un tableau font qu’il est impossible de les utiliser pour créer un tableau qui ne contiendrait qu’un seul élément de type entier. Dans ce cas, seule la syntaxe avec crochets doit être employée : var myTableau = [5] 
// var myTableau = new Array(); // Tableau vide 
// var myTableau = new Array(5); // Tableau vide qui contiendra 5 éléments
// var myTableau = new Array("pomme", "poire", "banane"); Tableau avec données

// var myTableau = ["pomme", "poire", "banane", "fraise", "abricot"]; Si on veut accéder à l’élément « pomme » - le premier - on écrira myTableau[0], pour l’élément « fraise » - le 4ème - on écrira myTableau[3]
// Lorsqu’on a déclaré un tableau vide, on le remplit en assignant une valeur à la position souhaitée : 
// var myTableau = []; myTableau[0] = ["pomme"];   myTableau[1] = ["poire"]; 

// FONCTIONS COURANTES DANS LES TABLEAUX !!!

// La fonction length (= longueur) retourne le nombre d’éléments dans un tableau 
// Exemple :
// var myTableau = ["pomme", "poire", "banane", "fraise", "abricot"]; 
// var nb = myTableau.length ; 

// console.log("Le tableau contient "+nb+ "éléments"); // Affiche : 5 


// fonction while dans un tableau


// var myTableau = ["pomme", "poire", "banane", "fraise", "abricot"];
// var i = 0
// while (i < myTableau.length) {
//     console.log("Fruit : " + myTableau[i]); // ne pas oublier que la valeur 0 est le premier element du tableau 
//     i++
// }

// var fruits = ["pomme", "poire", "banane", "fraise", "abricot"]; 
// fruits.push("mangue", "prune"); //fonction qui permet d'afficher le dernier element d'un tableau
// console.log(fruits)

// Tableaux multidimensionnels
/*var tab1=[]
tab1[0] = ["poireau", "tomate", "carotte"];
 tab1[1] = ["pomme", "poire", "banane"];
 console.log(tab1[1][2]);
 //dans ce exemple la console affichera «banane » qui est le second élément (donc la 3ème valeur : banane) de l’élément 1 (donc le tableau des fruits) du tableau tab1.   */



// Excercice 1 

// var tab=[];
// var len = parseInt(prompt("saisissez la taille de votre tableau"));
// i=0;
// while (i<len){
// var valeur=parseInt(prompt("entrez les valeurs du tableau"));
//  tab.push(valeur); // pour ajouter une valuer au tableau on peut utiliser push

// // tab[i]=valeur;   //on peut aussi ajouter a i la valeur du t'ableau 
// i++;
// }
// console.log(tab);


//  Exercice 2



//  function numberInteger()
//     {
//      var number = parseInt(prompt("entrez un entier"));
//     }
// function iniTab(tab)  //j'initialise le tableau en creant la variable len pour la longueur ensuite je donne a mon tableau la valeur de la longueur 
//     {

//         var len = parseInt(prompt("saisissez la taille de votre tableau"));
//         tab = [len]; 
//         return len; // j'utilise le return pour renvoyer la valeur du tableau
//         console.log(len);
//     }
// function saisieTab(tab, len)
//     {
//         var i=0;
//         while(i<len){
//             var valeur=parseInt(prompt("entrez les valeurs du tableau")); 
//             tab.push(valeur);
//           i++;       
//         }
//     }
// function afficheTab (tab)
//     {
//         console.log(tab);
//     }
// function rechercheTab(tab)
//     {
//        recherche=parseInt(prompt("entrez un poste"));
//        console.log(tab[recherche-1]);    

//     }    
//     function infoTab(tab, len)
//     {

//         // console.log(Math.max(tab));
//         var max=0;
//         var i=0; 

//         while(i!=len)
//         {
//             if(tab[i]>max){
//                 max = tab[i];

//             }
//             i++;
//                 }
//                 console.log(max);
//                 var somme = tab.reduce(function (i,len)
//                 {
//                return i + len;
//                 });
//                 console.log(somme);
//                 var moyenne=somme/len;
//                 console.log(moyenne);

//     }    
//     var tab=[];
//     var len = iniTab(tab);
// saisieTab(tab,len);
// afficheTab(tab);
// rechercheTab(tab);
// infoTab(tab, len);

// excercice 3

// function iniTab(tab)  //j'initialise le tableau en creant la variable len pour la longueur ensuite je donne a mon tableau la valeur de la longueur 
//     {

//         var len = parseInt(prompt("saisissez la taille de votre tableau"));
//         tab = [len]; 
//         return len; // j'utilise le return pour renvoyer la valeur du tableau
//         console.log(len);
//     }
// function saisieTab(tab, len)
//     {
//         var i=0;
//         while(i<len){
//             var valeur=parseInt(prompt("entrez les valeurs du tableau")); 
//             tab.push(valeur);
//           i++;       
//         }
//     }
//     function afficheTab (tab)
//         {
//             console.log(tab);
//         }
// function tri(tab, len){


//         while(len>0)   // je fais une premiere grande boucle avec la taille du tableau superieure a zero pour qu'il teste tout le tableau
//         {

//             while(i<len)  // je fais une deuxieme boucle avec la taille du tableau inferieure a mon compteur 
//             {
//                 if(tab[i+1]<tab[i] ) //je teste les options tant que la case i+1 est superieure a la case de base
//                 {
//                     temp = tab[i]; // je fais passer ma variable temporelle a la valeur de i pour la sauvegarder et ensuite je vais la renvoyer dans la case i+1 grace a cette mm variable temporelle
//                     tab[i]=tab[i+1];
//                     tab[i+1]=temp;
//                 }
//                 i++; // j'incremente mon i hors de mon if pour eviter d'avoir une boucle infinie

//             }
//             i=0; // dans ma grande boucle je refais passer i a zero pour qu'il recommence le tri 
//             len--; // je decremente mon len pour qu'une fois la valeur la plus grande atteinte il recommence a tester la case precedente

//         }

// }
// var temp=0;        
// var tab=[];
// var len = iniTab(tab);
// var i = 0;
// saisieTab(tab,len);
// tri(tab,len);
// afficheTab(tab);

//  =======================================evenements =================================================

// excercice 1

// var element = document.getElementById("button1"); // je cree ma variable element en allat chercher le button

// element.addEventListener("click", function reponse () //je crée mon evenement pour avoir une animation au clic 
//  {
//     var reponse = document.getElementById("rep").value; // je met un "." value pour renvoyer la valeur que l'utilisateur rentre au clavier 
//     document.getElementById("test").innerHTML = "essai <br> essaie" // test pour voir a quoi inner html sert
//     alert(reponse);
// });

// // excercice Magic number 


// var element = document.getElementById("button1"); // je cree ma variable element en allat chercher le button
// var magic = parseInt(Math.random() * 100); //nombre generes aleatoirement par l'ordi

// element.addEventListener("click", function reponse(e) //je crée mon evenement pour avoir une animation au clic 
//     {


//         var reponse = parseInt(document.getElementById("rep").value); // je met un "." value pour renvoyer la valeur que l'utilisateur rentre au clavier 
//         console.log(magic);
//         while (reponse != magic) {



//             if (reponse < magic) {

//                 document.getElementById("test").textContent = "ce nombre est plus petit";
//                 document.getElementById("test").reload(); // pour recharger la page j'utilise document.reload
//                 reponse = parseInt(document.getElementById("rep").value); // je redemande ensuite une valeur tant que je n'ai pas trouvé le bon nombre      
//             }
//             if (reponse > magic) {
//                 document.getElementById("test").textContent = "ce nombre est plus grand";
//                 document.getElementById("test").reload();
//                 reponse = parseInt(document.getElementById("rep").value);
//             }


//         }

//         if (reponse == magic) {
//             alert("vous avez trouvé!!!");

//         }
//     });

//  Excercice formulaire
// var element=document.getElementById("button1")
// element.addEventListener("click", function(e)
// {
//     //nom
//     var filtrenom = /^[a-zA-Z\sáàâäãåçéèêëíìîïñóòôöõúùûü-]+$/;
//     var nom = document.getElementById("nom").value;    // je vais chercher la valeur du nom dans mon formulaire
//     console.log(nom)
//     if(!filtrenom.test(nom)) // le(!) devant veut dire "different de"
//     {
//         document.getElementById("p1").textContent = "veuillez remplir ces champs"; // je veux la reponse en dessous du champ qui est faux
//         return false; // je ne retourne pas le formulaire en cas d'erreur 
//     }
//     else
//     {
//         document.getElementById("p1").textContent ="";

//     }
//     //prenom
//     var filtreprenom = /^[a-zA-Z\sáàâäãåçéèêëíìîïñóòôöõúùûü-]+$/i;  //le i a la fin est pour eviter la cassse en cas de lettres majuscules non déclarées deans le regex
//     var prenom = document.getElementById("prenom").value;
//     console.log(prenom)
//     if(!filtreprenom.test(prenom)) // le(!) devant veut dire "different de"
//     {
//         document.getElementById("p2").textContent = "veuillez remplir ces champs"; // je met un id sur le p2 pour avoir le message d'erreur en dessous du champ souhaité
//         return false;
//     }
//     else
//     {
//         document.getElementById("p2").textContent ="";

//     }

// //date de naissance
// var filtredate = /^[\w\sáàâäãåçéèêëíìîïñóòôöõúùûü-]+$/;
//     var date = document.getElementById("date").value;
//     console.log(date)
//     if(!filtredate.test(date)) // le(!) devant veut dire "different de"
//     {
//         document.getElementById("p3").textContent = "veuillez remplir ces champs";
//         return false;
//     }
//     else
//     {
//         document.getElementById("p3").textContent ="";

//     }
// //email
// var filtreemail = /([\w-\.]+@[\w\.]+\.{1}[\w]+)/;
//     var email = document.getElementById("email").value;
//     console.log(email)
//     if(!filtreemail.test(email)) // le(!) devant veut dire "different de"
//     {
//         document.getElementById("p4").textContent = "veuillez remplir ces champs";
//         return false;
//     }
//     else

//         document.getElementById("p4").textContent ="";


//    //  Sujet


//    if (document.getElementById("select").value == "choix")
//    {

//        document.getElementById("p5").textContent= "Choisissez le sujet de votre requête.";

//        return false;

//    }

//    else

//        document.getElementById("p5").textContent = "";

// // message

//        if (document.getElementById("message").value == "")

//        {

//            document.getElementById("p6").textContent = "Vous n'avez renseigner aucun message.";

//            return false;

//        }

//        else

//            document.getElementById("p6").textContent = "";
//     });


//================================================ excercices evaluation================================================

// Excercice 1

var pu=parseInt(prompt("entrez un prix"));
var qtecom=parseInt(prompt("entrez le nombre d'articles"));
var tot =pu*qtecom;
var port=6;
var rem = 0;


if (tot > 500)
{
    port=0;
    
}
else 
port =port+(tot*0.02) ;

if (tot>=100 && tot<=200)
{
    rem =(0.05*tot);
}
else if (tot > 200)
{
rem = (0.1*tot);
}
else 

{
    rem=0;
}

var pap = tot+port+rem;
console.log("le total sera egale a "+tot+"€");
console.log("le port sera egal a "+port+"€");
console.log("la remise sera egale a "+rem+"€");
console.log("le prix a payer sera egal a"+pap+"€");







// //EXCERCICE 2
// var n = parseInt(prompt("entrez un nombre"));
// while (n > 0) {
//     console.log(n)
//     n-- //je met la decrementation en dessous de mon console log si je veux que le chiffre n apparaisse sinon je le met au dessus 
// }

// // Excercice 3

// var n1 = parseInt(prompt("entrez un nombre"));
// var resultat1 = 0;
// var resultat2=0;
//  var i = 0;
//  var tab = [];
//  tab[i] = n1;
// while (n1 != 0) {
//     resultat1 += n1;   //pour avoir le resultat que je veux soit je met resultat en premier soit je met resultat=n1 pour avoir le bon resultat$
    
//     n1 = parseInt(prompt("entrez un nombre"));
//     i++
//      tab[i] = n1;
// }
// console.log("somme sera egale a"+resultat1);
// resultat2 = resultat1 / i;
// console.log("la moyenne sera egale a : " + resultat2);
// var max = 0;
// var i = 0;
// var min = tab[i];

// while (i != tab.length-1) { // je met mois un pour enlever la valeur du zero de fin de saisie 
//     if (tab[i] > max) {
//         max = tab[i];
//         if (tab[i] < min)
//             min = tab[i];
//   }
//   if (tab[i] < min)
//   min = tab[i];
//     i++;
// }

// console.log(max);
// console.log(min);


// //Excercice 4 :
// var age = 0;
// var jeune = 0;
// var moyen = 0;
// var vieux = 0;

// while (age < 100) 
//     {
//         age =  parseInt(prompt("rentrez vos Ages, n/ terminer par 100")); // la saisie s'arretera avec la rentrée du nombre 100
//         if (age < 20)
//             jeune++;
//         else if (age > 40)
//             vieux++; // on incrémenta a chaque fois pour etre sur de continuer dans ma boucle et de rajouter les valeurs tant qu'on a pas rentré 100
//         else
//             moyen++;
//     }
// console.log("Nombre de jeune : " + jeune + "\n"+ "Nombre de moyen : " + moyen +"\n"+ "Nombre de vieux : " + vieux);


//excercice 5
// function multiplication()
//     {

//         var i = 0; 
//         var x = prompt("entrez un nombre pour votre table de multiplication :");

//         while (i <= 10)  
//         {
//             console.log(x + "x" + i + "=" + (x * i));
//             i++
//         }
//     }
// multiplication();

// excercice 6

// TABLEAU imposé
// var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
// console.log(tab);


// function tableau()
//     {

//         var i = 0;
//         var name = prompt("Saisissez un prenom lister dans le tableau :");

//         if(tab.includes(name)) //fonction qui va chercher l'element name dans le tableau
//         {
//             tab.splice(tab.indexOf(name), 1);  // fonction splice qui va supprimer l'index du nom choisi 
//             tab[tab.length] = ""; // je rajoute un element vide a la fin
//         }

//         console.log(tab);
//     }
// tableau();


