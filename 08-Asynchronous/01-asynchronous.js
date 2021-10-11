// 1. Apa itu synchronous?
//  Synchronous adalah saat kita mengeksekusi perintah satu persatu dan berurutan
// 2. Apa itu asynchronous?
//  Asynchronous yang biasa dikenal juga dengan sebutan non-blocking mengizinkan komputer kita untuk memproses perintah lain sambil menunggu suatu proses lain yang sedang berlangsung.
// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
// bisa, dengan menggunakan javascript.
// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
/* 
first log:  1
first log:  2
first log:  3
first log:  4
first log:  5
second log:  1
second log:  2
second log:  3
second log:  4
second log:  5
*/
// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
//  karena variable i di deklarasi dengan var dan telah di ubah oleh proses first log karena i memiliki alamat yang sama

// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
for (let i = 1; i <= 5; i++) {
    console.log("first log: ", i); // 01 - Pertama
    setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
}