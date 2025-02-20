document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const popup = document.getElementById('popup');
    const popupHeading = document.getElementById('popup-heading');
    const popupDescription = document.getElementById('popup-description');
    const popupMedia = document.getElementById('popup-media');
    const closeBtn = document.getElementById('close');

    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
            const heading = item.getAttribute('data-heading');
            const description = item.getAttribute('data-description');
            const type = item.getAttribute('data-type');
            const sketchPath = item.getAttribute('data-sketch');
            const pdfLink = item.getAttribute('data-link'); // Get PDF link

            // Clear previous content
            popupMedia.innerHTML = '';

            // Update popup content
            popupHeading.textContent = heading;
            popupDescription.innerHTML = description;

            // Handle different media types
            if (type === 'sketch') {
                // Load p5.js sketch
                loadSketch(sketchPath);
            } else if (type === 'video') {
                // Display video with autoplay and muted attributes
                const videoSrc = item.querySelector('video source').src;
                popupMedia.innerHTML = `
                    <video controls autoplay muted>
                        <source src="${videoSrc}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                `;
            } else if (type === 'image') {
                // Display image
                const imgSrc = item.querySelector('img').src;
                popupMedia.innerHTML = `<img src="${imgSrc}" alt="${heading}">`;
            } else if (type === 'pdf') {
                // Display image with a link to the PDF
                const imgSrc = item.querySelector('img').src;
                popupMedia.innerHTML = `
                    <img src="${imgSrc}" alt="${heading}" style="max-width: 100%; height: auto; border-radius: 5px;">
                    <br>
                    <a href="${pdfLink}" target="_blank" style="color: #007bff; text-decoration: none; font-size: 16px; margin-top: 10px; display: inline-block;">
                        Open PDF in New Tab
                    </a>
                `;
            }

            // Show popup
            popup.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', function () {
        popup.style.display = 'none';
        popupMedia.innerHTML = ''; // Clear the media container
    });

    popup.addEventListener('click', function (event) {
        if (event.target === popup) {
            popup.style.display = 'none';
            popupMedia.innerHTML = ''; // Clear the media container
        }
    });

    // Function to dynamically load the p5.js sketch
    function loadSketch(sketchPath) {
        const script = document.createElement('script');
        script.src = sketchPath;
        script.onload = () => {
            // Initialize the p5.js sketch
            new p5(sketch, popupMedia);
        };
        document.head.appendChild(script);
    }
});

const video = document.getElementById('myVideo');

// Ensure the video is muted
video.muted = true;

// Prevent unmuting
video.addEventListener('volumechange', () => {
    if (!video.muted) {
        video.muted = true;
    }
});