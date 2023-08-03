// for form validation 
const form = document.getElementById('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const interestedSelect = document.getElementById('interested');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Mencegah form submission default

        if (!nameInput.value || !emailInput.value || !interestedSelect.value) {
            alert('Please fill in all fields.');
        } else if (!isValidEmail(emailInput.value)) {
            alert('Please enter a valid email address.');
        } else {
            alert('Data berhasil dikirim. Kami akan segera menghubungimu. :)');
            form.reset();
            history.back();
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // slide picture 
    const images = document.querySelectorAll('.slidePicture img');
    let currentImageIndex = 0;

    function showNextImage() {
        images[currentImageIndex].classList.remove('active');
        images[currentImageIndex].classList.add('inactive');

        currentImageIndex = (currentImageIndex + 1) % images.length;

        images[currentImageIndex].classList.remove('inactive');
        images[currentImageIndex].classList.add('active');
    }

    function startSlideshow() {
        setInterval(showNextImage, 3000); // Ubah gambar setiap 3 detik (3000 milidetik)
    }

    window.onload = startSlideshow;