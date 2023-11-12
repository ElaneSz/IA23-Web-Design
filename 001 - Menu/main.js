
  const btToggleMenu = document.querySelector(".menu-hamburger");
  const mainMenu = document.querySelector(".main-menu");

  btToggleMenu.addEventListener("click", () => {
      document.body.classList.toggle("open-nav");
      toggleHamburgerVisibility();
  });

  const dialogButtons = document.querySelectorAll(".bt-dialog");
  const dialogs = document.querySelectorAll("dialog");

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

  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;
  
  darkModeToggle.addEventListener("change", () => {
      if (darkModeToggle.checked) {
          body.classList.add("dark-mode");
      } else {
          body.classList.remove("dark-mode");
      }
  });
  

