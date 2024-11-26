let currentIndex = 0;
        const slides = document.getElementById('slides');
        const images = slides.children;

        function showNextSlide() {
            currentIndex = (currentIndex + 1) % images.length;
            slides.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
        }

        setInterval(showNextSlide, 3000);

        function submitIndex() {
            const indexNumber = document.getElementById('indexNumber').value;
            alert('Index Number Submitted: ' + indexNumber);
        }