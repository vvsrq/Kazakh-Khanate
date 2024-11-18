document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-info');
    const modal = document.getElementById('infoModal');
    const closeButton = document.querySelector('.close-button');
    const modalTitle = document.getElementById('modalTitle');
    const modalText = document.getElementById('modalText');

    toggleButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const card = event.target.closest('.khan-card');
            const title = card.querySelector('h2').textContent;
            const infoText = card.querySelector('.khan-info').innerHTML;

            // Set modal content
            modalTitle.textContent = title;
            modalText.innerHTML = infoText;

            // Open modal
            modal.style.display = 'block';
        });
    });

    // Close the modal when the user clicks on the close button
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close the modal if the user clicks outside the modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
