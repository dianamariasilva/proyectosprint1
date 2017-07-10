var letrasPalabra = [];
var letra = "";
var asteriscoEnMatriz = [];

function imprimirHTML(M)
{
    var n = M.length;
    for (var i = 0; i < n; i++){
        console.log(M[i]);
    }
}

function imprimirMatriz(M)
{
    var n = M.length;
    for (var i = 0; i < n; i++){
        console.log(M[i]);
    }
}

function obtenerPalabraSecreta()
{
    var libreriaPalabras = ["m u l t i m e d i a", "i n t e r n a u t a", "s e r v i d o r", "p r o t o c o l o", "c o r t a f u e g o s",
    "n a v e g a d o r", "n o d o", "m a r c o", "p a g i n a", "t e l a r a ñ a",
    "d e s c a r g a r", "v i r t u a l", "m e m o r i a", "d i s c o", "l o c a l",
    "c o n e c t a r", "d e s c o n e c t a r", "e n c a m i n a d o r", "i n t e r n e t", "d o m i n i o",
    "d i n a m i c o", "h i p e r v i n c u l o", "e n l a c e", "m a r c a d o r", "o r d e n a d o r", "l a p i z", "o f i m a t i c a", "i n f o r m e" ];
    var indice = Math.round(Math.random() * 27)
    var cadena = new String(libreriaPalabras[indice])
    var palabra = cadena.split(" ")
    return palabra;
}

var hombre = ["________",
              "   |",
              "   |",
              "   |",
              "   O",
              "  /|\\",
              "  / \\",
              "         ",
              "         ",
              "________"];

var palabraSecreta = obtenerPalabraSecreta();

for(var i = 0; i < palabraSecreta.length; i++){
    asteriscoEnMatriz.push("*");
}
console.log(asteriscoEnMatriz.join(""));
var i = 1;
var cont = 0;
while(cont < hombre.length){
   var flag1 = true;
   var flag2 = false;

   if(asteriscoEnMatriz.join("") != palabraSecreta.join("")){

     while(letra.length != 1 || flag1){
       flag1 = false;
       letra = prompt("Ingresar caracter n° " + (i));
       for(var l in letrasPalabra){
          if(letra == letrasPalabra[l])
          flag = true;
       }
    }
      letrasPalabra.push(letra);

      console.log((i) + " intento ");
      for(var j in palabraSecreta){
        if(letra == palabraSecreta[j]){
          asteriscoEnMatriz[j] = letra;
          flag2 = true;
          }
      }
      console.log(asteriscoEnMatriz.join(""));
   if(!flag2){
    cont++;
    for(var k = 0; k < cont; k++)
    console.log(hombre[k]);
    }
   }else{
     break;
   }
  i++;
}

if(asteriscoEnMatriz.join("") != palabraSecreta.join("")){
    console.log(palabraSecreta.join(""));
    console.log("PERDISTE");
}else{
    console.log("GANASTE");
}
