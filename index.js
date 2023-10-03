// Script untuk mengaktifkan fungsi next dan prev
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
