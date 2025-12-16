const input = document.getElementById('cmd');
const history = document.getElementById('history');
const screen = document.getElementById('screen');

// DATABASE KONTEN
const data = {
    'about': `
>> TENTANG SAYA
----------------------------------------
Nama: [Nama Anda]
Role: Full Stack Developer
Level: 25

Misi: Membangun web yang estetik.
    `,
    'skills': `
>> KEAHLIAN
----------------------------------------
* HTML/CSS      [||||||||||] 90%
* JavaScript    [||||||||  ] 80%
* Python        [|||||||   ] 75%
* Design        [|||||     ] 50%
    `,
    'projects': `
>> PROYEK TERBARU
----------------------------------------
1. RETRO PORTFOLIO
   Link: <a href="" target="_blank">https://github.com/ruby-amk/project-my-portopolio</a>
    `,
    'contact': `
>> HUBUNGI SAYA
----------------------------------------
Email: email@anda.com
GitHub: github.com/username
    `,
    'help': `
>> PERINTAH
----------------------------------------
about, skills, projects, contact, clear
    `
};

// --- SETTINGS & INITIALIZATION ---

// Load Theme Setting
const currentTheme = localStorage.getItem('theme');
if (currentTheme && currentTheme !== 'hacker') {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

// Load Notification Setting (Default ON)
let isNotifyOn = localStorage.getItem('themeNotify') !== 'false';
updateNotifyButtonText();


// --- LOGIKA MENU & DROPDOWN ---

// Toggle Menu Dropdown 
function toggleMenu(menuId) {
    const menu = document.getElementById(menuId);
    const isAlreadyOpen = menu.classList.contains('show');

    closeAllMenus();

    if (!isAlreadyOpen) {
        menu.classList.toggle("show");
    }
}

// Helper: Tutup semua menu dropdown
function closeAllMenus() {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
        dropdowns[i].classList.remove('show');
    }
}

// Event Listener: Klik di luar menu untuk menutup
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        closeAllMenus();
    }
}

// --- LOGIKA PENGATURAN (SETTINGS) ---

function toggleNotifySettings() {
    isNotifyOn = !isNotifyOn;
    localStorage.setItem('themeNotify', isNotifyOn);
    updateNotifyButtonText();

    // Feedback visual (opsional)
    const status = isNotifyOn ? "ENABLED" : "DISABLED";
    // addToHistory(`System: Theme Notification ${status}`); 
    // scrollToBottom();
}

function updateNotifyButtonText() {
    const btn = document.getElementById('notify-toggle');
    if (btn) {
        btn.innerText = isNotifyOn ? "[x] INFO TEMA: ON" : "[ ] INFO TEMA: OFF";
    }
}

// --- LOGIKA GANTI TEMA ---

function selectTheme(themeName) {
    localStorage.setItem('theme', themeName);

    if (themeName === 'hacker') {
        document.documentElement.removeAttribute('data-theme');
    } else {
        document.documentElement.setAttribute('data-theme', themeName);
    }

    // Tampilkan pesan di terminal HANYA jika notifikasi ON
    if (isNotifyOn) {
        addToHistory(`System: Theme set to [${themeName.toUpperCase()}]`);
        scrollToBottom();
    }

    closeAllMenus();
    input.focus();
}


// --- LOGIKA TERMINAL UTAMA ---

input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        const command = input.value.trim().toLowerCase();
        addToHistory(`guest@portfolio:~$ ${input.value}`);
        processCommand(command);
        input.value = '';
        scrollToBottom();
    }
});

function processCommand(cmd) {
    let output = "";
    if (cmd === 'clear') {
        history.innerHTML = '';
        return;
    } else if (data[cmd]) {
        output = data[cmd];
    } else if (cmd === '') {
        return;
    } else {
        output = `<span class="error">Error: Perintah '${cmd}' tidak ditemukan. Ketik 'help'.</span>`;
    }
    typeEffect(output);
}

function addToHistory(text) {
    const div = document.createElement('div');
    div.className = 'command-output';
    div.innerText = text;
    history.appendChild(div);
}

function typeEffect(text) {
    const div = document.createElement('div');
    div.className = 'command-output';
    history.appendChild(div);

    if (text.includes('<a')) {
        div.innerHTML = text;
        scrollToBottom();
    } else {
        let i = 0;
        const speed = 10;
        function type() {
            if (i < text.length) {
                div.innerHTML += text.charAt(i);
                i++;
                scrollToBottom();
                setTimeout(type, speed);
            }
        }
        type();
    }
}

function scrollToBottom() {
    screen.scrollTop = screen.scrollHeight;
}

window.onload = () => {
    input.focus();
};