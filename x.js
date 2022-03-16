//--- 9. Bölüm / Giriş Videosu --- 16.03.2022
// Aşağıdaki üç metot da kullanılabilir. Performans ve stabilite olarak
// gerekeni seçmek kodu yazana kalmış.

// Örneğin (1)'inci yaklaşımda author objesi değiştiğinde bunu referans alan
// tüm course objeleri de değişmiş olur. Değişiklik sadece bir yerde yapılır.
// Consistency (tutarlılık, stabilite) Bu yapıyı sağlamak için ek bir parametre
// (query) gerekecektir. Hız gereken durumlarda bu ek parametre kötü sonuç
// verebilir o zaman (2)'inci yaklaşımı kullanmak gerekiyor. (Performans)
// Bu yaklaşımda course objeleri içinde isimle ilgili değişiklik yapılması
// gerektiğinde bazıları obje içinde değiştirilmeden unutulabilir. Dez avantajı
// budur.

// (1) Using References (Normalization)
// let author = {
//   name: "TA2LSM",
// };

// let course = {
//   author: "id",
//   // yukarıdaki author objesinin id'si Hatalı dahi olsa mongoDB çalışır.
//   // burada gerçekten bir database bağlama işlemi yok sadece C'deki pointer
//   // gibi author'u işaret (referans) ediyor. Ayrıca birden fazla yayıncı
//   // da olabilir. Aşağıdaki gibi:
//   //authors: ["id1", "id2"],
// };

// (2) Using Embedded Documents (Denormalization)
// Bir dökümanı, diğeri içine gömülü olarak kullanma
// let course = {
//   author: {
//     name: "TA2LSM",
//     webSite: "www.something.com",
//   },
// };

// (3) Hyrid Approach
// Author içinde çok fazla bilgi varsa (2)'deki gibi bir yaklaşımda bunları
// tek tek eklemek biraz sıkıntılı olur. Bu nedenle bu kısımdaki bazı bilgileri
// embedded olarak

let author = {
  name: "TA2LSM",
  // so many other properties...
};

// Bu bize aslında kısa bir özet (snapshot) oluşturma imkanı veriyor.
let course = {
  author: {
    // << bu obje gösterimi database'de document'ı ifade ediyor
    id: "ref", // bu author dökümanının referansı
    name: "TA2LSM", // bu da o dökümandan sadece ismi al demek
  },
};
