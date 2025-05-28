const materi = {
  judul: "Mapel Pilihan Robotika Sistem Kontrol Motor Stepper dengan PLC",
  deskripsi: "Materi ini membahas tentang sistem kontrol motor stepper menggunakan PLC, perhitungan langkah motor stepper, aplikasi motor stepper dalam industri, dan troubleshooting pada sistem motor stepper."
};

const soal = [
  {
    question: "Komponen utama yang digunakan untuk mengontrol motor stepper dengan PLC adalah...",
    answers: [
      { text: "Inverter", correct: false },
      { text: "Driver motor stepper", correct: true },
      { text: "Transformator", correct: false },
      { text: "Resistor", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Jenis sinyal yang dikirim oleh PLC ke driver motor stepper untuk mengontrol gerakan motor adalah...",
    answers: [
      { text: "Sinyal analog 4-20mA", correct: false },
      { text: "Sinyal digital PWM (Pulse Width Modulation)", correct: true },
      { text: "Sinyal AC 220V", correct: false },
      { text: "Sinyal DC stabil", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Dalam aplikasi industri, motor stepper lebih disukai dibandingkan motor servo dalam kondisi...",
    answers: [
      { text: "Membutuhkan kecepatan tinggi tanpa akurasi posisi", correct: false },
      { text: "Membutuhkan kontrol posisi yang presisi dengan biaya lebih rendah", correct: true },
      { text: "Mengoperasikan beban berat dengan kontrol torsi tinggi", correct: false },
      { text: "Membutuhkan sistem kontrol kecepatan yang sangat presisi", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Jika motor stepper tidak berputar setelah mendapatkan sinyal dari PLC, kemungkinan penyebabnya adalah...",
    answers: [
      { text: "Tegangan suplai terlalu tinggi", correct: false },
      { text: "Frekuensi sinyal terlalu tinggi", correct: false },
      { text: "Driver motor tidak mendapatkan sinyal yang benar dari PLC", correct: true },
      { text: "PLC mengalami overheat", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Motor stepper bergerak berdasarkan prinsip dasar...",
    answers: [
      { text: "Rotasi kontinu tanpa langkah tertentu", correct: false },
      { text: "Pembagian rotasi menjadi langkah-langkah diskrit", correct: true },
      { text: "Pengubahan arus AC menjadi DC", correct: false },
      { text: "Rotasi berdasarkan torsi maksimum", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Jika sebuah motor stepper memiliki resolusi 1,8° per langkah, berapa banyak langkah yang dibutuhkan untuk satu putaran penuh?",
    answers: [
      { text: "100 langkah", correct: false },
      { text: "180 langkah", correct: false },
      { text: "200 langkah", correct: true },
      { text: "360 langkah", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Motor stepper dikendalikan oleh sinyal pulsa dari PLC. Semakin tinggi frekuensi pulsa, maka...",
    answers: [
      { text: "Motor akan bergerak lebih lambat", correct: false },
      { text: "Motor akan bergerak lebih cepat", correct: true },
      { text: "Motor akan berputar ke arah sebaliknya", correct: false },
      { text: "Motor akan berhenti bekerja", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Pada mode half-step, motor stepper akan...",
    answers: [
      { text: "Berjalan dua kali lebih cepat dari mode full-step", correct: false },
      { text: "Menghasilkan gerakan yang lebih halus dibandingkan mode full-step", correct: true },
      { text: "Menggunakan lebih sedikit daya dibandingkan mode full-step", correct: false },
      { text: "Bergerak secara acak tanpa pola yang tetap", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Jika PLC mengirimkan 400 pulsa ke driver motor stepper dengan resolusi 200 langkah per putaran, berapa jumlah putaran yang dilakukan oleh motor?",
    answers: [
      { text: "1 putaran", correct: false },
      { text: "2 putaran", correct: true },
      { text: "3 putaran", correct: false },
      { text: "4 putaran", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Pergerakan motor stepper yang akurat sangat berguna dalam aplikasi berikut, KECUALI...",
    answers: [
      { text: "Printer 3D", correct: false },
      { text: "CNC Machine", correct: false },
      { text: "Kipas angin listrik", correct: true },
      { text: "Robotika", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Jika motor stepper kehilangan sinkronisasi saat beroperasi, kemungkinan penyebabnya adalah...",
    answers: [
      { text: "Sinyal dari PLC terlalu cepat", correct: false },
      { text: "Tegangan yang diberikan terlalu rendah", correct: false },
      { text: "Beban melebihi torsi maksimum motor", correct: false },
      { text: "Semua jawaban benar", correct: true }
    ],
    difficulty: "susah"
  },
  {
    question: "Motor stepper yang dikendalikan oleh PLC menggunakan mode microstepping. Tujuan dari mode ini adalah untuk...",
    answers: [
      { text: "Meningkatkan torsi motor", correct: false },
      { text: "Meningkatkan resolusi dan memperhalus gerakan motor", correct: true },
      { text: "Mengurangi jumlah langkah per putaran", correct: false },
      { text: "Menghemat daya listrik secara drastis", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Motor stepper sering digunakan dalam aplikasi yang membutuhkan kontrol presisi karena...",
    answers: [
      { text: "Memiliki mekanisme internal yang otomatis menyesuaikan posisi", correct: false },
      { text: "Dapat bergerak dalam langkah-langkah kecil yang dapat diprediksi", correct: true },
      { text: "Memiliki sistem umpan balik bawaan seperti encoder", correct: false },
      { text: "Beroperasi tanpa perlu driver tambahan", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Apa yang terjadi jika jumlah pulsa yang dikirim dari PLC ke driver motor stepper dikurangi?",
    answers: [
      { text: "Motor akan berputar lebih cepat", correct: false },
      { text: "Motor akan berhenti total", correct: false },
      { text: "Motor akan berputar dengan langkah lebih kecil", correct: false },
      { text: "Motor akan berputar dengan jumlah langkah lebih sedikit", correct: true }
    ],
    difficulty: "mudah"
  },
  {
    question: "Sebuah motor stepper memiliki resolusi 1,8° per langkah. Berapa jumlah langkah yang diperlukan untuk satu putaran penuh?",
    answers: [
      { text: "100 langkah", correct: false },
      { text: "180 langkah", correct: false },
      { text: "200 langkah", correct: true },
      { text: "360 langkah", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Sebuah motor stepper memiliki 200 langkah per putaran. Jika PLC mengirimkan 500 pulsa, berapa banyak putaran yang dilakukan oleh motor?",
    answers: [
      { text: "1,5 putaran", correct: false },
      { text: "2,5 putaran", correct: true },
      { text: "3 putaran", correct: false },
      { text: "5 putaran", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Sebuah conveyor menggunakan motor stepper untuk memindahkan barang sejauh 30 cm. Jika setiap langkah motor menggerakkan conveyor sejauh 1,5 mm, berapa jumlah langkah yang harus diberikan oleh PLC?",
    answers: [
      { text: "100 langkah", correct: false },
      { text: "150 langkah", correct: false },
      { text: "200 langkah", correct: true },
      { text: "300 langkah", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Sebuah motor stepper dengan 200 langkah per putaran menggunakan driver dengan mode 1/4 microstepping. Berapa jumlah pulsa yang diperlukan untuk satu putaran penuh?",
    answers: [
      { text: "200 pulsa", correct: false },
      { text: "400 pulsa", correct: false },
      { text: "800 pulsa", correct: true },
      { text: "1000 pulsa", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Sebuah motor stepper dengan 200 langkah per putaran menerima 50 pulsa dari PLC. Berapa sudut yang telah ditempuh oleh motor?",
    answers: [
      { text: "45°", correct: false },
      { text: "60°", correct: false },
      { text: "90°", correct: true },
      { text: "180°", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Sebuah motor stepper digunakan untuk menggerakkan meja CNC dengan sistem ulir (leadscrew) yang memiliki pitch 4 mm. Jika motor memiliki 200 langkah per putaran, berapa jarak yang ditempuh meja CNC dalam satu langkah?",
    answers: [
      { text: "0,02 mm", correct: true },
      { text: "0,04 mm", correct: false },
      { text: "0,2 mm", correct: false },
      { text: "0,4 mm", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Dalam sebuah printer 3D, motor stepper digunakan untuk menggerakkan sumbu Z dengan ulir pitch 2 mm. Jika motor memiliki 400 langkah per putaran, berapa tinggi yang naik dalam 1 langkah?",
    answers: [
      { text: "0,002 mm", correct: false },
      { text: "0,005 mm", correct: true },
      { text: "0,01 mm", correct: false },
      { text: "0,02 mm", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Jika motor stepper membutuhkan 1000 langkah untuk menyelesaikan satu siklus gerakan, dan PLC mengirimkan pulsa dengan frekuensi 500 Hz, berapa lama waktu yang dibutuhkan untuk menyelesaikan satu siklus?",
    answers: [
      { text: "1 detik", correct: false },
      { text: "2 detik", correct: true },
      { text: "3 detik", correct: false },
      { text: "4 detik", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Sebuah robot manipulator memiliki motor stepper dengan resolusi 0,9° per langkah. Jika motor bergerak sejauh 135°, berapa jumlah langkah yang telah ditempuh?",
    answers: [
      { text: "100 langkah", correct: false },
      { text: "125 langkah", correct: false },
      { text: "150 langkah", correct: true },
      { text: "180 langkah", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Sebuah motor stepper dengan 200 langkah per putaran dihubungkan ke sistem roda gigi dengan perbandingan 1:5 (motor ke output). Berapa banyak langkah yang dibutuhkan agar output roda gigi berputar satu kali?",
    answers: [
      { text: "200 langkah", correct: false },
      { text: "500 langkah", correct: false },
      { text: "1000 langkah", correct: true },
      { text: "1500 langkah", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Berapa banyak putaran yang dilakukan oleh motor stepper jika PLC mengirimkan 600 pulsa ke motor yang memiliki 300 langkah per putaran?",
    answers: [
      { text: "1 putaran", correct: false },
      { text: "2 putaran", correct: true },
      { text: "3 putaran", correct: false },
      { text: "4 putaran", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Fungsi driver dalam sistem kontrol motor stepper adalah...",
    answers: [
      { text: "Menghasilkan sinyal pulsa untuk motor", correct: false },
      { text: "Mengkonversi sinyal kontrol dari PLC menjadi arus yang sesuai untuk menggerakkan motor", correct: true },
      { text: "Mengurangi kecepatan motor stepper", correct: false },
      { text: "Menaikkan tegangan power supply", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Langkah yang harus dilakukan jika motor stepper bergerak tidak sesuai dengan yang diharapkan adalah...",
    answers: [
      { text: "Menambah tegangan power supply", correct: false },
      { text: "Memeriksa koneksi kabel dan parameter program PLC", correct: true },
      { text: "Mengganti motor stepper dengan yang baru", correct: false },
      { text: "Menurunkan frekuensi pulsa dari PLC", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Keuntungan motor stepper dibandingkan motor servo adalah...",
    answers: [
      { text: "Motor stepper memiliki torsi yang lebih besar", correct: false },
      { text: "Motor stepper tidak memerlukan sistem kontrol loop tertutup", correct: true },
      { text: "Motor stepper dapat beroperasi pada kecepatan yang lebih tinggi", correct: false },
      { text: "Motor stepper mengkonsumsi daya yang lebih rendah", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Yang bukan merupakan aplikasi motor stepper dalam industri adalah...",
    answers: [
      { text: "Mesin CNC", correct: false },
      { text: "Robot industri", correct: false },
      { text: "Printer 3D", correct: false },
      { text: "Motor penggerak kipas pendingin", correct: true }
    ],
    difficulty: "mudah"
  },
  {
    question: "Dalam sistem kontrol motor stepper, PLC berfungsi sebagai...",
    answers: [
      { text: "Penghasil pulsa untuk menggerakkan motor stepper", correct: true },
      { text: "Pengubah tegangan AC menjadi DC", correct: false },
      { text: "Pemberi daya ke motor stepper", correct: false },
      { text: "Pengukur posisi motor stepper", correct: false }
    ],
    difficulty: "mudah"
  }
];
