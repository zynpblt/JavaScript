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









console.log(isimler);