const maaslar=[4000,5000,3500,4200,2850,5000,7500];

const liste=document.querySelector(".liste-ul");

for(let i of maaslar){
    liste.innerHTML=liste.innerHTML+`<li>${i}</li>`
}

//for(let i in maaslar){
 //   liste.innerHTML=liste.innerHTML+`<li>${maaslar[i]}</li>`
//}

//ekle butonuna tikladigimizda diziye ve listeye yeni veri ekle

const giris=document.querySelector(".liste");

document.querySelector(".ekle").onclick=function() {
liste.innerHTML=liste.innerHTML+ `<li> ${giris.value}</li>`
//giris.value="";

maaslar.push(giris.value);
aciklamaGuncelle(maaslar);
}

//Sil butonuna tiklandiginda listedeki ve dizideki son elamani sil.
document.querySelector(".sil").onclick = function () {
  if (maaslar.length == 0) {
    alert("Silinecek oge kalmadi.");
  } else {
    maaslar.pop();
     liste.removeChild(liste.lastElementChild);
     aciklamaGuncelle(maaslar);
  }
};

const aciklamaGuncelle=function(maaslar){
document.querySelector(".aciklama").innerHTML=`Maaslar: ${maaslar.join(" ")}`;

}