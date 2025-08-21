document.addEventListener('DOMContentLoaded', () => {
            // Select only the interactive skill cards for the event listeners
            const interactiveSkillItems = document.querySelectorAll('.interactive-skill-card');
            const modal = document.getElementById('skillModal');
            const modalTitle = document.getElementById('modal-title');
            const modalDescription = document.getElementById('modal-description');
            const closeBtn = document.querySelector('.close-btn');

            // Function to show the modal
            function showModal(title, description) {
                modalTitle.textContent = title;
                modalDescription.textContent = description;
                modal.style.display = 'flex';
                document.body.classList.add('modal-open');
            }

            // Function to close the modal
            function closeModal() {
                modal.style.display = 'none';
                document.body.classList.remove('modal-open');
            }

            // Add click event listeners to interactive skill cards and their buttons
            interactiveSkillItems.forEach(item => {
                // This handles a click on the card itself
                item.addEventListener('click', (event) => {
                    // Prevent button click from bubbling up and triggering the parent div
                    if (event.target.tagName === 'BUTTON') {
                        return;
                    }
                    const title = item.getAttribute('data-skill-title');
                    const description = item.getAttribute('data-skill-description');
                    showModal(title, description);
                });

                // This is for the "View experience" button specifically
                const viewBtn = item.querySelector('.view-exp-btn');
                if (viewBtn) { 
                    viewBtn.addEventListener('click', () => {
                        const title = item.getAttribute('data-skill-title');
                        const description = item.getAttribute('data-skill-description');
                        showModal(title, description);
                    });
                }
            });

            // Close the modal when the close button is clicked
            if (closeBtn) { 
                closeBtn.addEventListener('click', closeModal);
            }

            // Close the modal when the user clicks anywhere outside of the modal content
            window.addEventListener('click', (event) => {
                if (event.target == modal) {
                    closeModal();
                }
            });
        });