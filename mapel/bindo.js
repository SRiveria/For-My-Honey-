const materi = {
  judul: "Bahasa Indonesia: Karya Ilmiah dan Drama",
  deskripsi: ` Materi ini membahas konsep karya ilmiah dan drama.
  
    **KARYA ILMIAH**: 
    Karya ilmiah adalah tulisan yang berisi pembahasan suatu masalah berdasarkan hasil pengamatan, penelitian, atau kajian, yang disusun menurut metode ilmiah dan menggunakan bahasa baku. 

    **Ciri-ciri karya ilmiah**:
    1. Disusun secara sistematis.
    2. Menggunakan bahasa formal dan baku.
    3. Berdasarkan fakta dan data yang objektif.
    4. Bersifat logis, rasional, dan empiris.
    5. Mengandung analisis yang mendalam.

    **Perbedaan karya ilmiah dan non-ilmiah**:
    Karya ilmiah bersifat objektif, berdasarkan penelitian dan data, serta menggunakan bahasa baku. Sementara itu, karya non-ilmiah lebih bersifat subjektif, bisa berupa opini atau hiburan, dan menggunakan bahasa sehari-hari.

    **Struktur karya ilmiah**:
    - Pendahuluan (latar belakang, rumusan masalah, tujuan, manfaat)
    - Kajian Teori
    - Metode Penelitian
    - Hasil dan Pembahasan
    - Penutup (kesimpulan dan saran)
    - Daftar Pustaka

    **Langkah-langkah menyusun karya ilmiah**:
    1. Menentukan topik.
    2. Merumuskan tujuan dan rumusan masalah.
    3. Mengumpulkan data.
    4. Menyusun kerangka.
    5. Menulis sesuai struktur.
    6. Melakukan revisi.
    7. Menyusun daftar pustaka.

    Daftar pustaka penting untuk memberikan penghargaan pada sumber referensi, menunjukkan validitas informasi, dan meningkatkan kredibilitas.

    **Tujuan penulisan karya ilmiah**:
    Menyampaikan hasil penelitian secara sistematis, memberikan informasi/solusi, mengembangkan ilmu pengetahuan, dan melatih berpikir kritis.

    **DRAMA**:
    Drama adalah karya sastra berupa dialog yang dipentaskan. 

    **Unsur intrinsik drama**:
    - Alur
    - Penokohan
    - Latar
    - Tema
    - Dialog

    Drama berbeda dengan prosa karena ditulis dalam bentuk dialog untuk dipentaskan. Ciri khas naskah drama adalah dominasi dialog antar tokoh.

    **Petunjuk lakuan (stage direction)**:
    Bagian drama yang memberikan petunjuk tentang gerakan, ekspresi, atau penampilan tokoh.

    **Jenis-jenis drama**:
    - Drama komedi (menghibur)
    - Drama tragedi (tokoh utama mengalami kemalangan/kematian)
    - Drama satire (kritik sosial)
    - Melodrama (emosi berlebihan)

    **Konflik dalam drama** berfungsi untuk membangun ketegangan dan pengembangan cerita.

    **Tujuan mempelajari drama** adalah untuk mengapresiasi karya sastra dan mengembangkan keterampilan berkomunikasi.
  `,
};

const soal = [
  {
    question: "Apa pengertian karya ilmiah yang tepat?",
    answers: [
      { text: "Tulisan yang dibuat untuk hiburan dengan bahasa yang indah", correct: false },
      { text: "Tulisan yang berisi pembahasan suatu masalah berdasarkan hasil pengamatan, penelitian, atau kajian, yang disusun menurut metode ilmiah dan menggunakan bahasa baku", correct: true },
      { text: "Tulisan yang berisi opini penulisnya dengan gaya bahasa bebas", correct: false },
      { text: "Tulisan yang dibuat untuk mengekspresikan perasaan penulis", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Berikut ini yang BUKAN merupakan ciri-ciri karya ilmiah adalah...",
    answers: [
      { text: "Disusun secara sistematis", correct: false },
      { text: "Menggunakan bahasa formal dan baku", correct: false },
      { text: "Bersifat subjektif berdasarkan pendapat pribadi", correct: true },
      { text: "Bersifat logis, rasional, dan empiris", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Perbedaan utama antara karya ilmiah dan karya non-ilmiah terletak pada...",
    answers: [
      { text: "Jumlah halaman yang ditulis", correct: false },
      { text: "Penggunaan gambar dan ilustrasi", correct: false },
      { text: "Objektifitas, dasar penulisan, dan penggunaan bahasa", correct: true },
      { text: "Kepopuleran penulisnya", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Contoh karya non-ilmiah adalah...",
    answers: [
      { text: "Laporan penelitian tentang pemanasan global", correct: false },
      { text: "Skripsi tentang perilaku konsumen", correct: false },
      { text: "Cerpen berjudul 'Hujan di Bulan Juni'", correct: true },
      { text: "Artikel jurnal tentang vaksin Covid-19", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Bagian karya ilmiah yang berisi teori-teori relevan dengan masalah yang diteliti disebut...",
    answers: [
      { text: "Pendahuluan", correct: false },
      { text: "Kajian Teori/Tinjauan Pustaka", correct: true },
      { text: "Metode Penelitian", correct: false },
      { text: "Hasil dan Pembahasan", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Bagian pendahuluan karya ilmiah biasanya memuat komponen-komponen berikut, KECUALI...",
    answers: [
      { text: "Latar belakang", correct: false },
      { text: "Rumusan masalah", correct: false },
      { text: "Daftar pustaka", correct: true },
      { text: "Tujuan penelitian", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Langkah pertama dalam menyusun karya ilmiah yang baik adalah...",
    answers: [
      { text: "Menulis kesimpulan", correct: false },
      { text: "Membuat daftar pustaka", correct: false },
      { text: "Menentukan topik atau permasalahan", correct: true },
      { text: "Melakukan revisi dan penyuntingan", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Pentingnya mencantumkan daftar pustaka dalam karya ilmiah adalah untuk...",
    answers: [
      { text: "Menambah jumlah halaman agar karya ilmiah terlihat lengkap", correct: false },
      { text: "Memberikan penghargaan kepada sumber referensi dan meningkatkan kredibilitas", correct: true },
      { text: "Membuat pembaca bingung dengan banyaknya sumber", correct: false },
      { text: "Mempersulit pembaca dalam memahami isi karya ilmiah", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Fungsi dari daftar pustaka dalam sebuah karya ilmiah adalah...",
    answers: [
      { text: "Untuk hiasan agar karya ilmiah terlihat bagus", correct: false },
      { text: "Untuk mencantumkan sumber referensi yang digunakan sebagai bentuk penghargaan", correct: true },
      { text: "Untuk menunjukkan kemampuan penulis mencari banyak buku", correct: false },
      { text: "Untuk memenuhi syarat minimal jumlah halaman", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Tujuan penulisan karya ilmiah antara lain untuk...",
    answers: [
      { text: "Mengekspresikan perasaan penulis", correct: false },
      { text: "Menghibur pembaca dengan cerita fiktif", correct: false },
      { text: "Menyampaikan hasil penelitian secara sistematis", correct: true },
      { text: "Mempromosikan produk komersial", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Bahasa baku dalam karya ilmiah berperan untuk...",
    answers: [
      { text: "Menjaga keformalan, kejelasan, dan objektivitas penulisan", correct: true },
      { text: "Membuat karya ilmiah sulit dipahami", correct: false },
      { text: "Menarik perhatian pembaca dengan kata-kata yang puitis", correct: false },
      { text: "Membuat karya ilmiah terlihat kuno", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Sistematika penulisan karya ilmiah adalah...",
    answers: [
      { text: "Ukuran kertas dan margin yang digunakan", correct: false },
      { text: "Urutan atau struktur penyajian isi karya ilmiah secara logis dan terorganisasi", correct: true },
      { text: "Jenis huruf yang digunakan dalam penulisan", correct: false },
      { text: "Cara membuat paragraf yang benar", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Mengapa hasil dan pembahasan merupakan bagian terpenting dalam karya ilmiah?",
    answers: [
      { text: "Karena bagian ini paling banyak halamannya", correct: false },
      { text: "Karena bagian ini menunjukkan temuan penelitian serta analisis data yang menjawab rumusan masalah", correct: true },
      { text: "Karena bagian ini paling mudah ditulis", correct: false },
      { text: "Karena bagian ini berisi teori-teori dari para ahli", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Perbedaan antara karya ilmiah populer dan karya ilmiah akademik terletak pada...",
    answers: [
      { text: "Penggunaan bahasa dan target pembaca", correct: true },
      { text: "Jumlah halaman", correct: false },
      { text: "Penggunaan gambar", correct: false },
      { text: "Warna sampul", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Peran data dalam penulisan karya ilmiah adalah...",
    answers: [
      { text: "Sebagai hiasan agar tulisan terlihat menarik", correct: false },
      { text: "Sebagai dasar dalam membuat argumen atau kesimpulan", correct: true },
      { text: "Untuk memenuhi syarat minimal jumlah halaman", correct: false },
      { text: "Untuk membuat pembaca bingung", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Judul karya ilmiah yang baik untuk siswa SMA adalah...",
    answers: [
      { text: "Pengaruh Penggunaan Media Sosial terhadap Prestasi Belajar Siswa Kelas XI", correct: true },
      { text: "Dampak Kebijakan Moneter terhadap Inflasi di Indonesia Tahun 2020-2024", correct: false },
      { text: "Analisis Struktur DNA pada Embrio Manusia", correct: false },
      { text: "Kajian Filosofis tentang Eksistensialisme dalam Pemikiran Jean-Paul Sartre", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Definisi drama yang tepat adalah...",
    answers: [
      { text: "Karangan yang mengisahkan suatu peristiwa berdasarkan fakta", correct: false },
      { text: "Karya sastra berupa dialog yang dipentaskan", correct: true },
      { text: "Karangan pendek yang bersifat sugestif", correct: false },
      { text: "Karya sastra berbentuk prosa yang mengisahkan perjalanan hidup tokoh", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Unsur intrinsik dalam drama meliputi...",
    answers: [
      { text: "Pengarang, penerbit, dan tahun terbit", correct: false },
      { text: "Alur, penokohan, latar, tema, dan dialog", correct: true },
      { text: "Panggung, kostum, tata rias, dan properti", correct: false },
      { text: "Sutradara, aktor, kru, dan penonton", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Perbedaan utama antara drama dan prosa adalah...",
    answers: [
      { text: "Drama selalu berakhir dengan kesedihan", correct: false },
      { text: "Drama ditulis dalam bentuk dialog untuk dipentaskan", correct: true },
      { text: "Drama selalu memiliki lebih banyak tokoh", correct: false },
      { text: "Drama tidak memiliki tema", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Ciri khas naskah drama adalah...",
    answers: [
      { text: "Adanya narasi panjang", correct: false },
      { text: "Dominasi dialog antar tokoh", correct: true },
      { text: "Tidak adanya konflik", correct: false },
      { text: "Selalu ditulis dalam bahasa asing", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Bagian drama yang memberikan petunjuk tentang gerakan, ekspresi, atau penampilan tokoh disebut...",
    answers: [
      { text: "Prolog", correct: false },
      { text: "Dialog", correct: false },
      { text: "Kramagung", correct: false },
      { text: "Petunjuk lakuan (stage direction)", correct: true }
    ],
    difficulty: "susah"
  },
  {
    question: "Perhatikan kutipan naskah drama berikut:\n\n(Dua orang pemuda duduk di bangku taman. Senja mulai turun)\nAmir: Kita sudah menunggu hampir satu jam. Dia tidak akan datang.\nBudi: (melirik jam tangannya) Beri dia kesempatan sebentar lagi.\n\nPetunjuk lakuan dalam kutipan tersebut adalah...",
    answers: [
      { text: "Dua orang pemuda duduk di bangku taman. Senja mulai turun", correct: true },
      { text: "Kita sudah menunggu hampir satu jam", correct: false },
      { text: "Dia tidak akan datang", correct: false },
      { text: "Beri dia kesempatan sebentar lagi", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Jenis drama yang menggambarkan kehidupan sehari-hari dan bertujuan untuk menghibur disebut...",
    answers: [
      { text: "Drama tragedi", correct: false },
      { text: "Drama komedi", correct: true },
      { text: "Drama satire", correct: false },
      { text: "Drama melodrama", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Perbedaan struktur umum karya ilmiah dengan struktur drama terletak pada...",
    answers: [
      { text: "Karya ilmiah bersifat objektif, sedangkan drama bersifat subjektif dan imajinatif", correct: true },
      { text: "Karya ilmiah tidak memiliki struktur, sedangkan drama memiliki struktur", correct: false },
      { text: "Karya ilmiah selalu lebih panjang daripada drama", correct: false },
      { text: "Karya ilmiah menggunakan bahasa asing, sedangkan drama menggunakan bahasa Indonesia", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Drama tragedi ditandai dengan...",
    answers: [
      { text: "Akhir cerita yang bahagia", correct: false },
      { text: "Banyaknya adegan lucu", correct: false },
      { text: "Tokoh utama yang mengalami kemalangan atau kematian", correct: true },
      { text: "Tidak adanya konflik", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Konflik dalam drama berfungsi untuk...",
    answers: [
      { text: "Membuat cerita menjadi membosankan", correct: false },
      { text: "Menghilangkan peran tokoh antagonis", correct: false },
      { text: "Membangun ketegangan dan pengembangan cerita", correct: true },
      { text: "Mengurangi jumlah dialog", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Manakah yang merupakan contoh judul karya ilmiah yang tepat?",
    answers: [
      { text: "Senja di Pelabuhan: Sebuah Kisah Cinta", correct: false },
      { text: "Efektivitas Metode Diskusi dalam Pembelajaran Bahasa Indonesia", correct: true },
      { text: "Kisah Hidup Sang Pujangga", correct: false },
      { text: "Tangisan Hati Seorang Kekasih", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Perhatikan kutipan berikut:\n\n'Penelitian ini menggunakan metode kualitatif dengan pendekatan studi kasus. Data dikumpulkan melalui wawancara mendalam dan observasi partisipan.'\n\nKutipan tersebut merupakan bagian dari...",
    answers: [
      { text: "Pendahuluan", correct: false },
      { text: "Kajian teori", correct: false },
      { text: "Metode penelitian", correct: true },
      { text: "Hasil dan pembahasan", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Salah satu tujuan mempelajari drama adalah...",
    answers: [
      { text: "Untuk membuat karya ilmiah", correct: false },
      { text: "Untuk mengapresiasi karya sastra dan mengembangkan keterampilan berkomunikasi", correct: true },
      { text: "Untuk menjadi ilmuwan", correct: false },
      { text: "Untuk memahami metode penelitian", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Hal yang membedakan karya ilmiah dengan drama dalam hal penggunaan bahasa adalah...",
    answers: [
      { text: "Karya ilmiah menggunakan bahasa baku dan objektif, sedangkan drama dapat menggunakan bahasa sehari-hari dan ekspresif", correct: true },
      { text: "Karya ilmiah hanya menggunakan bahasa Inggris", correct: false },
      { text: "Drama hanya menggunakan bahasa daerah", correct: false },
      { text: "Tidak ada perbedaan dalam penggunaan bahasa", correct: false }
    ],
    difficulty: "susah"
  }
];
