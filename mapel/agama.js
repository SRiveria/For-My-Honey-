const materi = {
  judul: "Pendidikan Agama Islam: Kerukunan, Pernikahan, Menjaga Kehormatan, dan Adab Media Sosial",
  deskripsi: ` Materi ini membahas tentang kerukunan dan toleransi dalam Islam, ketentuan pernikahan, menjaga kehormatan, serta adab dalam menggunakan media sosial menurut ajaran Islam.
  
    **BAB IV: MENGUATKAN KERUKUNAN DAN PERNIKAHAN DALAM ISLAM**:
    
    **Toleransi dan Kerukunan**:
    - Toleransi merupakan sikap menghargai perbedaan agama, suku, etnis, pendapat, dan perilaku yang berbeda
    - Surah Al-Kafirun (QS. 109) mengajarkan: "Untukmu agamamu, dan untukku agamaku"
    - QS. Yusuf (12):40-41 dan QS. Al-Maidah (5):32 mengajarkan tentang nilai-nilai kehidupan dan toleransi
    
    **Ketentuan Pernikahan dalam Islam**:
    - Hukum pernikahan: Jaiz (boleh), Sunnah (dianjurkan), Wajib (harus dilakukan), Makruh (sebaiknya tidak dilakukan), Haram (dilarang)
    - Pernikahan yang haram dalam Islam meliputi: menikahi mahram, menikah dalam masa iddah, menikahi wanita yang bersuami, dan sebagainya
    - Syarat perempuan yang boleh dipinang: tidak dalam pinangan orang lain, tidak dalam masa iddah, dan bukan mahram
    - Macam-macam nikah yang dilarang: Nikah Mut'ah (kontrak), Nikah Syigar, Nikah Muhallil, Nikah Silang, Nikah Khadam
    
    **Talak, Iddah, dan Rujuk**:
    - Rukun nikah: calon suami, calon istri, wali, dua orang saksi, dan ijab kabul
    - Dasar hukum talak: "Sesuatu yang halal namun paling dibenci Allah adalah talak" (HR. Abu Daud dan Ibnu Majah)
    - Iddah: masa tunggu bagi wanita setelah bercerai atau ditinggal mati suami
    - Macam-macam iddah: iddah karena cerai hidup, iddah karena cerai mati, iddah wanita hamil
    - Tujuan iddah: memastikan kekosongan rahim, memberi kesempatan rujuk, penghormatan terhadap pernikahan sebelumnya
    - Rujuk: kembalinya suami kepada istri yang ditalak raj'i dalam masa iddah
    
    **BAB VII: MENGUATKAN IMAN DENGAN MENJAGA KEHORMATAN**:
    
    **Menjaga Kehormatan**:
    - Menguatkan iman dengan menjaga kehormatan, ikhlas, malu, dan zuhud
    - QS. Al-A'raf (7):27-29 mengajarkan tentang perintah Allah untuk menjaga kehormatan
    - Maruah: harga diri atau martabat seseorang yang harus dijaga
    - Khawas: orang-orang istimewa yang menjaga diri dari perbuatan maksiat
    
    **BAB VIII: ADAB MENGGUNAKAN MEDIA SOSIAL**:
    
    **Adab dalam Dunia Maya**:
    - Adab online: etika yang harus dijaga saat berinteraksi di dunia maya
    - Su'udzan: prasangka buruk yang harus dihindari
    - Ghibah: menggunjing atau membicarakan keburukan orang lain
    - Hoax: berita bohong yang harus dihindari penyebarannya
    - Tajasus: mencari-cari kesalahan orang lain
    - Tabayun: klarifikasi informasi sebelum menyebarkannya
  `,
};

const soal = [
  {
    question: "Dalam QS. Al-Kafirun ayat terakhir disebutkan...",
    answers: [
      { text: "Aku tidak akan menyembah apa yang kamu sembah", correct: false },
      { text: "Untukmu agamamu, dan untukku agamaku", correct: true },
      { text: "Kamu bukan penyembah Tuhan yang aku sembah", correct: false },
      { text: "Aku tidak akan menjadi penyembah apa yang kamu sembah", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Pernikahan yang dilakukan dengan tujuan menghalalkan seseorang yang telah ditalak tiga oleh suaminya untuk kembali kepada mantan suaminya disebut...",
    answers: [
      { text: "Nikah Mut'ah", correct: false },
      { text: "Nikah Syigar", correct: false },
      { text: "Nikah Muhallil", correct: true },
      { text: "Nikah Khadam", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Berikut ini yang bukan termasuk rukun nikah adalah...",
    answers: [
      { text: "Calon suami", correct: false },
      { text: "Wali", correct: false },
      { text: "Mahar", correct: true },
      { text: "Dua orang saksi", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Hukum pernikahan menjadi wajib apabila...",
    answers: [
      { text: "Seseorang memiliki keinginan untuk menikah", correct: false },
      { text: "Seseorang memiliki harta yang cukup untuk menikah", correct: false },
      { text: "Seseorang takut terjerumus dalam perzinaan jika tidak menikah", correct: true },
      { text: "Seseorang ingin mendapat keturunan", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Iddah bagi wanita yang dicerai dalam keadaan tidak hamil dan masih haid adalah...",
    answers: [
      { text: "3 kali suci", correct: true },
      { text: "4 bulan 10 hari", correct: false },
      { text: "Sampai melahirkan", correct: false },
      { text: "1 tahun", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Dasar hukum talak menurut hadis yang diriwayatkan Abu Daud dan Ibnu Majah menyebutkan bahwa talak adalah...",
    answers: [
      { text: "Sesuatu yang dianjurkan dalam kondisi tertentu", correct: false },
      { text: "Sesuatu yang halal namun paling dibenci Allah", correct: true },
      { text: "Sesuatu yang haram kecuali dalam kondisi darurat", correct: false },
      { text: "Sesuatu yang menyebabkan Arsy bergetar", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Sikap menghargai perbedaan agama, suku, etnis, pendapat, dan perilaku yang berbeda disebut...",
    answers: [
      { text: "Pluralisme", correct: false },
      { text: "Toleransi", correct: true },
      { text: "Liberalisme", correct: false },
      { text: "Inklusivisme", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "QS. Al-Maidah (5):32 membahas tentang...",
    answers: [
      { text: "Perintah berbuat adil", correct: false },
      { text: "Perintah menikah", correct: false },
      { text: "Larangan membunuh", correct: true },
      { text: "Larangan berjudi", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Kembalinya suami kepada istri yang ditalak raj'i dalam masa iddah disebut...",
    answers: [
      { text: "Khulu'", correct: false },
      { text: "Fasakh", correct: false },
      { text: "Rujuk", correct: true },
      { text: "Li'an", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Salah satu syarat perempuan yang boleh dipinang adalah...",
    answers: [
      { text: "Masih dalam masa iddah", correct: false },
      { text: "Sedang dalam pinangan orang lain", correct: false },
      { text: "Tidak sedang dalam pinangan orang lain", correct: true },
      { text: "Masih memiliki hubungan mahram", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Membicarakan keburukan orang lain dalam Islam disebut...",
    answers: [
      { text: "Namimah", correct: false },
      { text: "Ghibah", correct: true },
      { text: "Su'udzan", correct: false },
      { text: "Tajasus", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Klarifikasi informasi sebelum menyebarkannya disebut...",
    answers: [
      { text: "Tabayun", correct: true },
      { text: "Tabarruj", correct: false },
      { text: "Takabbur", correct: false },
      { text: "Taklid", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Mencari-cari kesalahan orang lain dalam Islam disebut...",
    answers: [
      { text: "Hasad", correct: false },
      { text: "Ghibah", correct: false },
      { text: "Tajasus", correct: true },
      { text: "Namimah", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Pernikahan yang dilakukan dengan perjanjian dalam jangka waktu tertentu disebut...",
    answers: [
      { text: "Nikah Mut'ah", correct: true },
      { text: "Nikah Syigar", correct: false },
      { text: "Nikah Muhallil", correct: false },
      { text: "Nikah Khadam", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Harga diri atau martabat seseorang yang harus dijaga dalam Islam disebut...",
    answers: [
      { text: "Maruah", correct: true },
      { text: "Muru'ah", correct: false },
      { text: "Mubahalah", correct: false },
      { text: "Muhasabah", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Orang-orang istimewa yang menjaga diri dari perbuatan maksiat disebut...",
    answers: [
      { text: "Khawas", correct: true },
      { text: "Khawarij", correct: false },
      { text: "Khadam", correct: false },
      { text: "Khalaf", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Berita bohong yang disebarkan di media sosial disebut...",
    answers: [
      { text: "Fitnah", correct: false },
      { text: "Hoax", correct: true },
      { text: "Gibah", correct: false },
      { text: "Hujat", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Iddah bagi wanita yang ditinggal mati suaminya dan tidak dalam keadaan hamil adalah...",
    answers: [
      { text: "3 kali suci", correct: false },
      { text: "3 bulan", correct: false },
      { text: "4 bulan 10 hari", correct: true },
      { text: "1 tahun", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Prasangka buruk terhadap orang lain dalam Islam disebut...",
    answers: [
      { text: "Su'udzan", correct: true },
      { text: "Husnudzan", correct: false },
      { text: "Takabbur", correct: false },
      { text: "Tajasus", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Pernikahan yang dilakukan dengan cara tukar-menukar wanita tanpa mahar disebut...",
    answers: [
      { text: "Nikah Mut'ah", correct: false },
      { text: "Nikah Syigar", correct: true },
      { text: "Nikah Muhallil", correct: false },
      { text: "Nikah Khadam", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Tujuan iddah yang berkaitan dengan kepastian keturunan adalah...",
    answers: [
      { text: "Memberi kesempatan untuk rujuk", correct: false },
      { text: "Menghormati pernikahan sebelumnya", correct: false },
      { text: "Memastikan kekosongan rahim", correct: true },
      { text: "Memberikan nafkah pada istri", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "QS. Al-A'raf (7):27-29 mengajarkan tentang...",
    answers: [
      { text: "Kewajiban zakat", correct: false },
      { text: "Perintah shalat", correct: false },
      { text: "Perintah menjaga kehormatan", correct: true },
      { text: "Larangan riba", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Etika yang harus dijaga saat berinteraksi di dunia maya disebut...",
    answers: [
      { text: "Adab online", correct: true },
      { text: "Etika virtual", correct: false },
      { text: "Moral digital", correct: false },
      { text: "Akhlak cyber", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Hukum pernikahan menjadi makruh apabila...",
    answers: [
      { text: "Seseorang mampu secara finansial dan jasmani", correct: false },
      { text: "Seseorang khawatir tidak dapat berlaku adil", correct: true },
      { text: "Seseorang takut terjerumus dalam perzinaan", correct: false },
      { text: "Seseorang tidak mampu memberi nafkah", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Talak yang dapat dirujuk kembali dalam masa iddah disebut...",
    answers: [
      { text: "Talak ba'in", correct: false },
      { text: "Talak raj'i", correct: true },
      { text: "Talak ba'in kubra", correct: false },
      { text: "Talak bid'i", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Pernikahan menjadi haram jika dilakukan dengan...",
    answers: [
      { text: "Wanita yang bukan mahram", correct: false },
      { text: "Wanita muslimah", correct: false },
      { text: "Wanita yang masih dalam masa iddah", correct: true },
      { text: "Wanita yang belum pernah menikah", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Dalam adab bermedia sosial, yang harus dilakukan ketika menerima informasi adalah...",
    answers: [
      { text: "Langsung membagikannya kepada orang lain", correct: false },
      { text: "Mengomentari informasi tersebut", correct: false },
      { text: "Melakukan tabayun atau klarifikasi kebenarannya", correct: true },
      { text: "Mengabaikan informasi tersebut", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Sikap zuhud dalam konteks penggunaan media sosial berarti...",
    answers: [
      { text: "Menggunakan media sosial sepuasnya", correct: false },
      { text: "Tidak menggunakan media sosial sama sekali", correct: false },
      { text: "Menggunakan media sosial dengan tidak berlebihan", correct: true },
      { text: "Menggunakan media sosial hanya untuk bisnis", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Hukum menyebarkan berita hoax dalam Islam adalah...",
    answers: [
      { text: "Mubah", correct: false },
      { text: "Makruh", correct: false },
      { text: "Haram", correct: true },
      { text: "Sunnah", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Iddah bagi wanita yang dicerai dalam keadaan hamil adalah...",
    answers: [
      { text: "3 kali suci", correct: false },
      { text: "3 bulan", correct: false },
      { text: "4 bulan 10 hari", correct: false },
      { text: "Sampai melahirkan", correct: true }
    ],
    difficulty: "sedang"
  },
  {
    question: "Sifat ikhlas dalam menjaga kehormatan berarti...",
    answers: [
      { text: "Melakukan perbuatan untuk mendapat pujian", correct: false },
      { text: "Melakukan perbuatan untuk mendapat imbalan", correct: false },
      { text: "Melakukan perbuatan semata-mata karena Allah SWT", correct: true },
      { text: "Melakukan perbuatan untuk terhindar dari hukuman", correct: false }
    ],
    difficulty: "mudah"
  }
];
