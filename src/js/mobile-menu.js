const refs = {
    openMenuBtn: document.querySelector("[data-menu-open]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
    modal: document.querySelector("[data-modal]"),
    links: document.querySelectorAll("[data-link-mobile-menu]"),
  };
  
  refs.openMenuBtn.addEventListener("click", toggleModal);
  refs.closeMenuBtn.addEventListener("click", toggleModal);
  refs.links.forEach((element) => element.addEventListener("click", toggleModal));
  
  function toggleModal() {
    refs.menu.classList.toggle("is-open");
    refs.modal.classList.toggle("is-hidden");
    refs.menu.classList.toggle("allow-scroll");
    document.body.classList.toggle("not-scroll");
  }