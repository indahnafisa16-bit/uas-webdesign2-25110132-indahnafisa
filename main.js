// ===== main.js — fitur interaktif tambahan =====

// 1) Validasi form kontak (Bootstrap custom validation)
(function () {
  'use strict';
  var forms = document.querySelectorAll('.needs-validation');
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener('submit', function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        event.preventDefault();
        var alertBox = document.getElementById('formAlert');
        if (alertBox) {
          alertBox.classList.remove('d-none');
          alertBox.innerHTML = '<i class="fas fa-circle-check mr-2"></i>Pesan terkirim! Kami akan segera menghubungi Anda.';
          form.reset();
          form.classList.remove('was-validated');
        }
      }
      form.classList.add('was-validated');
    }, false);
  });
})();

// 2) Tombol kembali ke atas, muncul setelah scroll
window.addEventListener('scroll', function () {
  var btn = document.getElementById('btnTop');
  if (!btn) return;
  btn.style.display = window.scrollY > 400 ? 'block' : 'none';
});
document.addEventListener('click', function (e) {
  if (e.target.closest && e.target.closest('#btnTop')) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

// 3) Isi konten modal produk secara dinamis saat tombol "Lihat Detail" / kartu diklik
document.addEventListener('DOMContentLoaded', function () {
  var modal = document.getElementById('modalProduk');
  if (!modal) return;
  modal.addEventListener('show.bs.modal', function (event) {
    handleModalFill(event);
  });
  // fallback untuk Bootstrap 4 (event jquery)
  if (window.$) {
    $('#modalProduk').on('show.bs.modal', handleModalFill);
  }
  function handleModalFill(event) {
    var trigger = event.relatedTarget;
    if (!trigger) return;
    var nama = trigger.getAttribute('data-nama');
    var deskripsi = trigger.getAttribute('data-deskripsi');
    var harga = trigger.getAttribute('data-harga');
    var foto = trigger.getAttribute('data-foto');
    var level = trigger.getAttribute('data-level');

    modal.querySelector('.modal-title').textContent = nama;
    modal.querySelector('.modal-deskripsi').textContent = deskripsi;
    modal.querySelector('.modal-harga').textContent = harga;
    modal.querySelector('.foto-modal').style.backgroundImage = "url('" + foto + "')";
    modal.querySelector('.modal-level').textContent = level;
  }
});