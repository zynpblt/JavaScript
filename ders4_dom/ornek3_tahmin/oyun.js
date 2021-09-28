
// bilgisayar 1-20 arasinda bir sayi tut

let rastgeleSayi = Math.floor(Math.random() * 20 + 1);
let puanPc = 10;
let rekorPc = 0;

// her kontrol et butonuna tiklandiginda calisacak fonksiyon
document.querySelector(".kontrol").onclick = function () {
  // tahminim dogruysa
  const tahmin = document.querySelector(".tahmin").value;
  if (tahmin == rastgeleSayi) {
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".question").textContent = rastgeleSayi;
    document.querySelector(".mesaj").textContent = "🎊Tebrikler Bildiniz";

    //rekoru guncelle
    if (puanPc > rekorPc) {
      rekorPc = puanPc;
      document.querySelector(".rekor-skor").textContent = PuanPc;
    }
  }
  // tahmin yalissa
  else {
    if (puanPc > 1) {
      puanPc--;
      let mesaj = document.querySelector(".mesaj");

      tahmin < rastgeleSayi
        ? (mesaj.textContent = "Artir 📈")
        : (mesaj.textContent = "Azalt 📉");
      document.querySelector(".skor").textContent = puanPc;
    } else {
     document.querySelector(".mesaj").textContent="Oyunu Kaybettiniz";
      document.querySelector(".skor").textContent =0;
      document.querySelector("body").style.backgroundColor="red";

    }
  }
};