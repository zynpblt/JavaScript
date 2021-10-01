
//***********NESNELER************* */

//diziler sıralı bellek bölgeleridir. dolayısıyla dizilere erişim index le olur. Eğer diziler karışıksa (nesne) indexle erişim güçlüğü ortaya çıkar bu yüzden =>-......................................................


//! OBJECT (nesne)

// nesnelerde key-value (property-value) yapısı kullanılır
//nesnelerde aradığımız veriye erişmek için key adını kullanmamız gerekir..........

const insan={
    ad:"Kenan",
    soyad:"Kul",
    yas:30,
    meslek:"developer",
    diller:["Java", "JS", "SQL" , "HTML"]
    
    };
    
    console.log(insan);
    
    //1) .dot notasyonu
    console.log( insan.ad);
    console.log(insan.diller);
    //2) köşeli parantez içine 
    console.log( insan["ad"]);
    console.log(insan["diller"]);
    
    console.log(`Adım: ${insan.ad} ve yasım: ${insan.yas}`);
  //**************************** */
  // const bilgi= prompt("insan nesnesinden hangisini gormek istersin-ad,soyad,yas...-");
    //console.log(insan[bilgi]);
    
    //objeye key.value lar ekleme
    
    insan.konum="Türkiye";
    insan.email="insan@hotmail.com";
    insan["dogumTarihi"]=1991;
    
    console.log(insan);
    
    //****NESNE metodları */
    
     //bugünün yılını al=> Date().getFullYear() 
    const kisi = {
    ad:"Merve",
    soyad:"Aslan",
    dogumTarihi:1990,
    meslek:"tester",
    tool:"selenyum", 
    ehliyet:true,
    yasHesapla:function () {
    return new Date().getFullYear()-this.dogumTarihi;
    },
    ozet:function () {
    return ` ${this.ad} ${this.soyad} ${this.yasHesapla()} yasındadır` 
    
    }
    
    }
    console.log(kisi);
    
    console.log(kisi.yasHesapla());
    
    console.log(kisi.ozet());


    //Nesne (object) iterasyon ornekleri

    const people=[

    {
    ad:"hakan",
    soyad:"inal",
    meslek:"developer",
    yas:37

    },

    {
        ad:"kubilay",
        soyad:"tuncel",
        meslek:"team lead",
        yas:33
    
        },

        {
            ad:"said",
            soyad:"can",
            meslek:"grafiker",
            yas:15
        },
        

            {
                ad:"osman",
                soyad:"turker",
                meslek:"grafiker",
                yas:29
            
                },

                {
                    ad:"huseyin",
                    soyad:"harran",
                    meslek:"doktor",
                    yas:32
                
                    }
                

    ];
    console.log(people);

    //ornek:1 people dizisindeki kisilerin meskeklerini konsolda yazdiralim

    people.forEach((x)=>console.log(x.meslek));

    //2)people dizisindeki tum kisilerin yaslarini 1 artirarak yazdiriniz
    people.map((x)=>x.yas+1).forEach((x)=>console.log(x));

    //ornek3 yasi 35 e esit veya kucuk olanlarin adlarini yazdir
     people.filter((x)=>x.yas<=35).forEach((x)=>console.log(x.ad));

     //ornek4) people dizisindeki kisilerin isimlerini buyuk harf olarak alan
     //ve yaslarini 5 arttiran ve soyadinin ilk 2 harfini yazdiranfonksiyonu yazdiriniz

     const degisiklik=people.map((x)=>{ 
     return{

    

   
     ad:x.ad.toUpperCase(),
     yas:x.yas+5,
     soyad:x.soyad.slice(0,2)
    };
}).forEach((x)=>console.log(x));

//ornek5) meslegi developer olanlarin isimleri buyuk harf yapip ve yaslarini yazdiriniz
//(isterseniz diziye atayip diziyi yazdiriniz)

const yeni=people.filter((x)=>x.meslek=="developer").map((x)=>{
return{
    ad:x.ad.toUpperCase(),
    yas:x.yas,
}

}
);
console.log(yeni);