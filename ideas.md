# Arah Desain — Tugu Jogja

## Tiga pendekatan visual

| Nama tema | Ringkasan sangat singkat | Probabilitas |
| --- | --- | --- |
| **Jejak Poros Kota** | Editorial heritage yang mengubah monumen menjadi jangkar orientasi kota, dengan lapisan peta dan memori jalan. | 0.07 |
| **Malam di Pal Putih** | Nuansa malam yang tenang, kain indigo, dan cahaya keemasan yang memperlihatkan Tugu sebagai penanda pulang. | 0.03 |
| **Arsip Jalan Sudirman** | Gaya arsip kota yang bersih, memadukan foto dokumenter, keterangan singkat, dan ritme halaman seperti buku panduan. | 0.09 |

## Pendekatan terpilih: Malam di Pal Putih

### Gerakan desain

Terinspirasi oleh **editorial travel journal** dan teknik cetak linocut Jawa kontemporer. Situs memperlakukan Tugu sebagai penanda orientasi: tenang, terang, dan dekat dengan denyut jalan kota.

### Prinsip inti

1. Foto nyata menjadi bukti tempat; ornamen grafis hanya menjadi bingkai dan ritme.
2. Bidang indigo gelap dan gading hangat membangun suasana malam yang intim tanpa gaya neon.
3. Komposisi asimetris meniru arah jalan dan poros simbolik, bukan grid kartu seragam.
4. Informasi praktis hadir sebagai catatan perjalanan yang mudah dipindai, bukan sebagai brosur generik.

### Filosofi warna

Indigo pekat memberi kedalaman dan mengingatkan kain batik malam; gading batu menyerap karakter badan monumen; kuning kuningan dipakai hemat sebagai sinyal arah dan aksen. Warna-warna ini membangun rasa perjalanan yang berwibawa, bukan kemewahan dekoratif.

### Paradigma tata letak

Halaman mengikuti **poros vertikal miring**: pembuka foto lebar, pita informasi menyamping, lalu fragmen panduan yang berpindah dari kiri ke kanan mengikuti arus perjalanan. Konten tidak berpusat secara terus-menerus.

### Elemen khas

1. Garis poros emas tipis yang muncul sebagai pembatas dan indikator bagian.
2. Motif kawung yang sangat redup sebagai tekstur latar.
3. Bingkai foto dengan sudut potong terinspirasi atap pelindung Tugu.

### Filosofi interaksi

Interaksi bersifat seperti membuka catatan lapangan: tautan navigasi meluncur secara presisi, fakta praktis diperluas seperlunya, dan pilihan bahasa mengubah seluruh naskah tanpa mencampur bahasa pada satu tampilan.

### Animasi

Animasi hanya memakai transform dan opacity dengan transisi 160–280ms serta easing keluar yang tegas. Foto dan catatan masuk dengan pengungkapan vertikal halus; garis poros memanjang saat bagian memasuki viewport. Semua gerak non-esensial dimatikan untuk `prefers-reduced-motion`.

### Sistem tipografi

`Fraunces` menjadi display serif untuk judul yang puitis dan bertekstur; `DM Sans` menjadi teks informatif yang jelas. Judul memakai ukuran besar dengan spasi rapat, label memakai huruf kapital kecil dan tracking lebar, dan teks isi menjaga lebar baca yang nyaman.

### Esensi merek

**Panduan Tugu Jogja untuk pelancong yang ingin membaca pusat Yogyakarta, bukan hanya memotretnya.** Kepribadian: hening, terpelajar, membumi.

### Suara merek

Nada tutur bersifat peka tempat, ringkas, dan memberi arah tanpa berbasa-basi. Contoh: “Berhenti sejenak; kota bergerak mengelilingi penanda ini.” dan “Datang saat cahaya menurun, lalu lanjutkan perjalananmu ke Malioboro.”

### Wordmark dan logo

Marka memakai siluet puncak Tugu yang disederhanakan, dikunci oleh geometri empat arah sebagai lambang orientasi. Wordmark menggunakan serif berkarakter, bukan font standar, dan favicon merupakan versi monokrom dari siluet yang sama.

### Warna merek khas

**Indigo Pal Putih — `#16283A`**.

## Style Decisions

- Foto dokumenter Tugu dan persimpangan harus terlihat di pembuka dan setidaknya satu frame besar di bagian tengah; ornamen ilustratif hanya mendukung suasana.
- Garis poros kuningan, tekstur kawung yang redup, dan bingkai foto bersudut potong adalah petunjuk orientasi yang muncul berulang di seluruh halaman.
- Tampilan bahasa Mandarin memakai pasangan Noto Serif SC dan Noto Sans SC agar nada editorial yang tenang dan terpelajar tetap setara dengan versi Latin.
