// Definição de usuários e senhas
const users = {
    "pedro": "senhaPedro", // Adicione quantos usuários forem necessários
    "maria": "senhaMaria"
};

const loginScreen = document.getElementById('login-screen');
const registerScreen = document.getElementById('register-screen');
const mainContent = document.getElementById('main-content');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const registerBtn = document.getElementById('register-btn');
const backToLoginBtn = document.getElementById('back-to-login-btn');
const loginError = document.getElementById('login-error');
const registerError = document.getElementById('register-error');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const newUsernameInput = document.getElementById('new-username');
const newPasswordInput = document.getElementById('new-password');

// Função para login
function login(username, password) {
    if (users[username] && users[username] === password) {
        loginScreen.style.display = 'none';
        mainContent.style.display = 'block';
    } else {
        loginError.style.display = 'block';
    }
}

// Função para cadastro
function register(username, password) {
    if (users[username]) {
        registerError.style.display = 'block'; // Usuário já existe
    } else {
        users[username] = password;
        registerScreen.style.display = 'none';
        loginScreen.style.display = 'block';
    }
}

// Eventos de login
loginBtn.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    login(username, password);
});

// Eventos de cadastro
registerBtn.addEventListener('click', () => {
    const username = newUsernameInput.value.trim();
    const password = newPasswordInput.value.trim();
    register(username, password);
});

// Voltar para a tela de login
backToLoginBtn.addEventListener('click', () => {
    registerScreen.style.display = 'none';
    loginScreen.style.display = 'block';
});

// Exibir a tela de cadastro
document.getElementById('register-link').addEventListener('click', () => {
    loginScreen.style.display = 'none';
    registerScreen.style.display = 'block';
});

// Evento de logout
logoutBtn.addEventListener('click', () => {
    usernameInput.value = '';
    passwordInput.value = '';
    loginScreen.style.display = 'block';
    mainContent.style.display = 'none';
});