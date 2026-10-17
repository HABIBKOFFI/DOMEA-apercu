'use strict';
// Aucune authentification, API, écriture de données, mesure d’audience ou stockage.
(() => {
  const dialog = document.getElementById('preview-info');
  const closeButton = document.getElementById('preview-close');
  if (!dialog || !closeButton) return;
  let trigger = null;
  document.querySelectorAll('[data-preview-open]').forEach((button) => {
    button.addEventListener('click', () => {
      trigger = button;
      if (typeof dialog.showModal === 'function') dialog.showModal();
      else window.alert('Aperçu de DOMEA : connexion et données indisponibles. Aucun compte ne peut être utilisé ou créé ici.');
    });
  });
  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    if (trigger) trigger.focus();
  });
})();
