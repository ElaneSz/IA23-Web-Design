const btToggleMenu = document.querySelector(".menu-hamburger")

btToggleMenu.addEventListener("click", () => {
  document.body.classList.toggle("open-nav")
})

const dialog = document.querySelector("dialog")
const btDialog = document.querySelector(".bt-dialog")
const btModal = document.querySelector(".bt-modal")

btDialog.addEventListener('click', () => dialog.show())
btModal.addEventListener('click', () => dialog.showModal())

document.querySelectorAll("dialog button").forEach(
  bt => bt.addEventListener("click", () => dialog.close()
  )
)