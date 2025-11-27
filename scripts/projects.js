function filterProjects(filter) {
  const projectsList = document.querySelectorAll(".all-projects");
  for (let i = 0; i < projectsList.length; i++) {
    projectsList[i].classList.toggle(
      "hidden",
      !projectsList[i].classList.contains(filter),
    );
  }
}

document.querySelectorAll(".project-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const modalId = btn.dataset.modal;
    document.getElementById(modalId).classList.add("show");
  });
});

document.querySelectorAll("[data-close]").forEach((closeBtn) => {
  closeBtn.addEventListener("click", () => {
    closeBtn.closest(".modal").classList.remove("show");
  });
});
