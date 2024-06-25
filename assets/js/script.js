document.addEventListener('DOMContentLoaded', function() {
    let galleryItems = document.querySelectorAll('.gallery-item');
    let modalImage = document.getElementById('modalImage');
    let modalCaption = document.getElementById('modalCaption');
    let galleryModal = new bootstrap.Modal(document.getElementById('galleryModal'));
    let currentIndex = 0;

    galleryItems.forEach(function(item, index) {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            currentIndex = index;
            let imageUrl = this.getAttribute('data-image');
            let caption = this.getAttribute('data-caption');
            modalImage.setAttribute('src', imageUrl);
            modalCaption.textContent = caption;
            galleryModal.show();
        });
    });

    document.getElementById('prevBtn').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        let imageUrl = galleryItems[currentIndex].getAttribute('data-image');
        let caption = galleryItems[currentIndex].getAttribute('data-caption');
        modalImage.setAttribute('src', imageUrl);
        modalCaption.textContent = caption;
    });

    document.getElementById('nextBtn').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        let imageUrl = galleryItems[currentIndex].getAttribute('data-image');
        let caption = galleryItems[currentIndex].getAttribute('data-caption');
        modalImage.setAttribute('src', imageUrl);
        modalCaption.textContent = caption;
    });
});