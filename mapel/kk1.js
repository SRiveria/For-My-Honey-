const materi = {
  judul: "KK1 Penerapan Rangkaian Elektronika XI TEI",
  deskripsi: "Materi ini membahas tentang rangkaian elektronika, meliputi pengukuran, rangkaian op-amp, power supply, dioda, penyearah, dan rangkaian digital sebagai dasar pemahaman siswa dalam penerapan rangkaian elektronika."
};

const soal = [
  {
    question: "Alat ukur yang digunakan untuk mengukur besarnya sinyal keluaran pada rangkaian op-amp adalah . . .",
    answers: [
      { text: "Multimeter", correct: false },
      { text: "Avometer", correct: false },
      { text: "Osciloscope", correct: true },
      { text: "Ampere Meter", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Pada rangkaian op-amp non-inverting dengan nilai resistor feedback (Rf) 100K dan resistor input (Ri) 10K, maka besarnya penguatan adalah . . .",
    answers: [
      { text: "10", correct: false },
      { text: "100", correct: false },
      { text: "11", correct: true },
      { text: "101", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Rangkaian op-amp yang memiliki karakteristik sinyal output berbeda fase 180° dengan sinyal input adalah penguat . . .",
    answers: [
      { text: "Summing", correct: false },
      { text: "Inverting", correct: true },
      { text: "Non-inverting", correct: false },
      { text: "Subtractor", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Pada rangkaian power supply, komponen yang berfungsi untuk memperbaiki sinyal output sehingga output catu daya menjadi rata adalah . . .",
    answers: [
      { text: "Dioda", correct: false },
      { text: "Kapasitor", correct: true },
      { text: "Resistor", correct: false },
      { text: "Trafo", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Komponen pada rangkaian power supply yang berfungsi sebagai penyearah tegangan AC adalah . . .",
    answers: [
      { text: "Dioda", correct: true },
      { text: "Kapasitor", correct: false },
      { text: "Resistor", correct: false },
      { text: "Trafo", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Pada rangkaian digital dengan gerbang logika AND dan OR, jika dua input A dan B masuk ke gerbang AND kemudian hasilnya masuk ke gerbang OR bersama input C, maka ekspresi aljabar Boolean yang benar adalah . . .",
    answers: [
      { text: "A + B + C", correct: false },
      { text: "A × B × C", correct: false },
      { text: "(A × B) + C", correct: true },
      { text: "A + (B × C)", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Pada peta Karnaugh Map 3 variabel (A, B, C) dengan kelompok output '1' pada koordinat 000, 001, 100, dan 101, fungsi aljabar Boolean yang paling sederhana adalah . . .",
    answers: [
      { text: "A.B + B.C", correct: false },
      { text: "A.C + !B", correct: true },
      { text: "A + !B.!C", correct: false },
      { text: "!A.!B + A.B", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Bentuk rangkaian dari persamaan aljabar Boolean (A.B) + (!A.C) yang paling sederhana terdiri dari gerbang logika . . .",
    answers: [
      { text: "AND, OR, dan NOT", correct: false },
      { text: "OR dan NAND", correct: false },
      { text: "AND, OR, dan NOT", correct: true },
      { text: "NOR dan NAND", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Jumlah kombinasi dari tabel kebenaran sebuah rangkaian digital dapat dihitung berdasarkan jumlah variabel inputnya yaitu dihitung dengan . . .",
    answers: [
      { text: "n × 2", correct: false },
      { text: "n pangkat 2", correct: false },
      { text: "n × Jumlah Variabel", correct: false },
      { text: "2 pangkat n", correct: true }
    ],
    difficulty: "sedang"
  },
  {
    question: "Pada diagram Karnaugh Map 3 variabel dengan nilai '1' pada koordinat 000, 001, 011, dan 010, ekspresi Boolean minimumnya adalah . . .",
    answers: [
      { text: "AB + BC + AC", correct: false },
      { text: "AB + BC + !AC", correct: false },
      { text: "!AB + BC + AC", correct: false },
      { text: "!C", correct: true }
    ],
    difficulty: "susah"
  },
  {
    question: "Fungsi utama power supply adalah . . .",
    answers: [
      { text: "Sebagai konverter yang mengubah tegangan AC menjadi tegangan DC", correct: true },
      { text: "Sebagai konverter yang mengubah tegangan DC menjadi tegangan AC", correct: false },
      { text: "Sebagai penaik tegangan AC", correct: false },
      { text: "Sebagai penurun tegangan AC", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Pada rangkaian power supply, komponen yang berfungsi sebagai penstabil/regulator tegangan adalah . . .",
    answers: [
      { text: "Transformator", correct: false },
      { text: "IC regulator (seperti 7805, 7812)", correct: true },
      { text: "Kapasitor elektrolit", correct: false },
      { text: "Dioda Bridge", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Berdasarkan prinsip kerja power supply, konversinya dapat dilakukan dengan 2 cara yaitu . . .",
    answers: [
      { text: "Power supply linier dan switching power supply", correct: true },
      { text: "Power supply simetris dan catu daya non simetris", correct: false },
      { text: "Power supply regulator dan adjustable power supply", correct: false },
      { text: "Power supply unregulated dan catu daya", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Rangkaian power supply yang menggunakan potensiometer untuk mengatur tegangan keluarannya disebut . . .",
    answers: [
      { text: "Regulated power supply", correct: false },
      { text: "Unregulated power supply", correct: false },
      { text: "Adjustable power supply", correct: true },
      { text: "Fixed power supply", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Pada rangkaian op-amp jika tegangan input sama dengan tegangan output (Vout = Vin), maka rangkaian tersebut berfungsi sebagai . . .",
    answers: [
      { text: "Penguat inverting", correct: false },
      { text: "Penguat non inverting", correct: false },
      { text: "Penguat penyangga (buffer)", correct: true },
      { text: "Penguat penjumlah (summing)", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Pada rangkaian penyearah setengah gelombang, ketika siklus positif tegangan AC, kondisi dioda adalah . . .",
    answers: [
      { text: "Forward bias (menghantar)", correct: true },
      { text: "Reverse bias (tidak menghantar)", correct: false },
      { text: "Cut-off", correct: false },
      { text: "Saturasi", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Pada rangkaian penyearah gelombang penuh dengan 4 dioda, ketika siklus negatif tegangan AC, dioda yang menghantar adalah . . .",
    answers: [
      { text: "D1 dan D3", correct: false },
      { text: "D2 dan D4", correct: true },
      { text: "D1 dan D4", correct: false },
      { text: "D2 dan D3", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Pada rangkaian dioda clipper, dioda dipasang secara paralel dengan resistor beban. Fungsi rangkaian ini adalah . . .",
    answers: [
      { text: "Menyearahkan gelombang AC", correct: false },
      { text: "Menstabilkan tegangan", correct: false },
      { text: "Memotong sebagian sinyal input", correct: true },
      { text: "Mengubah tegangan DC menjadi AC", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Pada rangkaian dioda clamper, komponen yang berfungsi untuk menahan tegangan pada level tertentu adalah . . .",
    answers: [
      { text: "Resistor", correct: false },
      { text: "Dioda", correct: true },
      { text: "Transistor", correct: false },
      { text: "Op-Amp", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Rangkaian penyearah yang menggunakan empat buah dioda yang disusun sedemikian rupa sehingga dapat menyearahkan gelombang positif dan negatif secara bersamaan disebut . . .",
    answers: [
      { text: "Penyearah setengah gelombang", correct: false },
      { text: "Penyearah gelombang penuh sistem jembatan", correct: true },
      { text: "Penyearah gelombang penuh dengan center tap", correct: false },
      { text: "Penyearah presisi", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Rangkaian yang terdiri dari resistor, kapasitor, dan dioda yang berfungsi untuk mengisi dan mempertahankan tegangan baterai disebut . . .",
    answers: [
      { text: "Rangkaian penggerak motor DC", correct: false },
      { text: "Rangkaian power supply", correct: false },
      { text: "Rangkaian charger automatic", correct: true },
      { text: "Rangkaian pengaman full target", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Rangkaian penyearah yang hanya dapat menyearahkan setengah siklus tegangan AC disebut . . .",
    answers: [
      { text: "Penyearah setengah gelombang", correct: true },
      { text: "Penyearah gelombang penuh sistem jembatan", correct: false },
      { text: "Rangkaian motor putar kanan dan kiri", correct: false },
      { text: "Penyearah gelombang penuh", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Dioda yang dipasang secara paralel terhadap beban induktif untuk melindungi komponen lain dari tegangan induksi disebut . . .",
    answers: [
      { text: "Diode pengaman", correct: true },
      { text: "Diode pemblokir", correct: false },
      { text: "Diode penyearah", correct: false },
      { text: "Diode zener", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Rangkaian dioda jembatan yang banyak digunakan sebagai pengaman tegangan terbalik adalah . . .",
    answers: [
      { text: "Dioda bridge dengan polaritas berlawanan", correct: true },
      { text: "Rangkaian adaptor", correct: false },
      { text: "Rangkaian power supply DC", correct: false },
      { text: "Penyearah tegangan AC ke DC", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Pengukuran dengan multimeter yang menghubungkan probe merah ke terminal positif dan probe hitam ke terminal negatif pada posisi selector DCV digunakan untuk mengukur . . .",
    answers: [
      { text: "Tahanan listrik", correct: false },
      { text: "Tegangan listrik DC", correct: true },
      { text: "Arus listrik AC", correct: false },
      { text: "Tegangan listrik AC", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Bagian multimeter yang menunjukkan batas nilai maksimum yang dapat diukur oleh multimeter disebut . . .",
    answers: [
      { text: "Skala", correct: false },
      { text: "Batas ukur", correct: true },
      { text: "Probe", correct: false },
      { text: "Penunjukkan jarum", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Pengukuran dengan multimeter yang dilakukan dengan menghubungkan probe pada terminal multimeter dan menempatkan selector pada posisi ACV digunakan untuk mengukur . . .",
    answers: [
      { text: "Tegangan DC", correct: false },
      { text: "Arus DC", correct: false },
      { text: "Arus AC", correct: false },
      { text: "Tegangan AC", correct: true }
    ],
    difficulty: "mudah"
  },
  {
    question: "Pada multimeter analog, untuk mengukur komponen elektronika seperti resistor, dioda, dan LED, selector harus diatur pada posisi . . .",
    answers: [
      { text: "Tegangan AC dan DC", correct: false },
      { text: "Arus AC dan DC", correct: false },
      { text: "Ohm (Ω)", correct: true },
      { text: "Hanya resistor saja", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Penguat op-amp yang mengalikan input dengan nilai negatif tertentu adalah . . .",
    answers: [
      { text: "Penguat inverting", correct: true },
      { text: "Penguat non-inverting", correct: false },
      { text: "Penguat buffer", correct: false },
      { text: "Penguat diferensial", correct: false }
    ],
    difficulty: "sedang"
  }
];