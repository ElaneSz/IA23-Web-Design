
const btToggleMenu = document.querySelector(".menu-hamburger");
const mainMenu = document.querySelector(".main-menu");
const dialogButtons = document.querySelectorAll(".bt-dialog");
const dialogs = document.querySelectorAll("dialog");
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

btToggleMenu.addEventListener("click", () => {
    document.body.classList.toggle("open-nav");
    toggleHamburgerVisibility();
});

dialogButtons.forEach((bt, index) => {
    bt.addEventListener('click', () => {
        dialogs[index].showModal();
        closeMenu();
    });
});

dialogs.forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    dialog.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", () => {
            dialog.close();
        });
    });
});

mainMenu.addEventListener("click", (event) => {
    event.stopPropagation();
    if (!mainMenu.contains(event.target) && document.body.classList.contains("open-nav")) {
        closeMenu();
    }
});

function toggleHamburgerVisibility() {
    btToggleMenu.classList.toggle("visible", document.body.classList.contains("open-nav"));
}

function closeMenu() {
    document.body.classList.remove("open-nav");
    toggleHamburgerVisibility();
}

darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
        body.classList.add("dark-mode");
        return
    }
    body.classList.remove("dark-mode");
});

/* ============================================ */

function toggleChat() {
    const chatContainer = document.querySelector('.chat-container');
    chatContainer.style.display = chatContainer.style.display === 'none' ? 'flex' : 'none';
}

function sendMessage() {
    const input = document.querySelector('.chat-input input');
    const message = input.value.trim();

    if (message !== '') {
        const chatMessages = document.querySelector('.chat-messages');
        const newMessage = document.createElement('div');
        newMessage.textContent = message;
        chatMessages.appendChild(newMessage);
        // Limpa o campo de entrada
        input.value = '';
    }
}



