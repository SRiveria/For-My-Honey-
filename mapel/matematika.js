const materi = {
  judul: "Matematika: Lingkaran dan Kaidah Pencacahan",
  deskripsi: ` Materi ini membahas konsep lingkaran (unsur-unsur, sudut, panjang busur, luas juring, dan luas tembereng) serta kaidah pencacahan (aturan perkalian, aturan penjumlahan, permutasi, dan faktorial).
  
    **LINGKARAN**:
    Lingkaran adalah tempat kedudukan titik-titik yang berjarak sama dari suatu titik tertentu.
    
    **Unsur-unsur Lingkaran**:
    - Titik pusat: titik yang berjarak sama ke semua titik pada lingkaran
    - Jari-jari (r): jarak dari titik pusat ke titik pada lingkaran
    - Diameter (d): jarak terjauh antara dua titik pada lingkaran, d = 2r
    - Tali busur: ruas garis yang menghubungkan dua titik pada lingkaran
    - Apotema: jarak terpendek dari titik pusat ke tali busur
    - Busur: bagian dari keliling lingkaran
    - Juring: daerah di dalam lingkaran yang dibatasi oleh dua jari-jari dan busur
    - Tembereng: daerah di dalam lingkaran yang dibatasi oleh tali busur dan busur
    
    **Sudut pada Lingkaran**:
    - Sudut pusat: sudut yang titik sudutnya adalah titik pusat lingkaran
    - Sudut keliling: sudut yang titik sudutnya terletak pada lingkaran
    - Hubungan sudut pusat dan sudut keliling: jika sudut pusat dan sudut keliling menghadap busur yang sama, maka sudut pusat = 2 × sudut keliling
    - Sudut keliling yang menghadap busur yang sama besarnya sama
    - Sudut keliling yang menghadap diameter besarnya 90°
    
    **Rumus Lingkaran**:
    - Keliling lingkaran: K = 2πr = πd
    - Luas lingkaran: L = πr²
    - Panjang busur: p = (θ/360°) × 2πr = (θ/360°) × keliling lingkaran
    - Luas juring: L = (θ/360°) × πr² = (θ/360°) × luas lingkaran
    - Luas tembereng: Luas tembereng = luas juring - luas segitiga
    
    **KAIDAH PENCACAHAN**:
    Kaidah pencacahan adalah prinsip-prinsip dalam menghitung banyaknya cara suatu kejadian dapat terjadi.
    
    **Aturan Perkalian (Filling Slots)**:
    Jika terdapat n₁ cara untuk melakukan kejadian pertama, n₂ cara untuk melakukan kejadian kedua, dan seterusnya, maka banyaknya cara untuk melakukan semua kejadian secara berurutan adalah n₁ × n₂ × ... × nₖ.
    
    **Aturan Penjumlahan**:
    Jika terdapat n₁ cara untuk melakukan kejadian pertama, n₂ cara untuk melakukan kejadian kedua, dan semua kejadian tidak dapat dilakukan secara bersamaan, maka banyaknya cara untuk melakukan salah satu dari kejadian tersebut adalah n₁ + n₂ + ... + nₖ.
    
    **Permutasi**:
    - Permutasi adalah susunan terurut dari beberapa objek berbeda
    - Permutasi n objek berbeda dari n objek: P(n,n) = n!
    - Permutasi r objek berbeda dari n objek: P(n,r) = n!/(n-r)!
    - Permutasi dengan pengulangan: jika terdapat n objek dengan n₁ objek sejenis pertama, n₂ objek sejenis kedua, dan seterusnya, maka banyaknya permutasi adalah n!/(n₁! × n₂! × ... × nₖ!)
    
    **Faktorial**:
    - Notasi faktorial n! = n × (n-1) × (n-2) × ... × 3 × 2 × 1
    - 0! = 1
    - Sifat faktorial: (n+1)! = (n+1) × n!
  `,
};

const soal = [
  {
    question: "Perhatikan lingkaran dengan pusat O. Jika tali busur AB berjarak 8 cm dari pusat lingkaran dan jari-jari lingkaran 17 cm, maka panjang tali busur AB adalah...",
    answers: [
      { text: "15 cm", correct: true },
      { text: "30 cm", correct: false },
      { text: "34 cm", correct: false },
      { text: "√225 cm", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Jika sudut pusat suatu lingkaran adalah 72°, maka besar sudut keliling yang menghadap busur yang sama adalah...",
    answers: [
      { text: "36°", correct: true },
      { text: "54°", correct: false },
      { text: "108°", correct: false },
      { text: "144°", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Perhatikan lingkaran dengan pusat O. Jika sudut keliling ∠ABC = 65° dan busur AC terletak di sebelah lain dari busur yang menghadap ∠ABC, maka besar sudut pusat ∠AOC adalah...",
    answers: [
      { text: "65°", correct: false },
      { text: "115°", correct: false },
      { text: "130°", correct: true },
      { text: "230°", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Dari 7 orang akan dipilih 3 orang untuk jabatan ketua, sekretaris, dan bendahara. Banyaknya cara pemilihan yang mungkin adalah...",
    answers: [
      { text: "35", correct: false },
      { text: "210", correct: true },
      { text: "343", correct: false },
      { text: "5040", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Pada sebuah lingkaran, terdapat tiga titik A, B, dan C pada lingkaran. Jika ∠ABC = 110°, maka besar ∠AOC adalah... (O adalah pusat lingkaran)",
    answers: [
      { text: "55°", correct: false },
      { text: "70°", correct: false },
      { text: "140°", correct: false },
      { text: "220°", correct: true }
    ],
    difficulty: "sedang"
  },
  {
    question: "Pada lingkaran dengan pusat O, dua buah sudut keliling ∠ABC dan ∠ADE menghadap busur AC. Jika ∠ABC = 42°, maka besar ∠ADE adalah...",
    answers: [
      { text: "21°", correct: false },
      { text: "42°", correct: true },
      { text: "84°", correct: false },
      { text: "138°", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Pada lingkaran dengan pusat O, terdapat sebuah sudut pusat ∠POQ = 140° dan sudut keliling ∠PRQ yang menghadap busur PQ. Jika titik R terletak pada busur PQ, maka besar ∠PRQ adalah...",
    answers: [
      { text: "40°", correct: false },
      { text: "70°", correct: true },
      { text: "140°", correct: false },
      { text: "280°", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Sebuah lingkaran dengan jari-jari 14 cm memiliki sudut pusat 60°. Panjang busur yang dihadapi oleh sudut pusat tersebut adalah...",
    answers: [
      { text: "14,67 cm", correct: true },
      { text: "29,33 cm", correct: false },
      { text: "44 cm", correct: false },
      { text: "88 cm", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Sebuah juring lingkaran dengan jari-jari 21 cm memiliki sudut pusat 45°. Luas juring tersebut adalah...",
    answers: [
      { text: "173,25 cm²", correct: false },
      { text: "77 cm²", correct: true },
      { text: "38,5 cm²", correct: false },
      { text: "346,5 cm²", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Pada lingkaran dengan jari-jari 7 cm, terdapat sebuah tembereng dengan sudut pusat 90°. Luas tembereng tersebut adalah... (π = 22/7)",
    answers: [
      { text: "38,5 cm²", correct: true },
      { text: "77 cm²", correct: false },
      { text: "154 cm²", correct: false },
      { text: "11 cm²", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Sebuah juring lingkaran dengan jari-jari 10 cm memiliki panjang busur 5π cm. Besar sudut pusat juring tersebut adalah...",
    answers: [
      { text: "90°", correct: true },
      { text: "180°", correct: false },
      { text: "270°", correct: false },
      { text: "360°", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Sebuah lingkaran dengan jari-jari 14 cm memiliki sudut pusat 30°. Luas juring yang dihadapi oleh sudut pusat tersebut adalah...",
    answers: [
      { text: "51,33 cm²", correct: true },
      { text: "102,67 cm²", correct: false },
      { text: "154 cm²", correct: false },
      { text: "616 cm²", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Ani memiliki 3 baju (merah, biru, hijau), 2 celana (hitam, cokelat), dan 4 jilbab (putih, kuning, ungu, pink). Banyaknya cara Ani berpakaian dengan menggunakan 1 baju, 1 celana, dan 1 jilbab adalah...",
    answers: [
      { text: "9", correct: false },
      { text: "12", correct: false },
      { text: "24", correct: true },
      { text: "32", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Tersedia 4 rute dari kota A ke kota B, dan 3 rute dari kota B ke kota C. Banyaknya cara yang berbeda untuk pergi dari kota A ke kota C melalui kota B adalah...",
    answers: [
      { text: "7", correct: false },
      { text: "12", correct: true },
      { text: "24", correct: false },
      { text: "64", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Dari 8 orang akan dibentuk susunan berbaris. Banyaknya cara menyusun 8 orang tersebut adalah...",
    answers: [
      { text: "56", correct: false },
      { text: "1.680", correct: false },
      { text: "40.320", correct: true },
      { text: "64", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Dari 9 siswa akan dipilih 3 siswa untuk lomba. Banyaknya cara pemilihan 3 siswa tersebut jika urutannya diperhatikan adalah...",
    answers: [
      { text: "84", correct: false },
      { text: "504", correct: true },
      { text: "729", correct: false },
      { text: "362.880", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Perhatikan kata MATEMATIKA. Banyaknya susunan huruf yang berbeda dari kata tersebut adalah...",
    answers: [
      { text: "10!", correct: false },
      { text: "151.200", correct: true },
      { text: "907.200", correct: false },
      { text: "3.628.800", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Dari 6 buku matematika dan 4 buku fisika akan dipilih 2 buku matematika dan 3 buku fisika. Banyaknya cara pemilihan buku tersebut adalah...",
    answers: [
      { text: "15", correct: false },
      { text: "60", correct: true },
      { text: "150", correct: false },
      { text: "900", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Nilai dari 6! adalah...",
    answers: [
      { text: "120", correct: false },
      { text: "240", correct: false },
      { text: "720", correct: true },
      { text: "5040", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Bentuk sederhana dari n(n+1)(n+2) adalah...",
    answers: [
      { text: "(n+2)!", correct: false },
      { text: "n! × (n+1)", correct: false },
      { text: "(n+2)!/[(n-1)!]", correct: true },
      { text: "3(n+1)!", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Anton akan pergi dari kota A ke kota D. Ia dapat melalui kota B atau kota C. Tersedia 3 bus dari kota A ke kota B, 2 bus dari kota A ke kota C, 4 bus dari kota B ke kota D, dan 3 bus dari kota C ke kota D. Banyaknya cara yang berbeda untuk pergi dari kota A ke kota D adalah...",
    answers: [
      { text: "12", correct: false },
      { text: "18", correct: true },
      { text: "24", correct: false },
      { text: "36", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Dalam sebuah kotak terdapat 7 bola bernomor 1 sampai 7. Banyaknya cara mengambil 2 bola secara acak dan terurut adalah...",
    answers: [
      { text: "21", correct: false },
      { text: "42", correct: true },
      { text: "49", correct: false },
      { text: "5040", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Dari 8 siswa akan dipilih 4 siswa untuk membentuk tim basket. Banyaknya cara pemilihan tim tersebut adalah...",
    answers: [
      { text: "32", correct: false },
      { text: "70", correct: true },
      { text: "1680", correct: false },
      { text: "40320", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Dari angka 1, 2, 3, 4, 5, 6, 7, 8, 9 akan dibentuk bilangan tiga angka yang berbeda. Banyaknya bilangan tiga angka yang dapat dibentuk adalah...",
    answers: [
      { text: "84", correct: false },
      { text: "504", correct: false },
      { text: "720", correct: true },
      { text: "1000", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Dalam perlombaan lari yang diikuti oleh 6 orang, akan ditentukan juara I, II, dan III. Banyaknya susunan juara yang mungkin adalah...",
    answers: [
      { text: "20", correct: false },
      { text: "120", correct: true },
      { text: "216", correct: false },
      { text: "720", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Pada lingkaran dengan jari-jari 10 cm, terdapat sebuah juring dengan luas 50π cm². Besar sudut pusat juring tersebut adalah...",
    answers: [
      { text: "60°", correct: false },
      { text: "90°", correct: false },
      { text: "180°", correct: true },
      { text: "270°", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Perhatikan lingkaran dengan pusat O dan diameter AB. Jika titik C terletak pada lingkaran, maka besar ∠ACB adalah...",
    answers: [
      { text: "45°", correct: false },
      { text: "60°", correct: false },
      { text: "90°", correct: true },
      { text: "180°", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Suatu kata terdiri dari 8 huruf, dengan 2 huruf E, 3 huruf S, dan lainnya berbeda. Banyaknya susunan huruf yang berbeda dari kata tersebut adalah...",
    answers: [
      { text: "3.360", correct: true },
      { text: "6.720", correct: false },
      { text: "20.160", correct: false },
      { text: "40.320", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Sebuah lingkaran dengan jari-jari 8 cm memiliki tali busur sepanjang 8 cm. Jarak tali busur dari pusat lingkaran adalah...",
    answers: [
      { text: "4 cm", correct: false },
      { text: "4√3 cm", correct: true },
      { text: "8 cm", correct: false },
      { text: "8√2 cm", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Kata INDONESIA akan disusun secara acak. Peluang terjadinya huruf vokal selalu berdampingan adalah...",
    answers: [
      { text: "1/15", correct: false },
      { text: "1/9", correct: true },
      { text: "1/6", correct: false },
      { text: "1/3", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Banyaknya bilangan bulat antara 100 dan 999 yang semua angkanya berbeda adalah...",
    answers: [
      { text: "648", correct: true },
      { text: "729", correct: false },
      { text: "900", correct: false },
      { text: "1000", correct: false }
    ],
    difficulty: "sedang"
  }
];

const soalTebakanRumus = [
  {
    question: "Seorang siswa menghitung panjang busur dengan menggunakan rumus p = (θ/360°) × 2πr. Rumus apakah yang digunakan siswa tersebut?",
    answers: [
      { text: "Rumus panjang busur lingkaran", correct: true },
      { text: "Rumus luas juring lingkaran", correct: false },
      { text: "Rumus keliling lingkaran", correct: false },
      { text: "Rumus luas tembereng", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Rumus P(n,r) = n!/(n-r)! digunakan untuk menghitung...",
    answers: [
      { text: "Kombinasi r objek dari n objek", correct: false },
      { text: "Permutasi r objek dari n objek", correct: true },
      { text: "Permutasi siklis dari n objek", correct: false },
      { text: "Kombinasi dengan pengulangan", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Jika seorang siswa menggunakan rumus L = (θ/360°) × πr², rumus apakah yang ia gunakan?",
    answers: [
      { text: "Rumus luas lingkaran", correct: false },
      { text: "Rumus luas juring", correct: true },
      { text: "Rumus luas tembereng", correct: false },
      { text: "Rumus panjang busur", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Rumus n! digunakan untuk menghitung...",
    answers: [
      { text: "Banyaknya permutasi dari n objek berbeda", correct: true },
      { text: "Banyaknya kombinasi dari n objek berbeda", correct: false },
      { text: "Jumlah dari n suku pertama deret aritmatika", correct: false },
      { text: "Jumlah dari n suku pertama deret geometri", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Seorang siswa menggunakan rumus d = √(r² - (tali busur/2)²) untuk menghitung...",
    answers: [
      { text: "Jari-jari lingkaran", correct: false },
      { text: "Diameter lingkaran", correct: false },
      { text: "Apotema (jarak pusat ke tali busur)", correct: true },
      { text: "Panjang busur", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Rumus C(n,r) = n!/[r!(n-r)!] digunakan untuk menghitung...",
    answers: [
      { text: "Permutasi r objek dari n objek", correct: false },
      { text: "Kombinasi r objek dari n objek", correct: true },
      { text: "Permutasi siklis dari n objek", correct: false },
      { text: "Permutasi dengan pengulangan", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Jika seorang siswa menggunakan rumus ∠pusat = 2 × ∠keliling, rumus apakah yang ia gunakan?",
    answers: [
      { text: "Rumus hubungan sudut pusat dan sudut keliling", correct: true },
      { text: "Rumus jumlah sudut segitiga", correct: false },
      { text: "Rumus sudut saling bertolak belakang", correct: false },
      { text: "Rumus sudut pada segi empat", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Rumus Ltembereng = Ljuring - Lsegitiga digunakan untuk menghitung...",
    answers: [
      { text: "Luas juring", correct: false },
      { text: "Luas tembereng", correct: true },
      { text: "Luas lingkaran", correct: false },
      { text: "Luas segitiga dalam lingkaran", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Jika seorang siswa menggunakan rumus banyaknya cara = n₁ × n₂ × ... × nₖ, rumus apakah yang ia gunakan?",
    answers: [
      { text: "Aturan penjumlahan", correct: false },
      { text: "Aturan perkalian (filling slots)", correct: true },
      { text: "Rumus permutasi", correct: false },
      { text: "Rumus kombinasi", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Rumus n!/(n₁! × n₂! × ... × nₖ!) digunakan untuk menghitung...",
    answers: [
      { text: "Permutasi biasa dari n objek", correct: false },
      { text: "Kombinasi r objek dari n objek", correct: false },
      { text: "Permutasi dengan pengulangan", correct: true },
      { text: "Kombinasi dengan pengulangan", correct: false }
    ],
    difficulty: "susah"
  }
];
