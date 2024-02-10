# NOWFILMS

## Peringatan

Website ini mungkin mengalami bug jika dijalankan melalui Live Server Visual Studio Code. Untuk menghindari masalah tersebut, disarankan untuk mengaksesnya melalui website yang sudah di-hosting atau mengikuti langkah-langkah di bawah ini.

## Instruksi

Jika Anda mengalami kesulitan ketika menjalankan website ini melalui Live Server di Visual Studio Code, ikuti langkah-langkah berikut:

1. Cari dan buka file `film.js` di dalam direktori `public/script/`.
2. Temukan elemen `cover` yang memiliki atribut `href`.
3. Ubah nilai atribut `href` tersebut menjadi `"/public/pages/detail.html"`.

Contoh:

```javascript
// Sebelum perubahan
<a href="../pages/detail.html"></a>

// Setelah perubahan
<a href="/public/pages/detail.html"></a>
Simpan perubahan tersebut dan jalankan ulang website.
```
## Alternatif
Anda juga dapat mengakses website melalui link berikut setelah di-hosting:

<a href="nowfilms.vercel.app">Link Website</a>
