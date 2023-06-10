window.onload = function () {
  var form = document.forms["submit-pesan"];

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Menghentikan pengiriman formulir secara default

    var emailInput = form.elements["email"];
    var namaInput = form.elements["nama"];
    var pesanInput = form.elements["pesan"];

    // Validasi Email
    if (!validateEmail(emailInput.value)) {
      showAlert("Email harus diisi");
      return;
    }

    // Validasi Nama Lengkap
    if (namaInput.value.trim() === "") {
      showAlert("Nama Lengkap harus diisi");
      return;
    }

    // Validasi Pesan
    if (pesanInput.value.trim() === "") {
      showAlert("Pesan harus diisi");
      return;
    }

    // Menampilkan pesan sukses setelah validasi berhasil
    var alertBox = document.querySelector(".my-alert");
    alertBox.classList.remove("d-none");
    alertBox.classList.remove("alert-danger");
    alertBox.classList.add("alert-success");
    alertBox.innerHTML = '<strong>Terima Kasih!</strong> Kami Telah Menerima Pesan Anda.';

    // Mengosongkan input setelah pengiriman berhasil
    emailInput.value = "";
    namaInput.value = "";
    pesanInput.value = "";
    // Reload halaman saat pertama kali dimuat
  location.reload();
  });

  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function showAlert(message) {
    var alertBox = document.querySelector(".my-alert");
    alertBox.classList.add("show");
    alertBox.classList.remove("alert-success");
    alertBox.classList.add("alert-danger");
    alertBox.innerHTML = '<strong>Error!</strong> ' + message;
  }
};
