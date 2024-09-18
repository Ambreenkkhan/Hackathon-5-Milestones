const eForm = document.getElementById("resume-form") as HTMLFormElement;
const eResumeDisplayElement = document.getElementById(
  "resume-display"
) as HTMLDivElement;

eForm.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;
  const education = (document.getElementById("education") as HTMLInputElement)
    .value;
  const projects = (document.getElementById("projects") as HTMLInputElement)
    .value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value;

  const resumeHTML = `
<h2><b>Editable Resume<b></h2>
<h3>Personal Information</h3>
<p><b>Name:</b><span contenteditable="true">${name}</span></p>
<p><b>Email:</b><span contenteditable="true">${email}</span></p>
<p><b>phone:</b><span contenteditable="true">${phone}</span></p>

<h3>Education</h3>
<p contenteditable="true">${education}</p>

<h3>Projects</h3>
<p contenteditable="true">${projects}</p>

<h3>Skills</h3>
<p contenteditable="true">${skills}</p>
`;

  if (eResumeDisplayElement) {
    eResumeDisplayElement.innerHTML = resumeHTML;
  }
});
