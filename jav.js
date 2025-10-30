document.addEventListener('DOMContentLoaded', function() {
    fetch('header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
});
function openModal(img) {
        const modal = document.getElementById("imageModal");
        const modalImg = document.getElementById("modalImage");
        const caption = document.getElementById("modalCaption");

        modal.style.display = "block";
        modalImg.src = img.src;
        caption.innerHTML = img.alt;
      }

      function closeModal() {
        document.getElementById("imageModal").style.display = "none";
      }

      // Закривати по натисканню ESC
      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
          closeModal();
        }
      });
function openTopic(url) {
        window.open(url, "_blank");
      }