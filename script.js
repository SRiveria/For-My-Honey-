// Global variables
let currentQuestions = [];
let originalQuestions = []; // Store original questions for reshuffling
let currentMateri = "";
let currentQuestionIndex = 0;
let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let startTime = 0;
let timerInterval = null;
let userAnswers = {};
let showAnswersImmediately = false; // CHANGED: Default to showing answers at the end

// Theme management
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Initialize theme (remove localStorage usage)
function initTheme() {
    // Default to dark theme without localStorage
    body.setAttribute('data-theme', 'dark');
    updateThemeIcon('dark');
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    updateThemeIcon(newTheme);
});

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
});

// Navigation functions - Fixed blinking issue
function showContainer(containerId) {
    const containers = ['menu-container', 'materi-container', 'quiz-container'];
    
    // Hide all containers immediately without transition
    containers.forEach(id => {
        const element = document.getElementById(id);
        if (id !== containerId) {
            element.style.display = 'none';
        }
    });
    
    // Show target container with smooth transition
    const targetContainer = document.getElementById(containerId);
    targetContainer.style.opacity = '0';
    targetContainer.style.display = 'block';
    
    // Force reflow before animation
    targetContainer.offsetHeight;
    
    // Animate in
    setTimeout(() => {
        targetContainer.style.transition = 'opacity 0.3s ease';
        targetContainer.style.opacity = '1';
    }, 10);
}

// MODIFIED: Add full page refresh when going back to home
function backToMenu() {
    // Use window.location.reload() to perform a full page refresh
    window.location.reload();
}

function backToMateri() {
    showContainer('materi-container');
    resetQuizState();
}

// Shuffle array function
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Shuffle answers in a question
function shuffleAnswers(question) {
    const shuffledQuestion = { ...question };
    shuffledQuestion.answers = shuffleArray(question.answers);
    return shuffledQuestion;
}

function loadMateri(mapel) {
    // Reset semua state terkait materi
    resetMateriState();

    // Hapus semua script mapel sebelumnya
    document.querySelectorAll('script[data-mapel]').forEach(script => script.remove());

    // Reset global variables untuk memastikan data sebelumnya terhapus
    originalQuestions = [];
    currentQuestions = [];
    currentMateri = "";

    // Script element dengan timeout untuk memastikan script berhasil diload
    const script = document.createElement('script');
    script.src = `mapel/${mapel}.js`;
    script.setAttribute('data-mapel', mapel);
    script.setAttribute('id', `script-${mapel}`);

    // Tambahkan timeout untuk memeriksa apakah variabel tersedia
    let checkTimeout;
    
    script.onload = () => {
        // Cek materi dan soal dengan interval untuk memberi waktu script dijalankan
        checkTimeout = setTimeout(() => {
            // Cek apakah variabel materi dan soal tersedia
            if (typeof materi !== 'undefined' && typeof soal !== 'undefined') {
                showContainer('materi-container');
                document.getElementById("judul-materi").innerText = materi.judul;
                document.getElementById("isi-materi").innerText = materi.deskripsi;

                originalQuestions = [...soal];
                currentQuestions = shuffleArray(originalQuestions.map(q => shuffleAnswers(q)));
                currentMateri = materi.judul;
                document.getElementById('materi-progress').style.width = '50%';
            } else {
                // Coba cek pada window jika tidak tersedia di scope global
                if (typeof window.materi !== 'undefined' && typeof window.soal !== 'undefined') {
                    showContainer('materi-container');
                    document.getElementById("judul-materi").innerText = window.materi.judul;
                    document.getElementById("isi-materi").innerText = window.materi.deskripsi;

                    originalQuestions = [...window.soal];
                    currentQuestions = shuffleArray(originalQuestions.map(q => shuffleAnswers(q)));
                    currentMateri = window.materi.judul;
                    document.getElementById('materi-progress').style.width = '50%';
                } else {
                    showNotification('Materi untuk mata pelajaran ini belum tersedia.', 'warning');
                    console.error('Tidak bisa menemukan variabel materi dan soal untuk: ' + mapel);
                }
            }
            
            // Hapus script setelah diproses
            if (document.getElementById(`script-${mapel}`)) {
                document.body.removeChild(document.getElementById(`script-${mapel}`));
            }
        }, 100); // Berikan waktu 100ms untuk script dieksekusi
    };

    script.onerror = () => {
        showNotification('Gagal memuat materi. Silakan coba lagi.', 'error');
        console.error('Error loading: mapel/' + mapel + '.js');
        clearTimeout(checkTimeout);
        if (document.getElementById(`script-${mapel}`)) {
            document.body.removeChild(document.getElementById(`script-${mapel}`));
        }
    };

    document.body.appendChild(script);
}

// Fungsi untuk mereset state materi
function resetMateriState() {
    originalQuestions = [];
    currentQuestions = [];
    currentMateri = "";
    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    userAnswers = {};
    clearInterval(timerInterval);
    startTime = 0;
}

// MODIFIED: Update mulaiKuis to set the correct default option
function mulaiKuis() {
    if (currentQuestions.length === 0) {
        showNotification('Tidak ada soal yang tersedia untuk mata pelajaran ini.', 'warning');
        return;
    }
    
    // Set the default radio button to "end" (Di akhir kuis)
    const radioButtons = document.querySelectorAll('input[name="answer-display"]');
    radioButtons.forEach(radio => {
        if (radio.value === 'end') {
            radio.checked = true;
        } else {
            radio.checked = false;
        }
    });
    
    // Tampilkan modal pilihan
    document.getElementById('quiz-options-modal').style.display = 'flex';
}

function startQuizWithOptions() {
    const selectedOption = document.querySelector('input[name="answer-display"]:checked').value;
    showAnswersImmediately = selectedOption === 'immediate';
    
    document.getElementById('quiz-options-modal').style.display = 'none';
    
    // Reshuffle questions and answers
    currentQuestions = shuffleArray(originalQuestions.map(q => shuffleAnswers(q)));
    userAnswers = {}; // Reset jawaban user
    
    showContainer('quiz-container');
    document.getElementById("kuis-title").innerText = currentMateri;
    resetQuizState();
    startTimer();
    showQuestion();
}

// Fungsi untuk mereset state kuis
function resetQuizState() {
    currentQuestionIndex = 0;
    score = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    clearInterval(timerInterval);
    startTime = 0;
}

// Timer functions
function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    document.getElementById('timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function stopTimer() {
    clearInterval(timerInterval);
}

// Perbaikan fungsi showQuestion untuk menampilkan jawaban yang sudah dipilih
function showQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        if (!showAnswersImmediately) {
            showAllAnswers();
        }
        endQuiz();
        return;
    }

    resetAnswerState();
    const currentQuestion = currentQuestions[currentQuestionIndex];

    updateQuizProgress();

    const questionElement = document.getElementById("question");
    questionElement.innerHTML = `
        <div class="question-content">
            <div class="question-text-main">${currentQuestion.question}</div>
        </div>
    `;

    const answerButtons = document.getElementById("answer-buttons");
    answerButtons.innerHTML = "";

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("answer-btn");
        button.dataset.correct = answer.correct;
        button.addEventListener("click", selectAnswer);
        
        // Tandai jawaban yang sudah dipilih sebelumnya
        if (userAnswers[currentQuestionIndex] && 
            userAnswers[currentQuestionIndex].selected === answer.text) {
            
            if (showAnswersImmediately) {
                // Jika mode jawaban langsung, tampilkan benar/salah
                if (userAnswers[currentQuestionIndex].isCorrect) {
                    button.classList.add("correct");
                } else {
                    button.classList.add("incorrect");
                }
                
                // Dalam mode jawaban langsung, tampilkan semua jawaban yang benar dan disable tombol
                Array.from(currentQuestion.answers).forEach((ans, i) => {
                    if (ans.correct) {
                        if (i !== index) {
                            // Tandai jawaban benar lainnya saat nanti dibuat
                            setTimeout(() => {
                                const correctButton = answerButtons.children[i];
                                if (correctButton) correctButton.classList.add("correct");
                            }, 0);
                        }
                    }
                });
                
                // Disable semua tombol dalam mode jawaban langsung jika sudah dijawab
                setTimeout(() => {
                    Array.from(answerButtons.children).forEach(btn => {
                        btn.disabled = true;
                    });
                }, 0);
            } else {
                // Jika mode jawaban di akhir, hanya tandai sebagai dipilih
                button.classList.add("selected");
            }
        }
        
        answerButtons.appendChild(button);
    });

    // Tampilkan tombol next jika sudah ada jawaban
    if (userAnswers[currentQuestionIndex]) {
        document.getElementById("next-btn").style.display = "inline-flex";
    }

    const difficultyDiv = document.getElementById("difficulty");
    difficultyDiv.innerHTML = `
        <div class="difficulty-indicator">
            <i class="fas fa-chart-bar"></i>
            <span>Kesulitan: ${getDifficultyText(currentQuestion.difficulty || 'medium')}</span>
        </div>
    `;

    const prevBtn = document.getElementById("prev-btn");
    prevBtn.style.display = currentQuestionIndex > 0 ? "inline-flex" : "none";
    document.getElementById('score').textContent = `Skor: ${score}`;
}

// Get difficulty text with proper formatting
function getDifficultyText(difficulty) {
    const difficultyMap = {
        'easy': 'Mudah',
        'medium': 'Sedang',
        'hard': 'susah',
        'mudah': 'Mudah',
        'sedang': 'Sedang',
        'susah': 'Susah'
    };
    return difficultyMap[difficulty.toLowerCase()] || 'Sedang';
}

function updateQuizProgress() {
    const progress = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    document.getElementById('quiz-progress').style.width = `${progress}%`;
    document.getElementById('progress-text').textContent = 
        `Pertanyaan ${currentQuestionIndex + 1} dari ${currentQuestions.length}`;
}

function resetAnswerState() {
    document.getElementById("next-btn").style.display = "none";
    const answerButtons = document.getElementById("answer-buttons");
    while (answerButtons.firstChild) {
        answerButtons.firstChild.remove();
    }
}

// Perbaikan fungsi selectAnswer
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    
    // Reset status semua tombol jawaban terlebih dahulu
    Array.from(document.getElementById("answer-buttons").children).forEach(button => {
        button.classList.remove("selected", "correct", "incorrect");
        button.disabled = false;
    });
    
    // Simpan jawaban user
    userAnswers[currentQuestionIndex] = {
        selected: selectedBtn.innerText,
        isCorrect: isCorrect
    };
    
    if (showAnswersImmediately) {
        // Mode tampilkan jawaban langsung
        if (isCorrect) {
            correctAnswers++;
            score += 10;
            selectedBtn.classList.add("correct");
        } else {
            wrongAnswers++;
            selectedBtn.classList.add("incorrect");
        }
        
        // Tampilkan jawaban yang benar dan disable semua tombol
        Array.from(document.getElementById("answer-buttons").children).forEach(button => {
            button.disabled = true;
            if (button.dataset.correct === "true") {
                button.classList.add("correct");
            }
        });
    } else {
        // Mode tampilkan jawaban di akhir - hanya tandai yang dipilih
        selectedBtn.classList.add("selected");
        
        // Jangan disable tombol agar user bisa ganti jawaban
        Array.from(document.getElementById("answer-buttons").children).forEach(button => {
            // Tidak perlu disable buttons
        });
    }
    
    // Animasi dan scroll
    selectedBtn.style.transform = "scale(0.95)";
    setTimeout(() => {
        selectedBtn.style.transform = "scale(1)";
        // Scroll ke tombol selanjutnya
        document.getElementById("next-btn").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 150);
    
    // Tampilkan tombol selanjutnya
    document.getElementById("next-btn").style.display = "inline-flex";
    
    // Update skor hanya untuk mode jawaban langsung
    if (showAnswersImmediately) {
        document.getElementById('score').textContent = `Skor: ${score}`;
    }
}

// Fungsi baru untuk menampilkan semua jawaban di akhir (jika opsi dipilih)
function showAllAnswers() {
    // Reset counters to ensure accurate calculation
    correctAnswers = 0;
    wrongAnswers = 0;
    score = 0;
    
    for (let i = 0; i < currentQuestions.length; i++) {
        if (userAnswers[i]) {
            const userAnswer = userAnswers[i];
            
            if (userAnswer.isCorrect) {
                score += 10;
                correctAnswers++;
            } else {
                wrongAnswers++;
            }
        } else {
            // Count unanswered questions as wrong
            wrongAnswers++;
        }
    }
    
    // Update the score display
    document.getElementById('score').textContent = `Skor: ${score}`;
}

// Event listeners
document.getElementById("next-btn").addEventListener("click", () => {
    currentQuestionIndex++;
    showQuestion();
});

// Navigasi ke soal sebelumnya
document.getElementById("prev-btn").addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
});

// End quiz and show results
function endQuiz() {
    stopTimer();
    const totalTime = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    const percentage = Math.round((correctAnswers / currentQuestions.length) * 100);
    
    // Update result modal
    document.getElementById('correct-count').textContent = correctAnswers;
    document.getElementById('wrong-count').textContent = wrongAnswers;
    document.getElementById('final-score').textContent = `${percentage}%`;
    document.getElementById('total-time').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Show results modal
    document.getElementById('results-modal').style.display = 'flex';
}

function restartQuiz() {
    document.getElementById('results-modal').style.display = 'none';
    mulaiKuis(); // This will reshuffle questions and answers
}

// Add smooth scrolling and animations
function addSmoothTransitions() {
    const style = document.createElement('style');
    style.textContent = `
        .container > div {
            transition: opacity 0.3s ease;
        }
        
        .fade-in {
            animation: fadeInUp 0.5s ease-out;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .bounce {
            animation: bounce 0.6s ease;
        }
        
        @keyframes bounce {
            0%, 20%, 60%, 100% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(-10px);
            }
            80% {
                transform: translateY(-5px);
            }
        }
        
        .question-content {
            padding: 0;
        }
        
        .question-text-main {
            font-size: 1.2rem;
            font-weight: 500;
            margin-bottom: 1rem;
            line-height: 1.6;
        }
        
        .difficulty-indicator {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            background: var(--bg-secondary);
            border: 1px solid var(--border-color);
            border-radius: 8px;
            font-size: 0.9rem;
            color: var(--text-secondary);
            margin-bottom: 1rem;
            margin-left: 1rem;
            width: fit-content;
        }
        
        .difficulty-indicator i {
            color: var(--accent-color);
        }
    `;
    document.head.appendChild(style);
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    addSmoothTransitions();
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    // Only handle keyboard events when quiz is active and not in a modal
    const quizContainerVisible = document.getElementById('quiz-container').style.display === 'block';
    const modalVisible = document.getElementById('quiz-options-modal').style.display === 'flex' || 
                         document.getElementById('results-modal').style.display === 'flex';
    
    if (quizContainerVisible && !modalVisible) {
        const answerButtons = document.querySelectorAll('.answer-btn:not(:disabled)');
        const nextButton = document.getElementById('next-btn');
        
        // Number keys 1-4 for answer selection
        if (e.key >= '1' && e.key <= '4') {
            const index = parseInt(e.key) - 1;
            if (answerButtons[index]) {
                e.preventDefault(); // Prevent default action
                answerButtons[index].click();
            }
        }
        
        // Enter or Space for next question
        if ((e.key === 'Enter' || e.key === ' ') && nextButton.style.display !== 'none') {
            e.preventDefault();
            nextButton.click();
        }
        
        // Escape to go back - with confirmation
        if (e.key === 'Escape') {
            e.preventDefault();
            if (confirm('Kembali ke materi? Progres kuis akan hilang.')) {
                backToMateri();
            }
        }
    }
});

// Add touch/swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 100; // Increased threshold for more intentional swipes
    const diff = touchStartX - touchEndX;
    
    // Only process swipes that are significant and intentional
    if (Math.abs(diff) > swipeThreshold) {
        // Make sure we're not in the middle of answering a question
        const answerButtonsDisabled = document.querySelectorAll('.answer-btn:disabled').length > 0;
        const nextButtonVisible = document.getElementById('next-btn').style.display !== 'none';
        
        // Swipe left - next question (if available)
        if (diff > 0 && nextButtonVisible) {
            document.getElementById('next-btn').click();
        }
        // Swipe right - go back (only if not actively answering)
        else if (diff < 0 && !answerButtonsDisabled) {
            // Add confirmation for back navigation to prevent accidental navigation
            if (document.getElementById('quiz-container').style.display === 'block') {
                if (confirm('Kembali ke materi? Progres kuis akan hilang.')) {
                    backToMateri();
                }
            } else if (document.getElementById('materi-container').style.display === 'block') {
                backToMenu();
            }
        }
    }
}

// Performance optimization - improved caching without localStorage
const scriptCache = new Map();

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 9999;
        max-width: 300px;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    `;
    
    switch (type) {
        case 'success':
            notification.style.background = 'var(--success-color)';
            break;
        case 'warning':
            notification.style.background = 'var(--accent-color)';
            break;
        case 'error':
            notification.style.background = 'var(--danger-color)';
            break;
        default:
            notification.style.background = 'var(--primary-color)';
    }
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add notification animations
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyles);