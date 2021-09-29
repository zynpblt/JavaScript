const yaslar=[5,10,28,42];
const isimler=["Hakan","Alattin","Furkan","Dayanch",20,40,true,23.5, yaslar];
console.log(isimler);

console.log(isimler[3]);
console.log(isimler[3]="Sadi");
console.log(isimler);
//const degistirilemiyordu ama non-primitive(arrayler)
//lerde degistirilebiliyor.dizi bir adres gosterir
//isimler gibi, o yuzden primitive den farkli

isimler[isimler.length-2]=false;
console.log(isimler[8][1]);


//*****************DIZIYI DEGISTIREN METHODLAR *******/

let meyveler=["Elma","Armut","Muz","Kivi"];
const baslik=document.querySelector(".baslik");
baslik.textContent=meyveler;


//pop() en son elemani siler
//log icinde yazdirirsaniz da sildigini yazdirir.

//meyveler.pop();
console.log(meyveler.pop());

//shift() dizinin 0 indexli elemanini siler ve
//yazdirirsak sildigi elemani dondurur

//meyveler.shift();//Armut,Muz
console.log(meyveler.shift());//elma
//silme metodlari logda yazdirilirsa sildigi elemani dondurur

//push()dizinin sonuna eleman ekler

meyveler.push("Cilek","Karpuz");

//unshift() dizinin 0 indexine eleman ekler

meyveler.unshift("Ayva");

//reverse() dizinin tamamini ters cevirir
//meyveler.reverse();

//sort( diziyi) natural order yapa

meyveler.sort();


//splice()
meyveler.splice(1,     0,   "erik");
//index silmeden ekle
meyveler.splice(4,    1,    "uzum");
//index silerek ekle

//ilk kod=eleman eklenecek index
//2.kod=1 ise o indexdeki elemani siler,0 ise elemanm silmeden ekle
//3.kod=eklenecek veri


//***********DIZI ERISIM METODLARI */
const sayilar=[3,4,5,2,"2","uc","bes",5,2,7];

//includes() kapsiyormu

console.log(sayilar.includes("5"));//false
console.log(sayilar.includes(5));//true

//indexOf() ilk eslesen index i dondurur

console.log(sayilar.indexOf(2));
console.log(sayilar.lastIndexOf(5));

console.log(sayilar.indexOf(2,4));//8 ikinci 2 yi
//dondurur(4.indexten sonra aramaya baslar)
console.log(sayilar.indexOf(5,3));//7

//join()dizinin elemanlarini birlestirip string hale getirir

console.log(sayilar.join("-"));
//join default olarak virgullerle ayirarak diziden kurtarir
//ama istersek " " yazarak bosluklarla,"-" yaparak  - lerle ayirabiliriz

//toString() join gibidir ama sadece virgulle ayirir

console.log(sayilar.toString());


//*************************** */

const arabalar=["bmw","mercedes","Volvo","sahin","anadol"];

//slice()
 console.log(arabalar.slice(2));//2.indexli elemandan sonuna kadar

 console.log(arabalar.slice(1,3));//mercedes,volvo ilk index dahil 2.siradaki index e kadar

 //***CONCAT************************ */

 const birlesik=sayilar.concat(arabalar,true,false,[3,4,5],meyveler);

 console.log(birlesik);




















baslik.textContent=sayilar;
console.log(sayilar);