# E-Ticaret Vue.js Projesi

Bu proje, Vue.js kullanılarak geliştirilen bir e-ticaret web sitesi frontend uygulamasıdır. Proje, Figma tasarımı temel alınarak geliştirilmiş olup, responsive tasarım ve modern JavaScript kütüphaneleri kullanılmıştır.

## Genel Bilgilendirme

Projede Vue.js framework'ü ile API'den alınan veriler kullanılarak dinamik bir yapı oluşturulmuştur. Her bölüm, component yapısına uygun olarak modüler bir şekilde geliştirilmiştir. Bu sayede hem kodun yeniden kullanılabilirliği hem de yönetilebilirliği sağlanmıştır. Ayrıca Vue.js'in `router` ve `store` eklentileri kullanılarak yönlendirme ve durum yönetimi yapılmıştır.

Proje boyunca kullanılan başlıca kütüphaneler şunlardır:
- **Splide.js**: Slider oluşturmak için kullanıldı.
- **Swiper.js**: Galeri ve slayt geçişleri için kullanıldı.

## Tasarım ve Kullanılabilirlik

Tasarım, tamamen duyarlı (responsive) olup, mobil ve masaüstü cihazlarda sorunsuz çalışacak şekilde optimize edilmiştir. Figma üzerinde hazırlanan arayüz tasarımına sadık kalınarak projeye entegre edilmiştir.

- Figma Tasarım Dosyası: [Tasarım Dosyası](https://www.figma.com/design/g74YF1qu7q0FgTfLcsuVJI/eCommerce-Website-%7C-Web-Page-Design-%7C-UI-KIT-%7C-Interior-Landing-Page-(Community)?node-id=117-1132&node-type=vector&m=dev)

## Özellikler

- **Vue.js Component Yapısı**: Tekrarlı kod yazmayı önlemek ve modüler bir yapı oluşturmak için component tabanlı bir mimari kullanıldı. Özellikle header ve footer gibi sabit elemanlar her sayfada yeniden yazılmadan kullanılabiliyor.
- **API Entegrasyonu**: API'den alınan verilerle ürün listeleri dinamik olarak oluşturulmakta. Bu sayede veri akışı sürekli güncellenmekte ve kullanıcıya en güncel bilgiler sağlanmaktadır.
- **Responsive Tasarım**: Mobil ve masaüstü cihazlar için optimize edilmiş, duyarlı bir tasarım yapısı kullanıldı. Farklı ekran boyutlarında optimum performans ve kullanıcı deneyimi sunulmaktadır.
- **Router ve Store Yönetimi**: Vue Router ile sayfa geçişleri hızlı ve kesintisiz bir şekilde sağlanırken, Vuex Store ile global veri yönetimi kolaylaştırılmıştır.
- **Node.js ile Sunucu Yapılandırması**: Projede backend için Node.js kullanılarak bir sunucu yapılandırması oluşturuldu. `server.js` dosyası ile API endpoint'leri yönetildi ve veritabanı işlemleri gerçekleştirildi. Bu sunucu, frontend ile sorunsuz bir veri alışverişi sağlamak amacıyla yapılandırıldı.
- **SQL Server ile Veritabanı Yapılandırması**: Projede veri saklama ve yönetimi için SQL Server kullanıldı. Node.js ve SQL Server arasında oluşturulan bağlantı sayesinde, ürün ve kullanıcı verileri güvenli bir şekilde depolanmakta ve gerektiğinde sorgulanarak hızlıca erişilebilmektedir. SQL sorguları aracılığıyla verilerin işlenmesi ve manipülasyonu sağlanmaktadır.

## Öğrenilenler

Bu proje kapsamında:

- Vue.js build ve derleme süreçleri öğrenildi.
- Geliştirilen web sitesi Netlify platformunda [https://e-commercevuejs.netlify.app/](https://e-commercevuejs.netlify.app/) adresinde yayınlandı.
- HTTP protokolü üzerinden yerel sunucuda test işlemleri gerçekleştirildi.

## Yapılandırma

Daha fazla yapılandırma detayına ulaşmak için Vue.js CLI dokümantasyonuna göz atabilirsiniz: [Vue CLI Konfigürasyonu](https://cli.vuejs.org/config/).

## Projenin Kurulumu ve Çalıştırılması

### Gerekli bağımlılıkları yüklemek için:
```bash
npm install

npm run serve

cd sql-vue-api 

node server.js

