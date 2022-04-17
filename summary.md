Query and Apollo

1.  Tipe Query ada 4 :
 Query - Basics: Menggunakan graphQL  untuk mendapatkan data yang menentukan bidang apa yang didapatkan dan graphQL akan memberikan data berdasarkan apa yang kami definisikan. 
 Query - multiple related data sources / collections : dapat menggunakan query untuk mendapatkan data dari beberapa koleksi terkait. 
 Query - multiple unrelated data sources / collections : untuk mendapatkan data dari beberapa koleksi yang tidak terkait untuk meminimalkan permintaan jaringan. 
Query - fragments : Fragmen GraphQL adalah bagian dari logika yang dapat dibagi antara beberapa kueri dan mutasi. 

2. Apollo Client adalah perpustakaan manajemen status komprehensif untuk JavaScript yang memungkinkan kami mengelola data lokal dan jarak jauh dengan GraphQL. 
Apollo Client digunakan untuk mengambil, menyimpan, dan memodifikasi data aplikasi, sambil memperbarui UI secara otomatis. 

3. Query dengan Apollo Client
 lazy query: Kait useLazyQuery sangat cocok untuk mengeksekusi query sebagai respons terhadap peristiwa selain rendering komponen. 
Refetching untuk menyegarkan hasil query sebagai respons terhadap tindakan pengguna tertentu.
