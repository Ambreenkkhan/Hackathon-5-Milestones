const dForm = document.getElementById("resume-form") as HTMLFormElement;
const dResumeDisplayElement = document.getElementById(
  "resume-display"
) as HTMLDivElement;

dForm.addEventListener("submit", (event: Event) => {
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
<h2><b>Resume<b></h2>
<h3>Personal Information</h3>
<p><b>Name:</b>${name}</p>
<p><b>Email:</b>${email}</p>
<p><b>phone:</b>${phone}</p>

<h3>Education</h3>
<p>${education}</p>

<h3>Projects</h3>
<p>${projects}</p>

<h3>Skills</h3>
<p>${skills}</p>
`;

  if (dResumeDisplayElement) {
    dResumeDisplayElement.innerHTML = resumeHTML;
  }
});
