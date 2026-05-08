document.addEventListener('DOMContentLoaded', function () {
  console.log('Javascript loaded successfully!');

  // Per ogni link con dropdown-toggle
  document.querySelectorAll('.navbar .dropdown-toggle').forEach(function (el) {
    el.addEventListener('touchstart', function (e) {
      var parent = el.parentElement;
      if (!parent.classList.contains('show')) {
        // Chiudi altri menu aperti
        document.querySelectorAll('.navbar .dropdown.show').forEach(function (open) {
          if (open !== parent) open.classList.remove('show');
        });
        parent.classList.add('show');
        e.preventDefault(); // Previeni il click sul link al primo tap
      }
      // Al secondo tap il link funzionerà normalmente
    });
    // Chiudi il menu quando si clicca fuori
    document.addEventListener('touchstart', function (event) {
      if (!el.parentElement.contains(event.target)) {
        el.parentElement.classList.remove('show');
      }
    });
  });
});


window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  preloader.style.opacity = "0";
  setTimeout(() => {
    preloader.style.display = "none";
  }, 500); // aspetta la transizione
});