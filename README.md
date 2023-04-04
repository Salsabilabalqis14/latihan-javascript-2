# latihan-javascript-2

## Math Number
Latihan membuat fungsi menggunakan method Math

### Penjelasan Kode Program

1. Membuat function bernama `rand` untuk generate random integer dari 2 buah input integer yaitu nilai minimum `min` dan maksimum `max`. Nilai random harus berada pada range tersebut.
   Dengan ketentuan :
    - Jika nilai `min` dan `max` adalah `null`, maka function mengembalikan nilai `0`
    - Jika nilai `max` adalah `null`, maka nilai `min` menjadi `0` dan `max` mengambil nilai dari `min`
   
   Pengambilan nilai random menggunakan method `Math.random()`.
   
2. Membuat function bernama `chooseDesimals` untuk menentukan batas desimal yang akan ditampilkan dari sebuah angka desimal menggunakan method `toFixed()`. Function ini menerima 2 inputan, yaitu :
    - `n` berupa data number, dimana n adalah nilai desimal yang akan ditentukan batas desimalnya
    - `d` berupa data number, dimana d merupakan besaran nilai berapa banyak angka dibelakang desimal dari `n`.
    
3. Membuat function bernama `isItNumeric` untuk mengecek sebuah inputan merupakan numerik atau bukan. Function ini menerima 1 inputan `x`. Pengecekan dilakukan menggunakan method `isNaN()`.
   Artinya :
     - Jika `isNaN(x)` benar atau bernilai true, maka function akan mengembalikan `false`
     - Jika tidak, maka function akan mengembalikan `true`.

4. Membuat function bernama `roundUpToFive` untuk membulatkan nilai ke atas dalam kelipatan 5. Function ini akan menerima satu inputan `num`. Pembulatan ke atas dilakukan dengan menggunakan method `Math.ceil()` yang diberi argumen berupa nilai dari variable `num` dibagi (/) dengan 5, kemudian hasilnya dikali (*) dengan 5 untuk mendapatkan nilai kelipatan 5.
