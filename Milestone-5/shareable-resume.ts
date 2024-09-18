const sForm = document.getElementById('resume-form') as HTMLFormElement;
const sResumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;
const shareableLink = document.getElementById('shareable-link') as HTMLDivElement;
const shareableLElement = document.getElementById('shareable-link-url') as HTMLAnchorElement;
const downPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

// Handle form submission
sForm.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // prevent page reload

    // Collect input values
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const projects = (document.getElementById('projects') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Save form data in localStorage with the username as the key
    const resumeData = {
        name,
        email,
        phone,
        education,
        projects,
        skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData));

    // Generate the resume content dynamically
    const resumeHTML = `
        <h2>Editable Resume</h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
        <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
        <p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>

        <h3>Education</h3>
        <p contenteditable="true">${education}</p>

        <h3>Projects</h3>
        <p contenteditable="true">${projects}</p>

        <h3>Skills</h3>
        <p contenteditable="true">${skills}</p>
    `;

    // Display the generated resume
    sResumeDisplayElement.innerHTML = resumeHTML;

    // Generate a shareable URL with the username only
    const shareableURL = `${window.location.origin}?username=${encodeURIComponent(username)}`;

    // Display the shareable link
    shareableLink.style.display = 'block';
    shareableLElement.href = shareableURL;
    shareableLElement.textContent = shareableURL;
});

// PDF download
downPdfButton.addEventListener('click', () => {
    window.print();
});

// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    if (username) {
        // Autofill form if data is found in localStorage
        const savedResumeData = localStorage.getItem(username);

        if (savedResumeData) {
            const resumeData = JSON.parse(savedResumeData);
            (document.getElementById('username') as HTMLInputElement).value = username;
            (document.getElementById('name') as HTMLInputElement).value = resumeData.name;
            (document.getElementById('email') as HTMLInputElement).value = resumeData.email;
            (document.getElementById('phone') as HTMLInputElement).value = resumeData.phone;
            (document.getElementById('education') as HTMLTextAreaElement).value = resumeData.education;
            (document.getElementById('projects') as HTMLTextAreaElement).value = resumeData.projects;
            (document.getElementById('skills') as HTMLTextAreaElement).value = resumeData.skills;
        }
    }
});
