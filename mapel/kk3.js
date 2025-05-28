const materi = {
  judul: "KK3: Teknik Elektronika Industri",
  deskripsi: "Materi ini mencakup konsep dasar elektronika industri, komponen elektronika daya, sistem kendali, otomasi industri, dan instrumentasi elektronik."
};

const soal = [
  {
    question: "Komponen elektronika yang berfungsi untuk mengubah arus AC menjadi DC adalah:",
    answers: [
      { text: "Transistor", correct: false },
      { text: "Dioda", correct: true },
      { text: "Kapasitor", correct: false },
      { text: "Resistor", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Jenis sensor yang tepat untuk mengukur suhu dalam proses industri adalah:",
    answers: [
      { text: "Strain gauge", correct: false },
      { text: "Photodiode", correct: false },
      { text: "Thermocouple", correct: true },
      { text: "Proximity sensor", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Dalam sistem PLC, bagian yang berfungsi sebagai penghubung antara sinyal input dari sensor dengan CPU adalah:",
    answers: [
      { text: "Input module", correct: true },
      { text: "Memory", correct: false },
      { text: "Output module", correct: false },
      { text: "Power supply", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Komponen elektronika daya yang digunakan untuk mengontrol arus yang besar dengan sinyal kontrol kecil adalah:",
    answers: [
      { text: "Dioda", correct: false },
      { text: "MOSFET", correct: true },
      { text: "Kapasitor", correct: false },
      { text: "Resistor", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Prinsip kerja thyristor dalam rangkaian elektronika daya adalah:",
    answers: [
      { text: "Dapat mengalirkan arus dalam satu arah setelah diberi trigger dan akan terus menghantar sampai arus turun di bawah holding current", correct: true },
      { text: "Dapat mengalirkan arus dalam dua arah setelah diberi trigger", correct: false },
      { text: "Mengalirkan arus secara otomatis tanpa perlu trigger", correct: false },
      { text: "Hanya mengalirkan arus ketika gate diberi tegangan secara terus menerus", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Dalam sistem kontrol loop tertutup, fungsi utama dari feedback adalah:",
    answers: [
      { text: "Memperkuat sinyal input", correct: false },
      { text: "Mempercepat respon sistem", correct: false },
      { text: "Mengoreksi perbedaan antara output aktual dengan output yang diinginkan", correct: true },
      { text: "Mengurangi konsumsi daya sistem", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Jenis penguat yang biasa digunakan dalam instrumentasi elektronik karena memiliki impedansi input tinggi adalah:",
    answers: [
      { text: "Penguat arus", correct: false },
      { text: "Penguat operasional (Op-Amp)", correct: true },
      { text: "Penguat push-pull", correct: false },
      { text: "Penguat transistor", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Dalam sistem kendali PID, komponen 'D' berfungsi untuk:",
    answers: [
      { text: "Mengatasi error steady-state", correct: false },
      { text: "Meningkatkan kecepatan respon sistem", correct: true },
      { text: "Mengurangi osilasi sistem", correct: false },
      { text: "Menjaga kestabilan sistem pada setpoint", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Protokol komunikasi industri yang menggunakan metode master-slave dengan transmisi serial adalah:",
    answers: [
      { text: "Ethernet", correct: false },
      { text: "USB", correct: false },
      { text: "Modbus", correct: true },
      { text: "Bluetooth", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Jenis inverter yang menghasilkan gelombang output paling mendekati sinusoidal murni adalah:",
    answers: [
      { text: "Square wave inverter", correct: false },
      { text: "Modified sine wave inverter", correct: false },
      { text: "Pure sine wave inverter", correct: true },
      { text: "Stepped wave inverter", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Dalam sistem pneumatik industri, komponen yang mengubah sinyal elektrik menjadi gerakan mekanis adalah:",
    answers: [
      { text: "Kompresor", correct: false },
      { text: "Silinder pneumatik", correct: false },
      { text: "Solenoid valve", correct: true },
      { text: "Pressure regulator", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Topologi jaringan yang sering digunakan dalam sistem SCADA karena ketahanannya terhadap kegagalan adalah:",
    answers: [
      { text: "Star", correct: false },
      { text: "Bus", correct: false },
      { text: "Ring", correct: true },
      { text: "Line", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Komponen yang berfungsi untuk menyimpan energi dalam bentuk medan magnet pada rangkaian elektronika adalah:",
    answers: [
      { text: "Resistor", correct: false },
      { text: "Kapasitor", correct: false },
      { text: "Induktor", correct: true },
      { text: "Dioda", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Metode kontrol kecepatan motor DC yang paling efisien adalah:",
    answers: [
      { text: "Kontrol tegangan", correct: false },
      { text: "Pulse Width Modulation (PWM)", correct: true },
      { text: "Resistor seri", correct: false },
      { text: "Kontrol medan", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Jenis rangkaian filter yang memiliki karakteristik dapat melewatkan frekuensi di atas frekuensi cut-off adalah:",
    answers: [
      { text: "Low-pass filter", correct: false },
      { text: "High-pass filter", correct: true },
      { text: "Band-pass filter", correct: false },
      { text: "Band-stop filter", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Dalam sistem otomasi industri, Human Machine Interface (HMI) berfungsi sebagai:",
    answers: [
      { text: "Pengontrol utama proses industri", correct: false },
      { text: "Antarmuka antara operator dengan sistem kontrol", correct: true },
      { text: "Sensor untuk mendeteksi keberadaan manusia", correct: false },
      { text: "Sistem keamanan untuk mencegah interferensi manusia", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Keunggulan IGBT dibandingkan dengan MOSFET dalam aplikasi elektronika daya adalah:",
    answers: [
      { text: "Kemampuan switching yang lebih cepat", correct: false },
      { text: "Kemampuan menangani arus yang lebih besar", correct: true },
      { text: "Konsumsi daya yang lebih rendah", correct: false },
      { text: "Harga yang lebih murah", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Prinsip kerja dari sensor ultrasonik dalam aplikasi industri adalah:",
    answers: [
      { text: "Mengukur perubahan resistansi akibat perubahan suhu", correct: false },
      { text: "Menghasilkan sinyal listrik saat terkena cahaya", correct: false },
      { text: "Mengukur jarak dengan menghitung waktu pantul gelombang suara", correct: true },
      { text: "Mendeteksi medan magnet dari objek logam", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Jenis kontaktor yang umum digunakan dalam sistem kendali motor industri adalah:",
    answers: [
      { text: "Reed switch", correct: false },
      { text: "Toggle switch", correct: false },
      { text: "Magnetic contactor", correct: true },
      { text: "DIP switch", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Dalam rangkaian elektronika digital, gerbang logika yang menghasilkan output '1' hanya jika semua inputnya bernilai '1' adalah:",
    answers: [
      { text: "Gerbang OR", correct: false },
      { text: "Gerbang AND", correct: true },
      { text: "Gerbang NOT", correct: false },
      { text: "Gerbang XOR", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Metode yang digunakan untuk mengontrol starting motor induksi 3 fasa agar arus starting tidak terlalu besar adalah:",
    answers: [
      { text: "Direct On-Line (DOL)", correct: false },
      { text: "Star-Delta Starting", correct: true },
      { text: "Soft Starting dengan resistor", correct: false },
      { text: "Menggunakan kapasitor starting", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Fungsi dari Uninterruptible Power Supply (UPS) dalam sistem industri adalah:",
    answers: [
      { text: "Menstabilkan tegangan input", correct: false },
      { text: "Menyediakan daya cadangan saat listrik utama gagal", correct: true },
      { text: "Mengubah tegangan AC menjadi DC", correct: false },
      { text: "Meningkatkan efisiensi sistem kelistrikan", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Prinsip kerja dari Variable Frequency Drive (VFD) dalam mengontrol kecepatan motor AC adalah:",
    answers: [
      { text: "Mengubah tegangan input motor", correct: false },
      { text: "Mengubah jumlah kutub motor", correct: false },
      { text: "Mengubah frekuensi tegangan yang diberikan ke motor", correct: true },
      { text: "Mengubah resistansi belitan motor", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Jenis sensor yang tepat untuk mendeteksi keberadaan objek logam dalam sistem otomasi industri adalah:",
    answers: [
      { text: "Sensor ultrasonik", correct: false },
      { text: "Sensor kapasitif", correct: false },
      { text: "Sensor induktif", correct: true },
      { text: "Sensor photoelectric", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Dalam sistem instrumentasi, transmitter berfungsi untuk:",
    answers: [
      { text: "Mengubah sinyal fisik menjadi sinyal listrik", correct: false },
      { text: "Mengubah sinyal sensor menjadi sinyal standar yang dapat ditransmisikan", correct: true },
      { text: "Mengolah data dari berbagai sensor", correct: false },
      { text: "Menampilkan hasil pengukuran", correct: false }
    ],
    difficulty: "sedang"
  },
  {
    question: "Dalam diagram ladder PLC, simbol normally open (NO) ditunjukkan dengan:",
    answers: [
      { text: "-| |-", correct: true },
      { text: "-|/|-", correct: false },
      { text: "-( )-", correct: false },
      { text: "-|P|-", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Komponen elektronika daya yang biasa digunakan dalam rangkaian chopper DC-DC adalah:",
    answers: [
      { text: "Dioda", correct: false },
      { text: "SCR", correct: false },
      { text: "MOSFET atau IGBT", correct: true },
      { text: "DIAC", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Standar sinyal arus yang umum digunakan dalam sistem instrumentasi industri adalah:",
    answers: [
      { text: "0-5 mA", correct: false },
      { text: "4-20 mA", correct: true },
      { text: "0-10 mA", correct: false },
      { text: "1-5 mA", correct: false }
    ],
    difficulty: "mudah"
  },
  {
    question: "Dalam sistem SCADA, RTU (Remote Terminal Unit) berfungsi untuk:",
    answers: [
      { text: "Mengontrol proses secara langsung", correct: false },
      { text: "Menampilkan data pada operator", correct: false },
      { text: "Mengumpulkan data dari sensor dan mengirimkannya ke master station", correct: true },
      { text: "Menyimpan data historis proses", correct: false }
    ],
    difficulty: "susah"
  },
  {
    question: "Jenis motor yang paling tepat digunakan untuk aplikasi yang membutuhkan kontrol posisi yang presisi adalah:",
    answers: [
      { text: "Motor induksi", correct: false },
      { text: "Motor universal", correct: false },
      { text: "Motor servo", correct: true },
      { text: "Motor sinkron", correct: false }
    ],
    difficulty: "sedang"
  }
];
