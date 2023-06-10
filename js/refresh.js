// Fungsi untuk melakukan refresh halaman
function autoRefresh() {
    // Lakukan refresh hanya jika belum ada status refresh sebelumnya
    if (!localStorage.getItem('refreshed')) {
      localStorage.setItem('refreshed', 'true');
      location.reload();
    }
  }
  
  // Mengatur pembaruan otomatis saat halaman dimuat
  window.onload = autoRefresh;
  