// Get all the skill elements and the skill description container
const skills = document.querySelectorAll('.skill');
const skillDescriptionContainer = document.getElementById('skill-description');

// Add a click event listener to each skill
skills.forEach(skill => {
    const skillText = skill.querySelector('.skill-text');
    const skillDesc = skill.querySelector('.hidden'); // The description (hidden) is the second child

    skillText.addEventListener('click', () => {
        // Clear any previously shown description
        skillDescriptionContainer.innerHTML = '';

        // Show the new description content
        skillDescriptionContainer.innerHTML = skillDesc.innerHTML; // Copy innerHTML from the hidden paragraph

        // Optionally, add a class or styling to highlight the clicked skill
        document.querySelectorAll('.skill-text').forEach(text => {
            text.classList.remove('active'); // Remove active class from all skill-text elements
        });

        skillText.classList.add('active'); // Add active class to clicked skill-text
    });
});
