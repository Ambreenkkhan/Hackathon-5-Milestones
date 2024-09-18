var eForm = document.getElementById("resume-form");
var eResumeDisplayElement = document.getElementById("resume-display");
eForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education")
        .value;
    var projects = document.getElementById("projects")
        .value;
    var skills = document.getElementById("skills").value;
    var resumeHTML = "\n<h2><b>Editable Resume<b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n<p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n<p><b>phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n<h3>Education</h3>\n<p contenteditable=\"true\">").concat(education, "</p>\n\n<h3>Projects</h3>\n<p contenteditable=\"true\">").concat(projects, "</p>\n\n<h3>Skills</h3>\n<p contenteditable=\"true\">").concat(skills, "</p>\n");
    if (eResumeDisplayElement) {
        eResumeDisplayElement.innerHTML = resumeHTML;
    }
});
