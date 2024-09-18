
const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement;
  const skillsSection = document.getElementById('skills') as HTMLElement;

  toggleSkillsButton.addEventListener('click', () => {
      if (skillsSection.style.display === 'none') {
          skillsSection.style.display = 'block';
          toggleSkillsButton.textContent = 'Hide Skills';
      } else {
          skillsSection.style.display = 'none';
          toggleSkillsButton.textContent = 'Show Skills';
      }
  });
//});