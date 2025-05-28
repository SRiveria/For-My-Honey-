const materi = {
  judul: "MULOK: Etnis Sasak dan Budaya Sasak untuk SMA/SMK/SMALB Kelas XI",
  deskripsi: `Materi ini membahas tentang kebudayaan Sasak, meliputi legenda, anekdot, biografi tokoh terkenal, teks eksplanasi, dan deskripsi budaya Sasak serta permainan tradisional Sasak.`
};

const soal = [
  {
    question: "Apa definisi legenda menurut Kamus Besar Bahasa Indonesia?",
    answers: [
      { text: "Cerita tentang kehidupan manusia yang memiliki bukti sejarah", correct: false },
      { text: "Cerita rakyat pada zaman dahulu yang ada hubungannya dengan peristiwa sejarah", correct: true },
      { text: "Cerita fiksi yang sengaja dibuat untuk hiburan masyarakat", correct: false },
      { text: "Narasi singkat yang berisi pesan moral dan pendidikan", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Legenda yang menceritakan suatu kisah tentang agama tertentu termasuk jenis legenda...",
    answers: [
      { text: "Legenda keagamaan", correct: true },
      { text: "Legenda perseorangan", correct: false },
      { text: "Legenda gaib", correct: false },
      { text: "Legenda lokal", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Ciri khas legenda yang bersifat migration (berpindah-pindah) maksudnya adalah...",
    answers: [
      { text: "Legenda selalu berkaitan dengan perpindahan suku bangsa", correct: false },
      { text: "Tokoh dalam legenda selalu berpindah tempat", correct: false },
      { text: "Cerita legenda dapat ditemukan di berbagai tempat dengan versi yang berbeda", correct: true },
      { text: "Legenda selalu menceritakan perjalanan tokoh dari satu tempat ke tempat lain", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Pesan moral yang dapat diambil dari legenda Cilinaya adalah...",
    answers: [
      { text: "Pentingnya menjaga lingkungan alam", correct: false },
      { text: "Akibat buruk dari sifat tidak menepati janji", correct: true },
      { text: "Keberanian dalam menghadapi musuh", correct: false },
      { text: "Pentingnya melestarikan budaya daerah", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Dalam legenda Tanjung Menangis, Raja Daha menunjukkan sifat...",
    answers: [
      { text: "Bijaksana dan penyayang", correct: false },
      { text: "Jujur dan bertanggung jawab", correct: false },
      { text: "Ingkar janji dan mengabaikan nazar", correct: true },
      { text: "Berani dan rela berkorban", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Fungsi utama legenda dalam masyarakat Sasak adalah...",
    answers: [
      { text: "Sebagai hiburan semata", correct: false },
      { text: "Sebagai cerita pengantar tidur", correct: false },
      { text: "Sebagai sumber pendapatan masyarakat", correct: false },
      { text: "Sebagai media pendidikan moral dan pelestarian nilai budaya", correct: true }
    ],
    difficulty: "mudah"
  },
  {
    question: "Anekdot adalah sebuah cerita singkat dan lucu atau menarik, yang...",
    answers: [
      { text: "Selalu bersifat fiksi dan rekaan", correct: false },
      { text: "Mengandung kritik dan sindiran tajam", correct: false },
      { text: "Menggambarkan kejadian atau orang sebenarnya", correct: true },
      { text: "Hanya bertujuan menghibur tanpa pesan moral", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Anekdot yang menggunakan tokoh sektor binatang termasuk jenis anekdot...",
    answers: [
      { text: "Anekdot tokoh terkenal", correct: false },
      { text: "Anekdot binatang", correct: true },
      { text: "Anekdot sufi", correct: false },
      { text: "Anekdot kritik", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Nilai pesan moral yang terkandung dalam anekdot 'Tuaq Alif Mateq Anaq Enjeq' adalah...",
    answers: [
      { text: "Sepandai-pandai menyimpan rahasia sekali waktu akan ketahuan", correct: true },
      { text: "Pentingnya membantu sesama dalam kesulitan", correct: false },
      { text: "Kejujuran adalah kunci keberhasilan", correct: false },
      { text: "Kesabaran dalam menghadapi cobaan", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Anekdot 'Amaq Abuk' mengajarkan kita tentang...",
    answers: [
      { text: "Kesederhanaan hidup di pedesaan", correct: false },
      { text: "Pentingnya bekerja keras untuk mencapai tujuan", correct: false },
      { text: "Dampak negatif dari sikap suka menipu", correct: true },
      { text: "Persahabatan yang tulus antar penduduk desa", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Tujuan utama anekdot nasihat adalah...",
    answers: [
      { text: "Menghibur pendengar dengan cerita lucu", correct: false },
      { text: "Mengkritik pemerintah atau penguasa", correct: false },
      { text: "Menasehati dengan mengandung nilai-nilai kehidupan", correct: true },
      { text: "Menceritakan pengalaman pribadi pengarang", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "TGKH Muhammad Zainuddin Abdul Madjid adalah pendiri organisasi Islam terbesar di NTB yaitu...",
    answers: [
      { text: "Muhammadiyah", correct: false },
      { text: "Nahdlatul Wathan", correct: true },
      { text: "Nahdlatul Ulama", correct: false },
      { text: "Al-Irsyad", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Tahun berapa TGKH Muhammad Zainuddin Abdul Madjid lahir?",
    answers: [
      { text: "1898", correct: true },
      { text: "1904", correct: false },
      { text: "1908", correct: false },
      { text: "1912", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Karya TGKH Muhammad Zainuddin Abdul Madjid yang sangat terkenal di kalangan masyarakat Sasak antara lain...",
    answers: [
      { text: "Al-Fatihah dan Yasin", correct: false },
      { text: "Tafsir Al-Quran dan Hadits", correct: false },
      { text: "Batu Ngompal dan Wasiat Renungan Masa", correct: true },
      { text: "Tarikh Islam dan Fiqih Wanita", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "TGKH Shaleh Hambali dikenal sebagai ulama yang ahli dalam bidang...",
    answers: [
      { text: "Tafsir Al-Quran dan Hadits", correct: false },
      { text: "Fiqih pada mazhab Syafi'i", correct: true },
      { text: "Tasawuf dan Tarekat", correct: false },
      { text: "Bahasa Arab dan Sastra", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Salah satu wasiat terakhir TGKH Shaleh Hambali sebelum wafat adalah...",
    answers: [
      { text: "Peliharalah Persatuan dan Kesatuan Diantara Sesamamu", correct: true },
      { text: "Jangan pernah meninggalkan tanah Lombok", correct: false },
      { text: "Utamakan pendidikan agama daripada pendidikan umum", correct: false },
      { text: "Hapuskan semua praktik adat yang bertentangan dengan agama", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Teks eksplanasi adalah suatu bacaan yang berisi tentang...",
    answers: [
      { text: "Cerita fiksi dengan tokoh dan latar yang jelas", correct: false },
      { text: "Informasi mengenai proses terjadinya suatu peristiwa dan mengapa itu terjadi", correct: true },
      { text: "Biografi tokoh terkenal dan kontribusinya", correct: false },
      { text: "Deskripsi tempat dan penjelasan budaya", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Struktur teks eksplanasi terdiri dari...",
    answers: [
      { text: "Pembuka, isi, penutup", correct: false },
      { text: "Orientasi, komplikasi, resolusi", correct: false },
      { text: "Pernyataan umum, sebab-akibat, interpretasi", correct: true },
      { text: "Definisi, klasifikasi, deskripsi bagian", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Teks 'Mengembalikan Esensi Nyongkolan' termasuk jenis teks eksplanasi...",
    answers: [
      { text: "Tentang alam", correct: false },
      { text: "Tentang sosial", correct: true },
      { text: "Tentang teknologi", correct: false },
      { text: "Tentang budaya", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Menurut teks eksplanasi 'Nyongkolan', tradisi ini sebenarnya bertujuan untuk...",
    answers: [
      { text: "Menghibur masyarakat dengan musik tradisional", correct: false },
      { text: "Menunjukkan kekayaan keluarga pengantin", correct: false },
      { text: "Menyebar luaskan informasi tentang pernikahan dan menunjukkan rasa hormat", correct: true },
      { text: "Memamerkan pakaian adat kepada masyarakat", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Permasalahan utama yang dihadapi tradisi Nyongkolan saat ini menurut teks adalah...",
    answers: [
      { text: "Biaya pelaksanaan yang terlalu mahal", correct: false },
      { text: "Ketidakpahaman pelaku budaya dan kurangnya kontrol sosial", correct: true },
      { text: "Kesulitan mencari pemusik tradisional", correct: false },
      { text: "Larangan dari pemerintah daerah", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Warige adalah sistem waktu masyarakat Sasak yang digunakan untuk...",
    answers: [
      { text: "Menentukan arah kiblat dalam beribadah", correct: false },
      { text: "Mencatat sejarah kerajaan Sasak", correct: false },
      { text: "Menentukan langkah awal dalam aktivitas seperti bercocok tanam dan pernikahan", correct: true },
      { text: "Menghitung jumlah penduduk dan pajak", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Transformasi Warige menjadi Kalender Rowot Sasak dilakukan oleh...",
    answers: [
      { text: "Pemerintah Provinsi NTB", correct: false },
      { text: "Para tetua adat di setiap desa", correct: false },
      { text: "Lembaga Rowot Nusantara Lombok (Rontal)", correct: true },
      { text: "Universitas Mataram", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Kalender Rowot Sasak menggunakan acuan utama berdasarkan...",
    answers: [
      { text: "Peredaran matahari", correct: false },
      { text: "Fase bulan", correct: false },
      { text: "Bintang Rowot (rasi bintang Pleiades)", correct: true },
      { text: "Pergantian musim hujan dan kemarau", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Dalam komponen Kalender Rowot Sasak, Windon adalah...",
    answers: [
      { text: "Pemberian nama bulan dalam kalender", correct: false },
      { text: "Pemberian nama hari dalam seminggu", correct: false },
      { text: "Pemberian nama dalam putaran 8 tahunan", correct: true },
      { text: "Penentuan musim dalam setahun", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Sistem Penanggalan Rowot melakukan sinkronisasi dengan sistem penanggalan...",
    answers: [
      { text: "Masehi dan Qomariah", correct: false },
      { text: "Lunar dan Solar", correct: true },
      { text: "Jawa dan Bali", correct: false },
      { text: "China dan India", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Permainan tradisional Sasak 'Beledokan/Pletokan' menggunakan alat berupa...",
    answers: [
      { text: "Kelereng dan lubang tanah", correct: false },
      { text: "Sebatang bambu berukuran kecil dengan dua potongan", correct: true },
      { text: "Batu kecil dan gambar di tanah", correct: false },
      { text: "Karet gelang yang dilempar", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Permainan tradisional 'Selodor' mengajarkan nilai...",
    answers: [
      { text: "Kerjasama tim dan kehati-hatian", correct: true },
      { text: "Kejujuran dan sportivitas", correct: false },
      { text: "Kreativitas dan imajinasi", correct: false },
      { text: "Kesabaran dan ketelitian", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Dalam permainan 'Jingklak', pemenang ditentukan berdasarkan...",
    answers: [
      { text: "Kecepatan menyelesaikan permainan", correct: false },
      { text: "Jumlah batu yang berhasil dikumpulkan", correct: true },
      { text: "Ketepatan melempar batu ke sasaran", correct: false },
      { text: "Keseimbangan saat berjalan dengan satu kaki", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Permainan 'Karem/Tolang Bagek' menggunakan media...",
    answers: [
      { text: "Batu kecil dan gambar di tanah", correct: false },
      { text: "Karet gelang dan kayu", correct: false },
      { text: "Biji asam atau 'tolang bagek'", correct: true },
      { text: "Kerikil dan pasir", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Permainan tradisional 'Cepok' adalah permainan yang menunjukkan...",
    answers: [
      { text: "Ketangkasan dalam berlari", correct: false },
      { text: "Keterampilan memainkan alat musik", correct: false },
      { text: "Ketangkasan dalam bermain seni bela diri", correct: true },
      { text: "Kecerdasan dalam menjawab teka-teki", correct: false }
    ],
    difficulty: "susah"
  }
];
