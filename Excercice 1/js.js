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
