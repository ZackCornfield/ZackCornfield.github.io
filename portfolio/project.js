document.addEventListener('DOMContentLoaded', () => {
    const trailerContainer = document.getElementById('trailer-container');
    const trailerVideo = document.getElementById('trailer-video');

    function checkVideoSource() {
        const sources = trailerVideo.getElementsByTagName('source');
        let hasValidSource = false;

        for (let source of sources) {
            const src = source.src.trim();
            // Check if src is not empty and ends with a valid video file extension
            if (src && /\.(mp4|webm|ogg)$/i.test(src)) {
                hasValidSource = true;
                break;
            }
        }

        trailerContainer.style.display = hasValidSource ? 'block' : 'none';
    }

    // Run the check on page load
    checkVideoSource();
});
