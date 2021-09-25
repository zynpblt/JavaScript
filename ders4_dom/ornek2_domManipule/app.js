//ara butonuna tiklandiginda calan telefon ciksin,zil calsin
let resim=document.querySelector(".resim");//resime ulastim
let ring=document.querySelector(".ses");//auidiye ulastim
//ara butonuna ulastim
document.querySelector(".on").onclick=function(){
    resim.src="./img/img.gif";//resim degistirdim
    ring.play();//sesi calistirdim play yaptim
}
//baglat butonuna basinca gif gelsin ses kesilsin
//baglat butonunu cagirdik
document.querySelector(".off").onclick=function(){
    resim.src="./img/telbagla.gif";
    ring.pause();//tel sesini susturduk
}
//konus butonuna basinca yeni gif gelsin
document.querySelector(".speak").onclick = function () {
    resim.src = " ./img/telfirlat.gif";
}
//ekle butonuna basildiginda yeni bir li eklentisi
const liste=document.querySelector(".liste");
document.querySelector(".ekle").
onclick=function(){
   
    const satir=document.querySelector(".dil");

    liste.innerHTML=liste.innerHTML+`<li>${satir.value}</li>`;
    satir.value="";
}
//sil butonuna tiklandiginda li elemani silinsin
document.querySelector(".sil").onclick=function(){
liste.removeChild(liste.lastChild);
}