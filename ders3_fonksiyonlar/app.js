/*===================================
 //    FONKSIYONLAR
==================================*/

//! 1.YONTEM: FUNCTION DECLARATION
// DECLARATION yontemi ile fonksiyonun tanimlanmasi cagrilmasindan once veya sonra olabilir.


//fonksiyonun tanimlanmasi

//function yazdirAd()
//{
  //  console.log("Hakan");
//}
//fonksiyonun cagrilmasi
//yazdirAd()//hakan


//ornek : klavyeden girilen sayinin tek mi cift mi
// oldugunu gosteren bir fonk yaziniz.

 //const sayiniz=prompt("sayi giriniz");
 //console.log(tekCift(sayiniz));

 //function tekCift(sayimiz){
   //  return sayimiz%2==0?`${sayimiz} cifttir`: `${sayimiz} tektir`
 //}


 //! 2. YONTEM : FUNCTION EXPRESSION (bu yontem daha yaygin)

 //const tekCift1=function(sayi){
  //  return sayi%2==0?"CIFT":"TEK";
 //}
 //console.log(tekCift1(5));  

 //ornek 2 verilen sayidan en buyuk sayiyi bulma

 let buyukBul=function(a,b,c){

let enBuyuk;

if(a>b && a>c){
    enBuyuk=a;
}
else if(b>c && b>a){
    enBuyuk=b;
}
else{
    enBuyuk=c;
}return enBuyuk;
 }
 console.log( buyukBul(5,8,9));


 //! 3. YONTEM : FUNCTION ARROW(ok)

//const ciftMi=(sayi)=> (sayi%2==0 ? "cift":"tek");

const ciftMi = (num) => (num % 2 == 0 ? `${num} = Cift` : `${num} = Tek`);

console.log(ciftMi(7));

//ornek

const taban = prompt("taban gir");
const us = prompt("us giriniz");

const ustAl=(taban,us)=>taban**us;

console.log(ustAl(taban,us));