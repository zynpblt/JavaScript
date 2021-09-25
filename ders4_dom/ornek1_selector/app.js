//=============================================================
//            GETELEMENTBYID

const paragraf= document.getElementById("para").style;
paragraf.backgroundColor="black";
paragraf.color="white";
paragraf.fontSize="20px";

const buton=document.getElementById
("btn");
buton.style.with="100px";
buton.style.color="red";
buton.style.fontSize="18px";
buton.textContent="ARA";//!textContext=tag larin icerigindeki yaziyi degistirmek istersek


//*****GETELEMENTBYTAGNAME */


const resim=document.getElementsByTagName
("img");
resim[0].style.width="300px";
resim[0].style.height="300px";
resim[1].style.border="3px solid red";

const baslik=document.getElementsByClassName("h1");
baslik[0].style.textAlign="center";

//********QUERYSELECTOR********* */
//!EN COK KULLANILAN CAGIRMA YOLU

document.querySelector(".title").textContent="DOM SELECTOR KAVRAMI👋";
document.querySelector("#govde").style.backgroundImage="linear-gradient(green,blue,pink)";


//*****EVENT**** */

//(onmousover,onmausout=fare ustune gelince ayrilinca)
const h=document.querySelector(".h1");

h.onmouseover=function(){
h.style.color="red";
h.style.backgroundColor="white";
}
h.onmouseout=function(){
    h.style.color="pink";
    h.style.backgroundColor="yellow";
}

//1.resme tikladigimizda img ler yer degistirsin

document.querySelector(".bir").onclick=function(){
 document.querySelector(".bir").src="./img/logo2.png";
 document.querySelector(".iki").src="./img/js_logo.png";
}