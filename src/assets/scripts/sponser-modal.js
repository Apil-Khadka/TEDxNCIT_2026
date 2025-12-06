export function openModal(id) {
  const modal = document.getElementById(`modal-${id}`);
  if (modal) modal.classList.remove("hidden");
}

export function closeModal(id) {
  const modal = document.getElementById(`modal-${id}`);
  if (modal) modal.classList.add("hidden");
}

window.openModal = openModal;
window.closeModal = closeModal;
