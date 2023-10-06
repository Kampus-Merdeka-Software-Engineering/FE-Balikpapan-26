//next dan prev
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const doctorCarousel = document.querySelector('.doctor-carousel');

prevButton.addEventListener('click', () => {
    doctorCarousel.scrollLeft -= 300; // Ganti angka ini sesuai dengan lebar kartu dokter
});

nextButton.addEventListener('click', () => {
    doctorCarousel.scrollLeft += 300; // Ganti angka ini sesuai dengan lebar kartu dokter
});

// Inisialisasi Swiper
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1, // Jumlah tampilan yang ditampilkan sekaligus
    spaceBetween: 20, // Ruang antara setiap kartu testimoni
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});


// validasi
document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman formulir default

    // Validasi sederhana
    var treatmentName = document.getElementById('treatment-name').value;
    var doctorName = document.getElementById('doctor-name').value;
    var bookingDate = document.getElementById('booking-date').value;
    var complaint = document.getElementById('complaint').value;

    if (!treatmentName || !doctorName || !bookingDate || !complaint) {
        alert('Harap isi semua kolom yaaa');
    } else {
        // Jika formulir valid, mengirimkan data ke server menggunakan AJAX atau mengirimnya langsung ke action URL formulir
        document.getElementById('booking-form').submit();
    }
});


